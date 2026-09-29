import { cp, mkdir, readFile, rm } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const staging = path.join(dist, "release-staging");
const browserRoot = path.join(dist, "browser-upload", "novum-foundry");
const packageRoot = path.join(staging, "novum");
const manifest = JSON.parse(await readFile(path.join(root, "system.json"), "utf8"));
const version = manifest.version;
const packageName = `novum-v${version}.zip`;
const packagePath = path.join(dist, packageName);

const sourceEntries = [
  ".gitignore", "CHANGELOG.md", "IMPLEMENTATION_REPORT.md", "README.md", "RELEASE_NOTES.md",
  "assets", "data", "docs", "lang", "module", "novum.mjs", "package.json", "styles",
  "system.json", "templates", "tests", "tools"
];
const runtimeEntries = ["assets", "data", "lang", "module", "novum.mjs", "styles", "system.json", "templates"];

await rm(path.join(dist, "browser-upload"), { recursive: true, force: true });
await rm(staging, { recursive: true, force: true });
await rm(path.join(dist, "novum.zip"), { force: true });
await rm(packagePath, { force: true });
await rm(path.join(dist, `novum-github-upload-v${version}.zip`), { force: true });
await mkdir(browserRoot, { recursive: true });
await mkdir(packageRoot, { recursive: true });

for (const entry of sourceEntries) await cp(path.join(root, entry), path.join(browserRoot, entry), { recursive: true });
for (const entry of runtimeEntries) await cp(path.join(root, entry), path.join(packageRoot, entry), { recursive: true });

function zip(cwd, output, folder) {
  const result = spawnSync("zip", ["-q", "-r", output, folder], { cwd, encoding: "utf8" });
  if (result.status !== 0) throw new Error(`zip failed: ${result.stderr || result.stdout}`);
}

zip(packageRoot, packagePath, ".");
zip(path.join(dist, "browser-upload"), path.join(dist, `novum-github-upload-v${version}.zip`), "novum-foundry");

const listing = spawnSync("unzip", ["-Z1", packagePath], { encoding: "utf8" });
if (listing.status !== 0) throw new Error(`Unable to inspect ${packageName}: ${listing.stderr || listing.stdout}`);
const manifestEntries = listing.stdout.split(/\r?\n/).filter(entry => entry === "system.json");
if (manifestEntries.length !== 1) throw new Error(`${packageName} must contain exactly one root-level system.json`);
await rm(staging, { recursive: true, force: true });

console.log(`Staged Novum v${version}:`);
console.log(`- ${path.relative(root, browserRoot)}`);
console.log(`- dist/novum-github-upload-v${version}.zip`);
console.log(`- dist/${packageName}`);
