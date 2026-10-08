import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Opening } from "../model.ts";
import type { HassEntity, HomeAssistant } from "../types.ts";
import { eventRoles, exteriorDoor, historyRequest } from "./classify.ts";
import { createReplayHass, Replay, ReplayReadOnly, WS_ALLOWED } from "./replay-hass.ts";
import { buildTimeline } from "./timeline.ts";
import type { HistorySpec } from "./types.ts";

const DAY = 1_800_000_000;
const at = (s: number) => (DAY + s) * 1000;

function live() {
  const calls: unknown[] = [];
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}): HassEntity => ({ entity_id, state, attributes });
  const hass = {
    language: "de",
    entities: { "light.a": { entity_id: "light.a", area_id: "k" } },
    areas: { k: { area_id: "k", name: "Küche" } },
    devices: {},
    floors: {},
    config: { latitude: 52.52, longitude: 13.405 },
    states: {
      "light.a": st("light.a", "on", { friendly_name: "Lampe", supported_color_modes: ["color_temp"], brightness: 255, color_temp_kelvin: 6500 }),
      "cover.b": st("cover.b", "open", { friendly_name: "Rollo", current_position: 100, supported_features: 15 }),
      "sensor.t": st("sensor.t", "25.3", { unit_of_measurement: "°C", state_class: "measurement" }),
      "binary_sensor.gone": st("binary_sensor.gone", "on", { device_class: "door" }),
      "person.mia": st("person.mia", "home"),
      "device_tracker.phone": st("device_tracker.phone", "home"),
      "camera.c": st("camera.c", "idle", { entity_picture: "/api/camera_proxy/camera.c?token=x", friendly_name: "Kamera" }),
      "scene.s": st("scene.s", "unknown"),
      "sun.sun": st("sun.sun", "above_horizon", { elevation: 40, azimuth: 200, friendly_name: "Sonne" }),
    },
    connection: {
      subscribeMessage: async (_cb: unknown, msg: Record<string, unknown>) => {
        calls.push(["sub", msg.type]);
        return async () => undefined;
      },
    },
    callService: async (...args: unknown[]) => calls.push(["service", ...args]),
    callWS: async (msg: Record<string, unknown>) => calls.push(["ws", msg.type]),
  } as unknown as HomeAssistant;
  return { hass, calls };
}

const timeline = () =>
  buildTimeline([
    {
      day_start: DAY,
      end: DAY + 86400,
      oldest: null,
      keep_days: 10,
      entities: {
        "light.a": { t: [0, 3600, 7200], v: [0, 1, 0], tab: ["off", ["on", { brightness: 128, color_mode: "color_temp", color_temp_kelvin: 2700 }]] },
        "cover.b": { t: [0, 1000, 1030], v: [0, 1, 2], tab: [["open", { current_position: 100 }], ["closing", { current_position: 100 }], ["closed", { current_position: 0 }]] },
      },
      stats: { "sensor.t": { start: DAY, step: 300, mean: [20, 20.02, 20.04, 22] } },
      missing: ["binary_sensor.gone"],
    },
  ]);

test("replay: the live registries stay, the states are the past ones with the static attributes kept", () => {
  const { hass } = live();
  const r = new Replay(timeline(), { requested: ["light.a", "cover.b", "sensor.t", "binary_sensor.gone", "sun.sun"], location: { lat: 52.52, lon: 13.405 } });
  const h = r.hassAt(hass, at(4000));
  assert.equal(h.entities, hass.entities);
  assert.equal(h.areas, hass.areas);
  assert.equal(h.config, hass.config);
  assert.equal(h.language, "de");
  const light = h.states["light.a"];
  assert.equal(light.state, "on");
  // the past brightness and colour, the name and the colour modes from the live entity
  assert.deepEqual(light.attributes, { friendly_name: "Lampe", supported_color_modes: ["color_temp"], brightness: 128, color_mode: "color_temp", color_temp_kelvin: 2700 });
  assert.equal(light.last_changed, new Date(at(3600)).toISOString());
  // off: no live brightness left over
  const off = r.hassAt(hass, at(8000)).states["light.a"];
  assert.equal(off.state, "off");
  assert.equal(off.attributes.brightness, undefined);
  // nothing recorded: unknown, not the live state
  assert.equal(h.states["binary_sensor.gone"].state, "unknown");
  // people are not part of the past; cameras lose their live picture; the rest stays live
  assert.equal(h.states["person.mia"], undefined);
  assert.equal(h.states["device_tracker.phone"], undefined);
  assert.equal(h.states["camera.c"].attributes.entity_picture, undefined);
  assert.equal(h.states["camera.c"].attributes.friendly_name, "Kamera");
  assert.equal(h.states["scene.s"], hass.states["scene.s"]);
  // the sun where it stood (rounded to half a degree)
  const sun = h.states["sun.sun"];
  assert.equal(sun.attributes.elevation, Math.round((sun.attributes.elevation as number) * 2) / 2);
  assert.equal(sun.attributes.friendly_name, "Sonne");
});

test("replay: unchanged states stay the same objects; a tick without a change returns the same hass", () => {
  const { hass } = live();
  const r = new Replay(timeline(), { requested: ["light.a", "sensor.t"] });
  const h1 = r.hassAt(hass, at(4000));
  const h2 = r.hassAt(hass, at(4010));
  assert.equal(h2, h1);
  const h3 = r.hassAt(hass, at(7300));
  assert.notEqual(h3, h1);
  assert.notEqual(h3.states["light.a"], h1.states["light.a"]);
  // the temperature creeps from 20.00 to 20.04: still "20.0", the same object
  const a = r.hassAt(hass, at(160));
  const b = r.hassAt(hass, at(600));
  assert.equal(a.states["sensor.t"].state, "20.0");
  assert.equal(b.states["sensor.t"], a.states["sensor.t"]);
  // a live update that only changes a state keeps the replayed objects
  const moved = { ...hass, states: { ...hass.states, "sensor.t": { ...hass.states["sensor.t"], state: "26" } } };
  const c = r.hassAt(moved, at(600));
  assert.equal(c.states["sensor.t"], a.states["sensor.t"]);
  assert.equal(c.states["light.a"], a.states["light.a"]);
});

test("replay: a closing blind moves between its two reports", () => {
  const { hass } = live();
  const h = createReplayHass(hass, timeline(), at(1015), { requested: ["cover.b"] });
  assert.equal(h.states["cover.b"].state, "closing");
  assert.equal(h.states["cover.b"].attributes.current_position, 50);
  assert.equal(h.states["cover.b"].attributes.supported_features, 15);
});

test("replay: nothing can be switched – service calls throw and never reach Home Assistant", async () => {
  const { hass, calls } = live();
  const h = createReplayHass(hass, timeline(), at(4000), { requested: ["light.a"] });
  assert.throws(() => h.callService("light", "turn_off", { entity_id: "light.a" }), ReplayReadOnly);
  assert.throws(() => h.callService("homeassistant", "turn_on", {}), ReplayReadOnly);
  assert.throws(() => h.callWS({ type: "neonplan3d/building/save", building: {} }), ReplayReadOnly);
  assert.throws(() => h.callWS({ type: "call_service", domain: "light", service: "turn_on" }), ReplayReadOnly);
  assert.throws(() => h.callWS({ type: "execute_script", sequence: [] }), ReplayReadOnly);
  assert.throws(() => h.connection.subscribeMessage(() => undefined, { type: "subscribe_trigger" }), ReplayReadOnly);
  // reading is allowed
  await h.callWS({ type: "neonplan3d/building/get" });
  await h.callWS({ type: "history/history_during_period" });
  await h.connection.subscribeMessage(() => undefined, { type: "neonplan3d/building/subscribe" });
  assert.deepEqual(calls, [
    ["ws", "neonplan3d/building/get"],
    ["ws", "history/history_during_period"],
    ["sub", "neonplan3d/building/subscribe"],
  ]);
  for (const type of WS_ALLOWED) assert.ok(/\/(get|list|history|history_during_period|statistics_during_period)$/.test(type), type);
});

test("replay: history rows for the motion trail come from the fetched history", () => {
  const r = new Replay(timeline(), { requested: [] });
  const rows = r.rows(["light.a", "nothing.x"], at(3000), at(7200));
  assert.deepEqual(rows, { "light.a": [{ s: "off", lu: DAY }, { s: "on", lu: DAY + 3600 }, { s: "off", lu: DAY + 7200 }] });
});

test("the request: the view's entities and the rooms' devices, measurements as statistics, never people", () => {
  const { hass } = live();
  const b = emptyBuilding();
  const floor = newFloor("eg", "EG", 0);
  floor.rooms = [{ id: "r", name: "Küche", area_id: "k", points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "tiles" }];
  b.floors = [floor];
  b.presence = [{ person: "person.mia", sensor: "sensor.t" }];
  const spec: HistorySpec = { entities: ["cover.b", "person.mia", "device_tracker.phone", "camera.c", "sensor.t", "binary_sensor.gone"], openings: [], furniture: [], low: false };
  const req = historyRequest(hass, b, spec);
  assert.deepEqual(req.entities, ["cover.b", "binary_sensor.gone", "sun.sun", "light.a"]);
  // sensor.t is a presence sensor here: private
  assert.deepEqual(req.stats, []);
  b.presence = [];
  assert.deepEqual(historyRequest(hass, b, spec).stats, ["sensor.t"]);
  // a big home: the view's own entities first, up to the limit
  const few = historyRequest(hass, b, spec, 2);
  assert.deepEqual([...few.entities, ...few.stats], ["cover.b", "sensor.t"]);
});

test("roles: a front door, a room door, a garage door and windows from the openings; sensors by their class", () => {
  const b = emptyBuilding();
  const floor = newFloor("eg", "EG", 0);
  floor.rooms = [
    { id: "flur", name: "Flur", area_id: null, points: [[0, 0], [3, 0], [3, 3], [0, 3]], floor_material: "oak" },
    { id: "kueche", name: "Küche", area_id: null, points: [[3, 0], [7, 0], [7, 3], [3, 3]], floor_material: "tiles" },
  ];
  const o = (id: string, room_id: string, edge: number, type: Opening["type"], extra: Partial<Opening> = {}): Opening => ({ id, room_id, edge, offset: 1.5, width: 0.9, type, sill: 0, height: 2, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, tilt: null, contact2: null, ...extra }) as Opening;
  // the hall's bottom edge is outside, its right edge is the wall to the kitchen
  floor.openings = [o("front", "flur", 0, "door"), o("inner", "flur", 1, "door"), o("glass", "kueche", 1, "door", { style: "passage" }), o("win", "kueche", 2, "window"), o("gar", "kueche", 0, "garage")];
  b.floors = [floor];
  assert.equal(exteriorDoor(floor, floor.openings[0]), true);
  assert.equal(exteriorDoor(floor, floor.openings[1]), false);
  const spec: HistorySpec = {
    entities: [],
    openings: [
      ["front", { cover: null, contact: "binary_sensor.front", tilt: null }],
      ["inner", { cover: null, contact: "binary_sensor.inner", tilt: null }],
      ["win", { cover: "cover.win", contact: "binary_sensor.win", tilt: "binary_sensor.win_tilt" }],
      ["gar", { cover: "cover.gar", contact: null, tilt: null }],
    ],
    furniture: [],
    low: false,
  };
  const st = (id: string, cls?: string) => [id, { entity_id: id, state: "off", attributes: cls ? { device_class: cls } : {} }];
  const hass = { states: Object.fromEntries([st("binary_sensor.smoke", "smoke"), st("binary_sensor.pir", "motion"), st("lock.door"), st("vacuum.robo")]) } as unknown as HomeAssistant;
  const fetched = new Set(["binary_sensor.front", "binary_sensor.inner", "binary_sensor.win", "binary_sensor.win_tilt", "cover.win", "cover.gar", "binary_sensor.smoke", "binary_sensor.pir", "lock.door", "vacuum.robo"]);
  const roles = eventRoles(hass, b, spec, fetched);
  assert.equal(roles.get("binary_sensor.front"), "door");
  assert.equal(roles.get("binary_sensor.inner"), undefined);
  assert.equal(roles.get("binary_sensor.win"), "window");
  assert.equal(roles.get("binary_sensor.win_tilt"), "window");
  assert.equal(roles.get("cover.win"), undefined);
  assert.equal(roles.get("cover.gar"), "garage");
  assert.equal(roles.get("binary_sensor.smoke"), "smoke");
  assert.equal(roles.get("binary_sensor.pir"), "motion");
  assert.equal(roles.get("lock.door"), "lock");
  assert.equal(roles.get("vacuum.robo"), "robot");
});
