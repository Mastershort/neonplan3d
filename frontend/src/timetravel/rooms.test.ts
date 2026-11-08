import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor } from "../model.ts";
import type { HomeAssistant } from "../types.ts";
import { roomEntities } from "./rooms.ts";

test("an outdoor area with an area of its own is a room of the time travel: its sensors replay (#974)", () => {
  const floor = newFloor("eg", "EG", 0);
  floor.rooms = [{ id: "living", name: "Wohnen", area_id: "living", floor_material: "wood", points: [[0, 0], [5, 0], [5, 4], [0, 4]] }];
  floor.outdoor = [
    { id: "balcony", type: "balcony", area_id: "balcony", name: "Balkon", points: [[5, 0], [7, 0], [7, 4], [5, 4]] },
    // a lawn without an area is no room
    { id: "lawn", type: "lawn", points: [[0, 4], [7, 4], [7, 9], [0, 9]] },
  ];
  const b = { ...emptyBuilding(), floors: [floor] };
  const hass = {
    entities: { "sensor.living_temp": { entity_id: "sensor.living_temp", area_id: "living" }, "sensor.balcony_temp": { entity_id: "sensor.balcony_temp", area_id: "balcony" } },
    states: {
      "sensor.living_temp": { entity_id: "sensor.living_temp", state: "21", attributes: { device_class: "temperature" } },
      "sensor.balcony_temp": { entity_id: "sensor.balcony_temp", state: "8", attributes: { device_class: "temperature" } },
    },
  } as unknown as HomeAssistant;
  const rooms = roomEntities(hass, b, { openings: [], furniture: [] });
  assert.deepEqual(rooms.map((r) => r.roomId), ["living", "balcony"]);
  assert.deepEqual(rooms[1].temps, ["sensor.balcony_temp"]);
  assert.equal(rooms[1].name, "Balkon");
});
