import assert from "node:assert/strict";
import { test } from "node:test";
import type { BufferGeometry } from "three";
import type { Floor, Furniture, Opening, Room } from "../model.ts";
import { newFloor } from "../model.ts";
import { buildFloorGeometry, clipAlong, stairHoles, stairHoleParts } from "./build.ts";

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

test("a U-stair reaching the floor above cuts its opening there, like the straight stair", () => {
  const stair: Furniture = { id: "u", type: "stairs_u", x: 2, z: 1.5, rotation: 0, w: 2.1, d: 2.7, h: 2.75, variant: null };
  const lower = floorWith([rect("a", 0, 0, 5, 4)], [], [stair]);
  const upper = { ...floorWith([rect("b", 0, 0, 5, 4)]), id: "u", elevation: 2.75 };
  const holes = stairHoles([lower, upper], upper);
  assert.equal(holes.length, 1);
  near(Math.abs(area2(holes[0])), 2.1 * 2.7, 1e-6);
  // a U-stair that ends well below the next floor (a split level) cuts nothing
  const short = floorWith([rect("a", 0, 0, 5, 4)], [], [{ ...stair, h: 1.4 }]);
  assert.deepEqual(stairHoles([short, upper], upper), []);
});

function area2(poly: [number, number][]): number {
  let a = 0;
  for (let i = 0; i < poly.length; i++) {
    const p = poly[i];
    const q = poly[(i + 1) % poly.length];
    a += p[0] * q[1] - q[0] * p[1];
  }
  return a / 2;
}

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

test("a stairwell joined with the stairs' own hole is cut even where the two reach past the room (#375)", () => {
  // two rooms upstairs; the stairwell lies in the first, the tall stairs below reach a little into the second
  const upper = floorWith([rect("a", 0, 0, 6, 4.5), rect("b", 0, 4.5, 6, 8)]);
  upper.elevation = 2.75;
  upper.furniture.push({ id: "w", type: "stairwell", x: 3, z: 3.65, rotation: 0, w: 2, d: 1, h: 0.005, variant: null });
  const lower = floorWith([rect("c", 0, 0, 6, 8)]);
  lower.furniture.push({ id: "s", type: "stairs", x: 3, z: 4.2, rotation: 0, w: 2, d: 1.95, h: 3.5, variant: null });
  const solid = area(buildFloorGeometry(upper, EXT, INT).floor);
  const cut = area(buildFloorGeometry(upper, EXT, INT, stairHoleParts([lower, upper], upper)).floor);
  // the union of both openings: x 2–4, z 3.15–5.175 (2 × 2.025 m), minus the 3 mm inset
  assert.ok(solid - cut > 3.9 && solid - cut < 4.06, `${solid - cut}`);
});

test("a sloping wall: its top runs from the height at its start to the one at its end (D569)", () => {
  // edge 0 of the room runs from (0,0) to (4,0): 1.0 m high at the start, 2.5 m at the end
  const room = { ...rect("r", 0, 0, 4, 3), wall_slopes: [[1.0, 2.5] as [number, number], null, null, null] };
  const floor = { ...floorWith([room]), height: 2.5 };
  const pos = buildFloorGeometry(floor, EXT, INT).walls.getAttribute("position");
  // the highest point of the wall's solid near each end of the edge (z < 0.05: the wall on edge 0)
  const top = (x0: number, x1: number) => {
    let hi = -Infinity;
    for (let i = 0; i < pos.count; i++) if (pos.getZ(i) < 0.05 && pos.getZ(i) > -0.5 && pos.getX(i) >= x0 && pos.getX(i) <= x1) hi = Math.max(hi, pos.getY(i));
    return hi;
  };
  assert.ok(top(0.05, 0.4) < 1.2, `start ${top(0.05, 0.4)}`);
  assert.ok(top(3.6, 3.95) > 2.2, `end ${top(3.6, 3.95)}`);
  // a window near the low end stays below the top
  const win = { ...opening("window", "r", 0, 0.8, 0.6), sill: 0.3, height: 1.5 };
  const geo = buildFloorGeometry({ ...floor, openings: [win] }, EXT, INT);
  // centred 0.8 m along the wall it starts at 0.5 m, where the top is 1.0 + 1.5 × 0.5 / 4 ≈ 1.19 m: it ends just below
  const info = geo.openings.find((o) => o.opening.id === win.id);
  assert.ok(info && info.top < 1.19 && info.top > 1.1, `window top ${info?.top}`);
});

test("a sloping wall crossing the cut height keeps its full face: no notch where it crosses (#821)", () => {
  // 1.45 m down to 0.05 m over 4 m, the cut at 1.1 m: the slope crosses it 1 m from the start
  const room = { ...rect("r", 0, 0, 4, 3), wall_slopes: [[1.45, 0.05] as [number, number], null, null, null] };
  const floor = { ...floorWith([room]), height: 2.5, cut_height: 1.1 };
  const pos = buildFloorGeometry(floor, EXT, INT).walls.getAttribute("position");
  // the triangles of the wall's outer face (in the plane z = -EXT), seen from the front
  const tris: number[][] = [];
  for (let i = 0; i < pos.count; i += 3) {
    if ([0, 1, 2].some((k) => Math.abs(pos.getZ(i + k) + EXT) > 1e-6)) continue;
    tris.push([0, 1, 2].flatMap((k) => [pos.getX(i + k), pos.getY(i + k)]));
  }
  const inside = (x: number, y: number) =>
    tris.some(([ax, ay, bx, by, cx, cy]) => {
      const d1 = (x - bx) * (ay - by) - (ax - bx) * (y - by);
      const d2 = (x - cx) * (by - cy) - (bx - cx) * (y - cy);
      const d3 = (x - ax) * (cy - ay) - (cx - ax) * (y - ay);
      return !((d1 < 0 || d2 < 0 || d3 < 0) && (d1 > 0 || d2 > 0 || d3 > 0));
    });
  for (let x = 0.1; x < 3.9; x += 0.01) {
    const top = 1.45 + (0.05 - 1.45) * (x / 4);
    // just below the slope the face is there, just above it nothing
    assert.ok(inside(x, top - 0.005), `no face below the slope at x ${x.toFixed(2)}`);
    assert.ok(!inside(x, top + 0.005), `face above the slope at x ${x.toFixed(2)}`);
  }
});

test("where a tall wall meets a lower one, its top edge runs across the joint and comes down to the lower top (#417)", () => {
  // two rooms in a row, the right one with low walls (1.2 m) on its three free sides
  const low = { ...rect("b", 4, 0, 7, 3), wall_heights: [1.2, 1.2, 1.2, null] };
  const geo = buildFloorGeometry(floorWith([rect("a", 0, 0, 4, 3), low]), EXT, INT);
  const segs = segments(geo.lines);
  const H = newFloor("f", "Floor", 0).height;
  // the tall wall's free end above the outer joint at x = 4: a top edge across the wall thickness …
  const across = segs.filter((s) => atY(s, H) && Math.abs(s[0] - 4) < 1e-6 && Math.abs(s[3] - 4) < 1e-6 && Math.abs(Math.min(s[2], s[5]) + EXT) < 1e-6);
  assert.ok(across.length >= 1, "top edge across the joint");
  // … and a vertical edge from the low wall's top up to the tall wall's top on the outer face
  const step = segs.filter((s) => vertical(s) && Math.abs(s[0] - 4) < 1e-6 && Math.abs(s[2] + EXT) < 1e-6 && Math.min(s[1], s[4]) > 0.5);
  near(Math.max(...step.map((s) => Math.max(s[1], s[4]))), H);
  near(Math.min(...step.map((s) => Math.min(s[1], s[4]))), 1.2);
  // equal heights keep no extra lines at a joint
  const flat = segments(buildFloorGeometry(floorWith([rect("a", 0, 0, 4, 3), rect("b", 4, 0, 7, 3)]), EXT, INT).lines);
  assert.equal(flat.filter((s) => vertical(s) && Math.abs(s[0] - 4) < 1e-6 && Math.abs(s[2] + EXT) < 1e-6).length, 0);
});

test("a window across a transition without a wall cuts both outer walls, framed only at its own ends (#624)", () => {
  const cutLength = (g: BufferGeometry) => segments(g).filter((s) => atY(s, 1.15) && s[6] >= 16 && !vertical(s)).reduce((sum, s) => sum + length(s), 0);
  const a = rect("a", 0, 0, 4, 3);
  const b = { ...rect("b", 4, 0, 7, 3), wall_heights: [null, null, null, 0] };
  const plain = buildFloorGeometry(floorWith([a, b]), EXT, INT);
  // 1.2 m wide, centred 0.2 m before the transition at x = 4: 0.4 m of it lies in b's wall
  const win = buildFloorGeometry(floorWith([a, b], [opening("window", "a", 0, 3.8, 1.2)]), EXT, INT);
  near(cutLength(plain.lines) - cutLength(win.lines), 2 * 1.2 - 2 * EXT, 1e-6);
  // no jamb lines at the transition
  const segs = segments(win.lines);
  assert.ok(!segs.some((s) => vertical(s) && Math.abs(s[0] - 4) < 1e-6 && s[1] > 0.5 && s[4] > 0.5));
  // its far jambs stand in b's wall, 0.4 m past the transition
  const jambs = segs.filter((s) => vertical(s) && s[1] > 0.8 && s[4] > 0.8 && s[0] > 2 && s[0] < 6);
  near(Math.max(...jambs.map((s) => s[0])), 4.4, 1e-5);
  near(Math.min(...jambs.map((s) => s[0])), 3.2, 1e-5);
});
