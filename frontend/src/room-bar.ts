// The room bar (idea from HA-Floorplanner): a tile per room along the bottom of the 3D view – its temperature, the
// lights that are on, an open window or door, a player that plays – and the favourites in front of them. What a room holds
// is worked out once per registry and plan; a state change only reads the states again.
import { favoriteCall, fromCelsius, kindOf, roomClimateValue, roomPanelEntities } from "./devices.ts";
import { zonesOf, type Building, type Floor, type Room } from "./model.ts";
import { roofWindowsOver } from "./solar.ts";
import type { HomeAssistant } from "./types.ts";

export interface RoomTile {
  floorId: string;
  roomId: string;
  name: string;
  /** In Home Assistant's unit (as the room panel shows it), null without a sensor or a thermostat telling it. */
  temp: number | null;
  /** The room's lights, and those of them that are on. */
  lights: string[];
  lightsOn: string[];
  /** Humidity in %, null without a sensor. */
  humidity: number | null;
  /** Windows and doors with a contact that are open. */
  open: number;
  /** A player in the room plays (a paused one says nothing: many speakers sit paused all day, #815). */
  playing: boolean;
  /** Something is on or open: the tile glows. */
  active: boolean;
}

export interface FavoriteTile {
  id: string;
  domain: string;
  service: string;
  /** A switch or a light that is on (scenes and scripts have no state to show). */
  on: boolean;
}

/** Contacts that tell an open window or door. */
const OPENINGS = new Set(["window", "door", "opening", "garage_door"]);

/** The entities each room shows, per registry and plan (the panel's own choice, so bar and panel agree). */
let memo: { entities: unknown; building: Building; rooms: Map<string, string[]> } | null = null;

function roomEntities(hass: HomeAssistant, b: Building, floor: Floor, room: Room): string[] {
  if (!memo || memo.entities !== hass.entities || memo.building !== b) memo = { entities: hass.entities, building: b, rooms: new Map() };
  let ids = memo.rooms.get(room.id);
  if (!ids) {
    ids = roomPanelEntities(hass, floor, room, roofWindowsOver(b, room.id)).shown;
    memo.rooms.set(room.id, ids);
  }
  return ids;
}

/** The tiles of one floor, or of every floor from the bottom up (the house view). */
export function roomTiles(hass: HomeAssistant, b: Building, floorId: string | null): RoomTile[] {
  const floors = floorId ? b.floors.filter((f) => f.id === floorId) : [...b.floors].sort((p, q) => p.elevation - q.elevation);
  const out: RoomTile[] = [];
  for (const floor of floors)
    for (const [i, room] of zonesOf(floor).entries()) {
      // several areas of one garden (front and back lawn with the same area and name) share one tile, as in the room chips
      if (!room.name?.trim() || (room.outdoor && zonesOf(floor).findIndex((x) => x.outdoor && x.area_id === room.area_id && x.name === room.name) < i)) continue;
      const ids = roomEntities(hass, b, floor, room);
      const lights = ids.filter((id) => kindOf(id) === "light" && hass.states[id]);
      const lightsOn = lights.filter((id) => hass.states[id].state === "on");
      const open = ids.filter((id) => {
        const st = hass.states[id];
        return kindOf(id) === "binary" && st?.state === "on" && OPENINGS.has(String(st.attributes.device_class ?? ""));
      }).length;
      const playing = ids.some((id) => kindOf(id) === "media" && hass.states[id]?.state === "playing");
      const c = roomClimateValue(hass, floor, room, "temperature");
      let temp = c === null ? null : fromCelsius(hass, c);
      if (temp === null && room.climate?.temperature !== "none") {
        const t = ids.filter((id) => kindOf(id) === "climate").map((id) => hass.states[id]?.attributes.current_temperature).find((v) => typeof v === "number");
        if (typeof t === "number") temp = t;
      }
      const humidity = roomClimateValue(hass, floor, room, "humidity");
      out.push({ floorId: floor.id, roomId: room.id, name: room.name, temp, humidity, lights, lightsOn, open, playing, active: lightsOn.length > 0 || open > 0 || playing });
    }
  return out;
}

/** The room's light switch: any light on switches them all off, else all of them on. */
export function lightCall(tile: Pick<RoomTile, "lights" | "lightsOn">): ["turn_on" | "turn_off", string[]] {
  return tile.lightsOn.length ? ["turn_off", tile.lightsOn] : ["turn_on", tile.lights];
}

/** The plan's favourites that Home Assistant knows. */
export function favoriteTiles(hass: HomeAssistant, b: Building): FavoriteTile[] {
  return (b.settings.favorites ?? [])
    .filter((id) => hass.states[id])
    .map((id) => {
      const [domain, service] = favoriteCall(id);
      return { id, domain, service, on: domain === "homeassistant" && hass.states[id].state === "on" };
    });
}
