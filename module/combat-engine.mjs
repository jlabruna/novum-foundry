/** Pure combat functions. These deliberately have no Foundry dependency. */

export function clamp(value, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number)) return min;
  return Math.min(max, Math.max(min, number));
}

export function resolveAttack({ natural, total, target, critThreshold = 20 }) {
  natural = clamp(natural, 1, 20);
  critThreshold = clamp(critThreshold, 18, 20);
  target = Number(target);
  total = Number(total);

  const automaticMiss = natural === 1;
  const critical = !automaticMiss && natural >= critThreshold;
  const hit = !automaticMiss && (critical || (Number.isFinite(target) && total >= target));
  return { automaticMiss, critical, hit };
}

export function resolveRangedDamage({ damage, shield, floor, ablation = 1, hp }) {
  damage = Math.max(0, Number(damage) || 0);
  shield = Math.max(0, Number(shield) || 0);
  floor = Math.max(0, Number(floor) || 0);
  hp = Math.max(0, Number(hp) || 0);
  ablation = Math.max(0, Number(ablation) || 0);

  const rangedSP = shield + floor;
  const hpDamage = Math.max(0, damage - rangedSP);
  const nextShield = Math.max(0, shield - ablation);
  const nextHP = Math.max(0, hp - hpDamage);

  return { damage, shield, floor, rangedSP, hpDamage, ablation, nextShield, hp, nextHP };
}

export function resolveMeleeDamage({ damage, shield, floor, hp }) {
  damage = Math.max(0, Number(damage) || 0);
  shield = Math.max(0, Number(shield) || 0);
  floor = Math.max(0, Number(floor) || 0);
  hp = Math.max(0, Number(hp) || 0);

  const hpDamage = Math.max(0, damage - floor);
  const nextHP = Math.max(0, hp - hpDamage);
  return { damage, shield, floor, hpDamage, nextShield: shield, hp, nextHP };
}

export function determineRangeBand(profile, distance) {
  distance = Number(distance);
  if (!Number.isFinite(distance) || distance < 0) {
    return { band: null, dv: null, distance: null, beyond: false };
  }

  for (const band of ["close", "medium", "long"]) {
    const entry = profile?.[band];
    if (entry && distance <= Number(entry.max)) {
      return { band, dv: Number(entry.dv), distance, beyond: false };
    }
  }

  const extreme = profile?.extreme;
  if (extreme?.enabled && distance <= Number(extreme.max)) {
    return { band: "extreme", dv: Number(extreme.dv), distance, beyond: false };
  }
  return { band: "beyond", dv: null, distance, beyond: true };
}

export function normaliseDamageFormula(formula, fallback = "1d6") {
  const value = String(formula ?? "").trim();
  return value || fallback;
}

