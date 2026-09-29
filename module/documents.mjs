import { performWeaponAttack } from "./combat.mjs";
import { canSelectFeat, ROLE_DEFINITIONS } from "./progression.mjs";

export class NovumItem extends Item {}

export class NovumActor extends Actor {
  get combatProfile() {
    const armour = this.items
      .filter(item => item.type === "armour" && item.system.equipped)
      .sort((a, b) => a.sort - b.sort)[0] ?? null;
    const allInstalled = this.items
      .filter(item => item.type === "armourMod" && item.system.installed)
      .sort((a, b) => a.sort - b.sort);

    const warnings = [];
    if (!armour) warnings.push("No armour equipped: base Melee AC 10, Shield Max 0, Floor 0.");
    if (this.items.filter(item => item.type === "armour" && item.system.equipped).length > 1) {
      warnings.push("Multiple armour chassis are marked equipped; only the first contributes.");
    }

    const validMods = [];
    let capacityUsed = 0;
    const capacity = Number(armour?.system.modCapacity ?? 0);
    for (const mod of allInstalled) {
      if (!armour || Number(mod.system.compatibleTier) !== Number(armour.system.tier)) {
        warnings.push(`${mod.name} is installed on incompatible armour and contributes nothing.`);
        continue;
      }
      const cost = Number(mod.system.capacityCost) || 0;
      if (capacityUsed + cost > capacity) {
        warnings.push(`${mod.name} exceeds armour mod capacity and contributes nothing.`);
        continue;
      }
      capacityUsed += cost;
      validMods.push(mod);
    }

    const floorFromMods = validMods.reduce((sum, mod) => sum + Number(mod.system.floor || 0), 0);
    const shieldBonus = validMods.reduce((sum, mod) => sum + Number(mod.system.shieldBonus || 0), 0);
    const floor = this.system.combat.armourFloorOverride >= 0
      ? Number(this.system.combat.armourFloorOverride)
      : floorFromMods;
    const meleeAC = this.system.combat.meleeACOverride >= 0
      ? Number(this.system.combat.meleeACOverride)
      : Number(armour?.system.meleeAC ?? 10);
    const derivedShieldMax = Number(armour?.system.shieldMax ?? 0) + shieldBonus;
    const shieldMax = this.system.combat.shieldMaxOverride >= 0
      ? Number(this.system.combat.shieldMaxOverride)
      : derivedShieldMax;
    const shieldCurrent = Math.min(Number(this.system.resources.shield.value || 0), shieldMax);

    return {
      armour,
      validMods,
      warnings,
      capacity,
      capacityUsed,
      floor,
      meleeAC,
      shieldCurrent,
      shieldMax,
      rangedSP: shieldCurrent + floor
    };
  }

  async syncProtectionResources({ refill = false } = {}) {
    const profile = this.combatProfile;
    const current = refill
      ? profile.shieldMax
      : Math.min(Number(this.system.resources.shield.value || 0), profile.shieldMax);
    return this.update({
      "system.resources.shield.max": profile.shieldMax,
      "system.resources.shield.value": current
    });
  }

  async toggleEquipment(itemId) {
    const item = this.items.get(itemId);
    if (!item) return;

    if (item.type === "armour") {
      const next = !item.system.equipped;
      const updates = this.items
        .filter(candidate => candidate.type === "armour")
        .map(candidate => ({ _id: candidate.id, "system.equipped": next && candidate.id === item.id }));
      await this.updateEmbeddedDocuments("Item", updates);
      await this.syncProtectionResources();
      return;
    }

    if (item.type === "armourMod") {
      const next = !item.system.installed;
      if (next) {
        const profile = this.combatProfile;
        if (!profile.armour) return ui.notifications.warn("Equip armour before installing an armour mod.");
        if (Number(item.system.compatibleTier) !== Number(profile.armour.system.tier)) {
          return ui.notifications.warn("Armour mods can only be installed in same-tier armour.");
        }
        if (profile.capacityUsed + Number(item.system.capacityCost || 0) > profile.capacity) {
          return ui.notifications.warn("That mod would exceed the equipped armour's capacity.");
        }
      }
      await item.update({ "system.installed": next });
      await this.syncProtectionResources();
      return;
    }

    if (item.type === "weapon") {
      const next = !item.system.equipped;
      const updates = this.items
        .filter(candidate => candidate.type === "weapon")
        .map(candidate => ({ _id: candidate.id, "system.equipped": next && candidate.id === item.id }));
      await this.updateEmbeddedDocuments("Item", updates);
    }
  }

  async rollWeapon(itemId) {
    const weapon = this.items.get(itemId);
    if (!weapon || weapon.type !== "weapon") return ui.notifications.error("Weapon not found.");
    return performWeaponAttack(this, weapon);
  }

  async reloadWeapon(itemId) {
    const weapon = this.items.get(itemId);
    if (!weapon || weapon.type !== "weapon") return ui.notifications.error("Weapon not found.");
    const maximum = Number(weapon.system.magazine.max ?? 0);
    if (maximum <= 0) return ui.notifications.warn("This weapon has no reloadable magazine or charge pool.");
    if (Number(weapon.system.magazine.current) >= maximum) return ui.notifications.info(`${weapon.name} is already full.`);
    await weapon.update({ "system.magazine.current": maximum });
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      content: `<article class="novum-chat-card"><header><span class="eyebrow">Main Action</span><h3>Reload</h3><p>${foundry.utils.escapeHTML(this.name)} · ${foundry.utils.escapeHTML(weapon.name)}</p></header><p class="card-note">Magazine restored to ${maximum}. This consumes the character's Main Action.</p></article>`
    });
  }

  async setRole(slot, roleId) {
    if (!["primary", "secondary"].includes(slot)) return;
    if (roleId && !ROLE_DEFINITIONS[roleId]) return ui.notifications.warn("Unknown Role.");
    const otherSlot = slot === "primary" ? "secondary" : "primary";
    if (roleId && this.system.progression.roles[otherSlot] === roleId) return ui.notifications.warn("Choose two different Roles.");
    await this.update({ [`system.progression.roles.${slot}`]: roleId });
  }

  async setBackgroundSkill(index, skillId) {
    const next = Array.from(this.system.progression.backgroundSkills ?? []).slice(0, 3);
    while (next.length < 3) next.push("");
    if (skillId && next.some((value, current) => current !== index && value === skillId)) {
      return ui.notifications.warn("Background skill grants must be different Skills.");
    }
    const previous = next[index];
    next[index] = skillId;
    const updates = { "system.progression.backgroundSkills": next };
    if (previous && Number(this.system.skills[previous]?.value) === 1) updates[`system.skills.${previous}.value`] = 0;
    if (skillId && Number(this.system.skills[skillId]?.value) === 0) updates[`system.skills.${skillId}.value`] = 1;
    await this.update(updates);
  }

  async toggleFeat(featId) {
    const selections = Array.from(this.system.progression.feats ?? []);
    const currentIndex = selections.indexOf(featId);
    if (currentIndex >= 0) selections.splice(currentIndex, 1);
    else {
      const roles = [this.system.progression.roles.primary, this.system.progression.roles.secondary].filter(Boolean);
      const check = canSelectFeat({ featId, selections, roles, level: this.system.level });
      if (!check.allowed) return ui.notifications.warn(check.reason);
      selections.push(featId);
    }
    await this.update({ "system.progression.feats": selections });
  }

  async setAttributeAdvance(milestone, attributeKey) {
    if (![5, 9].includes(Number(milestone))) return;
    if (Number(this.system.level) < Number(milestone)) return ui.notifications.warn(`Requires Level ${milestone}.`);
    if (!Object.hasOwn(this.system.attributes, attributeKey)) return ui.notifications.warn("Unknown Attribute.");
    const field = `level${milestone}`;
    const other = milestone === 5 ? this.system.progression.attributeAdvances.level9 : this.system.progression.attributeAdvances.level5;
    if (other === attributeKey) return ui.notifications.warn("Level 5 and Level 9 increases must affect different Attributes.");
    const previous = this.system.progression.attributeAdvances[field];
    if (previous === attributeKey) return;
    const updates = { [`system.progression.attributeAdvances.${field}`]: attributeKey };
    if (previous && Object.hasOwn(this.system.attributes, previous)) {
      updates[`system.attributes.${previous}.value`] = Math.max(0, Number(this.system.attributes[previous].value) - 1);
    }
    const nextValue = Number(this.system.attributes[attributeKey].value) + 1;
    if (nextValue > 4) return ui.notifications.warn(`${attributeKey.toUpperCase()} is already at the Attribute cap of 4.`);
    updates[`system.attributes.${attributeKey}.value`] = nextValue;
    await this.update(updates);
  }

  async restoreResources() {
    const profile = this.combatProfile;
    return this.update({
      "system.resources.health.value": this.system.resources.health.max,
      "system.resources.shield.max": profile.shieldMax,
      "system.resources.shield.value": profile.shieldMax
    });
  }

  async rechargeShield(amount = 1) {
    if (game.combat?.started) return ui.notifications.warn("Shield recharge is only available outside combat.");
    const profile = this.combatProfile;
    const value = Math.min(profile.shieldMax, Number(this.system.resources.shield.value || 0) + Math.max(0, amount));
    return this.update({ "system.resources.shield.value": value, "system.resources.shield.max": profile.shieldMax });
  }
}

export function registerTrackableAttributes() {
  const tracked = {
    bar: ["resources.health", "resources.shield"],
    value: ["level", "tier", "movement.metres"]
  };
  CONFIG.Actor.trackableAttributes = { character: tracked, npc: tracked };
}

export function registerDocumentClasses() {
  CONFIG.Actor.documentClass = NovumActor;
  CONFIG.Item.documentClass = NovumItem;
}
