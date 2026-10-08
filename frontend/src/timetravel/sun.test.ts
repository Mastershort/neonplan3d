import assert from "node:assert/strict";
import { test } from "node:test";
import { isNight, nightBands, sunAt } from "./sun.ts";

const BERLIN = { lat: 52.52, lon: 13.405 };

test("Berlin at the summer solstice: the sun stands about 60.9° high at noon, in the south", () => {
  let best = { elevation: -90, azimuth: 0, t: 0 };
  for (let m = 9 * 60; m < 13 * 60; m++) {
    const t = Date.UTC(2026, 5, 21, 0, m);
    const s = sunAt(BERLIN.lat, BERLIN.lon, t);
    if (s.elevation > best.elevation) best = { ...s, t };
  }
  assert.ok(Math.abs(best.elevation - 60.92) < 0.5, `elevation ${best.elevation}`);
  assert.ok(Math.abs(best.azimuth - 180) < 2, `azimuth ${best.azimuth}`);
  // solar noon in Berlin is about 11:07 UTC
  assert.ok(Math.abs(new Date(best.t).getUTCHours() * 60 + new Date(best.t).getUTCMinutes() - 667) < 5);
});

test("Berlin at the winter solstice: low at noon, night in the evening, the sun rises in the south-east", () => {
  const noon = sunAt(BERLIN.lat, BERLIN.lon, Date.UTC(2026, 11, 21, 11, 10));
  assert.ok(Math.abs(noon.elevation - 14.0) < 0.6, `elevation ${noon.elevation}`);
  assert.ok(isNight(BERLIN.lat, BERLIN.lon, Date.UTC(2026, 11, 21, 18, 0)));
  const morning = sunAt(BERLIN.lat, BERLIN.lon, Date.UTC(2026, 11, 21, 8, 0));
  assert.ok(morning.azimuth > 120 && morning.azimuth < 150, `azimuth ${morning.azimuth}`);
});

test("night bands of a day: one in the morning, one in the evening", () => {
  const from = Date.UTC(2026, 2, 20, 0, 0);
  const bands = nightBands(BERLIN.lat, BERLIN.lon, from, from + 86400000);
  assert.equal(bands.length, 2);
  assert.equal(bands[0][0], from);
  // sunrise around 05:10 UTC and sunset around 17:25 UTC at the equinox
  assert.ok(Math.abs(bands[0][1] - Date.UTC(2026, 2, 20, 5, 10)) < 20 * 60000);
  assert.ok(Math.abs(bands[1][0] - Date.UTC(2026, 2, 20, 17, 25)) < 20 * 60000);
});
