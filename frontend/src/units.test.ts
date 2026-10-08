import assert from "node:assert/strict";
import { test } from "node:test";
import { areaText, formatImperial, lengthUnit, parseLength, unitLabel } from "./units.ts";
import type { HomeAssistant } from "./types.ts";

const near = (a: number | null, b: number) => assert.ok(a !== null && Math.abs(a - b) < 1e-4, `${a} ≈ ${b}`);

test("feet and inches are read the way people type them (#117)", () => {
  near(parseLength(`8'2"`, "imperial"), 8 * 0.3048 + 2 * 0.0254);
  near(parseLength(`8' 2.5"`, "imperial"), 8 * 0.3048 + 2.5 * 0.0254);
  near(parseLength("8ft 2in", "imperial"), 8 * 0.3048 + 2 * 0.0254);
  near(parseLength("8' 2", "imperial"), 8 * 0.3048 + 2 * 0.0254);
  near(parseLength("98in", "imperial"), 98 * 0.0254);
  near(parseLength(`98"`, "imperial"), 98 * 0.0254);
  near(parseLength("8.2ft", "imperial"), 8.2 * 0.3048);
  near(parseLength("8,5", "imperial"), 8.5 * 0.3048);
  // metric works in both, and a bare number in metric is metres
  near(parseLength("2.5m", "imperial"), 2.5);
  near(parseLength("250cm", "metric"), 2.5);
  near(parseLength("2,45", "metric"), 2.45);
  assert.equal(parseLength("abc", "imperial"), null);
  assert.equal(parseLength("8 feet tall", "imperial"), null);
  assert.equal(parseLength("", "imperial"), null);
});

test("lengths show as feet and inches, areas in square feet", () => {
  assert.equal(formatImperial(8 * 0.3048 + 2.4 * 0.0254), `8' 2.4"`);
  assert.equal(formatImperial(0.3048 * 3), `3'`);
  assert.equal(formatImperial(0.2794), `11"`);
  assert.equal(formatImperial(2.5, 1), `8' 2"`);
  assert.equal(areaText(10, "imperial", String), "107.6 ft²");
  assert.equal(areaText(10, "metric", (v) => v.toFixed(1)), "10.0 m²");
  assert.equal(unitLabel("Height (m)", "imperial"), "Height (ft)");
  assert.equal(unitLabel("Offset (m, + = right)", "imperial"), "Offset (ft, + = right)");
  assert.equal(unitLabel("Height (m)", "metric"), "Height (m)");
});

test("automatic follows Home Assistant's unit system; the plan's setting wins", () => {
  const us = { config: { unit_system: { length: "mi" } } } as unknown as HomeAssistant;
  const eu = { config: { unit_system: { length: "km" } } } as unknown as HomeAssistant;
  assert.equal(lengthUnit(us, null), "imperial");
  assert.equal(lengthUnit(eu, undefined), "metric");
  assert.equal(lengthUnit(us, "metric"), "metric");
  assert.equal(lengthUnit(undefined, null), "metric");
});
