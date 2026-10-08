import assert from "node:assert/strict";
import { test } from "node:test";
import { robotRun } from "./robot.ts";
import { buildTimeline, type WireEntity } from "./timeline.ts";

const DAY = 1_800_000_000;
const at = (s: number) => (DAY + s) * 1000;
function rows(...pairs: [number, string | [string, Record<string, unknown>]][]): WireEntity {
  const keys = pairs.map((p) => JSON.stringify(p[1]));
  const tab = [...new Set(keys)];
  return { t: pairs.map((p) => p[0]), v: keys.map((k) => tab.indexOf(k)), tab: tab.map((k) => JSON.parse(k)) };
}

test("the robot's run: the rooms in the order they were cleaned, each stay once; nothing while it rests", () => {
  const tl = buildTimeline([
    {
      day_start: DAY,
      end: DAY + 86400,
      oldest: null,
      keep_days: 10,
      entities: {
        "vacuum.r": rows([0, "docked"], [1000, "cleaning"], [3000, "returning"], [3300, "docked"], [5000, "cleaning"]),
        "sensor.room": rows([0, "Flur"], [1100, "Küche"], [1500, "Bad"], [1800, "unknown"], [2000, "Küche"], [5100, "Wohnen"]),
      },
      stats: {},
      missing: [],
    },
  ]);
  const v = tl.tracks.get("vacuum.r");
  const r = tl.tracks.get("sensor.room");
  assert.deepEqual(robotRun(v, r, at(500)), []);
  assert.deepEqual(robotRun(v, r, at(1600)), ["Küche", "Bad"]);
  assert.deepEqual(robotRun(v, r, at(3100)), ["Küche", "Bad", "Küche"]);
  assert.deepEqual(robotRun(v, r, at(4000)), []);
  // a new run starts with an empty way (the room left from the last run does not count)
  assert.deepEqual(robotRun(v, r, at(5200)), ["Wohnen"]);
  assert.deepEqual(robotRun(undefined, r, at(1600)), []);
});

test("without a room sensor the vacuum's current_room attribute tells the rooms", () => {
  const tl = buildTimeline([
    {
      day_start: DAY,
      end: DAY + 86400,
      oldest: null,
      keep_days: 10,
      entities: { "vacuum.r": rows([0, "docked"], [100, ["cleaning", { current_room: "Bad" }]], [200, ["cleaning", { current_room: "Flur" }]]) },
      stats: {},
      missing: [],
    },
  ]);
  assert.deepEqual(robotRun(tl.tracks.get("vacuum.r"), undefined, at(300)), ["Bad", "Flur"]);
});
