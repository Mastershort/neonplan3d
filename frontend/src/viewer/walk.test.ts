import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Room, type Vec2 } from "../model.ts";
import { FloorMap, type Obstacle } from "./walk.ts";
import { petMap } from "../fun/pets.ts";

function rect(id: string, x0: number, z0: number, x1: number, z1: number): Room {
  return { id, name: id, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material: "wood" };
}

const floor = { ...newFloor("f", "EG", 0), rooms: [rect("r", 0, 0, 8, 5)] };
const building = { ...emptyBuilding(), floors: [floor] };
// a sofa across the middle of the room
const sofa: Obstacle = { c: [4, 2.5], u: [0, 1], hw: 1.2, hd: 0.45 };

/** Points along the way, every 5 cm. */
function along(start: Vec2, way: Vec2[]): Vec2[] {
  const out: Vec2[] = [];
  let p = start;
  for (const q of way) {
    const n = Math.max(1, Math.ceil(Math.hypot(q[0] - p[0], q[1] - p[1]) / 0.05));
    for (let i = 1; i <= n; i++) out.push([p[0] + ((q[0] - p[0]) * i) / n, p[1] + ((q[1] - p[1]) * i) / n]);
    p = q;
  }
  return out;
}

test("pets walk around furniture; a walk through the house (no obstacles) goes straight", () => {
  const start: Vec2 = [1, 2.5];
  const goal: Vec2 = [7, 2.5];
  const person = new FloorMap(building, floor);
  assert.deepEqual(person.path(start, goal), [goal]);
  const pet = new FloorMap(building, floor, [sofa]);
  const way = pet.path(start, goal);
  assert.ok(way && way.length > 1, "a detour");
  for (const p of along(start, way!)) assert.equal(pet.obstacleAt(p, 0), null, `${p} lies in the sofa`);
});

test("a place on the furniture is reached with a last hop, and left with a first one", () => {
  const pet = new FloorMap(building, floor, [sofa]);
  const onSofa: Vec2 = [4, 2.5];
  const there = pet.path([1, 1], onSofa);
  assert.ok(there && there.at(-1)![0] === 4 && there.at(-1)![1] === 2.5);
  const back = pet.path(onSofa, [7, 4]);
  assert.ok(back && back.length >= 2);
  assert.equal(pet.obstacleAt(back[0], 0), null, "first hop down to the floor");
});

test("an outer door upstairs leads nowhere unless a balcony is drawn behind it; downstairs it leads into the garden (#766)", () => {
  const french = { id: "fd", room_id: "r", edge: 0, offset: 4, width: 1.2, type: "window" as const, sill: 0, height: 2.2, hinge: "left" as const, leaves: 2 as const, swing: "in" as const, cover: null, contact: null, contact2: null, tilt: null };
  const up = { ...newFloor("og", "OG", 2.8), rooms: [rect("r", 0, 0, 8, 5)], openings: [french] };
  assert.equal(new FloorMap({ ...emptyBuilding(), floors: [up] }, up).doors.length, 0);
  // the room's edge 0 runs along z = 0: a balcony in front of it (z < 0)
  const withBalcony = { ...up, outdoor: [{ id: "b", type: "terrace", points: [[2, -2], [6, -2], [6, 0], [2, 0]] }] } as typeof up;
  assert.equal(new FloorMap({ ...emptyBuilding(), floors: [withBalcony] }, withBalcony).doors.length, 1);
  const down = { ...up, elevation: 0 };
  assert.equal(new FloorMap({ ...emptyBuilding(), floors: [down] }, down).doors.length, 1);
});

test("pets stay indoors: only doors between two rooms are ways, never round the outside of the house (#1047)", () => {
  const door = (id: string, room: string, edge: number, offset: number, type: "door" | "garage" | "window" = "door") => ({ id, room_id: room, edge, offset, width: 0.9, type, sill: 0, height: 2.1, hinge: "left" as const, leaves: 1 as const, swing: "in" as const, cover: null, contact: null, contact2: null, tilt: null });
  // two rooms side by side, each with a door to the outside (edge 0 runs along z = 0), the right one a garage door
  const rooms = [rect("a", 0, 0, 4, 5), rect("b", 4, 0, 8, 5)];
  const outside = [door("front", "a", 0, 2), door("gate", "b", 0, 2, "garage"), door("french", "b", 2, 2, "window")];
  const apart = { ...newFloor("f", "EG", 0), rooms, openings: outside };
  const plan = { ...emptyBuilding(), floors: [apart] };
  const from: Vec2 = [1, 3];
  const to: Vec2 = [7, 3];
  // a person walking through the house may take the way round the outside
  assert.ok(new FloorMap(plan, apart).path(from, to));
  // a pet does not: without a door between the rooms it stays in its room
  assert.equal(petMap(FloorMap, plan, apart, new Set(), []).path(from, to), null);
  // with a door between the rooms (edge 1 of room a runs along x = 4) it takes that one
  const joined = { ...apart, openings: [...outside, door("inner", "a", 1, 2.5)] };
  const way = petMap(FloorMap, { ...plan, floors: [joined] }, joined, new Set(), []).path(from, to);
  assert.ok(way && way.every((p) => p[1] > 0.3 && p[1] < 4.7), "through the house");
  // and not while that door is reported shut
  assert.equal(petMap(FloorMap, { ...plan, floors: [joined] }, joined, new Set(["inner"]), []).path(from, to), null);
});

test("upstairs, a door between rooms drawn a wall's width apart is a way, not a door into the air (#970)", () => {
  const door = { id: "d", room_id: "a", edge: 1, offset: 2.5, width: 0.8, type: "door" as const, sill: 0, height: 2.1, hinge: "left" as const, leaves: 1 as const, swing: "in" as const, cover: null, contact: null, contact2: null, tilt: null };
  // two rooms with a 12 cm gap between them: the wall there is room a's "outer" wall, room b has none on that side
  const up = { ...newFloor("og", "OG", 2.75), rooms: [rect("a", 0, 0, 4, 5), { ...rect("b", 4.12, 0, 8, 5), wall_heights: [null, null, null, 0] }], openings: [door] };
  const map = new FloorMap({ ...emptyBuilding(), floors: [up] }, up);
  assert.equal(map.doors.length, 1);
  assert.ok(map.path([1, 2.5], [7, 2.5]), "from room to room");
  // the same door with nothing behind it still leads nowhere
  const alone = { ...up, rooms: [rect("a", 0, 0, 4, 5)] };
  assert.equal(new FloorMap({ ...emptyBuilding(), floors: [alone] }, alone).doors.length, 0);
});
