# Novum v0.1.1 combat recalibration

## Implemented playtest centreline

| Tier | Old Shield | New Shield | Old HP | New HP | Ranged damage | Heavy melee damage |
| --- | ---: | ---: | ---: | ---: | --- | --- |
| T1 | 4 | 7 | 18 | 14 | 2d6+2 | 2d6 |
| T2 | 5 | 8 | 22 | 16 | 3d6 | 2d6+1 |
| T3 | 6 | 9 | 26 | 18 | 3d6+1 | 2d6+2 |
| T4 | 7 | 10 | 30 | 20 | 3d6+2 | 3d6 |

Armour Floor remains approximately 1/2/3/4 before profile-specific mods.
Standard Fire remains Ablation 1. Auto remains provisionally −3 attack,
Ablation 3, and normal ranged damage.

## Simulation summary

The deterministic test model uses the seeded same-tier attack bonuses, preferred
Range DV 13, the listed damage dice, natural 1/20 behaviour, and complete
protection profiles.

| Defender | T1 attacks | T2 attacks | T3 attacks | T4 attacks |
| --- | ---: | ---: | ---: | ---: |
| Balanced, Standard | 8.45 | 8.19 | 8.64 | 9.07 |
| Balanced, Auto | 8.12 | 7.29 | 6.95 | 6.82 |
| Balanced, heavy melee | 5.15 | 5.28 | 5.39 | 5.13 |
| Shield-heavy, Standard | 12.80 | 11.92 | 12.13 | 12.28 |
| Shield-heavy, heavy melee | 4.68 | 4.86 | 5.00 | 4.79 |
| High-AC/high-Floor, heavy melee | 7.36 | 7.44 | 7.50 | 6.94 |

Auto normally collapses balanced shields before incapacitation and does so in
about 4.6–6.7 attacks, depending on tier. Standard fire rarely reaches literal
Shield 0 before HP reaches 0; instead it produces the intended visible ramp as
each successful hit lowers the protection threshold. This leaves deliberate
space for Auto and future anti-shield tools.

## Melee finding

Blindly retaining the ranged damage scale made adjacent melee too efficient
after HP fell. The smallest coherent correction was weapon-specific melee
damage tuning. Global Melee AC and Armour Floor increases were not required.

Melee remains the counter to shield-heavy equipment. Balanced targets still
fall faster once a melee specialist is already adjacent, but approach actions
reduce that advantage. Heavy/high-Floor armour can match ranged durability
against melee, so melee is not the universal answer.

## Danger zones for live testing

- Shield-heavy targets are slow to defeat with Standard fire by design; confirm
  that focus fire and Auto make this tactical rather than tedious.
- Adjacent melee specialists remain dangerous, particularly against shield-heavy
  armour. Test from zero, one, and two Moves away.
- T4 Auto has the largest action advantage over Standard fire. Confirm its
  ammunition and opportunity costs once those procedures are designed.
- Exact HP and Shield numbers remain playtest calibration, not locked creation
  formulas.
