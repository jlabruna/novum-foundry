import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

const payload = JSON.parse(await readFile(new URL("../data/playtest-content.json", import.meta.url), "utf8"));

test("playtest content includes all four tiers and 48 premade Actors", () => {
  assert.equal(payload.actors.length, 48);
  for (const tier of [1, 2, 3, 4]) {
    const actors = payload.actors.filter(actor => actor.tier === tier);
    assert.equal(actors.length, 12);
    assert.equal(actors.filter(actor => actor.type === "character").length, 6);
    assert.equal(actors.filter(actor => actor.type === "npc").length, 6);
  }
});

test("every premade has six Attributes, sixteen Skills, and embedded combat gear", () => {
  for (const source of payload.actors) {
    assert.equal(Object.keys(source.document.system.attributes).length, 6);
    assert.equal(Object.keys(source.document.system.skills).length, 16);
    assert.ok(source.document.items.some(item => item.type === "weapon" && item.system.equipped));
    assert.ok(source.document.items.some(item => item.type === "armour" && item.system.equipped));
    assert.ok(source.document.items.some(item => item.type === "armourMod" && item.system.installed));
  }
});

test("v0.2.0 pregens use the current level HP progression and Shield bands", () => {
  const hp = { 1: 14, 2: 16, 3: 19, 4: 20 };
  const shield = { 1: 7, 2: 8, 3: 9, 4: 10 };
  for (const source of payload.actors) {
    assert.equal(source.document.system.resources.health.max, hp[source.tier]);
    const armour = source.document.items.find(item => item.type === "armour" && item.system.equipped);
    assert.ok(armour.system.shieldMax >= shield[source.tier] - 2);
  }
});

test("every premade has packaged Novum token art", async () => {
  for (const source of payload.actors) {
    const portrait = source.document.img;
    const token = source.document.prototypeToken.texture.src;
    assert.notEqual(token, portrait);
    assert.match(portrait, /^systems\/novum\/assets\/portraits\/.+\.webp$/);
    assert.match(token, /^systems\/novum\/assets\/tokens\/.+\.webp$/);
    await access(new URL(`../${portrait.replace("systems/novum/", "")}`, import.meta.url));
    const tokenFile = new URL(`../${token.replace("systems/novum/", "")}`, import.meta.url);
    const bytes = await readFile(tokenFile);
    assert.notEqual(bytes.indexOf(Buffer.from("ALPH")), -1, `${token} must contain WebP alpha data`);
  }
});

test("all ranged weapons have increasing, class-specific range profiles", () => {
  const ranged = payload.items.filter(source => source.document.type === "weapon" && source.document.system.kind === "ranged");
  assert.equal(ranged.length, 32);
  for (const source of ranged) {
    const range = source.document.system.range;
    assert.ok(range.close.max > 0);
    if (source.document.system.modes.cone) {
      assert.equal(range.medium.max, 0);
      assert.equal(range.long.max, 0);
      continue;
    }
    assert.ok(range.close.max < range.medium.max);
    assert.ok(range.medium.max < range.long.max);
    if (range.extreme.enabled) assert.ok(range.extreme.max > range.long.max);
  }

  const tierOne = Object.fromEntries(ranged.filter(source => source.tier === 1).map(source => [source.seedId, source.document.system.range]));
  assert.deepEqual(tierOne["weapon-t1-compact-smg"], {
    close: { dv: 13, max: 12 }, medium: { dv: 15, max: 30 }, long: { dv: 19, max: 55 }, extreme: { enabled: false, dv: 21, max: 55 }
  });
  assert.equal(tierOne["weapon-t1-breach-shotgun"].long.max, 0);
  assert.equal(tierOne["weapon-t1-precision-rifle"].long.dv, 13);
  assert.equal(tierOne["weapon-t1-precision-rifle"].extreme.enabled, true);
  assert.equal(tierOne["weapon-t1-support-rifle"].close.dv, 17);
  assert.notDeepEqual(tierOne["weapon-t1-compact-smg"], tierOne["weapon-t1-assault-rifle"]);
});

test("seeded fire modes, technologies, magazines, and ammunition costs match the playtest package", () => {
  const tierOne = Object.fromEntries(payload.items.filter(source => source.tier === 1 && source.document.type === "weapon").map(source => [source.seedId, source.document.system]));
  assert.equal(tierOne["weapon-t1-service-pistol"].magazine.max, 12);
  assert.equal(tierOne["weapon-t1-service-pistol"].ammo.standard, 2);
  assert.equal(tierOne["weapon-t1-compact-smg"].ammo.auto, 12);
  assert.equal(tierOne["weapon-t1-assault-rifle"].modes.auto, true);
  assert.equal(tierOne["weapon-t1-breach-shotgun"].modes.standard, false);
  assert.equal(tierOne["weapon-t1-breach-shotgun"].modes.cone, true);
  assert.equal(tierOne["weapon-t1-breach-shotgun"].magazine.max, 6);
  assert.equal(tierOne["weapon-t1-military-revolver"].technology, "shard");
  assert.equal(tierOne["weapon-t1-precision-rifle"].technology, "laser");
  assert.equal(tierOne["weapon-t1-auto-support"].modes.standard, false);
  assert.equal(tierOne["weapon-t1-auto-support"].ammo.suppressive, 20);
});

test("world gear catalogue covers requested categories at every tier", () => {
  assert.equal(payload.items.length, 80);
  for (const tier of [1, 2, 3, 4]) {
    const items = payload.items.filter(item => item.tier === tier);
    assert.equal(items.filter(item => item.document.type === "weapon").length, 12);
    assert.equal(items.filter(item => item.document.type === "armour").length, 5);
    assert.equal(items.filter(item => item.document.type === "armourMod").length, 3);
  }
});

test("same-tier embedded mods are valid for their equipped armour", () => {
  for (const source of payload.actors) {
    const armour = source.document.items.find(item => item.type === "armour" && item.system.equipped);
    const mods = source.document.items.filter(item => item.type === "armourMod" && item.system.installed);
    assert.ok(mods.every(mod => mod.system.compatibleTier === armour.system.tier));
    assert.ok(mods.reduce((sum, mod) => sum + mod.system.capacityCost, 0) <= armour.system.modCapacity);
  }
});
