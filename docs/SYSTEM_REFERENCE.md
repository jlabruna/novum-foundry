# System Reference — Novum

Last updated: 29 September 2026 (Australia/Sydney)

Status: **NOVUM COMBAT MATHS BASELINE v1.0 established.** Stable design baseline for combat content and subsystem development; subject to deliberate revision through playtesting or demonstrated subsystem requirements, but no longer considered exploratory.

## Purpose

Living reference for the new science-fiction / cyberpunk tabletop roleplaying game system. Game design, mechanics, terminology, and setting material are recorded here. AI/project workflow instructions are maintained separately in `AI_CONTEXT.md`.

Novum is a **TTRPG-rules-first project**. The primary goal is a tabletop game
that works physically at the table and digitally with play aids. Digital
implementation is incidental to the current rules-design stage and does not
define the tabletop rules.

## Confirmed scope

- A new science-fiction / cyberpunk tabletop roleplaying game system.
- Game-system design and eventual implementation and tooling.

## System and setting title — CONFIRMED

The product and Foundry system title is **Novum**. The former working title
**Afterlight** is superseded and should appear only in historical notes where
the provenance matters. The Foundry system ID is `novum`.

Novum retains the established **post-peak civilisation** direction rather than
full post-apocalypse: society still functions, but much of its infrastructure,
culture and technological legacy comes from an earlier great age. The name and
the logo motto *Ex veteri, novum* frame the project around the new emerging from
the old without requiring the word to be a literal in-world historical term.

The confirmed visual direction is modernist literary science fiction: restrained
institutional geometry, near-black and ivory surfaces, copper accents, circles,
axes and rules. Avoid generic neon cyberpunk, saturated cyan/magenta, circuitry
motifs and cluttered HUD styling. Cormorant Garamond is the preferred display
face, Inter the preferred UI face, and IBM Plex Mono an optional technical face,
with practical safe fallbacks when fonts are not bundled.

## Status guide

- **Confirmed for now / testing:** adopted for the current test design, subject to later revision.
- **Confirmed direction:** agreed design intent; this does not finalise unspecified mechanics or numerical values.
- **Current direction / core concept:** working design, with details still under development.
- **Provisional:** an idea or example, not a final rule or statistic.
- **Unresolved:** no final mechanic selected.
- **Combat Maths Baseline v1.0 / Locked:** use as the stable default for future design. Reopen only for concrete playtest failure, mature subsystem incompatibility, repeated content-design limitation or contradictory later simulation; not merely because another theoretical alternative exists.

# Combat Design

## NOVUM COMBAT MATHS BASELINE v1.0 — MILESTONE ESTABLISHED

**FOUNDATIONAL COMBAT MATHS — BASELINE v1.0 ESTABLISHED**

The current attack, protection, melee/ranged and four-tier equipment structures are stable enough for substantive subsystem and content development. Weapons, armour, mods, hacking, drones, drugs, biotech/Expression Vectors, Roles, Feats, support systems and encounter design should use this baseline by default.

The milestone does not make the rules permanently immutable. Future systems may justify revision. A baseline rule should be reopened only when:

- playtesting reveals a concrete failure;
- a mature subsystem cannot interact with it cleanly;
- content design repeatedly hits the same mathematical limitation; or
- later simulation contradicts the current assumptions.

Do not reopen foundational combat maths merely because another theoretical alternative exists.

Formal review found no remaining mathematical evidence that the d20 engine, weapon-specific DVs within universal physical range bands, progression to approximately +10, the combined Shield SP/Armour Floor model, the Melee AC/shield-bypass model, four fuzzy gear tiers or completed-package balancing must be redesigned before content development. Readiness is not required for ordinary ranged defence. There is sufficient headroom for meaningful modifiers and future non-attack Main Actions if weapon strengths remain budgeted separately.

## CORE DESIGN PHILOSOPHY — CONFIRMED

CONFIRMED:

The system is intended to be a sci-fi / cyberpunk TTRPG with tactical combat, extensive equipment customisation, cyberware, biotechnology, hacking, drones, zero-G, and a setting involving a planet plus extensive orbital habitats, stations, spacecraft, asteroid settlements, and other artificial environments.

Primary design principle:

“Deep equipment customisation, shallow resolution mechanics.”

The game should have:
- simple, repeatable core mechanics
- tactical positioning
- meaningful weapon roles
- meaningful equipment preparation
- strong gear customisation
- tight mathematical balance
- predictable encounter-building tools
- considerably less rules overhead than Pathfinder 2e

Complexity should come primarily from:
- weapon chassis
- manufacturer/brand
- hardpoints
- installed modifications
- weapon technology
- special ammunition
- fire modes
- armour
- shields
- cyberware
- biotech
- Role and Feat choices

Avoid complexity for simulation’s sake.

Future mechanics should be evaluated mathematically rather than accepted purely because they are thematic.

Important balance axes include:
- hit chance
- crit chance
- expected damage
- damage variance
- shield ablation
- armour interaction
- time-to-kill
- action economy
- range performance
- resource consumption
- equipment opportunity cost

Equipment choices also include distinct weapon technologies, special ammunition,
and equipment preparation. Kinetic, Shard and Laser are weapon families rather
than interchangeable ammunition for one common gun. Unnecessary action types
and subsystems are to be avoided.

At low tiers, basic competence and raw hit probability matter substantially. As
tier increases and baseline accuracy becomes increasingly reliable, combat
emphasis should shift toward battlefield state, positioning, debuffs,
protection interaction, status effects, counters, equipment capabilities and
tactical decision-making. High-tier tactical effects should generally remain
meaningful even when attack bonuses become high. Do not solve every high-tier
tactical effect through a fixed attack penalty.

## CORE COMBAT EXPERIENCE — LOCKED DESIGN PILLARS

The following experience goals take priority over preserving any existing implementation mechanic.

### Ramping lethality through degrading protection

- Protection should begin relatively strong and degrade through successful attacks.
- Subsequent attacks should become increasingly dangerous as protection collapses.
- The combat danger curve should visibly escalate rather than remain static.
- Higher-level durability should come substantially from better protection and equipment rather than huge HP inflation.
- Avoid conventional static-defence plus large-HP sponge progression unless later testing shows no viable alternative.

### Situational weapon identity

- Universal Close / Medium / Long / Extreme distances combined with
  weapon-specific DVs and accessible bands are a primary combat pillar.
- No single weapon class should dominate every range and combat situation.
- Small Arms, Long Arms and Heavy Weapons specialisation should each remain viable.
- Weapon identity may use range profile, accuracy, damage, ablation, penetration, fire modes, capacity, reload, concealability, suppression, aimed-shot access, handling and other bounded behaviours rather than damage alone.
- Lower-damage accurate weapons may contribute reliably to protection degradation, while heavier or precision weapons may exploit degraded protection differently. Exact roles remain subject to testing.

### Tactical breadth with shallow resolution

- Combat should support materially different choices including hacking, drones, bioengineering, drugs, Medtech support, Envoy/social buffs, cyberware, suppression, precision attacks, setup/payoff actions and equipment interactions.
- Those options should use a small, repeatable core resolution procedure rather than each becoming a separate complex engine.
- **Digital complexity is acceptable. Interaction complexity is not.**
- **Deep equipment / character customisation. Shallow core resolution.**

### Meaningful Level 1–10 progression

- Low-level firefights may be inaccurate, scrappy and heavily shaped by favourable range.
- **Level 1 combat analogy:** street gangs trading shots in a city street — relatively inexperienced combatants, many misses, civilian/basic protection and limited capability.
- Mid-level combatants should connect more reliably and bring stronger equipment and tactical options.
- High-level professionals may intentionally reach very high centre-mass accuracy at favourable range.
- **Level 10 combat analogy:** John Wick versus a special-forces unit — experienced combatants hitting reliably, advanced gear and protection, and highly lethal tactical exchanges.
- Equal-level hit probabilities do **not** need to remain flat across all ten levels.
- High-level combat may intentionally be more accurate and deadly, provided protection degradation, tactical choice and encounter pacing remain healthy.
- Higher-level enemies do not need an automatic level-derived defence against ordinary firearm attacks. They may instead become more dangerous through accuracy, equipment, protection, mobility, reactions, specialist abilities, coordination, hacking, drones and action economy.

### Focused fire is intentionally effective

- Multiple combatants concentrating attacks on one exposed target should defeat that target quickly.
- Four attackers focusing one exposed enemy is not, by itself, a balance failure.
- Counterplay should come from cover, line of sight, movement, smoke/concealment, suppression, shield support, target-priority pressure, positioning and objectives rather than arbitrary anti-focus-fire durability.
- Encounter and equipment maths should still prevent accidental one-option dominance, but should not be tuned to make exposed targets survive coordinated fire without tactical justification.

### Modifier and critical headroom

- Cyberware, equipment, optics, smart systems, drugs, Medtech compounds, Rally, Role abilities, Feats, teamwork and positioning need meaningful mathematical room.
- Wounds, suppression, concealment, environmental conditions, aimed shots and other setbacks may also impose meaningful penalties.
- Do not assume every modifier must be limited to +1 or that all useful combinations must remain within an extremely narrow budget.
- High ordinary accuracy may become a resource spent on precision shots or other difficult tactical actions.
- Baseline critical frequency is tied to the natural die, not success margin. Expanded natural critical ranges may be earned through meaningful investment; 18–20 is the approximate intended upper range unless later testing supports otherwise.
- As broad effect guidance, ±2 is meaningful, ±4 is major and ±6 is exceptional/fight-defining. These values describe available headroom, not automatic stacking permissions.

## VARIABLES OUTSIDE COMBAT MATHS BASELINE v1.0

The foundational chassis is no longer broadly sacrificial. The following details remain available for content design, subsystem definition or later evidence-based revision without reopening the whole baseline:

- whether Readiness exists for non-firearm derived statistics
- the exact HP formula and scaling
- exact item damage values inside the baseline envelopes
- final modifier stacking rules
- exact Melee AC, Armour Floor and Shield SP values
- nonstandard ablation amounts, final penetration procedure and recharge economics
- engagement and retreat rules beyond the confirmed movement baseline
- the exact numerical effect of cover; concealment, suppression, aimed-shot
  effects and Trauma
- boss action economy and future subsystem mechanics

The previous “beat the DV by 10 = critical” mechanic has been dropped from the current direction. Do not preserve superseded mechanics merely because prior implementation or analysis used them.

## CORE DICE / ATTACK MECHANIC — COMBAT MATHS BASELINE v1.0

The default core attack engine is locked for Baseline v1.0:

Core attack formula:

1d20 + Attribute + Skill + modifiers vs Difficulty Value / Defence

Natural 1:
- automatic miss

Natural 20:
- critical hit

Margin criticals:
- **Dropped from the current baseline.** Beating the DV by 10 or more does not automatically create a critical hit.

Progression may intentionally reach approximately **Attribute 4 + Skill 6 = +10**. Do not cap combat Skill contribution at +4 merely to control accuracy. High favourable-range accuracy at upper levels is intended and may be spent on precision shots and tactical penalties.

Critical Hit:
- deals normal weapon damage by default
- also inflicts a Trauma / Critical Injury effect
- exact Trauma table is not yet designed
- current preferred direction is that Trauma normally requires positive HP damage after protection unless a specific effect states otherwise

Do NOT automatically add bonus damage to every critical hit.

Weapon traits or abilities may modify crit behaviour.

Examples discussed:
- Brutal
- Devastating

Exact definitions for these traits are NOT yet locked in.

Expanded critical ranges:
- should exist through meaningful investment such as specialised Feats, cyberware or deliberately appropriate weapon modification
- natural 19–20 would produce a 10% natural crit range
- natural 18–20 would produce a 15% natural crit range
- natural 18–20 is the approximate intended upper range unless later testing gives a compelling reason otherwise
- expanded crit ranges should be treated as significant mechanical benefits
- avoid allowing gear and Feats to stack crit range too freely

Current preference:
Expanded crit range should primarily be a character-build feature rather than a generic mod everyone buys.

## PRECISION / AIMED ATTACKS — BASELINE PURPOSE; EFFECTS TBD

Precision attacks are the intended major accuracy sink for expert shooters. High-level accuracy should be spendable through voluntary penalties in exchange for more valuable targeted effects.

Useful current test bands are approximately:

- −4
- −6
- −8

Possible future targets include a weapon, limb, weak point, cyberware, sensor, drone component, mobility system, shield subsystem or other equipment. The purpose is locked under Baseline v1.0; the complete effect list, eligibility, consequences and exact penalties remain TBD.

## CORE DAMAGE TYPES — CONFIRMED TAXONOMY

The current five core damage types are:

| Type | Current illustrative sources |
| --- | --- |
| Kinetic | Bullets, physical projectiles, impacts, blunt physical force. |
| Energy | Lasers, plasma-type weapons, arc/electrical effects, directed energy. |
| Cryo | Freezing or cold-based weapons and effects. |
| Chemical | Acid, toxins/poisons, corrosive agents, chemical warfare. |
| Explosive | Grenades, rockets, blast/fragmentation payloads. |

Electric is within Energy; toxic and corrosive are within Chemical. Heat is not a separate core type. These examples classify sources only. **Damage-type traits, condition packages, resistances, weaknesses, and subtype effects are unresolved and are not established by this list.** Do not add more core types or formalise those interactions until the baseline maths supports them.

Kinetic, Shard and Laser additionally function as **weapon / attack technology
tags**. They describe a weapon's mechanism and its interaction with damage
dice, Shield Ablation, Hardness, range and fire modes; they do not create a
baseline Kinetic/Shard/Laser resistance matrix. A Kinetic weapon, Shard weapon
and Laser weapon of the same form are distinct weapons, not one weapon loaded
with interchangeable technology ammunition.

## DAMAGE SYSTEM — BASELINE STRUCTURE; EXACT VALUES PROVISIONAL

Ranged weapons:
- Primarily use pools of damage dice.
- d6 pools are the main baseline.
- d8 pools may exist for selected weapons/technologies where deliberately warranted.
- Increasing number of dice should generally be the primary damage-scaling method.
- Larger die sizes should indicate a meaningful weapon/property distinction, not be used arbitrarily.

Normal content-envelope expressions currently include:
- 2d6
- 3d6
- 4d6
- possible d8-based weapons

Routine damage materially above 4d6 is outside the normal Baseline v1.0 envelope unless conditional, heavy, slow, resource-intensive or Exotic.

Melee:
- Current direction is that melee may use a single weapon die rather than a dice pool.
- Possible progression:
  - d4
  - d6
  - d8
  - d10
  - d12
- Exact assignments are unresolved. Earlier illustrative assignments remain provisional: small/light weapons d4 or d6; sword-sized weapons d8; heavy weapons d10; extremely powerful weapons d12.

Important:
Melee can use lower raw damage because it is intended to bypass the personal energy-shield layer.

Damage-distribution note: 4d6 averages 14; 3d8 averages 13.5. Despite similar averages, 3d8 has higher variance and interacts differently with fixed shield protection.

## Weapon Damage — BASELINE v1.0 CONTENT ENVELOPES

Exact weapon statistics remain content-design values. The earlier isolated class examples reaching routine 5d6 are superseded by the four-tier envelope below.

| Tier | Ordinary provisional envelope | Specialist / heavy edge |
| --- | --- | --- |
| Tier 1 | 2d6 to 2d6+2 | 3d6 |
| Tier 2 | 2d6+2 to 3d6+1 | progression may instead buy capability rather than more damage |
| Tier 3 | 3d6 to 3d6+2 | 4d6 |
| Tier 4 | 3d6+1 to 4d6 | stronger combinations without universal maxima |

These are **provisional content-design envelopes under Baseline v1.0**, not mandatory class assignments or item recipes. Damage materially above 4d6 should normally be conditional, heavy, slow, resource-intensive or Prototype/Exotic/Legendary. Weapon identity must continue to use range, handling, capacity, fire modes, ablation, precision, utility and traits rather than raw damage alone.

## RANGE BANDS — CONFIRMED

The game uses metric measurements.

Battle-map scale:
- 1 square = 2 metres

Standard movement:
- 5 squares = 10 metres per Move Action

Close, Medium, Long and Extreme are universal physical distance terms. Weapons
do not redefine their physical size.

| Band | Metres | Squares at 2 m per square |
| --- | --- | --- |
| Close | 0–10 m | 0–5 squares |
| Medium | over 10–30 m | 6–15 squares |
| Long | over 30–60 m | 16–30 squares |
| Extreme | over 60 m | 31+ squares |

The bands are deliberately compressed for tactical battle-map use rather than trying to reproduce real-world maximum firearm ranges.

Close range intentionally corresponds approximately to the distance a normal character can cover with one Move Action.

Weapon identity comes from:

- DV by band;
- which bands the weapon can access;
- traits;
- damage;
- capacity; and
- firing modes.

Examples of intended identities:
- Pistols: strong at Close
- SMGs: good at Close and useful at Medium
- Assault/combat rifles: strong general-purpose range profile
- Long rifles/snipers: strongest at Long

Weapon-specific range DVs are part of Combat Maths Baseline v1.0. The shared
provisional DV vocabulary is approximately **13 / 15 / 17 / 19 / 21**. Exact
DVs and accessible bands remain weapon content values rather than one universal
DV table. Do not add universal target Readiness or level-derived defence to
ordinary firearm attacks.

### Current Foundry v0.2.0 implementation difference

The current v0.2.0 Foundry data still predates this universal-distance decision and
still stores weapon-specific physical maxima for Close, Medium, Long and
optional Extreme. `RANGE_AUDIT.md` remains an accurate implementation snapshot,
not the current canonical range rule. A later implementation pass must migrate
weapon data and overlays without changing the weapon-specific DVs or intended
range identities unintentionally.

## EXTREME RANGE — CONFIRMED

Extreme is the universal physical term for distances beyond 60 metres / 30
squares. A weapon can attack at Extreme only when its profile grants access to
that band.

Weapons likely to access Extreme include:
- sniper rifles
- selected long rifles
- some LMGs
- appropriate laser/energy weapons

Exact list of Extreme-capable weapons remains unresolved.

## WEAPON FIRE MODES — CONFIRMED STRUCTURE

The system currently has these core ranged fire modes:

- Standard Fire
- Auto Fire
- Suppressive Fire
- Cone Fire

Not every weapon supports every mode.

### Standard Fire

A normal single-target attack.

Uses the weapon’s standard damage profile.

### Auto Fire

Only available on compatible automatic weapons.

**CURRENT PLAYTEST RULE UNDER BASELINE v1.0:** Auto Fire is a Shield-stripping
mode rather than a general damage upgrade:

- apply **−3** to the attack;
- step every d6 in the weapon's damage expression down to d4;
- preserve flat damage modifiers;
- on a successful hit, resolve one damage roll and then ablate up to **3 Shield
  SP** instead of the weapon's ordinary Ablation 1; and
- treat the attack as one attack resolution regardless of represented rounds
  or ammunition spent.

Examples: 2d6 becomes 2d4; 2d6+2 becomes 2d4+2; 3d6 becomes 3d4; and
3d6+2 becomes 3d4+2.

Ordinary personal Shield Ablation does not become structural Hardness loss.
Auto uses the weapon's ordinary Hardness interaction once: if its raw damage
penetrates current Hardness, apply penetrating damage and the normal one-point
Hardness reduction after damage. It does not reduce Hardness for each
represented projectile or convert Ablation 3 into three points of Hardness
loss.

At 60% Standard hit chance, ordinary one-point ablation averages 0.60 Shield SP
per action. At 45% Auto hit chance, three-point ablation averages 1.35 Shield SP
per action while sufficient Shield remains. The latest mathematical pass found
Auto the fastest dedicated Shield stripper at T2–T4 and approximately tied with
Shard at T1. Repeated Auto is generally not the fastest solo method of defeating
a target.

Exact ammunition expenditure, magazine interaction and any future improvements
remain unresolved. Do not change the −3/d4/Ablation 3 package before live
playtesting. Status: **READY TO PLAYTEST**.

### Suppressive Fire

Only available on weapons that support it.

Suppressive Fire is intended primarily as:
- area denial
- battlefield control
- forcing enemies to remain behind cover or suffer consequences

It should NOT simply be another higher-damage attack mode.

**PROVISIONAL / PLACEHOLDER CONCEPT — NOT FINAL CANON:** LMG Suppressive Fire
may use a large Cone reaching Medium or Long range and affect every exposed
character in it, including allies. Affected characters would make an
appropriate resistance/check; failure would force them toward cover or away
from exposure. A character with no cover available would continue trying to
break exposure rather than simply ignoring the effect. This concept has no
direct damage component because Auto already supplies the LMG's damaging
high-volume mode.

Repeated suppression may overly lock melee characters out of engagement.
Ammunition expenditure is the preferred first limiter to test before inventing
additional counters. Envoy Combat Influence may later provide human/morale
counterplay. Exact geometry, reach, resistance, movement and timing remain
unresolved.

### Ammunition and attack abstraction — PROVISIONAL TEST DIRECTION

**All values in this subsection are PLACEHOLDERS FOR FUTURE SIMULATION / REVIEW,
not final canon.**

A mechanical attack need not represent one physical projectile. Standard Fire
may fictionally be a controlled burst or several rounds resolved as one attack.
The current endurance target is that conservative use of a fresh magazine
usually lasts approximately one normal encounter. This is an upper-bound
budget: characters will also move, use Role abilities, hack, heal, deploy
equipment, pursue objectives, throw grenades and switch weapons.

- Standard Fire should usually last about one encounter on a fresh magazine.
- Auto should burn ammunition quickly and create reload pressure when repeated.
- Suppressive Fire should be still more expensive, paying for control partly
  through ammunition use.
- Heavy Weapons should sustain expensive modes longer without firing forever.

| Weapon/technology | Placeholder capacity | Placeholder expenditure | Approximate attacks |
| --- | ---: | --- | ---: |
| Pistol | 12 rounds | Standard 2 | 6 |
| SMG | 24 rounds | Standard 4; Auto 12 | 6 Standard or 2 Auto |
| Rifle | 30 rounds | Standard 5; Auto 15 | 6 Standard or 2 Auto |
| Shotgun | 6 shells | Cone 1 | 6 |
| Sniper | 5 rounds | attack 1 | 5 |
| LMG | 60 rounds | Auto 15; Suppressive 20 | 4 Auto or 3 Suppressive |
| Shard | about 6 attack-equivalent volleys | cassette/cell units TBD | about 6 |
| Laser | about 6 normal discharges | battery discharge TBD | about 6 |

Laser Sniper may use fewer discharges. Heavy Continuous Laser should likely
track beam-turns instead of shots. Shard need not track literal microprojectile
counts; volleys, cassettes or cells may be the meaningful unit. Exact capacities,
expenditure and reload interactions require dedicated review and simulation.

### Cone Fire

Cone is a reusable area-attack framework rather than a mechanic owned only by
Shotguns. A Cone weapon defines a fixed template and its own payload or effect.
The attacker chooses the orientation, makes one shared attack roll and compares
that result against every character in the template. Friendly fire applies;
allies in the template are affected normally.

Future Flamethrowers, arc projectors, chemical sprayers and other Heavy or
specialised area weapons may reuse the same or related geometry with different
payloads. Reusing a small set of familiar physical templates is preferable to
requiring players to learn many unrelated area patterns.

#### Shotgun Cone — READY FOR LIVE PLAYTEST

The current Shotgun baseline is a **4-square-deep Cone** with rows of **1 / 2 /
3 / 4 squares**, affecting **10 squares** in total. It always extends to its
full length; the attacker cannot voluntarily shorten it.

Resolution:

- choose the Cone orientation;
- make one shared attack roll;
- compare that roll against every affected character;
- each successfully hit target takes full normal weapon damage and suffers
  normal Shield Ablation 1; and
- friendly fire applies normally.

Shotgun is Cone-only. It has no default slug or direct-fire mode, no Standard
Fire, no Auto Fire and no attack at Medium, Long or Extreme range.

Geometry review found the 3-square Cone (1 / 2 / 3, 6 squares) viable but too
restrictive for the default, especially at T1 and in small encounters. The
4-square Cone provides strong positional payoff, usually catches roughly two to
three enemies on a good attack and can reach four or more without making that
automatic. The 5-square Cone (1 / 2 / 3 / 4 / 5, 15 squares) was rejected as the
standard because ordinary movement too reliably finds large safe catches. Keep
3-square templates as future design space for compact or specialised short-range
weapons, and larger templates for future specialised or Heavy weapons.

Do not pre-nerf this package from theoretical multi-target ceilings alone. Live
testing should watch T4 clustered enemies, unshielded groups, fights near party
size +2 or more, hordes, terrain that constrains repositioning, T1 shared-roll
swinginess and diagonal-template readability.

## FIRE MODE ACCESS BY WEAPON CLASS — CONFIRMED CURRENT DESIGN

Weapon form establishes the broad handling role, but technology can further
restrict fire-mode access. The lists below describe the current broad Kinetic
direction unless a weapon says otherwise. Shard cannot use Auto, and no Laser
Auto rule currently exists. Not every technology must support every form or
mode.

Pistols:
- typically Standard Fire only

SMGs:
- Standard Fire
- Auto Fire
- No Suppressive Fire

Combat / Assault Rifles:
- Standard Fire
- Auto Fire where technology permits
- No baseline Suppressive Fire

LMGs:
- Auto Fire
- Suppressive Fire
- Current strong direction: no Standard Fire

Shotguns:
- Cone Fire only
- No Standard Fire
- No Auto Fire
- Close only

Flamethrowers / similar area energy weapons:
- Cone Fire

If machine-pistol-type weapons exist later, they should not undermine the clean pistol role; they may instead be treated as an SMG subtype or another special weapon category.

Long Rifles / Sniper Rifles: fire-mode access was not specified in this handover and remains unresolved.

## DEMO, GRENADES AND CHARGES — CURRENT RULES

### Demo Attribute pairings — CONFIRMED

- A hand-thrown grenade uses **STR + Demo**.
- A grenade launcher uses **DEX + Demo**.
- Inspecting, identifying or disarming explosives uses **INT + Demo**.

Placing a charge correctly does not itself require a roll.

### Hand-thrown grenade placement — CONFIRMED

A throw targets one nominated point or square.

| Range | Placement roll |
| --- | --- |
| Close | `d20 + STR + Demo + modifiers` vs DV 13 |
| Medium | the same roll with −4 |
| Long | unavailable by hand |
| Extreme | unavailable by hand |

On success, the grenade lands exactly at the nominated point. On failure, roll
1d8 for direction and scatter it exactly 3 squares. Do not calculate scatter
from margin of failure.

### Standard grenade blast — CONFIRMED

A standard grenade has a circular 2-square radius: 4 metres from its centre and
8 metres across at the normal map scale. Do not automatically treat every
square in a 5×5 box as affected. Friendly fire applies. Once the explosive has
landed, affected targets do not receive a secondary Evasion or defence roll.

### Grenade handling — CONFIRMED

- A grenade already in hand requires a Main Action to throw.
- Drawing a grenade from an accessible belt, vest pouch, bandolier, external
  rig or similar location requires a Move Action; throwing it then requires a
  Main Action.
- Retrieving a buried or stowed grenade requires a Main Action; throwing it
  requires a later Main Action.

This is broad handling guidance, not detailed inventory-location simulation.

### Grenade launcher — CURRENT BASELINE

A grenade launcher uses **DEX + Demo** and the following profile:

| Band | DV |
| --- | ---: |
| Close | 13 |
| Medium | 15 |
| Long | 17 |
| Extreme | unavailable |

A failed placement roll uses the same 1d8 direction and 3-square scatter as a
hand-thrown grenade. The launcher delivers the normal payload: it does not
increase damage, radius or status severity. Its advantages are improved Medium
placement, Long access, firing from a readied weapon and action efficiency.

Starting capacity is **2**. Reloading costs a Main Action. Future Feats or
equipment may explicitly reduce that cost, but none is established yet.

### Current Demo family

The current family consists of:

- Frag Grenade;
- Smoke Grenade;
- Flash Grenade;
- Cryo Grenade;
- Fragmentation Charge;
- Breaching Charge; and
- Flechette Charge.

**Charge** is the general placed-device family. Mine is not a separate current
equipment category. A proximity-triggered device may function like a mine in
the fiction, but remains a Charge using an appropriate trigger modification.

### Frag Grenade — PLAYTEST VALUE

| Tier | Damage |
| --- | --- |
| T1 | 2d6 |
| T2 | 2d6+2 |
| T3 | 3d6 |
| T4 | 3d6+1 |

Frag is an area-damage payload intended to be poor against one target,
competitive around two clustered targets and strong against three or more. It
uses normal personal protection and neither bypasses nor degrades Armour Floor.
The damage progression remains a playtest value rather than permanently locked
balance.

## BLINDED, FLASH, SMOKE AND SLOWED — CURRENT RULES

### Blinded — PLAYTEST BASELINE

When a Blinded character attacks, make the normal attack roll and a separate
d20 visibility check; the dice may be rolled simultaneously. If the attack
would otherwise hit, a visibility result of 1–6 causes it to miss. A natural
critical attack still hits. Blinded does not stack.

This is an independent 30% miss chance. It is not a fixed attack modifier,
disadvantage or a check of natural faces 1–6 on the attack die. The independent
check deliberately remains meaningful as attack bonuses rise. Future statuses
that specifically require tier-independent relevance may use similar
mechanisms, but this is not an automatic template for every condition.

### Flash Grenade — PLAYTEST BASELINE

- standard 2-square blast;
- friendly fire applies;
- affected targets become Blinded until the end of each affected target's next
  turn;
- movement does not remove Flash-induced Blinded;
- no additional attack penalty or action denial.

Higher-tier scaling is unresolved. The preferred direction is greater severity
rather than a longer duration.

### Smoke Grenade — PLAYTEST BASELINE

Smoke creates a radius-2 area lasting 3 rounds. Remove it at the end of the
thrower's third turn after deployment. Smoke is an area effect, not a lingering
Actor condition.

An attack is Blinded if the attacker's space, the target's space or the straight
line between attacker and target intersects Smoke. Apply Blinded only once,
regardless of how many Smoke areas or exposure conditions apply. Firing from,
into or through Smoke is therefore Blinded; both attacker and target being
inside Smoke is still only one application. Leaving the relevant exposure
removes the effect.

Higher-tier scaling is unresolved. The preferred direction is increased radius
rather than duration.

### Slowed — CONFIRMED DEFINITION

Slowed halves normal movement. It does not penalise attacks or defence, reduce
actions or stack levels. Rounding unusual movement values remains unresolved.

### Cryo Grenade — PLAYTEST BASELINE

A Cryo Grenade has a standard 2-square blast, deals no damage and Slows affected
targets until the end of each affected target's next turn. It creates no
persistent difficult terrain. A future Cryo Device may create a persistent
Slowed area, but that Device is not yet designed.

## CHARGE PAYLOADS AND TRIGGERS — CURRENT DIRECTION

Payload or Charge type is separate from trigger method. Potential future
trigger modifications include Remote Trigger, Proximity Trigger, Timer and
Tripwire. Mod slots, prices, trigger ranges, IFF, detection, disarm and
installation procedures remain unresolved.

### Fragmentation Charge — PLAYTEST BASELINE

The Fragmentation Charge is a pre-positioned anti-personnel/area explosive,
essentially a stronger and larger prepared Frag payload for ambushes and area
damage.

| Tier | Damage |
| --- | --- |
| T1 | 2d6+2 |
| T2 | 3d6 |
| T3 | 3d6+1 |
| T4 | 3d6+2 |

It currently has a 3-square radius and requires a Main Action to place. A ready
remote trigger is its default trigger method and uses the Free Action rule
below. Fragmentation Charge does not automatically receive Breaching 3; any
Breaching interaction remains provisional for later equipment design.

### Breaching Charge — PLAYTEST DIRECTION

A Breaching Charge is dedicated structural demolition. It must be placed
directly against one specific Hardness-bearing object or structural section.
Its blast is directed inward rather than being an ordinary radial
anti-personnel explosion. It is intended to destroy doors, walls, cover, hull
sections, vehicles, machinery and similar hard targets.

The current playtest direction is **Breaching 3**. Outward splash damage is not
yet defined and must not be invented. This directional separation allows the
charge to be extremely effective structurally without also becoming the best
anti-personnel explosive.

### Remote Trigger — CONFIRMED BASELINE

Detonating a prepared Charge through a ready remote trigger is a Free Action.
One activation may detonate one linked Charge or one deliberately linked Charge
group. Separate unlinked activations require separate trigger activations. The
meaningful action costs lie in carrying, placing, configuring and positioning
the Charge, not pressing a ready control.

Flechette Charge trigger/mod handling and the detailed modular Charge system
remain unresolved.

## CORE RANGED WEAPON CLASSES — CONFIRMED LIST

CONFIRMED CURRENT LIST:

- Pistol
- SMG
- Combat / Assault Rifle
- Long Rifle / Sniper Rifle
- Shotgun
- LMG

Current broad family identities are design direction rather than final stat
cards:

- **Pistol:** Small Arms; one-handed; Close-focused; strongest backup and
  flexible-hand role; usable adjacent to hostiles; may exist as Kinetic, Shard
  or Laser; normally direct Standard fire unless specified otherwise.
- **SMG:** Small Arms; primarily Kinetic; compact automatic weapon with Standard
  and Auto Fire; better range than a Pistol, focused on Close/Medium and weaker
  than a Rifle at longer battlefield ranges.
- **Combat / Assault Rifle:** Long Arms; two-handed general-purpose weapon;
  direct-fire platform with a stronger Medium/Long role than the SMG; Standard
  Fire, Auto where technology permits, broader battlefield utility and
  plausible heavier optics/modification space.
- **Shotgun:** Long Arms; two-handed; Close-only area weapon using its fixed
  4-square Cone. It has no default slug/direct-fire mode and no Auto.
- **Long Rifle / Sniper Rifle:** Long Arms; two-handed; strongest Long/Extreme
  identity; weaker Close handling, lower capacity and likely Precision support;
  final detailed rules remain unresolved.
- **LMG / Support Gun:** Heavy Weapons using STR + Heavy Weapons; Kinetic
  baseline; large capacity; Auto and Suppressive Fire role; current strong direction
  is no Standard Fire. It is sustained automatic pressure and battlefield
  control, not merely a Rifle with larger damage dice.

Important update:
Do NOT divide pistols into separate universal categories such as light pistol / heavy pistol / very heavy pistol.

Do not preserve Pistol relevance at higher tiers merely by inflating its raw
damage to match rifles. Its value comes from one-handed use, adjacency access,
Close-range handling, quick backup access, technology variants, Role/Feat
interactions and the ability to keep another one-handed object or weapon in the
other hand. A Pistol does not need rifle-equivalent stand-up DPR to remain
useful.

Use one Pistol class and differentiate individual pistol models through:
- damage
- magazine capacity
- reload behaviour
- compatible special ammunition or power system
- hardpoints
- range profile
- traits
- concealability
- manufacturer

Example design logic:

9mm-style semi-auto pistol:
- lower damage
- larger magazine
- more customisation
- broader ammo support
- more hardpoints

Revolver / magnum:
- higher damage
- low capacity
- slower reload
- fewer hardpoints
- possible penetration / crit traits

SMGs:
- may use similar base damage to pistol-calibre semi-auto pistols
- gain their identity from:
  - Auto Fire
  - larger magazines
  - different range profile
  - less concealability
  - sustained fire capability

Do NOT make SMGs automatically deal much more damage per bullet than pistols using comparable ammunition.

Weapon identity should not rely only on damage.

Other balancing axes include:
- range DV profile
- fire modes
- magazine capacity
- concealability
- handling
- recoil
- suppression capability
- sustained fire
- hardpoints
- manufacturer
- weapon technology and compatible payloads

Important:
LMGs should not simply be “assault rifles with higher damage.”

Their role should come mainly from:
- sustained fire
- large ammunition capacity
- Auto Fire
- Suppressive Fire

SMGs should also have a real role beyond being weaker rifles:
- Close-range performance
- handling
- concealability
- Auto Fire access

The shared Small Arms skill intentionally makes Pistol flexibility and SMG
automatic fire a meaningful package for one specialist. Rifle should likewise
be distinguished from SMG through range profile, battlefield role, platform
capability, fire-mode and technology access, and modification capacity—not
merely by dealing more damage.

## RATE OF FIRE / WEAPON DIFFERENTIATION

CURRENT DESIGN DIRECTION:

Do NOT assume the system needs Cyberpunk RED’s ROF 1 / ROF 2 structure.

Weapons can instead be balanced across more levers:
- damage
- range profile
- fire-mode access
- magazine size
- reload profile
- hardpoints
- concealment
- ammo compatibility
- traits
- manufacturer
- special ammo
- recoil / Attribute requirement
- price

For example, a lower-damage pistol does not necessarily need multiple attacks per Main Action to remain viable.

This remains open to later mathematical testing.

## WEAPON TRAITS

CONFIRMED DESIGN DIRECTION:

Weapons can have traits in a style broadly inspired by Pathfinder 2e.

Traits should provide compact rules hooks without bloating base resolution.

Examples discussed:
- Brutal
- Devastating
- Extreme Range

Possible future traits may interact with:
- crit effects
- armour
- shield penetration
- firing modes
- reloads
- special ammo
- concealment
- stability

Do not define additional traits unless instructed.

## WEAPON MODIFICATIONS — CONFIRMED DIRECTION

Weapon mods should usually modify a specific part of weapon behaviour rather than simply giving generic attack bonuses.

The range-band system should be used heavily for this.

Current examples:

Laser sight:
- improves Close-range capability

Red dot / reflex sight:
- improves Medium-range capability

Magnified scope:
- improves Long-range capability

Exact numerical improvements are unresolved.

Preferred design philosophy:
A modification should ideally alter the weapon’s range profile or another weapon property rather than simply granting universal “+1 to hit.”

This helps mods stay specialised rather than becoming automatic purchases.

## WEAPON HARDPOINTS / MOD CAPACITY — CONFIRMED

Weapons should have a maximum number of modifications they can support.

Mod capacity / hardpoints are part of weapon balance.

Potential hardpoint categories discussed include:
- Optic
- Barrel / Muzzle
- Underbarrel
- Internal
- Power / Ammo system

Exact hardpoint taxonomy is not yet final.

Important:
More hardpoints are themselves a significant mechanical advantage and must consume part of a weapon/manufacturer’s balance budget.

A weapon with more hardpoints should generally give something up elsewhere rather than simply being strictly superior.

## MANUFACTURERS / BRANDS — CONFIRMED DESIGN DIRECTION

Weapons will have brands/manufacturers with distinct mechanical identities.

Manufacturers may alter things such as:
- number of hardpoints
- hardpoint types
- supported ammunition/energy technologies
- default weapon traits
- reliability
- price
- handling
- base range profile
- compatibility with specialised modifications

Examples of possible brand identities discussed:
- highly modular manufacturer with additional hardpoints
- military manufacturer with fewer hardpoints but strong baseline performance/reliability
- energy specialist capable of using unusual energy technologies
- budget manufacturer with lower price but reduced flexibility/reliability
- precision manufacturer with superior range performance but less modification flexibility

These are design examples, not yet named or finalised brands.

Manufacturer differences should create tradeoffs, not straight upgrades.

## WEAPON FORMS AND TECHNOLOGIES — CURRENT RULES

Weapon form and weapon technology are separate design layers:

> Weapon form determines the weapon's physical role and range envelope.
> Weapon technology determines how it interacts with damage, Shields,
> Hardness and other battlefield systems within that envelope.

Forms include Pistol, SMG, Combat / Assault Rifle, Shotgun, Sniper / Long
Rifle, LMG / Support Gun and later specialised forms. Technologies currently
include **Kinetic**, **Shard** and **Laser**. A Kinetic Pistol, Shard Pistol and
Laser Pistol are distinct weapons with different internal mechanisms. They do
not chamber interchangeable Kinetic, Shard or Laser ammunition, and Laser is
not a Kinetic firing mode. Technology/form availability is intentionally
asymmetric: do not create combinations merely to complete a matrix. A form
should exist only when it has a distinct mechanical purpose.

Special ammunition or payloads may still modify an otherwise compatible
weapon, but that is separate from these technology families.

### Kinetic — READY TO LOCK

Kinetic is the conventional general-purpose projectile technology:

- use the weapon form's normal d6-based damage profile;
- ordinary Shield Ablation 1;
- use the form's normal accuracy and range profile;
- Auto may be available when the specific weapon supports it; and
- interact with Hardness normally.

Against Hardness, resolve damage against current Hardness, apply positive
penetrating damage, and then reduce Hardness by 1 only if the attack penetrated.
Kinetic remains the flexible generalist and receives no additional strength or
weakness at this stage. Conventional overpenetration can be hazardous aboard
spacecraft, stations, aircraft, pressurised habitats and other fragile
environments.

### Shard — READY TO PLAYTEST

Shard is a distinct microprojectile weapon technology. A Shard weapon launches
a tightly grouped cluster of very small, low-penetration projectiles. **Shard
is not Flechette ammunition**, and a Shard attack is not a shotgun cone unless
a specific weapon independently says so. The separately named Flechette Charge
is an explosive Charge payload from the Demo family, not a Shard firearm or a
synonym for Shard technology.

Current rule:

- use the appropriate weapon-form profile;
- step every d6 damage die down to d4;
- preserve flat damage modifiers;
- use normal accuracy;
- Shield Ablation 2;
- cannot use Auto; and
- cannot penetrate, damage or ablate Hardness.

Examples: Kinetic 2d6 becomes Shard 2d4; 2d6+2 becomes 2d4+2; 3d6 becomes
3d4; and 3d6+2 becomes 3d4+2.

Shard is attractive where structural penetration is undesirable, including
spacecraft, orbital or pressurised stations, aircraft and fragile industrial
environments. Mathematical review found that faster Shield ablation keeps its
complete-fight performance close to Kinetic while its lower raw damage makes it
significantly worse once Shields are gone. Auto still strips Shields faster at
T2–T4. The no-Hardness rule is already a major limitation.

Do not give Shard a general cleave or adjacent-target effect. A light cleave was
discussed only as a future contingency if live playtesting finds Shard too weak.

Current form direction is **Shard Pistol** and **Shard Rifle**. Do not assume a
Shard SMG, Shotgun or LMG. Shard SMG is specifically disfavoured because Shard
cannot use Auto and would be too mechanically similar to the Pistol or Rifle.

Shard Rifle remains plausible, but its identity relative to a Kinetic Rifle is
still being refined. Smart/guided microprojectile technology is a strong future
direction: target marking, tracking, homing, target reacquisition and attacks
that can curve around conventional cover are possible design areas, not current
rules. Advanced guidance may primarily sit in the Engineer Feat pool, allowing
specialists to exploit Shard technology more deeply while baseline Shard users
retain the rules above. Track, cover-bending and specific smart-weapon Feats are
unresolved; do not grant those functions to every Shard user by default.

### Laser — READY TO PLAYTEST

Laser weapons are distinct directed-energy weapons.

Current damage rule:

- step every d6 damage die up to d8;
- preserve flat damage modifiers; and
- Shield Ablation 0: successful ordinary Laser hits never reduce Shield.

Examples: Kinetic 2d6 becomes Laser 2d8; 2d6+2 becomes 2d8+2; 3d6 becomes
3d8; and 3d6+2 becomes 3d8+2.

Laser trades higher immediate raw damage for no cumulative Shield degradation.
Mathematical review found the all-d8 conversion the healthiest tested
compensation: +1 flat, +2 flat and stepping only one die were too weak, while
adding 1d6 was too aggressive at lower tiers. Laser remains viable against
fresh Shields, becomes clearly attractive once Shields are gone, and can be
outperformed by cumulative Kinetic ablation across a fresh T4 fight.

Laser should gain **range consistency, not universal range superiority**. The
current broad Laser Rifle test profile is:

| Band | DV |
| --- | ---: |
| Close | 15 |
| Medium | 15 |
| Long | 15 |
| Extreme | 17 |

This is a playtest profile, not a mandatory stat line for every Laser weapon.
Do not make DV 13 universal to Laser weapons.

Laser Pistols exist as a distinct Small Arms form. Their current test envelope
is Close DV 15 and Medium DV 15, with Long and Extreme unavailable. Pistol-form
emitter size, optics and cooling still limit the physical envelope; Laser
technology does not allow Small Arms to erase Long Arms.

Current intended or strongly supported Laser forms are **Laser Pistol, Laser
Rifle and Laser Sniper**. Do not assume a Laser SMG or Laser Shotgun. Laser SMG
lacks a distinct current purpose, while the Kinetic Shotgun already owns the
deliberate Close-only Cone identity.

Laser Sniper is a strongly desired future form. Its current range direction is
no Close attack, Medium available but not ideal, and excellent Long/Extreme
performance; exact DVs remain unresolved. In fiction it uses a **long-focus
emitter** whose beam requires a minimum propagation distance to achieve the
coherent focal geometry needed for a precision strike. Describe this through
focal convergence and beam geometry, not as the laser simply becoming stronger
the farther it travels. This is specific to the Laser Sniper platform: Laser
Pistol is a short-emitter Close/Medium platform, Laser Rifle is a stable
general-purpose beam, and Laser Sniper is a long-focus precision platform.

Laser interaction with Hardness is unresolved. Do not copy the ordinary
Kinetic Hardness rule by default: the larger d8 pools would make high-tier
Lasers disproportionately effective against hard structures. Possible future
heating, cutting and specialised structural rules remain unapproved.

**Future only:** Laser Overload may eventually expend the entire remaining
battery to heat or cut structures and potentially gain Breaching. Its intended
role is structural utility, not a giant anti-personnel alpha strike. Smoke or
other obscurants may eventually interfere with Laser fire more than Kinetic
fire, but no such numerical rule exists and current Laser balance does not rely
on it. Final Laser batteries and capacity are also unresolved.

### Technology sequencing and team tactics

Auto followed by a Main Action weapon switch into Laser is intentionally
permitted. Current maths found it about 3% better than the best pure strategy at
T1, slightly worse than pure Laser at T2, about 11% better at T3 and about 20%
better at T4. This is currently treated as a reward for loadout choice, landing
Auto hits, recognising Shield state and paying the switch cost—not as an
exploit. Do not nerf Auto, Laser or switching solely to remove it; revisit only
if live playtesting makes the sequence mandatory.

Mixed teams such as Auto + Laser or Shard + Laser may likewise outperform
homogeneous teams in some tiers. This intended interaction rewards equipment
planning, protection-state awareness, sequencing and coordination without
creating mandatory MMO-style roles.

### Concise personal-combat summary

- **Kinetic:** normal d6 damage, Ablation 1, normal Hardness interaction, Auto
  on compatible weapons.
- **Auto:** −3 attack, all d6 become d4, flat modifiers preserved, Ablation 3.
- **Shard:** all d6 become d4, flat modifiers preserved, Ablation 2, no Auto,
  cannot damage or ablate Hardness.
- **Laser:** all d6 become d8, flat modifiers preserved, Ablation 0, flatter
  range behaviour, Hardness interaction unresolved.

Do not add baseline Kinetic, Shard or Laser resistance statistics.

### Heavy Continuous Laser — FUTURE DESIGN DIRECTION

The Heavy Continuous Laser is a distinct Heavy Weapons family, not a “Laser
LMG.” It uses **STR + Heavy Weapons** and maintains a continuous beam against a
single target. Its opening damage should be lower than an equivalent LMG, then
ramp while the beam remains continuously engaged on that target until it
eventually exceeds LMG damage.

The provisional relative shape is approximately one die below LMG on turn 1,
equivalent on turn 2, one die above on turn 3 and two dice above on turn 4 and
later. This is conceptual only, not a locked damage pool; Laser's d8 conversion
requires later mathematical analysis.

Continuity should reset when the target changes, line of sight breaks, the
shooter cannot fire for a turn, the beam is voluntarily ended or another
interruption prevents continuous engagement. Exact reset wording and range
profile remain unresolved. Breaking the beam is intended counterplay; a major
enemy that stays exposed for four uninterrupted rounds may appropriately face
catastrophic damage.

### Current Foundry v0.2.0 implementation status

The current Foundry build implements the Kinetic, Shard and Laser weapon-family
field; Kinetic Auto at −3 attack, d6-to-d4 and Ablation 3; Shard d6-to-d4,
Ablation 2 and no Auto; Laser d6-to-d8 and Ablation 0; per-mode ammunition;
Main Action reload declarations; and the adjacent-hostile restriction for
two-handed ranged weapons. It does not automate Quickdraw or any technology-
specific Hardness interaction. Weapon range data still uses the earlier
weapon-specific physical maxima noted in the range section above.

The seeded Breach Shotgun is now Close-only and Cone-only, with the four-square
1/2/3/4 pattern, a shared attack and damage roll, normal full damage, Ablation
1, multi-target chat application, friendly-fire eligibility and the Shotgun
adjacency exception. Players must place/agree the template and target every
affected token manually; diagonal geometry and automatic token discovery are
not implemented. `RANGE_AUDIT.md` remains a historical v0.1.2 snapshot.

## SPECIAL AMMUNITION / DAMAGE EFFECTS — CONFIRMED DIRECTION

The system should support specialised attack types such as:

- electric / taser / arc
- incendiary / heat
- cryogenic / freezing
- EMP
- corrosive

These should generally involve meaningful tradeoffs rather than functioning as pure upgrades.

Possible design space includes:
- lower direct damage
- specialised status effects
- increased cost
- scarcity
- limited target effectiveness
- different armour interaction
- environmental hazards

Resource usage is also a potential special-ammunition balancing lever.

Exact rules remain unresolved.

Earlier electric/arc, incendiary/heat, cryogenic, EMP and corrosive ideas remain possibilities for specialised weapons or ammunition, **not** additional core damage types or established damage-type effect packages. Their detailed interactions remain unresolved.

## MELEE WEAPON FAMILIES — CONFIRMED DIRECTION

Desired melee families include:

- standard blades
- standard blunt weapons
- powered / motor-driven weapons
- energy blades

Examples:

Standard blades:
- knives
- swords
- machetes
- axes / heavy blades depending on final classification

Blunt:
- clubs
- hammers
- maces
- sledgehammers

Powered:
- chainswords
- vibroblades
- powered hammers
- similar motor-driven weapons

Energy:
- plasma blades
- energy blades
- lightsaber-like weapons

Important balance rule:
Energy melee weapons must not automatically combine:
- shield bypass
- armour bypass
- very high damage

If they receive multiple major advantages, they need meaningful drawbacks such as:
- lower base damage
- limited power
- heat
- cost
- rarity
- partial rather than complete armour penetration
- environmental risks

## Melee Balance Principle

Melee is intended to remain relevant partly because of the energy-shield design.

Current shield concept:
- high-velocity ranged attacks are stopped/mitigated by personal energy shields
- slower physical objects and physical interaction can pass through the shield
- therefore melee attacks can bypass the shield layer

Because of this, melee weapons do NOT need firearm-level raw damage in order to remain threatening.

This makes it viable for:
- firearms to have significantly larger raw damage pools
- melee weapons to use smaller single damage dice
- melee to remain dangerous because it bypasses shield protection

This interaction is central to the current combat design.

## Ranged Weapon Handling while Adjacent — CONFIRMED

A character cannot make a ranged attack with a **two-handed ranged weapon**
while adjacent to a hostile enemy. This is a handling restriction, not an
attack penalty: the weapon cannot be fired in that state unless a specific
ability overrides the rule.

Pistol-type weapons are explicitly exempt and may be fired while adjacent to a
hostile enemy. Do not remove that exemption because a particular Pistol uses
Shard, Laser or another unusual technology. Other one-handed ranged weapons are
not prohibited by this two-handed restriction unless their own rules say
otherwise. An SMG's handling depends on whether that model is one- or
two-handed.

**Shotgun exception:** a Shotgun may make its Cone attack while adjacent to a
hostile enemy. Without this exception an adjacent enemy would disable the
weapon at the exact range where it is intended to function. The exception does
not replace Pistol's Close-quarters flexibility: Pistols retain one-handed use,
exact target selection, no mandatory area or friendly-fire geometry,
compatibility with another held item or weapon, backup use and Soldier
Quickdraw interaction.

This makes closing on a Rifle, LMG or Sniper user tactically meaningful while
preserving Shotgun as the Close-quarters area weapon and Pistol as the
Close-quarters flexible weapon.

## PERSONAL ENERGY SHIELDS — CONFIRMED CORE CONCEPT

CONFIRMED CORE CONCEPT:

Personal energy shields are a major defensive/equipment system.

Fiction:
- designed to stop / mitigate high-speed projectiles
- slower physical objects can pass through
- normal physical interaction remains possible
- melee attacks therefore bypass the energy shield

Current shield behaviour:
- shield has a protection / threshold value
- with shield alone, incoming ranged damage is compared against its current value
- under the confirmed Armour Floor structure below, incoming ranged damage is compared against the **single combined Ranged SP value**
- if damage exceeds the applicable one protection value, excess damage gets through to HP
- a successful hit applies the attack's Shield Ablation even if its damage does
  not exceed the protection threshold: standard Kinetic is Ablation 1, Shard is
  Ablation 2, Laser is Ablation 0, and the current Auto mode is Ablation 3

Shield-only Standard Fire example (Armour Floor 0): Shield 8

Hit for 5:
- no penetrating damage
- shield becomes 7

Hit for 8:
- no penetrating damage
- shield becomes 7

Hit for 12:
- 4 damage penetrates
- shield becomes 7

This is important for weapon balance:
- high-damage weapons are good at penetrating shields
- high-hit-count / rapid-fire weapons may be good at stripping shield strength

Shields are intended to be rechargeable using:
- batteries
- power cells

This creates an ongoing equipment/economic cost analogous in broad purpose to repairing/replacing armour in Cyberpunk RED.

**COMBAT MATHS BASELINE v1.0 RECOVERY STRUCTURE:** Shield ablation persists after combat and does not reset naturally during a firefight. Recharging occurs only outside combat, requires uninterrupted time and consumes batteries/cells that restore a fixed amount of Shield SP, never above Shield Max. Larger-capacity shields therefore carry greater recovery and logistical cost. Exact recharge time, restoration amount, battery cost, carrying burden and interruption rules remain TBD.

Exact starting shield values and recharge costs remain unresolved.

## Physical Armour, Melee AC, Armour Floor and Shield SP — COMBAT MATHS BASELINE v1.0

Physical armour and energy shielding remain distinct fictional/protection components, but a normal character's armour and integrated shield/emitter form **one defensive equipment chassis for balance purposes**. Characters do not normally combine an independently optimised “best armour” slot with an independently optimised “best shield” slot. The chassis plus same-tier armour mods forms the completed defensive package.

Focused sensitivity analysis found that the separate Melee AC, Shield SP and Armour Floor statistics create meaningful melee/ranged matchups without making either attack mode universally superior. The following structure is locked under Baseline v1.0. Exact numerical values and several implementation details remain provisional.

### Physical armour

The normal defensive chassis establishes:

1. **Melee AC:** the static target number for ordinary melee attacks.
2. **Shield SP / shield capability:** the temporary ranged-protection contribution.
3. **Mod capacity/access:** including expected same-tier Armour Floor investment.
4. **Physical tradeoffs:** such as mobility, weight, load and concealability.

**Armour Floor** is persistent, non-ablative damage reduction that applies to melee damage and forms the minimum value of the wearer's Ranged SP. It should normally come primarily from armour mods rather than being free on every chassis. A chassis with built-in Floor must spend appropriate item budget on it.

Melee AC and Armour Floor may trade against each other to create equipment identities. Agile armour may have high Melee AC and low Floor; heavy armour may have lower Melee AC and higher Floor; balanced and specialised profiles may occupy other combinations. No exact item profiles are canon yet.

### Energy shield and ranged protection

An energy shield supplies temporary, ablative **Shield SP**. Starting ranged protection is one combined value:

`current Ranged SP = current Shield SP + Armour Floor`

On a successful ranged attack:

1. roll damage;
2. subtract current Ranged SP once;
3. apply positive excess to HP;
4. after resolving damage, ablate the shield portion by the attack's ablation value.

Ordinary ablation cannot reduce current Ranged SP below Armour Floor. A successful hit may ablate Shield SP even if it deals no HP damage. There is no Shield-soak-then-Armour-soak sequence.

Illustrative example only: Shield SP 8 plus Armour Floor 2 begins at current Ranged SP 10. Successive one-point ablations reduce it 10 → 9 → 8 → 7 → 6 → 5 → 4 → 3 → 2. The example does not approve those equipment values.

### Melee interaction

A melee attacker rolls against Melee AC. On a hit:

1. roll damage;
2. ignore Shield SP;
3. subtract Armour Floor once;
4. apply positive excess to the common HP pool.

Ordinary melee attacks do not ablate the energy shield. They bypass its temporary portion because slower physical attacks can pass through the field, but physical armour still reduces the damage.

Melee and ranged therefore reach the **same HP pool by different routes**. There is no separate melee durability track. Melee is an intentional counter to shield-heavy protection; ranged retains distance, immediate access, weapon-specific range identity and the escalating shield-degradation curve.

### Mathematical status

The structural model is locked under Combat Maths Baseline v1.0 and is ready for content/subsystem design. No exact Melee AC, Armour Floor, Shield SP, damage or item progression value is made into a mandatory item statistic by that decision.

Standard ranged-hit ablation is **1** unless a weapon, mode or effect explicitly
changes it. Auto's current −3 attack / d6-to-d4 / Ablation 3 package is ready to
playtest; ammunition expenditure and final post-playtest values remain
provisional. Penetration procedure, recharge economics,
movement/engagement/retreat, Trauma, cover, concealment, suppression and
mixed-party encounter tuning remain provisional or TBD.

### Current Foundry v0.2.0 playtest calibration — PROVISIONAL

The current implemented calibration deliberately moves survivability from HP
into degrading protection:

| Tier | Shield centreline | HP centreline | Armour Floor target | Heavy melee test damage |
| --- | ---: | ---: | ---: | --- |
| T1 | 7 | 14 | 1 | 2d6 |
| T2 | 8 | 16 | 2 | 2d6+1 |
| T3 | 9 | 19 | 3 | 2d6+2 |
| T4 | 10 | 20 | 4 | 3d6 |

These replace the earlier Foundry test values of Shield 4/5/6/7 and HP
18/22/26/30. They are **playtest calibration**, not locked character-building
formulas or mandatory item statlines. Standard Kinetic Fire remains Ablation 1. Auto
uses the current ready-to-playtest −3 attack / d6-to-d4 / Ablation 3 package.

Melee impact was explicitly reviewed across balanced, shield-heavy,
high-Floor/high-AC and agile armour at all tiers plus cross-tier matchups.
Keeping the ranged damage scale made adjacent melee too efficient after HP was
reduced. The implemented correction is a separate lower melee weapon damage
scale; no universal Melee AC or Armour Floor increase was required. Melee
remains deliberately strongest into shield-heavy equipment, while heavy armour
can approach ranged durability against melee. Live tests should include melee
starting adjacent, one Move away and two Moves away.

## HARDNESS AND INTEGRITY — CURRENT STRUCTURAL RULES

Hardness represents structural resistance for hard, non-personal targets. It is
separate from personal Shield SP, Armour Floor and Melee AC. Breaching interacts
with Hardness only and does not degrade personal Armour Floor.

Base resolution is:

`raw damage − current Hardness = penetrating damage`

Apply positive penetrating damage as appropriate. If the result is zero or
negative, no penetrating damage occurs.

### Ordinary attacks against Hardness — CONFIRMED

After resolving damage, if an ordinary attack's raw damage exceeded the
target's current Hardness:

1. apply the penetrating damage; then
2. reduce current Hardness by 1.

If the attack did not penetrate, it deals no penetrating damage and does not
reduce Hardness. Hardness reduction occurs after damage and cannot reduce
Hardness below 0.

### Breaching X — PLAYTEST RULE

After resolving damage normally against current Hardness, a successful
**Breaching X** attack reduces current Hardness by X whether or not its damage
penetrated. Breaching reduction occurs after damage and replaces the ordinary
−1 Hardness loss; the two do not stack.

Example: resolve a Breaching 2 attack against H6 using H6, then reduce H6 to H4.
Do not reduce the Hardness before calculating that attack's damage.

Current character-scale ratings are:

- **Breaching 1:** guaranteed structural progress or specialised
  anti-structure capability;
- **Breaching 2:** serious heavy or anti-vehicle breaching;
- **Breaching 3:** dedicated demolition.

Ordinary character-scale equipment currently caps at Breaching 3. Do not add
Breaching 4+ without a later design need. Possible assignments such as an
anti-materiel rifle, specialised ammunition, powered cutter, anti-vehicle
cannon or shaped warhead remain equipment-design questions unless separately
confirmed. Breaching Charge currently tests Breaching 3.

### Structural target patterns

Active or functional hard targets—such as drones, vehicles, mechs and
machinery whose progressive damage matters—use **Hardness + Integrity**.
Integrity is their HP-equivalent. Their final destruction and disable rules
remain to be defined.

Passive structures—such as cover, walls, doors, bulkheads, hull sections and
structural scenery—may use **Hardness only**. For these objects, Hardness is
both resistance and the structural destruction track; a separate Integrity
pool is not required by default.

At H0:

- a Hardness + Integrity target remains functional while Integrity is above 0,
  but has no remaining structural soak;
- a Hardness-only object or affected section is destroyed, breached, opened or
  otherwise structurally defeated.

For large structures, H0 applies to the affected section rather than
automatically destroying an entire building, vehicle or spacecraft.

### Current Hardness baselines — PLAYTEST VALUES

| Target | Hardness |
| --- | ---: |
| Fragile interior wall | 1 |
| Light cover | 2 |
| Ordinary door | 3 |
| Heavy cover | 5 |
| Reinforced door | 6 |
| Civilian spacecraft hull | 5 |
| Reinforced spacecraft hull | 8 |
| Military/armoured spacecraft hull | 12 |
| Light drone | 2 |
| Heavy drone | 4 |
| Civilian vehicle | 3 |
| Armoured vehicle | 6 |

Individual examples may vary. Military hulls intentionally extend beyond the
old H8–10 concept so ordinary firearms usually struggle while heavy and
Breaching weapons can still contribute.

### Criticals and Auto against Hardness

Critical hits do not automatically reduce additional Hardness or increase a
Breaching rating. Apply normal critical rules otherwise.

Personal Shield Ablation and structural Hardness degradation are separate.
Auto Fire is one attack resolution for Hardness: it does not reduce Hardness per
represented bullet or convert Shield Ablation 3 into Hardness loss. A normal
Auto hit reduces Hardness by 1 only if it penetrates. If the weapon separately
has Breaching X, apply Breaching X once.

### Fix and structural repair — PLAYTEST DIRECTION

Hard targets track maximum and current Hardness, such as `Hardness 2/4`. Fix can
restore lost current Hardness up to its maximum but cannot increase maximum
Hardness. On a Hardness-only object, restoring Hardness repairs the structure.
On a Hardness + Integrity target, Hardness and Integrity are separate repair
concerns.

Repair time, parts, cost, combat repair and detailed Fix procedures remain
unresolved.

## Four-Tier Gear Framework — CONFIRMED STRUCTURE; NUMBERS PROVISIONAL

Novum uses **four normal equipment tiers** as broad production/capability bands:

1. Tier 1 — early/basic/civilian/commercial association;
2. Tier 2 — professional/restricted/upgraded association;
3. Tier 3 — military/advanced/specialist association;
4. Tier 4 — elite/top-end production/special-operations association.

The descriptive tier names are provisional. Tier 4 is the top **normal** equipment band and must remain coherent with the ordinary combat ecosystem; it is not intentionally broken endgame loot.

### Fuzzy availability, not equip gates

Gear tiers are expectations, not character-level restrictions. A character may acquire higher-tier gear early through money, theft, contacts, mission rewards, rarity or black-market access. Lower-tier equipment remains usable as budget, concealed, backup or specialist gear. NPC groups may mix tiers within the same encounter.

Exact level associations, acquisition rates, prices, legality and rarity are TBD. Current mathematical guidance favours substantial overlap between adjacent tiers rather than rigid brackets.

### Same-tier modification rule

**CONFIRMED:** a gear chassis accepts only modifications from its own tier. A Tier 2 weapon or armour chassis accepts Tier 2 mods, not Tier 3 or Tier 4 mods. This prevents favourable low-tier chassis from absorbing later-tier modification power and exceeding the intended envelope.

### Completed packages are the balance unit

Balance comparisons should use an expected completed same-tier package:

- armour chassis + expected same-tier armour mods + shield profile;
- weapon chassis + expected same-tier weapon mods.

Bare chassis are not the default comparison unit. Mod capacity is a meaningful part of item power.

**CONFIRMED DIRECTION:** a normal combat-ready armour build is expected to invest some same-tier mod capacity in Armour Floor. Armour Floor should normally come primarily from armour mods rather than being free on every chassis. A character may omit that investment to gain mobility, stealth, sensors, hacking support, recharge efficiency or another capability, but should then be measurably more vulnerable. A chassis with built-in Floor must spend appropriate item budget on it.

Exact mod capacity, slot structure, expected Floor values and chassis/mod power shares are provisional.

### Operator progression versus gear progression

**Character progression improves the operator. Gear progression improves capability and specialisation rather than relying primarily on flat accuracy bonuses.**

Higher-tier weapons should usually advance through range identity, handling, capacity, reload, ablation, precision support, firing modes, penetration, suppression, traits, utility and mod flexibility. Do not make each tier a universal +hit increase. High-tier gear must not simultaneously maximise damage, range, ablation, penetration, handling, accuracy, capacity and special traits.

Internal design budgets may use major/moderate/minor upgrade weights or archetype budgets. They are not currently a player-facing point-buy system.

### Prototype / Exotic / Legendary items

Prototype, Exotic or Legendary items sit **outside** the normal four-tier ladder. They are not Tier 5. They may exceed one normal envelope or bend a standard tradeoff, but should remain rare exceptions with a drawback, limitation, resource burden, unique condition or narrative scarcity. Ordinary progression and encounter balance must not assume their presence.

### Moderate power step — BASELINE v1.0

One ordinary tier step should normally produce approximately **10–30% improvement on the specific axis or matchup being improved**. Adjacent tiers should overlap heavily. A tier advantage should matter and feel aspirational without automatically determining combat or making lower-tier gear nonfunctional. Completed lower-tier specialist gear may outperform generic higher-tier gear in its niche.

### Baseline calibration targets

These are stable mathematical anchors for content design, not mandatory item recipes:

| Tier | Operator | Melee AC | Expected Floor after mods | Shield SP | Typical weapon | Tested same-tier ranged TTI |
| --- | ---: | ---: | ---: | ---: | --- | ---: |
| Tier 1 | approximately +4 | approximately 14 | approximately 1 | approximately 4 | approximately 2d6+2 | 7.9 rounds |
| Tier 2 | approximately +6 | approximately 15 | approximately 2 | approximately 5 | approximately 3d6 | 7.5 rounds |
| Tier 3 | approximately +8 | approximately 16 | approximately 3 | approximately 6 | approximately 3d6+1 | 7.7 rounds |
| Tier 4 | approximately +10 | approximately 17 | approximately 4 | approximately 7 | approximately 3d6+2 | 7.9 rounds |

The anchors preserve broadly stable same-tier degradation/TTI while accuracy, protection and capability rise.

### Provisional content-design envelopes under Baseline v1.0

| Tier | Melee AC | Normal Shield SP | Extreme Shield edge | Expected / high-valid Floor |
| --- | --- | --- | ---: | --- |
| Tier 1 | 12–16 | 2–5 | 6 | 1 / 2 |
| Tier 2 | 13–17 | 3–6 | 7 | 2 / 3 |
| Tier 3 | 14–18 | 4–8 | 9 | 3 / 4 |
| Tier 4 | 15–19 | 5–9 | 10 | 4 / 5 |

These are guardrails for creating varied armour archetypes, not permission to combine every maximum. Floor 0 remains a valid intentional defensive sacrifice, but is not the assumed normal combat build.

### Penetration philosophy — BASELINE v1.0

- ordinary penetration: 0;
- penetration 1: specialist or conditional;
- penetration 2: strong higher-tier investment with meaningful cost, setup or condition;
- penetration 3+: normally Prototype/Exotic/Legendary or a danger zone.

Do not routinely apply penetration to total current Ranged SP. Preferred future directions interact conditionally with Armour Floor and/or degraded protection. The exact procedure remains TBD.

### Numerical status

The four-tier structure, fuzzy access, same-tier mods, completed-package balance assumption, expected Floor-mod investment, moderate power-step philosophy, calibration targets and outside-the-ladder Exotic category are part of Combat Maths Baseline v1.0. Exact tier names, level windows, item statistics, mod capacity, Auto ammunition use and final post-playtest values, penetration procedure and economic values remain provisional content guidance.

## ACTION ECONOMY — CONFIRMED

Each turn provides:

- 1 Main Action; and
- 1 Move Action.

A Main Action may be spent as an additional Move Action. A Move Action cannot be
converted into a Main Action. Anything normally costing a Move Action may
instead be paid for with the Main Action.

The baseline is one attack per Main Action unless a specific later rule or Feat
changes it. Do not add Minor, Bonus or Swift Actions. Reactions and tightly
bounded Free Actions are defined below rather than becoming general extra-turn
currencies.

### Main Action

Typical Main Actions include:
- Standard Fire
- Auto Fire
- Suppressive Fire
- melee attack
- Prepare
- reload
- draw or stow significant equipment
- use equipment
- use a medkit
- interact with a terminal
- hack
- activate equipment
- open/interact with something meaningful during combat

Exact interaction list may expand later, but meaningful actions should normally consume the Main Action rather than becoming free/minor actions.

Reloading a weapon universally costs a Main Action unless a future Feat,
equipment property or other explicit exception changes that cost. No such
exception is established yet.

### Action-value baseline

A standard attack is the opportunity-cost benchmark for future hacking, drone control, combat drugs, Medtech intervention, social support, engineering and battlefield-control actions. A non-attack Main Action should create roughly one attack's worth of immediate encounter impact or a setup/team/multi-round payoff capable of exceeding one personal attack. Exact subsystem values remain TBD.

### Move Action

A normal Move Action allows:
- 5 squares
- 10 metres

Move Actions also cover meaningful quick handling or manipulation, including:

- drawing an accessible grenade or item;
- opening an unlocked ordinary door;
- standing from prone; and
- similar quick handling.

Locked, jammed, powered, barricaded, heavy or otherwise difficult doors may
require different actions or checks. Their detailed procedures are unresolved.

### Split Movement

Movement may be split around the Main Action.

Example:
- move 2 squares
- fire
- move remaining 3 squares

No special action is required to split movement.

### Prone and climbing

Dropping prone is a Free Action. Standing from prone costs a Move Action.

Climbing uses normal movement at half speed and requires free hands. A
character cannot climb while carrying items in their hands unless a specific
ability or equipment rule says otherwise.

### Free Actions

A Free Action is something that takes roughly one second or less and does not
meaningfully compete with movement or a Main Action. This is a GM-facing
heuristic, not rigid real-time simulation.

Typical Free Actions include:

- short speech or a tactical callout;
- dropping an item;
- dropping prone;
- releasing a grip or letting go of an object;
- pressing a button or activating a simple ready control already under the
  character's hand or thumb;
- a quick gesture or point;
- a simple comms command; and
- remote-triggering one prepared linked Charge or linked Charge group.

The following are generally not Free Actions:

- drawing or stowing an item;
- opening an ordinary unlocked door;
- reloading;
- retrieving something from storage;
- picking up or meaningfully manipulating equipment;
- operating a complex control panel; and
- anything requiring aiming, placement or setup.

## REACTIONS — CONFIRMED UNIVERSAL RESOURCE

Each character has one Reaction available per round, refreshed at the start of
their turn. A Reaction can be used only when a rule, Role feature, Feat, item or
Prepared Action supplies a valid trigger. Having several possible Reaction
options does not grant several Reactions.

Generic progression does not currently grant additional Reactions.

## PREPARE — CONFIRMED UNIVERSAL RULE

Overwatch is one common use of Prepare, not a separate action engine.

To Prepare:

1. spend the Main Action;
2. commit the character's Reaction;
3. choose one specific action that normally costs a Main Action; and
4. define one clear, observable trigger.

The Move Action may be used normally before or around preparing. Prepare stores
only the chosen Main Action: it does not bank movement, a Move Action or a full
turn.

If the trigger occurs before the start of the character's next turn, resolve
the committed Reaction and perform only the prepared Main Action. It resolves
before the triggering action completes. No movement occurs during the
triggered action unless that specific Main Action explicitly includes movement.

If the trigger never occurs, Prepare expires at the start of the character's
next turn. If the committed Reaction is spent on something else, the Prepared
Action is lost. All normal requirements for the chosen action must still be
satisfied when the trigger occurs.

Examples include preparing an attack when an enemy enters a doorway, activating
machinery when an observable event occurs, or performing a medical Main Action
when its target is already in valid range.

## COMBAT ROUND / TURN TIME — CONFIRMED

A combat turn represents approximately:

3 seconds

This means:
- 20 turns ≈ 1 minute

The short duration is intended to make combat feel fast and violent.

It also fits:
- one meaningful Main Action
- one Move Action
- at most one ordinary Reaction
- short bursts of movement
- brief speech being free
- reloads and equipment interactions taking meaningful combat time

## COVER — CONFIRMED DIRECTION

Cover is binary.

A character is either:
- In Cover
or
- Exposed / Out of Cover

Do not use multiple cover levels unless later testing demonstrates a strong need.

Simply moving into or out of an appropriate position determines cover. There is
no generic enter-cover, lean or peek action.

Exact numerical effect of being In Cover is not yet defined.

## OVERWATCH / PREPARED ATTACK — CONFIRMED

Overwatch is a Prepared attack. It requires a Main Action to Prepare, commits
the character's Reaction, names a clear observable trigger and requires a valid
weapon and line of fire when triggered. The attack resolves before the
triggering action completes and can therefore prevent completion if its effects
make that action impossible.

Overwatch uses normal attack rules and grants no bonus accuracy, damage,
movement or additional attacks.

A character preparing an attack from behind cover must expose themselves enough
to make that attack. Preparing an attack that requires exposure makes the
character **Out of Cover** while waiting, until the attack resolves or Prepare
expires. Preparing a non-attack action does not automatically remove cover;
determine cover according to whether that action actually requires exposure.
A remote Charge trigger generally does not expose the character.

## DUAL WIELDING — UNRESOLVED

The baseline remains one attack per Main Action. Do not grant universal free
two-weapon attacks. A future dual-wield Feat may use two penalised attacks, one
combined attack resolution or another controlled mechanic, but no exact rule or
penalty is established.

## CURRENT HIGH-LEVEL COMBAT IDENTITY

The current combat system should feel:

- fast
- tactical
- lethal enough to reward preparation
- simple during resolution
- deep through equipment selection
- heavily influenced by positioning
- heavily influenced by range
- strongly differentiated by weapon role
- suitable for enclosed spacecraft/station combat as well as more open encounters

Do not add complexity simply to simulate realism.

Where possible:
- keep core rules universal
- push variety into gear
- use clear weapon traits
- use range profiles
- use manufacturer differences
- use hardpoint choices
- use distinct weapon technologies and compatible payload choices

## Design Philosophy / Balance Requirements

The user wants the combat system to be:

- highly balanced
- mathematically tight
- tactical
- significantly simpler than Pathfinder 2e
- capable of meaningful equipment progression
- capable of weapon modification
- capable of different weapon niches without obvious dominant choices

Thematic appeal alone is insufficient justification for a mechanic.

Future weapon and combat mechanics require evaluation of:
- expected damage
- variance
- hit probability
- crit probability
- shield interaction and ablation
- armour interaction
- time-to-kill
- resource consumption
- action economy
- range performance
- equipment opportunity cost

Mathematical scrutiny and constructive critique are explicit design priorities.

## Setting Context Relevant to Combat

The setting is sci-fi / cyberpunk.

The setting includes a planet and extensive orbital habitation:
- stations
- artificial habitats
- asteroid settlements
- spacecraft
- enclosed environments

This is why:
- overpenetration matters
- hull/wall damage matters
- Shard weapons have an important setting-specific niche
- different weapon technologies should create meaningful mission-equipment choices

## Open specification details

- Detailed Trauma / Critical Injury effects, final weapon-specific numerical
  DVs and band access beyond the current Laser tests, final weapon damage,
  Auto ammunition expenditure and magazine interaction, suppression resolution,
  diagonal Cone-template presentation, and final Extreme-capable weapon
  eligibility remain unresolved.
- Higher-tier Flash, Smoke and Cryo scaling; odd-number movement rounding while
  Slowed; Charge modifications; proximity triggers; Flechette Charge handling;
  any limit on several separate unlinked Free Action trigger activations;
  wider weapon Breaching assignments; final drone/vehicle Integrity; structural
  section sizing; area effects across several wall/hull sections; damage to
  occupants or equipment behind penetrated structures; detailed repairs;
  dual-wielding; future reload exceptions; and multiple-attack/action-
  compression options remain unresolved.
- Final Laser-vs-Hardness interaction, Smoke-vs-Laser interaction, Overload,
  Laser battery capacities, individual weapon cards, any future Shotgun
  technology beyond the Kinetic baseline, Sniper Precision rules, technology
  pricing, and any universal Shard cleave or additional generic Laser weakness
  remain unresolved.
- Shard Track and guided-cover mechanics, exact Engineer smart-weapon Feats,
  final Rifle-versus-SMG DVs, Rifle modification budgets, LMG damage/capacity,
  Suppressive Fire, the Heavy Continuous Laser's exact ramp/range profile and
  final Laser Sniper DVs remain unresolved.
- The supplied timing is approximately 3 seconds per turn. How that relates to a full round containing multiple characters' turns has not been specified.
- Cone Fire's action cost was not explicitly included in the supplied Main Action examples and has not been added by inference.


# Character Design

## ATTRIBUTES

CONFIRMED CURRENT ATTRIBUTE LIST:

- Strength (STR)
- Dexterity (DEX)
- Constitution (CON)
- Intelligence (INT)
- Will (WILL)
- Presence (PRE)

This deliberately replaces the classic Wisdom / Charisma terminology with Will / Presence.

Current intended applications:

STR:
- physical power
- lifting
- grappling
- blunt melee weapons
- normal unarmed attacks
- some heavy ranged weapons
- shotguns
- LMGs / heavy recoil weapons where appropriate
- Threaten by default for physical threats/coercion

DEX:
- precision
- blades
- pistols
- SMGs
- standard rifles
- fine motor control
- likely stealth-related actions

CON:
- endurance
- health
- resistance
- physical resilience

INT:
- hacking
- engineering
- medicine
- technical knowledge
- science / technical tasks

WILL:
- initiative
- discipline
- mental resilience
- instinct / composure

PRE:
- Talk: persuasion, deception, negotiation and other ordinary verbal influence
- leadership
- social influence

Important:
Do not make DEX a universal combat god-stat.

**Attribute-weight direction:** avoid making DEX and INT disproportionately valuable while STR and PRE lack structural uses. A dedicated social game mechanic **will** be implemented and should make PRE meaningful; its rules are **TBD**. A lightweight Load / Carry mechanic drawing on STR is **provisional**, with no formula approved. WILL is the leading candidate for passive Awareness, also without an approved formula.

Initiative is currently intended to use WILL rather than DEX.

Threaten:
- STR + Threaten is the current default conceptual pairing, especially for physical intimidation.
- Other Attributes may fit a particular threat in context, but the general substitution rule is **TBD**.

## ATTRIBUTE GENERATION

CONFIRMED:

Do not use random attribute rolls.

Character creation should use a fixed attribute-boost / point-allocation system inspired conceptually by Pathfinder 2e.

Current direction:
- attributes begin from a common baseline
- players receive a fixed number of boosts / points
- boosts are assigned deliberately
- starting attribute cap should exist

**PROVISIONAL / CURRENT TEST BASELINE:** STR, DEX, CON, INT, WILL and PRE all
start at 0. Allocate eight one-point boosts at level 1, with a starting cap of
3. An example array is **3 / 2 / 1 / 1 / 1 / 0**. Gain **one Attribute increase
at Level 5** and **one at Level 9**. The two increases must currently go to
different Attributes. Attribute cap: 4. These assumptions support the next
progression test; they are not locked final mathematics.

Background should NOT necessarily also grant attribute boosts because Background is currently intended to handle starting skills.

Final attribute progression mathematics remains subject to validation.

## WEAPON + ATTRIBUTE + SKILL PRINCIPLE

CONFIRMED CORE RULE:

The WEAPON determines which Attribute is used.
The TRAINING CATEGORY determines which Skill is used.

Attribute and Skill pairings are therefore not universally fixed.

Examples:

Sword:
1d20 + DEX + Melee Weapons

Sledgehammer:
1d20 + STR + Melee Weapons

Normal punch:
1d20 + STR + Unarmed

Rifle:
1d20 + DEX + Long Arms

Shotgun:
1d20 + STR + Long Arms

Martial arts may deliberately change the Attribute used with Unarmed.

Possible future examples:
- DEX + Unarmed for precision/speed styles
- WILL + Unarmed for discipline/control styles
- possibly CON + Unarmed for endurance-based styles

Important:
Alternate Attributes should come from a defined weapon, martial style, Feat, or ability.
Characters should NOT freely choose their best Attribute for every attack.

Core principle:

“Skill = what you are trained in.
Attribute = how this particular weapon/style is used.”

## SKILL DESIGN PHILOSOPHY

CONFIRMED:

The system should minimise “must-pick” skills.

Avoid universal taxes such as:
- a mandatory purchased awareness skill
- Evasion / Dodge being mandatory for survival

Awareness and defence should not depend on a universally compulsory skill investment.

Skills should represent meaningful competencies rather than things every viable character must buy.

Non-combat skills should be mechanically worthwhile.

Combat skills should improve what a character actively does rather than becoming mandatory passive survival taxes.

## CORE SKILLS — LOCKED LIST OF 16

The core skill list is **exactly**:

1. Small Arms
2. Long Arms
3. Heavy Weapons
4. Demo
5. Melee Weapons
6. Unarmed
7. Pilot
8. Medicine
9. Fix
10. Program
11. Stealth
12. Talk
13. Threaten
14. Athletics
15. Science
16. Survival

**Melee Weapons** combines edged and blunt weapons in one skill. **Unarmed** remains separate. There is no purchased Perception, Notice, Investigation or Search skill; this deliberately avoids a universal skill tax. Trade is not in the core list. Weapon-family descriptions elsewhere in this reference are not separate skill names.

### Weapon skill coverage — CURRENT DIRECTION

- **Small Arms:** pistols and SMGs.
- **Long Arms:** combat/assault rifles, long rifles/sniper rifles and shotguns.
- **Heavy Weapons:** LMGs, launchers and other oversized heavy weapons.
- **Demo:** grenades, explosives, demolition and Charges, including devices
  configured with future trigger modifications such as proximity triggers.
- **Melee Weapons:** knives, swords, machetes, axes where appropriate, clubs, hammers, maces, sledgehammers and powered melee weapons. Exact weapon-family classifications remain open.
- **Unarmed:** punches, grappling and martial arts. “Physical” is not a skill name.

### Social skill definitions — CONFIRMED CORE TERMS

**Talk** covers ordinary verbal/social influence: persuasion, deception, negotiation, charm, conversation, diplomacy and bluffing. **PRE + Talk** is the current default conceptual pairing.

**Threaten** replaces Intimidate as a skill term. It covers threats, coercion, menace, intimidation and making someone believe noncompliance will bring negative consequences. **STR + Threaten** is the current default conceptual pairing.

Contextual Attribute substitution may be possible, but a general alternate-Attribute rule and the complete noncombat Attribute-to-Skill mapping are **TBD**. The six Attributes remain separate from the locked skill names.

### Passive Awareness — CONFIRMED INTENT; FORMULA TBD

Noticing important things should not require a purchased Perception/Notice/Investigation/Search-style skill. The **provisional** approach is a passive derived Awareness statistic, probably based on an Attribute and level, with WILL currently the leading Attribute candidate. No formula, DC procedure or detailed noticing rule is approved yet.

## ROLES / CHARACTER ARCHETYPES

CONFIRMED:

Use the term:

Role

Do NOT use:
- Class
- Edge
- Focus / Foci

At character creation, choose:

2 Roles

The two Roles combine to form the character’s broad archetype.

Examples:
- Soldier + Hacker
- Pilot + Medtech
- Soldier + Medtech
- Engineer + Operative

Roles should remain broad.

Roles should not hard-lock basic weapon or skill competence.

Skills remain separate.

## CURRENT ROLE LIST

CONFIRMED WORKING LIST:

- Soldier
- Hacker
- Pilot
- Envoy
- Engineer
- Operative
- Medtech

This seven-Role list supersedes earlier temporary naming candidates, including Face and Doctor.

Breacher / Sapper is NOT currently a separate Role.

Demolition / breaching functions have been rolled into Engineer.

Engineer broadly covers:
- Fix
- Demo

The seven Level 1 Role Ability **concepts** are listed below. Exact wording and numerical effects remain subject to balance testing.

## ROLE DESIGN

CONFIRMED:

Every Role must have:
- a meaningful non-combat identity
- a meaningful combat application

Each Role grants:
- a unique Role Ability
- access to a Role-specific Feat pool for later Feat choices

Characters choose 2 Roles and therefore:
- gain both Role Abilities
- gain access only to the Feat lists of those two Roles

Choosing a Role does **not** automatically grant a Level 1 Feat. At any future
Feat-granting level, the character receives **one Feat pick total** and may
choose it from either of their two Role pools—not one pick from each pool.

A Soldier / Medtech can take:
- Soldier Feats
- Medtech Feats

but not:
- Hacker Feats
- Pilot Feats
- Engineer Feats
- Operative Feats
- Envoy Feats

unless some future explicit mechanic allows otherwise.

## ROLE COMBAT IDENTITIES

CURRENT DESIGN DIRECTION:

Soldier:
- direct combat
- weapon performance
- suppression
- overwatch
- frontline combat
- armour / combat resilience

Hacker:
- systems hacking: doors, cameras, alarms, turrets, terminals, environmental controls, networks and infrastructure
- combat/target hacking: drones, cyberware, smart weapons, optics, communications and hostile electronics
- technology control and disruption rather than a generic damage-caster identity

Pilot:
- drones
- vehicles
- remote systems and support
- action-economy manipulation involving controlled machines

Operative:
- stealth
- infiltration
- espionage
- ambush
- assassination
- precision combat
- mobility

Engineer:
- Fix
- Demo
- explosives
- breaching
- field repair
- fabrication
- traps
- deployables / technical battlefield tools

Envoy:
- social influence, persuasion, deception, diplomacy, negotiation, performance and oratory
- social leverage and coordination outside combat
- ally buffs, enemy debuffs, command, distraction, morale pressure and tactical coordination in combat
- grounded, non-magical impact through speech, leadership, pressure and manipulation; no supernatural effects assumed

Medtech:
- medicine, trauma care, stabilisation, healing and condition treatment
- temporary engineered biological modifications
- stimulants, physical/movement/resilience enhancements and other temporary biological buffs
- bodily/biological manipulation rather than technological hacking or social/morale effects

Support and utility Roles must keep distinct combat identities: **Hacker** controls or disrupts technology, **Medtech** manipulates biology and treats injuries, and **Envoy** influences morale and coordination. Do not collapse them into interchangeable buff/debuff packages. Exact effects and numbers remain unresolved.

## ROLE FEAT-POOL DIRECTIONS — CURRENT DESIGN

These are thematic clusters inside each Role's Feat pool, not hard subclasses.
Players may freely mix between them.

- **Soldier — Ranged combat / Melee combat:** gunfighting, weapon handling,
  reactions, tactical shooting, firing modes and ranged positioning on one
  side; close combat, melee mastery, engagement, aggressive movement and melee
  counterplay on the other. Armour handling, tactical movement, weapon
  switching, Reaction manipulation and general discipline may bridge both.
- **Medtech — Party support and medicine / Adaptive Genomics and biological
  enhancement:** healing, stabilisation, emergency treatment and keeping allies
  operational; or temporary biological modification, combat enhancement,
  unusual physical capabilities and preparation-based buffs. Expression Vectors need a
  distinctive identity rather than merely granting personal stat bonuses.
- **Engineer — Devices and deployables / Smart weapons and Shard technology:**
  traps, sensors, support hardware, repair and technical manipulation; or
  marking, tracking, guidance, homing, cover-bending attacks, target
  reacquisition and advanced smart-weapon functions. Shard specialisation is an
  optional branch; Engineer remains fundamentally a technology/device
  specialist.
- **Hacker — Nodes and networks / Cyberware and combat hacking:**
  infrastructure, access systems, security nodes, cameras, doors and remote
  systems; or hostile cyberware, battlefield electronics, active systems and
  direct combat intrusion. Node-focused design must retain value when an
  encounter lacks obvious infrastructure.
- **Pilot — Drones / Vehicles and neural vehicle integration:** drone control,
  coordination, positioning and combat/support; or manoeuvres, chases, vehicle
  combat, passenger protection, mounted systems and rapid
  boarding/extraction. The situational vehicle branch may balance lower
  frequency with high payoff.
- **Envoy — Combat influence / Social influence:** buffs, debuffs, Rally,
  morale, coordination, positioning and tempo support; or persuasion,
  manipulation, charisma, leverage, negotiation, social pressure and social
  encounter control. Envoy is not merely the Role that rolls Talk better.
- **Operative — Stealth and infiltration / Precision and critical damage:**
  concealment, hidden movement, repositioning, surveillance avoidance and
  environmental exploitation; or expanded critical ranges, precision damage,
  exploiting openings and improved critical/Trauma interaction. Operative
  should create openings and exploit them harder than anyone else, not merely
  gain damage while Hidden.

Pilot neural integration may eventually support direct sensory connection,
faster control transitions, control without conventional input, remote vehicle
operation, rapid system switching, emergency manoeuvres and deeper vehicle
embodiment. Exact mechanics remain future work. Preserve the distinction:
Hacker compromises systems, Engineer builds/modifies/deploys systems, and Pilot
operates or integrates with machines in motion.

Envoy's future social system should model goals, leverage, resistance,
disposition, rapport, pressure, trust, fear, concessions, consequences and an
evolving encounter state without replacing roleplay with an abstract minigame:
roleplay determines which approaches are plausible; mechanics determine how
leverage, resistance and consequences change. Exact rules remain unresolved.

## ROLE-BUILD DIVERSITY — CORE PROGRESSION GOAL

> Role selection establishes access and identity. Feat selection determines
> specialisation.

Two characters with the same Role pair should still support substantially
different builds. Role pools should generally contain at least two strong
thematic directions and meaningful choices. Avoid rigid hidden subclasses,
mandatory long chains, filler +1 bonuses and obvious best-path progression.
Prefer Feats that change capabilities, timing, tactical options, system
interactions, equipment use and battlefield behaviour.

For example, two Soldier + Engineer characters might become a ranged Soldier
with smart-weapon expertise, a melee Soldier with deployables, an
Engineer-heavy device specialist with combat support, or a Soldier-heavy combat
specialist with one smart-weapon trick.

## PROVISIONAL PLACEHOLDER FEAT ARCHITECTURE — NOT FINAL CANON

Everything in this section exists to support future progression and
character-building playtests. Branch names, feat names, level gates and
mechanical concepts remain **PROVISIONAL / PLACEHOLDER / FOR REVIEW**.

Current test structure:

- each Role has two organisational/thematic branches;
- each feat decision presents two mutually exclusive expressions of one
  advancement concept;
- choosing one option permanently excludes the other option in that decision;
- there are no feat chains or sequential branch requirements;
- character level is the only current gate;
- a higher-level character may select an unchosen lower-level decision later;
- players may freely mix both branches and both of their Role pools; and
- branches should include some cross-discipline functionality rather than
  becoming isolated subclasses.

> Each feat slot is one advancement concept expressed as a mutually exclusive
> A/B choice.

Prefer Feats that make a player imagine a scene their character could not
previously perform. Avoid spending scarce decisions on routine maintenance,
minor efficiencies, passive +1 bonuses, long prerequisite ladders or obvious
best paths unless a modest benefit accompanies a genuinely new capability.

### Soldier placeholder tree

Soldier is a general weapon-combat specialist. Firearms and Combat Mastery must
not become “guns only” and “melee only” silos; pistol/melee transitions,
sidearm-and-blade styles and cross-discipline weapon handling are desirable.

| Branch | Gate | Mutually exclusive placeholder choice | Advancement concept |
| --- | ---: | --- | --- |
| Firearms | 2 | Controlled Fire / Full Send | conservative efficient fire / aggressive Auto use |
| Firearms | 4 | Rapid Reload / Combat Transition | sustain one weapon / switch weapons fluidly |
| Firearms | 6 | Intercept / Counterfire | punish movement / punish failed ranged attacks |
| Combat Mastery | 2 | Gunfighter / Paired Weapons | pistol-melee interplay / paired one-handed fighting |
| Combat Mastery | 4 | Pursuit / Hold the Line | stay on disengaging enemies / resist close pressure |
| Combat Mastery | 6 | Drive Back / Riposte | reposition through melee pressure / reactive retaliation |

Free extra attacks, Cleave, reaction attacks and action compression require
particular caution because excess additional damage can make them mandatory.

### Medtech placeholder tree

| Branch | Gate | Mutually exclusive placeholder choice | Advancement concept |
| --- | ---: | --- | --- |
| Field Medicine | 2 | Triage / Adrenal Support | immediate treatment / temporarily keep an injured ally functioning |
| Field Medicine | 4 | Rapid Dose / Sustained Dose | deliver drugs efficiently / extend their useful duration or effect |
| Field Medicine | 6 | Trauma Care / Push Through | serious injury treatment / temporarily suppress battlefield consequences |
| Adaptive Genomics | 2 | Overexpression / Stabilisation | stronger Expression Vector benefit / reduced drawback |
| Adaptive Genomics | 4 | Amplified Phenotype / Controlled Expression | push transformation further / control its negative effect |
| Adaptive Genomics | 6 | Hyperadaptation / Homeostasis | extreme biological capability / substantially contain its penalty |

**Adaptive Genomics** is the preferred provisional branch name. Expression
Vectors must be useful at baseline: mitigation Feats must not be mandatory just
to make an item usable. Amplification and mitigation should be two attractive
specialisations, not “good version” and “unusable version.”

### Engineer placeholder tree

| Branch | Gate | Mutually exclusive placeholder choice | Advancement concept |
| --- | ---: | --- | --- |
| Deployables | 2 | Rapid Deployment / Reinforced Device | easier placement / harder to neutralise |
| Deployables | 4 | Expanded Payload / Efficient Systems | broader device function / better duration or resource use |
| Deployables | 6 | Linked Network / Autonomous Routine | interacting devices / limited preset behaviour |
| Smart Weapons | 2 | Target Lock / Assisted Aim | stronger tracking / guided-shot reliability |
| Smart Weapons | 4 | Guided Trajectory / Persistent Track | plausible cover-bending route / retain track through brief LOS loss |
| Smart Weapons | 6 | Reacquisition / Multi-Lock | regain lost target / track multiple targets |

Smart Weapons is strongly associated with Shard technology and should primarily
unlock marking, tracking, guidance, plausible open-space trajectories,
reacquisition, multiple locks and sensor integration rather than flat accuracy.
It remains one optional Engineer branch; Engineer does not own all interesting
technology.

### Hacker placeholder tree

| Branch | Gate | Mutually exclusive placeholder choice | Advancement concept |
| --- | ---: | --- | --- |
| Network Intrusion | 2 | Signal Boost / Clean Link | increase wireless range / reduce wireless penalty |
| Network Intrusion | 4 | Extended Envelope / Hardline Expert | push wireless reach / strengthen direct access |
| Network Intrusion | 6 | Mesh Access / Ghost Signal | relay through compromised devices / resist tracing |
| Combat Hacking | 2 | Fast Breach / Deep Breach | compromise quickly/easily / produce a stronger effect |
| Combat Hacking | 4 | System Lock / System Hijack | deny owner control / take limited control |
| Combat Hacking | 6 | Chain Intrusion / Persistent Access | jump between devices / maintain access |

Network Intrusion must remain useful in ordinary scenes through doors, cameras,
alarms, lighting, turrets, communications, vehicles, sensors, industrial
equipment and security systems—not only bespoke “hacking dungeon” encounters.

### Pilot placeholder tree

| Branch | Gate | Mutually exclusive placeholder choice | Advancement concept |
| --- | ---: | --- | --- |
| Drones | 2 | Coordinated Control / Specialist Drone | operator-drone coordination / push one specialised drone |
| Drones | 4 | Swarm Logic / Tactical Relay | multi-drone coordination / sensor-comms extension |
| Drones | 6 | Autonomous Routine / Direct Override | limited preset autonomy / exceed normal control limits |
| Vehicles / Neural Integration | 2 | Neural Link / Combat Driver | direct machine integration / aggressive handling |
| Vehicles / Neural Integration | 4 | Remote Possession / Reflex Interface | remote operation / exceptional neural reaction |
| Vehicles / Neural Integration | 6 | Machine Embodiment / Redline | vehicle as bodily extension / exceed safe performance |

Routine repair efficiency belongs primarily in skills, gear, downtime or
incidental benefits. Pilot Feats should buy compelling capabilities rather than
maintenance chores.

### Envoy placeholder tree

| Branch | Gate | Mutually exclusive placeholder choice | Advancement concept |
| --- | ---: | --- | --- |
| Combat Influence | 2 | Steady Nerves / Break Their Nerve | resist pressure/suppression / increase enemy susceptibility |
| Combat Influence | 4 | Rally Through / Dig In | push through control / hold position under pressure |
| Combat Influence | 6 | Countermand / Seize the Moment | blunt hostile control / create coordinated opportunity |
| Social Influence | 2 | Charm / Pressure | cooperation through rapport / movement through intimidation or leverage |
| Social Influence | 4 | Read the Room / Control the Frame | identify motives/leverage / shape encounter direction |
| Social Influence | 6 | Build Rapport / Apply Leverage | deepen cooperation / convert needs, fears or obligations into concessions |

Combat Influence should create human/morale counterplay to battlefield control,
including Suppressive Fire, without collapsing into generic flat buffs. Social
Influence depends on the future social subsystem and is especially provisional.

### Operative placeholder tree

| Branch | Gate | Mutually exclusive placeholder choice | Advancement concept |
| --- | ---: | --- | --- |
| Infiltration | 2 | Ghost Step / Silent Entry | cross exposed space / bypass entry without evidence |
| Infiltration | 4 | Fade / Disappear in the Noise | exploit distraction / create Smoke, Flash or chaos and reposition |
| Infiltration | 6 | Shadow Route / Perfect Cover | traverse gaps / exploit marginal concealment |
| Precision | 2 | Deadeye / Opportunist | create a precision opening / exploit compromised targets |
| Precision | 4 | Critical Focus / Surgical Strike | expand natural crit range / impose a chosen disabling effect |
| Precision | 6 | Kill Window / Exploit Weakness | high-value attack in a brief opening / target identified vulnerability |

Disappear in the Noise is cinematic but not magical invisibility: it requires
plausible disruption or concealment, somewhere to move and an effect such as
Smoke, Flash or environmental chaos. Operative remains the intended owner of
expanded critical ranges, but Precision must not reduce to permanent additional
crits and damage. Compromised states may later include suppressed, hacked,
blinded, prone, distracted, engaged, marked or otherwise exposed targets.
Possible Surgical Strike targets include limbs, a weapon arm, optics, sensors,
cyberware, carried equipment and exposed mechanical components. Cross-Role
setups are desirable: Hacker may identify a weak actuator, Soldier may suppress
a target, or Engineer may expose/mark a system for the Operative to exploit.

### Hacking Programs — PROVISIONAL SYSTEM DIRECTION

Novum may borrow the broad spirit of *Cities Without Number* hacking without
copying its full Verb + Subject system. Most electronic devices should
potentially be hackable. Wireless intrusion should be possible inside a defined
envelope with a penalty; direct/hardline access should be stronger or easier.
Exact range and penalty remain unresolved.

Programs are broad **verbs**. The target device determines how a Program can
reasonably manifest; there is no planned separate Subject layer.

Exploratory Program names include **Open, Hijack, Disable, Trace, Spoof, Lock,
Scan, Overload, Scrub** and **Relay**. For example, Open might unlock a door or
bypass terminal authentication; Hijack might interfere with a drone or smart
weapon; Disable might shut down a camera; and Spoof might feed false sensor
data. These names and effects are not final.

Programs may be purchased software/equipment, creating a Hacker gear economy
with possible rarity, versions, loadout limits, software slots and specialist
Programs. Avoid recreating Subjects indirectly through excessively granular
Program lists.

## LEVEL 1 ROLE ABILITIES — CONFIRMED CONCEPTS; DETAILS UNDER TEST

Each Role has one simple, memorable ability that matters in combat from level 1, reinforces its identity, and keeps resolution shallow. These are **confirmed concepts**, not finalised wording, numbers or complete action/trigger rules. They are specific, bounded exceptions rather than a new general action type.

### Soldier — Quickdraw

**Once per combat scene**, when an enemy closes into melee with the Soldier and
the Soldier's Reaction is available, the Soldier may spend that Reaction to
draw and fire a **Pistol-type weapon** as part of the Reaction. After the
attack, the Soldier may either keep the pistol in hand or immediately holster
it. The shot uses normal weapon rules: no Auto Fire or inherent accuracy bonus.

This ability does not require the Soldier to have been holding a two-handed
weapon. A Soldier may holster the pistol and resume a prior two-handed grip,
keep it alongside a one-handed melee weapon, or keep it readied in a free hand.
These are consequences of the concise rule, not separate triggers. Quickdraw is
a Soldier-only action-compression exception; it is not a universal Pistol rule.

### Medtech — Combat Dose

**At the start of combat, once per combat scene**, the Medtech may inject themselves or an adjacent willing ally with **one prepared Medtech compound** as a free activity. The compound list, preparation, potency, duration, strain/toxicity and resource use remain unresolved. Stronger Expression Vectors and biotech actions may still cost a Main Action; this ability does not make all injections free.

### Envoy — Rally

At the start of combat, the Envoy may deliver a brief command, speech, performance or similar rally as a free activity, granting a **short group buff** to allies who can hear them. The effect and duration are unresolved; do not assume a permanent or whole-combat +1 attack bonus for the party without mathematical validation. The expression can fit a commander, diplomat, performer, politician, fixer, preacher or celebrity.

**Later Feat idea, not part of base Rally:** allow a choice between buffing allies **or** applying a group debuff to enemies, not both at once by default. Its exact effect is unresolved.

Rally remains the preferred core Envoy Role Ability. Do not replace it with
action donation: the core ability should not primarily reward the Envoy for
playing less so another character can play more.

**Future Feat concept, not part of Rally:** the Envoy spends both their Main
Action and Reaction to let one chosen ally immediately take one additional Main
Action. This is intended as a late tactical tempo pivot after the Envoy has had
room to influence the encounter normally. Frequency, restrictions, exact
timing and duplicated high-impact-action safeguards remain unresolved.

### Operative — Vanish

**Once per combat scene, at the start of combat**, the Operative may attempt to Hide/Stealth as a free activity if the surroundings offer a plausible hiding place or way to break line of sight. The Hidden and Stealth rules remain unresolved.

**Later Feat idea:** Ambush may give attacks from Hidden a simple damage payoff, perhaps flat bonus damage. Its value is not defined. Vanish itself does not grant that damage bonus; avoid automatically granting both accuracy and damage without testing.

### Pilot — Linked Movement

**Once per round**, when a controlled drone uses the Pilot's Move Action to move, the Pilot may also move up to their normal movement distance. This is a defined movement-efficiency exception to ordinary operator-to-drone action transfer. It creates **no additional Main Action** and does not double attacks. Drone and operator can reposition together.

### Hacker — Ping

At the start of combat, the Hacker may perform a free combat scan / Frisk Cyber-style check against visible enemies. Prefer **one scan/check for the visible enemy group** over repetitive individual rolls; exact resolution remains unresolved. On success, it reveals broad, actionable information such as which targets carry hackable cyberware, whether drones/smart weapons/networked devices are present, and broad exploitable system categories. Ping is information/setup, not a damage effect.

Later Hacker Feats might reveal precise implants, vulnerabilities, security ratings, functions, concealed devices or easier follow-up hacks; none is part of the base ability yet.

### Engineer — Deployable

At the start of combat, the Engineer may place **one prepared Device** as a free activity. **Deployable** names the Role Ability/category; a **Device** is the actual placed object. Possible future Devices include a Gun Turret, Jammer, Shield Projector, Sensor Node, proximity-triggered Charge or Breaching Charge. Exact stats, preparation/inventory limits, duration, autonomy and attack rules are unresolved.

A Device is a temporary, set-and-forget battlefield object/effect performing a predefined function until it expires, runs out or is destroyed. A drone is a persistent controlled unit with its own token, statistics and movement and normally uses the Pilot's actions. A Device does **not** require continuous operator action transfer each round. This distinction does not itself grant autonomous attacks or extra Main Actions.

**Distinct combat identities:** Soldier handles direct gunfighting; Medtech biology and temporary enhancement; Envoy morale and group coordination; Operative stealth/opening position; Pilot mobile machines and movement efficiency; Hacker information and cyber exploitation; Engineer temporary battlefield hardware. These Role concepts should not collapse into the same support effect.

## MEDTECH / BIOTECH / EXPRESSION VECTORS

CONFIRMED DESIGN DIRECTION:

Medtech is not merely a healer.

Medtech includes:
- medicine
- trauma care
- biotechnology
- genetics
- temporary engineered biological adaptation
- healing, stabilisation and condition treatment
- stimulants and temporary movement, physical and resilience boosts

**PROVISIONAL / FUTURE ITEM CLASS — NOT FINAL CANON:** injectable biotech items
are currently called **Expression Vectors**. They temporarily trigger the
expression of an engineered phenotype. Preferred language includes gene
expression, phenotype, vector and temporary engineered biological adaptation;
avoid using *mutagen*, *serum* or *stim* as the item-class name.

| Future concept | Possible expression | Possible drawback direction |
| --- | --- | --- |
| Titan Vector | greater size, strength or combat power | reduced DEX, mobility or fine manipulation |
| Alar Vector | temporary wings or flight | TBD |
| Corrosive Vector | acid-spit or biological corrosive attack | TBD |
| Dermal Vector | biological armour or dermal plating | reduced flexibility or movement |
| Predator Vector | claws, enhanced senses and aggressive adaptations | TBD |
| Regenerative Vector | temporary enhanced healing or regeneration | TBD |

These are illustrative future concepts only. They do not establish mechanics,
damage, duration or final drawbacks.

Current preferred activation mechanic:
- injecting an Expression Vector normally costs a Main Action; the Level 1
  Combat Dose concept above is a specific start-of-combat exception for one
  prepared compound
- effect begins immediately
- effect is temporary

Potential balancing levers:
- duration
- strain
- toxicity
- limited doses
- limited number of simultaneous mutations
- drawbacks after the effect

Exact Expression Vector mechanics remain unresolved.

Biotech should remain thematically and mechanically distinct from cyberware.

## FEATS

CONFIRMED:

Feats are Role-specific.

Characters may only select Feats from their chosen two Roles.

Feats should provide:
- specialisation
- new combat options
- stronger Role identity
- exceptions to normal rules
- controlled action-economy bending
- weapon specialisation
- drone improvements
- Expression Vector improvements
- hacking improvements
- etc.

Feats should not simply be endless +1 bonuses.

The cadence, prerequisites and final Role Feat lists are unresolved. Design
enough meaningful Feats first, then choose the cadence based on pool size,
individual impact, desired build diversity and progression density.

## LEVELS / PROGRESSION

CONFIRMED:

The system uses:

10 levels

Current Role/Feat progression structure:

Level 1:
- choose 2 Roles
- gain both Role Abilities
- gain no automatic Feat merely for choosing those Roles

At each later Feat-granting level:
- gain 1 Feat pick total
- choose that Feat from either of the character’s two Role lists

Therefore:
- the two Roles remain the character’s core identity
- later Feats may be distributed unevenly between the two Roles

Example:
Soldier / Medtech could eventually heavily favour Soldier Feats or Medtech Feats.

Do not require alternating between Roles.

Feat frequency is not locked. The current **PROVISIONAL / PLACEHOLDER TEST
CADENCE** is one selection at Levels **2 / 4 / 6 / 8 / 10**, for five selections
across the full game. Only the Level 2/4/6 placeholder decisions have been
outlined; Levels 8/10 are intentionally undesigned. This cadence and every
current gate remain subject to review.

### Provisional Level 1–10 progression table

**PLACEHOLDER FOR THE NEXT PROGRESSION / CHARACTER-BUILDING PLAYTEST. NOT FINAL
CANON.** HP values preserve the representative envelope used in recent combat
simulations rather than reopening lethality through large HP growth.

| Level | HP baseline | Skill cap | Progression event |
| ---: | ---: | ---: | --- |
| 1 | 14 | 3 | starting skills/Attributes; choose 2 Roles; gain both Role Abilities; no Feat |
| 2 | 14 | 3 | +2 skill points; Feat selection |
| 3 | 15 | 4 | +2 skill points |
| 4 | 16 | 4 | +2 skill points; Feat selection |
| 5 | 16 | 4 | +2 skill points; +1 Attribute |
| 6 | 17 | 4 | +2 skill points; Feat selection |
| 7 | 18 | 5 | +2 skill points |
| 8 | 18 | 5 | +2 skill points; Feat selection |
| 9 | 19 | 5 | +2 skill points; +1 Attribute |
| 10 | 20 | 6 | +2 skill points; Feat selection |

The provisional HP sequence is **14 / 14 / 15 / 16 / 16 / 17 / 18 / 18 / 19 /
20**, a total increase of 6. Plateaus are intentional. Higher-level durability
should come substantially from equipment, protection, tactics and capability
rather than conventional large HP inflation.

Do not currently add a large CON-derived bonus to this sequence. CON may later
affect physical resistance, Trauma, toxins, Expression Vector side effects,
recovery, incapacitation/death or possibly a small HP component. For the next
test, keep the 14–20 baseline independent of CON unless later review explicitly
changes it.

## CHARACTER CREATION

CONFIRMED CORE STRUCTURE:

Character creation includes:

1. Background
2. Two Roles
3. Attributes
4. Skills

Background:
- represents character history/origin
- grants a fixed package of starting skill bonuses
- should not simply grant a pool that is fully reallocated by the player
- should remain separate from Role choice
- **provisional current test baseline:** rank 1 in three fixed skills; exact Background list and packages remain TBD

Roles:
- choose 2
- grant Role Abilities
- determine available Feat lists

Attributes:
- fixed allocation / boost system
- no random rolling

Skills:
- starting values partly established by Background
- characters gain skill points as they level

This separation allows combinations such as:
- corporate security background + Hacker / Medtech
- dockworker background + Soldier / Engineer
- academic background + Pilot / Operative

## SKILL PROGRESSION

CONFIRMED DIRECTION:

Characters gain skill points at each level.

Those skill points are allocated across the skill list.

**PROVISIONAL / CURRENT TEST BASELINE** for the locked 16-skill list:

- At level 1, the Background grants rank 1 in three fixed skills, and the character has **6 discretionary skill purchase points**.
- Starting skill cap: **3**.
- Buying ranks 1–3 costs **1 point per rank**; ranks 4–6 cost **2 points per rank**.
- Gain **2 skill points at each later level** (levels 2–10).
- Skill caps: levels **1–2: 3**; **3–6: 4**; **7–9: 5**; level **10: 6**.

These numbers support the current level-1–10 design and builder tests; they are **not locked final progression**. Background packages, detailed spending validation and final noncombat resolution remain unresolved.

## CHARACTER BUILDER AND FOUNDRY TOOLING — ACTIVE PROTOTYPES; TEST CONTENT PROVISIONAL

A local Pathbuilder-style Novum character-builder prototype and a standalone
Foundry v14 Novum game system now exist. The current Foundry playtest build is
**Novum v0.2.0**, system ID `novum`, targeted at Foundry **v14.368**. It contains
the combat engine, Character/NPC/Item sheets, 80 seeded gear Items, 48 pregens,
two-Role progression, selectable nonfunctional placeholder Feat trees, Skill
and Attribute milestone tooling, Kinetic/Shard/Laser modes, ammunition,
reloads, the shared-roll Shotgun Cone, separate full portraits and circular
alpha-transparent prototype tokens, guarded multi-target Apply Result, and a
coloured readied-weapon range overlay with Toggle/Hold controls. Attack
measurement and overlay radii share one Scene-unit-aware metric conversion.
Live v0.2.0 acceptance remains pending; implemented content values remain
provisional unless separately confirmed in this reference.

Expected prototype fields and views: name, level, six Attributes, Background, two Roles, the locked 16 skills, skill-point spending/validation, derived HP, Initiative, passive Awareness **once its formula exists**, movement, Melee AC, current Ranged SP and Armour Floor, weapons, armour, shields, Role abilities, level-up logic, and attack breakdowns/probabilities where useful. Several derived formulas and equipment statistics are still TBD.

Prototype usability may call for a small number of clearly labelled **PROVISIONAL / TEST DATA** entries: roughly 8–12 evocative Backgrounds, compact starter weapon/armour/shield catalogues, short Role flavour descriptions, and placeholder names for incomplete Feat/content slots where necessary. Such filler is **not canonical**, must not contradict confirmed decisions, and does not become established design without explicit later approval. Final catalogues and Feat trees remain TBD.

For the next progression/character-building playtest, the current Level 2/4/6
feat boxes are intended to be selectable placeholders only. Their names and
choice structure may be displayed for comprehension testing, but no mechanical
effects need to function. Any existing level-up Feat functionality should be
disabled for that test unless a separate implementation instruction approves it.

# Drones

CONFIRMED CORE DIRECTION:

Drones should broadly follow the useful structure of Cities Without Number.

A drone:
- is a separate token/unit
- has its own movement
- may have cargo capacity
- may have weapon / equipment hardpoints
- may have installed modules
- is controlled using the Pilot skill

Action economy:

A standard drone operator may trade actions individually:

Pilot Main Action → Drone Main Action

Pilot Move Action → Drone Move Action

The operator may mix these.

Example:
- pilot uses own Move Action
- drone receives the pilot’s Main Action

or:
- pilot gives both Main and Move to the drone

Owning / controlling a drone should NOT automatically create additional actions.

Core principle:

“Drone control transfers the operator’s actions to the drone rather than creating additional actions.”

Future special Feats, skills, cyberware, or drone mods may deliberately bend this rule.

The confirmed **Linked Movement** Level 1 Pilot concept above is a specific once-per-round exception: the Pilot can also move when their drone uses the Pilot's Move Action. It grants no extra Main Action. Further upgrades remain undefined.

Multiple-drone control and autonomous actions remain unresolved.

# Encounter Mathematics

## ENCOUNTER-MATH DESIGN GOAL

CONFIRMED DESIGN GOAL:

The system should eventually have encounter-building reliability similar in spirit to Pathfinder 2e.

The GM should be able to estimate:
- easy encounters
- moderate encounters
- hard encounters
- severe encounters
- enemy strength relative to party level

without relying mainly on intuition.

Numbers should be derived from a coherent mathematical chassis.

The current plan is to establish, later:
- expected attack bonus by level
- expected defence / DV by level
- typical hit chance
- typical crit chance
- damage expectations
- shield progression
- armour progression
- HP progression
- time-to-kill
- enemy tiers
- encounter budgets

Important:
Do not finalise these encounter numbers in this update. The separate baseline mathematical proposal exists, while encounter budgets remain provisional and need validation with the evolving skill, Role and protection rules.

## PROVISIONAL COMBAT-DURATION SIMULATION FINDINGS

These findings preserve current design evidence; they are not final encounter
budgets or a substitute for live playtesting.

Earlier Standard-Kinetic-only equal-peer simulations produced approximately
12–14 rounds for 4v4 and 13–16 rounds for 6v6. Those stripped-down tests omitted
the intended interaction between fire modes and technologies and are not the
preferred estimate of normal combat duration.

A broader mixed-weapon model used Kinetic Standard, Auto, Shard, Laser, the
Shotgun Cone, LMG Auto/Suppression, provisional magazines/reloads and an attack
drone. It produced:

| Equal-peer encounter | Mean rounds | Median rounds | Mean turns per starting player |
| --- | ---: | ---: | ---: |
| 4v4 | approximately 6.5–6.9 | 6–7 | approximately 4.7–5.1 |
| 6v6 | approximately 8.4–8.8 | 8–9 | approximately 5.8–6.2 |

Use this as the cleaner current duration baseline. Auto and Shard chiefly strip
Shields, Laser supplies strong HP damage as protection weakens, and Shotgun can
produce high total battlefield damage across multiple targets. The current
system does not presently show a need for a global lethality increase.

Provisional Role simulations shortened combat slightly further, but those Role
mechanics were invented only for modelling and must not drive balance or be
treated as approved rules.

The mixed model represented Shotgun positioning abstractly: 10% one target,
55% two, 30% three and 5% four, averaging approximately 2.3 potential targets.
It assumed a safe angle, no friendly-fire error, no terrain obstruction and no
movement cost to line up the Cone. This may overstate Shotgun effectiveness and
understate live combat duration. The 4-square Cone remains ready for live
playtest.

## CURRENT MATHEMATICAL TARGET DISCUSSION — NOT YET LOCKED

Earlier equal-level hit-rate examples were illustrative only and are superseded where they relied on the discarded +10-margin critical rule. No exact Level 1 statline or universal equal-level hit-rate target is locked.

Current testing should separate:
- ordinary hit probability, produced by attack bonus versus DV;
- natural-die critical probability, beginning at natural 20 and expanding only through meaningful investment;
- penetrating critical / Trauma probability after protection is applied;
- time-to-incapacitation as protection degrades.

High-level characters may intentionally become very accurate at favourable weapon ranges. This is not automatically a defect if concealment, cover, aimed shots and other tactical options provide meaningful ways to spend accuracy.

Important mathematical principle:
Do NOT choose Attribute and Skill progression first and then hope the encounter maths works.

Instead:
1. decide intended player success rates
2. derive required bonuses / DVs
3. derive Attribute and Skill ranges
4. derive damage / survivability
5. derive level progression
6. derive encounter budgets

Whether a total equal to DV is a hit remains part of the unresolved detailed resolution procedure unless another confirmed rule specifies it.

# Playtest Findings

## Isolated combat walkthrough — qualitative only

A single turn-by-turn sample fight used a **Soldier + Medtech** against one melee enemy and one ranged enemy. This is a play-feel observation, **not statistical validation or a final character/equipment build**.

| Test character | Test equipment |
| --- | --- |
| STR 1, DEX 3, CON 1, INT 2, WILL 1, PRE 0; 24 HP. Long Arms 3, Medicine 3, **Melee Weapons 2** (the walkthrough used the earlier Blades label). Rifle attack +6, blade attack +5, Medicine +5. | Combat Rifle 3d6, Close/Medium/Long DV 15/13/15; Combat Blade test damage 1d8 + DEX; armour Melee AC 15 and Armour Floor 2 (called Ballistic SP in the original walkthrough); Shield SP 6. Starting Ranged SP 8, Armour Floor 2. |

Observed in this walkthrough: Auto rapidly stripped the ranged enemy's shield; the melee enemy bypassed much of the character's remaining ranged protection and became the primary lethal threat. The character was incapacitated while significant Ranged SP remained. This was considered a desirable distinction between melee and ranged pressure. The one example does not validate the candidate Auto ablation, Melee AC, damage or equipment numbers.

# Reference Materials

The following books are available as project sources:

- `CPR - Corebook - Cyberpunk Red v122.pdf`
- `CitiesWithoutNumber_Deluxe_Lightweight_081123.pdf`
- `PF2e Core Rulebook-4th Printing.pdf`

Their presence does not establish wholesale adoption of their rules or settings. Explicit inspirations are identified in the design sections above. `AI_CONTEXT.md` is the separate project-workflow reference.

# Incorporated Summaries

- 26 September 2026: “WORK HANDOVER — UPDATE SYSTEM REFERENCE WITH CURRENT COMBAT DESIGN”, supplied as `Pasted text.txt`. Incorporated the combat design, its provisional values, unresolved mechanics, balance requirements, and relevant orbital setting context.

- 26 September 2026: “WORK HANDOVER — UPDATE SYSTEM_REFERENCE.md WITH ACTION ECONOMY, FIRE MODES, RANGE BANDS, AND GEAR MODULARITY”, supplied as `Pasted text.txt`. Superseded earlier range and weapon-role descriptions; retained compatible shield, armour, provisional damage, special-effect, and setting material.

- 26 September 2026: “WORK HANDOVER — MERGE ALL CURRENT DESIGN DECISIONS INTO SYSTEM_REFERENCE.md”, supplied as `Pasted text.txt`. Updated attacks to d20 with Trauma criticals, consolidated the Pistol class, specified shield ablation on every successful hit, and added character, drone, Role, Feat, progression, and encounter-design material. Preserved compatible prior content.

- 27 September 2026: “WORK HANDOVER — MERGE LATEST DISCUSSION INTO SYSTEM_REFERENCE.md”, supplied as `Pasted text.txt`. Confirmed the Novum working title, seven current Role names and identities, and five core damage types. Recorded the single-pool Shield plus Ballistic SP and separate Melee AC structure as provisional and under test.

- 27 September 2026: “WORK HANDOVER — UPDATE SYSTEM_REFERENCE WITH ROLE ABILITIES, AUTO FIRE, AND PROTECTION MODEL”, supplied as `Pasted text.txt`. Added seven confirmed Level 1 Role Ability concepts and their unresolved details, revised Auto Fire to the provisional shield-stripping candidate, clarified weapon handling and the single-pool protection model, and recorded one qualitative combat walkthrough.

- 27 September 2026: “WORK HANDOVER — UPDATE NOVUM SYSTEM REFERENCE”. Locked the 16-skill core list and Talk/Threaten definitions, replaced separate Blades/Blunt skills, recorded passive Awareness and derived-stat directions as provisional/TBD, preserved the current numerical creation/progression test baseline as provisional, and scoped a future local character-builder prototype without adding test content to canon.

- 28 September 2026: “WORK HANDOVER — NOVUM CORE COMBAT PHILOSOPHY + RESOLUTION ENGINE / SP MATHS REVIEW”. Added the locked combat-experience pillars, explicitly made legacy implementation mechanics sacrificial, dropped +10-margin criticals, preserved natural-die critical investment up to an approximate 18–20 range, recorded that high-level accuracy and lethality may intentionally rise, and updated the provisional Attribute milestones to two different increases at both Levels 5 and 9. No newly analysed resolution or protection chassis was promoted to locked canon.

- 28 September 2026: “WORK HANDOVER — NOVUM MELEE VS RANGED BALANCE + GEAR DESIGN ENVELOPE”. Mathematically validated and conceptually confirmed physical armour with independent Melee AC and Armour Floor, energy shields supplying ablative Shield SP, ranged damage using one combined current Ranged SP value down to the Floor, and melee bypassing Shield SP while subtracting the Floor once. Added the Level 1 street-gang and Level 10 John-Wick-versus-special-forces combat analogies and confirmed that focused fire against an exposed target is intentionally effective. Exact numerical envelopes, damage expressions, Auto, penetration, movement and recharge rules remain provisional/TBD.

- 28 September 2026: “WORK HANDOVER — NOVUM FOUR-TIER GEAR BUDGETS + OVERLAP MATHS”. Confirmed four normal fuzzy gear tiers, same-tier-only mods, completed same-tier packages as the balance unit, expected Armour Floor investment through armour mods, operator-versus-gear progression philosophy, and Prototype/Exotic/Legendary items outside the normal ladder. Added the provisional persistent shield-ablation and out-of-combat battery-recharge direction. Exact tier names, level associations, envelopes, capacities, damage and recovery values remain provisional/TBD.

- 28 September 2026: “WORK HANDOVER — FORMALISE NOVUM COMBAT MATHS BASELINE v1.0”. Declared foundational combat maths stable for content/subsystem development; locked the d20 attack engine, natural-die critical structure, weapon-specific Range DVs without universal Readiness, integrated armour/shield package, Shield SP plus Armour Floor degradation, melee shield bypass with Floor reduction, persistent battery-recharged shields, Standard ablation 1, four fuzzy gear tiers and moderate overlap philosophy. Added stable calibration anchors and provisional content envelopes, superseded the older routine 5d6 weapon examples and independent best-armour/best-shield default, and established evidence-based change control. No blocker remained to the Baseline v1.0 milestone.

- 28 September 2026: “WORK HANDOVER — NOVUM FOUNDRY v0.1.1 REBRAND, RECALIBRATION, UX + PLAYTEST PASS”. Confirmed Novum as the current product identity and Afterlight as a superseded working title; implemented the provisional Shield 7/8/9/10 and HP 14/16/18/20 centreline; preserved Standard Ablation 1 and provisional Auto; recorded the explicitly tested lower melee damage scale; and documented the v0.1.1 Foundry system, visual direction, range overlay and pregen token-art pass. The numerical calibration remains subject to live playtesting and does not rewrite Combat Maths Baseline v1.0.
- 28 September 2026: “WORK HANDOVER — NOVUM FOUNDRY v0.1.2 QUICK-FIX PLAYTEST RELEASE”. Preserved the v0.1.1 combat calibration; split sheet portraits from circular alpha-transparent Scene tokens; materially diversified the twelve archetype families; audited every seeded ranged weapon into distinct class-specific profiles; unified attack/overlay Scene-unit conversion; and added coloured annular range zones with Toggle/Hold, keybinding, colour and opacity controls. The corrected weapon table is canonical only for the current playtest package.

- 29 September 2026: “WORK HANDOVER — NOVUM RULES / SYSTEM REFERENCE UPDATE”. Established universal physical range-band distances; Demo pairings, grenade placement, blast and handling; grenade-launcher and universal reload baselines; Blinded, Flash, Smoke, Slowed and Cryo playtest rules; Hardness, Integrity and Breaching; distinct Fragmentation and Breaching Charges with modular trigger direction; Free Action remote detonation; universal Reactions and Prepare; expanded movement, quick-handling, prone, climbing, cover and Overwatch rules; and retained dual wielding as unresolved. Recorded current Foundry implementation differences without changing code or seeded content.

- 29 September 2026: “WORK HANDOVER — NOVUM RULES DOCUMENTATION UPDATE”. Established Kinetic, Shard and Laser as distinct weapon families; locked the Kinetic baseline; recorded the ready-to-playtest Auto d4, Shard and Laser packages; added Laser Rifle and Pistol range direction; preserved unresolved Laser structural, Smoke, Overload and capacity design; accepted Auto-to-Laser sequencing and mixed-team technology tactics; confirmed the two-handed adjacency restriction and Pistol exemption; and clarified Soldier Quickdraw's Pistol draw/fire/keep-or-holster procedure. Documented current Foundry mismatches without modifying implementation or seeded content.

- 29 September 2026: “WORK HANDOVER — NOVUM RULES / DESIGN REFERENCE UPDATE”. Established the ready-to-playtest Close-only 4-square Shotgun Cone, shared-roll resolution, friendly fire and Shotgun adjacency exception; recorded reusable Cone design and intentional technology/form asymmetry; added Shard smart-guidance, Laser Sniper and Heavy Continuous Laser future directions; separated Pistol, SMG, Rifle and LMG identities; removed baseline Rifle Suppressive Fire; corrected Level 1 Role/Feat progression; and documented Role Feat-pool directions, build diversity, Envoy Rally and future social/action-transfer design. No implementation, seeded content, release or version changes were made.

- 29 September 2026: “WORK HANDOVER — NOVUM PROVISIONAL PROGRESSION / ROLE FEAT / AMMO DESIGN NOTES”. Added explicitly provisional A/B Feat architecture and Level 2/4/6 placeholder trees for all seven Roles; recorded the 2/4/6/8/10 test cadence, Level 1–10 HP/skill/Attribute table, Adaptive Genomics and Expression Vector terminology, broad-verb Hacker Programs, ammunition endurance candidates, non-damaging LMG Suppressive Fire direction and mixed-weapon combat-duration findings. Every new name, number and mechanic remains labelled placeholder material for future playtest/review. No implementation work was performed.

- 29 September 2026: “WORK HANDOVER — NOVUM NEXT PLAYTEST BUILD: CHARACTER PROGRESSION, FEATS UI, WEAPONS & RELOADS”. Implemented the v0.2.0 Foundry playtest build: persistent two-Role progression; dedicated side-by-side placeholder Feat trees; Level 1–10 HP, Skill and Attribute test handling; Kinetic, Shard, Laser and corrected Auto behavior; per-mode ammunition and Main Action reload declarations; and the manual-template, multi-target Shotgun Cone with friendly fire and adjacency exception. Feat/Role effects, Suppressive Fire and other unresolved subsystems remain unavailable.
