import assert from "node:assert/strict";
import { test } from "node:test";
import { DECOR_REST_MS, LOW_DECOR_MS, SENSOR_SYNC_MS, decorDelay, lowEndDevice, lowSyncDelay } from "./pace.ts";
import { SLOW_FRAME_MS, SLOW_SAMPLES, slowFrames } from "./pace.ts";

const FIRE_SILK = "Mozilla/5.0 (Linux; Android 9; KFTRWI) AppleWebKit/537.36 (KHTML, like Gecko) Silk/118.3.1 like Chrome/118.0.5993.111 Safari/537.36";
const FIRE_FULLY = "Mozilla/5.0 (Linux; Android 9; KFTRWI Build/PS7327; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/118.0.5993.111 Safari/537.36";
const FIRE_PLUS = "Mozilla/5.0 (Linux; Android 11; KFTRPWI Build/RS8332; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/120.0.6099.230 Safari/537.36";
const GALAXY = "Mozilla/5.0 (Linux; Android 14; SM-X710) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36";
const DESKTOP = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36";

test("Fire tablets get the tablet level even with eight cores and enough memory reported", () => {
  assert.equal(lowEndDevice(FIRE_SILK, 4, 8), true);
  assert.equal(lowEndDevice(FIRE_FULLY, 4, 8), true);
  // the Fire HD 10 Plus has a model code of five letters after KF
  assert.equal(lowEndDevice(FIRE_PLUS, 4, 8), true);
});

test("strong devices keep their quality, weak ones by memory or cores are found as before", () => {
  assert.equal(lowEndDevice(GALAXY, 8, 8), false);
  assert.equal(lowEndDevice(DESKTOP, 8, 16), false);
  assert.equal(lowEndDevice(DESKTOP, undefined, undefined), false);
  assert.equal(lowEndDevice(GALAXY, 2, 8), true);
  assert.equal(lowEndDevice(DESKTOP, 8, 4), true);
});

test("decorative frames: unchanged on normal devices, slower and resting on the tablet level", () => {
  assert.equal(decorDelay(33, false, 10 * DECOR_REST_MS), 33);
  assert.equal(decorDelay(33, true, 0), LOW_DECOR_MS);
  assert.equal(decorDelay(500, true, 0), 500);
  // an own minimum (turning fan blades would seem to stand at 5 frames a second)
  assert.equal(decorDelay(83, true, 1000, 83), 83);
  assert.equal(decorDelay(33, true, DECOR_REST_MS - 1), LOW_DECOR_MS);
  assert.equal(decorDelay(33, true, DECOR_REST_MS), null);
});

test("tablet level: sensor-only changes wait for the rest of two seconds after the last sync", () => {
  assert.equal(lowSyncDelay(0), SENSOR_SYNC_MS);
  assert.equal(lowSyncDelay(500), SENSOR_SYNC_MS - 500);
  assert.equal(lowSyncDelay(SENSOR_SYNC_MS), 0);
  assert.equal(lowSyncDelay(60_000), 0);
});

test("pets keep walking on the tablet level: about 15 frames a second, 4 while the view rests (#752)", async () => {
  const { petDelay, PET_LOW_MS, PET_REST_MS } = await import("./pace.ts");
  assert.equal(petDelay(false, 0), 0);
  assert.equal(petDelay(true, 0), PET_LOW_MS);
  assert.equal(petDelay(true, 10 * DECOR_REST_MS), PET_REST_MS);
});

test("Auto: frame times while turning decide a slow device (#952)", () => {
  const n = SLOW_SAMPLES;
  // too few frames: not decided yet
  assert.equal(slowFrames(Array(n - 1).fill(80)), false);
  // 13 frames a second, as on the RK3399 mirror
  assert.equal(slowFrames(Array(n).fill(77)), true);
  // a smooth device with a few long frames (shaders, a sync) stays on the full level
  assert.equal(slowFrames([...Array(n - 20).fill(17), ...Array(20).fill(200)]), false);
  assert.equal(slowFrames(Array(n).fill(SLOW_FRAME_MS)), false);
});
