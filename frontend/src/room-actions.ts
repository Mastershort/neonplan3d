// What a room does in one go: "everything off" (from its panel or by voice) and the robot vacuum sent to clean it
// (the room's own script or button for that, set in the editor).

import { favoriteCall, isUnavailable, roomPanelEntities } from "./devices.ts";
import { isLamp, pointInPolygon, type Floor, type Room } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

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

/** The call that sends the robot vacuum to clean this room (its script, button, scene …), null without one. */
export function cleaningCall(hass: HomeAssistant, room: Room): ServiceCall | null {
  const id = room.cleaning;
  if (!id || !hass.states[id]) return null;
  const [domain, service] = favoriteCall(id);
  return { domain, service, data: { entity_id: id } };
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
