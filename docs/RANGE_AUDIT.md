# Novum v0.1.2 range audit

This release preserves weapon-specific distances and DVs. A distance band says
where the weapon can attempt a shot; the DV says how favourable that band is.
The values are compressed tactical-map distances, not real-world maximum
ballistics.

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

These profiles apply at every current gear tier. Tier remains a damage and
equipment-quality axis; it does not silently inflate every weapon's physical
range.

## Scene units

Weapon data is stored in metres. Both attack measurement and overlay radii use
the same conversion functions in `module/range.mjs`:

1. Foundry measures the token-centre path in the Scene's configured units.
2. The result is converted to metres.
3. The weapon Item's edited range data selects the band and DV.
4. The overlay converts those same metre values back into pixels using the
   active Scene grid size and distance.

New Novum Scenes default to 2 metres per square. Metres, kilometres, feet,
inches, yards, and miles are recognised. An unknown unit label is treated as a
metre-equivalent custom unit rather than multiplied twice.

## Identity summary

- Pistols: easy Close shots, steep falloff.
- SMG: easy Close and useful Medium, weak Long, no Extreme.
- Shotgun: shortest physical envelope and severe falloff.
- Assault rifle: best Medium general-purpose profile and credible Long.
- Precision rifle: awkward Close, excellent Long, strongest Extreme.
- Heavy support: credible Medium/Long reach with Close handling cost; selected
  platforms retain difficult Extreme capability.
