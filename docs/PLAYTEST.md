# Combat playtest checklist

## Setup

1. Import the playtest content when prompted.
2. Create a Scene using the system default of 2 metres per square.
3. Drag any mix of the T1–T4 premade Characters and NPCs into the Scene.
4. Reset each participant from its sheet before a new run.
5. Ready one ranged weapon and verify the sheet **Ranges** button, Token-control
   bullseye, and Shift+R keybind draw the same Close/Medium/Long distances.

Recommended initial scenarios:

- 1v1 mirror at each tier;
- 3v3 mixed roles;
- 6 Characters versus 6 NPCs;
- one shield-heavy focus-fire target;
- a melee specialist beginning adjacent, one Move away, and two Moves away;
- standard fire versus Auto on the same target;
- lower-tier specialist weapon versus a generic higher-tier chassis.

## Per attack

Record or inspect:

- natural d20 and attack total;
- Attribute, Skill, precision, mode, and situational modifier;
- measured distance, selected band, and DV/AC;
- damage roll;
- target Shield, Floor, and combined Ranged SP before the hit;
- HP damage;
- ablation and resulting Shield;
- critical and unresolved Trauma flag.

The complete record is already retained in the chat card and its message flags.

## Edge-case checks

- Natural 1 with a total that would otherwise hit.
- Natural 20 with a total below the DV.
- Crit thresholds of 19 and 18.
- Shield 0 with nonzero Floor.
- No armour, no Shield, and no Floor.
- Damage equal to combined Ranged SP.
- Ablation greater than remaining Shield.
- Melee against a shield-heavy target.
- Wrong-tier installed mod and over-capacity mod state.
- Attack with no target, using a manual range band or DV.
- Target HP/Shield changed before pressing Apply Result.
- Player-owned Actor roll and GM result application.
- Range overlay with no selected token, multiple selected tokens, a melee
  weapon readied, weapon changes, and gridless Scenes.
- Foundry dark and light themes for sheets, dialogs, cards, values, buttons,
  disabled controls, and Apply Result.

## Resetting

The sheet Reset button restores current HP and Shield to their displayed
maximums. It does not remove ActiveEffects or alter equipment. Shield recharge
does not occur automatically when combat ends.
