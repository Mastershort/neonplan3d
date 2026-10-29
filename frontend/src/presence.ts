// Presence and floor summaries: which room a person is in (from a room sensor such as ESPresense or
// Bermuda, whose state names a room or area), and the counts shown on the floor labels.

import { areaEntities, kindOf, openingState, primaryEntities, type OpeningEntities } from "./devices.ts";
import { translate } from "./i18n.ts";
import type { Building, Room } from "./model.ts";
import { centroid, pointInPolygon, zonesOf } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

export interface PersonMarker {
  id: string;
  name: string;
  initials: string;
  picture: string | null;
  floorId: string;
  roomId: string;
  x: number;
  z: number;
  /** Located people: their own colour, the sensor a tap opens, and the short name under the pin. */
  color?: string;
  entity?: string;
  tag?: string;
  thing?: boolean;
}

export type PersonLook = "figure" | "pin" | "off";

/** How the house shows located people (editor ⚙ Settings → House): a neon figure (default), a pin, or not at all. */
export function personLook(building: Building | null | undefined): PersonLook {
  return building?.settings.person_look ?? "figure";
}

export function personsShown(building: Building | null | undefined): boolean {
  return personLook(building) !== "off";
}

/** Colours of located people: stable per person (by id), bright on the dark neon and the light looks. */
const PERSON_COLORS = ["#ff5fd2", "#37e0ff", "#ffb84d", "#7dff8a", "#b18cff", "#ff7a6b", "#4dd2c0", "#f5e663"];

export function personColor(id: string): string {
  let h = 0;
  for (const ch of id) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return PERSON_COLORS[h % PERSON_COLORS.length];
}

const norm = (s: string) => s.toLowerCase().replace(/[_\-]+/g, " ").replace(/\s+/g, " ").trim();

/** Room whose name, area name or area id matches a room sensor's state. */
export function roomForState(hass: HomeAssistant, building: Building, state: string): { floorId: string; room: Room } | null {
  const want = norm(state);
  if (!want || want === "unknown" || want === "unavailable" || want === "not home" || want === "away") return null;
  for (const floor of building.floors) {
    for (const room of floor.rooms) {
      const names = [room.name, room.area_id ?? "", room.area_id ? (hass.areas?.[room.area_id]?.name ?? "") : ""].filter(Boolean).map(norm);
      if (names.includes(want)) return { floorId: floor.id, room };
    }
  }
  return null;
}

export function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "?";
  return (parts.length > 1 ? parts[0][0] + parts[parts.length - 1][0] : parts[0].slice(0, 2)).toUpperCase();
}

/** People at home whose room sensor names a room of the plan, spread around the room centre. */
/** A person's state that says away: not home and not on, and not merely unknown (a person without a tracker). */
export function isAway(state: string): boolean {
  return !["home", "on", "unknown", "unavailable", ""].includes(state);
}

export function personsInRooms(hass: HomeAssistant, building: Building): PersonMarker[] {
  const out: PersonMarker[] = [];
  const perRoom = new Map<string, number>();
  for (const link of building.presence) {
    const person = hass.states[link.person];
    if (!person || !link.sensor) continue;
    // a person who is away is not in any room, whatever the room sensor still says
    if (person.state !== "home" && person.state !== "on") continue;
    const sensor = hass.states[link.sensor];
    if (!sensor) continue;
    const hit = roomForState(hass, building, sensor.state);
    if (!hit) continue;
    const i = perRoom.get(hit.room.id) ?? 0;
    perRoom.set(hit.room.id, i + 1);
    const [cx, cz] = centroid(hit.room.points);
    // next to the room label, one after another on a small circle
    const a = -Math.PI / 2 + 0.9 + i * 1.15;
    const r = 0.75;
    const name = (person.attributes.friendly_name as string | undefined) ?? link.person;
    out.push({
      id: link.person,
      name,
      initials: initials(name),
      picture: (person.attributes.entity_picture as string | undefined) ?? null,
      floorId: hit.floorId,
      roomId: hit.room.id,
      x: cx + Math.cos(a) * r,
      z: cz + Math.sin(a) * r,
    });
  }
  return out;
}

/**
 * People and things NeonPlan's own locating puts in a room: its sensors (attribute neonplan_locate) name a room of
 * the plan. A device of a person who is away is left out; several in one room stand on a small circle.
 */
export function locatedPersons(hass: HomeAssistant, building: Building, skip: ReadonlySet<string> = new Set(), now = Date.now()): PersonMarker[] {
  interface Found {
    entityId: string;
    name: string;
    person: string | null;
    floorId: string;
    room: Room;
    seen: number;
    since: number;
    probability: number;
    worn: boolean;
  }
  const found: Found[] = [];
  for (const [entityId, st] of Object.entries(hass.states)) {
    const a = st.attributes;
    if (!entityId.startsWith("sensor.") || a.neonplan_locate !== true || typeof a.room_id !== "string") continue;
    let hit: { floorId: string; room: Room } | null = null;
    for (const floor of building.floors) {
      // an outdoor area acting as a room counts too (a terrace, #828)
      const room = zonesOf(floor).find((r) => r.id === a.room_id);
      if (room) hit = { floorId: floor.id, room };
    }
    if (!hit) continue;
    const seen = typeof a.last_seen === "string" ? Date.parse(a.last_seen) : NaN;
    const since = typeof a.since === "string" ? Date.parse(a.since) : NaN;
    found.push({
      entityId,
      name: typeof a.device_name === "string" ? a.device_name : entityId,
      person: typeof a.person === "string" ? a.person : null,
      floorId: hit.floorId,
      room: hit.room,
      seen: Number.isFinite(seen) ? seen : 0,
      since: Number.isFinite(since) ? since : 0,
      probability: typeof a.probability === "number" ? a.probability : 0,
      worn: a.wearable === true,
    });
  }
  const out: PersonMarker[] = [];
  const perRoom = new Map<string, number>();
  const spotsOf = new Map<string, [number, number][]>();
  const place = (f: Found, marker: Omit<PersonMarker, "floorId" | "roomId" | "x" | "z">) => {
    const i = perRoom.get(f.room.id) ?? 0;
    perRoom.set(f.room.id, i + 1);
    // a person (not a thing) stands where an occupied zone of the room's presence sensor says: at the sofa
    if (!marker.thing) {
      let spots = spotsOf.get(f.room.id);
      if (!spots) spotsOf.set(f.room.id, (spots = zoneSpots(hass, building, f.floorId, f.room)));
      const spot = spots.shift();
      if (spot) {
        out.push({ ...marker, floorId: f.floorId, roomId: f.room.id, x: spot[0], z: spot[1] });
        return;
      }
    }
    const [cx, cz] = centroid(f.room.points);
    const angle = -Math.PI / 2 + 0.9 + i * 1.15;
    out.push({ ...marker, floorId: f.floorId, roomId: f.room.id, x: cx + Math.cos(angle) * 0.75, z: cz + Math.sin(angle) * 0.75 });
  };
  const thing = (f: Found, color: string) =>
    place(f, { id: f.entityId, name: f.name, initials: f.name.slice(0, 1).toUpperCase(), picture: null, color, entity: f.entityId, tag: f.name, thing: true });
  const byPerson = new Map<string, Found[]>();
  for (const f of found) {
    if (!f.person) thing(f, personColor(f.entityId));
    else byPerson.set(f.person, [...(byPerson.get(f.person) ?? []), f]);
  }
  for (const [personId, list] of byPerson) {
    if (skip.has(personId)) continue;
    const person = hass.states[personId];
    // away: neither the person nor a device left at home is shown as the person – but a person without a tracker of
    // their own ("unknown") is not away: located in a room, they are home (#744)
    if (person && isAway(person.state)) continue;
    // the same rule as the spoken answers (person_state in locate/answers.py): the worn device (watch) heard in the
    // last two minutes, unless a phone heard at the same time is clearly surer about another room (a shared wall
    // fools the watch) – a phone that stayed put while the watch walked on was left lying, a watch that lay still for
    // ten minutes while the phone walked on was taken off; else the freshest device
    const freshest = (l: Found[]) => l.reduce((a, b) => (b.seen > a.seen ? b : a));
    const worn = list.filter((f) => f.worn && now - f.seen < 120_000);
    let main = freshest(worn.length ? worn : list);
    const together = (f: Found) => now - f.seen < 30_000 && now - main.seen < 30_000 && f.since >= main.since - 120_000;
    let off: Found | null = null;
    if (main.worn) {
      const others = list.filter((f) => !f.worn && f.room.id !== main.room.id && together(f));
      const other = others.length ? others.reduce((a, b) => (b.probability > a.probability ? b : a)) : null;
      // the watch lay still for ten minutes while the phone changed rooms after it: taken off, it stands as a thing
      if (other && now - main.since >= 600_000 && other.since > main.since + 120_000) {
        off = main;
        main = other;
      } else if (other && other.probability > main.probability + 0.15) main = other;
    }
    const name = (person?.attributes.friendly_name as string | undefined) ?? main.name;
    place(main, {
      id: personId,
      name,
      initials: initials(name),
      picture: (person?.attributes.entity_picture as string | undefined) ?? null,
      color: personColor(personId),
      entity: main.entityId,
      tag: name.split(/\s+/)[0],
    });
    // a phone left in another room stands there as a thing ("where is my iPhone"); a device that only disagrees
    // about the room (heard together with the chosen one) and a worn one heard lately are with the person
    for (const f of list) {
      if (f === main || f.room.id === main.room.id) continue;
      if (f !== off && ((f.worn && now - f.seen < 120_000) || together(f))) continue;
      thing(f, personColor(personId));
    }
  }
  return out;
}

// what a zone of a presence sensor may be called, per furniture kind – built-in or from a pack, by the kind's id
// after the pack prefix ("pack:mastershort.living:corner_right"); an own furniture name always counts too
const ZONE_WORDS: [RegExp, string[]][] = [
  [/sofa|couch|corner|chesterfield|recamiere|chaise|^module_/, ["sofa", "couch", "wohnlandschaft", "ecksofa", "eckcouch"]],
  [/armchair|club_chair|wingback|recliner|lounge_chair|cocktail_chair|rocking_chair|bean_bag/, ["sessel", "armchair", "ohrensessel", "relaxsessel", "chair"]],
  [/bed/, ["bett", "bed"]],
  [/^dining/, ["esstisch", "essen", "essbereich", "dining", "tisch", "table"]],
  [/^coffee/, ["couchtisch"]],
  [/desk/, ["schreibtisch", "desk", "arbeitsplatz", "office"]],
];

const OUTSIDE = ["terrasse", "garten", "balkon", "aussen", "draussen", "terrace", "garden", "patio", "balcony", "outside"];

/**
 * The doors of a room (and windows one can walk through, a French window) with the words of the room on the other
 * side (null: outside) and a spot just inside the room in front of them.
 */
function roomDoors(floor: Building["floors"][number], room: Room): { to: string[] | null; spot: [number, number] }[] {
  const out: { to: string[] | null; spot: [number, number] }[] = [];
  const [cx, cz] = centroid(room.points);
  const onEdge = (r: Room, p: [number, number]) =>
    r.points.some((a, i) => {
      const b = r.points[(i + 1) % r.points.length];
      const [dx, dz] = [b[0] - a[0], b[1] - a[1]];
      const len2 = dx * dx + dz * dz || 1;
      const t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / len2));
      return Math.hypot(a[0] + t * dx - p[0], a[1] + t * dz - p[1]) < 0.3;
    });
  for (const o of floor.openings) {
    if (o.wall || (o.type === "window" && o.sill > 0.3) || o.type === "garage") continue;
    const host = floor.rooms.find((r) => r.id === o.room_id);
    if (!host) continue;
    const a = host.points[o.edge];
    const b = host.points[(o.edge + 1) % host.points.length];
    if (!a || !b) continue;
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    const p: [number, number] = [a[0] + ((b[0] - a[0]) * o.offset) / len, a[1] + ((b[1] - a[1]) * o.offset) / len];
    if (!onEdge(room, p)) continue;
    const other = floor.rooms.find((r) => r.id !== room.id && onEdge(r, p));
    // a step into the room, so the figure stands in front of the door, not in it
    const k = 0.6 / (Math.hypot(cx - p[0], cz - p[1]) || 1);
    out.push({ to: other ? words(other.name) : null, spot: [p[0] + (cx - p[0]) * k, p[1] + (cz - p[1]) * k] });
  }
  return out;
}

const ZONE_NOISE = ["praesenz", "presence", "occupancy", "anwesenheit", "belegt", "zone", "bereich", "raum", "room", "rest", "sensor", "fp2"];

const words = (text: string) =>
  text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length > 1);

/**
 * Where people in a room sit by the zones of its presence sensors (an Aqara FP2's "Sofa", "Sessel"): an occupied
 * zone named like a piece of furniture in the room gives that furniture's spot. The sensor belongs to the room by
 * its own or its device's Home Assistant area; zones without furniture ("Rest", "Eingang") give nothing.
 */
export function zoneSpots(hass: HomeAssistant, building: Building, floorId: string, room: Room): [number, number][] {
  const floor = building.floors.find((f) => f.id === floorId);
  if (!floor || !room.area_id) return [];
  const inRoom = floor.furniture.filter((f) => pointInPolygon([f.x, f.z], room.points));
  const doors = roomDoors(floor, room);
  const spots: [number, number][] = [];
  const skip = new Set([...words(room.name), ...words(hass.areas?.[room.area_id]?.name ?? ""), ...words(room.area_id), ...ZONE_NOISE]);
  for (const [entityId, st] of Object.entries(hass.states)) {
    if (!entityId.startsWith("binary_sensor.") || st.state !== "on") continue;
    const cls = st.attributes.device_class;
    if (cls !== "occupancy" && cls !== "presence") continue;
    const entry = hass.entities?.[entityId];
    const area = entry?.area_id ?? (entry?.device_id ? hass.devices?.[entry.device_id]?.area_id : null);
    if (area !== room.area_id) continue;
    // the zone's own words: not the room's name nor the sensor's ("Wohnzimmer Präsenz Sofa" → "sofa")
    const said = new Set(words(String(st.attributes.friendly_name ?? entityId.slice(14))).filter((w) => !skip.has(w)));
    const hit = inRoom.find(
      (f) =>
        (f.name && words(f.name).some((w) => said.has(w))) ||
        ZONE_WORDS.some(([kind, names]) => kind.test(f.type.split(":").pop() ?? "") && names.some((n) => said.has(n))),
    );
    // "Eingang Flur", "Terrassentür": the door to the room of that name, or a door to the outside
    const door = hit
      ? null
      : doors.find((d) => (d.to ? d.to.some((w) => said.has(w)) : [...said].some((w) => OUTSIDE.some((o) => w.includes(o)))));
    const spot: [number, number] | null = hit ? [hit.x, hit.z] : door ? door.spot : null;
    if (spot && !spots.some(([x, z]) => x === spot[0] && z === spot[1])) spots.push(spot);
  }
  return spots;
}

export interface FloorCounts {
  rooms: number;
  lightsOn: number;
  open: number;
  persons: number;
}

/** Counts per floor for the floor labels in the house view. */
export function floorCounts(hass: HomeAssistant, building: Building, links: Map<string, OpeningEntities>, persons: PersonMarker[]): Map<string, FloorCounts> {
  const out = new Map<string, FloorCounts>();
  const on = (id: string | null) => !!id && hass.states[id]?.state === "on";
  for (const floor of building.floors) {
    const lights = new Set<string>();
    // main entities only: a LED strip with 30 segment entities is one light
    for (const room of floor.rooms) for (const id of primaryEntities(hass, areaEntities(hass, room.area_id))) if (kindOf(id) === "light") lights.add(id);
    for (const pl of floor.placements) if (kindOf(pl.entity_id) === "light") lights.add(pl.entity_id);
    const open = floor.openings.filter((o) => {
      const l = links.get(o.id);
      if (!l) return false;
      // a garage door counts as open while its cover is not (almost) down
      if (o.type === "garage") return (openingState(hass, l, "garage").cover ?? 1) < 0.95;
      if (o.type === "door") return on(l.contact) || on(l.contact2 ?? null);
      const s = openingState(hass, l, "window");
      return s.open > 0.5 || s.tilt > 0.5 || s.open2 > 0.5 || s.tilt2 > 0.5;
    }).length;
    out.set(floor.id, {
      rooms: floor.rooms.length,
      lightsOn: [...lights].filter((id) => hass.states[id]?.state === "on").length,
      open,
      persons: persons.filter((p) => p.floorId === floor.id).length,
    });
  }
  return out;
}

export function floorInfoText(hass: HomeAssistant | undefined, c: FloorCounts): string {
  const parts = [c.rooms === 1 ? translate(hass, "floor_rooms_one") : translate(hass, "floor_rooms", { n: c.rooms })];
  if (c.lightsOn) parts.push(translate(hass, "floor_lights", { n: c.lightsOn }));
  if (c.open) parts.push(translate(hass, "floor_open", { n: c.open }));
  if (c.persons) parts.push(translate(hass, "floor_persons", { n: c.persons }));
  return parts.join(" · ");
}
