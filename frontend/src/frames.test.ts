import assert from "node:assert/strict";
import { test } from "node:test";
import { calendarColor, dayLabel, dueReminders, eventPhase, forecastDays, frameCalendars, frameDays, frameEvents, isBirthday, personStatuses, rainSoon, slideIndex, timeLabel, todoOrder } from "./frames.ts";

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


test("what runs now or starts soon, birthdays, the slideshow's turn and the to-do order", () => {
  const now = new Date(2026, 10, 10, 17, 40);
  const events = frameEvents(byCal, ["calendar.family"]);
  const training = events.find((e) => e.summary === "Elternabend")!;
  assert.equal(eventPhase({ ...training, start: new Date(2026, 10, 10, 17, 30), end: new Date(2026, 10, 10, 19, 0) }, now), "now");
  assert.equal(eventPhase({ ...training, start: new Date(2026, 10, 10, 18, 0), end: null }, now), "soon");
  assert.equal(eventPhase({ ...training, start: new Date(2026, 10, 10, 19, 0), end: null }, now), null);
  assert.equal(isBirthday({ ...training, summary: "Omas Geburtstag" }), true);
  assert.equal(isBirthday({ ...training, calendar: "calendar.birthdays", summary: "Paul" }), true);
  assert.equal(isBirthday(training), false);
  assert.equal(slideIndex(3, 30, 95_000), 0);
  assert.equal(slideIndex(3, 30, 125_000), 1);
  assert.equal(slideIndex(1, 30, 125_000), 0);
  const items = todoOrder([
    { uid: "a", summary: "Milch", status: "completed" },
    { uid: "b", summary: "Brot", status: "needs_action" },
    { uid: "c", summary: "Eier", status: "needs_action" },
  ]);
  assert.deepEqual(items.map((i) => i.uid), ["b", "c", "a"]);
});

test("forecast days from today on, a rain warning within the next hours, people at home first", () => {
  const now = new Date(2026, 10, 10, 12, 0);
  const daily = [
    { datetime: "2026-11-09T12:00:00+01:00", condition: "sunny", temperature: 12, templow: 4 },
    { datetime: "2026-11-10T12:00:00+01:00", condition: "cloudy", temperature: 9, templow: 3 },
    { datetime: "2026-11-11T12:00:00+01:00", condition: "rainy", temperature: 8, templow: 5, precipitation_probability: 80 },
  ];
  const days = forecastDays(daily, now, 3);
  assert.deepEqual(days.map((d) => [d.offset, d.condition, d.hi, d.lo]), [[0, "cloudy", 9, 3], [1, "rainy", 8, 5]]);
  const hourly = [
    { datetime: "2026-11-10T12:00:00+01:00", precipitation_probability: 10 },
    { datetime: "2026-11-10T14:00:00+01:00", precipitation_probability: 70 },
  ];
  assert.deepEqual(rainSoon(hourly, now), { inHours: 2, probability: 70 });
  assert.equal(rainSoon([{ datetime: "2026-11-10T20:00:00+01:00", precipitation_probability: 90 }], now), null);
  const states = {
    "person.a": { entity_id: "person.a", state: "not_home", attributes: { friendly_name: "Anna" } },
    "person.b": { entity_id: "person.b", state: "home", attributes: { friendly_name: "Ben" }, last_changed: "2026-11-10T10:00:00+01:00" },
  };
  const people = personStatuses(states, [], new Map([["person.b", "Küche"]]));
  assert.deepEqual(people.map((p) => [p.name, p.home, p.room]), [["Ben", true, "Küche"], ["Anna", false, null]]);
  // reminders: 15 minutes before, once
  const soon = { ...frameEvents(byCal, ["calendar.family"])[0], start: new Date(2026, 10, 10, 12, 15), end: null, allDay: false };
  const due = dueReminders([soon], 15, now, new Set());
  assert.equal(due.length, 1);
  assert.equal(dueReminders([soon], 15, new Date(2026, 10, 10, 11, 50), new Set()).length, 0);
});
