import assert from "node:assert/strict";
import { test } from "node:test";
import { cloudBanks, dayLight, moonPhase, skyColors, starField, sunsetGlow } from "./sky.ts";

test("the sky's day light follows the sun: night below −8°, full day above 10°", () => {
  assert.equal(dayLight(null), 0);
  assert.equal(dayLight(-20), 0);
  assert.equal(dayLight(30), 1);
  assert.ok(dayLight(0) > 0.3 && dayLight(0) < 0.6);
});

test("the sunset glows with the sun near the horizon, not at noon or deep night", () => {
  assert.ok(sunsetGlow(1) > 0.9);
  assert.equal(sunsetGlow(40), 0);
  assert.equal(sunsetGlow(-20), 0);
});

test("sky colours: dark at night, blue by day, warm horizon at sunset, grey under clouds", () => {
  const night = skyColors(-20, 0);
  const day = skyColors(40, 0);
  const sunset = skyColors(1, 0);
  assert.ok(night.zenith[2] < 40 && day.zenith[2] > 180);
  // the sunset's horizon is warm: more red than blue
  assert.ok(sunset.horizon[0] > sunset.horizon[2]);
  // clouds take the blue out of the day sky
  const grey = skyColors(40, 1);
  assert.ok(grey.zenith[2] - grey.zenith[0] < day.zenith[2] - day.zenith[0]);
});

test("the moon's phase: new moon on 2000-01-06, full moon about 14.8 days later, a month later new again", () => {
  assert.ok(moonPhase(new Date(Date.UTC(2000, 0, 6, 18, 14))) < 0.01);
  const full = moonPhase(new Date(Date.UTC(2000, 0, 21, 12)));
  assert.ok(Math.abs(full - 0.5) < 0.03, String(full));
  // a known full moon: 2026-11-24 (about) – within a day
  const p = moonPhase(new Date(Date.UTC(2026, 10, 24, 12)));
  assert.ok(Math.abs(p - 0.5) < 0.05, String(p));
});

test("stars and clouds are the same on every start and lie in the sky", () => {
  assert.deepEqual(starField(20), starField(20));
  for (const s of starField(200)) assert.ok(s.el > 0 && s.el <= 90 && s.az >= 0 && s.az < 360);
  for (const c of cloudBanks(30)) assert.ok(c.el >= 6 && c.el <= 32);
});
