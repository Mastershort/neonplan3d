import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Room } from "./model.ts";
import { planSummary } from "./plan-summary.ts";
import type { HomeAssistant } from "./types.ts";

const room = (id: string, area: string | null, x0: number, panel: string[]): Room => ({ id, name: id, area_id: area, points: [[x0, 0], [x0 + 4, 0], [x0 + 4, 4], [x0, 4]], panel }) as Room;

test("a plan at a glance: lights on, open windows, the mean temperature and the warnings of its rooms", () => {
  const b = emptyBuilding();
  b.floors = [{ ...newFloor("gh", "Gartenhaus", 0), rooms: [room("werk", "werk", 0, ["light.werk", "binary_sensor.tor", "climate.werk"]), room("lounge", null, 4, ["light.lounge", "climate.lounge"])] }];
  const st = (state: string, attributes: Record<string, unknown> = {}) => ({ state, attributes, last_changed: "" });
  const hass = {
    language: "de",
    // the water sensor sits in the workshop's area
    entities: { "binary_sensor.wasser": { entity_id: "binary_sensor.wasser", area_id: "werk" } },
    devices: {},
    states: {
      "light.werk": st("on"),
      "light.lounge": st("off"),
      "binary_sensor.tor": st("on", { device_class: "door" }),
      "binary_sensor.wasser": st("on", { device_class: "moisture" }),
      "climate.werk": st("heat", { current_temperature: 12 }),
      "climate.lounge": st("heat", { current_temperature: 15 }),
      "alarm_control_panel.haus": st("triggered"),
    },
  } as unknown as HomeAssistant;
  const s = planSummary(hass, b);
  assert.equal(s.rooms, 2);
  assert.equal(s.lightsOn, 1);
  assert.equal(s.open, 1);
  assert.equal(s.temp, 13.5);
  // the house-wide alarm panel is not the garden house's
  assert.deepEqual(
    s.alerts.map((a) => [a.kind, a.roomId]),
    [["water", "werk"]],
  );
});
