# Browser-only GitHub and Forge release

These steps require no PowerShell, Git CLI, GitHub Desktop, or terminal work.

## Create the repository

1. Open <https://github.com/new>.
2. Name the repository `novum-foundry`.
3. Set it to **Public**.
4. Do not initialise it with a README, `.gitignore`, or licence.
5. Create the repository.

## Upload the source

1. Extract `novum-github-upload-v0.1.1.zip` on the computer.
2. Open the extracted `novum-foundry` folder.
3. On the empty GitHub repository page, choose **uploading an existing file**.
4. Drag everything *inside* the extracted folder onto GitHub. `system.json`
   must appear at the repository root, not inside a second nested folder.
5. Use the commit message `Novum Foundry v0.1.1` and commit the upload.

## Publish the release

1. Open the repository's **Releases** page and choose **Create a new release**.
2. Create the tag `v0.1.1` targeting `main`.
3. Use the title `Novum v0.1.1`.
4. Attach the supplied `novum.zip` file. Do not substitute GitHub's automatic
   source-code archives.
5. Leave **prerelease** disabled and publish the release as the latest release.

## Verify and install

Open both links in a private browser window after publication:

- Manifest: <https://raw.githubusercontent.com/jlabruna/novum-foundry/main/system.json>
- Package: <https://github.com/jlabruna/novum-foundry/releases/latest/download/novum.zip>

Then open The Forge Bazaar, choose **Install From Manifest**, select **Game
System** if prompted, and paste the manifest URL above.

Because the system ID changed from the former test build, delete the old test
world/system and create a fresh world using **Novum**.
