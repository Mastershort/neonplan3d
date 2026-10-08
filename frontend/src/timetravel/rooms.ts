// Time travel: which room each replayed entity belongs to – for the day summary per room and for the
// names in the events sheet. Rooms come from Home Assistant's areas, the devices placed in the plan, linked
// furniture and the windows' sensors.

import { pointInPolygon, type Building } from "../model.ts";
import type { HomeAssistant } from "../types.ts";
import type { HistorySpec } from "./types.ts";

export interface RoomEntities {
  floorId: string;
  roomId: string;
  name: string;
  lights: string[];
  /** The sensors of each window (open when one of them is). */
  windows: string[][];
  climates: string[];
  temps: string[];
  /** Every entity of the room. */
  all: string[];
}

const domainOf = (id: string) => id.slice(0, id.indexOf("."));

/** The area of an entity: its own, else its device's. */
function areaOf(hass: HomeAssistant, id: string): string | null {
  const e = hass.entities?.[id];
  if (!e) return null;
  return e.area_id ?? (e.device_id ? (hass.devices?.[e.device_id]?.area_id ?? null) : null);
}

/** The rooms of the plan with their lights, windows, climate devices and temperature sensors. */
export function roomEntities(hass: HomeAssistant, building: Building, spec: Pick<HistorySpec, "openings" | "furniture">): RoomEntities[] {
  const out: RoomEntities[] = [];
  const byArea = new Map<string, string[]>();
  for (const id of Object.keys(hass.entities ?? {})) {
    const area = areaOf(hass, id);
    if (area) byArea.set(area, [...(byArea.get(area) ?? []), id]);
  }
  const openings = new Map(spec.openings);
  const furniture = new Map(spec.furniture);
  for (const floor of building.floors) {
    for (const room of floor.rooms) {
      if (room.points.length < 3) continue;
      const ids = new Set<string>(room.area_id ? (byArea.get(room.area_id) ?? []) : []);
      for (const p of floor.placements) if (pointInPolygon([p.x, p.z], room.points)) ids.add(p.entity_id);
      for (const f of floor.furniture) {
        const l = furniture.get(f.id);
        if (l?.entity && pointInPolygon([f.x, f.z], room.points)) ids.add(l.entity);
      }
      const windows: string[][] = [];
      for (const o of floor.openings) {
        if (o.room_id !== room.id) continue;
        const l = openings.get(o.id);
        const sensors = l ? [l.contact, l.tilt, l.contact2, l.tilt2].filter((x): x is string => !!x) : [];
        for (const id of sensors) ids.add(id);
        if (sensors.length && o.type !== "door" && o.type !== "garage") windows.push(sensors);
      }
      const all = [...ids].filter((id) => !!hass.states[id]);
      const cls = (id: string) => hass.states[id]?.attributes.device_class;
      out.push({
        floorId: floor.id,
        roomId: room.id,
        name: room.name,
        lights: all.filter((id) => domainOf(id) === "light"),
        windows,
        climates: all.filter((id) => domainOf(id) === "climate"),
        temps: all.filter((id) => domainOf(id) === "sensor" && cls(id) === "temperature"),
        all,
      });
    }
  }
  return out;
}

/** The room of every entity (the first room that has it). */
export function roomOf(rooms: readonly RoomEntities[]): Map<string, RoomEntities> {
  const out = new Map<string, RoomEntities>();
  for (const r of rooms) for (const id of r.all) if (!out.has(id)) out.set(id, r);
  return out;
}
