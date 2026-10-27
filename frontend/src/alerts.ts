// Warnings shown in 3D: smoke, gas, carbon monoxide and water sensors of a room, a triggered alarm,
// a window open while it rains, a power outage and (Haushalt Pro) a fridge door standing open too long; modules
// add their own (a pool's pH far off). The rooms concerned pulse in the warning's colour.

import { areaEntities, entityName, openingState, type OpeningEntities } from "./devices.ts";
import { translate } from "./i18n.ts";
import type { Building } from "./model.ts";
import type { HomeAssistant } from "./types.ts";
import { stationRain, weatherEntity } from "./weather.ts";
import { hasFeature } from "./features.ts";
import { isOutage } from "./outage.ts";
import { doorsOf, fridgeOpenTooLong } from "./household.ts";
import { pointInPolygon } from "./model.ts";

export { isOutage };

export type AlertKind = "smoke" | "gas" | "co" | "water" | "alarm" | "alarm_pending" | "window_rain" | "power_outage" | "fridge_door" | "contact_unavailable";

/** How long a contact must be unavailable before it is a warning: a restart of Home Assistant passes without one. */
export const UNAVAILABLE_AFTER = 10 * 60_000;

export interface Alert {
  /** One of the house's own kinds, or a module's ("pool_ph"). */
  kind: AlertKind | string;
  entity: string;
  /** Room and floor concerned; null for the whole house (an alarm). */
  roomId: string | null;
  floorId: string | null;
  /** A module's warning: its text and colour come with it. */
  text?: string;
  color?: [number, number, number];
  /** Shows at the top only, no room pulses (a pool's warning: the pool is outside). */
  quiet?: boolean;
}

/** Entities the warnings come from; found once per registry. */
export interface AlertSources {
  rooms: { floorId: string; roomId: string; sensors: string[] }[];
  alarms: string[];
  weather: string | null;
  /** The entity that reports a power outage (#214). */
  outage: string | null;
  /** A weather station's rain sensor or rain rate, used instead of the weather entity (D407). */
  rain?: string | null;
  /** Haushalt Pro: the fridges with door sensors (their doors may not stand open too long). */
  fridges?: { floorId: string; roomId: string | null; furnitureId: string; ids: string[] }[];
}

export const RAIN_STATES = new Set(["rainy", "pouring", "lightning-rainy", "hail", "snowy-rainy"]);

const CLASS_KIND: Record<string, AlertKind> = { smoke: "smoke", gas: "gas", carbon_monoxide: "co", moisture: "water" };

/** Warning sensors per room, alarm panels and the weather entity (the chosen one, else the first; none without the rain warning). */
export function alertSources(hass: HomeAssistant, building: Building, weatherId?: string | null): AlertSources {
  const rooms: AlertSources["rooms"] = [];
  for (const floor of building.floors) {
    for (const room of floor.rooms) {
      const sensors = areaEntities(hass, room.area_id).filter((id) => id.startsWith("binary_sensor.") && !!CLASS_KIND[String(hass.states[id]?.attributes.device_class)]);
      if (sensors.length) rooms.push({ floorId: floor.id, roomId: room.id, sensors });
    }
  }
  const ids = Object.keys(hass.states);
  const weather = building.settings.rain_warning === false ? null : weatherEntity(hass, weatherId ?? building.settings.weather_entity);
  const outage = building.settings.outage_entity && hass.states[building.settings.outage_entity] ? building.settings.outage_entity : null;
  const fridges = hasFeature("household")
    ? building.floors.flatMap((floor) =>
        floor.furniture
          .filter((f) => (f.type === "fridge" || f.type === "fridge_smart") && doorsOf(f).length)
          .map((f) => ({ floorId: floor.id, roomId: floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([f.x, f.z], r.points))?.id ?? null, furnitureId: f.id, ids: doorsOf(f) })),
      )
    : [];
  const rainId = building.settings.rain_warning === false ? null : building.settings.rain_entity;
  const rain = rainId && hass.states[rainId] ? rainId : null;
  return { rooms, alarms: ids.filter((id) => id.startsWith("alarm_control_panel.")), weather, outage, rain, fridges };
}

/** Entities whose state changes may raise or clear a warning. */
export function alertEntities(sources: AlertSources): string[] {
  return [...sources.rooms.flatMap((r) => r.sensors), ...sources.alarms, ...(sources.weather ? [sources.weather] : []), ...(sources.outage ? [sources.outage] : []), ...(sources.rain ? [sources.rain] : []), ...(sources.fridges ?? []).flatMap((f) => f.ids)];
}

/** The active warnings, rooms first, then the house-wide alarm. */
export function findAlerts(hass: HomeAssistant, building: Building, sources: AlertSources, links: Map<string, OpeningEntities>): Alert[] {
  const out: Alert[] = [];
  for (const r of sources.rooms) {
    for (const id of r.sensors) {
      const st = hass.states[id];
      if (st?.state !== "on") continue;
      out.push({ kind: CLASS_KIND[String(st.attributes.device_class)], entity: id, roomId: r.roomId, floorId: r.floorId });
    }
  }
  // a weather station of its own answers first; without one the weather entity's condition counts
  const station = sources.rain ? stationRain(hass, sources.rain) : null;
  const raining = station !== null ? station > 0 : !!sources.weather && RAIN_STATES.has(hass.states[sources.weather]?.state ?? "");
  if (raining) {
    for (const floor of building.floors) {
      for (const o of floor.openings) {
        if (o.type !== "window" || o.rain_ignore) continue;
        const link = links.get(o.id);
        if (!link) continue;
        const s = openingState(hass, link, "window");
        if (s.open < 0.5 && s.tilt < 0.5 && s.open2 < 0.5 && s.tilt2 < 0.5) continue;
        out.push({ kind: "window_rain", entity: link.contact ?? link.tilt ?? link.contact2 ?? o.id, roomId: o.room_id, floorId: floor.id });
      }
    }
  }
  if (sources.outage && isOutage(hass.states[sources.outage])) out.push({ kind: "power_outage", entity: sources.outage, roomId: null, floorId: null });
  // a window or door contact that has been unavailable for a while (switched on in ⚙ House): the opening would look
  // shut although nobody knows – an empty battery, out of radio reach
  if (building.settings.alert_unavailable) {
    const now = Date.now();
    const seen = new Set<string>();
    for (const floor of building.floors) {
      for (const o of floor.openings) {
        const link = links.get(o.id);
        if (!link) continue;
        for (const id of [link.contact, link.tilt, link.contact2, link.tilt2]) {
          if (!id || seen.has(id)) continue;
          const st = hass.states[id];
          if (!st || (st.state !== "unavailable" && st.state !== "unknown")) continue;
          const since = Date.parse(st.last_changed ?? "");
          if (Number.isFinite(since) && now - since < UNAVAILABLE_AFTER) continue;
          seen.add(id);
          out.push({ kind: "contact_unavailable", entity: id, roomId: o.room_id, floorId: floor.id });
        }
      }
    }
  }
  // Haushalt Pro: a fridge door open longer than its limit
  for (const fr of sources.fridges ?? []) {
    const f = building.floors.find((x) => x.id === fr.floorId)?.furniture.find((m) => m.id === fr.furnitureId);
    const door = f ? fridgeOpenTooLong(f, hass) : null;
    if (door) out.push({ kind: "fridge_door", entity: door, roomId: fr.roomId, floorId: fr.floorId });
  }
  for (const id of sources.alarms) {
    const state = hass.states[id]?.state;
    if (state === "triggered") out.push({ kind: "alarm", entity: id, roomId: null, floorId: null });
    else if (state === "pending") out.push({ kind: "alarm_pending", entity: id, roomId: null, floorId: null });
  }
  return out;
}

/** Colour a room pulses in (0..1 channels); a module's warning brings its own. */
export function alertColor(a: Pick<Alert, "kind" | "color">): [number, number, number] {
  if (a.color) return a.color;
  switch (a.kind) {
    case "water":
      return [0.2, 0.6, 1];
    case "window_rain":
      return [0.35, 0.72, 1];
    case "alarm_pending":
      return [1, 0.62, 0.2];
    case "power_outage":
      return [1, 0.78, 0.2];
    case "fridge_door":
      return [0.45, 0.85, 1];
    case "contact_unavailable":
      return [0.72, 0.62, 1];
    default:
      return [1, 0.2, 0.25];
  }
}

/** Short text for the banner: "Küche · Rauch: Rauchmelder". */
export function alertText(hass: HomeAssistant | undefined, building: Building, a: Alert): string {
  const room = a.roomId ? building.floors.flatMap((f) => f.rooms).find((r) => r.id === a.roomId) : null;
  // a module's warning brings its text
  if (a.text !== undefined) return room ? `${room.name} · ${a.text}` : a.text;
  const name = hass ? entityName(hass, a.entity) : a.entity;
  const text = translate(hass, `alert_${a.kind}` as Parameters<typeof translate>[1], { name });
  if (!room) return text;
  // without the device name: "Gäste-WC · Fenster offen bei Regen" (the room already says where, #374)
  if (building.settings.alert_names === false) return `${room.name} · ${translate(hass, `alert_short_${a.kind}` as Parameters<typeof translate>[1])}`;
  return `${room.name} · ${text}`;
}
