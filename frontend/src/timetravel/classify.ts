// Time travel: which entities to fetch (and how), and what each one means for the event markers.

import type { Building, Floor, Furniture, Opening } from "../model.ts";
import type { HomeAssistant } from "../types.ts";
import type { HistorySpec } from "./types.ts";

/** Never replayed: people and their trackers (presence stays private), and what has no past worth showing. */
const EXCLUDED = new Set(["person", "device_tracker", "zone", "camera", "scene", "script", "button", "input_button", "update", "event", "image", "tts", "stt", "notify", "conversation", "automation", "calendar", "todo"]);
/** Domains of a room's area whose past the room panel can show. */
const AREA_DOMAINS = new Set(["light", "cover", "switch", "fan", "lock", "climate", "media_player", "binary_sensor", "sensor", "vacuum", "alarm_control_panel", "water_heater", "input_boolean", "humidifier", "valve"]);

/** At most this many entities are fetched (the view's own first, then the rooms' devices). */
export const MAX_ENTITIES = 600;

const domainOf = (id: string) => id.slice(0, id.indexOf("."));

/** A numeric measurement (temperature, power …): replayed from its five-minute statistics. */
export function isStatSensor(hass: HomeAssistant, id: string): boolean {
  const st = hass.states[id];
  if (!id.startsWith("sensor.") || !st || st.attributes.state_class !== "measurement") return false;
  return Number.isFinite(Number(st.state)) || st.state === "unavailable" || st.state === "unknown";
}

/** Where something or someone is: never part of the past (a phone's address, a car's coordinates, a Wi-Fi name). */
const LOCATION_CLASSES = new Set(["geocoded_location", "location"]);
const LOCATION_NAME = /location|address|geocoded|ssid|bssid|standort|adresse/i;

/** An entity that tells a place: its class or key, coordinates among its attributes, or its name. */
export function locationLike(hass: HomeAssistant, id: string): boolean {
  const attrs = hass.states[id]?.attributes ?? {};
  const key = hass.entities?.[id]?.translation_key ?? "";
  if (LOCATION_CLASSES.has(String(attrs.device_class ?? "")) || LOCATION_CLASSES.has(key)) return true;
  if ("latitude" in attrs || "longitude" in attrs) return true;
  return LOCATION_NAME.test(`${id} ${String(attrs.friendly_name ?? "")} ${key}`);
}

/** The trackers of people (their phones, watches): private, also as a car's. */
export function personTrackers(hass: HomeAssistant): Set<string> {
  const out = new Set<string>();
  for (const st of Object.values(hass.states))
    if (st.entity_id.startsWith("person.") && Array.isArray(st.attributes.device_trackers)) for (const id of st.attributes.device_trackers) if (typeof id === "string") out.add(id);
  return out;
}

/** The devices people carry (a person's tracker belongs to them): none of their entities is replayed. */
export function personalDevices(hass: HomeAssistant, trackers: Iterable<string> = personTrackers(hass)): Set<string> {
  const out = new Set<string>();
  for (const id of trackers) {
    const dev = hass.entities?.[id]?.device_id;
    if (dev) out.add(dev);
  }
  return out;
}

/**
 * The entities to fetch: states with their history, numeric measurements as statistics; `overflow` are
 * those beyond the limit (not fetched, but not live either: they read "unknown" in the past); `hidden` are
 * private ones left out (places, the devices people carry), which read "unknown" in the past too.
 */
export function historyRequest(
  hass: HomeAssistant,
  building: Building,
  spec: HistorySpec,
  max = MAX_ENTITIES,
): { entities: string[]; stats: string[]; overflow: string[]; cars: string[]; hidden: string[] } {
  const privateIds = new Set(building.presence.flatMap((p) => [p.person, p.sensor]).filter((x): x is string => !!x));
  // a person's own trackers stay private even when a parking spot uses one
  const trackers = personTrackers(hass);
  for (const id of trackers) privateIds.add(id);
  const carried = personalDevices(hass, trackers);
  const cars = new Set((spec.cars ?? []).filter((id) => id.startsWith("device_tracker.") && !privateIds.has(id) && !!hass.states[id]));
  const areas = new Set(building.floors.flatMap((f) => f.rooms.map((r) => r.area_id)).filter((x): x is string => !!x));
  const fromAreas: string[] = [];
  for (const [id, entry] of Object.entries(hass.entities ?? {})) {
    if (!entry.area_id && entry.device_id) {
      const dev = hass.devices?.[entry.device_id];
      if (!dev?.area_id || !areas.has(dev.area_id)) continue;
    } else if (!entry.area_id || !areas.has(entry.area_id)) continue;
    if (entry.hidden || entry.entity_category || !AREA_DOMAINS.has(domainOf(id))) continue;
    fromAreas.push(id);
  }
  const weather = Object.keys(hass.states).filter((id) => id.startsWith("weather."));
  const wanted = [...new Set([...cars, ...spec.entities, "sun.sun", ...(building.settings.weather_entity ? [building.settings.weather_entity] : []), ...(building.settings.outage_entity ? [building.settings.outage_entity] : []), ...weather.slice(0, 1), ...fromAreas])];
  const hidden: string[] = [];
  const all = wanted.filter((id) => {
    if (!id.includes(".") || (!cars.has(id) && EXCLUDED.has(domainOf(id))) || privateIds.has(id) || !hass.states[id]) return false;
    if (cars.has(id)) return true;
    const dev = hass.entities?.[id]?.device_id;
    if ((dev && carried.has(dev)) || locationLike(hass, id)) {
      hidden.push(id);
      return false;
    }
    return true;
  });
  const ids = all.slice(0, max);
  const stats = ids.filter((id) => isStatSensor(hass, id));
  const statSet = new Set(stats);
  return { entities: ids.filter((id) => !statSet.has(id)), stats, overflow: all.slice(max), cars: ids.filter((id) => cars.has(id)), hidden };
}

export type Role = "door" | "garage" | "lock" | "alarm" | "smoke" | "gas" | "co" | "water" | "window" | "window_more" | "motion" | "robot" | "washer" | "weather";

const SAFETY: Record<string, Role> = { smoke: "smoke", gas: "gas", carbon_monoxide: "co", moisture: "water" };
const FRONT_STYLES = new Set(["front", "front_glass", "sidelight", "sidelights"]);
const APPLIANCES = new Set(["washer", "dryer", "dishwasher"]);

function inside(p: [number, number], poly: readonly [number, number][]): boolean {
  let hit = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, zi] = poly[i];
    const [xj, zj] = poly[j];
    if (zi > p[1] !== zj > p[1] && p[0] < ((xj - xi) * (p[1] - zi)) / (zj - zi) + xi) hit = !hit;
  }
  return hit;
}

/** A door in an outer wall: a front door look, or no other room behind it. */
export function exteriorDoor(floor: Floor, o: Opening): boolean {
  if (o.type !== "door" || o.wall) return false;
  if (o.style && FRONT_STYLES.has(o.style)) return true;
  if (o.style) return false;
  const room = floor.rooms.find((r) => r.id === o.room_id);
  if (!room || room.points.length < 3) return false;
  const a = room.points[o.edge];
  const b = room.points[(o.edge + 1) % room.points.length];
  if (!a || !b) return false;
  const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
  if (len < 1e-6) return false;
  const ux = (b[0] - a[0]) / len;
  const uz = (b[1] - a[1]) / len;
  const mid: [number, number] = [a[0] + ux * o.offset, a[1] + uz * o.offset];
  // the side away from the room's inside
  const probe = (s: number): [number, number] => [mid[0] - uz * s, mid[1] + ux * s];
  const out = inside(probe(0.3), room.points) ? probe(-0.4) : probe(0.4);
  return !floor.rooms.some((r) => r.id !== room.id && r.points.length >= 3 && inside(out, r.points));
}

/**
 * The power sensors of washing machines, dryers and dishwashers in the plan: linked to the item, else a
 * power sensor placed right next to it (the plug the machine hangs on).
 */
export function appliancePower(hass: HomeAssistant, building: Building, spec: HistorySpec): Map<string, Furniture> {
  const out = new Map<string, Furniture>();
  const links = new Map(spec.furniture);
  for (const floor of building.floors)
    for (const f of floor.furniture) {
      if (!APPLIANCES.has(f.type)) continue;
      const linked = links.get(f.id)?.power;
      const near = floor.placements.find((p) => hass.states[p.entity_id]?.attributes.device_class === "power" && Math.hypot(p.x - f.x, p.z - f.z) <= 1.2)?.entity_id;
      const id = linked ?? near;
      if (id && !out.has(id)) out.set(id, f);
    }
  return out;
}

/** What each fetched entity means for the events (doors, windows, safety sensors, robots, appliances). */
export function eventRoles(hass: HomeAssistant, building: Building, spec: HistorySpec, fetched: ReadonlySet<string>): Map<string, Role> {
  const roles = new Map<string, Role>();
  const set = (id: string | null | undefined, role: Role) => {
    if (id && fetched.has(id) && !roles.has(id)) roles.set(id, role);
  };
  const links = new Map(spec.openings);
  for (const floor of building.floors)
    for (const o of floor.openings) {
      const l = links.get(o.id);
      if (!l) continue;
      if (o.type === "garage") for (const id of [l.contact, l.cover]) set(id, "garage");
      else if (o.type === "door") {
        if (exteriorDoor(floor, o)) for (const id of [l.contact, l.contact2]) set(id, "door");
      } else {
        // the first sensor of a window tells it was opened; the others (tilt, a second sash) count for the rain
        const ids = [l.contact, l.tilt, l.contact2, l.tilt2].filter((id): id is string => !!id && fetched.has(id));
        ids.forEach((id, i) => set(id, i ? "window_more" : "window"));
      }
    }
  for (const id of appliancePower(hass, building, spec).keys()) set(id, "washer");
  for (const id of fetched) {
    if (roles.has(id)) continue;
    const domain = domainOf(id);
    const cls = String(hass.states[id]?.attributes.device_class ?? "");
    if (domain === "lock") set(id, "lock");
    else if (domain === "alarm_control_panel") set(id, "alarm");
    else if (domain === "vacuum") set(id, "robot");
    else if (domain === "weather") set(id, "weather");
    else if (domain === "cover" && (cls === "garage" || cls === "gate")) set(id, "garage");
    else if (domain === "binary_sensor") {
      if (SAFETY[cls]) set(id, SAFETY[cls]);
      else if (cls === "garage_door") set(id, "garage");
      // motion only: occupancy and presence sensors (a bed, a desk) tell about people, not about the house
      else if (cls === "motion") set(id, "motion");
    }
  }
  return roles;
}
