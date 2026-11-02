import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Furniture } from "./model.ts";
import { furnitureShown, showIfMet, showIfSignature } from "./show-if.ts";
import type { HomeAssistant } from "./types.ts";

const hass = (states: Record<string, string>) => ({ states: Object.fromEntries(Object.entries(states).map(([id, state]) => [id, { state, attributes: {} }])) }) as unknown as HomeAssistant;

test("only show while: states with commas, empty means on, numbers compared, ! turns it round", () => {
  const h = hass({ "input_boolean.xmas": "on", "sensor.season": "winter", "sensor.temp": "18.5", "sensor.none": "unknown" });
  assert.equal(showIfMet(h, { entity: "input_boolean.xmas" }), true, "empty: on");
  assert.equal(showIfMet(h, { entity: "sensor.season", state: "autumn, Winter" }), true, "a list, any case");
  assert.equal(showIfMet(h, { entity: "sensor.season", state: "!winter" }), false);
  assert.equal(showIfMet(h, { entity: "sensor.season", state: "! summer" }), true);
  assert.equal(showIfMet(h, { entity: "sensor.temp", state: "<20" }), true);
  assert.equal(showIfMet(h, { entity: "sensor.temp", state: ">=18,5" }), true, "a decimal comma");
  assert.equal(showIfMet(h, { entity: "sensor.temp", state: ">20" }), false);
  assert.equal(showIfMet(h, { entity: "sensor.none", state: "<20" }), false, "no number: no match");
  assert.equal(showIfMet(h, { entity: "input_boolean.gone" }), false, "an unknown entity keeps it hidden");
});

test("only show while: a piece without a condition always shows; the signature changes only when a piece comes or goes", () => {
  const tree = { id: "tree", show_if: { entity: "sensor.temp", state: "<20" } } as Furniture;
  const sofa = { id: "sofa" } as Furniture;
  const b = emptyBuilding();
  b.floors = [{ ...newFloor("eg", "EG", 0), furniture: [tree, sofa] }];
  assert.equal(furnitureShown(hass({}), sofa), true);
  const a = showIfSignature(hass({ "sensor.temp": "18" }), b);
  assert.equal(a, showIfSignature(hass({ "sensor.temp": "19" }), b), "another number, same outcome: nothing to draw again");
  assert.notEqual(a, showIfSignature(hass({ "sensor.temp": "21" }), b));
  assert.equal(showIfSignature(hass({}), { ...b, floors: [{ ...b.floors[0], furniture: [sofa] }] }), "", "no conditions: nothing to watch");
});
