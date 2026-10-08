import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor } from "../model.ts";
import type { HomeAssistant } from "../types.ts";
import { historyRequest, locationLike, personalDevices } from "./classify.ts";

function hass(): HomeAssistant {
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes });
  return {
    language: "de",
    areas: { schlafzimmer: { area_id: "schlafzimmer", name: "Schlafzimmer" } },
    devices: {
      phone: { id: "phone", area_id: "schlafzimmer" },
      car: { id: "car", area_id: "schlafzimmer" },
      lamp: { id: "lamp", area_id: "schlafzimmer" },
    },
    entities: {
      "device_tracker.pixel": { entity_id: "device_tracker.pixel", device_id: "phone" },
      "sensor.pixel_battery_level": { entity_id: "sensor.pixel_battery_level", device_id: "phone" },
      "sensor.pixel_geocoded_location": { entity_id: "sensor.pixel_geocoded_location", device_id: "phone", translation_key: "geocoded_location" },
      "binary_sensor.pixel_is_charging": { entity_id: "binary_sensor.pixel_is_charging", device_id: "phone" },
      "sensor.ev_position": { entity_id: "sensor.ev_position", device_id: "car" },
      "sensor.ev_soc": { entity_id: "sensor.ev_soc", device_id: "car" },
      "sensor.ev_wifi": { entity_id: "sensor.ev_wifi", device_id: "car" },
      "light.bett": { entity_id: "light.bett", device_id: "lamp" },
    },
    states: {
      "person.anna": st("person.anna", "home", { device_trackers: ["device_tracker.pixel"] }),
      "device_tracker.pixel": st("device_tracker.pixel", "home", { latitude: 1, longitude: 2 }),
      "sensor.pixel_battery_level": st("sensor.pixel_battery_level", "80", { device_class: "battery" }),
      "sensor.pixel_geocoded_location": st("sensor.pixel_geocoded_location", "Hauptstr. 1"),
      "binary_sensor.pixel_is_charging": st("binary_sensor.pixel_is_charging", "on"),
      "sensor.ev_position": st("sensor.ev_position", "ok", { latitude: 52, longitude: 9 }),
      "sensor.ev_soc": st("sensor.ev_soc", "70", { device_class: "battery" }),
      "sensor.ev_wifi": st("sensor.ev_wifi", "MyNet", { friendly_name: "EV WiFi SSID" }),
      "light.bett": st("light.bett", "off"),
    },
  } as unknown as HomeAssistant;
}

test("privacy: places and the devices people carry are never fetched, they read unknown instead", () => {
  const h = hass();
  const building = emptyBuilding();
  const floor = newFloor("eg", "EG", 0);
  floor.rooms.push({ id: "r1", name: "Schlafzimmer", area_id: "schlafzimmer", points: [[0, 0], [4, 0], [4, 4], [0, 4]] } as never);
  building.floors = [floor];
  assert.equal(locationLike(h, "sensor.pixel_geocoded_location"), true);
  assert.equal(locationLike(h, "sensor.ev_position"), true);
  assert.equal(locationLike(h, "sensor.ev_wifi"), true);
  assert.equal(locationLike(h, "sensor.ev_soc"), false);
  assert.deepEqual([...personalDevices(h)], ["phone"]);
  const req = historyRequest(h, building, { entities: [], openings: [], furniture: [], low: false });
  const fetched = [...req.entities, ...req.stats];
  assert.deepEqual(fetched.sort(), ["light.bett", "sensor.ev_soc", "sun.sun"].filter((id) => !!h.states[id]).sort());
  assert.deepEqual(req.hidden.sort(), ["binary_sensor.pixel_is_charging", "sensor.ev_position", "sensor.ev_wifi", "sensor.pixel_battery_level", "sensor.pixel_geocoded_location"]);
  // a person's tracker is no car, also when a parking spot names it
  const withCar = historyRequest(h, building, { entities: [], openings: [], furniture: [], low: false, cars: ["device_tracker.pixel"] });
  assert.deepEqual(withCar.cars, []);
});
