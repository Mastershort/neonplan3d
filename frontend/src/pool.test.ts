import assert from "node:assert/strict";
import { test } from "node:test";
import { poolEntities, poolRange, poolState, poolWaterGlow } from "./pool.ts";
import { poolShapePoints, poolWaterY, newFloor, polygonArea } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

function hassWith(states: Record<string, { state: string; attributes?: Record<string, unknown> }>): HomeAssistant {
  return {
    states: Object.fromEntries(Object.entries(states).map(([id, s]) => [id, { entity_id: id, state: s.state, attributes: s.attributes ?? {} }])),
    callService: async () => undefined,
    language: "de",
  } as unknown as HomeAssistant;
}

const POOL = {
  "sensor.pool_wassertemperatur": { state: "26.4", attributes: { device_class: "temperature", unit_of_measurement: "°C" } },
  "sensor.garten_temperatur": { state: "18", attributes: { device_class: "temperature", unit_of_measurement: "°C" } },
  "climate.pool_waermepumpe": { state: "heat", attributes: { temperature: 28, current_temperature: 26.1, hvac_action: "heating", target_temp_step: 0.5, min_temp: 15, max_temp: 35 } },
  "switch.pool_filterpumpe": { state: "on" },
  "light.pool": { state: "on", attributes: { brightness: 255, color_mode: "rgb", rgb_color: [0, 128, 255] } },
  "sensor.pool_ph": { state: "7.62", attributes: {} },
  "sensor.pool_redox": { state: "705", attributes: { unit_of_measurement: "mV" } },
  "cover.pool_abdeckung": { state: "open", attributes: { current_position: 70 } },
};

test("pool entities are found by name and role", () => {
  const e = poolEntities(hassWith(POOL), {});
  assert.deepEqual(e, {
    temperature: "sensor.pool_wassertemperatur",
    heater: "climate.pool_waermepumpe",
    pump: "switch.pool_filterpumpe",
    light: "light.pool",
    ph: "sensor.pool_ph",
    chlorine: "sensor.pool_redox",
    cover: "cover.pool_abdeckung",
  });
  // a chosen entity wins, "none" switches a role off
  const own = poolEntities(hassWith(POOL), { temperature: "sensor.garten_temperatur", cover: "none" });
  assert.equal(own.temperature, "sensor.garten_temperatur");
  assert.equal(own.cover, null);
});

test("pool state reads temperature, heat pump, pump, light, chemistry and cover", () => {
  const s = poolState(hassWith(POOL), {});
  assert.equal(s.temp, 26.4);
  assert.equal(s.heater?.kind, "climate");
  assert.equal(s.heater?.heating, true);
  assert.equal(s.heater?.target, 28);
  assert.equal(s.pump?.on, true);
  assert.equal(s.pump?.switchable, true);
  assert.deepEqual(s.light?.color, [0, 128 / 255, 1]);
  assert.equal(s.ph?.range, "warn");
  assert.equal(s.chlorine?.orp, true);
  assert.equal(s.chlorine?.range, "ok");
  assert.ok(Math.abs(s.cover!.closed - 0.3) < 1e-9);
  // the light's colour tints the water
  assert.deepEqual(poolWaterGlow(s).color, [0, 128 / 255, 1]);
});

test("without its own sensor the water temperature comes from the heat pump; a power sensor tells whether the pump runs", () => {
  const hass = hassWith({
    "climate.pool": { state: "heat", attributes: { temperature: 27, current_temperature: 25 } },
    "sensor.pool_pumpe_leistung": { state: "12", attributes: { unit_of_measurement: "W" } },
  });
  const s = poolState(hass, { pump: "sensor.pool_pumpe_leistung" });
  assert.equal(s.temp, 25);
  // no hvac_action: heating while on and below the target
  assert.equal(s.heater?.heating, true);
  assert.equal(s.pump?.on, false);
  assert.equal(s.pump?.switchable, false);
});

test("pool ranges", () => {
  assert.equal(poolRange("ph", 7.2), "ok");
  assert.equal(poolRange("ph", 7.7), "warn");
  assert.equal(poolRange("ph", 8.2), "bad");
  assert.equal(poolRange("orp", 580), "bad");
  assert.equal(poolRange("chlorine", 0.6), "ok");
  assert.equal(poolRange("chlorine", 0.05), "bad");
});

test("pool shapes keep inside their box; the water of an above-ground pool sits near its rim", () => {
  const round = poolShapePoints("round", 0, 0, 8, 4);
  assert.ok(round.every(([x, z]) => x >= 1.999 && x <= 6.001 && z >= -0.001 && z <= 4.001));
  assert.ok(Math.abs(polygonArea(round) - Math.PI * 4) < 0.1);
  const oval = poolShapePoints("oval", 0, 0, 8, 4);
  assert.ok(oval.every(([x, z]) => x >= -0.001 && x <= 8.001 && z >= -0.001 && z <= 4.001));
  // a stadium: 4 x 4 rectangle plus a circle of radius 2
  assert.ok(Math.abs(polygonArea(oval) - (16 + Math.PI * 4)) < 0.15);
  const floor = newFloor("eg", "EG", 0);
  assert.equal(poolWaterY(floor, { id: "p", type: "pool", points: [] }), -0.45);
  assert.ok(Math.abs(poolWaterY(floor, { id: "p", type: "pool", points: [], above: true, height: 1.3 }) - 0.95) < 1e-9);
});

test("gas and water meters come from the energy dashboard (sensors only)", async () => {
  const { proposeMeters } = await import("./energy.ts");
  assert.deepEqual(
    proposeMeters({ energy_sources: [{ type: "grid" }, { type: "gas", stat_energy_from: "sensor.gaszaehler" }, { type: "water", stat_energy_from: "external:water" }] }),
    { gas: "sensor.gaszaehler", water: null },
  );
});
