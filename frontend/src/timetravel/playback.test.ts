import assert from "node:assert/strict";
import { test } from "node:test";
import { crossedEvent, DEFAULT_SPEED, eventNear, parseMoment, Playback, SPEEDS, tickMs, WEEK_SPEEDS } from "./playback.ts";

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

test("the week: a day in six seconds; a new range keeps the moment inside and a speed it offers", () => {
  const p = new Playback(0, 7 * 86400000, 86400000, 14400, WEEK_SPEEDS);
  assert.equal(p.speed, 14400);
  p.play();
  p.advance(1000);
  assert.equal(p.t, 86400000 + 14400000);
  p.setRange(6 * 86400000, 7 * 86400000, SPEEDS);
  assert.equal(p.t, 6 * 86400000);
  assert.equal(p.speed, 3600);
  // the live edge moves the end on
  p.setRange(p.start, 8 * 86400000);
  assert.equal(p.end, 8 * 86400000);
});

test("a fast replay finds the first event it rushed past", () => {
  const ev = [
    { t: 100, kind: "door" as const, entity: "a" },
    { t: 200, kind: "water" as const, entity: "b" },
    { t: 300, kind: "smoke" as const, entity: "c" },
  ];
  assert.equal(crossedEvent(ev, 100, 400, () => true)?.entity, "b");
  assert.equal(crossedEvent(ev, 0, 400, (e) => e.kind === "smoke")?.entity, "c");
  assert.equal(crossedEvent(ev, 300, 400, () => true), null);
  assert.equal(crossedEvent(ev, 400, 100, () => true), null);
});
