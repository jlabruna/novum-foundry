import test from "node:test";
import assert from "node:assert/strict";

class Field {
  constructor(options = {}) { this.options = options; }
}
class SchemaField extends Field {}
class TypeDataModel { static defineSchema() { return {}; } prepareDerivedData() {} }
class ActorDocument {}
class ItemDocument {}
class ActorSheetV2 {}
class ItemSheetV2 {}

const onceHooks = new Map();
const onHooks = new Map();
const registrations = [];
const keybindings = [];

globalThis.Actor = ActorDocument;
globalThis.Item = ItemDocument;
globalThis.Hooks = {
  once: (name, callback) => onceHooks.set(name, callback),
  on: (name, callback) => onHooks.set(name, callback)
};
globalThis.CONFIG = { Actor: { dataModels: {} }, Item: { dataModels: {} } };
globalThis.CONST = { KEYBINDING_PRECEDENCE: { NORMAL: 0 } };
globalThis.game = {
  settings: { register() {} },
  keybindings: { register: (...args) => keybindings.push(args) }
};
globalThis.foundry = {
  abstract: { TypeDataModel },
  data: { fields: {
    NumberField: Field,
    StringField: Field,
    BooleanField: Field,
    HTMLField: Field,
    SchemaField
  } },
  documents: { Actor: ActorDocument, Item: ItemDocument },
  applications: {
    sheets: { ActorSheetV2, ItemSheetV2 },
    api: {
      HandlebarsApplicationMixin: Base => class extends Base {},
      DialogV2: class {}
    },
    apps: {
      DocumentSheetConfig: {
        registerSheet: (...args) => registrations.push(args)
      }
    }
  }
};

await import(`../novum.mjs?test=${Date.now()}`);

test("system entrypoint registers current v14 document models and AppV2 sheets", async () => {
  assert.ok(onceHooks.has("init"));
  await onceHooks.get("init")();
  assert.ok(CONFIG.Actor.dataModels.character);
  assert.ok(CONFIG.Actor.dataModels.npc);
  assert.ok(CONFIG.Item.dataModels.weapon);
  assert.ok(CONFIG.Item.dataModels.armour);
  assert.ok(CONFIG.Item.dataModels.armourMod);
  assert.equal(registrations.length, 3);
  assert.equal(CONFIG.Actor.documentClass.name, "NovumActor");
  assert.equal(CONFIG.Item.documentClass.name, "NovumItem");
  assert.ok(onHooks.has("renderChatMessageHTML"));
  assert.ok(onHooks.has("getSceneControlButtons"));
  assert.equal(keybindings.length, 1);
  assert.deepEqual(keybindings[0].slice(0, 2), ["novum", "toggleRangeOverlay"]);
});

test("actor schemas expose exactly six Attributes and sixteen Skills", () => {
  const schema = CONFIG.Actor.dataModels.character.defineSchema();
  assert.equal(Object.keys(schema.attributes.options).length, 6);
  assert.equal(Object.keys(schema.skills.options).length, 16);
});
