export const NOVUM = Object.freeze({
  systemId: "novum",
  schemaVersion: 1,
  playtestCalibration: Object.freeze({
    shield: Object.freeze([7, 8, 9, 10]),
    hp: Object.freeze([14, 16, 18, 20])
  }),
  attributes: Object.freeze({
    str: "STR",
    dex: "DEX",
    con: "CON",
    int: "INT",
    will: "WILL",
    pre: "PRE"
  }),
  skills: Object.freeze({
    smallArms: "Small Arms",
    longArms: "Long Arms",
    heavyWeapons: "Heavy Weapons",
    demo: "Demo",
    meleeWeapons: "Melee Weapons",
    unarmed: "Unarmed",
    pilot: "Pilot",
    medicine: "Medicine",
    fix: "Fix",
    program: "Program",
    stealth: "Stealth",
    talk: "Talk",
    threaten: "Threaten",
    athletics: "Athletics",
    science: "Science",
    survival: "Survival"
  }),
  tiers: Object.freeze([1, 2, 3, 4]),
  rangeBands: Object.freeze(["close", "medium", "long"]),
  provisionalDVs: Object.freeze([13, 15, 17, 19, 21]),
  precisionPenalties: Object.freeze([0, -4, -6, -8]),
  auto: Object.freeze({ attackPenalty: -3, ablation: 3 })
});

export const weaponTechnologies = Object.freeze({
  kinetic: "Kinetic",
  shard: "Shard",
  laser: "Laser"
});

export const weaponHandling = Object.freeze({
  oneHanded: "One-handed",
  twoHanded: "Two-handed"
});

export const itemTypeLabels = Object.freeze({
  weapon: "Weapon",
  armour: "Armour",
  armourMod: "Armour Mod"
});

export const weaponKinds = Object.freeze({
  ranged: "Ranged",
  melee: "Melee",
  unarmed: "Unarmed"
});
