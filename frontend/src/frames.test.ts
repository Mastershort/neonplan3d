import assert from "node:assert/strict";
import { test } from "node:test";
import { calendarColor, dayLabel, frameCalendars, frameDays, frameEvents, timeLabel } from "./frames.ts";

const byCal = new Map([
  [
    "calendar.family",
    [
      { summary: "Zahnarzt", start: { dateTime: "2026-11-10T15:00:00+01:00" }, end: { dateTime: "2026-11-10T15:45:00+01:00" } },
      { summary: "Elternabend", start: { dateTime: "2026-11-12T19:00:00+01:00" }, end: { dateTime: "2026-11-12T21:00:00+01:00" } },
      { summary: "Frühstück", start: { dateTime: "2026-11-10T07:00:00+01:00" }, end: { dateTime: "2026-11-10T07:30:00+01:00" } },
    ],
  ],
  ["calendar.waste", [{ summary: "Papiertonne", start: { date: "2026-11-11" }, end: { date: "2026-11-12" } }]],
  ["calendar.holidays", [{ summary: "Herbstferien", start: { date: "2026-11-09" }, end: { date: "2026-11-14" } }]],
]);

test("a frame reads several calendars at once, sorted by start, all-day first within a day", () => {
  const f = { frame_kind: "calendar" as const, frame_source: "calendar.family, calendar.waste,calendar.holidays" };
  assert.deepEqual(frameCalendars(f), ["calendar.family", "calendar.waste", "calendar.holidays"]);
  const events = frameEvents(byCal, frameCalendars(f));
  assert.deepEqual(
    events.map((e) => e.summary),
    ["Herbstferien", "Frühstück", "Zahnarzt", "Papiertonne", "Elternabend"],
  );
  assert.equal(events[0].allDay, true);
  assert.equal(events[1].allDay, false);
});

test("the next days: a timed event long over leaves today, a spanning all-day event shows on each of its days", () => {
  const now = new Date(2026, 10, 10, 12, 0); // 10 Nov 2026, noon
  const days = frameDays(frameEvents(byCal, ["calendar.family", "calendar.waste", "calendar.holidays"]), now, 4);
  assert.equal(days.length, 4);
  // breakfast ended at 7:30, more than an hour ago: gone; the dentist stays; the holidays span today
  assert.deepEqual(days[0].events.map((e) => e.summary), ["Herbstferien", "Zahnarzt"]);
  assert.deepEqual(days[1].events.map((e) => e.summary), ["Herbstferien", "Papiertonne"]);
  assert.deepEqual(days[2].events.map((e) => e.summary), ["Herbstferien", "Elternabend"]);
  assert.deepEqual(days[3].events.map((e) => e.summary), ["Herbstferien"]);
  // the holidays end on the 14th (exclusive): not on the 14th
  const later = frameDays(frameEvents(byCal, ["calendar.holidays"]), new Date(2026, 10, 14, 9, 0), 1);
  assert.deepEqual(later[0].events, []);
});

test("labels: today and tomorrow by word, later days by weekday; times as a span, all-day by word", () => {
  const now = new Date(2026, 10, 10, 12, 0);
  const days = frameDays(frameEvents(byCal, ["calendar.family"]), now, 3);
  const words = { today: "Heute", tomorrow: "Morgen" };
  assert.equal(dayLabel(days[0], "de-DE", words), "Heute");
  assert.equal(dayLabel(days[1], "de-DE", words), "Morgen");
  assert.match(dayLabel(days[2], "de-DE", words), /^Do/);
  const dentist = days[0].events.find((e) => e.summary === "Zahnarzt")!;
  assert.equal(timeLabel(dentist, "de-DE", "ganztägig"), "15:00–15:45");
  const paper = frameEvents(byCal, ["calendar.waste"])[0];
  assert.equal(timeLabel(paper, "de-DE", "ganztägig"), "ganztägig");
  // colours follow the frame's own order of calendars
  assert.equal(calendarColor(["calendar.waste", "calendar.family"], "calendar.family"), calendarColor(["x", "y"], "y"));
  assert.notEqual(calendarColor(["calendar.waste", "calendar.family"], "calendar.family"), calendarColor(["calendar.family"], "calendar.family"));
});
