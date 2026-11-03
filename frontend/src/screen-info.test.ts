import assert from "node:assert/strict";
import { test } from "node:test";
import { deviceLabel } from "./screen-info.ts";

test("screens: a short name of the device and app from the browser", () => {
  assert.equal(deviceLabel("Mozilla/5.0 (Linux; Android 9; KFMAWI Build/PS7326) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/124.0 Safari/537.36 Fully/1.55"), "Fire HD 10 · Fully Kiosk");
  assert.equal(deviceLabel("Mozilla/5.0 (Linux; Android 11; SM-T500) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36 Home Assistant/2025.1"), "SM-T500 · HA app");
  assert.equal(deviceLabel("Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"), "iPad · Safari");
  assert.equal(deviceLabel("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36 Edg/130.0"), "Windows · Edge");
  assert.equal(deviceLabel(""), null);
});
