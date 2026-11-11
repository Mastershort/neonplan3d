// Apple RoomPlan (an iPhone or iPad with LiDAR): the JSON of a CapturedRoom or CapturedStructure as scanning apps
// export it. Walls, doors, windows and openings are flat boxes with a size and a 4×4 transform (metres, y up);
// objects carry a category (sofa, bed, storage …); iOS 17 adds floor outlines, room labels and storeys.

import type { Vec2 } from "../model.ts";
import { pointInPolygon } from "../model.ts";
import type { RawFloor, RawOpening, RawPlan } from "./builder.ts";
import { ROOMPLAN_TYPES } from "./furniture-map.ts";

interface Surface {
  identifier?: string;
  category?: Record<string, unknown>;
  dimensions?: number[];
  transform?: number[] | number[][];
  polygonCorners?: number[][];
  story?: number;
}

interface Section {
  label?: string;
  center?: number[];
  story?: number;
}

const LABELS: Record<string, [string, string]> = {
  livingRoom: ["Wohnzimmer", "Living room"],
  bedroom: ["Schlafzimmer", "Bedroom"],
  bathroom: ["Bad", "Bathroom"],
  kitchen: ["Küche", "Kitchen"],
  diningRoom: ["Esszimmer", "Dining room"],
  unidentified: ["", ""],
};

/** A 4×4 matrix (column-major, flat or as four columns). */
function matrix(t: Surface["transform"]): number[] | null {
  if (!t) return null;
  const flat = (Array.isArray(t[0]) ? (t as number[][]).flat() : (t as number[])).map(Number);
  return flat.length === 16 && flat.every(Number.isFinite) ? flat : null;
}

/** Whether a JSON value looks like a RoomPlan capture. */
export function isRoomPlan(data: unknown): boolean {
  const d = data as { walls?: unknown; rooms?: unknown };
  // a structure may list its walls only per room, with an empty list at the top
  const top = Array.isArray(d?.walls) ? (d.walls as Surface[]) : [];
  const rooms = Array.isArray(d?.rooms) ? (d.rooms as { walls?: Surface[] }[]) : [];
  const walls = top.length ? top : (rooms.find((r) => Array.isArray(r?.walls) && r.walls.length)?.walls ?? []);
  return walls.length > 0 && !!walls[0]?.dimensions && !!walls[0]?.transform;
}

export function readRoomPlan(data: unknown, lang = "de"): RawPlan {
  const d = data as Record<string, unknown>;
  const rooms = Array.isArray(d.rooms) ? (d.rooms as Record<string, unknown>[]) : [];
  // a structure lists everything at the top; older exports only per room
  const list = <T>(key: string): T[] => {
    const top = Array.isArray(d[key]) ? (d[key] as T[]) : [];
    return top.length ? top : rooms.flatMap((r) => (Array.isArray(r[key]) ? (r[key] as T[]) : []));
  };
  const walls = list<Surface>("walls");
  if (!walls.length) throw new Error("nothing_found");
  const de = lang.startsWith("de");
  const floors = new Map<number, RawFloor & { base: number[] }>();
  const floorOf = (story = 0) => {
    let f = floors.get(story);
    if (!f) floors.set(story, (f = { name: "", elevation: 0, rooms: [], walls: [], openings: [], furniture: [], base: [] }));
    return f;
  };

  for (const w of walls) {
    const m = matrix(w.transform);
    const [len = 0, h = 2.5] = w.dimensions ?? [];
    if (!m || len < 0.05) continue;
    // centre and the wall's own x axis (along it) in the plan
    const c: Vec2 = [m[12], m[14]];
    const ax = Math.hypot(m[0], m[2]) || 1;
    const dir: Vec2 = [m[0] / ax, m[2] / ax];
    const f = floorOf(w.story);
    f.walls.push({ a: [c[0] - (dir[0] * len) / 2, c[1] - (dir[1] * len) / 2], b: [c[0] + (dir[0] * len) / 2, c[1] + (dir[1] * len) / 2], height: h });
    f.base.push(m[13] - h / 2);
  }
  // each storey's floor level: the wall bottoms
  for (const f of floors.values()) {
    f.base.sort((a, b) => a - b);
    const level = f.base.length ? f.base[Math.floor(f.base.length / 2)] : 0;
    f.elevation = level;
    const hs = f.walls.map((w) => w.height ?? 2.5).sort((a, b) => a - b);
    f.height = hs[Math.floor(hs.length / 2)];
  }
  const add = (items: Surface[], kind: RawOpening["kind"]) => {
    for (const o of items) {
      const m = matrix(o.transform);
      const [w = 0.9, h = 2] = o.dimensions ?? [];
      if (!m) continue;
      const f = floorOf(o.story);
      const sill = Math.max(0, m[13] - h / 2 - f.elevation);
      // a plain opening (an archway) counts as a door when it reaches the floor
      const k = kind ?? (sill < 0.15 ? "door" : "window");
      f.openings.push({ kind: k, at: [m[12], m[14]], width: w, height: h, sill: k === "window" ? sill : 0 });
    }
  };
  add(list<Surface>("doors"), "door");
  add(list<Surface>("windows"), "window");
  add(list<Surface>("openings"), null);

  for (const o of list<Surface>("objects")) {
    const m = matrix(o.transform);
    const [w = 0.5, h = 0.5, dep = 0.5] = o.dimensions ?? [];
    if (!m) continue;
    const cat = Object.keys(o.category ?? {})[0] ?? "";
    const f = floorOf(o.story);
    f.furniture.push({
      name: cat,
      type: ROOMPLAN_TYPES[cat] ?? null,
      x: m[12],
      z: m[14],
      w,
      d: dep,
      h,
      // the item's width runs along its own x axis
      rotation: (Math.atan2(m[2], m[0]) * 180) / Math.PI,
      y: Math.max(0, m[13] - h / 2 - f.elevation),
    });
  }

  // floor outlines (iOS 17) are the rooms; without them the rooms are found between the walls
  for (const s of list<Surface>("floors")) {
    const m = matrix(s.transform);
    const corners = s.polygonCorners ?? [];
    if (!m || corners.length < 3) continue;
    const pts = corners.map(([x = 0, y = 0, z = 0]) => [m[0] * x + m[4] * y + m[8] * z + m[12], m[2] * x + m[6] * y + m[10] * z + m[14]] as Vec2);
    floorOf(s.story).rooms.push({ name: "", points: pts });
  }
  // room labels: the room around each label's centre gets its name
  const sections = list<Section>("sections");
  for (const f of floors.values())
    for (const r of f.rooms) {
      const s = sections.find((x) => x.center && pointInPolygon([x.center[0], x.center[2]], r.points));
      if (s?.label) r.name = LABELS[s.label]?.[de ? 0 : 1] ?? s.label;
    }

  // heights from the ground floor's level (the phone's own height is the scan's origin)
  const ground = floors.get(0)?.elevation ?? Math.min(...[...floors.values()].map((f) => f.elevation));
  for (const f of floors.values()) f.elevation = Math.round((f.elevation - ground) * 100) / 100;
  const out = [...floors.entries()].sort((a, b) => a[0] - b[0]).map(([, f], i, all) => {
    const { base: _base, ...floor } = f;
    void _base;
    return { ...floor, name: all.length > 1 ? (de ? `Etage ${i + 1}` : `Floor ${i + 1}`) : de ? "Erdgeschoss" : "Ground floor" };
  });
  // RoomPlan places the walls at their room-side surfaces: neighbouring rooms lie a wall apart
  return { source: "RoomPlan", floors: out, roomsAtInnerFaces: true, wallFaces: true, align: true };
}
