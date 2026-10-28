import assert from "node:assert/strict";
import { test } from "node:test";
import { sunPath, sunPosition } from "./sun-path.ts";

// Berlin, midsummer: the sun stands about 61° high in the south at noon and rises in the north-east before 5:00 local time
const BERLIN: [number, number] = [52.52, 13.405];

test("the sun at midsummer noon over Berlin", () => {
  // solar noon in Berlin is about 11:07 UTC
  const p = sunPosition(Date.UTC(2026, 5, 21, 11, 7), ...BERLIN);
  assert.ok(Math.abs(p.elevation - 60.9) < 0.5, String(p.elevation));
  assert.ok(Math.abs(p.azimuth - 180) < 2, String(p.azimuth));
  // in the evening it stands in the west-north-west
  const eve = sunPosition(Date.UTC(2026, 5, 21, 18, 0), ...BERLIN);
  assert.ok(eve.azimuth > 270 && eve.azimuth < 310 && eve.elevation > 0 && eve.elevation < 15, JSON.stringify(eve));
});

test("the day's path runs from sunrise to sunset above the horizon", () => {
  const path = sunPath(Date.UTC(2026, 5, 21, 11, 0), ...BERLIN);
  assert.ok(path.rise && path.set);
  // sunrise about 02:43 UTC, sunset about 19:33 UTC (whatever the browser's time zone)
  assert.ok(Math.abs(path.rise.t - Date.UTC(2026, 5, 21, 2, 43)) < 5 * 60_000, new Date(path.rise.t).toISOString());
  assert.ok(Math.abs(path.set.t - Date.UTC(2026, 5, 21, 19, 33)) < 5 * 60_000, new Date(path.set.t).toISOString());
  assert.ok(path.rise.azimuth > 40 && path.rise.azimuth < 60, String(path.rise.azimuth));
  assert.equal(path.points[0], path.rise);
  assert.equal(path.points.at(-1), path.set);
  assert.ok(path.points.every((p, i) => i === 0 || p.t > path.points[i - 1].t));
  assert.ok(path.points.slice(1, -1).every((p) => p.elevation > -0.9));
});

test("no sunrise in the polar night", () => {
  const path = sunPath(Date.UTC(2026, 11, 21, 12, 0), 78.2, 15.6);
  assert.equal(path.rise, null);
  assert.equal(path.points.length, 0);
});
