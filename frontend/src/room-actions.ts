// What a room does in one go: "everything off" (from its panel or by voice) and the robot vacuum sent to clean it
// (the room's own script or button for that, set in the editor).

import { entityAreaId, favoriteCall, isUnavailable, roomPanelEntities } from "./devices.ts";
import { isLamp, pointInPolygon, type Floor, type Room } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

export interface ServiceCall {
  domain: string;
  service: string;
  data: Record<string, unknown>;
}

/**
 * Everything of a room switched off: the lights and fans that are on, the TVs, the speakers that play (they pause).
 * Plain switches only where a lamp hangs on them in the plan – a socket may feed the fridge. The room's devices are
 * the ones its panel shows: placed in it, linked to its furniture, and of its Home Assistant area.
 */
export function everythingOff(hass: HomeAssistant, floor: Floor, room: Room): ServiceCall[] {
  const { shown, more } = roomPanelEntities(hass, floor, room);
  const inRoom = (x: number, z: number) => pointInPolygon([x, z], room.points);
  const lampSwitches = new Set(floor.furniture.filter((f) => inRoom(f.x, f.z) && isLamp(f.type) && f.entity?.startsWith("switch.")).map((f) => f.entity!));
  const lights: string[] = [];
  const fans: string[] = [];
  const switches: string[] = [];
  const off: string[] = [];
  const pause: string[] = [];
  for (const id of new Set([...shown, ...more])) {
    const st = hass.states[id];
    if (!st || isUnavailable(st)) continue;
    const domain = id.split(".")[0];
    if (domain === "light" && st.state === "on") lights.push(id);
    else if (domain === "fan" && st.state === "on") fans.push(id);
    else if (domain === "switch" && st.state === "on" && lampSwitches.has(id)) switches.push(id);
    else if (domain === "media_player" && st.state !== "off" && st.state !== "standby") {
      // a TV goes off; a speaker that plays pauses (it stays ready for the next song)
      if (st.attributes.device_class === "tv") off.push(id);
      else if (st.state === "playing") pause.push(id);
    }
  }
  const calls: ServiceCall[] = [];
  const add = (domain: string, service: string, ids: string[]) => ids.length && calls.push({ domain, service, data: { entity_id: ids } });
  add("light", "turn_off", lights);
  add("fan", "turn_off", fans);
  add("switch", "turn_off", switches);
  add("media_player", "turn_off", off);
  add("media_player", "media_pause", pause);
  return calls;
}

/** How many devices a set of calls reaches. */
export function callCount(calls: readonly ServiceCall[]): number {
  return calls.reduce((n, c) => n + (c.data.entity_id as string[]).length, 0);
}

const VACUUM_CLEAN_AREA = 16384;

/** A vacuum that cleans by Home Assistant area (its integration offers segments to map). */
export function canCleanArea(st: HassEntity | undefined): boolean {
  return !!st && st.entity_id.startsWith("vacuum.") && ((Number(st.attributes.supported_features) || 0) & VACUUM_CLEAN_AREA) !== 0;
}

/** The call that sends the robot vacuum to clean this room: its script, button or scene …, or a vacuum that cleans by area. Null without one. */
export function cleaningCall(hass: HomeAssistant, room: Room): ServiceCall | null {
  const id = room.cleaning;
  if (!id || !hass.states[id]) return null;
  if (id.startsWith("vacuum.")) {
    return room.area_id && canCleanArea(hass.states[id]) ? { domain: "vacuum", service: "clean_area", data: { entity_id: id, cleaning_area_id: [room.area_id] } } : null;
  }
  const [domain, service] = favoriteCall(id);
  return { domain, service, data: { entity_id: id } };
}

/** The Home Assistant areas of a vacuum that have segments mapped (needs the admin's registry access), empty when unknown. */
async function mappedAreas(hass: HomeAssistant, vacuum: string): Promise<Set<string>> {
  try {
    const entry = await hass.callWS<{ options?: { vacuum?: { area_mapping?: Record<string, string[]> } } }>({ type: "config/entity_registry/get", entity_id: vacuum });
    return new Set(Object.entries(entry.options?.vacuum?.area_mapping ?? {}).filter(([, segments]) => segments.length).map(([area]) => area));
  } catch {
    return new Set();
  }
}

/** Whether this vacuum has segments mapped to the area. */
export async function vacuumMapsArea(hass: HomeAssistant, vacuum: string, areaId: string): Promise<boolean> {
  return canCleanArea(hass.states[vacuum]) && (await mappedAreas(hass, vacuum)).has(areaId);
}

/** The vacuum with segments mapped to this area. With several, the one on the area's floor wins, else the first. */
export async function vacuumForArea(hass: HomeAssistant, areaId: string): Promise<string | null> {
  const mapped: string[] = [];
  const candidates = Object.values(hass.states).filter(canCleanArea);
  const has = await Promise.all(candidates.map((st) => mappedAreas(hass, st.entity_id)));
  candidates.forEach((st, i) => has[i].has(areaId) && mapped.push(st.entity_id));
  const floor = hass.areas?.[areaId]?.floor_id;
  if (mapped.length > 1 && floor) {
    const same = mapped.find((id) => hass.areas?.[entityAreaId(hass, id) ?? ""]?.floor_id === floor);
    if (same) return same;
  }
  return mapped[0] ?? null;
}

/** The plan room of a Home Assistant area (where a tablet hangs): the first indoor room linked to it. */
export function roomOfArea(floors: readonly Floor[], areaId: string | null | undefined): { floor: Floor; room: Room } | null {
  if (!areaId) return null;
  for (const floor of floors) {
    const room = floor.rooms.find((r) => r.area_id === areaId);
    if (room) return { floor, room };
  }
  return null;
}
