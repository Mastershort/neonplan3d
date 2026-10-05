import assert from "node:assert/strict";
import { test } from "node:test";
import type { Room, Vec2 } from "../model.ts";
import { polygonArea, signedArea } from "../model.ts";
import { generateWalls, locateOnWalls, locateOpening, openingHost } from "./walls.ts";

const EXT = 0.24;
const INT = 0.12;
const opts = { exterior: EXT, interior: INT };

function rect(id: string, x0: number, z0: number, x1: number, z1: number): Room {
  return { id, name: id, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material: "wood" };
}

const wallArea = (rooms: Room[]) => generateWalls(rooms, opts).walls.reduce((s, w) => s + polygonArea(w.footprint), 0);
const near = (a: number, b: number, eps = 1e-6) => assert.ok(Math.abs(a - b) < eps, `${a} != ${b}`);
const hasPoint = (pts: Vec2[], p: Vec2) => pts.some((q) => Math.abs(q[0] - p[0]) < 1e-6 && Math.abs(q[1] - p[1]) < 1e-6);

test("single room gets four exterior walls with mitred corners", () => {
  const { walls, warnings } = generateWalls([rect("a", 0, 0, 4, 3)], opts);
  assert.equal(walls.length, 4);
  assert.deepEqual(warnings, []);
  for (const w of walls) {
    assert.equal(w.exterior, true);
    assert.equal(w.roomLeft, "a");
    assert.equal(w.left, 0);
    assert.equal(w.right, EXT);
    assert.ok(signedArea(w.footprint) > 0, "footprint is counter-clockwise");
  }
  // the ring around the room: outer rectangle minus room
  near(wallArea([rect("a", 0, 0, 4, 3)]), (4 + 2 * EXT) * (3 + 2 * EXT) - 12);
  const all = walls.flatMap((w) => w.footprint);
  assert.ok(hasPoint(all, [-EXT, -EXT]));
  assert.ok(hasPoint(all, [4 + EXT, 3 + EXT]));
});

test("clockwise rooms give the same walls", () => {
  const cw: Room = { ...rect("a", 0, 0, 4, 3) };
  cw.points = [...cw.points].reverse();
  const a = generateWalls([rect("a", 0, 0, 4, 3)], opts).walls.map((w) => w.id).sort();
  const b = generateWalls([cw], opts).walls.map((w) => w.id).sort();
  assert.deepEqual(a, b);
  near(wallArea([cw]), (4 + 2 * EXT) * (3 + 2 * EXT) - 12);
});

test("two rooms sharing an edge get one interior wall", () => {
  const rooms = [rect("a", 0, 0, 4, 3), rect("b", 4, 0, 10, 3)];
  const { walls } = generateWalls(rooms, opts);
  const inner = walls.filter((w) => !w.exterior);
  assert.equal(inner.length, 1);
  assert.equal(walls.length, 7);
  assert.deepEqual(new Set([inner[0].roomLeft, inner[0].roomRight]), new Set(["a", "b"]));
  near(inner[0].left, INT / 2);
  // exterior ring + interior wall between the exterior faces, without overlaps
  near(wallArea(rooms), (10 + 2 * EXT) * (3 + 2 * EXT) - 30 + 3 * INT);
});

test("partially shared edges and T-junctions are split correctly", () => {
  const rooms = [rect("a", 0, 0, 6, 4), rect("b", 0, 4, 4, 7), rect("c", 4, 4, 10, 7)];
  const { walls } = generateWalls(rooms, opts);
  const inner = walls.filter((w) => !w.exterior);
  const length = (w: { a: Vec2; b: Vec2 }) => Math.hypot(w.b[0] - w.a[0], w.b[1] - w.a[1]);
  assert.equal(inner.length, 3);
  near(inner.reduce((s, w) => s + length(w), 0), 4 + 2 + 3);
  const ac = inner.find((w) => new Set([w.roomLeft, w.roomRight]).has("a") && new Set([w.roomLeft, w.roomRight]).has("c"));
  assert.ok(ac);
  near(length(ac), 2);
  // the exterior part of c's top edge (6..10) stays exterior
  const topC = walls.find((w) => w.exterior && w.roomLeft === "c" && Math.abs(w.a[1] - 4) < 1e-9 && Math.abs(w.b[1] - 4) < 1e-9);
  assert.ok(topC);
  near(length(topC), 4);
});

test("interior T-junction tiles without gaps or overlaps", () => {
  // three rooms: a on top, b and c below; the wall b|c meets the wall a|(b,c) in a T
  const rooms = [rect("a", 0, 0, 8, 4), rect("b", 0, 4, 3, 8), rect("c", 3, 4, 8, 8)];
  const expected = (8 + 2 * EXT) * (8 + 2 * EXT) - 64 + 8 * INT + (4 - INT / 2) * INT;
  near(wallArea(rooms), expected);
});

test("vertices a few millimetres apart are merged", () => {
  const rooms = [rect("a", 0, 0, 4, 3), rect("b", 4.003, 0, 8, 3.002)];
  const { walls } = generateWalls(rooms, opts);
  assert.equal(walls.filter((w) => !w.exterior).length, 1);
});

test("collinear pieces of the same room are merged into one wall", () => {
  const room: Room = { ...rect("a", 0, 0, 4, 3), points: [[0, 0], [2, 0], [4, 0], [4, 3], [0, 3]] };
  const { walls } = generateWalls([room], opts);
  assert.equal(walls.length, 4);
  const top = walls.find((w) => Math.abs(w.a[1]) < 1e-9 && Math.abs(w.b[1]) < 1e-9)!;
  assert.equal(top.sources.length, 2);
});

test("L-shaped room gets a mitred reflex corner", () => {
  const room: Room = { ...rect("a", 0, 0, 1, 1), points: [[0, 0], [6, 0], [6, 3], [3, 3], [3, 6], [0, 6]] };
  const { walls } = generateWalls([room], opts);
  assert.equal(walls.length, 6);
  const all = walls.flatMap((w) => w.footprint);
  assert.ok(hasPoint(all, [3 + EXT, 3 + EXT]), "outer corner at the reflex vertex");
  // outer area minus room area
  const outer: Vec2[] = [[-EXT, -EXT], [6 + EXT, -EXT], [6 + EXT, 3 + EXT], [3 + EXT, 3 + EXT], [3 + EXT, 6 + EXT], [-EXT, 6 + EXT]];
  near(wallArea([room]), polygonArea(outer) - polygonArea(room.points));
});

test("overlapping rooms are reported", () => {
  const { warnings } = generateWalls([rect("a", 0, 0, 4, 3), rect("b", 0, 0, 4, 3)], opts);
  assert.ok(warnings.length > 0);
});

test("degenerate rooms are ignored", () => {
  const flat: Room = { ...rect("a", 0, 0, 1, 1), points: [[0, 0], [1, 0], [2, 0]] };
  assert.equal(generateWalls([flat], opts).walls.length, 0);
});

test("positions on room edges are located on the walls", () => {
  const rooms = [rect("a", 0, 0, 4, 3), rect("b", 4, 0, 10, 3)];
  const { walls } = generateWalls(rooms, opts);
  // b's left edge is edge 3 ([4,3] -> [4,0]); 1 m from its start is (4, 2)
  const hit = locateOnWalls(walls, rooms[1], 3, 1)!;
  assert.ok(hit);
  assert.equal(hit.wall.exterior, false);
  const p: Vec2 = [hit.wall.a[0] + ((hit.wall.b[0] - hit.wall.a[0]) / 3) * hit.s, hit.wall.a[1] + ((hit.wall.b[1] - hit.wall.a[1]) / 3) * hit.s];
  near(p[0], 4);
  near(p[1], 2);
});

test("a free-standing wall becomes an interior wall of its room and splits the room edge it touches", () => {
  const room = { id: "r", name: "R", area_id: null, points: [[0, 0], [6, 0], [6, 4], [0, 4]] as [number, number][], floor_material: "wood" };
  const free = [{ id: "fw", a: [3, 0] as [number, number], b: [3, 2.5] as [number, number], thickness: 0.1 }];
  const { walls } = generateWalls([room], { exterior: 0.24, interior: 0.12 }, free);
  const fw = walls.find((w) => w.free === "fw")!;
  assert.ok(fw, "free wall generated");
  assert.equal(fw.exterior, false);
  assert.equal(fw.roomLeft, "r");
  assert.equal(fw.roomRight, "r");
  assert.equal(fw.left + fw.right, 0.1);
  // the outer wall along z = 0 is split at x = 3 into two pieces
  const top = walls.filter((w) => !w.free && Math.abs(w.a[1]) < 1e-9 && Math.abs(w.b[1]) < 1e-9);
  assert.equal(top.length, 2);
  // too short walls are ignored
  assert.equal(generateWalls([room], { exterior: 0.24, interior: 0.12 }, [{ id: "x", a: [1, 1], b: [1, 1.01] }]).walls.some((w) => w.free), false);
});

test("walls take their own height: from the room edge (the lower one when shared) or from a free wall", () => {
  const a = { id: "a", name: "A", area_id: null, points: [[0, 0], [4, 0], [4, 3], [0, 3]] as [number, number][], floor_material: "wood", wall_heights: [null, 1.1, null, null] };
  const b = { id: "b", name: "B", area_id: null, points: [[4, 0], [7, 0], [7, 3], [4, 3]] as [number, number][], floor_material: "wood", wall_heights: [null, null, null, 0.9] };
  const free = [{ id: "fw", a: [1, 1] as [number, number], b: [1, 2.5] as [number, number], height: 1.0 }];
  const { walls } = generateWalls([a, b], { exterior: 0.24, interior: 0.12 }, free);
  // the shared wall at x = 4: room a says 1.1, room b says 0.9 -> 0.9
  const shared = walls.find((w) => !w.exterior && !w.free)!;
  assert.equal(shared.height, 0.9);
  assert.equal(walls.find((w) => w.free === "fw")!.height, 1.0);
  // every other wall stands at full height
  assert.ok(walls.filter((w) => w.exterior).every((w) => w.height === undefined));
});

test("an opening in a free wall is located on that wall, with its room side on the left", () => {
  const rooms = [rect("a", 0, 0, 6, 4)];
  const free = [{ id: "fw", a: [3, 0] as Vec2, b: [3, 3] as Vec2 }];
  const { walls } = generateWalls(rooms, opts, free);
  const o = { room_id: "a", edge: 0, offset: 1.5, wall: "fw" };
  const host = openingHost(o, rooms, free);
  assert.ok(host);
  const hit = locateOpening(walls, o, host);
  assert.ok(hit);
  assert.equal(hit.wall.free, "fw");
  near(hit.s, 1.5);
  // a deleted free wall drops its openings
  assert.equal(openingHost(o, rooms, []), null);
  // room edge openings work as before
  const edgeHost = openingHost({ room_id: "a", edge: 0 }, rooms, free);
  assert.ok(edgeHost && locateOpening(walls, { offset: 1 }, edgeHost));
});

test("a wall height of 0 leaves the wall out: two rooms share one open space", () => {
  const room = (id: string, x0: number, x1: number, wall_heights?: (number | null)[]) => ({ id, name: id, area_id: null, points: [[x0, 0], [x1, 0], [x1, 3], [x0, 3]] as [number, number][], floor_material: "wood", wall_heights });
  const closed = generateWalls([room("a", 0, 4), room("b", 4, 8)], { exterior: 0.24, interior: 0.12 }).walls;
  assert.ok(closed.some((w) => !w.exterior && w.roomLeft && w.roomRight), "the shared wall is there");
  // edge 1 of room a runs from (4,0) to (4,3): the shared one
  const open = generateWalls([room("a", 0, 4, [null, 0, null, null]), room("b", 4, 8)], { exterior: 0.24, interior: 0.12 }).walls;
  assert.ok(!open.some((w) => !w.exterior && w.roomLeft && w.roomRight), "no shared wall");
  assert.equal(open.filter((w) => w.exterior).length, closed.filter((w) => w.exterior).length);
});

test("a split edge can carry one height per part; rooms joined by no wall are reported as open", () => {
  const room = (id: string, x0: number, z0: number, x1: number, z1: number, wall_heights?: (number | null | (number | null)[])[]) => ({ id, name: id, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]] as [number, number][], floor_material: "wood", wall_heights });
  // room a's edge 1 (x = 4, z 0..6) is split by rooms b (z 0..3) and c (z 3..6): the lower part a parapet
  const a = room("a", 0, 0, 4, 6, [null, [1.0, null], null, null]);
  const res = generateWalls([a, room("b", 4, 0, 8, 3), room("c", 4, 3, 8, 6)], { exterior: 0.24, interior: 0.12 });
  const shared = res.walls.filter((w) => !w.exterior && w.roomLeft && w.roomRight);
  assert.equal(shared.length, 3, "a-b, a-c and b-c");
  const ab = shared.find((w) => [w.roomLeft, w.roomRight].includes("b") && [w.roomLeft, w.roomRight].includes("a"))!;
  const ac = shared.find((w) => [w.roomLeft, w.roomRight].includes("c") && [w.roomLeft, w.roomRight].includes("a"))!;
  assert.equal(ab.height, 1.0);
  assert.equal(ac.height, undefined);
  assert.deepEqual(res.open, []);
  // no wall between a and c: reported as open, the a-b wall stays
  const open = generateWalls([room("a", 0, 0, 4, 6, [null, [null, 0], null, null]), room("b", 4, 0, 8, 3), room("c", 4, 3, 8, 6)], { exterior: 0.24, interior: 0.12 });
  assert.deepEqual(open.open, [["a", "c"]]);
  assert.ok(open.walls.some((w) => !w.exterior && [w.roomLeft, w.roomRight].includes("b") && [w.roomLeft, w.roomRight].includes("a")));
});

test("a split point cuts a wall into parts that keep apart, each with its own height", () => {
  const room = (id: string, x0: number, z0: number, x1: number, z1: number, extra: Partial<Room> = {}): Room => ({ id, name: id, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material: "wood", ...extra });
  // edge 0 of the room runs from (0,0) to (6,0): split at 2 m, the first part 1.7 m high, the rest full height
  const split = generateWalls([room("a", 0, 0, 6, 4, { wall_splits: [[2], null, null, null], wall_heights: [[1.7, null], null, null, null] })], { exterior: 0.24, interior: 0.12 }).walls;
  const along = split.filter((w) => Math.abs(w.a[1]) < 1e-6 && Math.abs(w.b[1]) < 1e-6).sort((p, q) => Math.min(p.a[0], p.b[0]) - Math.min(q.a[0], q.b[0]));
  assert.equal(along.length, 2, "two walls in line");
  assert.equal(along[0].height, 1.7);
  assert.equal(along[1].height, undefined);
  assert.ok(Math.abs(Math.max(along[0].a[0], along[0].b[0]) - 2) < 1e-6, "cut at 2 m");
  // the same heights on both parts: the split still keeps them apart (so a height can be set later)
  const same = generateWalls([room("a", 0, 0, 6, 4, { wall_splits: [[2], null, null, null] })], { exterior: 0.24, interior: 0.12 }).walls;
  assert.equal(same.filter((w) => Math.abs(w.a[1]) < 1e-6 && Math.abs(w.b[1]) < 1e-6).length, 2);
  // without the split the edge is one wall
  const plain = generateWalls([room("a", 0, 0, 6, 4)], { exterior: 0.24, interior: 0.12 }).walls;
  assert.equal(plain.filter((w) => Math.abs(w.a[1]) < 1e-6 && Math.abs(w.b[1]) < 1e-6).length, 1);
});

test("a wall takes the thickness set on its room edge; a shared wall the thicker one (D149)", () => {
  const a = { ...rect("a", 0, 0, 4, 3), wall_thickness: [0.365, null, 0.08, null] };
  const b = { ...rect("b", 4, 0, 7, 3), wall_thickness: [null, null, null, 0.175] };
  const { walls, warnings } = generateWalls([a, b], opts);
  assert.deepEqual(warnings, []);
  // edge 0 of a (z = 0, x 0 … 4): an outer wall of 36.5 cm
  const south = walls.find((w) => w.exterior && w.sources.some((s) => s.room_id === "a" && s.edge === 0))!;
  near(south.right, 0.365);
  // the shared wall (a's edge 1, b's edge 3): 17.5 cm, centred
  const shared = walls.find((w) => !w.exterior)!;
  near(shared.left + shared.right, 0.175);
  near(shared.left, shared.right);
  // a's edge 2 (z = 3): its own thin setting; b's outer walls keep the building's
  const north = walls.find((w) => w.exterior && w.sources.some((s) => s.room_id === "a" && s.edge === 2))!;
  near(north.right, 0.08);
  for (const w of walls.filter((w) => w.exterior && w.sources.every((s) => s.room_id === "b"))) near(w.right, EXT);
});
