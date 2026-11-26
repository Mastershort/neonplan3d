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
  assert.equal(manualUrl("de", "time_travel"), "https://neonplan.app/de/anleitung/6-pro-erweiterungen/#67-zeitreise");
  assert.equal(manualUrl("en", "time_travel"), "https://neonplan.app/manual/6-pro-add-ons/#67-time-travel");
});

test("manual and shop links follow the language and point Pro add-ons at their section", () => {
  assert.equal(manualUrl("de"), "https://neonplan.app/de/anleitung/");
  assert.equal(manualUrl("en-GB"), "https://neonplan.app/manual/");
  assert.equal(manualUrl("de", "weather"), "https://neonplan.app/de/anleitung/6-pro-erweiterungen/#62-wetter-drau%C3%9Fen");
  assert.equal(manualUrl("fr", "camera_cockpit"), "https://neonplan.app/manual/6-pro-add-ons/#61-camera-cockpit");
  assert.equal(shopUrl("de-AT"), "https://mastershort.de/neonplan3d/?lang=de");
  assert.equal(shopUrl("nl"), "https://mastershort.de/en/neonplan3d/?lang=en");
});

test("an unreleased add-on shows only to whoever has its pack", async () => {
  const { released, UNRELEASED } = await import("./features.ts");
  const { setPacks } = await import("./packs.ts");
  assert.ok(!UNRELEASED.includes("diagnostics"));
  setPacks([]);
  assert.equal(released("diagnostics"), true);
  assert.equal(released("auto_pro"), true);
  // Pool Pro is not released: hidden, unless the module is installed
  assert.equal(released("pool"), false);
  setPacks([{ id: "mastershort.pro_pool", name: "Pro: Pool Pro", items: [], features: ["pool"] } as never]);
  assert.equal(released("pool"), true);
  setPacks([]);
});
