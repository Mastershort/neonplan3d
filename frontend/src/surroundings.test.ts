import assert from "node:assert/strict";
import { test } from "node:test";
import type { Building, Surroundings, Vec2 } from "./model.ts";
import { emptyBuilding, newFloor } from "./model.ts";
import { buildingHeight, fetchSurroundings, parseHeight, parseOverpass, simplify, SurroundError, toMetres, wayKind } from "./surround-fetch.ts";
import { hiddenBuildings, homeBuilding, mapToPlan, placedSurroundings, placeUnderPlan, turnMap } from "./surroundings.ts";

const LAT = 48.137;
const LON = 11.575;
/** A point `e` metres east and `n` metres north of the origin, as OSM gives it. */
function ll(e: number, n: number) {
  const k = Math.PI / 180;
  return { lat: LAT + n / (6378137 * k), lon: LON + e / (6378137 * k * Math.cos(LAT * k)) };
}

function house(rooms: [number, number, number, number][], north = 0): Building {
  const b = emptyBuilding();
  b.settings.north = north;
  b.floors = [{ ...newFloor("eg", "EG", 0), rooms: rooms.map(([x0, z0, x1, z1], i) => ({ id: `r${i}`, name: `r${i}`, area_id: null, floor_material: "wood", points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]] as Vec2[] })) }];
  return b;
}

test("map metres: east and north of the origin, to the centimetre", () => {
  const p = ll(30, -12);
  const [e, n] = toMetres(LAT, LON, p.lat, p.lon);
  assert.ok(Math.abs(e - 30) < 0.02 && Math.abs(n + 12) < 0.02);
});

test("heights come from the height tag, the storeys, or the kind of building", () => {
  assert.equal(parseHeight("12"), 12);
  assert.equal(parseHeight("12,5 m"), 12.5);
  assert.ok(Math.abs(parseHeight("10'")! - 3.048) < 1e-9);
  assert.equal(parseHeight("tall"), null);
  assert.equal(buildingHeight({ building: "house", height: "8.5" }), 8.5);
  assert.equal(buildingHeight({ building: "house", "building:levels": "2" }), 7.5);
  assert.equal(buildingHeight({ building: "garage" }), 3);
  assert.equal(buildingHeight({ building: "apartments" }), 14);
  assert.equal(buildingHeight({ building: "yes" }), 7);
});

test("streets, paths, railways and streams get their kind and width; tunnels and plans are left out", () => {
  assert.deepEqual(wayKind({ highway: "residential" }), { k: "road", w: 6 });
  assert.deepEqual(wayKind({ highway: "footway" }), { k: "path", w: 1.8 });
  assert.deepEqual(wayKind({ highway: "primary", width: "12" }), { k: "road", w: 12 });
  assert.deepEqual(wayKind({ railway: "rail" }), { k: "rail", w: 3 });
  assert.deepEqual(wayKind({ waterway: "stream" }), { k: "water", w: 2 });
  assert.equal(wayKind({ highway: "proposed" }), null);
  assert.equal(wayKind({ highway: "primary", tunnel: "yes" }), null);
  assert.equal(wayKind({ building: "yes" }), null);
});

test("simplifying keeps the corners and drops points on a straight line", () => {
  const out = simplify([[0, 0], [5, 0.02], [10, 0], [10, 10]]);
  assert.deepEqual(out, [[0, 0], [10, 0], [10, 10]]);
});

test("an Overpass answer becomes buildings, ways, areas and trees in map metres; far things stay out", () => {
  const ring = (pts: [number, number][]) => [...pts, pts[0]].map(([e, n]) => ll(e, n));
  const data = {
    elements: [
      { type: "way" as const, tags: { building: "house", "building:levels": "2" }, geometry: ring([[-5, -4], [5, -4], [5, 4], [-5, 4]]) },
      { type: "way" as const, tags: { building: "garage" }, geometry: ring([[20, 0], [26, 0], [26, 6], [20, 6]]) },
      { type: "relation" as const, tags: { building: "apartments" }, members: [{ type: "way", role: "outer", geometry: ring([[40, 40], [60, 40], [60, 60], [40, 60]]) }] },
      { type: "way" as const, tags: { building: "yes" }, geometry: ring([[900, 900], [910, 900], [910, 910]]) },
      { type: "way" as const, tags: { highway: "residential" }, geometry: [ll(-50, -15), ll(50, -15)] },
      { type: "way" as const, tags: { leisure: "park" }, geometry: ring([[-60, 20], [-30, 20], [-30, 50], [-60, 50]]) },
      { type: "node" as const, tags: { natural: "tree" }, ...ll(10, 10) },
      { type: "node" as const, tags: { natural: "tree" }, ...ll(800, 0) },
    ],
  };
  const s = parseOverpass(data as unknown as Parameters<typeof parseOverpass>[0], LAT, LON, 150);
  assert.equal(s.buildings.length, 3);
  assert.equal(s.buildings[0].p.length, 4, "the closing point is dropped");
  assert.equal(s.buildings[0].h, 7.5);
  assert.equal(s.buildings[2].h, 14);
  assert.deepEqual(s.ways.map((w) => w.k), ["road"]);
  assert.deepEqual(s.areas.map((a) => a.k), ["green"]);
  assert.equal(s.trees.length, 1);
});

const base = (buildings: Surroundings["buildings"]): Surroundings => ({ on: true, lat: LAT, lon: LON, at: 0, radius: 150, x: 0, z: 0, own: null, buildings, ways: [], areas: [], trees: [] });

test("the home's building is the one around the origin, else the nearest close by", () => {
  const s = base([
    { p: [[20, 20], [30, 20], [30, 30]], h: 7 },
    { p: [[-5, -5], [5, -5], [5, 5], [-5, 5]], h: 7 },
  ]);
  assert.equal(homeBuilding(s), 1);
  assert.equal(homeBuilding(base([{ p: [[8, 8], [12, 8], [12, 12], [8, 12]], h: 7 }])), 0);
  assert.equal(homeBuilding(base([{ p: [[80, 80], [90, 80], [90, 90]], h: 7 }])), null);
});

test("north up: a map point lands east = right, north = up of the origin's plan point", () => {
  assert.deepEqual(mapToPlan({ x: 10, z: 20 }, 0, [3, 4]), [13, 16]);
  const [x, z] = mapToPlan({ x: 0, z: 0 }, 90, [0, 5]);
  assert.ok(Math.abs(x - 5) < 1e-9 && Math.abs(z) < 1e-9, "north turned 90° clockwise points right");
});

test("a house standing at an angle on the map is turned onto the plan and lies on its rooms", () => {
  // the plan: 12 × 8 m, drawn square to the screen; on the map the house stands turned by 30°
  const b = house([[0, 0, 12, 8]]);
  const t = (30 * Math.PI) / 180;
  const rot = ([e, n]: Vec2): Vec2 => [e * Math.cos(t) - n * Math.sin(t), e * Math.sin(t) + n * Math.cos(t)];
  const footprint: Vec2[] = ([[-6, -4], [6, -4], [6, 4], [-6, 4]] as Vec2[]).map(rot).map(([e, n]) => [e + 2, n + 1]);
  const s = base([{ p: footprint, h: 7 }]);
  const own = homeBuilding(s);
  assert.equal(own, 0);
  const placed = placeUnderPlan(s, own, b);
  // the corners of the map's house land on the plan's corners
  const corners = footprint.map((p) => mapToPlan(placed, placed.north, p));
  for (const want of [[0, 0], [12, 0], [12, 8], [0, 8]] as Vec2[]) {
    assert.ok(corners.some(([x, z]) => Math.hypot(x - want[0], z - want[1]) < 0.05), `a corner at ${want} (got ${JSON.stringify(corners)})`);
  }
});

test("of the turns that fit, the one closest to the north set so far wins", () => {
  const sq: Vec2[] = [[-6, -4], [6, -4], [6, 4], [-6, 4]];
  const s = base([{ p: sq, h: 7 }]);
  assert.equal(placeUnderPlan(s, 0, house([[0, 0, 12, 8]], 0)).north, 0);
  assert.equal(placeUnderPlan(s, 0, house([[0, 0, 12, 8]], 170)).north, 180);
  // a north a little left of up is told as 0 … 360, like the north field
  const tilted: Vec2[] = sq.map(([e, n]) => {
    const t = (-10 * Math.PI) / 180;
    return [e * Math.cos(t) - n * Math.sin(t), e * Math.sin(t) + n * Math.cos(t)];
  });
  assert.equal(placeUnderPlan(base([{ p: tilted, h: 7 }]), 0, house([[0, 0, 12, 8]], 0)).north, 350);
});

test("the own building and buildings standing in the plan's rooms are not drawn", () => {
  const b = house([[0, 0, 12, 8]]);
  const s: Surroundings = {
    ...base([
      { p: [[-6, -4], [6, -4], [6, 4], [-6, 4]], h: 7 },
      { p: [[20, 0], [25, 0], [25, 5], [20, 5]], h: 3 },
      { p: [[4, -1], [5, -1], [5, 0], [4, 0]], h: 3 },
    ]),
    x: 6,
    z: 4,
    own: 0,
  };
  assert.deepEqual([...hiddenBuildings(s, b)].sort(), [0, 2]);
  const placed = placedSurroundings({ ...b, settings: { ...b.settings, surroundings: s } })!;
  assert.equal(placed.buildings.length, 1);
  assert.deepEqual(placed.buildings[0].p[0], [26, 4]);
  assert.equal(placedSurroundings({ ...b, settings: { ...b.settings, surroundings: { ...s, on: false } } }), null);
});

test("a busy server is asked again after a pause, then the answer is read", async () => {
  const answers = [new Response("busy", { status: 504 }), new Response(JSON.stringify({ elements: [{ type: "way", tags: { highway: "residential" }, geometry: [ll(-10, 0), ll(10, 0)] }] }), { status: 200 })];
  const pauses: number[] = [];
  const out = await fetchSurroundings(LAT, LON, 100, undefined, (async () => answers.shift()!) as typeof fetch, async (ms) => void pauses.push(ms));
  assert.equal(out.ways.length, 1);
  assert.deepEqual(pauses, [4000]);
});

test("no map server reached, or an empty map, is told apart", async () => {
  const fail = (async () => {
    throw new TypeError("network");
  }) as typeof fetch;
  await assert.rejects(fetchSurroundings(LAT, LON, 100, undefined, fail), (e: unknown) => e instanceof SurroundError && e.kind === "offline");
  const empty = (async () => new Response(JSON.stringify({ elements: [] }), { status: 200 })) as typeof fetch;
  await assert.rejects(fetchSurroundings(LAT, LON, 100, undefined, empty), (e: unknown) => e instanceof SurroundError && e.kind === "empty");
});

test("turning the map about the house keeps every map point at the same distance from the house's middle", () => {
  const s = { x: 3, z: -2 };
  const mid: Vec2 = [6, 4];
  const p: Vec2 = [10, 5];
  const before = mapToPlan(s, 20, p);
  const turned = turnMap(s, 20, 90, mid);
  assert.equal(turned.north, 110);
  const after = mapToPlan(turned, turned.north, p);
  assert.ok(Math.abs(Math.hypot(before[0] - mid[0], before[1] - mid[1]) - Math.hypot(after[0] - mid[0], after[1] - mid[1])) < 0.02);
  // a quarter turn clockwise: what lay to the right of the middle lies below it
  const right = turnMap({ x: 16, z: 4 }, 0, 90, mid);
  assert.ok(Math.abs(right.x - 6) < 0.01 && Math.abs(right.z - 14) < 0.01);
});
