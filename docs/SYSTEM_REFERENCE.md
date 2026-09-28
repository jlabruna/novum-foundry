# System Reference — Novum

Last updated: 28 September 2026 (Australia/Sydney)

Status: **NOVUM COMBAT MATHS BASELINE v1.0 established.** Stable design baseline for combat content and subsystem development; subject to deliberate revision through playtesting or demonstrated subsystem requirements, but no longer considered exploratory.

## Purpose

Living reference for the new science-fiction / cyberpunk tabletop roleplaying game system. Game design, mechanics, terminology, and setting material are recorded here. AI/project workflow instructions are maintained separately in `AI_CONTEXT.md`.

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

The current attack, protection, melee/ranged and four-tier equipment structures are stable enough for substantive subsystem and content development. Weapons, armour, mods, hacking, drones, drugs, bio/mutagens, Roles, Feats, support systems and encounter design should use this baseline by default.

The milestone does not make the rules permanently immutable. Future systems may justify revision. A baseline rule should be reopened only when:

- playtesting reveals a concrete failure;
- a mature subsystem cannot interact with it cleanly;
- content design repeatedly hits the same mathematical limitation; or
- later simulation contradicts the current assumptions.

Do not reopen foundational combat maths merely because another theoretical alternative exists.

Formal review found no remaining mathematical evidence that the d20 engine, weapon-specific Range DVs, progression to approximately +10, the combined Shield SP/Armour Floor model, the Melee AC/shield-bypass model, four fuzzy gear tiers or completed-package balancing must be redesigned before content development. Readiness is not required for ordinary ranged defence. There is sufficient headroom for meaningful modifiers and future non-attack Main Actions if weapon strengths remain budgeted separately.

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
- ammunition / energy type
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

Equipment choices also include weapon firing technologies, special ammunition, and equipment preparation. Unnecessary action types and subsystems are to be avoided.

## CORE COMBAT EXPERIENCE — LOCKED DESIGN PILLARS

The following experience goals take priority over preserving any existing implementation mechanic.

### Ramping lethality through degrading protection

- Protection should begin relatively strong and degrade through successful attacks.
- Subsequent attacks should become increasingly dangerous as protection collapses.
- The combat danger curve should visibly escalate rather than remain static.
- Higher-level durability should come substantially from better protection and equipment rather than huge HP inflation.
- Avoid conventional static-defence plus large-HP sponge progression unless later testing shows no viable alternative.

### Situational weapon identity

- Weapon-specific Close / Medium / Long range profiles are a primary combat pillar.
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
- exact movement, engagement and retreat rules
- cover, concealment, suppression, aimed-shot effects and Trauma
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

Standard ranged weapon bands:

Close:
- 0–5 squares
- 0–10 metres

Medium:
- 6–15 squares
- 12–30 metres

Long:
- 16–30 squares
- 32–60 metres

The bands are deliberately compressed for tactical battle-map use rather than trying to reproduce real-world maximum firearm ranges.

Close range intentionally corresponds approximately to the distance a normal character can cover with one Move Action.

Different weapon classes have different DVs at each range band, inspired by Cyberpunk RED.

Examples of intended identities:
- Pistols: strong at Close
- SMGs: good at Close and useful at Medium
- Assault/combat rifles: strong general-purpose range profile
- Long rifles/snipers: strongest at Long

Weapon-specific range DVs are part of Combat Maths Baseline v1.0. The shared provisional DV vocabulary is approximately **13 / 15 / 17 / 19 / 21**. Exact Close / Medium / Long profiles remain weapon content values rather than one universal table. Do not add universal target Readiness or level-derived defence to ordinary firearm attacks.

### Current Foundry v0.1.2 seeded range profiles — PROVISIONAL CONTENT

| Weapon | Close | Medium | Long | Extreme |
|---|---:|---:|---:|---:|
| Service Pistol | 10 m / DV 13 | 25 m / DV 17 | 50 m / DV 21 | — |
| Military Revolver | 12 m / DV 13 | 30 m / DV 15 | 60 m / DV 19 | — |
| Compact SMG | 12 m / DV 13 | 30 m / DV 15 | 55 m / DV 19 | — |
| Heavy Assault Rifle | 12 m / DV 15 | 40 m / DV 13 | 90 m / DV 15 | — |
| Breach Shotgun | 8 m / DV 13 | 18 m / DV 17 | 35 m / DV 21 | — |
| Precision Sniper Rifle | 10 m / DV 19 | 50 m / DV 15 | 120 m / DV 13 | 240 m / DV 15 |
| Heavy Support Rifle | 10 m / DV 17 | 45 m / DV 15 | 100 m / DV 15 | 180 m / DV 17 |
| Auto Support Gun | 10 m / DV 17 | 40 m / DV 15 | 90 m / DV 17 | 160 m / DV 19 |

These replace the oversized first-build playtest envelopes. They keep distance
and DV separate: a weapon may physically reach a band while remaining awkward
there. Only the precision rifle and selected heavy-support weapons currently
enable Extreme. The table is canonical for the v0.1.2 playtest package but does
not lock the final equipment catalogue.

## EXTREME RANGE — CONFIRMED CONCEPT

Extreme Range is NOT a universal fourth range band.

Certain weapons may instead have an Extreme Range trait.

Suggested wording:

Extreme Range:
This weapon may attack targets beyond 30 squares / 60 metres. Extreme-range attacks use the weapon’s Long-range DV unless that weapon specifically states otherwise.

This allows weapons such as:
- sniper rifles
- selected long rifles
- some LMGs
- appropriate laser/energy weapons

to operate beyond normal battle-map distances without requiring every weapon to have an Extreme DV.

Exact list of Extreme-capable weapons remains unresolved.

## WEAPON FIRE MODES — CONFIRMED STRUCTURE

The system currently has these core ranged fire modes:

- Standard Fire
- Auto Fire
- Suppressing Fire
- Cone Fire

Not every weapon supports every mode.

### Standard Fire

A normal single-target attack.

Uses the weapon’s standard damage profile.

### Auto Fire

Only available on compatible automatic weapons.

**PROVISIONAL NUMBERS UNDER BASELINE v1.0:** Auto Fire's confirmed intended role is **shield stripping**, not a universal raw-damage increase. It supersedes the earlier provisional +1 weapon-die model.

Candidate resolution:
- Roll normal weapon damage; do **not** add an Auto damage die.
- Retain an accuracy penalty and substantial ammunition expenditure. Their final values are unresolved.
- On a successful Auto Fire hit, after resolving damage, ablate **up to 3 Shield SP** rather than the normal 1. Combined Ranged SP stops at its Armour Floor. A hit remains one attack/damage roll and one protection subtraction; ammunition spent does not set the amount ablated.

Illustrative benchmark only: at 60% Standard hit chance, normal one-point ablation averages **0.60 Shield SP per action**. At 45% Auto hit chance (the current useful −3/Ablation 3 playtest benchmark), three-point ablation averages **1.35 Shield SP per action**, or 2.25 times as much while sufficient Shield SP remains. This does not confirm the penalty, three-point ablation or ammunition cost as final values. Five rounds spent on an Auto attack would not imply five SP ablated.

Intended tradeoff: Standard Fire is more accurate and ammunition-efficient, especially once shields are depleted; Auto Fire spends ammunition to strip shields for the team. Higher-tier Auto may improve its penalty, ablation or support axes, but should not automatically improve all of them or also receive premium damage and penetration.

### Suppressing Fire

Only available on weapons that support it.

Suppressing Fire is intended primarily as:
- area denial
- battlefield control
- forcing enemies to remain behind cover or suffer consequences

It should NOT simply be another higher-damage attack mode.

Exact Suppressing Fire mechanics remain unresolved.

### Cone Fire

Used by weapons such as:
- shotguns firing appropriate shot/pellet ammunition
- flamethrowers
- similar energy weapons modelled as area/cone weapons

Cone attacks affect an area rather than behaving as ordinary single-target fire.

Important:
Not every shotgun attack must be a cone.
Shotgun slugs may use ordinary Standard Fire.

Exact cone geometry and attack-resolution mechanics remain unresolved.

## FIRE MODE ACCESS BY WEAPON CLASS — CONFIRMED CURRENT DESIGN

Pistols:
- Standard Fire only

SMGs:
- Standard Fire
- Auto Fire
- No Suppressing Fire

Combat / Assault Rifles:
- Standard Fire
- Auto Fire
- Suppressing Fire

LMGs:
- Auto Fire
- Suppressing Fire
- No Standard Fire

Shotguns:
- Standard Fire where appropriate
- Cone Fire where appropriate, depending on ammunition

Flamethrowers / similar area energy weapons:
- Cone Fire

If machine-pistol-type weapons exist later, they should not undermine the clean pistol role; they may instead be treated as an SMG subtype or another special weapon category.

Long Rifles / Sniper Rifles: fire-mode access was not specified in this handover and remains unresolved.

## CORE RANGED WEAPON CLASSES — CONFIRMED LIST

CONFIRMED CURRENT LIST:

- Pistol
- SMG
- Combat / Assault Rifle
- Long Rifle / Sniper Rifle
- Shotgun
- LMG

Important update:
Do NOT divide pistols into separate universal categories such as light pistol / heavy pistol / very heavy pistol.

Use one Pistol class and differentiate individual pistol models through:
- damage
- magazine capacity
- reload behaviour
- ammunition compatibility
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
- ammunition / energy technology

Important:
LMGs should not simply be “assault rifles with higher damage.”

Their role should come mainly from:
- sustained fire
- large ammunition capacity
- Auto Fire
- Suppressing Fire

SMGs should also have a real role beyond being weaker rifles:
- Close-range performance
- handling
- concealability
- Auto Fire access

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

## WEAPON TECHNOLOGY LAYERS — CONFIRMED DIRECTION

Weapon chassis and attack technology should remain separate concepts.

A weapon chassis could be:
- pistol
- SMG
- rifle
- shotgun
- etc.

The firing technology may then be:
- slug / ballistic
- flechette
- laser / energy

Special payloads may additionally modify the attack.

### Slug / Ballistic

General-purpose kinetic weapons.

Intended strengths:
- stopping power
- cover penetration
- structural penetration

Important setting drawback:
Overpenetration can be hazardous on:
- spacecraft
- orbital habitats
- stations
- enclosed pressurised environments

### Flechette

Primary niche:
Personnel weapon with reduced structural penetration.

Particularly useful where the shooter does not want to punch through:
- walls
- equipment
- pressure barriers
- hull structures

Likely tradeoffs:
- weaker against hard armour
- weaker structural penetration
- possibly poorer Long-range performance

Exact rules unresolved.

### Laser / Energy

Part of the setting.

Potential balancing axes include:
- power cells
- heat
- range
- accuracy
- shield interaction
- armour interaction
- structural effects

Exact mechanics unresolved.

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

## Ranged Weapon Handling in Melee — CONFIRMED DESIGN DIRECTION

Two-handed ranged weapons cannot normally be fired while engaged in melee. One-handed ranged weapons, especially pistols, can be used while engaged. This gives sidearms a tactical purpose and makes closing on a rifle user matter without adding a penalty table; it also supports the Soldier's Quickdraw concept.

Likely handling categories: pistols and other one-handed firearms can fire in melee; rifles, two-handed shotguns, LMGs and sniper rifles normally cannot. An SMG depends on whether its particular model is one- or two-handed. Final handling tags, exceptions and the definition of **engaged in melee** remain unresolved.

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
- every successful Standard Fire hit ablates the shield by 1, even if the attack fails to exceed the shield threshold; the provisional Auto Fire mode above may ablate more

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

Standard ranged-hit ablation is **1** unless a weapon, mode or effect explicitly changes it. Final Auto numbers, penetration procedure, recharge economics, movement/engagement/retreat, Trauma, cover, concealment, suppression and mixed-party encounter tuning remain provisional or TBD.

### Current Foundry v0.1.2 playtest calibration — PROVISIONAL

The current implemented calibration deliberately moves survivability from HP
into degrading protection:

| Tier | Shield centreline | HP centreline | Armour Floor target | Heavy melee test damage |
| --- | ---: | ---: | ---: | --- |
| T1 | 7 | 14 | 1 | 2d6 |
| T2 | 8 | 16 | 2 | 2d6+1 |
| T3 | 9 | 18 | 3 | 2d6+2 |
| T4 | 10 | 20 | 4 | 3d6 |

These replace the earlier Foundry test values of Shield 4/5/6/7 and HP
18/22/26/30. They are **playtest calibration**, not locked character-building
formulas or mandatory item statlines. Standard Fire remains Ablation 1. Auto
remains provisionally −3 attack and Ablation 3.

Melee impact was explicitly reviewed across balanced, shield-heavy,
high-Floor/high-AC and agile armour at all tiers plus cross-tier matchups.
Keeping the ranged damage scale made adjacent melee too efficient after HP was
reduced. The implemented correction is a separate lower melee weapon damage
scale; no universal Melee AC or Armour Floor increase was required. Melee
remains deliberately strongest into shield-heavy equipment, while heavy armour
can approach ranged durability against melee. Live tests should include melee
starting adjacent, one Move away and two Moves away.

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

The four-tier structure, fuzzy access, same-tier mods, completed-package balance assumption, expected Floor-mod investment, moderate power-step philosophy, calibration targets and outside-the-ladder Exotic category are part of Combat Maths Baseline v1.0. Exact tier names, level windows, item statistics, mod capacity, Auto values, penetration procedure and economic values remain provisional content guidance.

## ACTION ECONOMY — CONFIRMED

The system uses only two core action types:

- Main Action
- Move Action

Do not add Minor Actions, Bonus Actions, Swift Actions, Reactions, etc. unless a genuine special case later requires them.

The design goal is to keep the action economy extremely readable.

### Main Action

Typical Main Actions include:
- Standard Fire
- Auto Fire
- Suppressing Fire
- melee attack
- Overwatch
- reload
- draw or stow significant equipment
- use equipment
- use a medkit
- interact with a terminal
- hack
- activate equipment
- open/interact with something meaningful during combat

Exact interaction list may expand later, but meaningful actions should normally consume the Main Action rather than becoming free/minor actions.

### Action-value baseline

A standard attack is the opportunity-cost benchmark for future hacking, drone control, combat drugs, Medtech intervention, social support, engineering and battlefield-control actions. A non-attack Main Action should create roughly one attack's worth of immediate encounter impact or a setup/team/multi-round payoff capable of exceeding one personal attack. Exact subsystem values remain TBD.

### Move Action

A normal Move Action allows:
- 5 squares
- 10 metres

Standing from prone consumes the Move Action.

### Split Movement

Movement may be split around the Main Action.

Example:
- move 2 squares
- fire
- move remaining 3 squares

No special action is required to split movement.

### Free Activities

Avoid creating a broad free-action economy.

Short speech / brief communication is explicitly free.

Other free actions should only exist where they are genuinely trivial or as clearly bounded exceptions such as the proposed once-per-combat Level 1 Role Abilities below. A triggered ability does not automatically add a general Reaction action type.

## COMBAT ROUND / TURN TIME — CONFIRMED

A combat turn represents approximately:

3 seconds

This means:
- 20 turns ≈ 1 minute

The short duration is intended to make combat feel fast and violent.

It also fits:
- one meaningful Main Action
- one Move Action
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

Exact numerical effect of being In Cover is not yet defined.

## OVERWATCH — CONFIRMED CURRENT DESIGN

Overwatch:
- costs the Main Action
- allows the character to prepare to attack based on a trigger / target / area condition
- while using Overwatch, the character counts as Exposed / Out of Cover

This is intentional.

The purpose is to prevent characters from safely remaining behind cover while also controlling a firing lane with Overwatch.

Exact trigger wording and timing remain unresolved.

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
- use ammunition/energy choices

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
- flechette ammunition has an important setting-specific niche
- different weapon technologies should create meaningful mission-equipment choices

## Open specification details

- Detailed Trauma / Critical Injury effects, numerical range DVs, final weapon damage, Auto Fire penalty/ammunition/ablation value, suppression resolution, cone geometry/resolution, and final Extreme Range weapon eligibility remain unresolved.
- Extreme Range's use of Long-range DV is suggested wording within the confirmed trait concept.
- The supplied timing is approximately 3 seconds per turn. How that relates to a full round containing multiple characters' turns has not been specified.
- Distances are recorded as supplied in whole squares. Off-grid distances between the listed metre intervals have not been specified.
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

**PROVISIONAL / CURRENT TEST BASELINE:** STR, DEX, CON, INT, WILL and PRE all start at 0. Allocate eight one-point boosts at level 1, with a starting cap of 3. An example array is **3 / 2 / 1 / 1 / 1 / 0**. At Level 5, raise **two different Attributes** by 1. At Level 9, again raise **two different Attributes** by 1. Attribute cap: 4. These values are the current progression assumptions for testing; they are not locked final mathematics. Do not assume both milestones are invested into the same attack Attribute.

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
- **Demo:** grenades, explosives, mines, demolition and breaching charges.
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
- a Role-specific Feat list
- a Level 1 Feat associated with that Role

Characters choose 2 Roles and therefore:
- gain both Role Abilities
- gain the Level 1 Feat from each Role
- gain access only to the Feat lists of those two Roles

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
- temporary mutagenic and biological modifications
- stimulants, physical/movement/resilience enhancements and other temporary biological buffs
- bodily/biological manipulation rather than technological hacking or social/morale effects

Support and utility Roles must keep distinct combat identities: **Hacker** controls or disrupts technology, **Medtech** manipulates biology and treats injuries, and **Envoy** influences morale and coordination. Do not collapse them into interchangeable buff/debuff packages. Exact effects and numbers remain unresolved.

## LEVEL 1 ROLE ABILITIES — CONFIRMED CONCEPTS; DETAILS UNDER TEST

Each Role has one simple, memorable ability that matters in combat from level 1, reinforces its identity, and keeps resolution shallow. These are **confirmed concepts**, not finalised wording, numbers or complete action/trigger rules. They are specific, bounded exceptions rather than a new general action type.

### Soldier — Quickdraw

**Once per combat scene**, when an enemy closes into melee with the Soldier, the Soldier may immediately release, drop or sling a two-handed ranged weapon, draw a one-handed firearm, and fire **one Standard shot** at that enemy. The shot uses normal weapon rules: no Auto Fire or inherent accuracy bonus. This gives a carried sidearm a purpose under the two-handed-weapon handling direction above. The exact trigger and meaning of “engaged in melee” remain unresolved.

### Medtech — Combat Dose

**At the start of combat, once per combat scene**, the Medtech may inject themselves or an adjacent willing ally with **one prepared Medtech compound** as a free activity. The compound list, preparation, potency, duration, strain/toxicity and resource use remain unresolved. Stronger mutagens and biotech actions may still cost a Main Action; this ability does not make all injections free.

### Envoy — Rally

At the start of combat, the Envoy may deliver a brief command, speech, performance or similar rally as a free activity, granting a **short group buff** to allies who can hear them. The effect and duration are unresolved; do not assume a permanent or whole-combat +1 attack bonus for the party without mathematical validation. The expression can fit a commander, diplomat, performer, politician, fixer, preacher or celebrity.

**Later Feat idea, not part of base Rally:** allow a choice between buffing allies **or** applying a group debuff to enemies, not both at once by default. Its exact effect is unresolved.

### Operative — Vanish

**Once per combat scene, at the start of combat**, the Operative may attempt to Hide/Stealth as a free activity if the surroundings offer a plausible hiding place or way to break line of sight. The Hidden and Stealth rules remain unresolved.

**Later Feat idea:** Ambush may give attacks from Hidden a simple damage payoff, perhaps flat bonus damage. Its value is not defined. Vanish itself does not grant that damage bonus; avoid automatically granting both accuracy and damage without testing.

### Pilot — Linked Movement

**Once per round**, when a controlled drone uses the Pilot's Move Action to move, the Pilot may also move up to their normal movement distance. This is a defined movement-efficiency exception to ordinary operator-to-drone action transfer. It creates **no additional Main Action** and does not double attacks. Drone and operator can reposition together.

### Hacker — Ping

At the start of combat, the Hacker may perform a free combat scan / Frisk Cyber-style check against visible enemies. Prefer **one scan/check for the visible enemy group** over repetitive individual rolls; exact resolution remains unresolved. On success, it reveals broad, actionable information such as which targets carry hackable cyberware, whether drones/smart weapons/networked devices are present, and broad exploitable system categories. Ping is information/setup, not a damage effect.

Later Hacker Feats might reveal precise implants, vulnerabilities, security ratings, functions, concealed devices or easier follow-up hacks; none is part of the base ability yet.

### Engineer — Deployable

At the start of combat, the Engineer may place **one prepared Device** as a free activity. **Deployable** names the Role Ability/category; a **Device** is the actual placed object. Possible future Devices include a Gun Turret, Jammer, Shield Projector, Sensor Node, Mine or Breach Charge. Exact stats, preparation/inventory limits, duration, autonomy and attack rules are unresolved.

A Device is a temporary, set-and-forget battlefield object/effect performing a predefined function until it expires, runs out or is destroyed. A drone is a persistent controlled unit with its own token, statistics and movement and normally uses the Pilot's actions. A Device does **not** require continuous operator action transfer each round. This distinction does not itself grant autonomous attacks or extra Main Actions.

**Distinct combat identities:** Soldier handles direct gunfighting; Medtech biology and temporary enhancement; Envoy morale and group coordination; Operative stealth/opening position; Pilot mobile machines and movement efficiency; Hacker information and cyber exploitation; Engineer temporary battlefield hardware. These Role concepts should not collapse into the same support effect.

## MEDTECH / BIOTECH / MUTAGENS

CONFIRMED DESIGN DIRECTION:

Medtech is not merely a healer.

Medtech includes:
- medicine
- trauma care
- biotechnology
- genetics
- temporary biological modification / mutagen effects
- healing, stabilisation and condition treatment
- stimulants and temporary movement, physical and resilience boosts

Temporary bio-effects may include concepts such as:
- acid spit
- growing claws
- increased size
- increased strength
- hardened skin
- enhanced senses
- regeneration
- reflex enhancement

Current preferred activation mechanic:
- injecting a mutagen normally costs a Main Action; the Level 1 Combat Dose concept above is a specific start-of-combat exception for one prepared compound
- effect begins immediately
- effect is temporary

Potential balancing levers:
- duration
- strain
- toxicity
- limited doses
- limited number of simultaneous mutations
- drawbacks after the effect

Exact mutagen mechanics unresolved.

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
- mutagen improvements
- hacking improvements
- etc.

Feats should not simply be endless +1 bonuses.

## LEVELS / PROGRESSION

CONFIRMED:

The system uses:

10 levels

Current Feat progression:

Level 1:
- choose 2 Roles
- gain both Role Abilities
- gain each Role’s Level 1 Feat

Levels 2–10:
- gain 1 Feat per level
- choose the Feat from either of the character’s two Role lists

Therefore:
- the two Roles remain the character’s core identity
- later Feats may be distributed unevenly between the two Roles

Example:
Soldier / Medtech could eventually heavily favour Soldier Feats or Medtech Feats.

Do not require alternating between Roles.

Exact Feat prerequisites / tiers remain unresolved.

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
- grant their Level 1 Feats
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
**Novum v0.1.2**, system ID `novum`, targeted at Foundry **v14.368**. It contains
the combat engine, Character/NPC/Item sheets, 80 seeded gear Items, 48 pregens,
separate full portraits and circular alpha-transparent prototype tokens,
auditable attack cards, guarded Apply Result, and a coloured readied-weapon
range overlay with Toggle/Hold controls. Attack measurement and overlay radii
share one Scene-unit-aware metric conversion. Live v0.1.2 acceptance remains
pending; implemented content values remain provisional unless separately
confirmed in this reference.

Expected prototype fields and views: name, level, six Attributes, Background, two Roles, the locked 16 skills, skill-point spending/validation, derived HP, Initiative, passive Awareness **once its formula exists**, movement, Melee AC, current Ranged SP and Armour Floor, weapons, armour, shields, Role abilities, level-up logic, and attack breakdowns/probabilities where useful. Several derived formulas and equipment statistics are still TBD.

Prototype usability may call for a small number of clearly labelled **PROVISIONAL / TEST DATA** entries: roughly 8–12 evocative Backgrounds, compact starter weapon/armour/shield catalogues, short Role flavour descriptions, and placeholder names for incomplete Feat/content slots where necessary. Such filler is **not canonical**, must not contradict confirmed decisions, and does not become established design without explicit later approval. Final catalogues and Feat trees remain TBD.

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
