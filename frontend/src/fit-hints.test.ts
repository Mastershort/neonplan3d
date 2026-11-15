import assert from "node:assert/strict";
import { test } from "node:test";
import { boughtAnything, fitHints, fitText, offerFor } from "./fit-hints.ts";
import { emptyBuilding, newFloor } from "./model.ts";

const st = (entity_id: string, attributes: Record<string, unknown> = {}) => [entity_id, { entity_id, attributes }] as const;

test("the add-ons that fit come from the home's entities, with a sign of why", () => {
  const states = Object.fromEntries([
    st("camera.front"),
    st("camera.garden"),
    st("camera.garage"),
    st("sensor.pv_power", { device_class: "power" }),
    st("media_player.living_room"),
    st("weather.home"),
    st("sensor.abfall_restmuell"),
    st("sensor.wallbox_power", { device_class: "power" }),
  ]);
  const hints = fitHints(states, emptyBuilding());
  assert.equal(hints.get("camera_cockpit"), "📷 3");
  assert.equal(hints.get("energy_pro"), "☀️");
  assert.equal(hints.get("sound"), "🔊");
  assert.equal(hints.get("weather"), "🌦");
  assert.equal(hints.get("household"), "🗑");
  assert.equal(hints.get("auto_pro"), "🚗");
  assert.equal(hints.has("time_travel"), false);
});

test("nothing that fits: no hints; look-alike names do not count", () => {
  const states = Object.fromEntries([st("light.kitchen"), st("sensor.pixel_charger_type"), st("sensor.plasma_tv_power", { device_class: "power" }), st("sensor.cabin_temperature")]);
  assert.equal(fitHints(states, emptyBuilding()).size, 0);
});

test("the plan counts too: a grid sensor set up, a parking spot", () => {
  const b = emptyBuilding();
  b.energy = { ...b.energy, grid: "sensor.grid" };
  b.floors = [{ ...newFloor("eg", "EG", 0), furniture: [{ id: "p", type: "parking", x: 1, z: 1, w: 2.5, d: 5, h: 0.1, rotation: 0 } as never] }];
  const hints = fitHints({}, b);
  assert.equal(hints.get("energy_pro"), "⚡");
  assert.equal(hints.get("auto_pro"), "🚗");
});

test("a Pro add-on's offer is found by the shop's pack id, a key's purchase tells apart from free packs", () => {
  const offers = [
    { id: "mastershort.pro_energy", kind: "pro", price: "7,90 €" },
    { id: "bundle_all", kind: "bundle", price: "49,90 €" },
  ];
  assert.equal(offerFor(offers, "energy_pro")?.price, "7,90 €");
  assert.equal(offerFor(offers, "weather"), undefined);
  assert.equal(boughtAnything([{ id: "mastershort.fun_winter" }, { id: "living_sample" }]), false);
  assert.equal(boughtAnything([{ id: "fun_pets" }, { id: "living" }]), true);
});

test("the lines in German, English, and English while a further language is not fetched or unknown", () => {
  assert.equal(fitText("de-DE", "fit"), "Passt zu deinem Zuhause");
  assert.equal(fitText("en-GB", "fit"), "Fits your home");
  // further languages come from their lang file; not fetched here, so English
  assert.equal(fitText("nl", "fit"), "Fits your home");
  assert.equal(fitText("ja", "fit"), "Fits your home");
});
