# Novum v0.1.2 browser-only GitHub and Forge release

No PowerShell, terminal, Git CLI, or GitHub Desktop is required.

## Files supplied

- `novum-github-upload-v0.1.2.zip`: repository source prepared for browser upload.
- `novum.zip`: Foundry release asset. Keep this exact filename.

## Update the existing GitHub repository

1. Extract `novum-github-upload-v0.1.2.zip` on the computer.
2. Open the extracted `novum-foundry` folder.
3. Confirm `system.json`, `README.md`, `module`, `assets`, and the other source
   files are immediately inside that folder.
4. Open <https://github.com/jlabruna/novum-foundry> in the browser.
5. Select **Add file** and then **Upload files**.
6. Drag everything *inside* the extracted `novum-foundry` folder onto the
   upload page. Do not drag the outer folder itself.
7. Wait for GitHub to finish listing the files. Confirm `system.json` will be
   at the repository root and that the new `assets/portraits` files appear.
8. No obsolete repository paths need manual deletion for v0.1.2. Existing
   token filenames are deliberately reused and will be replaced by their new
   circular versions.
9. Commit directly to `main`.

Copyable commit title:

`Release Novum v0.1.2`

Copyable optional description:

`Update pregen token presentation, ranged-weapon profiles, Scene-unit handling, and range-overlay controls.`

After the commit, open `system.json` on GitHub and confirm the displayed
version is `0.1.2`.

## GitHub Actions

This repository does not currently depend on a GitHub Actions release/build
workflow. There is no Action that must turn green before release. The supplied
`novum.zip` is the already validated release asset.

## Create the GitHub release

1. Open the repository's **Releases** page.
2. Select **Draft a new release**.
3. Choose **Create new tag** and enter `v0.1.2`, targeting `main`.
4. Set the release title to `Novum v0.1.2`.
5. Paste the release notes below.
6. Attach the supplied `novum.zip`. Do not attach the browser-source ZIP in its
   place and do not rely on GitHub's automatic source-code archives.
7. Leave **Set as a pre-release** disabled.
8. Publish the release; do not leave it as a draft.

Copyable release notes:

```text
Novum v0.1.2 is a focused token and range UX playtest update.

- Adds circular, transparent Novum-ring tokens for all seeded pregens.
- Improves visual diversity across the twelve PC/NPC archetype families.
- Audits every seeded ranged weapon with distinct pistol, SMG, shotgun, rifle, precision, and heavy-support identities.
- Unifies attack and overlay distance handling through the active Scene scale and units.
- Adds distinct coloured range zones, Toggle/Hold activation, configurable keybinding, colours, and opacity.
- Preserves the v0.1.1 HP, Shield, melee, Standard, and Auto combat calibration.
- Passes 26 automated validation tests.

Target: Foundry VTT v14.368.
```

## Verify the public files

Open both links in a private browser window after publication:

- Manifest: <https://raw.githubusercontent.com/jlabruna/novum-foundry/main/system.json>
- Package: <https://github.com/jlabruna/novum-foundry/releases/latest/download/novum.zip>

The manifest must show version `0.1.2`. The package link must download
`novum.zip` rather than returning a GitHub error page.

## Fresh Forge installation

1. Sign in to The Forge in the browser.
2. Open the Bazaar/custom package interface and select **Install from Manifest**.
3. Choose **Game System** if the interface asks for a package type.
4. Paste:
   `https://raw.githubusercontent.com/jlabruna/novum-foundry/main/system.json`
5. If an **Install from the Bazaar** option appears, disable it so Forge uses
   this custom manifest directly.
6. Install the package and wait for Forge to finish processing it.
7. Create a fresh world using the **Novum** system for the cleanest playtest.

## Update Forge from v0.1.1

1. Stop or return to Setup from any running Novum world.
2. Open The Forge package/system management interface.
3. Locate Novum and use its available **Update** or **Check for Updates**
   control.
4. If Forge does not offer an update for this custom package, use **Install
   from Manifest** again with the same manifest URL and keep **Install from the
   Bazaar** disabled.
5. If Forge reports that the installed custom copy cannot be replaced, remove
   only the installed Novum *system package* through Forge's browser interface,
   then install it again from the manifest. Do not delete the world.
6. Confirm the package manager reports Novum `0.1.2` before launching a world.
7. When an existing v0.1.1 playtest world opens, accept the prompt to refresh
   seeded content. This rebuilds embedded gear on seeded pregens. Use a fresh
   world instead if old pregens were manually customised.

## Post-update smoke test

1. Novum reports version 0.1.2.
2. A fresh or existing world opens.
3. A placed pregen uses a circular token with transparent corners.
4. Several pregens visibly use different faces and silhouettes.
5. The Compact SMG ends at 12/30/55 m.
6. The Heavy Support Rifle ends at 10/45/100/180 m.
7. The Precision Sniper Rifle uses 10/50/120/240 m and is best at Long.
8. The range overlay matches the Item's values.
9. Close, Medium, Long, and optional Extreme zones are visually distinct.
10. Toggle mode works.
11. Hold mode disappears on key release.
12. The keybinding can be changed through Foundry's configuration.
13. Band colours and opacity respond to client settings.
14. Standard, Auto, melee, and Apply Result still resolve normally.
