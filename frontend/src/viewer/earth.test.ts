import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, groundLevel, newFloor, setTerrain, terrainAt, type Building, type Opening, type Room } from "../model.ts";
import { buildFloorGeometry } from "./build.ts";
import { buildEarth, inGround } from "./earth.ts";

const rect = (id: string, x1: number, z1: number): Room => ({ id, name: id, area_id: null, points: [[0, 0], [x1, 0], [x1, z1], [0, z1]], floor_material: "wood" });

function house(terrain?: Building["settings"]["terrain"]): Building {
  const b = emptyBuilding();
  b.floors = [{ ...newFloor("ug", "UG", -2.6), height: 2.4, rooms: [rect("k", 10, 8)] }, { ...newFloor("eg", "EG", 0), rooms: [rect("a", 10, 8)] }];
  b.settings = { ...b.settings, wall_exterior: 0.3, wall_interior: 0.12, terrain };
  setTerrain(b);
  return b;
}

const earthOf = (b: Building, i: number) => {
  const f = b.floors[i];
  const geo = buildFloorGeometry(f, b.settings.wall_exterior, b.settings.wall_interior);
  return buildEarth(b, f, geo.openings);
};

test("without a ground of its own the plan keeps its lawn 0.2 m under the ground floor", () => {
  const b = house();
  assert.equal(terrainAt(3, 3), -0.2);
  assert.equal(groundLevel(b.floors[1]), -0.2);
  // a garden drawn on the cellar floor stays where it was
  assert.equal(groundLevel(b.floors[0]), -0.2);
});

test("a cellar sits in the earth, the ground floor above it does not", () => {
  const b = house();
  assert.ok(inGround(b, b.floors[0]));
  assert.ok(!inGround(b, b.floors[1]));
  assert.ok(earthOf(b, 0)!.earth.count > 0);
  assert.equal(earthOf(b, 1), null);
  // switched off: no earth at all
  const off = house({ earth: false });
  assert.equal(earthOf(off, 0), null);
});

test("a cellar window below the ground gets a light well, one above the ground does not", () => {
  const win = (sill: number): Opening => ({ id: "w", room_id: "k", edge: 0, offset: 5, width: 1, type: "window", sill, height: 0.5, hinge: "left", leaves: 1, swing: "in", contact2: null }) as Opening;
  const b = house();
  b.floors[0].openings = [win(1.65)];
  assert.ok(earthOf(b, 0)!.wells.count > 0);
  // a semi-basement: the ground 1.2 m under the ground floor, the window's sill (−0.95 m) above it
  const half = house({ level: -1.2 });
  half.floors[0].openings = [win(1.65)];
  assert.equal(earthOf(half, 0)!.wells.count, 0);
});

test("a window can do without its light well, and its rim can stand above the ground (#524)", () => {
  const win = (extra: Partial<Opening>): Opening => ({ id: "w", room_id: "k", edge: 0, offset: 5, width: 1, type: "window", sill: 1.65, height: 0.5, hinge: "left", leaves: 1, swing: "in", contact2: null, ...extra }) as Opening;
  const b = house();
  b.floors[0].openings = [win({ well: false })];
  assert.equal(earthOf(b, 0)!.wells.count, 0);
  // a raised rim: the grate lies higher than with a rim level with the ground
  const top = (g: NonNullable<ReturnType<typeof earthOf>>) => Math.max(...g.lines.p.filter((_, i) => i % 3 === 1));
  b.floors[0].openings = [win({})];
  const level = top(earthOf(b, 0)!);
  b.floors[0].openings = [win({ well_rim: 0.1 })];
  assert.ok(Math.abs(top(earthOf(b, 0)!) - level - 0.1) < 1e-6);
});

test("a light well under a lawn or a terrace drawn up to the house shows its rim above that surface (#524)", () => {
  const win = { id: "w", room_id: "k", edge: 0, offset: 5, width: 1, type: "window", sill: 1.65, height: 0.5, hinge: "left", leaves: 1, swing: "in", contact2: null } as Opening;
  const top = (g: NonNullable<ReturnType<typeof earthOf>>) => Math.max(...g.lines.p.filter((_, i) => i % 3 === 1));
  const b = house();
  b.floors[0].openings = [win];
  const bare = top(earthOf(b, 0)!);
  // the garden on the ground floor, all round the house
  const area = (type: "lawn" | "terrace") => ({ id: "g", type, points: [[-5, -5], [15, -5], [15, 13], [-5, 13]] }) as never;
  b.floors[1].outdoor = [area("lawn")];
  assert.ok(Math.abs(top(earthOf(b, 0)!) - bare - (0.012 + 0.02)) < 1e-6);
  b.floors[1].outdoor = [area("terrace")];
  assert.ok(Math.abs(top(earthOf(b, 0)!) - bare - (0.12 + 0.02)) < 1e-6);
  // a rim set higher by hand stays
  b.floors[0].openings = [{ ...win, well_rim: 0.3 }];
  assert.ok(Math.abs(top(earthOf(b, 0)!) - bare - 0.3) < 1e-6);
});

test("a raised house (the ground lower, no cellar) stands on a plinth; on a flat plot it gets none", () => {
  const flat = house();
  flat.floors = [flat.floors[1]];
  setTerrain(flat);
  const eg = (b: Building) => {
    const f = b.floors[0];
    return buildEarth(b, f, buildFloorGeometry(f, b.settings.wall_exterior, b.settings.wall_interior).openings, true);
  };
  assert.equal(eg(flat), null);
  const hill = house({ level: -1.0 });
  hill.floors = [hill.floors[1]];
  setTerrain(hill);
  assert.ok(eg(hill)!.earth.count > 0);
});

test("a balcony on the floor above does not lift a light well below it (#602)", () => {
  const win = { id: "w", room_id: "k", edge: 0, offset: 5, width: 1, type: "window", sill: 1.65, height: 0.5, hinge: "left", leaves: 1, swing: "in", contact2: null } as Opening;
  const top = (g: NonNullable<ReturnType<typeof earthOf>>) => Math.max(...g.lines.p.filter((_, i) => i % 3 === 1));
  const b = house();
  b.floors[0].openings = [win];
  const bare = top(earthOf(b, 0)!);
  // a first floor with a balcony reaching the wall over the well
  b.floors.push({ ...newFloor("og", "OG", 2.66), rooms: [rect("o", 10, 8)], outdoor: [{ id: "bal", type: "balcony", points: [[3, -1.5], [7, -1.5], [7, 0], [3, 0]] } as never] });
  setTerrain(b);
  assert.ok(Math.abs(top(earthOf(b, 0)!) - bare) < 1e-6);
});

test("a cellar window in a thicker wall of its own still gets its light well, in front of that wall (#843)", () => {
  const win: Opening = { id: "w", room_id: "k", edge: 0, offset: 5, width: 1, type: "window", sill: 1.65, height: 0.5, hinge: "left", leaves: 1, swing: "in", contact2: null } as Opening;
  const b = house();
  // the cellar's outer walls are 0.5 m, the settings say 0.3 m
  b.floors[0].rooms[0].wall_thickness = [0.5, 0.5, 0.5, 0.5];
  b.floors[0].openings = [win];
  const g = earthOf(b, 0)!;
  assert.ok(g.wells.count > 0);
  // the well's floor starts at the wall's outer face (z = −0.5), not inside the wall
  const zs = g.wells.p.filter((_, i) => i % 3 === 2);
  assert.ok(Math.max(...zs) <= -0.5 + 1e-6, `well reaches z ${Math.max(...zs)}`);
});
