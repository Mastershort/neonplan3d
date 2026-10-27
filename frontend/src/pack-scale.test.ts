import assert from "node:assert/strict";
import { test } from "node:test";
import { fitParts } from "./pack-scale.ts";
import type { PackItem, PackPart } from "./packs.ts";

const near = (a: number, b: number, msg?: string) => assert.ok(Math.abs(a - b) < 1e-4, `${msg ?? ""} ${a} ≠ ${b}`);

// a sofa 2.0 × 0.9 × 0.8: legs (fixed all round), a frame, arms 0.2 wide at both ends (fixed in width and height),
// a cushion between the arms, a back that grows with the height
const sofa: PackItem = {
  id: "sofa",
  name: { en: "Sofa" },
  size: [2.0, 0.9, 0.8],
  parts: [
    { shape: "box", x: -0.45, z: -0.4, w: 0.025, d: 0.0556, y: 0, h: 0.125, color: "wood", fix: "wdh" },
    { shape: "box", x: 0.45, z: -0.4, w: 0.025, d: 0.0556, y: 0, h: 0.125, color: "wood", fix: "wdh" },
    { shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0.125, h: 0.25, color: "fabric", fix: "h" },
    { shape: "box", x: -0.45, z: 0, w: 0.1, d: 0.9, y: 0.375, h: 0.4, color: "fabric", fix: "wh" },
    { shape: "box", x: 0.45, z: 0, w: 0.1, d: 0.9, y: 0.375, h: 0.4, color: "fabric", fix: "wh" },
    { shape: "box", x: 0, z: 0.1, w: 0.78, d: 0.6, y: 0.375, h: 0.175, color: "cushion", fix: "h" },
    { shape: "loft", x: 0, z: -0.4, w: 1, d: 0.2, y: 0.375, h: 0.625, color: "fabric", tz: -0.44, td: 0.1, tw: 0.98 },
  ],
};

const metres = (p: PackPart, w: number, d: number, h: number) => ({ x0: (p.x - p.w / 2) * w, x1: (p.x + p.w / 2) * w, z0: (p.z - p.d / 2) * d, z1: (p.z + p.d / 2) * d, y0: p.y * h, y1: (p.y + p.h) * h });

test("at the default size and without fixed parts nothing changes", () => {
  assert.equal(fitParts(sofa, 2.0, 0.9, 0.8), sofa.parts);
  const plain: PackItem = { ...sofa, parts: sofa.parts.map((p) => ({ ...p, fix: undefined })) };
  assert.equal(fitParts(plain, 3.0, 0.9, 0.8), plain.parts);
});

test("a wider sofa keeps its arms and legs and stretches the seat between them", () => {
  const out = fitParts(sofa, 3.0, 0.9, 0.8);
  const [legL, legR, frame, armL, armR, cushion] = out.map((p) => metres(p, 3.0, 0.9, 0.8));
  near(legL.x0, -1.425, "left leg stays 7.5 cm from the left edge");
  near(legL.x1 - legL.x0, 0.05, "leg width");
  near(legR.x1, 1.425, "right leg stays at the right edge");
  near(armL.x0, -1.5);
  near(armL.x1, -1.3, "arm 0.2 wide");
  near(armR.x0, 1.3);
  near(armR.x1, 1.5);
  near(frame.x0, -1.5);
  near(frame.x1, 1.5, "the frame spans the whole width");
  // the cushion sat 0.02 inside each arm: the gap lies in the stretching middle, so it grows a little (3.25 cm)
  near(cushion.x0, -1.2675);
  near(cushion.x1, 1.2675);
  near(armL.y1 - armL.y0, 0.32, "arm height unchanged");
  near(legL.z1 - legL.z0, 0.05, "leg depth unchanged");
});

test("a taller sofa keeps the seat height and grows its back", () => {
  const out = fitParts(sofa, 2.0, 0.9, 1.1);
  const [leg, , frame, arm, , cushion, back] = out.map((p) => metres(p, 2.0, 0.9, 1.1));
  near(leg.y1, 0.1, "legs 0.1 high");
  near(frame.y0, 0.1);
  near(frame.y1, 0.3, "frame height kept");
  near(cushion.y0, 0.3);
  near(cushion.y1, 0.44, "cushion height kept");
  near(arm.y0, 0.3, "arm sits on the frame");
  near(back.y0, 0.3, "the back starts at the seat");
  near(back.y1, 1.1, "and reaches the new top");
  const loft = out[6];
  near((loft.tw ?? 0) * 2.0, 1.96, "the loft's top keeps its width relation");
});

test("a smaller item still works and fixed zones that meet fall back to plain scaling", () => {
  const out = fitParts(sofa, 1.2, 0.9, 0.8);
  const [, , , armL, armR] = out.map((p) => metres(p, 1.2, 0.9, 0.8));
  near(armL.x1 - armL.x0, 0.2);
  near(armR.x0, 0.4);
  const tiny = fitParts(sofa, 0.3, 0.9, 0.8);
  const arm = metres(tiny[3], 0.3, 0.9, 0.8);
  near(arm.x1 - arm.x0, 0.03, "arms scale down when there is no room for fixed ones");
});

test("a taller chest of drawers grows all its drawers evenly, the handles keep their size and go along (#801)", () => {
  // 1.0 × 0.58 × 0.8: plinth 10 cm, bottom 2 cm, top slab 2 cm (all fixed in height), three drawer fronts of 22 cm
  // between them, each with a 2 cm handle 5 cm below its top edge (fixed all round)
  const H = 0.8;
  const front = (y0: number): PackPart => ({ shape: "box", x: 0, z: 0.49, w: 0.96, d: 0.02, y: y0 / H, h: 0.22 / H, color: "white" });
  const handle = (y0: number): PackPart => ({ shape: "box", x: 0, z: 0.51, w: 0.3, d: 0.02, y: (y0 + 0.15) / H, h: 0.02 / H, color: "metal", fix: "wdh" });
  const chest: PackItem = {
    id: "chest",
    name: { en: "Chest" },
    size: [1.0, 0.58, H],
    parts: [
      { shape: "box", x: 0, z: 0, w: 0.96, d: 0.9, y: 0, h: 0.1 / H, color: "dark", fix: "h" },
      { shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0.1 / H, h: 0.02 / H, color: "white", fix: "h" },
      { shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0.78 / H, h: 0.02 / H, color: "white", fix: "h" },
      front(0.12),
      front(0.34),
      front(0.56),
      handle(0.12),
      handle(0.34),
      handle(0.56),
    ],
  };
  const out = fitParts(chest, 1.0, 0.58, 0.92).map((p) => metres(p, 1.0, 0.58, 0.92));
  const [plinth, bottom, top, f1, f2, f3, h1, h2, h3] = out;
  near(plinth.y1, 0.1, "plinth kept");
  near(bottom.y1, 0.12, "bottom on the plinth");
  near(top.y0, 0.9, "top slab at the new top");
  for (const f of [f1, f2, f3]) near(f.y1 - f.y0, 0.26, "every drawer 4 cm taller");
  for (const [h, f] of [[h1, f1], [h2, f2], [h3, f3]] as const) {
    near(h.y1 - h.y0, 0.02, "handle keeps its size");
    assert.ok(h.y0 > f.y0 && h.y1 < f.y1, "handle stays on its own drawer");
  }
});
