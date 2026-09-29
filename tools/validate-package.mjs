import { access, readFile, readdir } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(await readFile(path.join(root, "system.json"), "utf8"));
if (manifest.id !== "novum") throw new Error("system.json id must be novum");
if (manifest.version !== "0.2.0") throw new Error("Unexpected system version");
if (manifest.compatibility.verified !== "14.368") throw new Error("Verified Foundry build must be 14.368");

const required = [
  "novum.mjs",
  "module/range-overlay.mjs",
  "module/progression.mjs",
  "styles/novum.css",
  "assets/branding/novum-logo-dark.webp",
  "assets/branding/novum-logo-light.webp",
  "lang/en.json",
  "data/playtest-content.json",
  "templates/actor/character-sheet.hbs",
  "templates/actor/npc-sheet.hbs",
  "templates/item/item-sheet.hbs",
  "templates/chat/attack-card.hbs"
];
for (const file of required) await access(path.join(root, file));

async function collect(dir) {
  const result = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if ([".git", "dist", "node_modules"].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...await collect(full));
    else if (entry.name.endsWith(".mjs")) result.push(full);
  }
  return result;
}

for (const file of await collect(root)) {
  const checked = spawnSync(process.execPath, ["--check", file], { encoding: "utf8" });
  if (checked.status !== 0) throw new Error(`Syntax check failed for ${path.relative(root, file)}\n${checked.stderr}`);
}

const data = JSON.parse(await readFile(path.join(root, "data/playtest-content.json"), "utf8"));
if (data.actors.length !== 48 || data.items.length !== 80) throw new Error("Seed content count mismatch");
for (const actor of data.actors) {
  const source = actor.document.prototypeToken?.texture?.src;
  const portrait = actor.document.img;
  if (!source?.startsWith("systems/novum/")) throw new Error(`Missing Novum token path for ${actor.document.name}`);
  if (!portrait?.startsWith("systems/novum/assets/portraits/")) throw new Error(`Missing Novum portrait path for ${actor.document.name}`);
  await access(path.join(root, source.replace("systems/novum/", "")));
  await access(path.join(root, portrait.replace("systems/novum/", "")));
}
console.log(`Validated Novum ${manifest.version}: ${data.items.length} Items, ${data.actors.length} Actors, Foundry ${manifest.compatibility.verified}.`);
