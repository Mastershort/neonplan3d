import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Room, type RoofSection } from "../model.ts";
import { DEG } from "./geo.ts";
import { proposeDormer } from "../roof-sections.ts";
import { roofFaces } from "../solar.ts";
import { buildRoof, roofFloor } from "./roof.ts";

const rect = (id: string, x1: number, z1: number): Room => ({ id, name: id, area_id: null, points: [[0, 0], [x1, 0], [x1, z1], [0, z1]], floor_material: "wood" });

function house(type: "none" | "flat" | "gable") {
  const b = emptyBuilding();
  b.floors = [
    { ...newFloor("eg", "EG", 0), rooms: [rect("a", 10, 8)] },
    { ...newFloor("og", "OG", 2.75), rooms: [rect("b", 10, 8)] },
    { ...newFloor("dg", "Dachboden", 5.5) },
  ];
  b.settings.roof = { type, pitch: 45, overhang: 0.5 };
  return b;
}

test("the roof sits on the highest floor with rooms", () => {
  assert.equal(roofFloor(house("gable"))?.id, "og");
  assert.equal(buildRoof(house("none")).length, 0);
});

test("a gable roof rises to half the house depth times the slope", () => {
  const roof = buildRoof(house("gable"))[0];
  const p = roof.solid.p;
  let top = -Infinity;
  for (let i = 1; i < p.length; i += 3) top = Math.max(top, p[i]);
  // 8 m deep + 2 × (0.24 wall + 0.5 overhang) = 9.48 m; half of it at 45° rises as much
  assert.ok(Math.abs(top - 9.48 / 2) < 1e-6, `ridge at ${top}`);
  assert.ok(buildRoof(house("flat"))[0].solid.count > 0);
});

test("a gable ridge can run along the short side", () => {
  // highest points of the roof: they lie on the ridge, so their spread shows its direction
  const ridge = (dir?: "long" | "short") => {
    const b = house("gable");
    b.settings.roof.ridge = dir;
    const p = buildRoof(b)[0].solid.p;
    let top = -Infinity;
    for (let i = 1; i < p.length; i += 3) top = Math.max(top, p[i]);
    let x = [Infinity, -Infinity];
    let z = [Infinity, -Infinity];
    for (let i = 0; i < p.length; i += 3) {
      if (Math.abs(p[i + 1] - top) > 1e-6) continue;
      x = [Math.min(x[0], p[i]), Math.max(x[1], p[i])];
      z = [Math.min(z[0], p[i + 2]), Math.max(z[1], p[i + 2])];
    }
    return { top, dx: x[1] - x[0], dz: z[1] - z[0] };
  };
  // the house is 10 m along x and 8 m along z
  const long = ridge();
  assert.ok(long.dx > 10 && long.dz < 1e-6, JSON.stringify(long));
  const short = ridge("short");
  assert.ok(short.dz > 8 && short.dx < 1e-6, JSON.stringify(short));
  // across the 10 m side: 10 + 2 × (0.24 + 0.5) = 11.48 m, half of it rises at 45°
  assert.ok(Math.abs(short.top - 11.48 / 2) < 1e-6, `ridge at ${short.top}`);
});

test("a floating roof window over a room of a lower floor belongs to that floor (#482)", () => {
  // the top floor has no room in the middle: the slope there lies over the ground floor's room
  const side = (id: string, x0: number, x1: number): Room => ({ id, name: id, area_id: null, points: [[x0, 0], [x1, 0], [x1, 8], [x0, 8]], floor_material: "wood" });
  const b = emptyBuilding();
  b.floors = [
    { ...newFloor("eg", "EG", 0), rooms: [rect("a", 10, 8)] },
    { ...newFloor("og", "OG", 2.75), rooms: [side("b1", 0, 4), side("b2", 6, 10)] },
  ];
  b.settings.roof = { type: "gable", pitch: 45, overhang: 0.5 };
  const face = roofFaces(b)[0].key;
  b.settings.roof.windows = [
    { id: "over_og", face, u: 1, v: 1, float: true },
    { id: "over_eg", face, u: 5, v: 1, float: true },
  ];
  const [part] = buildRoof(b);
  assert.ok(part.win?.solid.count, "the window over the top floor's room rides with the roof's part");
  const below = part.winBelow?.get("eg");
  assert.ok(below?.solid.count, "the window over the ground floor's room goes with the ground floor");
  // in the ground floor's own heights: above its ceiling (2.75 m), below the ridge
  const ys = below!.solid.p.filter((_, i) => i % 3 === 1);
  assert.ok(Math.min(...ys) > 2.75 && Math.max(...ys) < 2.75 + 6, `${Math.min(...ys)} … ${Math.max(...ys)}`);
  // not floating: only in the roof
  b.settings.roof.windows = [{ id: "w", face, u: 5, v: 1 }];
  const [plain] = buildRoof(b);
  assert.ok(!plain.winBelow && plain.winRoof?.solid.count);
});

test("two sections in one plane show no joint where they meet; a step between them keeps its edge (#1184)", () => {
  // a lean-to roof over an 8 × 6 m room, from two pent sections: the front one (z 3 … 6) runs up to z = 3,
  // the back one (z 0 … 3) goes on from there at the same pitch – one plane, no overhang at the joint
  const pent = (id: string, z0: number, z1: number, eave: number, sides: (number | null)[], x1 = 8): RoofSection => ({
    id,
    x0: 0,
    z0,
    x1,
    z1,
    shape: "pent",
    axis: "x",
    flip: true,
    eave_a: eave,
    eave_b: eave,
    pitch_a: 20,
    pitch_b: 20,
    base: 2.5,
    overhang_sides: sides,
  });
  const rise = 3 * Math.tan(20 * DEG);
  const roofOf = (back: RoofSection) => {
    const b = emptyBuilding();
    b.floors = [{ ...newFloor("eg", "EG", 0), rooms: [rect("a", 8, 6)] }];
    b.settings.roof = { type: "custom", pitch: 20, overhang: 0.4, sections: [pent("front", 3, 6, 2.5, [null, 0, null, null]), back] };
    return buildRoof(b)[0];
  };
  // what lies at the joint (z = 3): lines along it, triangles in it (the rim's thickness, a knee wall), within x
  const atJoint = (part: ReturnType<typeof roofOf>, x0 = -1, x1 = 9) => {
    const on = (p: number[], i: number) => Math.abs(p[i + 2] - 3) < 0.005 && p[i] > x0 - 1e-6 && p[i] < x1 + 1e-6;
    let lines = 0;
    for (let i = 0; i < part.lines.p.length; i += 6) if (on(part.lines.p, i) && on(part.lines.p, i + 3) && Math.abs(part.lines.p[i] - part.lines.p[i + 3]) > 1e-3) lines++;
    let tris = 0;
    for (let i = 0; i < part.solid.p.length; i += 9) if (on(part.solid.p, i) && on(part.solid.p, i + 3) && on(part.solid.p, i + 6)) tris++;
    return { lines, tris };
  };
  const flush = roofOf(pent("back", 0, 3, 2.5 + rise, [0, null, null, null]));
  assert.deepEqual(atJoint(flush), { lines: 0, tris: 0 });
  // the roof's outer edges stay: the eave at the front, the high edge at the back
  const along = (part: ReturnType<typeof roofOf>, z: number) => {
    let n = 0;
    for (let i = 0; i < part.lines.p.length; i += 6) if (Math.abs(part.lines.p[i + 2] - z) < 0.005 && Math.abs(part.lines.p[i + 5] - z) < 0.005) n++;
    return n;
  };
  assert.ok(along(flush, 6.4) > 0 && along(flush, -0.4) > 0);
  // a few millimetres off still count as one plane
  assert.deepEqual(atJoint(roofOf(pent("back", 0, 3.004, 2.5 + rise + 0.003, [0, null, null, null]))), { lines: 0, tris: 0 });
  // a step of 20 cm is a real roof end: its edge and the wall under it stay
  const step = atJoint(roofOf(pent("back", 0, 3, 2.7 + rise, [0, null, null, null])));
  assert.ok(step.lines > 0 && step.tris > 0, JSON.stringify(step));
  // a back section only half as wide: the joint goes over x 0 … 4, beyond it the front's high edge is a roof end
  const half = roofOf(pent("back", 0, 3, 2.5 + rise, [0, null, null, null], 4));
  assert.deepEqual(atJoint(half, 0.01, 3.99), { lines: 0, tris: 0 });
  const rest = atJoint(half, 4.01, 9);
  assert.ok(rest.lines > 0 && rest.tris > 0, JSON.stringify(rest));
});

test("a dormer's front over a floor wall in its plane leaves that wall's height to it: its window shows (#1185)", () => {
  // an attic floor (walls up to 2.75 + 2.5 = 5.25 m) under a gable roof from 3.7 m; the dormer's front lies in the
  // outer face of the room's eave wall (z = -0.24), its walls start at 3.7 m, its ridge is at about 5.8 m
  const section: RoofSection = { id: "s", x0: -0.24, z0: -0.24, x1: 8.24, z1: 6.24, shape: "gable", axis: "x", eave_a: 3.7, eave_b: 3.7, pitch_a: 40, pitch_b: 40, base: 3.7 };
  const front = (dz: number, height = 2.5) => {
    const d = proposeDormer(section, "a", "d", 4);
    const b = emptyBuilding();
    b.settings.wall_exterior = 0.24;
    b.floors = [{ ...newFloor("og", "OG", 2.75), height, rooms: [{ ...rect("a", 8, 6) }] }];
    b.settings.roof = { type: "custom", pitch: 40, overhang: 0.4, sections: [section, { ...d, z0: d.z0 + dz, z1: d.z1 + dz }] };
    const cheeks = buildRoof(b).find((p) => p.cheeks)?.cheeks;
    assert.ok(cheeks);
    // the front gable's triangles: all three corners in the dormer's front plane; their lowest point, absolute
    const z = -0.24 + dz;
    let n = 0;
    let low = Infinity;
    for (let i = 0; i < cheeks.p.length; i += 9) {
      if (![0, 3, 6].every((k) => Math.abs(cheeks.p[i + k + 2] - z) < 1e-6)) continue;
      n++;
      low = Math.min(low, 2.75 + cheeks.p[i + 1], 2.75 + cheeks.p[i + 4], 2.75 + cheeks.p[i + 7]);
    }
    return { n, low };
  };
  // the floor wall builds the front up to 5.25 m, with its window; the dormer adds only its gable above it
  const flush = front(0);
  assert.ok(flush.n > 0 && Math.abs(flush.low - 5.25) < 1e-6, JSON.stringify(flush));
  // set back 50 cm from the wall: no floor wall there, the dormer's front stays closed from its foot (3.7 − 0.14 m)
  const back = front(0.5);
  assert.ok(back.n > 0 && Math.abs(back.low - 3.56) < 1e-6, JSON.stringify(back));
  // a floor wall that ends below the dormer's front changes nothing (it rises to it, #1156)
  const low = front(0, 0.7);
  assert.ok(low.n > 0 && Math.abs(low.low - 3.56) < 1e-6, JSON.stringify(low));
});
