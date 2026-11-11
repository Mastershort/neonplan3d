import assert from "node:assert/strict";
import { test } from "node:test";
import { isRoomPlan, readRoomPlan } from "./roomplan.ts";
import { buildPlan } from "./builder.ts";
import { polygonArea } from "../model.ts";

// a RoomPlan surface: its size and a column-major transform turned by `angle` about y, its centre at (x, y, z)
const surface = (len: number, h: number, x: number, y: number, z: number, angle: number, extra: Record<string, unknown> = {}) => ({
  dimensions: [len, h, 0],
  transform: [Math.cos(angle), 0, Math.sin(angle), 0, 0, 1, 0, 0, -Math.sin(angle), 0, Math.cos(angle), 0, x, y, z, 1],
  ...extra,
});
// the scan's origin is the phone: the floor lies 1.3 m below it
const FLOOR = -1.3;
const wall = (ax: number, az: number, bx: number, bz: number) =>
  surface(Math.hypot(bx - ax, bz - az), 2.5, (ax + bx) / 2, FLOOR + 1.25, (az + bz) / 2, Math.atan2(bz - az, bx - ax), { category: { wall: {} } });

// two rooms scanned side by side: their walls are the room-side surfaces, 12 cm apart where they meet; the walls
// stop a few centimetres short of each other as a scan does
const scan = {
  version: 2,
  walls: [
    wall(0, 0, 3.98, 0),
    wall(4, 0.02, 4, 2.98),
    wall(4, 3, 0.02, 3),
    wall(0, 2.98, 0, 0.02),
    wall(4.12, 0, 7, 0),
    wall(7, 0.02, 7, 3),
    wall(6.98, 3, 4.12, 3),
    wall(4.12, 3, 4.12, 0.02),
  ],
  doors: [surface(0.9, 2.0, 4.06, FLOOR + 1.0, 1.5, Math.PI / 2, { category: { door: { isOpen: false } } })],
  windows: [surface(1.2, 1.3, 2, FLOOR + 0.9 + 0.65, 0, 0, { category: { window: {} } })],
  openings: [],
  objects: [
    { category: { sofa: {} }, ...surface(2, 0.8, 1.5, FLOOR + 0.4, 2.4, Math.PI) },
    { category: { bed: {} }, ...surface(1.6, 0.5, 5.5, FLOOR + 0.25, 1.5, 0) },
    { category: { storage: {} }, ...surface(1, 2, 6.5, FLOOR + 1, 0.4, 0) },
  ],
  sections: [{ label: "livingRoom", center: [2, FLOOR, 1.5], story: 0 }],
};

test("a RoomPlan scan of two rooms: rooms found, joined, door and window placed, objects mapped", () => {
  assert.ok(isRoomPlan(scan));
  const raw = readRoomPlan(scan, "de");
  assert.equal(raw.floors.length, 1);
  assert.equal(raw.floors[0].elevation, 0);
  const { building: b, stats } = buildPlan(raw);
  const f = b.floors[0];
  assert.equal(f.rooms.length, 2, JSON.stringify(f.rooms.map((r) => r.points)));
  // joined on the middle of the 12 cm between them
  const areas = f.rooms.map((r) => polygonArea(r.points)).sort((a, c) => a - c);
  assert.ok(Math.abs(areas[0] - 2.94 * 3) < 0.15 && Math.abs(areas[1] - 4.06 * 3) < 0.15, String(areas));
  assert.equal(stats.doors, 1);
  assert.equal(stats.windows, 1);
  const win = f.openings.find((o) => o.type === "window")!;
  assert.ok(Math.abs(win.sill - 0.9) < 0.01, String(win.sill));
  assert.deepEqual(f.furniture.map((m) => m.type).sort(), ["bed", "sofa", "tall_cabinet"]);
  assert.equal(f.height, 2.5);
});

test("RoomPlan floor outlines and labels name the rooms", () => {
  const withFloors = {
    ...scan,
    floors: [{ category: { floor: {} }, dimensions: [4, 3, 0], transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, FLOOR, 0, 1], polygonCorners: [[0, 0, 0], [3.98, 0, 0], [3.98, 0, 3], [0, 0, 3]] }],
  };
  const raw = readRoomPlan(withFloors, "de");
  assert.equal(raw.floors[0].rooms[0].name, "Wohnzimmer");
  assert.equal(readRoomPlan(withFloors, "en").floors[0].rooms[0].name, "Living room");
});

test("RoomPlan as Swift's Codable writes it: transforms as four columns, a whole home as a structure of rooms", () => {
  // simd_float4x4 encodes as an array of its four columns
  const cols = (s: { transform: number[] }) => ({ ...s, transform: [s.transform.slice(0, 4), s.transform.slice(4, 8), s.transform.slice(8, 12), s.transform.slice(12, 16)] });
  const room = (walls: ReturnType<typeof wall>[]) => ({ identifier: "r", walls: walls.map(cols), doors: [], windows: [], openings: [], objects: [], sections: [] });
  // a CapturedStructure: only per-room lists, nothing at the top
  const structure = { rooms: [room(scan.walls.slice(0, 4)), room(scan.walls.slice(4))], walls: [], doors: [], windows: [], openings: [], objects: [], floors: [], sections: [] };
  assert.ok(isRoomPlan(structure));
  const { building: b } = buildPlan(readRoomPlan(structure, "en"));
  assert.equal(b.floors.length, 1);
  assert.equal(b.floors[0].rooms.length, 2);
  assert.equal(b.floors[0].name, "Ground floor");
});
