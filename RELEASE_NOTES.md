# Novum Foundry v0.2.0 — Progression, Feats, and Weapon Modes

Novum v0.2.0 turns the combat-calibration build into a usable Level 1–10
character-progression playtest while preserving its Foundry v14.368 baseline.

Characters now have dedicated Combat, Progression, Feats, Equipment, and Notes
views. The Progression view tracks the current HP sequence, Skill budgets and
caps, three Background Rank-1 grants, and the distinct Level 5 and Level 9
Attribute increases. The Feats view stores two Roles, presents both Role panels
side by side, shows each level-1 Role ability, and exposes the complete
placeholder Level 2/4/6 A/B tree. Picks share one cross-Role budget, paired
choices lock correctly, and lowering Level never silently deletes a choice.
Level 8 and Level 10 remain visible future gates. Feat effects are intentionally
nonfunctional in this release.

Combat now resolves the test Kinetic, Shard, and Laser rules. Auto applies its
−3 attack penalty, converts d6 weapon dice to d4, preserves flat modifiers,
uses Ablation 3, and spends the weapon's Auto ammunition. Shard uses d4 damage,
normal accuracy, Ablation 2, and no Auto. Laser uses d8 damage and Ablation 0.
Per-mode ammunition is consumed on misses as well as hits, and Reload is
available as a clearly labelled Main Action.

The seeded Shotgun is now Close-only and Cone-only: its full four-square
1/2/3/4 pattern uses one shared attack roll and one shared damage roll against
all manually targeted affected tokens, including allies. It can fire adjacent
to a hostile; other two-handed ranged attacks cannot. Automatic template
placement/geometry validation is not included, so the table must place or
agree the Cone and select all affected tokens.

Suppressive Fire, Feat effects, Role-ability effects, technology-versus-
Hardness interactions, smart guidance, drones, hacking, Expression Vectors,
and neural vehicle integration remain unavailable future systems.

Automated validation passes 34 tests. Final live acceptance still requires a
smoke test in Foundry VTT v14.368.
