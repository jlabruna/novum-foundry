# Novum Foundry v0.2.1 implementation report

v0.2.1 is a packaging-only correction. It preserves the complete v0.2.0
implementation below and fixes the release ZIP so `system.json` is at its root.

## Implemented

- Persistent two-Role selection on Character Actors.
- Dedicated tabbed Character UX with side-by-side Role/Feat panels.
- All seven Role ability summaries and all fourteen placeholder branches.
- Level 2/4/6 selectable A/B Feat pairs with level gates, paired exclusion, and
  one total cross-Role pick at Levels 2/4/6/8/10.
- Non-destructive warnings when a saved Feat or Attribute milestone is invalid
  after lowering Level or changing Role.
- HP 14/14/15/16/16/17/18/18/19/20, Skill budgets/caps/costing, three
  provisional Background skill grants, and Level 5/9 Attribute controls.
- Kinetic, Shard, and Laser damage/Ablation behavior plus Kinetic-only Auto.
- Mode-specific magazines/charge pools, ammunition consumption on every
  attack, insufficient-ammunition blocking, and Main Action reloads.
- Close-only, Cone-only Shotgun using a shared attack/damage roll against all
  manually targeted affected tokens, including allies.
- Two-handed ranged adjacency blocking with the intentional Shotgun exception.
- Auto-only LMG data with Suppressive Fire visibly unavailable.
- Updated deterministic T1–T4 catalogue and pregens without changing the
  catalogue count of 80 Items and 48 Actors.

## Rules interpreted for implementation

- Background packages do not yet exist, so the sheet records the three fixed
  Rank-1 grants directly rather than inventing named Backgrounds.
- A selected Feat consumes one of the cumulative even-level slots and may come
  from either Role. An unchosen lower-level decision remains available later.
- Shotgun damage is rolled once and shared across successful targets, matching
  its one shared attack-roll workflow and keeping chat application auditable.
- Cone geometry uses a physical/native table template plus manual token
  targeting. This enforces range and multi-target resolution without inventing
  unresolved diagonal-template rules.
- Reload posts a Main Action declaration but does not implement a new action
  economy tracker.

## Intentionally nonfunctional

Placeholder Feats and Role abilities have no effects. Suppressive Fire is not
selectable. Hardness interaction, smart guidance, Expression Vectors, hacking,
drones, neural vehicle integration, social encounters, Trauma, Penetration,
and final cover/concealment mechanics remain future work.

## Verification

`npm run validate` regenerates content, validates the package, syntax-checks
all JavaScript modules, and runs 34 tests. Release staging additionally checks
that `novum-v0.2.1.zip` contains exactly one root-level `system.json`. A licensed
Foundry v14.368 runtime is not available in this workspace, so visual and
interaction acceptance remains a manual smoke test.
