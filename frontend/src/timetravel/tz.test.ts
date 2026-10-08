import assert from "node:assert/strict";
import { test } from "node:test";
import type { HomeAssistant } from "../types.ts";
import { atClock, dayStart, hourOf, hourStart, nextDay, zoneOf } from "./tz.ts";

const utc = (s: string) => Date.parse(s);

test("time zone: Home Assistant's when the profile says server, else the browser's", () => {
  const hass = (time_zone: string | undefined, server = "America/New_York") => ({ locale: { time_zone }, config: { time_zone: server } }) as unknown as HomeAssistant;
  assert.equal(zoneOf(hass("server")), "America/New_York");
  assert.equal(zoneOf(hass("local")), null);
  assert.equal(zoneOf(hass(undefined)), null);
  assert.equal(zoneOf(hass("server", "Not/AZone")), null);
  assert.equal(zoneOf(null), null);
});

test("time zone: hours, midnights and clock times of a named zone, also across a clock change", () => {
  const ny = "America/New_York";
  // 2026-03-08: New York moves from EST (-5) to EDT (-4) at 2:00
  const t = utc("2026-03-08T15:30:00Z"); // 11:30 EDT
  assert.equal(hourOf(t, ny), 11);
  assert.equal(dayStart(t, ny), utc("2026-03-08T05:00:00Z"));
  assert.equal(nextDay(t, ny), utc("2026-03-09T04:00:00Z"));
  assert.equal(nextDay(t, ny) - dayStart(t, ny), 23 * 3600000);
  assert.equal(hourStart(t, ny), utc("2026-03-08T15:00:00Z"));
  assert.equal(atClock(t, 7, 42, ny), utc("2026-03-08T11:42:00Z"));
  assert.equal(atClock(t, 1, 0, ny), utc("2026-03-08T06:00:00Z"));
  // half an hour off UTC: the hour begins at :30 UTC
  assert.equal(hourStart(utc("2026-03-08T10:10:00Z"), "Asia/Kolkata"), utc("2026-03-08T09:30:00Z"));
  // the browser's zone without a name
  const local = new Date(2026, 9, 8, 13, 20).getTime();
  assert.equal(hourOf(local, null), 13);
  assert.equal(dayStart(local, null), new Date(2026, 9, 8).getTime());
  assert.equal(nextDay(local, null), new Date(2026, 9, 9).getTime());
});
