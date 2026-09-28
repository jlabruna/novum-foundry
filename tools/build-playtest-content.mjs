import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const skillKeys = [
  "smallArms", "longArms", "heavyWeapons", "demo", "meleeWeapons", "unarmed",
  "pilot", "medicine", "fix", "program", "stealth", "talk", "threaten",
  "athletics", "science", "survival"
];
const attributeKeys = ["str", "dex", "con", "int", "will", "pre"];

const tierStats = {
  1: { level: 1, attack: [2, 2], ac: 14, floor: 1, shield: 7, hp: 14, ranged: { standard: "2d6+2", light: "2d6", heavy: "3d6" }, melee: { light: "1d6+1", standard: "1d6+2", heavy: "2d6" } },
  2: { level: 5, attack: [3, 3], ac: 15, floor: 2, shield: 8, hp: 16, ranged: { standard: "3d6", light: "2d6+2", heavy: "3d6+1" }, melee: { light: "1d6+2", standard: "2d6", heavy: "2d6+1" } },
  3: { level: 9, attack: [4, 4], ac: 16, floor: 3, shield: 9, hp: 18, ranged: { standard: "3d6+1", light: "3d6", heavy: "4d6" }, melee: { light: "2d6", standard: "2d6+1", heavy: "2d6+2" } },
  4: { level: 10, attack: [4, 6], ac: 17, floor: 4, shield: 10, hp: 20, ranged: { standard: "3d6+2", light: "3d6+1", heavy: "4d6" }, melee: { light: "2d6+1", standard: "2d6+2", heavy: "3d6" } }
};

const weaponBlueprints = [
  { key: "service-pistol", name: "Service Pistol", category: "smallArms", skill: "smallArms", attribute: "dex", damage: "standard", profile: [[13, 12], [15, 30], [19, 60]], magazine: 12 },
  { key: "military-revolver", name: "Military Revolver", category: "smallArms", skill: "smallArms", attribute: "dex", damage: "standard", profile: [[13, 14], [17, 36], [21, 70]], magazine: 6 },
  { key: "compact-smg", name: "Compact SMG", category: "smallArms", skill: "smallArms", attribute: "dex", damage: "light", profile: [[13, 14], [15, 38], [19, 80]], magazine: 30, auto: true },
  { key: "assault-rifle", name: "Heavy Assault Rifle", category: "longArms", skill: "longArms", attribute: "dex", damage: "standard", profile: [[15, 14], [13, 70], [15, 190]], magazine: 30 },
  { key: "breach-shotgun", name: "Breach Shotgun", category: "longArms", skill: "longArms", attribute: "dex", damage: "heavy", profile: [[13, 10], [17, 30], [21, 65]], magazine: 8 },
  { key: "precision-rifle", name: "Precision Sniper Rifle", category: "longArms", skill: "longArms", attribute: "dex", damage: "heavy", profile: [[17, 12], [15, 100], [13, 360]], magazine: 8 },
  { key: "support-rifle", name: "Heavy Support Rifle", category: "heavyWeapons", skill: "heavyWeapons", attribute: "str", damage: "heavy", profile: [[17, 16], [15, 85], [15, 220]], magazine: 20 },
  { key: "auto-support", name: "Auto Support Gun", category: "heavyWeapons", skill: "heavyWeapons", attribute: "str", damage: "standard", profile: [[15, 16], [15, 75], [17, 180]], magazine: 60, auto: true },
  { key: "combat-knife", name: "Combat Knife", category: "meleeWeapons", skill: "meleeWeapons", attribute: "dex", damage: "light", kind: "melee" },
  { key: "shock-baton", name: "Shock Baton", category: "meleeWeapons", skill: "meleeWeapons", attribute: "str", damage: "standard", kind: "melee" },
  { key: "breach-blade", name: "Composite Breach Blade", category: "meleeWeapons", skill: "meleeWeapons", attribute: "str", damage: "heavy", kind: "melee" },
  { key: "unarmed", name: "Unarmed Strike", category: "unarmed", skill: "unarmed", attribute: "str", damage: "light", kind: "unarmed" }
];

const armourBlueprints = [
  { key: "agile", name: "Agile Shield Jacket", ac: 1, shield: -1, capacity: 2, concealability: "Concealable" },
  { key: "balanced", name: "Reinforced Combat Armour", ac: 0, shield: 0, capacity: 2, concealability: "Standard" },
  { key: "heavy", name: "Military Combat Suit", ac: 2, shield: -1, capacity: 2, mobility: -1, concealability: "Obvious" },
  { key: "shield-heavy", name: "Tactical Shield Harness", ac: -1, shield: 2, capacity: 2, concealability: "Obvious" },
  { key: "fortress", name: "Fortress Assault Chassis", ac: 2, shield: -2, capacity: 3, mobility: -2, concealability: "Impossible" }
];

const modBlueprints = [
  { key: "floor", name: "Advanced Ceramic Plating", floor: tier => tier, capacity: 1 },
  { key: "high-floor", name: "Composite Strike Plate", floor: tier => tier + 1, capacity: 2 },
  { key: "capacitor", name: "Tactical Shield Capacitor", floor: () => 0, shieldBonus: 1, capacity: 1 }
];

function range(profile = [[13, 2], [15, 2], [19, 2]]) {
  return {
    close: { dv: profile[0][0], max: profile[0][1] },
    medium: { dv: profile[1][0], max: profile[1][1] },
    long: { dv: profile[2][0], max: profile[2][1] },
    extreme: { enabled: false, dv: 21, max: profile[2][1] * 2 }
  };
}

function weaponDocument(blueprint, tier, equipped = false) {
  const stats = tierStats[tier];
  const kind = blueprint.kind ?? "ranged";
  return {
    name: `T${tier} ${blueprint.name}`,
    type: "weapon",
    img: kind === "ranged" ? "icons/svg/pistol.svg" : "icons/svg/sword.svg",
    system: {
      schemaVersion: 1,
      description: `<p>Generic T${tier} playtest ${blueprint.name.toLowerCase()}. Values are provisional calibration content.</p>`,
      tier,
      traits: blueprint.auto ? "Auto test platform" : "Playtest profile",
      category: blueprint.category,
      kind,
      skill: blueprint.skill,
      attribute: blueprint.attribute,
      damage: kind === "ranged" ? stats.ranged[blueprint.damage] : stats.melee[blueprint.damage],
      ablation: 1,
      penetration: 0,
      critThreshold: 20,
      equipped,
      range: range(blueprint.profile),
      modes: { standard: true, auto: Boolean(blueprint.auto) },
      magazine: { current: blueprint.magazine ?? 0, max: blueprint.magazine ?? 0 }
    }
  };
}

function armourDocument(blueprint, tier, equipped = false) {
  const stats = tierStats[tier];
  return {
    name: `T${tier} ${blueprint.name}`,
    type: "armour",
    img: "icons/svg/shield.svg",
    system: {
      schemaVersion: 1,
      description: `<p>Generic T${tier} ${blueprint.name.toLowerCase()} chassis. Armour Floor is supplied by installed same-tier mods.</p>`,
      tier,
      traits: "Integrated physical armour and energy shield",
      meleeAC: stats.ac + blueprint.ac,
      shieldMax: Math.max(0, stats.shield + blueprint.shield),
      modCapacity: blueprint.capacity,
      mobilityPenalty: blueprint.mobility ?? 0,
      concealability: blueprint.concealability,
      equipped
    }
  };
}

function modDocument(blueprint, tier, installed = false) {
  return {
    name: `T${tier} ${blueprint.name}`,
    type: "armourMod",
    img: "icons/svg/upgrade.svg",
    system: {
      schemaVersion: 1,
      description: `<p>Generic T${tier} playtest armour modification. Same-tier installation only.</p>`,
      tier,
      traits: blueprint.key === "capacitor" ? "Provisional Shield Max utility" : "Physical reinforcement",
      floor: blueprint.floor(tier),
      shieldBonus: blueprint.shieldBonus ?? 0,
      capacityCost: blueprint.capacity,
      compatibleTier: tier,
      installed
    }
  };
}

const items = [];
const itemByKey = new Map();
for (const tier of [1, 2, 3, 4]) {
  for (const blueprint of weaponBlueprints) {
    const seedId = `weapon-t${tier}-${blueprint.key}`;
    const document = weaponDocument(blueprint, tier);
    items.push({ seedId, tier, document });
    itemByKey.set(seedId, document);
  }
  for (const blueprint of armourBlueprints) {
    const seedId = `armour-t${tier}-${blueprint.key}`;
    const document = armourDocument(blueprint, tier);
    items.push({ seedId, tier, document });
    itemByKey.set(seedId, document);
  }
  for (const blueprint of modBlueprints) {
    const seedId = `mod-t${tier}-${blueprint.key}`;
    const document = modDocument(blueprint, tier);
    items.push({ seedId, tier, document });
    itemByKey.set(seedId, document);
  }
}

const characterArchetypes = [
  { key: "balanced-rifle", name: "Balanced Rifle Operator", weapon: "assault-rifle", armour: "balanced", mod: "floor", attribute: "dex", skill: "longArms" },
  { key: "agile-skirmisher", name: "Small-Arms Agile Skirmisher", weapon: "compact-smg", armour: "agile", mod: "floor", attribute: "dex", skill: "smallArms", secondary: "stealth" },
  { key: "melee-specialist", name: "Melee Specialist", weapon: "breach-blade", armour: "heavy", mod: "high-floor", attribute: "str", skill: "meleeWeapons", secondary: "athletics" },
  { key: "auto-specialist", name: "Heavy Auto Specialist", weapon: "auto-support", armour: "heavy", mod: "floor", attribute: "str", skill: "heavyWeapons" },
  { key: "precision-specialist", name: "Precision Long-Range Specialist", weapon: "precision-rifle", armour: "agile", mod: "floor", attribute: "dex", skill: "longArms", secondary: "survival" },
  { key: "support-generalist", name: "Support-Ready Generalist", weapon: "service-pistol", armour: "shield-heavy", mod: "floor", extraMod: "capacitor", attribute: "dex", skill: "smallArms", secondary: "medicine" }
];

const npcArchetypes = [
  { key: "street-gunner", name: "Street Gunner", weapon: "service-pistol", armour: "balanced", mod: "floor", attribute: "dex", skill: "smallArms" },
  { key: "shielded-enforcer", name: "Shielded Enforcer", weapon: "support-rifle", armour: "shield-heavy", mod: "floor", extraMod: "capacitor", attribute: "str", skill: "heavyWeapons" },
  { key: "melee-breacher", name: "Melee Breacher", weapon: "breach-blade", armour: "heavy", mod: "high-floor", attribute: "str", skill: "meleeWeapons" },
  { key: "auto-gunner", name: "Auto Gunner", weapon: "auto-support", armour: "heavy", mod: "floor", attribute: "str", skill: "heavyWeapons" },
  { key: "precision-shooter", name: "Precision Shooter", weapon: "precision-rifle", armour: "agile", mod: "floor", attribute: "dex", skill: "longArms" },
  { key: "tactical-operator", name: "Tactical Operator", weapon: "assault-rifle", armour: "balanced", mod: "floor", attribute: "dex", skill: "longArms", secondary: "program" }
];

const tokenArt = {
  character: {
    "balanced-rifle": "balanced-rifle.webp",
    "agile-skirmisher": "agile-skirmisher.webp",
    "melee-specialist": "melee-specialist.webp",
    "auto-specialist": "auto-specialist.webp",
    "precision-specialist": "precision-specialist.webp",
    "support-generalist": "support-generalist.webp"
  },
  npc: {
    "street-gunner": "street-gunner.webp",
    "shielded-enforcer": "shielded-enforcer.webp",
    "melee-breacher": "melee-breacher.webp",
    "auto-gunner": "auto-gunner.webp",
    "precision-shooter": "precision-shooter.webp",
    "tactical-operator": "tactical-operator.webp"
  }
};

function clone(value) {
  return structuredClone(value);
}

function actorDocument(archetype, type, tier) {
  const stats = tierStats[tier];
  const attributes = Object.fromEntries(attributeKeys.map(key => [key, { value: 1 }]));
  const skills = Object.fromEntries(skillKeys.map(key => [key, { value: 0 }]));
  attributes[archetype.attribute].value = stats.attack[0];
  attributes.con.value = Math.max(attributes.con.value, Math.min(4, tier + 1));
  skills[archetype.skill].value = stats.attack[1];
  if (archetype.secondary) skills[archetype.secondary].value = Math.max(1, stats.attack[1] - 1);

  const weapon = clone(itemByKey.get(`weapon-t${tier}-${archetype.weapon}`));
  const armour = clone(itemByKey.get(`armour-t${tier}-${archetype.armour}`));
  const mod = clone(itemByKey.get(`mod-t${tier}-${archetype.mod}`));
  weapon.system.equipped = true;
  armour.system.equipped = true;
  mod.system.installed = true;
  const embeddedItems = [weapon, armour, mod];
  let shieldMax = armour.system.shieldMax;
  if (archetype.extraMod) {
    const extra = clone(itemByKey.get(`mod-t${tier}-${archetype.extraMod}`));
    extra.system.installed = true;
    embeddedItems.push(extra);
    shieldMax += extra.system.shieldBonus;
  }

  const name = `T${tier} ${archetype.name}`;
  const tokenPath = `systems/novum/assets/tokens/${tokenArt[type][archetype.key]}`;
  return {
    name,
    type,
    img: tokenPath,
    prototypeToken: {
      name,
      actorLink: type === "character",
      disposition: type === "character" ? 1 : -1,
      texture: { src: tokenPath },
      bar1: { attribute: "resources.health" },
      bar2: { attribute: "resources.shield" }
    },
    system: {
      schemaVersion: 1,
      level: stats.level,
      tier,
      attributes,
      skills,
      resources: {
        health: { value: stats.hp, max: stats.hp },
        shield: { value: shieldMax, max: shieldMax }
      },
      movement: { metres: archetype.armour === "heavy" ? 6 : 8 },
      combat: { meleeACOverride: -1, armourFloorOverride: -1, shieldMaxOverride: -1, critThreshold: 20 },
      notes: `<p>Premade T${tier} ${type} for Combat Maths Baseline v1.0 testing. HP and all item statistics are provisional playtest values.</p>`
    },
    items: embeddedItems
  };
}

const actors = [];
for (const tier of [1, 2, 3, 4]) {
  for (const archetype of characterArchetypes) {
    actors.push({ seedId: `character-t${tier}-${archetype.key}`, type: "character", tier, document: actorDocument(archetype, "character", tier) });
  }
  for (const archetype of npcArchetypes) {
    actors.push({ seedId: `npc-t${tier}-${archetype.key}`, type: "npc", tier, document: actorDocument(archetype, "npc", tier) });
  }
}

const payload = {
  version: "0.1.1",
  generated: "2026-09-28",
  note: "Generic provisional playtest content for Novum Combat Maths Baseline v1.0 using the v0.1.1 Shield/HP and melee calibration.",
  items,
  actors
};

await mkdir(path.join(root, "data"), { recursive: true });
await writeFile(path.join(root, "data", "playtest-content.json"), `${JSON.stringify(payload, null, 2)}\n`, "utf8");
console.log(`Generated ${items.length} Items and ${actors.length} Actors.`);
