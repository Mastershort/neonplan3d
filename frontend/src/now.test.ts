import assert from "node:assert/strict";
import { test } from "node:test";
import { nowItems, nowStops, nowSummary, type NowInput, type NowWords } from "./now.ts";

const words: NowWords = {
  open: (n) => `${n} open`,
  tilted: "tilted",
  unlocked: (n) => `${n} unlocked`,
  home: "Home",
  away: "Away",
  nobodyHome: "Nobody home",
  lights: (n) => `${n} lights on`,
  energyUse: "Use",
  energySolar: "Solar",
  energyGrid: "Grid",
  energyFeed: "Feed-in",
  battery: "Battery",
  charging: "charging",
  carAway: "away",
  calm: "All fine",
  calmDetail: "nothing open",
  watts: (w) => `${Math.round(w)} W`,
};

const empty: NowInput = { alerts: [], openings: [], unlocked: [], people: [], household: [], lights: [], energy: null, cars: [], away: false };
const win = (id: string, room: string, open: boolean, tilted = false, entity = `binary_sensor.${id}`) => ({ id, kind: "window" as const, room, open, tilted, entity, floorId: "eg", roomId: room });

test("a quiet house says so in one line", () => {
  const items = nowItems(empty, words);
  assert.deepEqual(items.map((i) => i.kind), ["calm"]);
  assert.equal(items[0].title, "All fine");
});

test("warnings lead, then what stands open or unlocked, then the rest – and no calm line", () => {
  const items = nowItems(
    {
      ...empty,
      alerts: [{ text: "Kitchen · smoke", entity: "binary_sensor.smoke", floorId: "eg", roomId: "kitchen" }],
      openings: [win("w1", "Bath", true), win("w2", "Kitchen", false, true), win("w3", "Office", false)],
      unlocked: [{ name: "Front door", entity: "lock.front" }],
      lights: [{ room: "Bath", count: 2, floorId: "eg", roomId: "bath", on: ["light.a", "light.b"] }, { room: "Hall", count: 0 }],
      people: [{ name: "Anna", home: true, room: "Office", floorId: "eg", roomId: "office" }, { name: "Ben", home: false, room: null }],
    },
    words,
  );
  assert.deepEqual(items.map((i) => i.kind), ["alert", "open", "unlocked", "people", "lights"]);
  assert.equal(items[1].title, "2 open");
  assert.equal(items[1].detail, "Bath, Kitchen (tilted)");
  assert.equal(items[3].title, "Home: Anna (Office)");
  assert.equal(items[3].detail, "Away: Ben");
  assert.equal(items[4].title, "2 lights on");
  assert.equal(items[4].detail, "Bath");
});

test("an opening with two contacts and a cover counts once", () => {
  const items = nowItems({ ...empty, openings: [win("w1", "Bath", true, false, "binary_sensor.a"), win("w1", "Bath", true, false, "binary_sensor.b"), win("w1", "Bath", true, false, "cover.c")] }, words);
  assert.equal(items[0].title, "1 open");
  assert.equal(items[0].targets.length, 1);
});

test("away from home, who is there comes right after the warnings", () => {
  const input: NowInput = { ...empty, away: true, openings: [win("w1", "Bath", true)], people: [{ name: "Ben", home: true, room: null }] };
  assert.deepEqual(nowItems(input, words).map((i) => i.kind), ["people", "open"]);
  assert.deepEqual(nowItems({ ...input, away: false }, words).map((i) => i.kind), ["open", "people"]);
});

test("the household: what is due now stands on its own, the rest shares a line; energy and cars at the end", () => {
  const items = nowItems(
    {
      ...empty,
      household: [{ text: "Washer: done", entity: "sensor.washer", hot: true }, { text: "Bins: tomorrow", entity: null, hot: false }, { text: "Post: none", entity: null, hot: false }],
      energy: { consumption: 1700, solar: 1500, grid: -200, soc: 64 },
      cars: [{ name: "Car", present: true, charging: true, soc: 63.6, floorId: "eg" }],
    },
    words,
  );
  assert.deepEqual(items.map((i) => i.kind), ["household", "household", "car", "energy"]);
  assert.equal(items[1].title, "Bins: tomorrow");
  assert.equal(items[1].detail, "Post: none");
  assert.equal(items[2].detail, "charging · 64 %");
  assert.equal(items[3].title, "Use 1700 W");
  assert.equal(items[3].detail, "Solar 1500 W · Feed-in 200 W · Battery 64 %");
});

test("the obvious thing to do comes with the line: lights off, lock the door – a window has none", () => {
  const input: NowInput = {
    ...empty,
    openings: [win("w1", "Bath", true)],
    unlocked: [{ name: "Front door", entity: "lock.front", floorId: "eg", roomId: null }],
    lights: [{ room: "Bath", count: 2, floorId: "eg", roomId: "bath", on: ["light.a", "light.b"] }, { room: "Hall", count: 1, floorId: "eg", roomId: "hall", on: ["switch.c"] }],
  };
  const items = nowItems(input, words);
  assert.equal(items.find((i) => i.kind === "open")!.action, undefined);
  assert.deepEqual(items.find((i) => i.kind === "unlocked")!.action, { kind: "lock", entities: ["lock.front"] });
  assert.deepEqual(items.find((i) => i.kind === "lights")!.action, { kind: "lights_off", entities: ["light.a", "light.b", "switch.c"] });
  // each place of a line has its own name for the list
  assert.deepEqual(items.find((i) => i.kind === "lights")!.targets.map((t) => t.label), ["Bath (2)", "Hall"]);
});

test("the line under the house: a warning first, else what needs a look, else that all is well", () => {
  assert.deepEqual(nowSummary(nowItems(empty, words)), { text: "All fine", level: 0 });
  const lit: NowInput = { ...empty, lights: [{ room: "Bath", count: 3, on: ["light.a"] }] };
  assert.deepEqual(nowSummary(nowItems(lit, words)), { text: "All fine · 3 lights on", level: 0 });
  assert.deepEqual(nowSummary(nowItems({ ...lit, openings: [win("w1", "Bath", true)] }, words)), { text: "1 open · 3 lights on", level: 1 });
  const alarm = { ...lit, alerts: [{ text: "Smoke", entity: "x" }, { text: "Water", entity: "y" }] };
  assert.deepEqual(nowSummary(nowItems(alarm, words)), { text: "Smoke (+1)", level: 2 });
});

test("the house check stops at every open window, unlocked door and lit room, in that order", () => {
  const stops = nowStops(
    {
      ...empty,
      lights: [{ room: "Bath", count: 2, floorId: "eg", roomId: "bath", on: ["light.a", "light.b"] }, { room: "Hall", count: 0 }],
      unlocked: [{ name: "Front door", entity: "lock.front" }],
      openings: [win("w1", "Bath", false, true), win("w2", "Office", false)],
    },
    words,
  );
  assert.deepEqual(stops.map((s) => s.kind), ["open", "unlocked", "lights"]);
  assert.equal(stops[0].title, "Bath · (tilted)");
  assert.equal(stops[0].action, undefined);
  assert.deepEqual(stops[2].action, { kind: "lights_off", entities: ["light.a", "light.b"] });
  assert.deepEqual(nowStops(empty, words), []);
});
