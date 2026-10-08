import assert from "node:assert/strict";
import { test } from "node:test";
import type { HassEntity } from "../types.ts";
import { carState, LiveLog, liveValue, MAX_PENDING, quantiseAttr } from "./live.ts";
import { buildTimeline } from "./timeline.ts";

const DAY = 1_800_000_000;
const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}, last_updated?: string): HassEntity => ({ entity_id, state, attributes, last_updated });

test("live values are reduced like the integration's rows: kept attributes rounded, a car home or away", () => {
  assert.deepEqual(liveValue(st("light.a", "on", { brightness: 129, friendly_name: "A", color_temp_kelvin: 2712 })), { s: "on", a: { brightness: 128, color_temp_kelvin: 2700 } });
  assert.deepEqual(liveValue(st("binary_sensor.d", "on", { device_class: "door" })), { s: "on", a: null });
  assert.deepEqual(liveValue(st("media_player.k", "playing", { media_title: "Song", volume_level: 0.43, entity_picture: "/x" })), { s: "playing", a: { media_title: "Song", volume_level: 0.45 } });
  assert.deepEqual(liveValue(st("device_tracker.car", "Work", { latitude: 1 })), { s: "not_home", a: null });
  assert.equal(carState("home"), "home");
  assert.equal(carState("unknown"), "unknown");
  assert.equal(quantiseAttr("current_temperature", 21.04), 21);
});

test("the live edge: changes since the start join the timeline in time order, a repeat is left out", () => {
  const tl = buildTimeline([
    {
      day_start: DAY,
      end: DAY + 3600,
      oldest: null,
      keep_days: 10,
      entities: { "light.a": { t: [0], v: [0], tab: ["off"] } },
      stats: { "sensor.p": { start: DAY, step: 300, mean: [100] } },
      missing: [],
    },
  ]);
  const start = { "light.a": st("light.a", "off"), "sensor.p": st("sensor.p", "100") };
  const log = new LiveLog(["light.a", "sensor.p"], start);
  // the same objects: nothing is noted
  log.record(start, (DAY + 3600) * 1000);
  assert.equal(log.pending, 0);
  const on = st("light.a", "on", {}, new Date((DAY + 3700) * 1000).toISOString());
  log.record({ ...start, "light.a": on }, (DAY + 3800) * 1000);
  log.record({ ...start, "light.a": on, "sensor.p": st("sensor.p", "250") }, (DAY + 3900) * 1000);
  assert.equal(log.pending, 2);
  const { added, created } = log.flush(tl, (DAY + 4000) * 1000);
  assert.equal(added, 2);
  assert.equal(created, 0);
  assert.equal(log.pending, 0);
  const a = tl.tracks.get("light.a")!;
  assert.deepEqual([...a.times], [DAY * 1000, (DAY + 3700) * 1000]);
  assert.equal(a.values[a.vals[1]].s, "on");
  assert.equal(a.since[1], (DAY + 3700) * 1000);
  assert.equal(tl.series.get("sensor.p")!.mean[13], 250);
  assert.equal(tl.end, (DAY + 4000) * 1000);
});

const iso = (s: number) => new Date(s * 1000).toISOString();

test("the live edge: one row per change, a counter once per five minutes, an unkept attribute not at all", () => {
  const tl = buildTimeline([
    { day_start: DAY, end: DAY + 3600, oldest: null, keep_days: 10, entities: { "light.a": { t: [0], v: [0], tab: ["off"] }, "sensor.kwh": { t: [0], v: [0], tab: ["100"] } }, stats: {}, missing: [] },
  ]);
  let states: Record<string, HassEntity> = { "light.a": st("light.a", "off"), "sensor.kwh": st("sensor.kwh", "100") };
  const log = new LiveLog(["light.a", "sensor.kwh"], states, (DAY + 3600) * 1000);
  // the counter ticks every 10 s for an hour; the light's name changes (not kept), then it goes on once
  for (let i = 1; i <= 360; i++) {
    const at = DAY + 3600 + i * 10;
    states = { ...states, "sensor.kwh": st("sensor.kwh", String(100 + i / 100), {}, iso(at)) };
    if (i === 5) states = { ...states, "light.a": st("light.a", "off", { friendly_name: "Neu" }, iso(at)) };
    if (i === 100) states = { ...states, "light.a": st("light.a", "on", {}, iso(at)) };
    log.record(states, at * 1000);
  }
  // at most 13 five-minute slots of the counter (the hour may cross one more), one change of the light
  assert.ok(log.pending <= 14 && log.pending >= 13, String(log.pending));
  const pending = log.pending;
  const { added } = log.flush(tl, (DAY + 7300) * 1000);
  assert.equal(added, pending);
  const kwh = tl.tracks.get("sensor.kwh")!;
  assert.equal(kwh.times.length, pending);
  // the last slot holds its last value
  assert.equal(kwh.values[kwh.vals[kwh.times.length - 1]].s, "103.6");
  const light = tl.tracks.get("light.a")!;
  assert.deepEqual([...light.times], [DAY * 1000, (DAY + 4600) * 1000]);
});

test("the live edge: a long pause merges rows instead of dropping the oldest; the last state of each stays", () => {
  const tl = buildTimeline([
    { day_start: DAY, end: DAY + 3600, oldest: null, keep_days: 10, entities: { "binary_sensor.m": { t: [0], v: [0], tab: ["off"] }, "lock.door": { t: [0], v: [0], tab: ["locked"] } }, stats: {}, missing: [] },
  ]);
  let states: Record<string, HassEntity> = { "binary_sensor.m": st("binary_sensor.m", "off"), "lock.door": st("lock.door", "locked") };
  const log = new LiveLog(["binary_sensor.m", "lock.door"], states, (DAY + 3600) * 1000);
  // the door is unlocked once early on, then a motion sensor flaps every two seconds for a day
  states = { ...states, "lock.door": st("lock.door", "unlocked", {}, iso(DAY + 3601)) };
  log.record(states, (DAY + 3601) * 1000);
  const n = 43200;
  for (let i = 1; i <= n; i++) {
    const at = DAY + 3602 + i * 2;
    states = { ...states, "binary_sensor.m": st("binary_sensor.m", i % 2 ? "on" : "off", {}, iso(at)) };
    log.record(states, at * 1000);
  }
  assert.ok(log.pending <= MAX_PENDING, String(log.pending));
  const started = performance.now();
  log.flush(tl, (DAY + 3602 + n * 2 + 10) * 1000);
  assert.ok(performance.now() - started < 1000);
  const door = tl.tracks.get("lock.door")!;
  assert.deepEqual(
    [...door.vals].map((k) => door.values[k].s),
    ["locked", "unlocked"],
  );
  const m = tl.tracks.get("binary_sensor.m")!;
  assert.equal(m.values[m.vals[m.times.length - 1]].s, "off");
});

test("the live edge: an entity the recorder had nothing of gets a track from its state at the start", () => {
  const tl = buildTimeline([{ day_start: DAY, end: DAY + 3600, oldest: null, keep_days: 10, entities: {}, stats: {}, missing: ["switch.new"] }]);
  const start = { "switch.new": st("switch.new", "on"), "switch.quiet": st("switch.quiet", "off") };
  const log = new LiveLog(["switch.new", "switch.quiet"], start, (DAY + 3600) * 1000);
  log.record({ ...start, "switch.new": st("switch.new", "off", {}, iso(DAY + 3700)) }, (DAY + 3700) * 1000);
  const { created } = log.flush(tl, (DAY + 3800) * 1000);
  assert.equal(created, 2);
  const a = tl.tracks.get("switch.new")!;
  assert.deepEqual([...a.times], [(DAY + 3600) * 1000, (DAY + 3700) * 1000]);
  assert.equal(tl.tracks.get("switch.quiet")!.values[0].s, "off");
  assert.equal(tl.missing.has("switch.new"), false);
  // only once
  assert.equal(log.flush(tl, (DAY + 3900) * 1000).created, 0);
});
