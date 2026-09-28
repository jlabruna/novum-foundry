const fields = foundry.data.fields;

function intField({ min = 0, max = 999, initial = 0 } = {}) {
  return new fields.NumberField({ required: true, nullable: false, integer: true, min, max, initial });
}

function textField(initial = "") {
  return new fields.StringField({ required: true, nullable: false, blank: true, initial });
}

function resourceField(initial) {
  return new fields.SchemaField({
    value: intField({ min: 0, max: 999, initial }),
    max: intField({ min: 0, max: 999, initial })
  });
}

function attributeSchema() {
  const entries = {};
  for (const key of ["str", "dex", "con", "int", "will", "pre"]) {
    entries[key] = new fields.SchemaField({ value: intField({ min: 0, max: 4, initial: 1 }) });
  }
  return new fields.SchemaField(entries);
}

function skillSchema() {
  const keys = [
    "smallArms", "longArms", "heavyWeapons", "demo", "meleeWeapons", "unarmed",
    "pilot", "medicine", "fix", "program", "stealth", "talk", "threaten",
    "athletics", "science", "survival"
  ];
  const entries = {};
  for (const key of keys) entries[key] = new fields.SchemaField({ value: intField({ min: 0, max: 6, initial: 0 }) });
  return new fields.SchemaField(entries);
}

export class NovumActorData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      schemaVersion: intField({ min: 1, max: 999, initial: 1 }),
      level: intField({ min: 1, max: 10, initial: 1 }),
      tier: intField({ min: 1, max: 4, initial: 1 }),
      attributes: attributeSchema(),
      skills: skillSchema(),
      resources: new fields.SchemaField({
        health: resourceField(14),
        shield: resourceField(0)
      }),
      movement: new fields.SchemaField({
        metres: intField({ min: 0, max: 99, initial: 8 })
      }),
      combat: new fields.SchemaField({
        meleeACOverride: intField({ min: -1, max: 99, initial: -1 }),
        armourFloorOverride: intField({ min: -1, max: 99, initial: -1 }),
        shieldMaxOverride: intField({ min: -1, max: 99, initial: -1 }),
        critThreshold: intField({ min: 18, max: 20, initial: 20 })
      }),
      notes: new fields.HTMLField({ required: true, nullable: false, blank: true, initial: "" })
    };
  }

  prepareDerivedData() {
    super.prepareDerivedData();
    this.resources.health.value = Math.min(this.resources.health.value, this.resources.health.max);
    this.resources.shield.value = Math.min(this.resources.shield.value, this.resources.shield.max);
  }
}

export class CharacterData extends NovumActorData {}
export class NPCData extends NovumActorData {}

class NovumItemData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      schemaVersion: intField({ min: 1, max: 999, initial: 1 }),
      description: new fields.HTMLField({ required: true, nullable: false, blank: true, initial: "" }),
      tier: intField({ min: 1, max: 4, initial: 1 }),
      traits: textField("")
    };
  }
}

function rangeEntry(dv, max) {
  return new fields.SchemaField({
    dv: intField({ min: 1, max: 99, initial: dv }),
    max: intField({ min: 0, max: 99999, initial: max })
  });
}

export class WeaponData extends NovumItemData {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      category: textField("smallArms"),
      kind: textField("ranged"),
      skill: textField("smallArms"),
      attribute: textField("dex"),
      damage: textField("2d6"),
      ablation: intField({ min: 0, max: 20, initial: 1 }),
      penetration: intField({ min: 0, max: 20, initial: 0 }),
      critThreshold: intField({ min: 18, max: 20, initial: 20 }),
      equipped: new fields.BooleanField({ required: true, nullable: false, initial: false }),
      range: new fields.SchemaField({
        close: rangeEntry(13, 12),
        medium: rangeEntry(15, 40),
        long: rangeEntry(19, 100),
        extreme: new fields.SchemaField({
          enabled: new fields.BooleanField({ required: true, nullable: false, initial: false }),
          dv: intField({ min: 1, max: 99, initial: 21 }),
          max: intField({ min: 0, max: 99999, initial: 200 })
        })
      }),
      modes: new fields.SchemaField({
        standard: new fields.BooleanField({ required: true, nullable: false, initial: true }),
        auto: new fields.BooleanField({ required: true, nullable: false, initial: false })
      }),
      magazine: new fields.SchemaField({
        current: intField({ min: 0, max: 999, initial: 0 }),
        max: intField({ min: 0, max: 999, initial: 0 })
      })
    };
  }
}

export class ArmourData extends NovumItemData {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      meleeAC: intField({ min: 0, max: 99, initial: 12 }),
      shieldMax: intField({ min: 0, max: 99, initial: 2 }),
      modCapacity: intField({ min: 0, max: 20, initial: 2 }),
      mobilityPenalty: intField({ min: -20, max: 0, initial: 0 }),
      concealability: textField("Standard"),
      equipped: new fields.BooleanField({ required: true, nullable: false, initial: false })
    };
  }
}

export class ArmourModData extends NovumItemData {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      floor: intField({ min: 0, max: 20, initial: 1 }),
      shieldBonus: intField({ min: 0, max: 20, initial: 0 }),
      capacityCost: intField({ min: 0, max: 20, initial: 1 }),
      compatibleTier: intField({ min: 1, max: 4, initial: 1 }),
      installed: new fields.BooleanField({ required: true, nullable: false, initial: false })
    };
  }
}
