import { NOVUM } from "./module/config.mjs";
import { CharacterData, NPCData, WeaponData, ArmourData, ArmourModData } from "./module/data-models.mjs";
import { registerDocumentClasses, registerTrackableAttributes } from "./module/documents.mjs";
import { NovumActorSheet, NovumNPCSheet } from "./module/sheets/actor-sheet.mjs";
import { NovumItemSheet } from "./module/sheets/item-sheet.mjs";
import { registerSystemSettings } from "./module/settings.mjs";
import { importPlaytestContent, promptForPlaytestContent } from "./module/content-importer.mjs";
import { installChatCardHooks } from "./module/chat.mjs";
import { registerRangeOverlay, toggleRangeOverlay } from "./module/range-overlay.mjs";
import * as combatEngine from "./module/combat-engine.mjs";
import { hpForLevel, progressionState } from "./module/progression.mjs";

Hooks.once("init", () => {
  console.info("Novum | Initialising v0.2.1 for Foundry VTT v14.368");
  CONFIG.NOVUM = NOVUM;
  registerDocumentClasses();
  registerTrackableAttributes();

  CONFIG.Actor.dataModels.character = CharacterData;
  CONFIG.Actor.dataModels.npc = NPCData;
  CONFIG.Item.dataModels.weapon = WeaponData;
  CONFIG.Item.dataModels.armour = ArmourData;
  CONFIG.Item.dataModels.armourMod = ArmourModData;

  const SheetConfig = foundry.applications.apps.DocumentSheetConfig;
  SheetConfig.registerSheet(foundry.documents.Actor, "novum", NovumActorSheet, {
    types: ["character"],
    makeDefault: true,
    label: "Novum Character Sheet"
  });
  SheetConfig.registerSheet(foundry.documents.Actor, "novum", NovumNPCSheet, {
    types: ["npc"],
    makeDefault: true,
    label: "Novum NPC Sheet"
  });
  SheetConfig.registerSheet(foundry.documents.Item, "novum", NovumItemSheet, {
    types: ["weapon", "armour", "armourMod"],
    makeDefault: true,
    label: "Novum Item Sheet"
  });

  registerSystemSettings();
  installChatCardHooks();
  registerRangeOverlay();
});

Hooks.once("ready", async () => {
  game.novum = Object.freeze({
    version: game.system.version,
    config: NOVUM,
    combat: combatEngine,
    importPlaytestContent,
    toggleRangeOverlay
  });
  await promptForPlaytestContent();
});

for (const hook of ["createItem", "updateItem", "deleteItem"]) {
  Hooks.on(hook, async item => {
    if (!item.parent || item.parent.documentName !== "Actor") return;
    if (!["armour", "armourMod"].includes(item.type)) return;
    await item.parent.syncProtectionResources();
  });
}

Hooks.on("updateActor", async (actor, changes) => {
  if (foundry.utils.hasProperty(changes, "system.combat.shieldMaxOverride")) await actor.syncProtectionResources();
});

Hooks.on("preUpdateActor", (actor, changes) => {
  if (foundry.utils.hasProperty(changes, "system.level")) {
    const previousMax = hpForLevel(actor.system.level);
    const nextMax = hpForLevel(foundry.utils.getProperty(changes, "system.level"));
    const current = Number(actor.system.resources.health.value);
    foundry.utils.setProperty(changes, "system.resources.health.max", nextMax);
    foundry.utils.setProperty(changes, "system.resources.health.value", Math.min(nextMax, Math.max(0, current + (nextMax - previousMax))));
  }
  if (!foundry.utils.hasProperty(changes, "system.skills") || foundry.utils.hasProperty(changes, "system.level")) return true;
  const system = foundry.utils.deepClone(actor.system.toObject ? actor.system.toObject() : actor.system);
  foundry.utils.mergeObject(system, changes.system ?? {}, { inplace: true });
  const state = progressionState(system);
  if (state.skillRemaining < 0) {
    ui.notifications.warn(`That change exceeds the Level ${state.level} Skill budget by ${Math.abs(state.skillRemaining)} point(s).`);
    return false;
  }
  if (Object.values(system.skills ?? {}).some(skill => Number(skill.value) > state.skillCap)) {
    ui.notifications.warn(`Skill Rank cannot exceed ${state.skillCap} at Level ${state.level}.`);
    return false;
  }
  return true;
});
