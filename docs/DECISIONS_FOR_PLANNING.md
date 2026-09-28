# Decisions and questions returning to Planning Chat

## Implementation decisions made within the handover

- The first release uses normal world folders and an idempotent importer rather
  than opaque precompiled compendium databases. This keeps early test content
  directly reviewable and replaceable.
- `-1` means "derive from gear" for Melee AC, Armour Floor, and Shield Max
  overrides; zero remains a valid deliberate test value.
- ActiveEffects are retained as the extensible conditions architecture.
- Auto uses the supplied provisional −3 attack / Ablation 3 benchmark.
- Penetration is stored but not automated because its interaction with Floor and
  Shield is unresolved.
- A natural result inside the configured crit range automatically hits, but
  deals no invented bonus damage. Positive HP damage on a crit is flagged as
  Trauma pending.
- T1/T2/T3/T4 premades use Levels 1/5/9/10 so the first three align with the
  planned test bands while preserving a top-tier Level 10 anchor.
- The v0.1.2 build preserves the v0.1.1 playtest centreline of Shield
  7/8/9/10 and HP 14/16/18/20.
  These are implemented calibration values, not final character-building rules.
- Melee uses its own lower damage progression because it bypasses Shield SP.
  Melee AC and Armour Floor did not require a global increase in this pass.
- Standard Fire remains Ablation 1. Auto remains provisional at −3 attack and
  Ablation 3.
- One readied weapon at a time provides an unambiguous source for the Scene
  range-band overlay.
- v0.1.2 weapon profiles intentionally separate physical band limits from DVs;
  precision and selected heavy-support weapons alone receive Extreme.
- Attacks and overlay radii share one metre-normalised Scene-distance source.
- Seeded Actors keep full sheet portraits and use separate circular
  alpha-transparent prototype tokens.

## Decisions still needed

- Final HP formula, Shield formula, and scaling after live playtests.
- Final Auto procedure, ammunition use, magazines, and reloads.
- Penetration's exact interaction with Shield SP and Armour Floor.
- Final melee damage and Attribute behaviour.
- Armour mobility consequences.
- Battery value, time, price, and carrying rules for Shield recharge.
- Precision-shot targets and effects.
- Trauma table and timing.
- Cover, concealment, suppression, engagement, and retreat.
- Whether the Shield Capacitor remains a legal ordinary mod and what its final
  opportunity cost should be.
- Whether release content should move into v14 compendium packs once the item
  catalogue stabilises.
