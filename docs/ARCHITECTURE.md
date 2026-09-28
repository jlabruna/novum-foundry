# Architecture

## Package boundary

`novum` is one Foundry game system. It has no dependency on SWNR, Cities
Without Number, or companion modules.

## Entry point

`novum.mjs` performs v14 initialisation:

- registers Actor and Item document classes;
- registers TypeDataModels;
- registers ApplicationV2 sheets through `DocumentSheetConfig`;
- defines trackable token resources;
- installs settings and chat-card hooks;
- installs the keybound/token-control range overlay;
- exposes the small `game.novum` public API after `ready`.

## Data layer

`module/data-models.mjs` defines:

- Character and NPC Actor data;
- Weapon, Armour, and Armour Mod Item data.

PCs and NPCs currently share a combat model while retaining separate document
types and sheets. This allows a future streamlined NPC model to migrate without
changing Character identity.

`module/documents.mjs` owns equipment derivation and Actor-facing actions. The
Actor derives one protection profile from an equipped armour chassis and valid
installed same-tier mods. Explicit override fields use `-1` as the unambiguous
"derive from gear" sentinel.

Foundry ActiveEffects remain the future condition/effect mechanism. The Actor
sheets expose current effects without creating an Novum-specific parallel
condition store.

## Combat layer

`module/combat-engine.mjs` is pure JavaScript and contains the rules that can be
tested without a Foundry runtime:

- attack hit/critical resolution;
- ranged combined-SP soak and Shield ablation;
- melee Shield bypass and Floor soak;
- weapon-profile range selection.

`module/combat.mjs` integrates those functions with Foundry Roll, DialogV2,
token targeting, grid measurement, and ChatMessage APIs.

`module/chat.mjs` applies a calculated result only after user review. It stores
pre/post values in message flags, checks permission, and refuses application if
the target has changed since the roll.

## Range

`module/range.mjs` uses `canvas.grid.measurePath` between token centres. It uses
the Scene's configured distance units, while the system manifest makes new
Scenes default to 2 metres per square. Range bands remain weapon data and can be
overridden in the roll dialog.

`module/range-overlay.mjs` uses the same weapon range data to draw temporary
Close/Medium/Long circles in the interface canvas group. It converts metres to
pixels from the active Scene's grid size and distance, requires one controlled
token and one readied ranged weapon, and clears safely when either disappears.
It does not create persistent Drawing documents.

## Content

`tools/build-playtest-content.mjs` deterministically produces
`data/playtest-content.json`. A first-run importer creates normal world Actor,
Item, and Folder documents. This was chosen over committing opaque LevelDB pack
files so seeded values remain reviewable, testable, and easy to regenerate
during early balance iteration.

Seed identities live in `flags.novum.seedId`; reruns skip existing seeded
documents rather than duplicating them.

Twelve original archetype portraits are packaged in `assets/tokens/` and reused
across tier-scaled versions. Actor images and prototype-token textures are
assigned by the deterministic content generator.

## Future extension points

- Additional Item DataModels can be registered for Feats, Roles, cyberware,
  drugs, drones, programs, and abilities.
- ActiveEffects can alter typed Actor fields.
- Future action providers can populate the existing Action Centre.
- Penetration, precision effects, Trauma, batteries, and fire-mode procedures
  can extend the attack payload without changing the review/apply boundary.
- A data migration version is reserved in both Actor/Item schemas and settings.
