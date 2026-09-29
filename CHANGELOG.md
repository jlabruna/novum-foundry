# Changelog

## 0.2.0 — 2026-09-29

- Added persistent Character progression for Levels 1–10, including the test
  HP sequence, Skill budgets/caps, three Background grants, and separate Level
  5/9 Attribute increases.
- Rebuilt the Character sheet around Combat, Progression, Feats, Equipment,
  and Notes tabs.
- Added two persistent Role choices, all seven level-1 Role ability summaries,
  and fourteen side-by-side placeholder Feat branches.
- Added one shared Feat pick at Levels 2/4/6/8/10, Level 2/4/6 selectable A/B
  pairs, mutual exclusion, level gates, and non-destructive invalid-state
  warnings. Level 8/10 content remains locked and future.
- Added Kinetic, Shard, and Laser weapon behavior; Auto now converts d6 damage
  dice to d4 while preserving flat modifiers.
- Added per-mode ammunition expenditure, insufficient-ammunition blocking, and
  a Main Action Reload control for Characters and NPCs.
- Replaced the seeded direct-fire Shotgun with the Close-only, Cone-only,
  4-square shared-roll version supporting multiple targets and friendly fire.
- Added the Shotgun adjacency exception and the general adjacent-hostile block
  for other two-handed ranged attacks.
- Converted the seeded LMG to Auto-only and exposed Suppressive Fire only as
  unavailable future data pending final rules.
- Expanded automated coverage from 26 to 34 tests before release staging.

## 0.1.2 — 2026-09-28

- Split Actor sheet portraits from prototype-token textures and converted all
  seeded tokens to circular, alpha-transparent Novum-ring assets.
- Replaced seven overly similar archetype portraits with a visibly broader mix
  of ages, genders, ethnicities, silhouettes, hair, and cybernetic details.
- Audited all 32 seeded ranged weapons and replaced oversized or indistinct
  range envelopes with class-specific pistol, SMG, shotgun, rifle, precision,
  and heavy-support profiles.
- Made Extreme Range optional and enabled it only for precision and selected
  heavy-support weapons.
- Unified token measurement and overlay radii through one Scene-unit-to-metre
  conversion path, including feet and other common configured units.
- Replaced stacked range circles with distinct translucent annular zones.
- Added Toggle/Hold activation, Foundry-configurable keybinding behaviour,
  per-band colour settings, and shared opacity.
- Updated seeded-content refresh handling for existing v0.1.1 playtest worlds.
- Preserved all v0.1.1 HP, Shield, melee, Standard, and Auto calibration.
- Expanded validation to 26 passing tests.

## 0.1.1 — 2026-09-28

- Renamed the complete product, system ID, namespace, repository metadata, and
  UI from the former working title to Novum.
- Applied the Novum near-black, ivory, and copper visual system with explicit
  readable value colours in Foundry dark and light themes.
- Recalibrated the playtest centreline to Shield 7/8/9/10 and HP 14/16/18/20.
- Added a separate lower melee damage scale after same-tier and cross-tier
  simulations showed the need to compensate for Shield bypass.
- Preserved Standard Ablation 1 and provisional Auto at −3 attack/Ablation 3.
- Added a configurable Shift+R range overlay, token-control toggle, and Actor
  sheet toggle driven by the readied ranged weapon.
- Added twelve original token portraits and assigned art to all 48 pregens.
- Expanded automated validation to 22 tests covering recalibration, themes,
  token paths, range overlays, combat, content, and v14 registration.

## 0.1.0 — 2026-09-28

- Added self-contained Foundry VTT v14 game system.
- Added Character and NPC DataModels and ApplicationV2 sheets.
- Added Weapon, Armour, and Armour Mod embedded Item types.
- Added weapon-specific automatic range-band measurement with manual override.
- Added ranged and melee attack resolution with exposed chat-card maths.
- Added review-before-apply HP/Shield updates and stale-card protection.
- Added Shield SP, Armour Floor, Melee AC, same-tier mod validation, and manual
  out-of-combat recharge.
- Added provisional Auto mode.
- Added first-run importer for 80 gear Items and 48 premade T1–T4 Actors.
- Added deterministic content generation and automated validation.
