// Warnings shown in 3D: smoke, gas, carbon monoxide and water sensors of a room, a triggered alarm,
// a window open while it rains and a power outage. The rooms concerned pulse in the warning's colour.

import { areaEntities, entityName, openingState, type OpeningEntities } from "./devices.ts";
import { translate } from "./i18n.ts";
import type { Building } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";
import { weatherEntity } from "./weather.ts";

export type AlertKind = "smoke" | "gas" | "co" | "water" | "alarm" | "alarm_pending" | "window_rain" | "power_outage";

export interface Alert {
  kind: AlertKind;
  entity: string;
  /** Room and floor concerned; null for the whole house (an alarm). */
  roomId: string | null;
  floorId: string | null;
}

/** Entities the warnings come from; found once per registry. */
export interface AlertSources {
  rooms: { floorId: string; roomId: string; sensors: string[] }[];
  alarms: string[];
  weather: string | null;
  /** The entity that reports a power outage (#214). */
  outage: string | null;
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
  return { rooms, alarms: ids.filter((id) => id.startsWith("alarm_control_panel.")), weather, outage };
}

/** Entities whose state changes may raise or clear a warning. */
export function alertEntities(sources: AlertSources): string[] {
  return [...sources.rooms.flatMap((r) => r.sensors), ...sources.alarms, ...(sources.weather ? [sources.weather] : []), ...(sources.outage ? [sources.outage] : [])];
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
  const raining = !!sources.weather && RAIN_STATES.has(hass.states[sources.weather]?.state ?? "");
  if (raining) {
    for (const floor of building.floors) {
      for (const o of floor.openings) {
        if (o.type !== "window") continue;
        const link = links.get(o.id);
        if (!link) continue;
        const s = openingState(hass, link, "window");
        if (s.open < 0.5 && s.tilt < 0.5 && s.open2 < 0.5 && s.tilt2 < 0.5) continue;
        out.push({ kind: "window_rain", entity: link.contact ?? link.tilt ?? link.contact2 ?? o.id, roomId: o.room_id, floorId: floor.id });
      }
    }
  }
  if (sources.outage && isOutage(hass.states[sources.outage])) out.push({ kind: "power_outage", entity: sources.outage, roomId: null, floorId: null });
  for (const id of sources.alarms) {
    const state = hass.states[id]?.state;
    if (state === "triggered") out.push({ kind: "alarm", entity: id, roomId: null, floorId: null });
    else if (state === "pending") out.push({ kind: "alarm_pending", entity: id, roomId: null, floorId: null });
  }
  return out;
}

/** UPS and grid states that mean "on battery / no grid" (Network UPS Tools reports "OB", "OB DISCHRG" …). */
const OUTAGE_STATES = new Set(["ob", "on_battery", "onbattery", "on battery", "battery", "outage", "power_outage", "power outage", "offline", "off_grid", "no_grid"]);
/** Binary sensors whose "on" means the power is there (so "off" is the outage). */
const POWER_PRESENT_CLASSES = new Set(["power", "plug", "connectivity", "running"]);

/**
 * Whether an entity reports a power outage: a binary sensor of class power / plug / connectivity / running
 * that is off (no power), any other binary sensor, switch or helper that is on ("outage: on"), a UPS status
 * on battery, or a mains voltage below 100 V. Unavailable or unknown is no outage.
 */
export function isOutage(st: HassEntity | undefined): boolean {
  if (!st || st.state === "unavailable" || st.state === "unknown") return false;
  const domain = st.entity_id.split(".")[0];
  if (domain === "binary_sensor") return POWER_PRESENT_CLASSES.has(String(st.attributes.device_class)) ? st.state === "off" : st.state === "on";
  if (domain === "input_boolean" || domain === "switch") return st.state === "on";
  const value = Number(st.state);
  if (st.state !== "" && Number.isFinite(value)) return st.attributes.unit_of_measurement === "V" && value < 100;
  const text = String(st.state).toLowerCase().trim();
  return OUTAGE_STATES.has(text) || text.startsWith("ob ");
}

/** Colour a room pulses in (0..1 channels). */
export function alertColor(kind: AlertKind): [number, number, number] {
  switch (kind) {
    case "water":
      return [0.2, 0.6, 1];
    case "window_rain":
      return [0.35, 0.72, 1];
    case "alarm_pending":
      return [1, 0.62, 0.2];
    case "power_outage":
      return [1, 0.78, 0.2];
    default:
      return [1, 0.2, 0.25];
  }
}

/** Short text for the banner: "Küche · Rauch: Rauchmelder". */
export function alertText(hass: HomeAssistant | undefined, building: Building, a: Alert): string {
  const room = a.roomId ? building.floors.flatMap((f) => f.rooms).find((r) => r.id === a.roomId) : null;
  const name = hass ? entityName(hass, a.entity) : a.entity;
  const text = translate(hass, `alert_${a.kind}` as Parameters<typeof translate>[1], { name });
  if (!room) return text;
  // without the device name: "Gäste-WC · Fenster offen bei Regen" (the room already says where, #374)
  if (building.settings.alert_names === false) return `${room.name} · ${translate(hass, `alert_short_${a.kind}` as Parameters<typeof translate>[1])}`;
  return `${room.name} · ${text}`;
}
