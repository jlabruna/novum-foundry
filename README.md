# Novum for Foundry VTT

Novum v0.2.1 is a self-contained Foundry VTT game system for structured
character-progression and combat playtests of **Novum Combat Maths Baseline v1.0**.

It is not an SWNR/CWN extension and has no system or module dependencies.

## Compatibility

- Target: Foundry Virtual Tabletop v14
- Verified manifest build: **14.368 (Stable 10)**
- System ID: `novum`
- System version: `0.2.1`

The repository is intentionally dependency-free at runtime. Node is needed only
to regenerate seeded content or run the automated validation suite.

## Manual installation

1. Extract the release archive.
2. Place the included `novum` folder in Foundry's user-data
   `Data/systems/` directory.
3. Confirm the final path is `Data/systems/novum/system.json`.
4. Restart Foundry.
5. Create a new world and select **Novum** as its game system.

## First launch

When a GM first opens a Novum world, the system offers to import the
playtest catalogue. Accepting creates organised world folders containing:

- 80 generic T1–T4 gear Items;
- 24 premade Characters;
- 24 premade NPCs.

When the seeded-content version changes, the GM is offered a refresh. This
updates Novum's flagged playtest Actors and gear without duplicating them or
changing unrelated world content. Because the embedded equipment on seeded
pregens is rebuilt, use a fresh world when preserving modifications to old
pregens matters.

## Running a combat test

1. Drag premade Actors into a Scene.
2. Set the Scene grid to 2 metres per square if it was created with different
   settings. New Novum Scenes default to 2 m.
3. Select the acting token and target one enemy token. For a Shotgun Cone,
   place/use a 4-square 1/2/3/4 template and target every affected token,
   including allies.
4. Open the Actor sheet and click **Attack** beside an equipped weapon.
5. Confirm automatic range, mode, precision penalty, situational modifier, and
   damage expression.
6. Review the complete calculation in chat.
7. Click **Apply Result** to commit the projected HP and Shield changes.

The readied ranged weapon can also display distinct translucent
Close/Medium/Long zones, plus Extreme where the weapon supports it,
on the Scene. Use the sheet's **Ranges** button, the Token-controls bullseye, or
the configurable **Shift+R** keybind. Client settings provide Toggle or Hold
activation, four band colours, and shared opacity. The overlay follows the
selected token and updates when its readied weapon changes.

The Apply Result control refuses stale cards if the target's HP or Shield has
changed since the roll. This prevents an old result from silently overwriting a
newer combat state.

### Melee

Melee attacks compare against Melee AC, ignore Shield SP, and subtract Armour
Floor once. Because bypass is already powerful, v0.1.1 introduced a
separate lower damage scale. The chat card labels Shield as ignored.

### Fire modes and weapon technologies

Kinetic weapons use their listed d6 damage, normal accuracy, and Ablation 1.
Weapons flagged for Auto expose the current playtest mode:

- −3 attack;
- convert d6 weapon dice to d4 while retaining flat modifiers;
- Ablation 3;
- consume the weapon's listed Auto ammunition.

Shard weapons convert d6 weapon dice to d4, retain flat modifiers and normal
accuracy, use Ablation 2, and cannot use Auto. Their Hardness interaction is
not automated. Laser weapons convert d6 weapon dice to d8, retain flat
modifiers, and use Ablation 0; Laser-versus-Hardness remains unresolved.

The Breach Shotgun is Close-only and Cone-only. It rolls once against all
manually targeted tokens in its full four-square Cone, rolls damage once for
all hits, applies full damage and Ablation 1, and permits friendly fire. This
manual-target workflow deliberately leaves diagonal/template validation to the
table for this build. The Shotgun can fire while adjacent to a hostile; other
two-handed ranged weapons cannot.

The LMG exposes Auto only. Suppressive Fire and its 20-round cost are visible
as future test data but cannot be selected because its resolution remains
unsettled.

### Ammunition and reloads

Successful and missed attacks both consume the selected mode's ammunition.
The sheet blocks a mode when insufficient ammunition remains. **Reload** fills
the magazine/charge pool and posts a chat reminder that it consumes a Main
Action; the build does not otherwise police per-turn action expenditure.

### Character progression

The Character sheet now separates Combat, Progression, Feats, Equipment, and
Notes. The Progression view displays the Level 1–10 HP sequence, current Skill
point budget and cap, three Background Rank-1 grants, and the distinct Level 5
and Level 9 Attribute increases. Feat slots are granted at Levels 2/4/6/8/10.

The Feats view stores two Roles, displays each Role's level-1 ability, and
presents two side-by-side placeholder branches. Level 2/4/6 A/B choices are
selectable and mutually exclusive across one shared pick budget. Level 8/10
remain visibly locked future content. Placeholder Feats have no mechanical
effects. Lowering Level or changing Role does not silently delete existing
selections; invalid legacy selections remain visible with warnings and can be
removed from the selected strip.

### Manual overrides

- Use the attack dialog to override the range band or enter a manual DV.
- Use the sheet's GM Overrides area to set Melee AC, Armour Floor, or Shield
  Max directly. A value of `-1` returns that statistic to gear derivation.
- Damage expressions are editable on the attack dialog and Item sheet.
- Shield current and HP are directly editable.
- The `+1 Shield` button is a deliberately manual, out-of-combat recharge tool.

## Equipment workflow

- Drag world Items onto an Actor sheet.
- One weapon is readied at a time; readying another weapon clears the prior one.
- Equipping one armour chassis unequips other chassis through the main Actor
  sheet control.
- Armour mods only contribute when installed in same-tier armour and within its
  capacity.
- Invalid direct-edit or legacy states remain visible as warnings and do not
  crash the sheet.

## Development and validation

```sh
npm run validate
```

This regenerates deterministic playtest content, syntax-checks every JavaScript
module, validates package and token paths, and runs combat, recalibration,
range/unit, range-overlay, token-alpha, theme-contrast, content, and
registration tests.

## Provisional or deferred

The following v0.2 content is explicitly provisional: HP/Shield calibration,
item profiles, melee damage, Auto, magazines and ammunition costs, mobility
values, Shield capacitor behaviour, placeholder Role/Feat trees, Background
grant assignment, and all named gear examples.

Penetration is stored and displayed but not automated. Trauma is flagged only;
no effect is invented. Cover, concealment, Suppressive Fire, final aimed-shot
effects, full engagement/retreat handling, Hardness interactions, batteries,
hacking, drone actions, drugs/bio, Role-ability automation, Feat effects, and
boss actions remain deferred.

See [docs/PLAYTEST.md](docs/PLAYTEST.md) for a focused test checklist and
[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for implementation boundaries.
The numerical rationale is recorded in
[docs/RECALIBRATION.md](docs/RECALIBRATION.md).
The earlier v0.1.2 weapon table and range rationale remain recorded as a
historical snapshot in
[docs/RANGE_AUDIT.md](docs/RANGE_AUDIT.md).
