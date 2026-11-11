import assert from "node:assert/strict";
import { test } from "node:test";
import { phaseOf, resolveStyle, styleFromText, STYLES } from "./looks.ts";

const at = (h: number, m = 0) => new Date(2026, 10, 12, h, m);

test("every style has a unique id and a base look", () => {
  assert.equal(new Set(STYLES.map((s) => s.id)).size, STYLES.length);
  for (const s of STYLES) assert.ok(["neon", "blueprint", "day"].includes(s.base), s.id);
});

test("phase by the sun: day while it is up, evening after sunset until the night time, night before sunrise", () => {
  assert.equal(phaseOf(null, at(14), true), "day");
  assert.equal(phaseOf(null, at(18, 30), false), "evening");
  assert.equal(phaseOf(null, at(23, 30), false), "night");
  assert.equal(phaseOf(null, at(6), false), "night");
  assert.equal(phaseOf({ style_night_at: "22:00" }, at(22, 15), false), "night");
});

test("phase by the clock, also when the sun is unknown", () => {
  const plan = { style_switch: "time" as const, style_morning_at: "06:30", style_evening_at: "17:00", style_night_at: "22:30" };
  assert.equal(phaseOf(plan, at(6, 15), true), "night");
  assert.equal(phaseOf(plan, at(7), true), "day");
  assert.equal(phaseOf(plan, at(17, 30), true), "evening");
  assert.equal(phaseOf(plan, at(23), true), "night");
  assert.equal(phaseOf(null, at(19), null), "evening");
});

test("a screen's own style; auto keeps the old sun rule; unknown falls back to neon", () => {
  assert.equal(resolveStyle({ choice: "cozy", now: at(20), sunUp: false }), "cozy");
  assert.equal(resolveStyle({ choice: "auto", now: at(12), sunUp: true }), "day");
  assert.equal(resolveStyle({ choice: "auto", now: at(22), sunUp: false }), "neon");
  assert.equal(resolveStyle({ choice: "nonsense", now: at(12), sunUp: true }), "neon");
  assert.equal(resolveStyle({ choice: null, now: at(12), sunUp: true }), "neon");
});

test("the house plan: day, evening, night with fallbacks", () => {
  const plan = { style_day: "cozy", style_evening: "evening", style_night: "focus" };
  assert.equal(resolveStyle({ choice: "house", plan, now: at(12), sunUp: true }), "cozy");
  assert.equal(resolveStyle({ choice: "house", plan, now: at(20), sunUp: false }), "evening");
  assert.equal(resolveStyle({ choice: "house", plan, now: at(23, 30), sunUp: false }), "focus");
  // only a day style: it stays all day and night
  assert.equal(resolveStyle({ choice: "house", plan: { style_day: "warm" }, now: at(23, 30), sunUp: false }), "warm");
  // no plan at all: neon
  assert.equal(resolveStyle({ choice: "house", now: at(12), sunUp: true }), "neon");
});

test("a card's own evening and night styles", () => {
  assert.equal(resolveStyle({ choice: "cozy", evening: "evening", now: at(12), sunUp: true }), "cozy");
  assert.equal(resolveStyle({ choice: "cozy", evening: "evening", now: at(20), sunUp: false }), "evening");
  assert.equal(resolveStyle({ choice: "cozy", evening: "evening", now: at(23, 30), sunUp: false }), "evening");
  assert.equal(resolveStyle({ choice: "cozy", evening: "evening", night: "neon", now: at(23, 30), sunUp: false }), "neon");
});

test("a helper entity and an override win; names match loosely", () => {
  assert.equal(styleFromText("Wohnlich Abend"), "evening");
  assert.equal(styleFromText("  architekturmodell "), "model");
  assert.equal(styleFromText("Gemütlich"), "cozy");
  assert.equal(styleFromText("nothing"), null);
  assert.equal(resolveStyle({ choice: "neon", entityState: "Pastell", now: at(12), sunUp: true }), "pastel");
  assert.equal(resolveStyle({ choice: "neon", entityState: "unknown", now: at(12), sunUp: true }), "neon");
  assert.equal(resolveStyle({ choice: "neon", entityState: "Pastell", override: "synth", now: at(12), sunUp: true }), "synth");
  assert.equal(resolveStyle({ choice: "neon", names: { cozy: ["Kuschelig"] }, entityState: "kuschelig", now: at(12), sunUp: true }), "cozy");
});

test("own styles: listed, resolved, named by voice; gone again when the plan has none", async () => {
  const { setCustomStyles, allStyles, styleById: byId } = await import("./looks.ts");
  setCustomStyles([{ id: "my_pink", name: "Synthwave Pink", base: "neon", palette: { line: "#ff66cc", dark: "#100010", light: "#401040", hue: 0.3, lift: 0.05, contrast: 2.5 } }]);
  assert.equal(allStyles().length, STYLES.length + 1);
  assert.equal(byId("my_pink")?.group, "custom");
  assert.equal(resolveStyle({ choice: "my_pink", now: at(12), sunUp: true }), "my_pink");
  assert.equal(styleFromText("synthwave pink"), "my_pink");
  // an id that does not look like an own one is not taken
  setCustomStyles([{ id: "cozy", name: "x", base: "day" } as never]);
  assert.equal(allStyles().length, STYLES.length);
  setCustomStyles(null);
  assert.equal(resolveStyle({ choice: "my_pink", now: at(12), sunUp: true }), "neon");
});
