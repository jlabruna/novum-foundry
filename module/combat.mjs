import {
  normaliseDamageFormula,
  resolveAttack,
  resolveMeleeDamage,
  resolveRangedDamage
} from "./combat-engine.mjs";
import { NOVUM } from "./config.mjs";
import { measureAttackRange, titleCaseBand } from "./range.mjs";

function esc(value) {
  return foundry.utils.escapeHTML(String(value ?? ""));
}

function option(value, label, selected = false, disabled = false) {
  return `<option value="${esc(value)}"${selected ? " selected" : ""}${disabled ? " disabled" : ""}>${esc(label)}</option>`;
}

function selectedTargetActor(measurement) {
  return measurement.target?.actor ?? null;
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
    rows.push(option(band, `${titleCaseBand(band)} — to ${data.max}m (DV ${data.dv})`, !measurement.dv && band === "close"));
  }
  if (weapon.system.range.extreme?.enabled) {
    const data = weapon.system.range.extreme;
    rows.push(option("extreme", `Extreme — to ${data.max}m (DV ${data.dv})`));
  }
  rows.push(option("manual", "Manual DV"));
  return rows.join("");
}

async function promptAttack(actor, weapon, measurement) {
  const isRanged = weapon.system.kind === "ranged";
  const target = selectedTargetActor(measurement);
  const profile = target?.combatProfile;
  const autoOption = weapon.system.modes.auto
    ? option("auto", `Auto (provisional ${NOVUM.auto.attackPenalty} attack / Ablation ${NOVUM.auto.ablation})`)
    : "";

  const targetText = target ? esc(target.name) : "No target — manual test";
  const rangeControls = isRanged ? `
    <label>Range band
      <select name="rangeMode">${buildRangeOptions(weapon, measurement)}</select>
    </label>
    <label>Manual DV
      <input name="manualDV" type="number" min="1" max="99" step="1" value="${esc(measurement.dv ?? weapon.system.range.close.dv)}">
    </label>
    <label>Fire mode
      <select name="fireMode">${option("standard", "Standard", true)}${autoOption}</select>
    </label>` : `
    <label>Target Melee AC
      <input name="manualDV" type="number" min="1" max="99" step="1" value="${esc(profile?.meleeAC ?? 14)}">
    </label>
    <input name="rangeMode" type="hidden" value="melee">
    <input name="fireMode" type="hidden" value="standard">`;

  const content = `<div class="novum roll-dialog">
    <p><strong>${esc(weapon.name)}</strong> against <strong>${targetText}</strong></p>
    ${rangeControls}
    <label>Precision / test penalty
      <select name="precision">${NOVUM.precisionPenalties.map(value => option(value, value === 0 ? "None" : String(value), value === 0)).join("")}</select>
    </label>
    <label>Situational modifier
      <input name="modifier" type="number" min="-20" max="20" step="1" value="0">
    </label>
    <label>Damage expression
      <input name="damage" type="text" value="${esc(weapon.system.damage)}">
    </label>
    <p class="hint">Every selected value will be shown on the attack card before any target changes are applied.</p>
  </div>`;

  return foundry.applications.api.DialogV2.input({
    window: { title: `Novum — ${weapon.name}` },
    content,
    rejectClose: false,
    modal: true,
    ok: { label: "Roll Attack", icon: "fa-solid fa-dice-d20" }
  });
}

function resolveRangeSelection(weapon, measurement, form) {
  if (weapon.system.kind !== "ranged") return { band: "melee", dv: Number(form.manualDV), distance: measurement.distance };
  const selection = String(form.rangeMode);
  if (selection === "auto" && measurement.dv) {
    return { band: measurement.band, dv: measurement.dv, distance: measurement.distance };
  }
  if ([...NOVUM.rangeBands, "extreme"].includes(selection)) {
    const entry = weapon.system.range[selection];
    if (entry) return { band: selection, dv: Number(entry.dv), distance: measurement.distance };
  }
  return { band: "manual", dv: Number(form.manualDV), distance: measurement.distance };
}

export async function performWeaponAttack(actor, weapon) {
  const measurement = measureAttackRange(actor, weapon);
  if (measurement.error) ui.notifications.warn(measurement.error);
  const form = await promptAttack(actor, weapon, measurement);
  if (!form) return null;

  const targetActor = selectedTargetActor(measurement);
  const parts = getWeaponAttackParts(actor, weapon);
  const range = resolveRangeSelection(weapon, measurement, form);
  const precision = Number(form.precision) || 0;
  const situational = Number(form.modifier) || 0;
  const auto = String(form.fireMode) === "auto" && weapon.system.modes.auto;
  const modeModifier = auto ? NOVUM.auto.attackPenalty : 0;
  const modifiers = precision + situational + modeModifier;
  const targetNumber = weapon.system.kind === "ranged"
    ? range.dv
    : Number(targetActor?.combatProfile.meleeAC ?? form.manualDV);

  const attackData = {
    attribute: parts.attribute,
    skill: parts.skill,
    modifiers
  };
  const attackRoll = await new Roll("1d20 + @attribute + @skill + @modifiers", attackData).evaluate();
  const natural = getNaturalD20(attackRoll);
  const critThreshold = Math.min(Number(actor.system.combat.critThreshold), Number(weapon.system.critThreshold));
  const attack = resolveAttack({ natural, total: attackRoll.total, target: targetNumber, critThreshold });

  let damageRoll = null;
  let damage = null;
  let protection = null;
  const damageFormula = normaliseDamageFormula(form.damage, weapon.system.damage);
  const ablation = auto ? NOVUM.auto.ablation : Number(weapon.system.ablation);
  if (attack.hit) {
    damageRoll = await new Roll(damageFormula, actor.getRollData()).evaluate();
    damage = Number(damageRoll.total);
    if (targetActor) {
      const targetProfile = targetActor.combatProfile;
      const common = {
        damage,
        shield: targetProfile.shieldCurrent,
        floor: targetProfile.floor,
        hp: targetActor.system.resources.health.value
      };
      protection = weapon.system.kind === "ranged"
        ? resolveRangedDamage({ ...common, ablation })
        : resolveMeleeDamage(common);
    }
  }

  const context = {
    actorName: actor.name,
    weaponName: weapon.name,
    attackType: weapon.system.kind === "ranged" ? "Ranged Attack" : "Melee Attack",
    isRanged: weapon.system.kind === "ranged",
    targetName: targetActor?.name ?? "Manual target",
    targetNumber,
    targetLabel: weapon.system.kind === "ranged" ? "Range DV" : "Melee AC",
    natural,
    attackTotal: attackRoll.total,
    parts,
    modifiers,
    precision,
    situational,
    modeModifier,
    fireMode: auto ? "Auto (provisional)" : "Standard",
    band: titleCaseBand(range.band),
    distance: range.distance,
    hit: attack.hit,
    miss: !attack.hit,
    critical: attack.critical,
    automaticMiss: attack.automaticMiss,
    critThreshold,
    damage,
    damageFormula,
    protection,
    ablation,
    shieldIgnored: weapon.system.kind !== "ranged",
    traumaPending: attack.critical && (protection?.hpDamage ?? 0) > 0,
    hasApplication: Boolean(targetActor && protection),
    targetHP: targetActor?.system.resources.health.value,
    targetShield: targetActor?.combatProfile.shieldCurrent,
    applied: false
  };

  const result = context.hasApplication ? {
    schema: 1,
    applied: false,
    targetUuid: targetActor.uuid,
    targetName: targetActor.name,
    pre: { hp: protection.hp, shield: protection.shield },
    post: { hp: protection.nextHP, shield: protection.nextShield },
    hpDamage: protection.hpDamage,
    ablation: weapon.system.kind === "ranged" ? protection.ablation : 0
  } : null;

  const content = await renderTemplate("systems/novum/templates/chat/attack-card.hbs", context);
  const rolls = [attackRoll, damageRoll].filter(Boolean).map(roll => roll.toJSON());
  const chatData = {
    speaker: ChatMessage.getSpeaker({ actor }),
    style: CONST.CHAT_MESSAGE_STYLES.OTHER,
    content,
    rolls,
    flags: { novum: { result, telemetry: { ...context, protection: protection ? { ...protection } : null } } }
  };
  return ChatMessage.create(ChatMessage.applyMode(chatData));
}
