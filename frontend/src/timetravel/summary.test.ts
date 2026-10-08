import assert from "node:assert/strict";
import { test } from "node:test";
import type { EnergySummary } from "../energy.ts";
import { emptyBuilding, newFloor, type Opening } from "../model.ts";
import type { HassEntity, HomeAssistant } from "../types.ts";
import type { Role } from "./classify.ts";
import type { TTEvent } from "./events.ts";
import { roomEntities, roomOf } from "./rooms.ts";
import { awaySuggestion, awaySummary, compareDays, dayEnergy, daySummary, minMax, quietStretches, spansWhere, union } from "./summary.ts";
import { buildTimeline, type WireEntity } from "./timeline.ts";

const DAY = 1_800_000_000;
const H = 3600;
const ms = (s: number) => (DAY + s) * 1000;

function rows(...pairs: [number, string | [string, Record<string, unknown>]][]): WireEntity {
  const keys = pairs.map((p) => JSON.stringify(p[1]));
  const tab = [...new Set(keys)];
  return { t: pairs.map((p) => p[0]), v: keys.map((k) => tab.indexOf(k)), tab: tab.map((k) => JSON.parse(k)) };
}

function timeline(entities: Record<string, WireEntity>, stats = {}) {
  return buildTimeline([{ day_start: DAY, end: DAY + 24 * H, oldest: null, keep_days: 10, entities, stats, missing: [] }]);
}

test("spans: joined where they overlap, clipped to the window; a state still on runs to the end", () => {
  const list: [number, number][] = [
    [5, 10],
    [0, 3],
    [8, 12],
    [20, 30],
  ];
  assert.deepEqual(union(list, 1, 25), [
    [1, 3],
    [5, 12],
    [20, 25],
  ]);
  const tl = timeline({ "light.a": rows([0, "off"], [H, "on"], [2 * H, "off"], [5 * H, "on"]) });
  assert.deepEqual(
    spansWhere(tl.tracks.get("light.a")!, (v) => v.s === "on", tl.end),
    [
      [ms(H), ms(2 * H)],
      [ms(5 * H), tl.end],
    ],
  );
});

test("quiet stretches: no motion anywhere for two hours or more; the suggestion is the latest one by day", () => {
  const tl = timeline({
    "binary_sensor.m1": rows([0, "off"], [7 * H, "on"], [7 * H + 60, "off"], [17 * H, "on"], [17 * H + 60, "off"]),
    "binary_sensor.m2": rows([0, "off"], [8 * H, "on"], [8 * H + 60, "off"]),
  });
  const quiet = quietStretches(tl, ["binary_sensor.m1", "binary_sensor.m2"], tl.start, tl.end);
  assert.deepEqual(quiet, [
    [ms(0), ms(7 * H)],
    [ms(8 * H + 60), ms(17 * H)],
    [ms(17 * H + 60), tl.end],
  ]);
  // without motion sensors nothing is quiet (nobody knows)
  assert.deepEqual(quietStretches(tl, ["binary_sensor.none"], tl.start, tl.end), []);
  // a night only: no suggestion
  const night = new Date(2026, 9, 8, 0, 30).getTime();
  assert.equal(awaySuggestion([[night, night + 5 * 3600000]]), null);
  const morning = new Date(2026, 9, 8, 9, 0).getTime();
  assert.deepEqual(awaySuggestion([[morning, morning + 3 * 3600000]]), [morning, morning + 3 * 3600000]);
});

test("while you were away: alarms first, doors counted, lights left on with their time, no people", () => {
  const tl = timeline({
    "binary_sensor.front": rows([0, "off"], [9 * H, "on"], [9 * H + 30, "off"], [11 * H, "on"], [11 * H + 30, "off"]),
    "binary_sensor.win": rows([0, "off"], [10 * H, "on"]),
    "binary_sensor.m": rows([0, "off"], [10 * H, "on"], [10 * H + 60, "off"], [12 * H, "on"], [12 * H + 60, "off"]),
    "light.k": rows([0, "off"], [8 * H, "on"], [12 * H, "off"]),
    "light.short": rows([0, "off"], [9 * H, "on"], [9 * H + 120, "off"]),
  });
  const events: TTEvent[] = [
    { t: ms(9 * H), kind: "door", entity: "binary_sensor.front" },
    { t: ms(11 * H), kind: "door", entity: "binary_sensor.front" },
    { t: ms(10 * H + 600), kind: "water", entity: "binary_sensor.water" },
    { t: ms(10 * H), kind: "window", entity: "binary_sensor.win" },
    { t: ms(20 * H), kind: "door", entity: "binary_sensor.front" },
  ];
  const roles = new Map<string, Role>([
    ["binary_sensor.front", "door"],
    ["binary_sensor.win", "window"],
    ["binary_sensor.m", "motion"],
  ]);
  const out = awaySummary({ timeline: tl, roles, events, lights: ["light.k", "light.short"], motion: ["binary_sensor.m"], from: ms(8.5 * H), to: ms(13 * H) });
  assert.deepEqual(
    out.map((r) => [r.kind, r.entity, r.count]),
    [
      ["alarm", "binary_sensor.water", 1],
      ["door", "binary_sensor.front", 2],
      ["window", "binary_sensor.win", 1],
      ["window_open", "binary_sensor.win", 1],
      ["light_on", "light.k", 1],
      ["motion", "binary_sensor.m", 2],
    ],
  );
  const light = out.find((r) => r.kind === "light_on")!;
  assert.equal(light.ms, 3.5 * 3600000);
  assert.equal(light.t, ms(8.5 * H));
  assert.equal(out.find((r) => r.kind === "window_open")!.ms, 3 * 3600000);
});

const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}): HassEntity => ({ entity_id, state, attributes });

function house() {
  const b = emptyBuilding();
  const floor = newFloor("eg", "EG", 0);
  floor.rooms = [
    { id: "k", name: "Küche", area_id: "kitchen", points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "tiles" },
    { id: "w", name: "Wohnen", area_id: null, points: [[4, 0], [9, 0], [9, 5], [4, 5]], floor_material: "wood" },
  ] as never;
  floor.openings = [{ id: "o1", room_id: "w", edge: 0, offset: 1, width: 1, type: "window", sill: 0.9, height: 1.2, hinge: "left", leaves: 1, swing: "in" } as Opening];
  floor.placements = [{ entity_id: "light.w", x: 6, z: 2, y: null } as never];
  b.floors = [floor];
  const hass = {
    entities: { "light.k": { entity_id: "light.k", area_id: "kitchen" }, "sensor.tk": { entity_id: "sensor.tk", device_id: "d1" } },
    devices: { d1: { id: "d1", area_id: "kitchen" } },
    areas: {},
    states: {
      "light.k": st("light.k", "off"),
      "light.w": st("light.w", "off"),
      "sensor.tk": st("sensor.tk", "21", { device_class: "temperature" }),
      "climate.k": st("climate.k", "heat"),
      "binary_sensor.win": st("binary_sensor.win", "off", { device_class: "window" }),
    },
  } as unknown as HomeAssistant;
  const spec = { openings: [["o1", { contact: "binary_sensor.win", tilt: null, contact2: null, tilt2: null, cover: null }]], furniture: [] } as never;
  return { b, hass, spec };
}

test("rooms: lights, windows and temperature sensors by area, by the device's area, by placement and by opening", () => {
  const { b, hass, spec } = house();
  const rooms = roomEntities(hass, b, spec);
  assert.deepEqual(
    rooms.map((r) => [r.roomId, r.lights, r.windows, r.temps]),
    [
      ["k", ["light.k"], [], ["sensor.tk"]],
      ["w", ["light.w"], [["binary_sensor.win"]], []],
    ],
  );
  assert.equal(roomOf(rooms).get("binary_sensor.win")?.name, "Wohnen");
});

test("day summary: light, window and heating hours per room, the lowest and highest temperature", () => {
  const { b, hass, spec } = house();
  const rooms = roomEntities(hass, b, spec);
  rooms[0].climates.push("climate.k");
  const tl = timeline(
    {
      "light.k": rows([0, "off"], [6 * H, "on"], [8 * H, "off"], [18 * H, "on"], [21 * H, "off"]),
      "light.w": rows([0, "off"]),
      "binary_sensor.win": rows([0, "off"], [7 * H, "on"], [7 * H + 1800, "off"]),
      "climate.k": rows([0, ["heat", { hvac_action: "idle" }]], [5 * H, ["heat", { hvac_action: "heating" }]], [6 * H, ["heat", { hvac_action: "idle" }]]),
    },
    { "sensor.tk": { start: DAY, step: 300, mean: [19.5, 20, null, 22.5] } },
  );
  const sum = daySummary(tl, rooms, tl.start, tl.end);
  assert.deepEqual(
    sum.rooms.map((r) => [r.roomId, r.lightMs / 3600000, r.windowMs / 3600000, r.heatMs / 3600000, r.tMin, r.tMax]),
    [
      ["k", 5, 0, 1, 19.5, 22.5],
      ["w", 0, 0.5, 0, null, null],
    ],
  );
  assert.deepEqual(minMax(tl, "sensor.tk", ms(0), ms(600)), [19.5, 20]);
  const before = daySummary(tl, rooms, tl.start, ms(12 * H));
  const cmp = compareDays(sum, { ...before, rooms: before.rooms.filter((r) => r.roomId === "k") });
  assert.deepEqual(
    cmp.map((c) => [c.roomId, !!c.a, !!c.b]),
    [
      ["k", true, true],
      ["w", true, false],
    ],
  );
});

test("the day's energy: kWh from the balance every five minutes, self-sufficiency from what was bought", () => {
  const hour = 3600000;
  // 2 kW solar for an hour, 1 kW use, the rest sold; then an hour buying 500 W
  const at = (t: number) => (t < hour ? { solar: 2000, grid: -1000, consumption: 1000 } : { solar: 0, grid: 500, consumption: 500 }) as unknown as EnergySummary;
  const e = dayEnergy(at, 0, 2 * hour)!;
  assert.ok(Math.abs(e.pv - 2) < 1e-9);
  assert.ok(Math.abs(e.exp - 1) < 1e-9);
  assert.ok(Math.abs(e.imp - 0.5) < 1e-9);
  assert.ok(Math.abs(e.use - 1.5) < 1e-9);
  assert.ok(Math.abs(e.self! - 2 / 3) < 1e-9);
  assert.equal(dayEnergy(() => ({ solar: null, grid: null, consumption: null }) as unknown as EnergySummary, 0, hour), null);
});
