import { scenePixelsPerMetre } from "./range.mjs";

const BANDS = Object.freeze(["close", "medium", "long", "extreme"]);
const DEFAULT_COLOURS = Object.freeze({
  close: "#C58A5B",
  medium: "#D3AE68",
  long: "#6E99A3",
  extreme: "#A65D5D"
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
  if (!(result.close < result.medium && result.medium < result.long)) return null;
  if (range.extreme?.enabled) {
    const distance = Number(range.extreme.max);
    if (!Number.isFinite(distance) || distance <= Number(range.long.max)) return null;
    result.extreme = distance * pixelsPerMetre;
  }
  return result;
}

export function rangeZones(radii) {
  if (!radii) return [];
  const zones = [];
  let inner = 0;
  for (const band of BANDS) {
    const outer = Number(radii[band]);
    if (!Number.isFinite(outer)) continue;
    zones.push({ band, inner, outer });
    inner = outer;
  }
  return zones;
}

export function getReadiedRangedWeapon(actor) {
  return actor?.items
    ?.filter(item => item.type === "weapon" && item.system.kind === "ranged" && item.system.equipped)
    ?.sort((a, b) => a.sort - b.sort || a.name.localeCompare(b.name))[0] ?? null;
}

export function isRangeOverlayEnabled() {
  return enabled;
}

export function rangeOverlayKeyAction(mode, phase) {
  if (mode === "hold") return phase === "down" ? "enable" : "disable";
  return phase === "down" ? "toggle" : "none";
}

function clearGraphics() {
  if (!graphics) return;
  if (graphics.parent) graphics.parent.removeChild(graphics);
  graphics.destroy?.({ children: true });
  graphics = null;
}

function setting(key, fallback) {
  try {
    return game.settings.get("novum", key) ?? fallback;
  } catch {
    return fallback;
  }
}

function colourNumber(value, fallback) {
  const match = /^#?([0-9a-f]{6})$/i.exec(String(value ?? ""));
  return Number.parseInt(match?.[1] ?? fallback.slice(1), 16);
}

function bandStyle(band) {
  const fallback = DEFAULT_COLOURS[band];
  const configuredOpacity = Number(setting("rangeOverlayOpacity", 0.12));
  const opacity = Number.isFinite(configuredOpacity) ? configuredOpacity : 0.12;
  return {
    colour: colourNumber(setting(`rangeOverlay${band[0].toUpperCase()}${band.slice(1)}Colour`, fallback), fallback),
    alpha: Math.max(0.02, Math.min(0.35, opacity))
  };
}

function drawAnnulus(target, x, y, inner, outer, colour, alpha, width = 2) {
  if (typeof target.circle === "function" && typeof target.fill === "function" && typeof target.cut === "function") {
    target.circle(x, y, outer).fill({ color: colour, alpha });
    if (inner > 0) target.circle(x, y, inner).cut();
    target.circle(x, y, outer).stroke({ color: colour, alpha: 0.9, width });
    if (inner > 0) target.circle(x, y, inner).stroke({ color: colour, alpha: 0.55, width: 1 });
    return;
  }

  if (typeof target.beginHole === "function") {
    target.beginFill?.(colour, alpha);
    target.drawCircle?.(x, y, outer);
    if (inner > 0) {
      target.beginHole();
      target.drawCircle?.(x, y, inner);
      target.endHole();
    }
    target.endFill?.();
  }
  target.lineStyle?.(width, colour, 0.9);
  target.drawCircle?.(x, y, outer);
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

  const radii = rangeRadii(weapon.system.range, scenePixelsPerMetre(canvas.scene, canvas.grid));
  if (!radii || !globalThis.PIXI?.Graphics || !canvas.interface) {
    if (notify) ui.notifications.warn("Range bands are unavailable on this Scene.");
    return false;
  }

  graphics = new PIXI.Graphics();
  graphics.name = "novum-range-overlay";
  graphics.eventMode = "none";
  graphics.zIndex = 5;

  const { x, y } = token.center;
  for (const zone of rangeZones(radii).reverse()) {
    const style = bandStyle(zone.band);
    drawAnnulus(graphics, x, y, zone.inner, zone.outer, style.colour, style.alpha, zone.band === "extreme" ? 2 : 3);
  }
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
      const action = rangeOverlayKeyAction(setting("rangeOverlayActivation", "toggle"), "down");
      toggleRangeOverlay(action === "enable" ? true : undefined);
      return true;
    },
    onUp: () => {
      const action = rangeOverlayKeyAction(setting("rangeOverlayActivation", "toggle"), "up");
      if (action === "disable") toggleRangeOverlay(false);
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
  Hooks.on("novumRangeOverlayRefresh", () => refreshRangeOverlay());
  Hooks.on("controlToken", () => refreshRangeOverlay());
  Hooks.on("updateToken", () => refreshRangeOverlay());
  for (const hook of ["createItem", "updateItem", "deleteItem"]) {
    Hooks.on(hook, item => {
      if (item.type === "weapon") refreshRangeOverlay();
    });
  }
}
