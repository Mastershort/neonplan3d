/**
 * Motion trail: where motion was reported in the last half hour, in time order.
 *
 * Sources are motion, occupancy and presence sensors with a spot in the plan: placed ones at their
 * position, a camera's motion sensors at the camera, and the sensors of a room's area at the room's
 * centre. Events come from Home Assistant's history (state rows) and from the sensors that are on
 * right now; the points carry an age from 0 (new) to 1 (as old as the window).
 */
import { areaEntities, kindOf } from "./devices.ts";
import { cameraMotionSensors } from "./markers.ts";
import { centroid, type Building } from "./model.ts";
import type { HomeAssistant } from "./types.ts";
import { hourCycle } from "./units.ts";

export const TRAIL_WINDOW_MS = 30 * 60 * 1000;
const MOTION = new Set(["motion", "occupancy", "presence"]);

export interface TrailSource {
  entity: string;
  floorId: string;
  x: number;
  z: number;
}

export interface TrailEvent {
  entity: string;
  time: number;
}

export interface TrailPoint extends TrailSource {
  time: number;
  /** 0 = just now … 1 = as old as the window. */
  age: number;
}

/** One state row of Home Assistant's history (minimal response): state, last updated and last changed in seconds. */
export interface HistoryRow {
  s: string;
  lu: number;
  lc?: number;
}

/** A sensor that is on right now (its last change tells when). */
export interface LiveState {
  entity: string;
  state?: string;
  lastChanged?: number;
}

export function isMotionSensor(hass: HomeAssistant, entityId: string): boolean {
  return entityId.startsWith("binary_sensor.") && MOTION.has(String(hass.states[entityId]?.attributes.device_class));
}

/** Motion sensors with a spot in the plan (each once: a placed sensor wins over its room's centre). */
export function trailSources(hass: HomeAssistant, building: Building): TrailSource[] {
  const out: TrailSource[] = [];
  const seen = new Set<string>();
  const add = (entity: string, floorId: string, x: number, z: number) => {
    if (seen.has(entity)) return;
    seen.add(entity);
    out.push({ entity, floorId, x, z });
  };
  for (const floor of building.floors) {
    for (const pl of floor.placements) {
      if (isMotionSensor(hass, pl.entity_id)) add(pl.entity_id, floor.id, pl.x, pl.z);
      else if (kindOf(pl.entity_id) === "camera") for (const s of cameraMotionSensors(hass, pl.entity_id)) add(s, floor.id, pl.x, pl.z);
    }
  }
  for (const floor of building.floors) {
    for (const room of floor.rooms) {
      if (!room.area_id || room.points.length < 3) continue;
      const [cx, cz] = centroid(room.points);
      for (const id of areaEntities(hass, room.area_id)) if (isMotionSensor(hass, id)) add(id, floor.id, cx, cz);
    }
  }
  return out;
}

/** The moments a sensor turned on within the window: from history rows, plus sensors that are on now. */
export function trailEvents(rows: Record<string, HistoryRow[]>, live: LiveState[], now: number, windowMs = TRAIL_WINDOW_MS): TrailEvent[] {
  const from = now - windowMs;
  const events: TrailEvent[] = [];
  for (const [entity, list] of Object.entries(rows)) {
    let prev = "";
    for (const r of list) {
      const t = (r.lc ?? r.lu) * 1000;
      if (r.s === "on" && prev !== "on" && t >= from && t <= now) events.push({ entity, time: t });
      prev = r.s;
    }
  }
  for (const l of live) {
    const t = l.lastChanged ?? NaN;
    if (l.state !== "on" || !(t >= from && t <= now)) continue;
    if (!events.some((e) => e.entity === l.entity && Math.abs(e.time - t) < 2000)) events.push({ entity: l.entity, time: t });
  }
  return events.sort((a, b) => a.time - b.time);
}

/** Events with a spot in the plan, in time order; the same sensor again within a minute counts once; the newest 40 stay. */
export function trailPoints(sources: TrailSource[], events: TrailEvent[], now: number, windowMs = TRAIL_WINDOW_MS): TrailPoint[] {
  const at = new Map(sources.map((s) => [s.entity, s]));
  const out: TrailPoint[] = [];
  for (const e of events) {
    const s = at.get(e.entity);
    if (!s) continue;
    const last = out[out.length - 1];
    if (last && last.entity === e.entity && e.time - last.time < 60000) continue;
    out.push({ ...s, time: e.time, age: Math.min(1, Math.max(0, (now - e.time) / windowMs)) });
  }
  return out.slice(-40);
}

/** "12:04" in the user's language. */
export function trailTime(hass: HomeAssistant, time: number): string {
  return new Date(time).toLocaleTimeString(hass.language, { hour: "2-digit", minute: "2-digit", ...hourCycle(hass) });
}

/** A walking figure (mdi:walk), the icon of a trail point. */
export const TRAIL_ICON =
  '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';
