import assert from "node:assert/strict";
import { test } from "node:test";
import { pinKey } from "./pin-key.ts";

test("two radiators on one thermostat get a pin each (#932)", () => {
  assert.notEqual(pinKey({ id: "climate.living", furnitureId: "radiator_a" }), pinKey({ id: "climate.living", furnitureId: "radiator_b" }));
});

test("a device placed on its own keeps its entity as key", () => {
  assert.equal(pinKey({ id: "sensor.temp" }), "sensor.temp");
});
