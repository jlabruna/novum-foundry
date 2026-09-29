# Combat playtest checklist

## Setup

1. Import the playtest content when prompted.
2. Create a Scene using the system default of 2 metres per square.
3. Drag any mix of the T1–T4 premade Characters and NPCs into the Scene.
4. Reset each participant from its sheet before a new run.
5. Ready one ranged weapon and verify the sheet **Ranges** button, Token-control
   bullseye, and configured keybind draw the same coloured range zones.
6. Test both **Toggle** and **Hold** activation in client settings.

Recommended initial scenarios:

- 1v1 mirror at each tier;
- 3v3 mixed roles;
- 6 Characters versus 6 NPCs;
- one shield-heavy focus-fire target;
- a melee specialist beginning adjacent, one Move away, and two Moves away;
- standard fire versus Auto on the same target;
- Kinetic, Shard, and Laser attacks using the same base damage expression;
- a four-square Shotgun Cone catching enemies only, then allies and enemies;
- an Auto weapon running dry and spending a Main Action to reload;
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
- ammunition cost and remaining magazine/charge pool;
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
- Range overlay with a metric 2 m grid and a Scene configured in feet.
- Optional Extreme enabled and disabled, plus customised colours and opacity.
- Shotgun Cone with one, two, and four manually targeted tokens; include a
  friendly target and verify each result applies independently.
- Shotgun firing adjacent to a hostile, and another two-handed ranged weapon
  being blocked in the same state.
- Shard Auto unavailable, Laser Ablation 0, and LMG Standard/Suppressive Fire
  unavailable.
- Foundry dark and light themes for sheets, dialogs, cards, values, buttons,
  disabled controls, and Apply Result.

## Character progression checks

1. Create a Level 1 Character, choose two different Roles, and confirm both
   level-1 abilities appear but no Feat can be selected.
2. Raise Level through 2/4/6/8/10 and confirm total Feat capacity becomes
   1/2/3/4/5. Select from either Role and from either branch.
3. Select one side of an A/B pair and confirm the other side locks. Reopen the
   sheet and confirm the choice persists.
4. Lower Level below a selected Feat. Confirm the choice is retained, warned,
   and removable from the selected strip.
5. Check HP at every Level against 14/14/15/16/16/17/18/18/19/20.
6. Assign three different Background Skills. Spend Skill points, checking the
   1/1/1/2/2/2 rank costs and caps 3/4/5/6 at the documented level bands.
7. At Levels 5 and 9, assign different Attribute increases and confirm the cap
   of 4 is enforced.

## Resetting

The sheet Reset button restores current HP and Shield to their displayed
maximums. It does not remove ActiveEffects or alter equipment. Shield recharge
does not occur automatically when combat ends.
