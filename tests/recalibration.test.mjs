import test from "node:test";
import assert from "node:assert/strict";

const tiers = {
  1: { attack: 4, ac: 14, floor: 1, shield: 7, hp: 14, ranged: [2, 6, 2], melee: [2, 6, 0] },
  2: { attack: 6, ac: 15, floor: 2, shield: 8, hp: 16, ranged: [3, 6, 0], melee: [2, 6, 1] },
  3: { attack: 8, ac: 16, floor: 3, shield: 9, hp: 18, ranged: [3, 6, 1], melee: [2, 6, 2] },
  4: { attack: 10, ac: 17, floor: 4, shield: 10, hp: 20, ranged: [3, 6, 2], melee: [3, 6, 0] }
};

const profiles = {
  balanced: { ac: 0, shield: 0, floor: 0 },
  shieldHeavy: { ac: -1, shield: 3, floor: 0 },
  heavy: { ac: 2, shield: -1, floor: 1 },
  agile: { ac: 1, shield: -1, floor: 0 }
};

function random(seed) {
  let state = seed >>> 0;
  return () => ((state = (Math.imul(state, 1664525) + 1013904223) >>> 0) / 0x100000000);
}

function die(rng, sides) { return 1 + Math.floor(rng() * sides); }
function damage(rng, [count, sides, bonus]) {
  let total = bonus;
  for (let i = 0; i < count; i += 1) total += die(rng, sides);
  return total;
}

function averageAttacks(attackerTier, defenderTier, profileName, mode, iterations = 8000) {
  const attacker = tiers[attackerTier];
  const defender = tiers[defenderTier];
  const profile = profiles[profileName];
  const rng = random(0x4e4f5655 + attackerTier * 101 + defenderTier * 1009 + mode.length * 7919 + profileName.length * 65537);
  let totalAttacks = 0;
  for (let iteration = 0; iteration < iterations; iteration += 1) {
    let hp = defender.hp;
    let shield = Math.max(0, defender.shield + profile.shield);
    const floor = defender.floor + profile.floor;
    let attacks = 0;
    while (hp > 0 && attacks < 100) {
      attacks += 1;
      const natural = die(rng, 20);
      const target = mode === "melee" ? defender.ac + profile.ac : 13;
      const bonus = attacker.attack + (mode === "auto" ? -3 : 0);
      const hit = natural === 20 || (natural !== 1 && natural + bonus >= target);
      if (!hit) continue;
      const rolled = damage(rng, mode === "melee" ? attacker.melee : attacker.ranged);
      if (mode === "melee") hp -= Math.max(0, rolled - floor);
      else {
        hp -= Math.max(0, rolled - shield - floor);
        shield = Math.max(0, shield - (mode === "auto" ? 3 : 1));
      }
    }
    totalAttacks += attacks;
  }
  return totalAttacks / iterations;
}

test("same-tier ranged exchanges remain playable across T1-T4", () => {
  for (const tier of [1, 2, 3, 4]) {
    const standard = averageAttacks(tier, tier, "balanced", "standard");
    const auto = averageAttacks(tier, tier, "balanced", "auto");
    assert.ok(standard >= 7.5 && standard <= 10, `T${tier} standard ${standard}`);
    assert.ok(auto >= 6 && auto <= 9, `T${tier} auto ${auto}`);
    assert.ok(auto <= standard + 0.25, `T${tier} Auto should remain a useful shield-stripping option`);
  }
});

test("melee bypass creates matchups without universal dominance", () => {
  for (const tier of [1, 2, 3, 4]) {
    const balanced = averageAttacks(tier, tier, "balanced", "melee");
    const shieldHeavy = averageAttacks(tier, tier, "shieldHeavy", "melee");
    const heavy = averageAttacks(tier, tier, "heavy", "melee");
    assert.ok(balanced >= 4.5 && balanced <= 6.25, `T${tier} balanced melee ${balanced}`);
    assert.ok(shieldHeavy < balanced, `T${tier} shield-heavy should be melee-vulnerable`);
    assert.ok(heavy >= balanced + 1, `T${tier} high-Floor/high-AC armour should resist melee`);
  }
});

test("cross-tier exchanges preserve strong asymmetry", () => {
  const t1IntoT4 = averageAttacks(1, 4, "balanced", "standard");
  const t4IntoT1 = averageAttacks(4, 1, "balanced", "standard");
  assert.ok(t1IntoT4 >= 15);
  assert.ok(t4IntoT1 <= 4.5);
});
