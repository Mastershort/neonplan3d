import assert from "node:assert/strict";
import { test } from "node:test";
import { hasFeature, manualUrl, shopUrl, unlockedFeatures } from "./features.ts";

test("features come from installed packs that list them; unknown names are ignored", () => {
  assert.deepEqual([...unlockedFeatures([])], []);
  const packs = [{ features: ["weather", "teleport"] }, { features: undefined }, { features: ["camera_cockpit"] }];
  assert.deepEqual([...unlockedFeatures(packs)].sort(), ["camera_cockpit", "weather"]);
  assert.equal(hasFeature("screens", [{ features: ["screens"] }]), true);
  assert.equal(hasFeature("screens", [{ features: ["screens"] }]), true);
  assert.equal(hasFeature("weather", [{ features: ["weather"] }]), true);
  assert.equal(hasFeature("camera_cockpit", [{ features: ["weather"] }]), false);
});

test("time travel is a Pro add-on of its own with its section in the manual", () => {
  assert.equal(hasFeature("time_travel", [{ features: ["time_travel"] }]), true);
  assert.equal(hasFeature("time_travel", [{ features: ["energy_pro"] }]), false);
  assert.equal(manualUrl("de", "time_travel"), "https://mastershort.de/neonplan3d/anleitung/pro-erweiterungen/?lang=de#67-zeitreise");
  assert.equal(manualUrl("en", "time_travel"), "https://mastershort.de/en/neonplan3d/manual/pro-add-ons/?lang=en#67-time-travel");
});

test("manual and shop links follow the language and point Pro add-ons at their section", () => {
  assert.equal(manualUrl("de"), "https://mastershort.de/neonplan3d/anleitung/?lang=de");
  assert.equal(manualUrl("en-GB"), "https://mastershort.de/en/neonplan3d/manual/?lang=en");
  assert.equal(manualUrl("de", "weather"), "https://mastershort.de/neonplan3d/anleitung/pro-erweiterungen/?lang=de#62-wetter-drau%C3%9Fen");
  assert.equal(manualUrl("fr", "camera_cockpit"), "https://mastershort.de/en/neonplan3d/manual/pro-add-ons/?lang=en#61-camera-cockpit");
  assert.equal(shopUrl("de-AT"), "https://mastershort.de/neonplan3d/?lang=de");
  assert.equal(shopUrl("nl"), "https://mastershort.de/en/neonplan3d/?lang=en");
});
