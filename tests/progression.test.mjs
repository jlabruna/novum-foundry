import test from "node:test";
import assert from "node:assert/strict";
import {
  buildRolePanels,
  canSelectFeat,
  featCatalogue,
  featSlotsForLevel,
  hpForLevel,
  progressionState,
  skillCapForLevel,
  skillPointsForLevel,
  skillPointsSpent,
  skillRankCost,
  validateFeatSelections
} from "../module/progression.mjs";

test("level progression exposes the agreed HP, Skill caps, and one Feat pick every even level", () => {
  assert.deepEqual(Array.from({ length: 10 }, (_, index) => hpForLevel(index + 1)), [14, 14, 15, 16, 16, 17, 18, 18, 19, 20]);
  assert.deepEqual(Array.from({ length: 10 }, (_, index) => skillCapForLevel(index + 1)), [3, 3, 4, 4, 4, 4, 5, 5, 5, 6]);
  assert.equal(skillPointsForLevel(1), 6);
  assert.equal(skillPointsForLevel(10), 24);
  assert.deepEqual(Array.from({ length: 10 }, (_, index) => featSlotsForLevel(index + 1)), [0, 1, 1, 2, 2, 3, 3, 4, 4, 5]);
});

test("Skill costs are one point through Rank 3 and two points thereafter", () => {
  assert.deepEqual(Array.from({ length: 7 }, (_, rank) => skillRankCost(rank)), [0, 1, 2, 3, 5, 7, 9]);
  assert.equal(skillPointsSpent({ medicine: { value: 4 } }, ["medicine"]), 4);
});

test("all seven Roles expose two branches with three A/B placeholder decisions", () => {
  const feats = featCatalogue();
  assert.equal(feats.length, 7 * 2 * 3 * 2);
  const panels = buildRolePanels({ roles: ["soldier", "engineer"], selections: [], level: 2 });
  assert.equal(panels.length, 2);
  assert.ok(panels.every(panel => panel.branches.length === 2));
  assert.ok(panels.every(panel => panel.branches.every(branch => branch.decisions.length === 3)));
});

test("Feat selection enforces Role access, level gates, total slots, and paired exclusion", () => {
  const controlled = featCatalogue().find(feat => feat.name === "Controlled Fire");
  const fullSend = featCatalogue().find(feat => feat.name === "Full Send");
  assert.equal(canSelectFeat({ featId: controlled.id, selections: [], roles: ["engineer"], level: 2 }).allowed, false);
  assert.equal(canSelectFeat({ featId: controlled.id, selections: [], roles: ["soldier"], level: 1 }).allowed, false);
  assert.equal(canSelectFeat({ featId: controlled.id, selections: [], roles: ["soldier"], level: 2 }).allowed, true);
  assert.equal(canSelectFeat({ featId: fullSend.id, selections: [controlled.id], roles: ["soldier"], level: 4 }).allowed, false);
  assert.equal(validateFeatSelections({ selections: [controlled.id, fullSend.id], roles: ["soldier"], level: 4 }).valid, false);
});

test("progression state preserves invalid lowered-level choices and reports them", () => {
  const selected = featCatalogue().find(feat => feat.name === "Critical Focus");
  const state = progressionState({
    level: 2,
    progression: { roles: { primary: "operative", secondary: "soldier" }, feats: [selected.id], backgroundSkills: [], attributeAdvances: {} },
    skills: {}
  });
  assert.deepEqual(state.selections, [selected.id]);
  assert.ok(state.warnings.some(message => message.includes("requires Level 4")));
});
