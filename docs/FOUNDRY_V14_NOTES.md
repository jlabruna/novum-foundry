# Foundry v14 implementation notes

Targeted version: **Foundry Virtual Tabletop 14.368, Stable 10** (released
16 September 2026).

Authoritative references consulted before implementation:

- https://foundryvtt.com/releases/14.368
- https://foundryvtt.com/releases/
- https://foundryvtt.com/article/system-development/
- https://foundryvtt.com/article/system-data-models/
- https://foundryvtt.com/api/modules/foundry.applications.html
- https://foundryvtt.com/api/modules/foundry.applications.sheets.html
- https://foundryvtt.com/api/classes/foundry.grid.BaseGrid.html
- https://foundryvtt.com/api/functions/hookEvents.renderChatMessageHTML.html

The system deliberately avoids deprecated ApplicationV1 ActorSheet and
ItemSheet classes. It uses TypeDataModel schemas, ActorSheetV2/ItemSheetV2 with
HandlebarsApplicationMixin, DocumentSheetConfig registration, DialogV2, modern
HTML chat hooks, embedded Items, and BaseGrid path measurement.

No licensed Foundry server executable is present in this development workspace,
so automated validation covers syntax, manifest/package shape, deterministic
content, and the pure combat engine. A first live smoke test in the user's
Foundry 14.368 environment remains required before describing the package as
runtime-verified.

