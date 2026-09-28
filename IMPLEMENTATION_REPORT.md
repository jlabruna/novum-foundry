# Novum Foundry v0.1.2 implementation report

## Outcome

A complete local Git-ready Foundry game-system repository has been implemented
for the Combat Maths Baseline v1.0. The runtime package is self-contained and
uses system ID `novum`.

## Implemented

- v14 manifest and TypeDataModels.
- Character and compact NPC ApplicationV2 sheets.
- Weapon, Armour, and Armour Mod embedded Items and Item sheet.
- Six Attributes and the locked sixteen Skills.
- Levels 1–10 and T1–T4.
- Gear-derived Melee AC, Shield Max, Armour Floor, and current Ranged SP.
- Same-tier and mod-capacity validation.
- Token target measurement normalised from the current Scene units to metres.
- Audited weapon-specific Close/Medium/Long/optional Extreme distances and DVs.
- Standard, provisional Auto, precision penalties, and situational modifiers.
- Natural 1 miss, configurable 20/19–20/18–20 crit threshold, no margin crit.
- Combined ranged soak, Shield ablation, melee Shield bypass, and Floor soak.
- Full maths chat cards and guarded Apply Result flow.
- Manual out-of-combat Shield recharge and complete resource reset.
- ActiveEffect display/toggle/delete surface.
- 80 world-importable gear Items and 48 premade Actors.
- Separate full portraits and circular alpha-transparent ringed tokens assigned
  to every pregen, with a materially diversified twelve-archetype cast.
- Configurable keybinding, Toggle/Hold, token-control, sheet-button, band-colour,
  and opacity support for the annular range overlay.
- Explicit Novum semantic colour tokens for theme-independent readability.
- Recalibrated Shield 7/8/9/10 and HP 14/16/18/20 centreline.
- Separate melee damage progression validated against all armour profiles.
- Automated combat, content, syntax, and package tests.

## Validation performed

- JavaScript syntax checks across every `.mjs` file.
- Manifest, required asset, and seed-count validation.
- Hit, miss, natural 1, expanded crit, ranged soak, ablation, Shield 0,
  no-armour, melee bypass, and range-band unit tests.
- Four-tier Actor and gear coverage, 6/16 Attribute/Skill shape, embedded gear,
  same-tier mod, and capacity tests.
- Same-tier and cross-tier ranged/Auto/melee simulations.
- Shared Scene-unit conversion, Toggle/Hold behaviour, settings registration,
  packaged portrait/token alpha paths, and dark/light contrast checks.

## Runtime limitation

This workspace does not include a licensed Foundry v14 executable or test
server. v0.1.1 was launched successfully enough for the reported live visual
inspection, but the completed v0.1.2 package could not be launched in this
workspace. Final token, overlay, Hold-mode, refresh, and Forge-update acceptance
is explicitly pending.

## Intentionally deferred

Guided creation, Backgrounds, Roles, Feats, advancement, final HP, Trauma,
precision effects, cover, suppression, engagement, penetration automation,
full ammunition/reload, battery economy, hacking, drones, drugs/bio, support,
economy, maintenance, bosses, and Exotic rules.
