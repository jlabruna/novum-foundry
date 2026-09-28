# Novum for Foundry VTT

Novum v0.1.1 is a self-contained Foundry VTT game system for structured
combat playtests of **Novum Combat Maths Baseline v1.0**.

It is not an SWNR/CWN extension and has no system or module dependencies.

## Compatibility

- Target: Foundry Virtual Tabletop v14
- Verified manifest build: **14.368 (Stable 10)**
- System ID: `novum`
- System version: `0.1.1`

The repository is intentionally dependency-free at runtime. Node is needed only
to regenerate seeded content or run the automated validation suite.

## Manual installation

1. Extract the release archive.
2. Place the included `novum` folder in Foundry's user-data
   `Data/systems/` directory.
3. Confirm the final path is `Data/systems/novum/system.json`.
4. Restart Foundry.
5. Create a new world and select **Novum** as its game system.

For development, link the repository root into the systems directory using the
link name `novum`. On Windows, from an elevated Command Prompt:

```bat
mklink /D "%LOCALAPPDATA%\FoundryVTT\Data\systems\novum" "F:\ChatGPT\New TTRPG System\novum-foundry"
```

Adjust both paths for the actual Foundry data directory and repository location.

## First launch

When a GM first opens a Novum world, the system offers to import the
playtest catalogue. Accepting creates organised world folders containing:

- 80 generic T1–T4 gear Items;
- 24 premade Characters;
- 24 premade NPCs.

The importer is idempotent and skips existing seeded content. It is also
available from the browser console as:

```js
game.novum.importPlaytestContent()
```

## Running a combat test

1. Drag premade Actors into a Scene.
2. Set the Scene grid to 2 metres per square if it was created with different
   settings. New Novum Scenes default to 2 m.
3. Select the acting token and target exactly one enemy token.
4. Open the Actor sheet and click **Attack** beside an equipped weapon.
5. Confirm automatic range, mode, precision penalty, situational modifier, and
   damage expression.
6. Review the complete calculation in chat.
7. Click **Apply Result** to commit the projected HP and Shield changes.

The readied ranged weapon can also display translucent Close/Medium/Long zones
on the Scene. Use the sheet's **Ranges** button, the Token-controls bullseye, or
the configurable **Shift+R** keybind. The overlay follows the selected token and
updates when its readied weapon changes.

The Apply Result control refuses stale cards if the target's HP or Shield has
changed since the roll. This prevents an old result from silently overwriting a
newer combat state.

### Melee

Melee attacks compare against Melee AC, ignore Shield SP, and subtract Armour
Floor once. Because bypass is already powerful, v0.1.1 gives melee weapons a
separate lower damage scale. The chat card labels Shield as ignored.

### Auto

Weapons flagged for Auto expose the provisional v0.1 test mode:

- −3 attack;
- Ablation 3;
- normal weapon damage.

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
range-overlay, theme-contrast, content, and registration tests.

## Provisional or deferred

The following v0.1 content is explicitly provisional: HP/Shield calibration, item profiles,
melee damage, Auto, magazines, mobility values, Shield capacitor behaviour, and
all named gear examples.

Penetration is stored and displayed but not automated. Trauma is flagged only;
no effect is invented. Cover, concealment, suppression, final aimed-shot
effects, engagement, ammunition/reload procedures, battery economy, Roles,
Feats, advancement, hacking, drones, drugs/bio, and boss actions are deferred.

See [docs/PLAYTEST.md](docs/PLAYTEST.md) for a focused test checklist and
[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for implementation boundaries.
The numerical rationale is recorded in
[docs/RECALIBRATION.md](docs/RECALIBRATION.md).
