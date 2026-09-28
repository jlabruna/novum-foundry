import { determineRangeBand } from "./combat-engine.mjs";

export function getAttackTokens(actor) {
  const targets = Array.from(game.user?.targets ?? []);
  let source = actor.token?.object ?? null;
  if (!source) source = canvas?.tokens?.controlled?.find(token => token.actor?.id === actor.id) ?? null;
  if (!source) source = actor.getActiveTokens?.(true, true)?.[0] ?? null;
  return { source, targets };
}

export function measureAttackRange(actor, weapon) {
  const { source, targets } = getAttackTokens(actor);
  if (targets.length > 1) {
    return { source, target: null, targetCount: targets.length, error: "Target exactly one token for automatic range handling." };
  }

  const target = targets[0] ?? null;
  if (!source || !target || !canvas?.grid) {
    return { source, target, targetCount: targets.length, distance: null, band: null, dv: null, beyond: false };
  }

  const measurement = canvas.grid.measurePath([source.center, target.center]);
  const distance = Number(measurement.distance);
  return {
    source,
    target,
    targetCount: 1,
    ...determineRangeBand(weapon.system.range, distance)
  };
}

export function titleCaseBand(band) {
  if (!band) return "Manual";
  return `${band.charAt(0).toUpperCase()}${band.slice(1)}`;
}

