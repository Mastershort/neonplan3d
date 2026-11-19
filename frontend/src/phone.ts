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
  /** An own place's symbol. */
  icon?: string;
}

/**
 * A place of one's own in the bar (card option `phone_places`, at most two): a group of devices with a page of its
 * own, a scene or script that runs at a tap, or a page of a Home Assistant dashboard.
 */
export interface PhonePlace {
  kind: "lights" | "climate" | "action" | "link";
  /** The word under the symbol (empty: the kind's own, or the scene's name). */
  name?: string;
  /** An emoji or a short sign (empty: the kind's own). */
  icon?: string;
  /** action: the scene, script, button or automation. */
  entity?: string;
  /** link: the path inside Home Assistant ("/lovelace/energie"). */
  path?: string;
}

export const MAX_PLACES = 2;
const KINDS = new Set(["lights", "climate", "action", "link"]);

/** The places as the bar can use them: known kinds only, an action with its entity, a link with a path inside HA. */
export function phonePlaces(raw: unknown): PhonePlace[] {
  if (!Array.isArray(raw)) return [];
  const out: PhonePlace[] = [];
  for (const r of raw as Partial<PhonePlace>[]) {
    if (!r || typeof r !== "object" || !KINDS.has(String(r.kind))) continue;
    if (r.kind === "action" && !/^[a-z_]+\.[a-z0-9_]+$/.test(String(r.entity ?? ""))) continue;
    if (r.kind === "link" && !/^\/[^/]/.test(String(r.path ?? ""))) continue;
    out.push({ kind: r.kind!, name: typeof r.name === "string" ? r.name.slice(0, 24) : undefined, icon: typeof r.icon === "string" ? r.icon.slice(0, 4) : undefined, entity: r.entity, path: r.path });
    if (out.length === MAX_PLACES) break;
  }
  return out;
}

/** A device on a group's page: a lamp with its brightness, a thermostat with what it has and what it wants. */
export interface NavDevice {
  entity: string;
  name: string;
  on: boolean;
  detail: string;
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
export function navSlots(floors: NavFloor[], attention: number, coversShut: number, hasCovers: boolean, own: NavSlot[] = []): NavSlot[] {
  const rooms: NavSlot[] =
    floors.length === 2
      ? floors.map((f) => ({ id: `floor:${f.id}`, label: f.name, badge: f.lightsOn }))
      : floors.length
        ? [{ id: "rooms", label: "", badge: floors.reduce((n, f) => n + f.lightsOn, 0) }]
        : [];
  return [{ id: "now", label: "", badge: attention }, ...rooms, ...(hasCovers ? [{ id: "covers", label: "", badge: coversShut }] : []), ...own, { id: "more", label: "", badge: 0 }];
}

/** A phone's bar holds this many places legibly; the rest waits under "More". */
export const MAX_SLOTS = 5;

/**
 * The bar with at most MAX_SLOTS places: two floors share one place "Rooms" first, then the places before "More" move
 * under it from the right (own places, the blinds). Returns the bar and what moved, in the bar's order.
 */
export function fitSlots(slots: NavSlot[], max = MAX_SLOTS): { bar: NavSlot[]; over: NavSlot[] } {
  let bar = [...slots];
  if (bar.length > max) {
    const floors = bar.filter((s) => s.id.startsWith("floor:"));
    if (floors.length > 1) {
      const at = bar.indexOf(floors[0]);
      bar = bar.filter((s) => !s.id.startsWith("floor:"));
      bar.splice(at, 0, { id: "rooms", label: "", badge: floors.reduce((n, f) => n + f.badge, 0) });
    }
  }
  const over: NavSlot[] = [];
  while (bar.length > max) {
    // the last place before "More"; "Now" and the rooms stay
    const i = bar.length - 2;
    if (i < 1 || bar[i].id === "rooms" || bar[i].id.startsWith("floor:")) break;
    over.unshift(...bar.splice(i, 1));
  }
  return { bar, over };
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
