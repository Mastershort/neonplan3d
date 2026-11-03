import assert from "node:assert/strict";
import { test } from "node:test";
import { callCount, cleaningCall, everythingOff, roomOfArea } from "./room-actions.ts";
import { newFloor, type Floor, type Room } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

const room: Room = { id: "wohnen", name: "Wohnzimmer", area_id: "wohnzimmer", points: [[0, 0], [5, 0], [5, 5], [0, 5]], cleaning: "script.saug_wohnzimmer" } as Room;
const floor = (): Floor => ({
  ...newFloor("eg", "EG", 0),
  rooms: [room],
  furniture: [
    { id: "f1", type: "lamp_floor", x: 1, z: 1, rotation: 0, entity: "switch.stehlampe" },
    { id: "f2", type: "fridge", x: 2, z: 2, rotation: 0, entity: "switch.kuehlschrank" },
  ] as never,
});
const hass = (): HomeAssistant =>
  ({
    states: {
      "light.decke": { entity_id: "light.decke", state: "on", attributes: {} },
      "light.aus": { entity_id: "light.aus", state: "off", attributes: {} },
      "fan.luefter": { entity_id: "fan.luefter", state: "on", attributes: {} },
      "switch.stehlampe": { entity_id: "switch.stehlampe", state: "on", attributes: {} },
      "switch.kuehlschrank": { entity_id: "switch.kuehlschrank", state: "on", attributes: {} },
      "media_player.tv": { entity_id: "media_player.tv", state: "on", attributes: { device_class: "tv" } },
      "media_player.sonos": { entity_id: "media_player.sonos", state: "playing", attributes: {} },
      "script.saug_wohnzimmer": { entity_id: "script.saug_wohnzimmer", state: "off", attributes: {} },
    },
    entities: Object.fromEntries(
      ["light.decke", "light.aus", "fan.luefter", "media_player.tv", "media_player.sonos"].map((id) => [id, { entity_id: id, area_id: "wohnzimmer" }]),
    ),
    devices: {},
    areas: { wohnzimmer: { area_id: "wohnzimmer", name: "Wohnzimmer" } },
  }) as unknown as HomeAssistant;

test("room actions: everything off reaches lights, fans, the TV, a playing speaker and a lamp's switch – never the fridge", () => {
  const calls = everythingOff(hass(), floor(), room);
  const by = (d: string, s: string) => calls.find((c) => c.domain === d && c.service === s)?.data.entity_id;
  assert.deepEqual(by("light", "turn_off"), ["light.decke"]);
  assert.deepEqual(by("fan", "turn_off"), ["fan.luefter"]);
  assert.deepEqual(by("switch", "turn_off"), ["switch.stehlampe"]);
  assert.deepEqual(by("media_player", "turn_off"), ["media_player.tv"]);
  assert.deepEqual(by("media_player", "media_pause"), ["media_player.sonos"]);
  assert.equal(callCount(calls), 5);
});

test("room actions: the room's cleaning runs its script; a tablet's area finds its room", () => {
  assert.deepEqual(cleaningCall(hass(), room), { domain: "script", service: "turn_on", data: { entity_id: "script.saug_wohnzimmer" } });
  assert.equal(cleaningCall(hass(), { ...room, cleaning: null }), null);
  assert.equal(roomOfArea([floor()], "wohnzimmer")?.room.id, "wohnen");
  assert.equal(roomOfArea([floor()], "kueche"), null);
});
