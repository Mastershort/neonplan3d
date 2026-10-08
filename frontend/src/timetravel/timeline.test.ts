import assert from "node:assert/strict";
import { test } from "node:test";
import { appendRow, appendRows, buildTimeline, Cursor, findGaps, indexAt, mergeTimelines, rowCount, statRows, thinPulses, timelineBytes, trimTimeline, type WireDay } from "./timeline.ts";

const DAY = 1_800_000_000; // seconds

function day(over: Partial<WireDay> = {}): WireDay {
  return {
    day_start: DAY,
    end: DAY + 86400,
    oldest: null,
    keep_days: 10,
    entities: {
      "light.a": { t: [0, 60, 120, 180], v: [0, 1, 1, 0], tab: ["off", ["on", { brightness: 128 }]] },
      "cover.b": { t: [0, 3600], v: [0, 1], tab: [["open", { current_position: 100 }], ["open", { current_position: 40 }]] },
    },
    stats: { "sensor.t": { start: DAY, step: 300, mean: [20, 21, null, 22] } },
    missing: ["light.gone"],
    ...over,
  };
}

test("a day decodes into typed rows: times in ms, each value once, a repeated value dropped", () => {
  const tl = buildTimeline([day()]);
  assert.equal(tl.start, DAY * 1000);
  assert.equal(tl.end, (DAY + 86400) * 1000);
  const a = tl.tracks.get("light.a")!;
  // the second "on" row repeats the first and is dropped
  assert.deepEqual([...a.times], [DAY * 1000, (DAY + 60) * 1000, (DAY + 180) * 1000]);
  assert.deepEqual(a.values.map((v) => v.s), ["off", "on"]);
  assert.deepEqual(a.values[1].a, { brightness: 128 });
  assert.deepEqual([...a.vals], [0, 1, 0]);
  // an attribute change keeps the time of the last state change
  const b = tl.tracks.get("cover.b")!;
  assert.deepEqual([...b.since], [DAY * 1000, DAY * 1000]);
  const s = tl.series.get("sensor.t")!;
  assert.equal(s.step, 300000);
  assert.ok(Number.isNaN(s.mean[2]));
  assert.deepEqual([...tl.missing], ["light.gone"]);
  assert.equal(tl.oldest, null);
});

test("two days of one entity are joined in time order; the oldest data counts", () => {
  const second = day({ day_start: DAY + 86400, end: DAY + 2 * 86400, oldest: null, entities: { "light.a": { t: [0, 30], v: [0, 1], tab: ["off", "on"] } }, stats: {}, missing: [] });
  const first = day({ oldest: DAY + 7200 });
  const tl = buildTimeline([second, first]);
  const a = tl.tracks.get("light.a")!;
  // day 2 starts with "off" like day 1 ended: dropped
  assert.deepEqual(a.values.map((v) => v.s), ["off", "on", "on"]);
  assert.deepEqual([...a.vals], [0, 1, 0, 2]);
  assert.equal(a.times.length, 4);
  assert.equal(a.times[3], (DAY + 86400 + 30) * 1000);
  // one answer had data before its window: no "no data" area
  assert.equal(tl.oldest, null);
  assert.equal(buildTimeline([first]).oldest, (DAY + 7200) * 1000);
});

test("indexAt finds the last row at or before a moment", () => {
  const times = new Float64Array([10, 20, 30]);
  assert.equal(indexAt(times, 5), -1);
  assert.equal(indexAt(times, 10), 0);
  assert.equal(indexAt(times, 25), 1);
  assert.equal(indexAt(times, 30), 2);
  assert.equal(indexAt(times, 99), 2);
  assert.equal(indexAt(new Float64Array(0), 5), -1);
});

test("the cursor steps forward, jumps and goes back to the same rows as a search", () => {
  const rows = Array.from({ length: 500 }, (_, i) => i * 10);
  const tl = buildTimeline([day({ entities: { "binary_sensor.x": { t: rows, v: rows.map((_, i) => i % 2), tab: ["off", "on"] } }, stats: {} })]);
  const c = new Cursor(tl);
  const times = c.tracks[0].times;
  for (const t of [DAY * 1000 - 1, DAY * 1000, (DAY + 15) * 1000, (DAY + 25) * 1000, (DAY + 4000) * 1000, (DAY + 100) * 1000, (DAY + 99999) * 1000]) {
    c.at(t);
    assert.equal(c.idx[0], indexAt(times, t), `at ${t}`);
  }
  c.at((DAY + 15) * 1000);
  assert.equal(c.value(0)?.s, "on");
});

test("gaps: stretches where most entities have nothing are found, short ones are dropped", () => {
  const ids = ["a", "b", "c", "d"].map((x) => `binary_sensor.${x}`);
  // all unavailable from 1 h to 2 h, one of them only for 5 minutes at 5 h
  const entities = Object.fromEntries(
    ids.map((id, i) => [id, { t: i === 0 ? [0, 3600, 7200, 18000, 18300] : [0, 3600, 7200], v: i === 0 ? [0, 1, 0, 1, 0] : [0, 1, 0], tab: ["off", "unavailable"] }]),
  );
  const tl = buildTimeline([day({ entities, stats: {} })]);
  const gaps = findGaps(tl);
  assert.equal(gaps.length, 1);
  assert.equal(gaps[0][0], (DAY + 3600) * 1000);
  assert.equal(gaps[0][1], (DAY + 7200) * 1000);
});

test("an older day fetched later joins the timeline: rows in order, the seam's repeat dropped, statistics on one grid", () => {
  const newer = buildTimeline([day()]);
  const older = buildTimeline([
    day({
      day_start: DAY - 86400,
      end: DAY,
      entities: { "light.a": { t: [0, 86000], v: [0, 1], tab: ["on", "off"] }, "switch.old": { t: [0], v: [0], tab: ["on"] } },
      stats: { "sensor.t": { start: DAY - 600, step: 300, mean: [18, 19] } },
      missing: [],
    }),
  ]);
  const tl = mergeTimelines(newer, older);
  assert.equal(tl.start, (DAY - 86400) * 1000);
  assert.equal(tl.end, (DAY + 86400) * 1000);
  const a = tl.tracks.get("light.a")!;
  // "off" at the end of the older day and "off" at the start of the newer one: one row
  assert.deepEqual([...a.times], [(DAY - 86400) * 1000, (DAY - 400) * 1000, (DAY + 60) * 1000, (DAY + 180) * 1000]);
  assert.deepEqual([...a.vals].map((k) => a.values[k].s), ["on", "off", "on", "off"]);
  assert.ok(tl.tracks.has("switch.old"));
  const s = tl.series.get("sensor.t")!;
  assert.equal(s.start, (DAY - 600) * 1000);
  assert.deepEqual([...s.mean.slice(0, 4)], [18, 19, 20, 21]);
  assert.equal(rowCount(tl), 4 + 1 + 2);
  assert.ok(timelineBytes(tl) > 0);
});

test("a busy week: short motion pulses right after kept motion are thinned (still counted), a lone one stays", () => {
  const tl = buildTimeline([
    day({
      entities: {
        "binary_sensor.m": { t: [0, 100, 130, 200, 210, 1000, 1200, 1250, 1260, 2000, 2010], v: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], tab: ["off", "on"] },
      },
      stats: {},
      missing: [],
    }),
  ]);
  const dropped = thinPulses(tl, ["binary_sensor.m"]);
  const m = tl.tracks.get("binary_sensor.m")!;
  // 200 (70 s after a kept pulse) and 1250 (50 s after the long one) go; 100 (the first) and 2000 (800 s later) stay
  assert.equal(dropped, 4);
  assert.deepEqual(
    [...m.times].map((t) => t / 1000 - DAY),
    [0, 100, 130, 1000, 1200, 2000, 2010],
  );
  assert.deepEqual([...m.since], [...m.times]);
  assert.deepEqual(
    [...m.dropped!].map((t) => t / 1000 - DAY),
    [200, 1250],
  );
});

test("live rows in one go: arrays built once, values looked up, out-of-order and repeated rows left out", () => {
  const tl = buildTimeline([day()]);
  const a = tl.tracks.get("light.a")!;
  const t = (s: number) => (DAY + s) * 1000;
  const added = appendRows(a, [
    { t: t(90000), v: { s: "on", a: { brightness: 128 } } },
    { t: t(90000), v: { s: "on", a: { brightness: 128 } } },
    { t: t(89000), v: { s: "off", a: null } },
    { t: t(90100), v: { s: "on", a: { brightness: 200 } } },
    { t: t(90200), v: { s: "off", a: null } },
  ]);
  assert.equal(added, 3);
  assert.deepEqual([...a.times].slice(-3), [t(90000), t(90100), t(90200)]);
  assert.equal(a.values.length, 3);
  // the state stayed "on" across the brightness change
  assert.equal(a.since[a.times.length - 2], t(90000));
});

test("trimming: the days before a moment go, each track keeps its state at that moment", () => {
  const tl = buildTimeline([day()]);
  const cut = (DAY + 150) * 1000;
  const trimmed = trimTimeline(tl, cut);
  assert.equal(trimmed.start, cut);
  const a = trimmed.tracks.get("light.a")!;
  assert.deepEqual([...a.times], [(DAY + 60) * 1000, (DAY + 180) * 1000]);
  assert.equal(trimmed.series.get("sensor.t")!.mean.length, 4);
  assert.equal(trimTimeline(tl, (DAY + 900) * 1000).series.get("sensor.t")!.mean.length, 1);
});

test("live rows join at the end only; five-minute rows come from statistics or states", () => {
  const tl = buildTimeline([day()]);
  const a = tl.tracks.get("light.a")!;
  assert.equal(appendRow(a, (DAY + 100) * 1000, { s: "on", a: null }), false);
  assert.equal(appendRow(a, (DAY + 90000) * 1000, { s: "off", a: null }), false);
  assert.equal(appendRow(a, (DAY + 90000) * 1000, { s: "on", a: { brightness: 128 } }), true);
  assert.equal(a.times.length, 4);
  const rows = statRows(tl, ["sensor.t", "light.a", "nothing.x"], DAY * 1000, (DAY + 1200) * 1000);
  assert.deepEqual(
    rows["sensor.t"].map((r) => r.mean),
    [20, 21, 22],
  );
  assert.deepEqual(Object.keys(rows), ["sensor.t"]);
});
