import assert from "node:assert/strict";
import { test } from "node:test";
import type { FurnitureLinks, OpeningEntities } from "./devices.ts";
import { emptyBuilding, newFloor } from "./model.ts";
import type { HomeAssistant } from "./types.ts";
import { watchedEntities } from "./watched.ts";

function setup() {
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes });
  const hass = {
    language: "de",
    areas: { kueche: { area_id: "kueche", name: "Küche" } },
    entities: {
      "light.kueche": { entity_id: "light.kueche", area_id: "kueche" },
      "sensor.kueche_temp": { entity_id: "sensor.kueche_temp", area_id: "kueche" },
      "binary_sensor.kueche_bewegung": { entity_id: "binary_sensor.kueche_bewegung", area_id: "kueche" },
    },
    states: {
      "light.kueche": st("light.kueche", "on"),
      "light.placed": st("light.placed", "off"),
      "sensor.kueche_temp": st("sensor.kueche_temp", "21.5", { device_class: "temperature" }),
      "binary_sensor.kueche_bewegung": st("binary_sensor.kueche_bewegung", "off", { device_class: "motion" }),
      "binary_sensor.fenster": st("binary_sensor.fenster", "off", { device_class: "window" }),
      "weather.b": st("weather.b", "sunny"),
      "weather.a": st("weather.a", "rainy"),
    },
  } as unknown as HomeAssistant;
  const b = emptyBuilding();
  const floor = newFloor("eg", "EG", 0);
  floor.rooms = [{ id: "k", name: "Küche", area_id: "kueche", points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "tiles" }];
  floor.placements = [{ entity_id: "light.placed", x: 1, z: 1, y: null }];
  b.floors = [floor];
  const openings = new Map<string, OpeningEntities>([["w", { cover: null, contact: "binary_sensor.fenster", tilt: null }]]);
  const furniture = new Map<string, FurnitureLinks>();
  return { hass, b, openings, furniture };
}

test("the watched entities: placed devices, openings, lights of the rooms, motion, weather and the sun, each once", () => {
  const { hass, b, openings, furniture } = setup();
  const ids = watchedEntities(hass, b, { openings, furniture, heat: false, warnings: ["binary_sensor.fenster"], weatherEntityId: null });
  assert.deepEqual(ids, ["light.placed", "binary_sensor.fenster", "light.kueche", "binary_sensor.kueche_bewegung", "weather.a", "sun.sun"]);
});

test("the room sensors are only watched for the heatmap or the room values; a chosen weather entity wins", () => {
  const { hass, b, openings, furniture } = setup();
  const ids = watchedEntities(hass, b, { openings, furniture, heat: true, warnings: [], weatherEntityId: "weather.b" });
  assert.ok(ids.includes("sensor.kueche_temp"));
  assert.ok(ids.includes("weather.b"));
  assert.ok(!ids.includes("weather.a"));
});
