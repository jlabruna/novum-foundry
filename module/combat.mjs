import {
  ammunitionCost,
  availableFireModes,
  normaliseDamageFormula,
  resolveAttack,
  resolveMeleeDamage,
  resolveRangedDamage,
  transformWeaponDamage,
  weaponAblation
} from "./combat-engine.mjs";
import { NOVUM } from "./config.mjs";
import { hasAdjacentHostile, measureAttackRange, measureAttackTargets, titleCaseBand } from "./range.mjs";

function esc(value) {
  return foundry.utils.escapeHTML(String(value ?? ""));
}

function option(value, label, selected = false, disabled = false) {
  return `<option value="${esc(value)}"${selected ? " selected" : ""}${disabled ? " disabled" : ""}>${esc(label)}</option>`;
}

function getNaturalD20(roll) {
  const die = roll.dice?.find(term => Number(term.faces) === 20);
  const active = die?.results?.find(result => result.active !== false);
  return Number(active?.result ?? 0);
}

function getWeaponAttackParts(actor, weapon) {
  const attributeKey = weapon.system.attribute;
  const skillKey = weapon.system.skill;
  return {
    attributeKey,
    attributeLabel: NOVUM.attributes[attributeKey] ?? attributeKey,
    attribute: Number(actor.system.attributes?.[attributeKey]?.value ?? 0),
    skillKey,
    skillLabel: NOVUM.skills[skillKey] ?? skillKey,
    skill: Number(actor.system.skills?.[skillKey]?.value ?? 0)
  };
}

function buildRangeOptions(weapon, measurement) {
  const autoLabel = measurement.dv
    ? `Automatic — ${titleCaseBand(measurement.band)} ${measurement.distance}m (DV ${measurement.dv})`
    : measurement.beyond
      ? `Automatic — ${measurement.distance}m is beyond this weapon profile`
      : "Automatic — no token range available";
  const rows = [option("auto", autoLabel, Boolean(measurement.dv), !measurement.dv)];
  for (const band of NOVUM.rangeBands) {
    const data = weapon.system.range[band];
    if (Number(data?.max) <= 0) continue;
    rows.push(option(band, `${titleCaseBand(band)} — to ${data.max}m (DV ${data.dv})`, !measurement.dv && band === "close"));
  }
  if (weapon.system.range.extreme?.enabled) {
    const data = weapon.system.range.extreme;
    rows.push(option("extreme", `Extreme — to ${data.max}m (DV ${data.dv})`));
  }
  rows.push(option("manual", "Manual DV"));
  return rows.join("");
}

function modeLabel(mode, weapon) {
  const cost = ammunitionCost(weapon.system, mode);
  if (mode === "auto") return `Auto (${NOVUM.auto.attackPenalty} attack, d6→d4, Ablation ${NOVUM.auto.ablation}, ${cost} ammo)`;
  if (mode === "cone") return `Cone (4 squares, shared roll, ${cost} ammo)`;
  return `Standard (${cost} ammo)`;
}

async function promptAttack(actor, weapon, measurement, coneMeasurement) {
  const isRanged = weapon.system.kind === "ranged";
  const target = measurement.target?.actor ?? null;
  const profile = target?.combatProfile;
  const modes = availableFireModes(weapon.system);
  if (!modes.length) {
    ui.notifications.warn("This weapon has no implemented fire mode. Suppressive Fire remains future work.");
    return null;
  }
  const modeOptions = modes.map((mode, index) => option(mode, modeLabel(mode, weapon), index === 0)).join("");
  const coneOnly = modes.length === 1 && modes[0] === "cone";
  const targetText = coneOnly
    ? `${coneMeasurement.targets.length} targeted token${coneMeasurement.targets.length === 1 ? "" : "s"}`
    : target ? esc(target.name) : "No target — manual test";
  const rangeControls = !isRanged ? `
    <label>Target Melee AC<input name="manualDV" type="number" min="1" max="99" step="1" value="${esc(profile?.meleeAC ?? 14)}"></label>
    <input name="rangeMode" type="hidden" value="melee">` : coneOnly ? `
    <p class="hint"><strong>Shotgun Cone:</strong> place/use the 4-square 1/2/3/4 template, then target every affected token—including allies. The full Cone cannot be shortened.</p>
    <input name="rangeMode" type="hidden" value="close"><input name="manualDV" type="hidden" value="${esc(weapon.system.range.close.dv)}">` : `
    <label>Range band<select name="rangeMode">${buildRangeOptions(weapon, measurement)}</select></label>
    <label>Manual DV<input name="manualDV" type="number" min="1" max="99" step="1" value="${esc(measurement.dv ?? weapon.system.range.close.dv)}"></label>`;

  const technology = weapon.system.technology ?? "kinetic";
  const content = `<div class="novum roll-dialog">
    <p><strong>${esc(weapon.name)}</strong> against <strong>${targetText}</strong></p>
    <p class="hint">${esc(technology.charAt(0).toUpperCase() + technology.slice(1))} technology: ${technology === "shard" ? "d6→d4, Ablation 2, no Auto or Hardness interaction" : technology === "laser" ? "d6→d8, Ablation 0; Hardness unresolved" : "normal d6 damage and Ablation 1"}.</p>
    ${rangeControls}
    <label>Fire mode<select name="fireMode">${modeOptions}</select></label>
    <label>Precision / test penalty<select name="precision">${NOVUM.precisionPenalties.map(value => option(value, value === 0 ? "None" : String(value), value === 0)).join("")}</select></label>
    <label>Situational modifier<input name="modifier" type="number" min="-20" max="20" step="1" value="0"></label>
    <label>Base damage expression<input name="damage" type="text" value="${esc(weapon.system.damage)}"></label>
    <p class="hint">Technology and fire-mode die conversion is applied after this base expression. Flat modifiers are preserved.</p>
  </div>`;

  return foundry.applications.api.DialogV2.input({
    window: { title: `Novum — ${weapon.name}` }, content, rejectClose: false, modal: true,
    ok: { label: "Roll Attack", icon: "fa-solid fa-dice-d20" }
  });
}

function resolveRangeSelection(weapon, measurement, form) {
  if (weapon.system.kind !== "ranged") return { band: "melee", dv: Number(form.manualDV), distance: measurement.distance };
  const selection = String(form.rangeMode);
  if (selection === "auto" && measurement.dv) return { band: measurement.band, dv: measurement.dv, distance: measurement.distance };
  if ([...NOVUM.rangeBands, "extreme"].includes(selection)) {
    const entry = weapon.system.range[selection];
    if (entry) return { band: selection, dv: Number(entry.dv), distance: measurement.distance };
  }
  return { band: "manual", dv: Number(form.manualDV), distance: measurement.distance };
}

function protectionForTarget(targetActor, weapon, damage, ablation) {
  const targetProfile = targetActor.combatProfile;
  const common = {
    damage,
    shield: targetProfile.shieldCurrent,
    floor: targetProfile.floor,
    hp: targetActor.system.resources.health.value
  };
  return weapon.system.kind === "ranged" ? resolveRangedDamage({ ...common, ablation }) : resolveMeleeDamage(common);
}

function applicationResult(targetActor, protection, ranged) {
  return {
    schema: 2,
    applied: false,
    targetUuid: targetActor.uuid,
    targetName: targetActor.name,
    pre: { hp: protection.hp, shield: protection.shield },
    post: { hp: protection.nextHP, shield: protection.nextShield },
    hpDamage: protection.hpDamage,
    ablation: ranged ? protection.ablation : 0
  };
}

export async function performWeaponAttack(actor, weapon) {
  const measurement = measureAttackRange(actor, weapon);
  const coneMeasurement = measureAttackTargets(actor, weapon);
  const form = await promptAttack(actor, weapon, measurement, coneMeasurement);
  if (!form) return null;

  const fireMode = String(form.fireMode);
  if (!availableFireModes(weapon.system).includes(fireMode)) return ui.notifications.error("That fire mode is not available for this weapon technology.");
  if (fireMode !== "cone" && measurement.error) return ui.notifications.warn(measurement.error);
  if (fireMode === "cone" && coneMeasurement.error) return ui.notifications.warn(coneMeasurement.error);
  if (fireMode === "cone" && coneMeasurement.targets.length === 0) return ui.notifications.warn("Target every token in the Cone before rolling, including allies.");
  if (weapon.system.kind === "ranged" && weapon.system.handling === "twoHanded" && fireMode !== "cone" && hasAdjacentHostile(actor)) {
    return ui.notifications.warn("A two-handed ranged weapon cannot attack while adjacent to a hostile. Shotgun Cone is the deliberate exception.");
  }
  if (fireMode === "cone") {
    const invalid = coneMeasurement.targets.find(entry => !entry.target?.actor || !Number.isFinite(entry.distance) || entry.distance > Number(weapon.system.range.close.max));
    if (invalid) return ui.notifications.warn(`Every Cone target must be within ${weapon.system.range.close.max}m. Recheck the 4-square template.`);
  }

  const ammoCost = ammunitionCost(weapon.system, fireMode);
  const ammoCurrent = Number(weapon.system.magazine.current ?? 0);
  if (Number(weapon.system.magazine.max) > 0 && ammoCurrent < ammoCost) return ui.notifications.warn(`${weapon.name} needs ${ammoCost} ammunition for ${modeLabel(fireMode, weapon)}; ${ammoCurrent} remains.`);

  const parts = getWeaponAttackParts(actor, weapon);
  const range = fireMode === "cone"
    ? { band: "close", dv: Number(weapon.system.range.close.dv), distance: null }
    : resolveRangeSelection(weapon, measurement, form);
  const precision = Number(form.precision) || 0;
  const situational = Number(form.modifier) || 0;
  const modeModifier = fireMode === "auto" ? NOVUM.auto.attackPenalty : 0;
  const modifiers = precision + situational + modeModifier;
  const primaryTarget = measurement.target?.actor ?? null;
  const targetNumber = weapon.system.kind === "ranged" ? range.dv : Number(primaryTarget?.combatProfile.meleeAC ?? form.manualDV);

  if (ammoCost > 0) await weapon.update({ "system.magazine.current": Math.max(0, ammoCurrent - ammoCost) });
  const attackRoll = await new Roll("1d20 + @attribute + @skill + @modifiers", { attribute: parts.attribute, skill: parts.skill, modifiers }).evaluate();
  const natural = getNaturalD20(attackRoll);
  const critThreshold = Math.min(Number(actor.system.combat.critThreshold), Number(weapon.system.critThreshold));
  const damageFormula = transformWeaponDamage(normaliseDamageFormula(form.damage, weapon.system.damage), { technology: weapon.system.technology, fireMode });
  const ablation = weaponAblation(weapon.system, fireMode);

  const targetEntries = fireMode === "cone"
    ? coneMeasurement.targets.map(entry => ({ actor: entry.target.actor, targetNumber: Number(weapon.system.range.close.dv), band: "close", distance: entry.distance }))
    : primaryTarget ? [{ actor: primaryTarget, targetNumber, band: range.band, distance: range.distance }] : [];
  const attacks = targetEntries.map(entry => ({ ...entry, attack: resolveAttack({ natural, total: attackRoll.total, target: entry.targetNumber, critThreshold }) }));
  const manualAttack = targetEntries.length ? null : resolveAttack({ natural, total: attackRoll.total, target: targetNumber, critThreshold });
  const anyHit = manualAttack?.hit || attacks.some(entry => entry.attack.hit);
  const damageRoll = anyHit ? await new Roll(damageFormula, actor.getRollData()).evaluate() : null;
  const damage = damageRoll ? Number(damageRoll.total) : null;

  const targetResults = attacks.map(entry => {
    const protection = entry.attack.hit ? protectionForTarget(entry.actor, weapon, damage, ablation) : null;
    return {
      targetName: entry.actor.name,
      targetNumber: entry.targetNumber,
      targetLabel: weapon.system.kind === "ranged" ? "Range DV" : "Melee AC",
      band: titleCaseBand(entry.band),
      distance: entry.distance,
      hit: entry.attack.hit,
      critical: entry.attack.critical,
      protection,
      traumaPending: entry.attack.critical && (protection?.hpDamage ?? 0) > 0,
      hasApplication: Boolean(protection),
      result: protection ? applicationResult(entry.actor, protection, weapon.system.kind === "ranged") : null
    };
  });
  let resultIndex = 0;
  for (const row of targetResults) {
    if (row.result) row.resultIndex = resultIndex++;
  }
  const attack = manualAttack ?? attacks[0]?.attack ?? { hit: false, critical: false, automaticMiss: false };
  const single = targetResults.length === 1 ? targetResults[0] : null;
  const technology = weapon.system.technology ?? "kinetic";
  const context = {
    actorName: actor.name,
    weaponName: weapon.name,
    attackType: fireMode === "cone" ? "Shotgun Cone" : weapon.system.kind === "ranged" ? "Ranged Attack" : "Melee Attack",
    isRanged: weapon.system.kind === "ranged",
    isMultiTarget: targetResults.length > 1,
    targetName: fireMode === "cone" ? `${targetResults.length} affected targets` : primaryTarget?.name ?? "Manual target",
    targetNumber,
    targetLabel: weapon.system.kind === "ranged" ? "Range DV" : "Melee AC",
    natural,
    attackTotal: attackRoll.total,
    parts,
    precision,
    situational,
    modeModifier,
    fireMode: fireMode === "auto" ? "Auto" : fireMode === "cone" ? "Cone 4 (1/2/3/4)" : "Standard",
    technology: technology.charAt(0).toUpperCase() + technology.slice(1),
    band: titleCaseBand(range.band),
    distance: range.distance,
    hit: single?.hit ?? manualAttack?.hit ?? targetResults.some(result => result.hit),
    critical: single?.critical ?? manualAttack?.critical ?? targetResults.some(result => result.critical),
    automaticMiss: attack.automaticMiss,
    critThreshold,
    damage,
    damageFormula,
    protection: single?.protection ?? null,
    ablation,
    shieldIgnored: weapon.system.kind !== "ranged",
    traumaPending: single?.traumaPending ?? false,
    hasApplication: targetResults.some(result => result.hasApplication),
    targetResults,
    ammoCost,
    ammoRemaining: Math.max(0, ammoCurrent - ammoCost),
    magazineMax: Number(weapon.system.magazine.max ?? 0)
  };
  const results = targetResults.map(result => result.result).filter(Boolean);
  const content = await renderTemplate("systems/novum/templates/chat/attack-card.hbs", context);
  const rolls = [attackRoll, damageRoll].filter(Boolean).map(roll => roll.toJSON());
  const chatData = {
    speaker: ChatMessage.getSpeaker({ actor }), style: CONST.CHAT_MESSAGE_STYLES.OTHER, content, rolls,
    flags: { novum: { result: results.length === 1 ? results[0] : null, results, telemetry: context } }
  };
  return ChatMessage.create(ChatMessage.applyMode(chatData));
}
