export function registerSystemSettings() {
  game.settings.register("novum", "schemaVersion", {
    name: "Novum schema version",
    scope: "world",
    config: false,
    type: Number,
    default: 1
  });

  game.settings.register("novum", "playtestContentVersion", {
    name: "Imported playtest content version",
    scope: "world",
    config: false,
    type: String,
    default: ""
  });

  game.settings.register("novum", "promptForPlaytestContent", {
    name: "Prompt to import Novum playtest content",
    hint: "A GM is prompted once to import the organised T1–T4 playtest gear and premade Actors.",
    scope: "world",
    config: true,
    type: Boolean,
    default: true
  });

  game.settings.register("novum", "debugCards", {
    name: "Keep expanded roll breakdowns",
    hint: "Attack cards open with their full calculation visible.",
    scope: "client",
    config: true,
    type: Boolean,
    default: true
  });

  game.settings.register("novum", "rangeOverlayActivation", {
    name: "Range overlay activation",
    hint: "Toggle keeps the overlay visible until pressed again. Hold shows it only while the keybinding is held.",
    scope: "client",
    config: true,
    type: String,
    choices: { toggle: "Toggle", hold: "Hold" },
    default: "toggle",
    onChange: () => Hooks.callAll("novumRangeOverlayRefresh")
  });

  const colours = {
    Close: "#C58A5B",
    Medium: "#D3AE68",
    Long: "#6E99A3",
    Extreme: "#A65D5D"
  };
  for (const [band, defaultColour] of Object.entries(colours)) {
    game.settings.register("novum", `rangeOverlay${band}Colour`, {
      name: `${band} range colour`,
      hint: `Hex colour used for the ${band.toLowerCase()} range zone.`,
      scope: "client",
      config: true,
      type: String,
      default: defaultColour,
      onChange: () => Hooks.callAll("novumRangeOverlayRefresh")
    });
  }

  game.settings.register("novum", "rangeOverlayOpacity", {
    name: "Range overlay opacity",
    hint: "Shared fill opacity for all weapon range zones.",
    scope: "client",
    config: true,
    type: Number,
    range: { min: 0.02, max: 0.35, step: 0.01 },
    default: 0.12,
    onChange: () => Hooks.callAll("novumRangeOverlayRefresh")
  });
}
