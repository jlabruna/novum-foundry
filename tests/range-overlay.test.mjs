import test from "node:test";
import assert from "node:assert/strict";
import { rangeRadii } from "../module/range-overlay.mjs";

test("range overlay converts weapon metres to scene pixels", () => {
  const radii = rangeRadii({
    close: { max: 12 },
    medium: { max: 60 },
    long: { max: 180 }
  }, 50);
  assert.deepEqual(radii, { close: 600, medium: 3000, long: 9000 });
});

test("range overlay rejects incomplete or invalid profiles", () => {
  assert.equal(rangeRadii(null, 50), null);
  assert.equal(rangeRadii({ close: { max: 12 }, medium: { max: 60 }, long: { max: 0 } }, 50), null);
  assert.equal(rangeRadii({ close: { max: 12 }, medium: { max: 60 }, long: { max: 180 } }, 0), null);
});
