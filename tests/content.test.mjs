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

test("v0.1.1 pregens use the recalibrated HP/Shield bands", () => {
  const hp = { 1: 14, 2: 16, 3: 18, 4: 20 };
  const shield = { 1: 7, 2: 8, 3: 9, 4: 10 };
  for (const source of payload.actors) {
    assert.equal(source.document.system.resources.health.max, hp[source.tier]);
    const armour = source.document.items.find(item => item.type === "armour" && item.system.equipped);
    assert.ok(armour.system.shieldMax >= shield[source.tier] - 2);
  }
});

test("every premade has packaged Novum token art", async () => {
  for (const source of payload.actors) {
    const image = source.document.img;
    assert.equal(source.document.prototypeToken.texture.src, image);
    assert.match(image, /^systems\/novum\/assets\/tokens\/.+\.webp$/);
    await access(new URL(`../${image.replace("systems/novum/", "")}`, import.meta.url));
  }
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
