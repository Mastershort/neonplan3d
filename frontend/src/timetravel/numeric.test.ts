import assert from "node:assert/strict";
import { test } from "node:test";
import { coverPosition } from "./cover.ts";
import { quantise, quantStep, seriesValue } from "./numeric.ts";
import type { Series } from "./timeline.ts";

const series = (mean: number[]): Series => ({ id: "sensor.x", start: 0, step: 300000, mean: Float32Array.from(mean) });

test("numeric sensors: linear between slot centres, the first value before, held a while after the last", () => {
  const s = series([20, 22, 26]);
  assert.equal(seriesValue(s, -1), NaN);
  assert.equal(seriesValue(s, 0), 20);
  assert.equal(seriesValue(s, 150000), 20);
  // halfway between the centres of slot 0 (150 s) and slot 1 (450 s)
  assert.equal(seriesValue(s, 300000), 21);
  assert.equal(seriesValue(s, 600000), 24);
  assert.equal(seriesValue(s, 750000), 26);
  // statistics end a few minutes before now: the last value holds for 15 minutes, then there is none
  assert.equal(seriesValue(s, 750000 + 14 * 60000), 26);
  assert.ok(Number.isNaN(seriesValue(s, 750000 + 16 * 60000)));
});

test("numeric sensors: a slot without a value holds the one before for a while", () => {
  const s = series([20, NaN, NaN, NaN, NaN, 30]);
  assert.equal(seriesValue(s, 450000), 20);
  // more than 15 minutes after the last centre with a value
  assert.ok(Number.isNaN(seriesValue(s, 150000 + 16 * 60000)));
  assert.equal(seriesValue(s, 5.5 * 300000), 30);
});

test("the rounding step follows Home Assistant's precision, else the unit", () => {
  assert.equal(quantStep("°C", 2), 0.01);
  assert.equal(quantStep("°C", null), 0.1);
  assert.equal(quantStep("%", undefined), 1);
  assert.equal(quantStep("W", null, 420), 1);
  assert.equal(quantStep("W", null, 4200), 10);
  assert.equal(quantStep("kW", null), 0.01);
  assert.equal(quantStep(undefined, null, 5), 0.01);
  assert.equal(quantStep(undefined, null, 500), 1);
});

test("rounded values read like states and stay the same while the shown value does", () => {
  assert.equal(quantise(21.04, 0.1), "21.0");
  assert.equal(quantise(21.06, 0.1), "21.1");
  assert.equal(quantise(-0.02, 0.1), "0.0");
  assert.equal(quantise(4234, 10), "4230");
  assert.equal(quantise(0.255, 0.01), "0.26");
  assert.equal(quantise(NaN, 1), "unknown");
  // the value creeps, the text stays: the replayed state stays the same object
  const texts = new Set([20.96, 20.98, 21.0, 21.02, 21.04].map((v) => quantise(v, 0.1)));
  assert.deepEqual([...texts], ["21.0"]);
});

test("a blind moving between two reported positions is filled in; a long pause is not", () => {
  const row = { t: 0, state: "closing", pos: 100 };
  assert.equal(coverPosition(15000, row, { t: 30000, pos: 0 }), 50);
  assert.equal(coverPosition(0, row, { t: 30000, pos: 0 }), 100);
  assert.equal(coverPosition(40000, row, { t: 30000, pos: 0 }), 0);
  // standing still: the reported position
  assert.equal(coverPosition(15000, { ...row, state: "open" }, { t: 30000, pos: 0 }), 100);
  // the next report came an hour later: no slow crawl across that hour
  assert.equal(coverPosition(600000, row, { t: 3600000, pos: 0 }), 100);
  assert.equal(coverPosition(15000, row, null), 100);
});
