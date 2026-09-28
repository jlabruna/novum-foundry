const COLOURS = Object.freeze({
  close: 0xF2EEE6,
  medium: 0xC58A5B,
  long: 0xA7653C
});

let enabled = false;
let graphics = null;

export function rangeRadii(range, pixelsPerMetre) {
  if (!range || !Number.isFinite(pixelsPerMetre) || pixelsPerMetre <= 0) return null;
  const result = {};
  for (const band of ["close", "medium", "long"]) {
    const distance = Number(range[band]?.max);
    if (!Number.isFinite(distance) || distance <= 0) return null;
    result[band] = distance * pixelsPerMetre;
  }
  return result;
}

export function getReadiedRangedWeapon(actor) {
  return actor?.items
    ?.filter(item => item.type === "weapon" && item.system.kind === "ranged" && item.system.equipped)
    ?.sort((a, b) => a.sort - b.sort || a.name.localeCompare(b.name))[0] ?? null;
}

export function isRangeOverlayEnabled() {
  return enabled;
}

function clearGraphics() {
  if (!graphics) return;
  if (graphics.parent) graphics.parent.removeChild(graphics);
  graphics.destroy?.({ children: true });
  graphics = null;
}

function drawCircle(target, x, y, radius, colour, alpha, width = 2) {
  if (typeof target.circle === "function" && typeof target.fill === "function") {
    target.circle(x, y, radius).fill({ color: colour, alpha });
    target.circle(x, y, radius).stroke({ color: colour, alpha: 0.82, width });
    return;
  }

  target.beginFill?.(colour, alpha);
  target.drawCircle?.(x, y, radius);
  target.endFill?.();
  target.lineStyle?.(width, colour, 0.82);
  target.drawCircle?.(x, y, radius);
}

export function refreshRangeOverlay({ notify = false } = {}) {
  clearGraphics();
  if (!enabled || !canvas?.ready) return false;

  const controlled = canvas.tokens?.controlled ?? [];
  if (controlled.length !== 1) {
    if (notify) ui.notifications.warn("Select exactly one token to display weapon range bands.");
    return false;
  }

  const token = controlled[0];
  const weapon = getReadiedRangedWeapon(token.actor);
  if (!weapon) {
    if (notify) ui.notifications.warn("The selected token has no readied ranged weapon.");
    return false;
  }

  const sceneDistance = Number(canvas.scene?.grid?.distance);
  const gridSize = Number(canvas.grid?.size);
  const radii = rangeRadii(weapon.system.range, gridSize / sceneDistance);
  if (!radii || !globalThis.PIXI?.Graphics || !canvas.interface) {
    if (notify) ui.notifications.warn("Range bands are unavailable on this Scene.");
    return false;
  }

  graphics = new PIXI.Graphics();
  graphics.name = "novum-range-overlay";
  graphics.eventMode = "none";
  graphics.zIndex = 5;

  const { x, y } = token.center;
  drawCircle(graphics, x, y, radii.long, COLOURS.long, 0.055, 3);
  drawCircle(graphics, x, y, radii.medium, COLOURS.medium, 0.07, 3);
  drawCircle(graphics, x, y, radii.close, COLOURS.close, 0.085, 3);
  canvas.interface.addChild(graphics);
  return true;
}

export function toggleRangeOverlay(force) {
  enabled = typeof force === "boolean" ? force : !enabled;
  const shown = refreshRangeOverlay({ notify: enabled });
  if (enabled && !shown) enabled = false;
  ui.controls?.render?.({ force: true });
  return enabled;
}

export function registerRangeOverlay() {
  game.keybindings.register("novum", "toggleRangeOverlay", {
    name: "NOVUM.RangeOverlay",
    hint: "NOVUM.RangeOverlayHint",
    editable: [{ key: "KeyR", modifiers: ["Shift"] }],
    onDown: () => {
      toggleRangeOverlay();
      return true;
    },
    restricted: false,
    precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL
  });

  Hooks.on("getSceneControlButtons", controls => {
    if (!controls.tokens?.tools) return;
    controls.tokens.tools.novumRangeOverlay = {
      name: "novumRangeOverlay",
      title: "NOVUM.RangeOverlay",
      icon: "fa-solid fa-bullseye",
      order: Object.keys(controls.tokens.tools).length,
      button: true,
      active: enabled,
      onChange: () => toggleRangeOverlay()
    };
  });

  Hooks.on("canvasReady", () => refreshRangeOverlay());
  Hooks.on("canvasTearDown", clearGraphics);
  Hooks.on("controlToken", () => refreshRangeOverlay());
  Hooks.on("updateToken", () => refreshRangeOverlay());
  for (const hook of ["createItem", "updateItem", "deleteItem"]) {
    Hooks.on(hook, item => {
      if (item.type === "weapon") refreshRangeOverlay();
    });
  }
}
