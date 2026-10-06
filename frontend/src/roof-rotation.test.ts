import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, rotatePoint, wrapAngle, type Building, type RoofSection, type Room, type Vec2 } from "./model.ts";
import {
  dormerHole,
  dormerHoles,
  dormerParent,
  effectiveDormer,
  fromSectionLocal,
  headroomLines,
  inSectionBox,
  proposeDormer,
  reboxSection,
  roofUnderAt,
  sectionCorners,
  sectionFrame,
  sectionOverhang,
  sectionPolygon,
  sectionRotation,
  sectionUV,
  toSectionLocal,
} from "./roof-sections.ts";
import { fieldModules, roofFaces, windowCorners } from "./solar.ts";
import { buildRoof } from "./viewer/roof.ts";

const near = (a: number, b: number, eps = 1e-6) => assert.ok(Math.abs(a - b) < eps, `${a} != ${b}`);
const nearPt = (a: readonly number[], b: readonly number[], eps = 1e-6) => a.forEach((v, i) => near(v, b[i], eps));
const rect = (id: string, x0: number, z0: number, x1: number, z1: number): Room => ({ id, name: id, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material: "wood" });
const section = (patch: Partial<RoofSection> = {}): RoofSection => ({
  id: "s",
  x0: 0,
  z0: 0,
  x1: 12,
  z1: 8,
  shape: "gable",
  axis: "x",
  eave_a: 3,
  eave_b: 2,
  pitch_a: 40,
  pitch_b: 30,
  base: 3,
  ...patch,
});
const holder = (...sections: RoofSection[]) => ({ settings: { roof: { overhang: 0.4, sections } } });
/** A 12 × 8 m section turned 90° clockwise is the same roof as the 8 × 12 m one with its ridge along z and its sides swapped. */
const quarter = (s: RoofSection): RoofSection => {
  const [cx, cz] = [(s.x0 + s.x1) / 2, (s.z0 + s.z1) / 2];
  const hw = Math.abs(s.x1 - s.x0) / 2;
  const hd = Math.abs(s.z1 - s.z0) / 2;
  return { ...s, x0: cx - hd, x1: cx + hd, z0: cz - hw, z1: cz + hw, axis: s.axis === "x" ? "z" : "x", flip: s.axis === "x" ? !s.flip : !!s.flip, rotation: 0 };
};
const samples = (): Vec2[] => {
  const out: Vec2[] = [];
  for (let x = -1; x <= 13; x += 0.7) for (let z = -3; z <= 11; z += 0.7) out.push([x, z]);
  return out;
};

test("points turn clockwise in the plan: east to south; angles wrap into (-180, 180]", () => {
  nearPt(rotatePoint([1, 0], [0, 0], 90), [0, 1]);
  nearPt(rotatePoint([3, 2], [2, 2], 180), [1, 2]);
  nearPt(rotatePoint([1, 0], [0, 0], -90), [0, -1]);
  assert.deepEqual(rotatePoint([1.5, -2], [7, 7], 0), [1.5, -2]);
  assert.equal(wrapAngle(190), -170);
  assert.equal(wrapAngle(-180), 180);
  assert.equal(wrapAngle(360), 0);
  assert.equal(wrapAngle(18), 18);
});

test("a section's turn: missing, non-finite and free shapes count as 0", () => {
  assert.equal(sectionRotation(section()), 0);
  assert.equal(sectionRotation(section({ rotation: 18 })), 18);
  assert.equal(sectionRotation(section({ rotation: Number.NaN })), 0);
  assert.equal(sectionRotation(section({ shape: "flat", rotation: 18, points: [[0, 0], [4, 0], [4, 4]] })), 0);
});

test("without a turn the frame, the plan queries and the 3D roof stay exactly as before", () => {
  const plain = section();
  const zero = section({ rotation: 0 });
  const a = sectionFrame(plain);
  const b = sectionFrame(zero);
  assert.deepEqual(b.at(3.3, 1.7), a.at(3.3, 1.7));
  for (const [x, z] of samples()) {
    assert.deepEqual(sectionUV(zero, x, z), sectionUV(plain, x, z));
    assert.equal(roofUnderAt(holder(zero), x, z), roofUnderAt(holder(plain), x, z));
  }
  assert.deepEqual(sectionPolygon(zero, 0.4), sectionPolygon(plain, 0.4));
  const house = (s: RoofSection) => {
    const h = emptyBuilding();
    h.floors = [{ ...newFloor("eg", "EG", 0), height: 3, rooms: [rect("r", 0.24, 0.24, 11.76, 7.76)] }];
    h.settings.roof = { ...h.settings.roof, type: "custom", sections: [s] };
    return h;
  };
  const pa = buildRoof(house(plain))[0];
  const pb = buildRoof(house(zero))[0];
  assert.deepEqual(pb.solid.p, pa.solid.p);
  assert.deepEqual(pb.lines, pa.lines);
});

test("plan points go into a turned section's frame and back", () => {
  const s = section({ rotation: 18 });
  for (const p of [[1, 2], [-3, 9], [6, 4]] as Vec2[]) {
    nearPt(fromSectionLocal(s, toSectionLocal(s, p[0], p[1])), p);
    // the frame's plan point of (u, v) is found again by sectionUV
    const fr = sectionFrame(s);
    const q = fr.at(p[0], p[1]);
    nearPt(sectionUV(s, q[0], q[1]), p);
  }
  // the middle stays put, the corners turn about it
  nearPt(sectionCorners(s)[0], rotatePoint([0, 0], [6, 4], 18));
  assert.ok(inSectionBox(s, 6, 4));
  const corner = rotatePoint([11.9, 7.9], [6, 4], 18);
  assert.ok(inSectionBox(s, corner[0], corner[1]));
  // the unturned corner lies outside the turned rectangle
  assert.ok(!inSectionBox(s, 11.9, 7.9));
});

for (const patch of [{}, { flip: true }, { shape: "pent" as const }, { shape: "hip" as const }, { shape: "flat" as const }]) {
  test(`a section turned 90° behaves like the one with swapped axis (${JSON.stringify(patch)})`, () => {
    const turned = section({ ...patch, rotation: 90 });
    const swapped = quarter(section(patch));
    for (const [x, z] of samples()) {
      const a = roofUnderAt(holder(turned), x, z);
      const b = roofUnderAt(holder(swapped), x, z);
      if (a === null || b === null) assert.equal(a, b, `at ${x}, ${z}`);
      else near(a, b);
    }
    // the outline with its overhang: the same four corners
    const key = (p: Vec2) => `${p[0].toFixed(6)}:${p[1].toFixed(6)}`;
    assert.deepEqual(sectionPolygon(turned, 0.4).map(key).sort(), sectionPolygon(swapped, 0.4).map(key).sort());
    const lines = (s: RoofSection) =>
      headroomLines(holder(s), 0, 1.5)
        .map(([p, q]) => [key(p), key(q)].sort().join("|"))
        .sort();
    assert.deepEqual(lines(turned), lines(swapped));
  });
}

test("a turned section's overhang stops where it meets a taller part of the house", () => {
  // a lean-to (pent) turned 90°: its high side b now looks west, against a taller house there
  const b = emptyBuilding();
  b.floors = [{ ...newFloor("eg", "EG", 0), height: 6, rooms: [rect("house", -10, -4, 2, 12)] }];
  const s = section({ shape: "pent", base: 3, rotation: 90 });
  const ov = sectionOverhang(b, s, 0.4);
  const eq = sectionOverhang(b, quarter(s), 0.4);
  assert.deepEqual(ov, eq);
  assert.equal(ov.b, 0);
});

test("solar faces of a turned section turn with it (slopes and flat roofs)", () => {
  const house = (s: RoofSection): Building => {
    const h = emptyBuilding();
    h.floors = [{ ...newFloor("eg", "EG", 0), height: 3, rooms: [rect("r", 0, 0, 12, 8)] }];
    h.settings.roof = { ...h.settings.roof, type: "custom", overhang: 0.4, sections: [s] };
    return h;
  };
  for (const shape of ["gable", "flat"] as const) {
    const turned = roofFaces(house(section({ shape, rotation: 25 })));
    const plain = roofFaces(house(section({ shape })));
    assert.deepEqual(turned.map((f) => f.key), plain.map((f) => f.key));
    for (let i = 0; i < turned.length; i++) {
      const t = turned[i];
      const p = plain[i];
      near(t.pitch, p.pitch);
      near(t.lu, p.lu);
      near(t.ls, p.ls);
      // the origin and the directions are the unturned ones turned by 25°
      nearPt([t.o[0], t.o[2]], rotatePoint([p.o[0], p.o[2]], [6, 4], 25));
      near(t.o[1], p.o[1]);
      nearPt([t.eu[0], t.eu[2]], rotatePoint([p.eu[0], p.eu[2]], [0, 0], 25));
      nearPt([t.es[0], t.es[2]], rotatePoint([p.es[0], p.es[2]], [0, 0], 25));
      nearPt(t.facing, rotatePoint(p.facing, [0, 0], 25));
      // a field's modules land in the same place of the face
      const field = { id: "f", face: t.key, u: 0.5, v: 0.5, rows: 1, cols: 2, portrait: true };
      const mt = fieldModules(t, field);
      const mp = fieldModules(p, field);
      assert.equal(mt.length, mp.length);
      for (let k = 0; k < mt.length; k++) for (let c = 0; c < 4; c++) nearPt([mt[k].corners[c][0], mt[k].corners[c][2]], rotatePoint([mp[k].corners[c][0], mp[k].corners[c][2]], [6, 4], 25));
    }
  }
});

test("a roof window on a turned section lies at the same place of its slope", () => {
  const house = (s: RoofSection): Building => {
    const h = emptyBuilding();
    h.floors = [{ ...newFloor("eg", "EG", 0), height: 3, rooms: [rect("r", 0, 0, 12, 8)] }];
    h.settings.roof = { ...h.settings.roof, type: "custom", overhang: 0.4, sections: [s] };
    return h;
  };
  const turned = section({ rotation: -33 });
  const plain = section();
  const w = { id: "w", face: "s:a", u: 3, v: 1 };
  const ct = windowCorners(roofFaces(house(turned)).find((f) => f.key === "s:a")!, w)!;
  const cp = windowCorners(roofFaces(house(plain)).find((f) => f.key === "s:a")!, w)!;
  for (let i = 0; i < 4; i++) {
    nearPt(sectionUV(turned, ct[i][0], ct[i][2]), sectionUV(plain, cp[i][0], cp[i][2]));
    near(ct[i][1], cp[i][1]);
  }
});

test("a dormer on a turned roof turns with it and cuts the same hole in the slope", () => {
  const parent = section({ x0: 0, z0: 0, x1: 12, z1: 8, eave_a: 3, eave_b: 3, pitch_a: 45, pitch_b: 45 });
  const turnedParent = { ...parent, rotation: 18 };
  const d = proposeDormer(parent, "a", "d");
  const dt = proposeDormer(turnedParent, "a", "d");
  assert.equal(dt.rotation, 18);
  // the dormer's middle turned about the parent's middle, its rectangle the same size
  nearPt([(dt.x0 + dt.x1) / 2, (dt.z0 + dt.z1) / 2], rotatePoint([(d.x0 + d.x1) / 2, (d.z0 + d.z1) / 2], [6, 4], 18), 0.02);
  near(dt.x1 - dt.x0, d.x1 - d.x0, 1e-9);
  near(dt.z1 - dt.z0, d.z1 - d.z0, 1e-9);
  assert.equal(dormerParent([turnedParent, dt], dt), turnedParent);
  // holes in the parent's frame do not care about the turn (the proposal rounds to cm)
  const h = dormerHole(parent, d)!;
  const ht = dormerHole(turnedParent, dt)!;
  for (const k of ["u0", "u1", "v0", "v1"] as const) near(ht[k], h[k], 0.03);
  const hs = dormerHoles(parent, d);
  const hts = dormerHoles(turnedParent, dt);
  assert.equal(hts.length, hs.length);
  // the shortened dormer keeps its front where it is
  const e = effectiveDormer(parent, d);
  const et = effectiveDormer(turnedParent, dt);
  const front = (s: RoofSection) => sectionCorners(s);
  const ef = front(e).map((p) => rotatePoint(p, [6, 4], 18));
  front(et).forEach((p, i) => nearPt(p, ef[i], 0.03));
});

test("reboxing a turned section keeps the unchanged corner in place", () => {
  const s = section({ rotation: 40 });
  const keep = sectionCorners(s)[0];
  const moved = reboxSection(s, { x0: 0, z0: 0, x1: 9, z1: 5 });
  nearPt(sectionCorners(moved)[0], keep);
  near(moved.x1 - moved.x0, 9);
  near(moved.z1 - moved.z0, 5);
  // no turn: just the new box
  assert.deepEqual(reboxSection(section(), { x0: 1, z0: 2, x1: 3, z1: 4 }), { ...section(), x0: 1, z0: 2, x1: 3, z1: 4 });
});

test("the 3D roof of a section turned 90° is the one of the swapped section", () => {
  const house = (s: RoofSection): Building => {
    const h = emptyBuilding();
    h.floors = [{ ...newFloor("eg", "EG", 0), height: 3, rooms: [rect("r", 2, -2, 10, 10)] }];
    h.settings.roof = { ...h.settings.roof, type: "custom", overhang: 0.4, sections: [s] };
    return h;
  };
  for (const shape of ["gable", "hip", "pent", "mansard", "flat"] as const) {
    const verts = (s: RoofSection) => {
      const p = buildRoof(house(s))[0].solid.p;
      const out: string[] = [];
      for (let i = 0; i < p.length; i += 3) out.push([p[i], p[i + 1], p[i + 2]].map((v) => (Math.abs(v) < 5e-7 ? 0 : v).toFixed(5)).join(","));
      return out.sort();
    };
    assert.deepEqual(verts(section({ shape, rotation: 90 })), verts(quarter(section({ shape }))), shape);
  }
});
