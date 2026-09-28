import { performWeaponAttack } from "./combat.mjs";

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
