# Decisions and questions returning to Planning Chat

## Implementation decisions made within the handover

- The first release uses normal world folders and an idempotent importer rather
  than opaque precompiled compendium databases. This keeps early test content
  directly reviewable and replaceable.
- `-1` means "derive from gear" for Melee AC, Armour Floor, and Shield Max
  overrides; zero remains a valid deliberate test value.
- ActiveEffects are retained as the extensible conditions architecture.
- Auto currently uses −3 attack, steps every d6 damage die to d4 while
  preserving flat modifiers, and applies Ablation 3. Foundry v0.2.0 implements
  that conversion and the selected mode's ammunition cost.
- Penetration is stored but not automated because its interaction with Floor and
  Shield is unresolved.
- A natural result inside the configured crit range automatically hits, but
  deals no invented bonus damage. Positive HP damage on a crit is flagged as
  Trauma pending.
- T1/T2/T3/T4 premades use Levels 1/5/9/10 so the first three align with the
  planned test bands while preserving a top-tier Level 10 anchor.
- The v0.2.0 build preserves the Shield centreline of 7/8/9/10 and uses HP
  14/16/19/20 for its Level 1/5/9/10 seeded snapshots.
  These are implemented calibration values, not final character-building rules.
- Melee uses its own lower damage progression because it bypasses Shield SP.
  Melee AC and Armour Floor did not require a global increase in this pass.
- Standard Kinetic Fire remains Ablation 1. Auto's −3 attack / d6-to-d4 /
  Ablation 3 package is ready to playtest.
- One readied weapon at a time provides an unambiguous source for the Scene
  range-band overlay.
- The inherited weapon profiles intentionally separate physical band limits from DVs;
  precision and selected heavy-support weapons alone receive Extreme.
- Attacks and overlay radii share one metre-normalised Scene-distance source.
- Seeded Actors keep full sheet portraits and use separate circular
  alpha-transparent prototype tokens.

## Rules decisions documented after the weapon-technology maths pass

- Kinetic, Shard and Laser are distinct weapon families, not interchangeable
  ammunition or modes of one weapon. Weapon form determines the physical role
  and range envelope; technology determines damage, Shield, Hardness and
  related behaviour within it.
- Kinetic is ready to lock as the d6-based generalist with Ablation 1, compatible
  Auto access and normal Hardness interaction.
- Shard is ready to playtest with all d6 stepped to d4, flat modifiers
  preserved, normal accuracy, Ablation 2, no Auto and no ability to penetrate,
  damage or ablate Hardness. It has no current cleave rule.
- Laser is ready to playtest with all d6 stepped to d8, flat modifiers
  preserved and Ablation 0. Its Hardness interaction remains unresolved.
- The broad Laser Rifle test profile is DV 15/15/15/17 across
  Close/Medium/Long/Extreme. Laser Pistols test at DV 15 Close and Medium with
  no Long or Extreme access.
- Auto followed by a Main Action switch to Laser is intentionally permitted as
  a tactical reward. Do not nerf the sequence unless live testing makes it
  mandatory rather than merely strong.
- A two-handed ranged weapon cannot be fired while adjacent to a hostile enemy.
  Pistols are explicitly usable while adjacent.
- Soldier Quickdraw remains once per combat and Reaction-based. When its
  existing trigger occurs, it draws and fires a Pistol-type weapon; afterward
  the Soldier may keep the pistol in hand or immediately holster it. This is a
  Soldier exception, not a universal Pistol rule.

## Rules and design decisions after the Shotgun / Role pass

- Novum remains a TTRPG-rules-first project. Physical-table play and digital
  play aids matter; current digital implementation does not define the rules.
- Shotgun is ready for live playtest as a Long Arms, two-handed, Close-only area
  weapon. It makes only a fixed 4-square Cone attack (rows 1 / 2 / 3 / 4; 10
  squares), cannot shorten the template, has no default slug/direct-fire mode
  and does not use Auto.
- One shared Shotgun attack roll is compared with every character in the Cone.
  Each successful hit deals full normal damage and Shield Ablation 1. Friendly
  fire applies.
- Shotgun may make its Cone attack while adjacent to a hostile enemy as a
  deliberate exception to the normal two-handed ranged-weapon restriction.
  Shotgun remains the Close-quarters area weapon; Pistol remains the
  Close-quarters flexible weapon.
- The 3-square Cone is viable future compact-weapon design space; 4 squares is
  the preferred Shotgun baseline; 5 squares is rejected as the standard. Cone
  is a reusable pattern for future area weapons with different payloads.
- Technology/form availability is intentionally asymmetric. Current direction
  supports Shard Pistol/Rifle and Laser Pistol/Rifle/Sniper, not Shard
  SMG/Shotgun/LMG or Laser SMG/Shotgun. Do not fill out a technology matrix for
  completeness.
- Smart/guided Shard functionality is a future technology direction, with
  advanced use likely in an optional Engineer Feat branch. Tracking,
  cover-bending and target-lock rules are not yet defined.
- Laser Sniper is a strongly desired long-focus precision platform: no Close
  attack is the current direction, Medium is available but not ideal, and
  Long/Extreme are excellent. Exact DVs remain unresolved. Its fiction is focal
  convergence and beam geometry, not a beam that simply strengthens with
  distance.
- Pistol's identity is flexibility; SMG is primarily a Kinetic Small Arms
  Standard/Auto platform; Rifle is a Long Arms direct-fire generalist with
  Standard and technology-dependent Auto; LMG is a Kinetic STR + Heavy Weapons
  Auto/Suppressive Fire platform whose strong current direction omits Standard Fire.
- Suppressive Fire is reserved as a likely defining LMG/Heavy capability rather
  than a baseline Rifle mode. Its actual rule remains unresolved.
- Heavy Continuous Laser is future Heavy Weapons design space, not a Laser LMG.
  Its conceptual single-target beam starts below LMG damage and ramps through
  uninterrupted exposure; exact damage, range and reset wording remain open.
- At Level 1, a character chooses two Roles and gains both Role Abilities, but
  no automatic Role Feats. Each future Feat-granting level provides one Feat
  pick total from either Role pool. Feat cadence is not final.
- Role Feat pools should offer at least two strong thematic directions without
  becoming hard subclasses: Soldier ranged/melee; Medtech medicine/Adaptive Genomics;
  Engineer devices/smart Shard weapons; Hacker networks/combat hacking; Pilot
  drones/vehicles and neural integration; Envoy combat/social influence; and
  Operative stealth/precision-critical play.
- Role selection establishes access and identity; Feat selection determines
  specialisation. Characters with the same Role pair should still support
  substantially different builds.
- Rally remains Envoy's preferred core Role Ability. Spending Main Action plus
  Reaction to grant an ally an immediate Main Action is a future Feat concept,
  not the core ability; its restrictions and timing remain unresolved.

## Provisional progression / Role Feat / ammunition design notes

**Everything in this section is PLACEHOLDER MATERIAL FOR FUTURE PLAYTEST AND
REVIEW, NOT FINAL CANON.** Existing broader Role identity, weapon technology and
combat-structure decisions remain current.

- The current feat-test structure gives each Role two thematic branches. Each
  decision offers mutually exclusive A/B expressions of one advancement
  concept. Branches are organisational rather than subclasses; there are no
  chains or sequential branch requirements, and characters may mix branches
  and both Role pools.
- Current placeholder cadence is one Feat selection at Levels 2/4/6/8/10. Only
  Level 2/4/6 decisions are presently outlined. Cadence, gates, names and
  mechanics remain unapproved.
- Placeholder branches are Soldier Firearms/Combat Mastery; Medtech Field
  Medicine/Adaptive Genomics; Engineer Deployables/Smart Weapons; Hacker
  Network Intrusion/Combat Hacking; Pilot Drones/Vehicles and Neural
  Integration; Envoy Combat/Social Influence; and Operative
  Infiltration/Precision.
- **Expression Vector** is the preferred future injectable-biotech item-class
  term, with **Adaptive Genomics** as the Medtech branch. Titan, Alar,
  Corrosive, Dermal, Predator and Regenerative Vectors are illustrative future
  concepts only and have no approved mechanics.
- Hacking's current exploratory direction uses broad Program verbs without a
  separate Subject layer. Possible names include Open, Hijack, Disable, Trace,
  Spoof, Lock, Scan, Overload, Scrub and Relay. Programs may become purchased
  software/equipment; exact names, effects, wireless range and penalties remain
  unresolved.
- The current progression-test HP sequence is 14/14/15/16/16/17/18/18/19/20.
  Keep it independent of a large CON bonus for the next test. It is a playtest
  baseline, not a final HP formula.
- The progression test retains +2 skill points per later level, rank costs of 1
  for ranks 1–3 and 2 for ranks 4–6, and caps of 3/4/5/6 across Levels
  1–2/3–6/7–9/10. These numbers remain provisional.
- Attribute testing now uses one increase at Level 5 and one at Level 9, with
  the two increases assigned to different Attributes and a cap of 4. This
  supersedes the earlier provisional two-increases-at-each-milestone version.
- Ammunition is an endurance budget: Standard Fire should usually last about
  one normal encounter, while Auto and especially Suppressive Fire create
  reload pressure. Current capacities/expenditures are simulation candidates,
  not equipment rules.
- The provisional LMG Suppressive Fire concept uses a large area, affects
  exposed allies and enemies, forces failed targets toward cover/out of
  exposure and deals no direct damage. Ammunition is the preferred first
  limiter; exact geometry and resolution remain unresolved.
- Mixed-weapon simulations are the cleaner current duration estimate: about
  6.5–6.9 rounds and 4.7–5.1 starting-player turns for 4v4, or 8.4–8.8 rounds
  and 5.8–6.2 turns for 6v6. They do not currently justify a global lethality
  increase.
- The Shotgun simulation assumed approximately 2.3 targets per Cone and ideal
  safe geometry, so it may overstate Shotgun output and understate live combat
  duration.
- The next character-building test should treat current feat boxes as
  selectable placeholders without functioning mechanical effects unless a
  separate implementation handover approves them.

### Current v0.2.0 implementation boundary

- The seeded Breach Shotgun now uses the Close-only, four-square Cone, shared
  roll, friendly-fire handling and adjacency exception. Template placement and
  affected-token selection remain manual, so diagonal geometry is still a live
  watch point.
- Kinetic, Shard, Laser, corrected Auto, ammunition and Main Action reload
  declarations are implemented. Technology-versus-Hardness remains unresolved.
- The placeholder Role/Feat architecture is selectable and persistent but has
  no mechanical effects. Suppressive Fire remains visibly unavailable.
- `RANGE_AUDIT.md` and older v0.1.2 release material remain historical
  implementation snapshots rather than current rules.

## Decisions still needed

- Final HP formula, Shield formula, and scaling after live playtests.
- Final Auto ammunition expenditure, magazine interaction, post-playtest
  numerical values, and any explicit reload-cost exceptions. The universal
  baseline reload cost is now a Main Action.
- Final weapon capacities and Standard/Auto/Suppressive expenditure; all current
  magazine, volley and discharge values are simulation candidates only.
- Penetration's exact interaction with Shield SP and Armour Floor.
- Final melee damage and Attribute behaviour.
- Armour mobility consequences.
- Battery value, time, price, and carrying rules for Shield recharge.
- Precision-shot targets and effects.
- Trauma table and timing.
- Cover's exact numerical effect, concealment, engagement and retreat.
- Shard Track, guided-projectile cover interaction, target lock/reacquisition
  and exact Engineer smart-weapon Feats.
- Final Rifle-versus-SMG DV tables and Rifle modification budgets.
- LMG damage, capacity and the exact Suppressive Fire rule.
- Heavy Continuous Laser damage ramp, reset wording and range profile.
- Final Laser Sniper DVs.
- Higher-tier Flash, Smoke and Cryo scaling, plus odd-number movement rounding
  while Slowed.
- Detailed Charge modifications and proximity-trigger behaviour, including the
  Flechette Charge's final handling and whether several separate unlinked Free
  Action trigger activations need any per-turn limit.
- Structural-section sizing, area effects across multiple wall/hull sections,
  and penetrating structural damage threatening occupants or equipment behind
  the section.
- Final Integrity totals and detailed Fix repair time, parts, costs and
  emergency/combat procedures.
- A controlled dual-wield Feat, future reload Feats and any multiple-attack or
  action-compression options.
- Final Laser-vs-Hardness rule, Smoke-vs-Laser interaction, Overload, battery
  capacities, individual weapon cards and technology pricing.
- Any future Shotgun technology beyond the Kinetic baseline, diagonal Cone
  presentation and Sniper Precision mechanics.
- Whether later playtesting justifies a Shard cleave effect or an additional
  generic Laser weakness; neither exists in the current rules.
- Feat cadence, level gates, A/B decision structure, branch/Feat names,
  prerequisites and final Role Feat mechanics/lists.
- Exact Expression Vector mechanics and neural vehicle-integration mechanics.
- Hacking Program catalogue/effects, software economy/loadout rules, wireless
  envelope/penalty and direct-access benefits.
- Envoy social-encounter mechanics and the exact limits/timing of its future
  action-transfer Feat.
- Whether the Shield Capacitor remains a legal ordinary mod and what its final
  opportunity cost should be.
- Whether release content should move into v14 compendium packs once the item
  catalogue stabilises.
