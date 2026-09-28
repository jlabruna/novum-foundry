import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const css = await readFile(new URL("../styles/novum.css", import.meta.url), "utf8");

function luminance(hex) {
  const channels = hex.match(/[a-f\d]{2}/gi).map(value => Number.parseInt(value, 16) / 255)
    .map(value => value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrast(a, b) {
  const high = Math.max(luminance(a), luminance(b));
  const low = Math.min(luminance(a), luminance(b));
  return (high + 0.05) / (low + 0.05);
}

test("Novum dark surfaces have readable text and numeric values", () => {
  assert.ok(contrast("#fffaf2", "#181715") >= 7);
  assert.ok(contrast("#beb8ae", "#181715") >= 4.5);
  assert.match(css, /\.math-grid dd \{[^}]*color: var\(--novum-value\)/s);
  assert.match(css, /input,[\s\S]*color: var\(--novum-value\)/);
});

test("Novum ivory surfaces retain dark readable ink", () => {
  assert.ok(contrast("#181715", "#f2eee6") >= 7);
  assert.match(css, /--novum-surface-light: #f2eee6/);
  assert.match(css, /--novum-ink: #181715/);
});
