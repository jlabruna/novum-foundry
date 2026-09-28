import test from "node:test";
import assert from "node:assert/strict";
import { rangeOverlayKeyAction, rangeRadii, rangeZones } from "../module/range-overlay.mjs";
import { measurePathMetres, scenePixelsPerMetre, sceneUnitsToMetres } from "../module/range.mjs";

test("range overlay converts weapon metres to scene pixels", () => {
  const radii = rangeRadii({
    close: { max: 12 },
    medium: { max: 60 },
    long: { max: 180 },
    extreme: { enabled: true, max: 360 }
  }, 50);
  assert.deepEqual(radii, { close: 600, medium: 3000, long: 9000, extreme: 18000 });
  assert.deepEqual(rangeZones(radii), [
    { band: "close", inner: 0, outer: 600 },
    { band: "medium", inner: 600, outer: 3000 },
    { band: "long", inner: 3000, outer: 9000 },
    { band: "extreme", inner: 9000, outer: 18000 }
  ]);
});

test("range overlay rejects incomplete or invalid profiles", () => {
  assert.equal(rangeRadii(null, 50), null);
  assert.equal(rangeRadii({ close: { max: 12 }, medium: { max: 60 }, long: { max: 0 } }, 50), null);
  assert.equal(rangeRadii({ close: { max: 12 }, medium: { max: 60 }, long: { max: 180 } }, 0), null);
  assert.equal(rangeRadii({ close: { max: 20 }, medium: { max: 10 }, long: { max: 30 } }, 50), null);
  assert.equal(rangeRadii({ close: { max: 10 }, medium: { max: 20 }, long: { max: 30 }, extreme: { enabled: true, max: 25 } }, 50), null);
});

test("scene distance conversion has one metric source for attacks and overlays", () => {
  assert.equal(sceneUnitsToMetres(10, "m"), 10);
  assert.equal(sceneUnitsToMetres(10, "ft"), 3.048);
  assert.equal(scenePixelsPerMetre({ grid: { distance: 2, units: "m" } }, { size: 100 }), 50);
  assert.equal(scenePixelsPerMetre({ grid: { distance: 5, units: "ft" } }, { size: 100 }), 100 / 1.524);
  const grid = { measurePath: () => ({ distance: 30 }) };
  assert.equal(measurePathMetres(grid, { grid: { units: "ft" } }, [{}, {}]), 9.144);
});

test("toggle and hold keybinding modes have stable down/up behaviour", () => {
  assert.equal(rangeOverlayKeyAction("toggle", "down"), "toggle");
  assert.equal(rangeOverlayKeyAction("toggle", "up"), "none");
  assert.equal(rangeOverlayKeyAction("hold", "down"), "enable");
  assert.equal(rangeOverlayKeyAction("hold", "up"), "disable");
});
