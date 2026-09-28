const CONTENT_VERSION = "0.1.1";

async function getOrCreateFolder(name, type, parent = null) {
  const existing = game.folders.find(folder => folder.name === name && folder.type === type && (folder.folder?.id ?? null) === (parent?.id ?? null));
  if (existing) return existing;
  return Folder.create({ name, type, folder: parent?.id ?? null, color: type === "Actor" ? "#D9A75C" : "#3D4447" });
}

function seedId(document) {
  return document.getFlag("novum", "seedId");
}

async function createWorldItems(payload, itemFolders) {
  let created = 0;
  let skipped = 0;
  for (const source of payload.items) {
    const existing = game.items.find(item => seedId(item) === source.seedId);
    if (existing) {
      skipped += 1;
      continue;
    }
    const data = foundry.utils.deepClone(source.document);
    data.folder = itemFolders.get(Number(source.tier)).id;
    data.flags = foundry.utils.mergeObject(data.flags ?? {}, { novum: { seedId: source.seedId, playtest: true } });
    await Item.implementation.create(data);
    created += 1;
  }
  return { created, skipped };
}

async function createActors(payload, actorFolders) {
  let created = 0;
  let skipped = 0;
  for (const source of payload.actors) {
    const existing = game.actors.find(actor => seedId(actor) === source.seedId);
    if (existing) {
      skipped += 1;
      continue;
    }
    const data = foundry.utils.deepClone(source.document);
    data.folder = actorFolders.get(`${source.type}-${source.tier}`).id;
    data.flags = foundry.utils.mergeObject(data.flags ?? {}, { novum: { seedId: source.seedId, playtest: true } });
    await Actor.implementation.create(data);
    created += 1;
  }
  return { created, skipped };
}

export async function importPlaytestContent() {
  if (!game.user.isGM) return ui.notifications.warn("Only a GM can import playtest content.");
  const response = await fetch("systems/novum/data/playtest-content.json");
  if (!response.ok) throw new Error(`Unable to load Novum playtest content (${response.status}).`);
  const payload = await response.json();

  const itemRoot = await getOrCreateFolder("Novum Playtest Gear", "Item");
  const actorRoot = await getOrCreateFolder("Novum Playtest Actors", "Actor");
  const characterRoot = await getOrCreateFolder("Characters", "Actor", actorRoot);
  const npcRoot = await getOrCreateFolder("NPCs", "Actor", actorRoot);

  const itemFolders = new Map();
  const actorFolders = new Map();
  for (const tier of [1, 2, 3, 4]) {
    itemFolders.set(tier, await getOrCreateFolder(`T${tier} Gear`, "Item", itemRoot));
    actorFolders.set(`character-${tier}`, await getOrCreateFolder(`T${tier} Characters`, "Actor", characterRoot));
    actorFolders.set(`npc-${tier}`, await getOrCreateFolder(`T${tier} NPCs`, "Actor", npcRoot));
  }

  const items = await createWorldItems(payload, itemFolders);
  const actors = await createActors(payload, actorFolders);
  await game.settings.set("novum", "playtestContentVersion", payload.version ?? CONTENT_VERSION);
  ui.notifications.info(`Novum content ready: ${items.created} gear items and ${actors.created} Actors created.`);
  return { items, actors, version: payload.version };
}

export async function promptForPlaytestContent() {
  if (!game.user.isGM) return;
  if (!game.settings.get("novum", "promptForPlaytestContent")) return;
  if (game.settings.get("novum", "playtestContentVersion")) return;

  const proceed = await foundry.applications.api.DialogV2.confirm({
    window: { title: game.i18n.localize("NOVUM.ImportTitle") },
    content: `<p>${game.i18n.localize("NOVUM.ImportPrompt")}</p><p class="hint">The importer is idempotent: rerunning it will skip content already present.</p>`,
    yes: { label: game.i18n.localize("NOVUM.ImportConfirm"), icon: "fa-solid fa-box-open" },
    no: { label: game.i18n.localize("NOVUM.ImportLater") },
    rejectClose: false,
    modal: true
  });
  if (proceed) await importPlaytestContent();
}

export { CONTENT_VERSION };
