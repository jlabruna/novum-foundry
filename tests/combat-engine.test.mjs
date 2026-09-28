import test from "node:test";
import assert from "node:assert/strict";
import {
  determineRangeBand,
  resolveAttack,
  resolveMeleeDamage,
  resolveRangedDamage
} from "../module/combat-engine.mjs";

test("attack resolves hit and miss against a DV", () => {
  assert.equal(resolveAttack({ natural: 10, total: 16, target: 15 }).hit, true);
  assert.equal(resolveAttack({ natural: 8, total: 14, target: 15 }).hit, false);
});

test("natural 1 always misses and natural crit range always hits", () => {
  assert.deepEqual(resolveAttack({ natural: 1, total: 30, target: 13 }), { automaticMiss: true, critical: false, hit: false });
  assert.deepEqual(resolveAttack({ natural: 19, total: 8, target: 21, critThreshold: 19 }), { automaticMiss: false, critical: true, hit: true });
});

test("ranged protection subtracts combined SP once then ablates shield", () => {
  assert.deepEqual(resolveRangedDamage({ damage: 12, shield: 5, floor: 2, ablation: 1, hp: 24 }), {
    damage: 12, shield: 5, floor: 2, rangedSP: 7, hpDamage: 5, ablation: 1, nextShield: 4, hp: 24, nextHP: 19
  });
});

test("ranged ablation stops at the armour floor by reducing shield only", () => {
  const result = resolveRangedDamage({ damage: 3, shield: 1, floor: 4, ablation: 3, hp: 20 });
  assert.equal(result.rangedSP, 5);
  assert.equal(result.hpDamage, 0);
  assert.equal(result.nextShield, 0);
});

test("zero-shield and no-armour ranged edge cases are safe", () => {
  assert.equal(resolveRangedDamage({ damage: 8, shield: 0, floor: 3, ablation: 1, hp: 15 }).hpDamage, 5);
  assert.equal(resolveRangedDamage({ damage: 8, shield: 0, floor: 0, ablation: 1, hp: 15 }).hpDamage, 8);
});

test("melee ignores shield and applies Floor once", () => {
  assert.deepEqual(resolveMeleeDamage({ damage: 11, shield: 7, floor: 3, hp: 24 }), {
    damage: 11, shield: 7, floor: 3, hpDamage: 8, nextShield: 7, hp: 24, nextHP: 16
  });
});

test("range bands use weapon-specific distances and DVs", () => {
  const profile = {
    close: { max: 12, dv: 13 },
    medium: { max: 60, dv: 15 },
    long: { max: 180, dv: 19 },
    extreme: { enabled: false, max: 300, dv: 21 }
  };
  assert.equal(determineRangeBand(profile, 10).band, "close");
  assert.equal(determineRangeBand(profile, 50).dv, 15);
  assert.equal(determineRangeBand(profile, 181).beyond, true);
});

