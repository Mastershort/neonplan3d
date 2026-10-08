import assert from "node:assert/strict";
import { test } from "node:test";
import type { HassEntity } from "../types.ts";
import { carState, LiveLog, liveValue, quantiseAttr } from "./live.ts";
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
  const added = log.flush(tl, (DAY + 4000) * 1000);
  assert.equal(added, 2);
  assert.equal(log.pending, 0);
  const a = tl.tracks.get("light.a")!;
  assert.deepEqual([...a.times], [DAY * 1000, (DAY + 3700) * 1000]);
  assert.equal(a.values[a.vals[1]].s, "on");
  assert.equal(a.since[1], (DAY + 3700) * 1000);
  assert.equal(tl.series.get("sensor.p")!.mean[13], 250);
  assert.equal(tl.end, (DAY + 4000) * 1000);
});
