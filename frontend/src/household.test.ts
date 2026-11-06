import assert from "node:assert/strict";
import { test } from "node:test";
import { applianceIdle, binColors, binDue, binGlows, binNext, binOut, binOutToggleable, binTagsShown, FinishedMemory, fridgeOpenTooLong, groupTags, householdEntities, isFinishedState, mailboxBase, mailboxPost, nextFridgeCheck, pickupsOf, plantThirsty, remainingMinutes, remainingText, sensorDays, serviceDue, servicesDue, wasteCalendars, wasteColors, wasteMatches, type HouseholdTag } from "./household.ts";
import type { Furniture } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}, last_changed?: string): HassEntity => ({ entity_id, state, attributes, last_changed }) as HassEntity;
const hassOf = (...states: HassEntity[]): HomeAssistant => ({ states: Object.fromEntries(states.map((s) => [s.entity_id, s])) }) as unknown as HomeAssistant;

test("calendar entries are found by the words of each kind of waste, in many languages", () => {
  assert.ok(wasteMatches("Papiertonne", "paper"));
  assert.ok(wasteMatches("Altpapier / Pappe", "paper"));
  assert.ok(wasteMatches("Biotonne", "bio"));
  assert.ok(wasteMatches("Restmüll 14-täglich", "rest"));
  assert.ok(wasteMatches("Gelber Sack", "plastic"));
  assert.ok(wasteMatches("GFT-afval", "bio"));
  assert.ok(wasteMatches("PMD", "plastic"));
  assert.ok(wasteMatches("Recycling collection", "recycling"));
  assert.ok(wasteMatches("Garden waste", "garden"));
  assert.ok(wasteMatches("Collecte des emballages", "plastic"));
  // one kind's entry is not another's
  assert.ok(!wasteMatches("Papiertonne", "bio"));
  assert.ok(!wasteMatches("Biotonne", "paper"));
  // an own word wins (a "Grüne Tonne" that takes paper in one town)
  assert.ok(wasteMatches("Grüne Tonne", "paper", "grüne tonne"));
  assert.ok(!wasteMatches("Papier", "paper", "grüne tonne"));
  assert.ok(!wasteMatches("Papier", "other"));
});

test("all-day events are local days; the waste calendars of the bins are collected once", () => {
  const p = pickupsOf([{ summary: "Bio", start: { date: "2026-10-16" } }, { summary: "Papier", start: { dateTime: "2026-10-15T06:00:00+02:00" } }, { summary: "broken" }]);
  assert.equal(p.length, 2);
  assert.equal(p[0].summary, "Papier");
  assert.equal(p[1].day.getDate(), 16);
  assert.equal(p[1].day.getHours(), 0);
  const floors = [{ furniture: [{ type: "waste_bin", bin_source: "calendar.abfall" }, { type: "waste_bin", bin_source: "calendar.abfall" }, { type: "waste_bin", bin_source: "sensor.papier" }] as Furniture[] }];
  assert.deepEqual(wasteCalendars(floors), ["calendar.abfall"]);
});

test("a bin glows from 2 pm the day before until noon on the day", () => {
  const at = (h: number) => new Date(2026, 9, 15, h, 0);
  assert.equal(binGlows(1, at(13)), false);
  assert.equal(binGlows(1, at(14)), true);
  assert.equal(binGlows(0, at(7)), true);
  assert.equal(binGlows(0, at(12)), false);
  assert.equal(binGlows(2, at(20)), false);
});

test("the next pickup of a bin from its calendar; after noon on the day the next one counts", () => {
  const pickups = new Map([["calendar.abfall", pickupsOf([
    { summary: "Papier", start: { date: "2026-10-15" } },
    { summary: "Bio", start: { date: "2026-10-16" } },
    { summary: "Papier", start: { date: "2026-10-29" } },
  ])]]);
  const paper = { bin_kind: "paper", bin_source: "calendar.abfall" } as Furniture;
  const bio = { bin_kind: "bio", bin_source: "calendar.abfall" } as Furniture;
  const hass = hassOf();
  const morning = new Date(2026, 9, 15, 8, 0);
  assert.deepEqual([binDue(paper, hass, pickups, morning)?.days, binDue(paper, hass, pickups, morning)?.glow], [0, true]);
  assert.deepEqual([binDue(bio, hass, pickups, morning)?.days, binDue(bio, hass, pickups, morning)?.glow], [1, false]);
  const evening = new Date(2026, 9, 15, 18, 0);
  assert.equal(binDue(bio, hass, pickups, evening)?.glow, true);
  // the paper bin was emptied this morning: two weeks to go
  assert.equal(binDue(paper, hass, pickups, evening)?.days, 14);
  assert.equal(binDue({ bin_kind: "glass", bin_source: "calendar.abfall" } as Furniture, hass, pickups, morning), null);
  assert.equal(binDue({ bin_kind: "paper" } as Furniture, hass, pickups, morning), null);
});

test("a sensor gives the days left: a number, a date, Waste Collection Schedule's daysTo, a phrase", () => {
  const now = new Date(2026, 9, 15, 10, 0);
  assert.equal(sensorDays(st("sensor.a", "2"), now), 2);
  assert.equal(sensorDays(st("sensor.a", "2026-10-17"), now), 2);
  assert.equal(sensorDays(st("sensor.a", "Papier in 3 Tagen", { daysTo: 3 }), now), 3);
  assert.equal(sensorDays(st("sensor.a", "Morgen"), now), 1);
  assert.equal(sensorDays(st("sensor.a", "Today"), now), 0);
  assert.equal(sensorDays(st("sensor.a", "in 5 days"), now), 5);
  const bin = { bin_kind: "paper", bin_source: "sensor.a" } as Furniture;
  assert.equal(binDue(bin, hassOf(st("sensor.a", "1")), new Map(), new Date(2026, 9, 15, 15, 0))?.glow, true);
});

test("post lies in a mailbox: a flag's state, or a flap after the last emptying (within a week)", () => {
  const now = Date.parse("2026-10-15T12:00:00Z");
  assert.equal(mailboxPost({ entity: "input_boolean.post" } as Furniture, hassOf(st("input_boolean.post", "on")), now), true);
  assert.equal(mailboxPost({ entity: "input_boolean.post" } as Furniture, hassOf(st("input_boolean.post", "off")), now), false);
  assert.equal(mailboxPost({ entity: "counter.letters" } as Furniture, hassOf(st("counter.letters", "2")), now), true);
  const box = { entity: "binary_sensor.flap", mailbox_door: "binary_sensor.door" } as Furniture;
  const flap = (t: string) => st("binary_sensor.flap", "off", {}, t);
  const door = (t: string) => st("binary_sensor.door", "off", {}, t);
  assert.equal(mailboxPost(box, hassOf(flap("2026-10-15T09:00:00Z"), door("2026-10-14T18:00:00Z")), now), true);
  assert.equal(mailboxPost(box, hassOf(flap("2026-10-15T09:00:00Z"), door("2026-10-15T10:00:00Z")), now), false);
  // the same moment for both (a restart of Home Assistant): nothing glows
  assert.equal(mailboxPost(box, hassOf(flap("2026-10-15T09:00:00Z"), door("2026-10-15T09:00:00Z")), now), false);
  // a flap that last moved two weeks ago
  assert.equal(mailboxPost(box, hassOf(flap("2026-10-01T09:00:00Z"), door("2026-09-30T09:00:00Z")), now), false);
  assert.equal(mailboxPost({ entity: "none" } as Furniture, hassOf(), now), false);
});

test("bins start from the colours of their country; own colours win; a wall mailbox hangs at 1 m", () => {
  assert.deepEqual(wasteColors("paper", "DE"), ["#1f4fa8", "#1f4fa8"]);
  // Australia: the lid tells the kind
  assert.notEqual(wasteColors("rest", "AU")[0], wasteColors("rest", "AU")[1]);
  // a country without its own list: the default
  assert.deepEqual(wasteColors("bio", "JP"), wasteColors("bio", "default"));
  assert.deepEqual(binColors({ bin_kind: "paper", bin_color: "#112233" }, "DE"), ["#112233", "#112233"]);
  assert.deepEqual(binColors({ bin_kind: "paper", bin_color: "#112233", bin_lid: "#ff0000" }, "DE"), ["#112233", "#ff0000"]);
  assert.equal(mailboxBase({ variant: null }), 1);
  assert.equal(mailboxBase({ variant: "pole" }), 0);
});

test("a plant is thirsty: a plant entity's moisture problem, or a sensor below its minimum", () => {
  assert.equal(plantThirsty({ moisture: "plant.monstera" }, hassOf(st("plant.monstera", "problem", { problem: "moisture low" }))), true);
  assert.equal(plantThirsty({ moisture: "plant.monstera" }, hassOf(st("plant.monstera", "problem", { problem: "moisture high" }))), false);
  assert.equal(plantThirsty({ moisture: "plant.monstera" }, hassOf(st("plant.monstera", "ok", { moisture_status: "Low" }))), true);
  assert.equal(plantThirsty({ moisture: "sensor.soil" }, hassOf(st("sensor.soil", "12"))), true);
  assert.equal(plantThirsty({ moisture: "sensor.soil", moisture_min: 10 }, hassOf(st("sensor.soil", "12"))), false);
  assert.equal(plantThirsty({ moisture: "none" }, hassOf()), false);
});

test("the time left of a program: minutes, seconds, hours, an end time, H:MM", () => {
  const now = Date.parse("2026-10-15T12:00:00Z");
  assert.equal(remainingMinutes(st("sensor.left", "23"), now), 23);
  assert.equal(remainingMinutes(st("sensor.left", "1380", { unit_of_measurement: "s" }), now), 23);
  assert.equal(remainingMinutes(st("sensor.left", "1.5", { unit_of_measurement: "h" }), now), 90);
  assert.equal(remainingMinutes(st("sensor.end", "2026-10-15T12:45:00+00:00", { device_class: "timestamp" }), now), 45);
  assert.equal(remainingMinutes(st("sensor.left", "1:05"), now), 65);
  assert.equal(remainingMinutes(st("sensor.left", "unavailable"), now), null);
  assert.equal(remainingText(23), "23 min");
  assert.equal(remainingText(65), "1:05 h");
  assert.ok(isFinishedState(st("sensor.program", "Finished")));
  assert.ok(isFinishedState(st("sensor.program", "Beendet")));
  assert.ok(isFinishedState(st("sensor.program", "Terminé")));
  assert.ok(!isFinishedState(st("sensor.program", "run")));
});

test("a service is due: a binary sensor on, a number at its threshold, a date reached", () => {
  const now = new Date(2026, 9, 15, 10, 0);
  assert.equal(serviceDue({ service: "binary_sensor.salt" }, hassOf(st("binary_sensor.salt", "on")), now), true);
  assert.equal(serviceDue({ service: "binary_sensor.salt" }, hassOf(st("binary_sensor.salt", "off")), now), false);
  assert.equal(serviceDue({ service: "sensor.filter" }, hassOf(st("sensor.filter", "8")), now), true);
  assert.equal(serviceDue({ service: "sensor.filter", service_min: 5 }, hassOf(st("sensor.filter", "8")), now), false);
  assert.equal(serviceDue({ service: "input_datetime.filter" }, hassOf(st("input_datetime.filter", "2026-10-14")), now), true);
  assert.equal(serviceDue({ service: "input_datetime.filter" }, hassOf(st("input_datetime.filter", "2026-11-01")), now), false);
});

test("a fridge door warns after its limit, and the view knows when to look again", () => {
  const now = Date.parse("2026-10-15T12:00:00Z");
  const fridge = { id: "k", type: "fridge", door_left: "binary_sensor.fridge" } as Furniture;
  const hass = (state: string, since: string) => hassOf(st("binary_sensor.fridge", state, {}, since));
  assert.equal(fridgeOpenTooLong(fridge, hass("on", "2026-10-15T11:59:00Z"), now), null);
  assert.equal(fridgeOpenTooLong(fridge, hass("on", "2026-10-15T11:57:00Z"), now), "binary_sensor.fridge");
  assert.equal(fridgeOpenTooLong({ ...fridge, door_alarm: 5 }, hass("on", "2026-10-15T11:57:00Z"), now), null);
  assert.equal(fridgeOpenTooLong(fridge, hass("off", "2026-10-15T11:00:00Z"), now), null);
  assert.equal(nextFridgeCheck([fridge], hass("on", "2026-10-15T11:59:30Z"), now), 90_000);
  assert.equal(nextFridgeCheck([fridge], hass("off", "2026-10-15T11:59:30Z"), now), null);
});

test("an appliance that stopped while the page was open shows finished until its door opens", () => {
  const m = new FinishedMemory();
  const t0 = 1_000_000;
  const shut = () => false;
  assert.equal(m.update("w", false, shut, t0), false);
  assert.equal(m.update("w", true, shut, t0 + 1000), false);
  assert.equal(m.update("w", false, shut, t0 + 2000), true);
  assert.equal(m.update("w", false, shut, t0 + 60_000), true);
  // the door opened after it ended
  assert.equal(m.update("w", false, (t) => t < t0 + 100_000, t0 + 120_000), false);
  assert.equal(m.update("w", false, shut, t0 + 130_000), false);
  // twelve hours later it forgets
  m.update("x", true, shut, t0);
  m.update("x", false, shut, t0 + 1000);
  assert.equal(m.update("x", false, shut, t0 + 13 * 3600_000), false);
});

test("the glow hours can be set for the house; a tap on a bin lists its next pickups", () => {
  assert.equal(binGlows(1, new Date(2026, 9, 15, 9, 0), { from: 8 }), true);
  assert.equal(binGlows(1, new Date(2026, 9, 15, 7, 30), { from: 8 }), false);
  assert.equal(binGlows(0, new Date(2026, 9, 15, 15, 0), { until: 18 }), true);
  const pickups = new Map([["calendar.abfall", pickupsOf([
    { summary: "Papier", start: { date: "2026-10-15" } },
    { summary: "Bio", start: { date: "2026-10-16" } },
    { summary: "Papier", start: { date: "2026-10-29" } },
    { summary: "Papier", start: { date: "2026-11-12" } },
    { summary: "Papier", start: { date: "2026-11-26" } },
  ])]]);
  const next = binNext({ bin_kind: "paper", bin_source: "calendar.abfall" }, hassOf(), pickups, new Date(2026, 9, 15, 18, 0));
  assert.deepEqual(next.map((p) => p.day.getDate()), [15, 29, 12]);
  assert.deepEqual(binNext({ bin_kind: "paper", bin_source: "sensor.p" }, hassOf(st("sensor.p", "3")), pickups, new Date(2026, 9, 15, 18, 0)).map((p) => p.day.getDate()), [18]);
});

test("a sensor's free text: the days, not another number in it (D576)", () => {
  const st = (state: string) => ({ entity_id: "sensor.rest", state, attributes: {} });
  assert.equal(sensorDays(st("Restabfalltonne 2-wöchentlich in 4 Tagen")), 4);
  assert.equal(sensorDays(st("in 3 days")), 3);
  assert.equal(sensorDays(st("Bio: 11 dagen")), 11);
  assert.equal(sensorDays(st("Tonne 120 l, 5")), 5);
});

test("a day-first date with dashes and Afvalbeheer's Days_until (#962)", () => {
  const now = new Date(2026, 10, 6, 9, 0);
  const st = (state: string, attributes: Record<string, unknown> = {}) => ({ entity_id: "sensor.afval", state, attributes });
  assert.equal(sensorDays(st("17-11-2026"), now), 11);
  assert.equal(sensorDays(st("Maandag, 09-11-2026"), now), 3);
  assert.equal(sensorDays(st("Donderdag, 12-11-2026"), now), 6);
  // a range of days is no date
  assert.equal(sensorDays(st("in 2-4 days"), now), 4);
  assert.equal(sensorDays(st("Maandag, 09-11-2026", { Days_until: 3 }), now), 3);
  assert.equal(sensorDays(st("whatever", { Days_until: "5" }), now), 5);
});

test("a sensor's date in its text: Waste Collection Schedule's formats (1.20.1 took the year for the days)", () => {
  const now = new Date(2026, 9, 19, 9, 0);
  const st = (state: string) => ({ entity_id: "sensor.bio", state, attributes: {} });
  assert.equal(sensorDays(st("on Mon, 26.10.2026"), now), 7);
  assert.equal(sensorDays(st("am Mo, 19.10.2026"), now), 0);
  assert.equal(sensorDays(st("Biotonne 28.10."), now), 9);
  assert.equal(sensorDays(st("2026-10-29 (Do)"), now), 10);
  assert.equal(sensorDays(st("29/10/2026"), now), 10);
  assert.equal(sensorDays(st("10/29/2026"), now), 10);
  // a date without a year that has passed this year is next year's
  assert.equal(sensorDays(st("Weihnachtsbaum 05.01."), now), 78);
  // numbers that are no date stay as they were
  assert.equal(sensorDays(st("Restabfalltonne 2-wöchentlich in 4 Tagen"), now), 4);
});

test("the pickup day across a clock change is the right calendar day (D576)", () => {
  // Saturday 17 October 2026, the clocks go back on the 25th: 11 days later is Wednesday the 28th
  const now = new Date(2026, 9, 17, 10, 0);
  const hass = { states: { "sensor.bio": { entity_id: "sensor.bio", state: "11", attributes: {} } } } as unknown as Parameters<typeof binDue>[1];
  const due = binDue({ bin_kind: "bio", bin_source: "sensor.bio", bin_match: null }, hass, new Map(), now);
  assert.equal(due?.day.getDate(), 28);
  assert.equal(due?.day.getDay(), 3);
});

const tag = (id: string, x: number, days: number, extra: Partial<HouseholdTag> = {}): HouseholdTag => ({ id, floorId: "eg", x, z: 0, y: 1, r: 0.37, name: id, color: "#888888", when: `${days}`, days, ...extra });

test("bins standing together share one tag, its lines in pickup order; a mailbox and bins far apart keep their own", () => {
  const groups = groupTags([tag("paper", 0.65, 1), tag("rest", 0, 0), tag("bio", 1.3, 3), tag("far", 5, 0), tag("mail", 0.3, -1, { icon: "mail" }), tag("other floor", 0.65, 2, { floorId: "og" })]);
  assert.equal(groups.length, 4);
  const row = groups.find((g) => g.lines.length === 3)!;
  assert.deepEqual(row.lines.map((l) => l.id), ["rest", "paper", "bio"]);
  assert.ok(Math.abs(row.x - 0.65) < 1e-9);
  assert.ok(groups.some((g) => g.lines[0].id === "mail" && g.lines.length === 1));
  assert.ok(groups.some((g) => g.lines[0].id === "far"));
  assert.ok(groups.some((g) => g.lines[0].id === "other floor"));
});

test("tags only for the next pickup and only some days before; by default every bin keeps its tag", () => {
  const bins = [
    { id: "rest", days: 0 },
    { id: "rest2", days: 0 },
    { id: "paper", days: 1 },
    { id: "bio", days: 5 },
  ];
  assert.deepEqual([...binTagsShown(bins)], ["rest", "rest2", "paper", "bio"]);
  assert.deepEqual([...binTagsShown(bins, { nextOnly: true })], ["rest", "rest2"]);
  assert.deepEqual([...binTagsShown(bins, { ahead: 1 })], ["rest", "rest2", "paper"]);
  assert.deepEqual([...binTagsShown(bins, { ahead: 0, nextOnly: true })], ["rest", "rest2"]);
  assert.deepEqual([...binTagsShown([{ id: "bio", days: 5 }], { ahead: 2 })], []);
  assert.deepEqual([...binTagsShown([{ id: "bio", days: 5 }], { nextOnly: true, ahead: null })], ["bio"]);
});

test("a bin is put out while its helper is on; only a helper or a switch can be tapped", () => {
  const hass = hassOf(st("input_boolean.rest_out", "on"), st("binary_sensor.paper_out", "off"));
  assert.ok(binOut({ bin_out: "input_boolean.rest_out" }, hass));
  assert.ok(!binOut({ bin_out: "binary_sensor.paper_out" }, hass));
  assert.ok(!binOut({ bin_out: null }, hass));
  assert.ok(!binOut({ bin_out: "input_boolean.missing" }, hass));
  assert.ok(binOutToggleable({ bin_out: "switch.x" }) && binOutToggleable({ bin_out: "input_boolean.x" }));
  assert.ok(!binOutToggleable({ bin_out: "binary_sensor.x" }) && !binOutToggleable({}));
  assert.deepEqual(householdEntities({ type: "waste_bin", bin_source: "calendar.a", bin_out: "input_boolean.rest_out" } as Furniture), ["calendar.a", "input_boolean.rest_out"]);
});

test("a robot vacuum's second service (its dock) is due on its own threshold", () => {
  const hass = hassOf(st("sensor.brush", "40"), st("sensor.dock_bag", "3"), st("binary_sensor.filter", "on"));
  assert.deepEqual(servicesDue({ service: "sensor.brush", service_min: 10, service2: "sensor.dock_bag", service2_min: 5 }, hass), ["sensor.dock_bag"]);
  assert.deepEqual(servicesDue({ service: "binary_sensor.filter", service2: "sensor.dock_bag", service2_min: 2 }, hass), ["binary_sensor.filter"]);
  assert.deepEqual(servicesDue({ service: "binary_sensor.filter", service2: "sensor.dock_bag" }, hass), ["binary_sensor.filter", "sensor.dock_bag"]);
  // the same entity twice is one line
  assert.deepEqual(servicesDue({ service: "binary_sensor.filter", service2: "binary_sensor.filter" }, hass), ["binary_sensor.filter"]);
  assert.deepEqual(servicesDue({}, hass), []);
});

test("no time left while the appliance is off or idle: a leftover on its display after a power cut", () => {
  // its plug off, its own state idle, its status sensor ready
  assert.ok(applianceIdle(st("switch.washer_plug", "off"), null, 10));
  assert.ok(applianceIdle(st("sensor.dishwasher_status", "Ready", { device_class: "enum" }), null, 10));
  assert.ok(applianceIdle(st("binary_sensor.washer_running", "off"), 50, 10));
  // standby power: idle, even while the plug's switch is on
  assert.ok(applianceIdle(st("switch.washer_plug", "on"), 1.5, 10));
  assert.ok(applianceIdle(undefined, 0.4, 10));
  // running: power above the threshold, or a status that tells a program (a soak with little power)
  assert.ok(!applianceIdle(st("switch.washer_plug", "on"), 1800, 10));
  assert.ok(!applianceIdle(st("sensor.washer_status", "Running", { device_class: "enum" }), 2, 10));
  assert.ok(!applianceIdle(st("binary_sensor.washer_running", "on"), 2, 10));
  // nothing known: not idle (the time left alone tells it runs)
  assert.ok(!applianceIdle(undefined, null, 10));
  assert.ok(!applianceIdle(st("switch.washer_plug", "on"), null, 10));
});

test("pack plants are plants by their name, not only by the palette's leaf colour (#712)", async () => {
  const { setPacks, packType } = await import("./packs.ts");
  const { isPackPlant } = await import("./household.ts");
  const part = (color: string) => ({ shape: "box", x: 0, y: 0, z: 0, w: 0.1, h: 0.1, d: 0.1, color });
  setPacks([
    {
      id: "deco",
      name: "Deko",
      items: [
        { id: "plant_monstera_m", name: { de: "Monstera mittel" }, size: [0.6, 0.6, 1.2], parts: [part("pot"), part("#2f6b4a"), part("#1e4a3a")] },
        { id: "humidifier", name: { de: "Luftbefeuchter", en: "Humidifier" }, size: [0.3, 0.3, 0.4], parts: [part("white")] },
        { id: "tv_stand", name: { de: "Fernseher auf Standfuß" }, size: [1, 0.5, 1.5], parts: [part("dark")] },
      ],
    } as never,
  ]);
  assert.equal(isPackPlant(packType("deco", "plant_monstera_m")), true);
  assert.equal(isPackPlant(packType("deco", "humidifier")), false);
  assert.equal(isPackPlant(packType("deco", "tv_stand")), false);
  setPacks([]);
});
