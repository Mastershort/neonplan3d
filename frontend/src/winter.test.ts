import assert from "node:assert/strict";
import { test } from "node:test";
import { setPacks } from "./packs.ts";
import { emptyBuilding, newFloor, type Building } from "./model.ts";
import { fireworkNow, lawnSnow, roofLightsOn, snowLevel } from "./winter.ts";
import type { HomeAssistant } from "./types.ts";

// the pack unlocks the feature
setPacks([{ id: "mastershort.fun_winter", name: "Winter", publisher: "Mastershort", licensee: null, items: [], features: ["fun_winter"] } as never]);

const plan = (winter: Building["settings"]["winter"] = {}): Building => {
  const b = emptyBuilding();
  b.settings.winter = winter;
  b.floors = [{ ...newFloor("eg", "EG", 0), outdoor: [{ id: "lawn", type: "lawn", points: [[0, 0], [5, 0], [5, 5], [0, 5]] }] } as never];
  return b;
};
const hass = (states: Record<string, { state: string; attributes?: Record<string, unknown> }>) => ({ states }) as unknown as HomeAssistant;
const memory = () => {
  const m = new Map<string, string>();
  return { getItem: (k: string) => m.get(k) ?? null, setItem: (k: string, v: string) => void m.set(k, v) };
};

test("winter: the fairy lights shine with their switch, else at night from the first Sunday of Advent to 6 January", () => {
  const night = hass({ "sun.sun": { state: "below_horizon" } });
  assert.equal(roofLightsOn(night, plan(), new Date(2026, 10, 28, 20)), false, "before Advent");
  assert.equal(roofLightsOn(night, plan(), new Date(2026, 11, 2, 20)), true);
  assert.equal(roofLightsOn(hass({ "sun.sun": { state: "above_horizon" } }), plan(), new Date(2026, 11, 2, 12)), false, "by day");
  assert.equal(roofLightsOn(night, plan({ roof_lights: false }), new Date(2026, 11, 2, 20)), false);
  // with a switch of their own: whenever it is on, also in July
  assert.equal(roofLightsOn(hass({ "light.aussen": { state: "on" } }), plan({ roof_entity: "light.aussen" }), new Date(2026, 6, 1)), true);
  assert.equal(roofLightsOn(hass({ "light.aussen": { state: "off" } }), plan({ roof_entity: "light.aussen" }), new Date(2026, 11, 24, 20)), false);
});

test("winter: snow lies while it snows, stays while it freezes and melts within six hours of a thaw", () => {
  const store = memory();
  const t0 = new Date(2026, 11, 10, 8).getTime();
  const w = (state: string, temperature: number) => hass({ "weather.home": { state, attributes: { temperature } } });
  assert.equal(snowLevel(w("cloudy", -3), plan(), "weather.home", t0, store), 0, "never snowed");
  assert.equal(snowLevel(w("snowy", -1), plan(), "weather.home", t0, store), 1);
  assert.equal(snowLevel(w("cloudy", -3), plan(), "weather.home", t0 + 20 * 3600_000, store), 1, "frozen the next day");
  assert.equal(snowLevel(w("sunny", 5), plan(), "weather.home", t0 + 3 * 3600_000, store), 0.5, "half gone after three warm hours");
  assert.equal(snowLevel(w("sunny", 5), plan(), "weather.home", t0 + 7 * 3600_000, store), 0);
  assert.equal(snowLevel(w("snowy", -1), plan({ snow: false }), "weather.home", t0, store), 0, "switched off");
  assert.equal(lawnSnow(plan(), 1).length, 1);
  assert.equal(lawnSnow(plan(), 0).length, 0);
});

test("winter: the firework flies from a minute before midnight on New Year's Eve until ten past", () => {
  assert.deepEqual(
    [new Date(2026, 11, 31, 23, 58), new Date(2026, 11, 31, 23, 59), new Date(2027, 0, 1, 0, 9), new Date(2027, 0, 1, 0, 10)].map((d) => fireworkNow(plan(), d)),
    [false, true, true, false],
  );
  assert.equal(fireworkNow(plan({ firework: false }), new Date(2027, 0, 1, 0, 1)), false);
});
