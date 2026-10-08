import assert from "node:assert/strict";
import { test } from "node:test";
import type { BufferGeometry } from "three";
import type { Floor, Furniture, Opening, Room } from "../model.ts";
import { newFloor } from "../model.ts";
import { buildFloorGeometry, clipAlong, stairHoles } from "./build.ts";

const EXT = 0.24;
const INT = 0.12;

function rect(id: string, x0: number, z0: number, x1: number, z1: number): Room {
  return { id, name: id, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material: "wood" };
}

function floorWith(rooms: Room[], openings: Opening[] = [], furniture: Furniture[] = []): Floor {
  return { ...newFloor("f", "Floor", 0), rooms, openings, furniture };
}

function opening(type: "door" | "window", room_id: string, edge: number, offset: number, width: number): Opening {
  return { id: `${type}${edge}`, room_id, edge, offset, width, type, sill: type === "door" ? 0 : 0.9, height: type === "door" ? 2.05 : 1.3, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null };
}

const near = (a: number, b: number, eps = 1e-6) => assert.ok(Math.abs(a - b) < eps, `${a} != ${b}`);

/** Line segments as [x0, y0, z0, x1, y1, z1, fold]. */
function segments(g: BufferGeometry): number[][] {
  const p = g.getAttribute("position");
  const f = g.getAttribute("fold");
  const out: number[][] = [];
  for (let i = 0; i < p.count; i += 2) out.push([p.getX(i), p.getY(i), p.getZ(i), p.getX(i + 1), p.getY(i + 1), p.getZ(i + 1), f.getX(i)]);
  return out;
}

const vertical = (s: number[]) => Math.abs(s[0] - s[3]) < 1e-9 && Math.abs(s[2] - s[5]) < 1e-9;
const atY = (s: number[], y: number) => Math.abs(s[1] - y) < 1e-6 && Math.abs(s[4] - y) < 1e-6;
const length = (s: number[]) => Math.hypot(s[3] - s[0], s[4] - s[1], s[5] - s[2]);

/** Total area of a triangle soup in the x/z plane. */
function area(g: BufferGeometry): number {
  const p = g.getAttribute("position");
  let sum = 0;
  for (let i = 0; i < p.count; i += 3) {
    const ax = p.getX(i);
    const az = p.getZ(i);
    sum += Math.abs((p.getX(i + 1) - ax) * (p.getZ(i + 2) - az) - (p.getX(i + 2) - ax) * (p.getZ(i + 1) - az)) / 2;
  }
  return sum;
}

test("a single room has corner lines at its four inner and four outer corners", () => {
  const geo = buildFloorGeometry(floorWith([rect("a", 0, 0, 4, 3)]), EXT, INT);
  const segs = segments(geo.lines);
  // lower part of each corner line is always visible
  assert.equal(segs.filter((s) => vertical(s) && s[6] === -1).length, 8);
  // the base outline runs along both faces of the wall ring, without the mitre joints
  assert.equal(segs.filter((s) => atY(s, 0.004)).length, 8);
});

test("a straight outer face across a T-joint gets no corner line", () => {
  const geo = buildFloorGeometry(floorWith([rect("a", 0, 0, 4, 3), rect("b", 4, 0, 7, 3)]), EXT, INT);
  const corners = segments(geo.lines).filter((s) => vertical(s) && s[6] === -1);
  // 4 outer corners + 4 inner corners per room; the interior wall meets the outer walls in T-joints
  assert.equal(corners.length, 12);
  assert.ok(!corners.some((s) => Math.abs(s[0] - 4) < 1e-6 && (Math.abs(s[2] + EXT) < 1e-6 || Math.abs(s[2] - 3 - EXT) < 1e-6)));
});

test("baked wall shadows cover every wall face inside a room and nothing outside", () => {
  const geo = buildFloorGeometry(floorWith([rect("a", 0, 0, 4, 3), rect("b", 4, 0, 7, 3)]), EXT, INT);
  const half = INT / 2;
  const lengthA = 2 * (4 - half) + 3 + 3;
  const lengthB = 2 * (3 - half) + 3 + 3;
  near(area(geo.shadow), (lengthA + lengthB) * 0.42, 1e-4);
});

test("walls are grouped into fold buckets: one per exterior direction plus the interior walls", () => {
  const geo = buildFloorGeometry(floorWith([rect("a", 0, 0, 4, 3), rect("b", 4, 0, 7, 3)]), EXT, INT);
  assert.equal(geo.buckets.filter((b) => b).length, 4);
  assert.equal(geo.buckets.length, 5);
  const segs = segments(geo.lines);
  geo.buckets.forEach((_, b) => {
    // top edges stand with their bucket, cut edges show when it folds
    assert.ok(segs.some((s) => atY(s, 2.5) && s[6] === b));
    assert.ok(segs.some((s) => atY(s, 1.15) && s[6] === 16 + b));
  });
});

test("a door leaves the base line and the wall shadow out of the doorway", () => {
  const plain = buildFloorGeometry(floorWith([rect("a", 0, 0, 4, 3)]), EXT, INT);
  const geo = buildFloorGeometry(floorWith([rect("a", 0, 0, 4, 3)], [opening("door", "a", 0, 2, 0.9)]), EXT, INT);
  const base = (g: BufferGeometry) => segments(g).filter((s) => atY(s, 0.004)).reduce((sum, s) => sum + length(s), 0);
  near(base(plain.lines) - base(geo.lines), 2 * 0.9, 1e-6);
  near(area(plain.shadow) - area(geo.shadow), 0.9 * 0.42, 1e-6);
  const [info] = geo.openings;
  near(info.width, 0.9);
  near(info.start[0], 1.55);
  // the room lies at z > 0 of edge 0
  near(info.toRoom[1], 1);
  near(info.faceRoom, 0);
  near(info.faceOut, EXT);
});

test("the slab under a doorway stays below the floor, so no wall face lies on it (#290)", () => {
  const geo = buildFloorGeometry(floorWith([rect("a", 0, 0, 4, 3), rect("b", 4, 0, 7, 3)], [opening("door", "a", 1, 1.5, 0.9)]), EXT, INT);
  const p = geo.walls.getAttribute("position");
  for (let i = 0; i < p.count; i += 3) {
    const flat = Math.abs(p.getY(i) - p.getY(i + 1)) < 1e-9 && Math.abs(p.getY(i) - p.getY(i + 2)) < 1e-9;
    assert.ok(!(flat && Math.abs(p.getY(i)) < 0.005), `wall face at floor level near ${p.getX(i)}, ${p.getZ(i)}`);
  }
});

test("a window above the cut height keeps the cut line; one across it interrupts it", () => {
  const cutLength = (g: BufferGeometry) => segments(g).filter((s) => atY(s, 1.15) && s[6] >= 16 && !vertical(s)).reduce((sum, s) => sum + length(s), 0);
  const plain = buildFloorGeometry(floorWith([rect("a", 0, 0, 4, 3)]), EXT, INT);
  const win = buildFloorGeometry(floorWith([rect("a", 0, 0, 4, 3)], [opening("window", "a", 0, 2, 1.2)]), EXT, INT);
  // the window (0.9–2.2 m) crosses the cut: both faces lose 1.2 m, the jambs add four short edges across the wall
  near(cutLength(plain.lines) - cutLength(win.lines), 2 * 1.2 - 2 * EXT, 1e-6);
});

test("stairs cut a hole into the floor above", () => {
  const stair: Furniture = { id: "s", type: "stairs", x: 2, z: 1.5, rotation: 0, w: 1, d: 2, h: 2.75, variant: null };
  const lower = floorWith([rect("a", 0, 0, 4, 3)], [], [stair]);
  const upper = { ...floorWith([rect("b", 0, 0, 4, 3)]), id: "u", elevation: 2.75 };
  const holes = stairHoles([lower, upper], upper);
  assert.equal(holes.length, 1);
  const geo = buildFloorGeometry(upper, EXT, INT, holes);
  // the opening is cut 3 mm in from its outline
  near(area(geo.floor), 12 - 0.994 * 1.994, 1e-6);
  assert.deepEqual(stairHoles([lower, upper], lower), []);
});

test("clipping a wall footprint along its axis", () => {
  const poly: [number, number][] = [
    [0, 0],
    [4, 0],
    [4, 0.2],
    [0, 0.2],
  ];
  const piece = clipAlong(poly, [0, 0], [1, 0], 1, 2.5);
  const xs = piece.map((p) => p[0]);
  near(Math.min(...xs), 1);
  near(Math.max(...xs), 2.5);
});

test("a stairwell opening cuts a hole into its own floor; stairs below reaching up do too", () => {
  const upper = floorWith([rect("a", 0, 0, 6, 4)]);
  upper.elevation = 3;
  upper.furniture.push({ id: "w", type: "stairwell", x: 3, z: 2, rotation: 0, w: 1, d: 2, h: 0.02, variant: null });
  const lower = floorWith([rect("b", 0, 0, 6, 4)]);
  lower.furniture.push({ id: "s", type: "stairs", x: 1, z: 2, rotation: 0, w: 1, d: 2.5, h: 3, variant: null });
  const holes = stairHoles([lower, upper], upper);
  assert.equal(holes.length, 2);
  // the floor loses the area of both holes
  const solid = area(buildFloorGeometry(upper, EXT, INT).floor);
  const cut = area(buildFloorGeometry(upper, EXT, INT, holes).floor);
  assert.ok(solid - cut > 4.4 && solid - cut < 4.6, `${solid - cut}`);
});
