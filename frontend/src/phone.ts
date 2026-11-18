// The phone view's bar at the bottom (see components/phone-nav.ts): what its places are for a house, and the numbers
// on them. Everything comes from the plan and from the room tiles the room bar already works out.
import type { RoomTile } from "./room-bar.ts";

export interface NavFloor {
  id: string;
  name: string;
  rooms: RoomTile[];
  /** Lights on across the floor's rooms. */
  lightsOn: number;
}

export interface NavSlot {
  /** "now", "covers", "more", "rooms" (every floor in one menu) or "floor:<id>". */
  id: string;
  /** The floor's own name; empty for the fixed places (the element has their words). */
  label: string;
  /** The number on the place (lights on, shut blinds, things that need a look); 0 shows none. */
  badge: number;
}

/** The floors that have rooms, the lowest first, with their room tiles. */
export function navFloors(floors: { id: string; name: string; elevation: number }[], tiles: RoomTile[]): NavFloor[] {
  return [...floors]
    .sort((a, b) => a.elevation - b.elevation)
    .map((f) => {
      const rooms = tiles.filter((t) => t.floorId === f.id);
      return { id: f.id, name: f.name, rooms, lightsOn: rooms.reduce((n, r) => n + r.lightsOn.length, 0) };
    })
    .filter((f) => f.rooms.length > 0);
}

/**
 * The five places: Now, the rooms, the blinds, More. A house with two floors gets a place per floor (two taps into any
 * room); one floor or more than two share one place "Rooms", whose menu switches between the floors. Without blinds
 * their place is left out.
 */
export function navSlots(floors: NavFloor[], attention: number, coversShut: number, hasCovers: boolean): NavSlot[] {
  const rooms: NavSlot[] =
    floors.length === 2
      ? floors.map((f) => ({ id: `floor:${f.id}`, label: f.name, badge: f.lightsOn }))
      : floors.length
        ? [{ id: "rooms", label: "", badge: floors.reduce((n, f) => n + f.lightsOn, 0) }]
        : [];
  return [{ id: "now", label: "", badge: attention }, ...rooms, ...(hasCovers ? [{ id: "covers", label: "", badge: coversShut }] : []), { id: "more", label: "", badge: 0 }];
}

export interface NavCover {
  entity: string;
  name: string;
  /** 0 shut … 100 open; null when the cover tells no position. */
  position: number | null;
  shut: boolean;
}

/** A cover as the blinds page shows it: shut when it says so or stands at 0. */
export function navCover(entity: string, name: string, state: string | undefined, position: unknown): NavCover {
  const pos = typeof position === "number" && Number.isFinite(position) ? Math.round(position) : null;
  return { entity, name, position: pos, shut: state === "closed" || pos === 0 };
}
