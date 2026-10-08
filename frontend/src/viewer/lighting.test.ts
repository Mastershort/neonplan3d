import assert from "node:assert/strict";
import { test } from "node:test";
import type { Floor, Opening, Room } from "../model.ts";
import { newFloor } from "../model.ts";
import { buildFloorGeometry } from "./build.ts";
import { buildLightSurface, lightColors, type LightSource, shadowed, zoneOf } from "./lighting.ts";

function rect(id: string, x0: number, z0: number, x1: number, z1: number): Room {
  return { id, name: id, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material: "wood" };
}

function surfaceOf(floor: Floor, cell = 0.25) {
  const geo = buildFloorGeometry(floor, 0.24, 0.12);
  return buildLightSurface(floor, geo.walls2d, geo.wallBuckets, geo.openings, cell);
}

const lamp = (x: number, z: number, color: [number, number, number], room = 0, extra: Partial<LightSource> = {}): LightSource => ({
  x,
  y: 2.4,
  z,
  color,
  level: 1,
  kind: "ceiling",
  room,
  ...extra,
});

/** Colour of the floor vertex nearest to (x, z). */
function floorAt(s: ReturnType<typeof surfaceOf>, colors: Float32Array, x: number, z: number): number[] {
  let best = -1;
  let bestD = Infinity;
  for (let v = 0; v < s.room.length; v++) {
    if (s.normal[v * 3 + 1] !== 1) continue;
    const d = Math.hypot(s.pos[v * 3] - x, s.pos[v * 3 + 2] - z);
    if (d < bestD) {
      bestD = d;
      best = v;
    }
  }
  return [colors[best * 3], colors[best * 3 + 1], colors[best * 3 + 2]];
}

test("the surface covers room floors and the room side of the walls", () => {
  const floor = { ...newFloor("f", "F", 0), rooms: [rect("a", 0, 0, 4, 3)] };
  const s = surfaceOf(floor);
  const floorQuads = [...Array(s.room.length / 6).keys()].filter((q) => s.normal[q * 18 + 1] === 1).length;
  assert.equal(floorQuads, 16 * 12);
  // four walls, three bands each, 16 or 12 cells long, on the room side and (exterior walls) outside
  assert.equal(s.room.length / 6 - floorQuads, 2 * 3 * 2 * (16 + 12));
});

test("an outdoor lamp lights the lawn and the facade, not the room behind the wall", () => {
  const floor = {
    ...newFloor("f", "F", 0),
    rooms: [rect("a", 0, 0, 4, 3)],
    outdoor: [{ id: "l", type: "lawn" as const, points: [[0, 3.3], [4, 3.3], [4, 6], [0, 6]] as [number, number][] }],
  };
  const s = surfaceOf(floor);
  const outside = floor.rooms.length;
  const c = lightColors(s, [lamp(2, 4, [1, 1, 1], outside, { y: 0.6, kind: "omni" })]);
  let lawn = 0;
  let facade = 0;
  let room = 0;
  for (let v = 0; v < s.room.length; v++) {
    const lit = c[v * 3];
    if (s.room[v] === 0) room = Math.max(room, lit);
    else if (s.normal[v * 3 + 1] === 1) lawn = Math.max(lawn, lit);
    else facade = Math.max(facade, lit);
  }
  assert.ok(lawn > 0.1 && facade > 0.1, `lawn ${lawn}, facade ${facade}`);
  assert.equal(room, 0);
});

test("two RGB ceiling lights mix: red on the left, blue on the right, both in the middle", () => {
  const floor = { ...newFloor("f", "F", 0), rooms: [rect("k", 0, 0, 6, 3)] };
  const s = surfaceOf(floor);
  const colors = lightColors(s, [lamp(1.5, 1.5, [1, 0, 0]), lamp(4.5, 1.5, [0, 0, 1])]);
  const left = floorAt(s, colors, 1.5, 1.5);
  const right = floorAt(s, colors, 4.5, 1.5);
  const mid = floorAt(s, colors, 3, 1.5);
  assert.ok(left[0] > 0.25 && left[0] > left[2] * 3, `left ${left}`);
  assert.ok(right[2] > 0.25 && right[2] > right[0] * 3, `right ${right}`);
  assert.ok(mid[0] > 0.1 && mid[2] > 0.1 && Math.abs(mid[0] - mid[2]) < 0.05, `middle ${mid}`);
  // brightness matters
  const dim = lightColors(s, [lamp(1.5, 1.5, [1, 0, 0], 0, { level: 0.2 })]);
  assert.ok(floorAt(s, dim, 1.5, 1.5)[0] < left[0] / 2);
});

test("light stays in its room unless a door connects the rooms", () => {
  const closed = { ...newFloor("f", "F", 0), rooms: [rect("a", 0, 0, 4, 3), rect("b", 4, 0, 8, 3)] };
  const s1 = surfaceOf(closed);
  const c1 = lightColors(s1, [lamp(3.5, 1.5, [1, 1, 1])]);
  assert.equal(floorAt(s1, c1, 4.5, 1.5)[0], 0);

  const door: Opening = { id: "d", room_id: "a", edge: 1, offset: 1.5, width: 0.9, type: "door", sill: 0, height: 2.05, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null };
  const withDoor = { ...closed, openings: [door] };
  const s2 = surfaceOf(withDoor);
  assert.equal(s2.doors.length, 1);
  const c2 = lightColors(s2, [lamp(3.5, 1.5, [1, 1, 1])]);
  const through = floorAt(s2, c2, 4.4, 1.5)[0];
  assert.ok(through > 0.05, `light through the door ${through}`);
  assert.ok(through < floorAt(s2, c2, 3.5, 1.5)[0]);
  // a closed door lets nothing through
  const c3 = lightColors(s2, [lamp(3.5, 1.5, [1, 1, 1])], 0.7, [0]);
  assert.equal(floorAt(s2, c3, 4.4, 1.5)[0], 0);
});

test("a spot lights a small circle, a ceiling light a wide area", () => {
  const floor = { ...newFloor("f", "F", 0), rooms: [rect("a", 0, 0, 6, 6)] };
  const s = surfaceOf(floor);
  const spot = lightColors(s, [lamp(3, 3, [1, 1, 1], 0, { kind: "spot" })]);
  const wide = lightColors(s, [lamp(3, 3, [1, 1, 1])]);
  const ratio = (c: Float32Array) => floorAt(s, c, 5, 3)[0] / floorAt(s, c, 3, 3)[0];
  assert.ok(ratio(spot) < ratio(wide) / 2);
});

test("wall light leaves out windows", () => {
  const win: Opening = { id: "w", room_id: "a", edge: 0, offset: 2, width: 1.2, type: "window", sill: 0.9, height: 1.3, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null };
  const floor = { ...newFloor("f", "F", 0), rooms: [rect("a", 0, 0, 4, 3)], openings: [win] };
  const s = surfaceOf(floor);
  // centres of the lit cells on the window's wall (edge 0 runs along z = 0)
  const centres: [number, number][] = [];
  for (let q = 0; q < s.pos.length / 18; q++) {
    let x = 0;
    let y = 0;
    let z = 0;
    for (let v = 0; v < 6; v++) {
      x += s.pos[q * 18 + v * 3] / 6;
      y += s.pos[q * 18 + v * 3 + 1] / 6;
      z += s.pos[q * 18 + v * 3 + 2] / 6;
    }
    if (y > 0.05 && Math.abs(z) < 0.2) centres.push([x, y]);
  }
  // the offset is the window's centre: it spans x 1.4–2.6
  const inWindow = (x: number) => x > 1.45 && x < 2.55;
  // the hole matches the window: nothing over the glass, cells right below the sill and above the top
  assert.equal(centres.filter(([x, y]) => inWindow(x) && y > 0.92 && y < 2.18).length, 0);
  assert.ok(centres.some(([x, y]) => inWindow(x) && y > 0.3 && y < 0.88), "cells below the sill");
  assert.ok(centres.some(([x, y]) => inWindow(x) && y > 2.22 && y < floor.height - 0.02), "cells above the top");
  // the columns end at the window's sides: a cell right beside the frame, none across it
  assert.ok(centres.some(([x, y]) => x > 1.2 && x < 1.4 && y > 1 && y < 2), "cell beside the window");
  assert.equal(centres.filter(([x, y]) => x > 1.3 && x < 1.5 && y > 1 && y < 2 && x > 1.4).length, 0);
});

test("joined rooms keep the outside zone for outdoor lamps (#160)", () => {
  assert.equal(zoneOf([0, 0, 2], 1), 0);
  assert.equal(zoneOf([0, 0, 2], 2), 2);
  assert.equal(zoneOf([0, 0, 2], 3), 3);
  assert.equal(zoneOf(null, 3), 3);
  assert.equal(zoneOf([0, 0], -1), -1);
});

test("a free-standing wall in a room casts a shadow; light passes over a low one and through its door (#300)", () => {
  const base = { ...newFloor("f", "F", 0), rooms: [rect("a", 0, 0, 6, 3)] };
  const at = (walls: NonNullable<Floor["walls"]>, openings: Opening[] = []) => {
    const s = surfaceOf({ ...base, walls, openings });
    const c = lightColors(s, [lamp(1.5, 1.5, [1, 1, 1], 0, { y: 1.4, kind: "omni" })]);
    return { near: floorAt(s, c, 2, 1.5)[0], behind: floorAt(s, c, 3.6, 1.5)[0] };
  };
  const open = at([]);
  assert.ok(open.behind > 0.05, `no wall ${open.behind}`);
  const drywall = at([{ id: "w", a: [3, 0], b: [3, 3] }]);
  assert.equal(drywall.behind, 0);
  assert.ok(Math.abs(drywall.near - open.near) < 1e-6, "the lamp's side stays as bright");
  // the light falls past the top of a low wall onto the floor behind it
  assert.ok(at([{ id: "w", a: [3, 0], b: [3, 3], height: 0.3 }]).behind > 0);
  // a passage in the drywall lets the light through
  const passage: Opening = { id: "p", room_id: "a", edge: 0, offset: 1.5, width: 1.2, type: "door", sill: 0, height: 2.05, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null, wall: "w" };
  assert.ok(at([{ id: "w", a: [3, 0], b: [3, 3] }], [passage]).behind > 0.05);
});

test("floor cells end at the room's edge, not in the neighbouring room (#290, #300)", () => {
  const floor = { ...newFloor("f", "F", 0), rooms: [rect("a", 0, 0, 3.9, 3.1), rect("b", 3.9, 0, 7, 3.1)] };
  const s = surfaceOf(floor);
  for (let v = 0; v < s.room.length; v++) {
    if (s.room[v] !== 0 || s.normal[v * 3 + 1] !== 1) continue;
    assert.ok(s.pos[v * 3] <= 3.9 + 1e-6 && s.pos[v * 3 + 2] <= 3.1 + 1e-6, `vertex ${s.pos[v * 3]}, ${s.pos[v * 3 + 2]}`);
  }
});

test("shadowed: a wall between lamp and point, its height and its openings", () => {
  const wall = { a: [2, 0] as [number, number], b: [2, 4] as [number, number], h: 2.5, ra: 0, rb: 0, gaps: [{ s0: 1, s1: 2, y0: 0, y1: 2 }] };
  const s = { x: 0, y: 1.5, z: 3 };
  assert.equal(shadowed(s, [wall], 4, 0, 3), true);
  assert.equal(shadowed(s, [wall], 1.9, 0, 3), false);
  // through the opening (z 1..2 along the wall)
  assert.equal(shadowed({ x: 0, y: 1.5, z: 1.5 }, [wall], 4, 0, 1.5), false);
  // over a low wall
  assert.equal(shadowed(s, [{ ...wall, h: 0.5 }], 4, 0, 3), false);
  // past the wall's end
  assert.equal(shadowed({ x: 0, y: 1.5, z: 5 }, [wall], 4, 0, 5), false);
});
