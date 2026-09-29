import { determineRangeBand } from "./combat-engine.mjs";

const UNIT_TO_METRES = Object.freeze({
  m: 1,
  metre: 1,
  metres: 1,
  meter: 1,
  meters: 1,
  km: 1000,
  kilometre: 1000,
  kilometres: 1000,
  kilometer: 1000,
  kilometers: 1000,
  ft: 0.3048,
  foot: 0.3048,
  feet: 0.3048,
  in: 0.0254,
  inch: 0.0254,
  inches: 0.0254,
  yd: 0.9144,
  yard: 0.9144,
  yards: 0.9144,
  mi: 1609.344,
  mile: 1609.344,
  miles: 1609.344
});

export function sceneUnitsToMetres(distance, units = "m") {
  const value = Number(distance);
  if (!Number.isFinite(value)) return null;
  const factor = UNIT_TO_METRES[String(units ?? "m").trim().toLowerCase()] ?? 1;
  return value * factor;
}

export function scenePixelsPerMetre(scene, grid) {
  const gridSize = Number(grid?.size);
  const metresPerGrid = sceneUnitsToMetres(scene?.grid?.distance, scene?.grid?.units);
  if (!Number.isFinite(gridSize) || gridSize <= 0 || !Number.isFinite(metresPerGrid) || metresPerGrid <= 0) return null;
  return gridSize / metresPerGrid;
}

export function measurePathMetres(grid, scene, points) {
  if (!grid?.measurePath) return null;
  const measurement = grid.measurePath(points);
  return sceneUnitsToMetres(measurement?.distance, scene?.grid?.units);
}

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

  const distance = measurePathMetres(canvas.grid, canvas.scene, [source.center, target.center]);
  if (!Number.isFinite(distance)) {
    return { source, target, targetCount: 1, distance: null, band: null, dv: null, beyond: false };
  }
  return {
    source,
    target,
    targetCount: 1,
    ...determineRangeBand(weapon.system.range, distance)
  };
}

export function measureAttackTargets(actor, weapon) {
  const { source, targets } = getAttackTokens(actor);
  if (!source || !canvas?.grid) return { source, targets: [], error: "Select the acting token and target every token affected by the Cone." };
  const measured = targets.map(target => {
    const distance = measurePathMetres(canvas.grid, canvas.scene, [source.center, target.center]);
    return { target, ...(Number.isFinite(distance) ? determineRangeBand(weapon.system.range, distance) : { distance: null, band: null, dv: null, beyond: false }) };
  });
  return { source, targets: measured };
}

export function hasAdjacentHostile(actor) {
  const { source } = getAttackTokens(actor);
  if (!source || !canvas?.grid) return false;
  const disposition = Number(source.document?.disposition ?? source.disposition ?? 0);
  const adjacency = sceneUnitsToMetres(canvas.scene?.grid?.distance, canvas.scene?.grid?.units) ?? 2;
  return Array.from(canvas.tokens?.placeables ?? []).some(target => {
    if (target === source || !target.actor) return false;
    const targetDisposition = Number(target.document?.disposition ?? target.disposition ?? 0);
    if (!disposition || !targetDisposition || Math.sign(disposition) === Math.sign(targetDisposition)) return false;
    const distance = measurePathMetres(canvas.grid, canvas.scene, [source.center, target.center]);
    return Number.isFinite(distance) && distance <= adjacency;
  });
}

export function titleCaseBand(band) {
  if (!band) return "Manual";
  return `${band.charAt(0).toUpperCase()}${band.slice(1)}`;
}
