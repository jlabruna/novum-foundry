# Novum v0.2.1 browser-only GitHub and Forge release

Repository: <https://github.com/jlabruna/novum-foundry>

## 1. Upload source

Use `dist/novum-github-upload-v0.2.1.zip`, or the already extracted
`dist/browser-upload/novum-foundry` folder.

1. Extract the browser-upload ZIP and open its `novum-foundry` folder.
2. Confirm `system.json`, `README.md`, `module`, `assets`, and `templates` are
   immediately inside that folder.
3. Open the repository and choose **Add file → Upload files**.
4. Drag everything *inside* `novum-foundry` onto the page. Do not drag the
   outer folder itself.
5. Confirm `module/progression.mjs` and the updated templates appear, then
   commit directly to `main`.

Commit title:

`Release Novum v0.2.1 packaging correction`

Optional description:

`Correct the release ZIP root while preserving all v0.2.0 gameplay behaviour.`

Open `system.json` on GitHub after the commit and confirm version `0.2.1`.

## 2. Confirm workflow

This repository has no GitHub Actions build/release workflow. There is no
workflow file to upload separately and no Action that must turn green. The
validated `dist/novum-v0.2.1.zip` is the release asset.

## 3. Test workflow

No remote workflow run is expected. The local release gate is:

`npm run validate && npm run stage:release`

The completed build passes 34 tests and package validation. The remaining gate
is the Foundry v14.368 manual smoke test listed below.

## 4. Create the GitHub release

1. Open the repository's **Releases** page and choose **Draft a new release**.
2. Create tag `v0.2.1` targeting `main`.
3. Set the title to `Novum v0.2.1`.
4. Paste the release notes below.
5. Attach `dist/novum-v0.2.1.zip` with that exact filename. Do not attach the
   browser-source ZIP in its place.
6. Leave **Set as a pre-release** disabled and publish the release.

Copyable release notes:

```text
Novum v0.2.1 corrects the release package used by Forge and Foundry.

- Places system.json directly at the root of novum-v0.2.1.zip so installation and updating work correctly.
- Uses a versioned asset filename and exact tagged download URL to prevent stale-file mixups.
- Preserves all v0.2.0 rules, content, progression, combat behaviour, and interface functionality.

- Adds persistent two-Role selection and dedicated Combat, Progression, Feats, Equipment, and Notes tabs.
- Adds all seven Role ability summaries and fourteen side-by-side placeholder Feat branches.
- Enforces one shared Feat pick at Levels 2/4/6/8/10, Level 2/4/6 gates, and mutual exclusion without deleting choices after a level reduction.
- Adds the Level 1–10 HP sequence, Skill budgets/caps, Background grants, and Level 5/9 Attribute increases.
- Implements Kinetic, Shard, Laser, corrected Auto damage, ammunition expenditure, and Main Action reloads.
- Implements the Close-only four-square Shotgun Cone with a shared roll, multiple target application, friendly fire, and adjacency exception.
- Keeps Suppressive Fire, placeholder Feat effects, and other unresolved subsystems unavailable.
- Passes 34 automated tests and targets Foundry VTT v14.368.
```

## Update and install links

- Manifest: <https://raw.githubusercontent.com/jlabruna/novum-foundry/main/system.json>
- Package: <https://github.com/jlabruna/novum-foundry/releases/download/v0.2.1/novum-v0.2.1.zip>

After publishing, open both links in a private window. The manifest must show
`0.2.1`; the package link must download `novum-v0.2.1.zip`.

For a fresh Forge installation, use **Install from Manifest**, choose **Game
System** when asked, paste the manifest URL, and disable Bazaar lookup if Forge
offers that option. For an existing installation, stop the world and use
**Update / Check for Updates**. If Forge does not offer the custom-package
update, install from the same manifest URL again. Confirm Novum `0.2.1` before
opening a world.

The seeded-content version remains v0.2.0 because v0.2.1 changes packaging
only. Existing worlds should not receive another seeded-content refresh.

## Manual acceptance tests

1. Confirm the Setup screen reports Novum `0.2.1` and a world opens in Foundry
   v14.368.
2. Open a Character and move between all five tabs without losing edits.
3. Choose two different Roles and confirm both Role panels and abilities.
4. At Level 1, confirm no Feat is available. At Levels 2/4/6/8/10, confirm
   capacity 1/2/3/4/5 and that either Role can spend the next pick.
5. Select one A/B option, confirm its pair locks, reopen the sheet, then lower
   Level and confirm the saved choice is warned rather than deleted.
6. Check HP at Levels 1–10 against 14/14/15/16/16/17/18/18/19/20.
7. Test three different Background grants, Skill budget/cap blocking, and
   different Level 5/9 Attribute increases with cap 4.
8. Fire Standard, Auto, Shard, and Laser attacks. Confirm transformed damage,
   Ablation, and ammunition are shown in chat.
9. Empty a magazine, confirm the attack is blocked, then Reload and confirm the
   Main Action declaration and refilled magazine.
10. Place a four-square Shotgun Cone, target multiple enemies plus one ally,
    and confirm one roll creates independent Apply buttons for every hit.
11. Confirm Shotgun Cone works adjacent to a hostile and another two-handed
    ranged weapon is blocked.
12. Confirm the LMG offers Auto but not Standard or Suppressive Fire.
13. Recheck range overlay Toggle/Hold, armour/mod protection, melee resolution,
    stale Apply Result protection, token transparency, and dark/light theme
    readability.
