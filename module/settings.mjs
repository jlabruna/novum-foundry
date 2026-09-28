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
}

