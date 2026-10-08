import assert from "node:assert/strict";
import { test } from "node:test";
import { DEFAULT_SPEED, eventNear, parseMoment, Playback, SPEEDS, tickMs } from "./playback.ts";

test("playback: plays at its speed, stops at the end, starts over, jumps within the range", () => {
  const p = new Playback(0, 3600000, 0);
  assert.equal(p.speed, DEFAULT_SPEED);
  assert.equal(p.advance(1000), false);
  p.play();
  assert.equal(p.advance(1000), true);
  assert.equal(p.t, 360000);
  p.advance(100000);
  assert.equal(p.t, 3600000);
  assert.equal(p.playing, false);
  p.play();
  assert.equal(p.t, 0);
  p.seek(-5);
  assert.equal(p.t, 0);
  p.seek(9e9);
  assert.equal(p.t, 3600000);
  assert.deepEqual(SPEEDS.map(() => p.nextSpeed()), [900, 3600, 60, 360]);
  assert.equal(new Playback(0, 1, 0, 7).speed, DEFAULT_SPEED);
});

test("playback: fewer updates on the tablet level; the next and previous event skip the one at hand", () => {
  assert.equal(tickMs("low", false), 500);
  assert.equal(tickMs("auto", true), 500);
  assert.equal(tickMs("auto", false), 250);
  assert.equal(tickMs("high", false), 167);
  const events = [100000, 200000, 300000].map((t) => ({ t, kind: "door" as const, entity: "x" }));
  assert.equal(eventNear(events, 200000, 1)?.t, 300000);
  assert.equal(eventNear(events, 200000, -1)?.t, 100000);
  assert.equal(eventNear(events, 300000, 1), null);
  assert.equal(eventNear(events, 50000, -1), null);
});

test("a start moment from a link: a clock time today (or yesterday) or a time ago", () => {
  const now = new Date(2026, 9, 8, 12, 0).getTime();
  assert.equal(parseMoment("07:42", now), new Date(2026, 9, 8, 7, 42).getTime());
  assert.equal(parseMoment("23:10", now), new Date(2026, 9, 7, 23, 10).getTime());
  assert.equal(parseMoment("-3h", now), now - 3 * 3600000);
  assert.equal(parseMoment("-90m", now), now - 90 * 60000);
  assert.equal(parseMoment("-1,5h", now), now - 1.5 * 3600000);
  assert.equal(parseMoment("25:00", now), null);
  assert.equal(parseMoment("", now), null);
  assert.equal(parseMoment(null, now), null);
});
