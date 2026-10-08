import assert from "node:assert/strict";
import { test } from "node:test";
import type { Role } from "./classify.ts";
import { clusterEvents, energyEvents, findEvents, groupByHour, machineDone, MINOR, RANK } from "./events.ts";
import { buildTimeline, type WireEntity } from "./timeline.ts";

const DAY = 1_800_000_000;
const H = 3600;

/** A track from [seconds after the start, state] pairs. */
function rows(...pairs: [number, string][]): WireEntity {
  const tab = [...new Set(pairs.map((p) => p[1]))];
  return { t: pairs.map((p) => p[0]), v: pairs.map((p) => tab.indexOf(p[1])), tab };
}

function timeline(entities: Record<string, WireEntity>, stats = {}) {
  return buildTimeline([{ day_start: DAY, end: DAY + 24 * H, oldest: null, keep_days: 10, entities, stats, missing: [] }]);
}

test("events: the front door, the alarm, water, the lock, the garage and the robot – each change once", () => {
  const tl = timeline({
    "binary_sensor.haustuer": rows([0, "off"], [7 * H, "on"], [7 * H + 30, "off"], [7 * H + 60, "on"], [9 * H, "off"], [12 * H, "on"]),
    "alarm_control_panel.haus": rows([0, "armed_away"], [3 * H, "triggered"], [3 * H + 100, "disarmed"]),
    "binary_sensor.wasser": rows([0, "off"], [10 * H, "on"]),
    "lock.tuer": rows([0, "locked"], [8 * H, "unlocked"]),
    "cover.garage": rows([0, "closed"], [6 * H, "opening"], [6 * H + 20, "open"]),
    "vacuum.saugi": rows([0, "docked"], [10 * H, "cleaning"], [11 * H, "returning"], [11 * H + 300, "docked"]),
    "binary_sensor.fenster": rows([0, "on"]),
  });
  const roles = new Map<string, Role>([
    ["binary_sensor.haustuer", "door"],
    ["alarm_control_panel.haus", "alarm"],
    ["binary_sensor.wasser", "water"],
    ["lock.tuer", "lock"],
    ["cover.garage", "garage"],
    ["vacuum.saugi", "robot"],
  ]);
  const events = findEvents({ timeline: tl, roles, weather: null });
  const at = (s: number) => (DAY + s) * 1000;
  assert.deepEqual(
    events.map((e) => [e.kind, e.t]),
    [
      ["alarm", at(3 * H)],
      ["garage", at(6 * H)],
      // the door opened twice within a minute: one event
      ["door", at(7 * H)],
      ["lock", at(8 * H)],
      // at the same moment the more important one first
      ["water", at(10 * H)],
      ["robot_start", at(10 * H)],
      ["robot_done", at(11 * H + 300)],
      ["door", at(12 * H)],
    ],
  );
});

test("events: a window open while it rains, motion only at night, the washing machine when its power drops", () => {
  const tl = timeline(
    {
      "weather.home": rows([0, "sunny"], [15 * H, "rainy"], [15 * H + 2400, "cloudy"]),
      "binary_sensor.bad_fenster": rows([0, "off"], [14 * H, "on"], [16 * H, "off"]),
      "binary_sensor.kueche_fenster": rows([0, "off"], [17 * H, "on"]),
      "binary_sensor.flur": rows([0, "off"], [2 * H, "on"], [2 * H + 60, "off"], [2 * H + 600, "on"], [2 * H + 660, "off"], [12 * H, "on"], [12 * H + 60, "off"]),
    },
    {
      // 5-minute means: idle, 100 minutes at 400–2000 W, then idle again
      "sensor.waschmaschine": { start: DAY + 11 * H, step: 300, mean: [1, ...Array.from({ length: 20 }, (_, i) => (i < 3 ? 2000 : 400)), 2, 1] },
    },
  );
  const roles = new Map<string, Role>([
    ["binary_sensor.bad_fenster", "window"],
    ["binary_sensor.kueche_fenster", "window"],
    ["binary_sensor.flur", "motion"],
    ["sensor.waschmaschine", "washer"],
  ]);
  const night = (t: number) => (t / 1000 - DAY) / H < 5;
  const events = findEvents({ timeline: tl, roles, weather: "weather.home", night });
  const kinds = events.map((e) => `${e.kind}@${((e.t / 1000 - DAY) / H).toFixed(2)}`);
  // rain started while the bathroom window stood open; the kitchen window opened after the rain
  assert.ok(kinds.includes("rain@15.00"), kinds.join());
  assert.ok(!kinds.some((k) => k.startsWith("rain@17")));
  // motion at 2 am twice within half an hour: once; noon motion is no event
  assert.equal(kinds.filter((k) => k.startsWith("motion")).length, 1);
  assert.ok(kinds.includes("motion@2.00"));
  assert.equal(kinds.filter((k) => k.startsWith("washer")).length, 1);
});

test("a machine is done when its power falls after a real run, not after a short blip", () => {
  const p = (min: number, w: number) => ({ t: min * 60000, w });
  assert.deepEqual(machineDone([p(0, 1), p(5, 500), p(60, 400), p(70, 2)]), [70 * 60000]);
  assert.deepEqual(machineDone([p(0, 1), p(5, 500), p(10, 2)]), []);
});

test("markers closer than a few pixels become one, shown as the most important event", () => {
  const ev = (t: number, kind: keyof typeof RANK) => ({ t, kind, entity: kind });
  const clusters = clusterEvents([ev(0, "motion"), ev(5, "alarm"), ev(9, "door"), ev(100, "washer")], (t) => t, 14);
  assert.equal(clusters.length, 2);
  assert.equal(clusters[0].top.kind, "alarm");
  assert.equal(clusters[0].t, 5);
  assert.equal(clusters[0].events.length, 3);
  assert.equal(clusters[1].top.kind, "washer");
});

test("energy moments: the battery full after it was low, the solar peak of the day", () => {
  const tl = timeline({}, {
    "sensor.soc": { start: DAY, step: 300, mean: [90, 96, 99.5, 100, 94, 99] },
    "sensor.pv": { start: DAY, step: 300, mean: [0, 800, 2500, 1200, 50, 0] },
  });
  const ev = energyEvents(tl, { solar: ["sensor.pv"], soc: ["sensor.soc"] });
  const full = ev.filter((e) => e.kind === "battery_full").map((e) => (e.t / 1000 - DAY) / 300);
  assert.deepEqual(full, [2.5, 5.5]);
  const peak = ev.filter((e) => e.kind === "pv_peak");
  assert.equal(peak.length, 1);
  assert.equal((peak[0].t / 1000 - DAY) / 300, 2.5);
});

test("a window opened is an event for the sheet only; the sheet groups by hour, newest first, by category", () => {
  const tl = timeline({
    "binary_sensor.win": rows([0, "off"], [9 * H, "on"], [10 * H, "off"]),
    "binary_sensor.tilt": rows([0, "off"], [9 * H + 60, "on"]),
    "binary_sensor.front": rows([0, "off"], [9 * H + 600, "on"], [9 * H + 630, "off"]),
  });
  const roles = new Map<Role, Role>() as unknown as Map<string, Role>;
  roles.set("binary_sensor.win", "window");
  roles.set("binary_sensor.tilt", "window_more");
  roles.set("binary_sensor.front", "door");
  const ev = findEvents({ timeline: tl, roles, weather: null });
  assert.deepEqual(
    ev.map((e) => [e.kind, e.entity]),
    [
      ["window", "binary_sensor.win"],
      ["door", "binary_sensor.front"],
    ],
  );
  assert.ok(MINOR.has("window"));
  const groups = groupByHour(ev, new Set(["openings"]));
  assert.equal(groups.length, 1);
  assert.deepEqual(groups[0].events.map((e) => e.kind), ["window", "door"]);
  assert.deepEqual(groupByHour(ev, new Set(["safety"])), []);
});
