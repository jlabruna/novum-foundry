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

Hooks.once("init", () => {
  console.info("Novum | Initialising v0.1.2 for Foundry VTT v14.368");
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
  if (!foundry.utils.hasProperty(changes, "system.combat.shieldMaxOverride")) return;
  await actor.syncProtectionResources();
});
