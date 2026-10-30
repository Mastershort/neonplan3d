import assert from "node:assert/strict";
import { test } from "node:test";
import type { Building, Room } from "./model.ts";
import { emptyBuilding, newFloor } from "./model.ts";
import { floorCounts, floorInfoText, initials, locatedPersons, personColor, personsInRooms, roomForState, zoneSpots } from "./presence.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}): HassEntity => ({ entity_id, state, attributes });

function rect(id: string, name: string, area: string | null, x0: number): Room {
  return { id, name, area_id: area, points: [[x0, 0], [x0 + 4, 0], [x0 + 4, 3], [x0, 3]], floor_material: "wood" };
}

function setup(): { hass: HomeAssistant; building: Building } {
  const building = emptyBuilding();
  building.floors = [{ ...newFloor("eg", "EG", 0), rooms: [rect("r1", "Wohnen", "living_room", 0), rect("r2", "Küche", "kitchen", 4)] }];
  building.presence = [
    { person: "person.mia", sensor: "sensor.mia_area" },
    { person: "person.tom", sensor: "sensor.tom_room" },
    { person: "person.lea", sensor: "sensor.lea_area" },
  ];
  const hass: HomeAssistant = {
    language: "de",
    connection: {} as HomeAssistant["connection"],
    callWS: async () => undefined as never,
    callService: async () => undefined,
    areas: { living_room: { area_id: "living_room", name: "Wohnzimmer" }, kitchen: { area_id: "kitchen", name: "Kitchen" } },
    entities: { "light.a": { entity_id: "light.a", area_id: "kitchen" } },
    states: Object.fromEntries(
      [
        st("person.mia", "home", { friendly_name: "Mia Muster" }),
        st("sensor.mia_area", "Wohnzimmer"),
        st("person.tom", "home", { friendly_name: "Tom" }),
        st("sensor.tom_room", "kitchen"),
        st("person.lea", "not_home", { friendly_name: "Lea" }),
        st("sensor.lea_area", "Wohnzimmer"),
        st("light.a", "on"),
      ].map((s) => [s.entity_id, s]),
    ),
  };
  return { hass, building };
}

test("room sensor states match room names, area names and area ids", () => {
  const { hass, building } = setup();
  assert.equal(roomForState(hass, building, "Wohnzimmer")?.room.id, "r1");
  assert.equal(roomForState(hass, building, "living_room")?.room.id, "r1");
  assert.equal(roomForState(hass, building, "küche")?.room.id, "r2");
  assert.equal(roomForState(hass, building, "not_home"), null);
});

test("people at home are placed in their room; away people are not", () => {
  const { hass, building } = setup();
  const people = personsInRooms(hass, building);
  assert.deepEqual(
    people.map((p) => [p.id, p.roomId, p.initials]),
    [
      ["person.mia", "r1", "MM"],
      ["person.tom", "r2", "TO"],
    ],
  );
  assert.equal(initials("anna"), "AN");
});

test("floor labels count rooms, lights on, open windows and people", () => {
  const { hass, building } = setup();
  const counts = floorCounts(hass, building, new Map(), personsInRooms(hass, building)).get("eg")!;
  assert.deepEqual(counts, { rooms: 2, lightsOn: 1, open: 0, persons: 2 });
  assert.equal(floorInfoText(hass, counts), "2 Räume · 1 Licht an · 2 Pers.");
});

test("located people: a worn device places the person, a phone left elsewhere stands as a thing, away left out", () => {
  const { hass, building } = setup();
  const now = Date.parse("2026-10-23T12:00:00Z");
  const iso = (agoS: number) => new Date(now - agoS * 1000).toISOString();
  const loc = (room: string, person: string | null, name: string, worn: boolean, agoS: number, sinceS = 60, probability = 0.8): HassEntity =>
    st(`sensor.${name.toLowerCase().replace(/\s+/g, "_")}_raum`, "x", { neonplan_locate: true, room_id: room, person, device_name: name, wearable: worn, last_seen: iso(agoS), since: iso(sinceS), probability });
  for (const s of [
    loc("r2", "person.mia", "Mia iPhone", false, 5, 1200, 0.99), // fresher and sure, but lying in the kitchen for 20 minutes
    loc("r1", "person.mia", "Mia Watch", true, 20), // worn, walked into the living room a minute ago: Mia is there
    loc("r2", "person.lea", "Leas Uhr", true, 3), // Lea is away
    loc("r2", null, "Schlüssel", false, 60),
    loc("nowhere", null, "Tag", false, 1),
  ]) {
    hass.states[s.entity_id] = s;
  }
  const people = locatedPersons(hass, building, new Set(), now);
  assert.deepEqual(
    people.map((p) => [p.id, p.roomId, p.thing ?? false, p.tag]),
    [
      ["sensor.schlüssel_raum", "r2", true, "Schlüssel"],
      ["person.mia", "r1", false, "Mia"],
      ["sensor.mia_iphone_raum", "r2", true, "Mia iPhone"],
    ],
  );
  assert.equal(people[1].entity, "sensor.mia_watch_raum");
  assert.equal(people[1].color, personColor("person.mia"));
  // the watch silent for minutes: the freshest device places her
  hass.states["sensor.mia_watch_raum"].attributes.last_seen = iso(600);
  assert.equal(locatedPersons(hass, building, new Set(), now).find((p) => p.id === "person.mia")?.roomId, "r2");
  // the ones already shown by the room sensors are skipped
  assert.equal(locatedPersons(hass, building, new Set(["person.mia"]), now).filter((p) => !p.thing).length, 0);
});

test("located people: watch and phone heard together disagree about the room – the clearly surer one wins, no extra thing", () => {
  const { hass, building } = setup();
  const now = Date.parse("2026-10-23T12:00:00Z");
  const iso = (agoS: number) => new Date(now - agoS * 1000).toISOString();
  const put = (name: string, room: string, worn: boolean, probability: number) =>
    (hass.states[`sensor.${name}_raum`] = st(`sensor.${name}_raum`, "x", { neonplan_locate: true, room_id: room, person: "person.tom", device_name: name, wearable: worn, last_seen: iso(5), since: iso(600), probability }));
  // sitting in the kitchen, the living-room plug behind the seat fools the watch
  put("watch", "r1", true, 0.6);
  put("iphone", "r2", false, 0.85);
  let people = locatedPersons(hass, building, new Set(), now);
  assert.deepEqual(people.map((p) => [p.id, p.roomId, p.thing ?? false]), [["person.tom", "r2", false]]);
  // the phone only a little surer: the watch keeps it, still no phone symbol
  put("iphone", "r2", false, 0.7);
  people = locatedPersons(hass, building, new Set(), now);
  assert.deepEqual(people.map((p) => [p.id, p.roomId, p.thing ?? false]), [["person.tom", "r1", false]]);
});

test("located people: a watch lying still while the phone walks on was taken off – the phone places her, the watch stands as a thing", () => {
  const { hass, building } = setup();
  const now = Date.parse("2026-10-23T12:00:00Z");
  const iso = (agoS: number) => new Date(now - agoS * 1000).toISOString();
  const put = (name: string, room: string, worn: boolean, probability: number, sinceS: number) =>
    (hass.states[`sensor.${name}_raum`] = st(`sensor.${name}_raum`, "x", { neonplan_locate: true, room_id: room, person: "person.mia", device_name: name, wearable: worn, last_seen: iso(5), since: iso(sinceS), probability }));
  // the watch has lain in the living room for an hour, the phone came into the kitchen a minute ago
  put("watch", "r1", true, 0.95, 3600);
  put("iphone", "r2", false, 0.6, 60);
  const people = locatedPersons(hass, building, new Set(), now);
  assert.deepEqual(
    people.map((p) => [p.id, p.roomId, p.thing ?? false]).sort(),
    [["person.mia", "r2", false], ["sensor.watch_raum", "r1", true]],
  );
});

test("a person stands at the furniture an occupied presence zone names (an FP2's \"Sofa\")", () => {
  const { hass, building } = setup();
  const now = Date.parse("2026-10-23T12:00:00Z");
  building.floors[0].furniture = [
    { id: "s", type: "sofa_l", x: 1, z: 2.5, rotation: 0, w: 2.4, d: 1.6, h: 0.8, variant: null },
    { id: "a", type: "armchair", x: 3.5, z: 0.5, rotation: 0, w: 0.8, d: 0.8, h: 0.9, variant: null },
  ];
  hass.entities = { ...hass.entities, "binary_sensor.wz_sofa": { entity_id: "binary_sensor.wz_sofa", area_id: "living_room" } };
  hass.states["binary_sensor.wz_sofa"] = st("binary_sensor.wz_sofa", "on", { device_class: "occupancy", friendly_name: "Wohnzimmer Präsenz Sofa" });
  hass.states["binary_sensor.wz_raum"] = st("binary_sensor.wz_raum", "on", { device_class: "occupancy", friendly_name: "Wohnzimmer Präsenz Raum" });
  hass.states["sensor.tom_watch_raum"] = st("sensor.tom_watch_raum", "x", {
    neonplan_locate: true,
    room_id: "r1",
    person: "person.tom",
    device_name: "Tom Watch",
    wearable: true,
    last_seen: new Date(now - 5000).toISOString(),
  });
  const tom = locatedPersons(hass, building, new Set(), now).find((p) => p.id === "person.tom");
  assert.deepEqual([tom?.x, tom?.z], [1, 2.5]);
  // the zone empty: back to the room's middle
  hass.states["binary_sensor.wz_sofa"] = st("binary_sensor.wz_sofa", "off", { device_class: "occupancy", friendly_name: "Wohnzimmer Präsenz Sofa" });
  const again = locatedPersons(hass, building, new Set(), now).find((p) => p.id === "person.tom");
  assert.notDeepEqual([again?.x, again?.z], [1, 2.5]);
});

test("pack furniture counts for presence zones by its kind (an Ecksofa from the Living pack is the \"Sofa\")", () => {
  const { hass, building } = setup();
  building.floors[0].furniture = [
    { id: "s", type: "pack:mastershort.living:corner_right", x: 2, z: 1, rotation: 0, w: 2.4, d: 1.6, h: 0.8, variant: null },
    { id: "a", type: "pack:mastershort.living:armchair", x: 3.5, z: 2.5, rotation: 0, w: 0.8, d: 0.8, h: 0.9, variant: null },
  ];
  hass.entities = { ...hass.entities, "binary_sensor.fp2_sessel": { entity_id: "binary_sensor.fp2_sessel", area_id: "living_room" } };
  hass.states["binary_sensor.fp2_sessel"] = st("binary_sensor.fp2_sessel", "on", { device_class: "occupancy", friendly_name: "Wohnzimmer Präsenz Sessel" });
  assert.deepEqual(zoneSpots(hass, building, "eg", building.floors[0].rooms[0]), [[3.5, 2.5]]);
});

test("door zones (\"Eingang Küche\", \"Eingang Terrasse\") give a spot just inside the room in front of that door", () => {
  const { hass, building } = setup();
  const door = (id: string, edge: number, offset: number) =>
    ({ id, room_id: "r1", edge, offset, width: 0.9, type: "door", sill: 0, height: 2.1, hinge: "left", leaves: 1, swing: "in" }) as Building["floors"][number]["openings"][number];
  building.floors[0].openings = [door("to-kitchen", 1, 1.5), door("outside", 3, 1)];
  const zone = (name: string) => {
    const id = `binary_sensor.fp2_${name.toLowerCase().replace(/\s+/g, "_")}`;
    hass.entities = { ...hass.entities, [id]: { entity_id: id, area_id: "living_room" } };
    hass.states[id] = st(id, "on", { device_class: "occupancy", friendly_name: `Wohnzimmer Präsenz ${name}` });
  };
  zone("Eingang Küche");
  const [k] = zoneSpots(hass, building, "eg", building.floors[0].rooms[0]);
  assert.deepEqual(k.map((v) => Math.round(v * 100) / 100), [3.4, 1.5]);
  delete hass.states["binary_sensor.fp2_eingang_küche"];
  zone("Eingang Terrasse");
  const [t] = zoneSpots(hass, building, "eg", building.floors[0].rooms[0]);
  assert.ok(t[0] > 0.3 && t[0] < 1 && t[1] > 1.5, `in front of the outside door: ${t}`);
  // "restlicher Raum": no spot, the room's middle as before
  delete hass.states["binary_sensor.fp2_eingang_terrasse"];
  zone("Restlicher Raum");
  assert.deepEqual(zoneSpots(hass, building, "eg", building.floors[0].rooms[0]), []);
});

test("a located person whose Home Assistant person has no tracker (state unknown) still shows (#744)", () => {
  const { hass, building } = setup();
  const now = Date.parse("2026-10-23T12:00:00Z");
  hass.states["person.tom"] = st("person.tom", "unknown", { friendly_name: "Tom" });
  hass.states["sensor.pixel_raum"] = st("sensor.pixel_raum", "x", {
    neonplan_locate: true,
    room_id: "r1",
    person: "person.tom",
    device_name: "Pixel",
    wearable: false,
    last_seen: new Date(now - 5000).toISOString(),
  });
  assert.ok(locatedPersons(hass, building, new Set(), now).some((p) => p.id === "person.tom"));
  // really away: not shown
  hass.states["person.tom"] = st("person.tom", "not_home", { friendly_name: "Tom" });
  assert.ok(!locatedPersons(hass, building, new Set(), now).some((p) => p.id === "person.tom"));
});


test("navigation summaries count a shared light once while retaining physical rooms and people", () => {
  const { hass, building } = setup();
  building.floors[0].navigation_group = "Living level";
  building.floors.push({ ...newFloor("wing", "Raised wing", 1.5), navigation_group: "Living level",
    rooms: [rect("raised", "Raised kitchen", "kitchen", 8)] });
  const persons = personsInRooms(hass, building);
  const physical = floorCounts(hass, building, new Map(), persons);
  assert.deepEqual(physical.get("eg"), { rooms: 2, lightsOn: 1, open: 0, persons: 2 });
  assert.deepEqual(physical.get("wing"), { rooms: 1, lightsOn: 1, open: 0, persons: 0 });
  const grouped = floorCounts(hass, building, new Map(), persons, true);
  assert.deepEqual(grouped.get("eg"), { rooms: 3, lightsOn: 1, open: 0, persons: 2 });
  assert.deepEqual(grouped.get("wing"), grouped.get("eg"));
  hass.states["light.a"].state = "off";
  assert.equal(floorCounts(hass, building, new Map(), persons, true).get("wing")?.lightsOn, 0);
  building.floors[1].navigation_group = null;
  assert.equal(floorCounts(hass, building, new Map(), persons, true).get("eg")?.rooms, 2);
  assert.equal(floorCounts(hass, building, new Map(), persons, true).get("wing")?.rooms, 1);
});
