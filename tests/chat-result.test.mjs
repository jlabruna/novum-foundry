import test from "node:test";
import assert from "node:assert/strict";
import { resultMatchesActor } from "../module/chat.mjs";

test("Apply Result stale-state guard accepts only the recorded HP and Shield", () => {
  const result = { pre: { hp: 14, shield: 7 } };
  const actor = { system: { resources: { health: { value: 14 }, shield: { value: 7 } } } };
  assert.equal(resultMatchesActor(result, actor), true);
  actor.system.resources.shield.value = 6;
  assert.equal(resultMatchesActor(result, actor), false);
  actor.system.resources.shield.value = 7;
  actor.system.resources.health.value = 10;
  assert.equal(resultMatchesActor(result, actor), false);
});
