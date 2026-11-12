import assert from "node:assert/strict";
import { test } from "node:test";
import type { Opening } from "../model.ts";
import type { OpeningInfo } from "./build.ts";
import { blindInside, buildOpeningParts, lightCover, sillBoards, stackedOnOpening } from "./openings.ts";

/** A window (or door) on the wall along x from (sx, sz), as the floor builder describes it. */
function info(id: string, sx: number, width: number, sill: number, top: number, extra: Partial<Opening> & { axis?: [number, number]; exterior?: boolean; sz?: number } = {}): OpeningInfo {
  const { axis = [1, 0], exterior = true, sz = 0, ...o } = extra;
  const opening: Opening = { id, room_id: "r", edge: 0, offset: sx + width / 2, width, type: "window", sill, height: top - sill, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null, ...o };
  return { opening, bucket: 0, start: [sx, sz], axis, width, toRoom: [0, 1], faceRoom: 0.12, faceOut: 0.12, sill, top, hingeAtStart: true, exterior };
}

test("a window gets a board inside and a sill outside from 0.3 m sill height, interior walls only the board", () => {
  const low = info("low", 1, 1.2, 0.2, 1.5);
  const normal = info("w", 1, 1.2, 0.9, 2.2);
  assert.deepEqual(sillBoards(low, [low]), { inside: false, outside: false });
  assert.deepEqual(sillBoards(normal, [normal]), { inside: true, outside: true });
  const inner = info("i", 1, 1.2, 0.9, 2.2, { exterior: false });
  assert.deepEqual(sillBoards(inner, [inner]), { inside: true, outside: false });
});

test("a window directly above another opening of the same wall has no sill in automatic mode (#655)", () => {
  const lower = info("lower", 1, 1.2, 0.9, 2.0);
  const transom = info("transom", 1, 1.2, 2.0, 2.4);
  const all = [lower, transom];
  assert.equal(stackedOnOpening(transom, all), true);
  assert.equal(stackedOnOpening(lower, all), false);
  assert.deepEqual(sillBoards(transom, all), { inside: false, outside: false });
  assert.deepEqual(sillBoards(lower, all), { inside: true, outside: true });
  // a small gap (a transom bar) still counts, a big one does not
  const t2 = info("t2", 1, 1.2, 2.2, 2.4);
  assert.equal(stackedOnOpening(t2, [lower, t2]), true);
  const t3 = info("t3", 1, 1.2, 2.35, 2.45);
  assert.equal(stackedOnOpening(t3, [lower, t3]), false);
  // a transom light over a door, and the same wall drawn the other way round
  const door = info("door", 3, 0.9, 0, 2.05, { type: "door" });
  const fanlight = info("fan", 3.1, 0.7, 2.05, 2.4);
  assert.equal(stackedOnOpening(fanlight, [door, fanlight]), true);
  const reversed = info("rev", 2.2, 1.2, 2.0, 2.4, { axis: [-1, 0] });
  assert.equal(stackedOnOpening(reversed, [lower, reversed]), true);
});

test("windows beside each other, on another wall or hardly overlapping keep their sills", () => {
  const a = info("a", 1, 1.2, 0.9, 2.0);
  const beside = info("b", 2.4, 1.2, 2.0, 2.4);
  assert.equal(stackedOnOpening(beside, [a, beside]), false);
  const otherWall = info("o", 1, 1.2, 2.0, 2.4, { sz: 3 });
  assert.equal(stackedOnOpening(otherWall, [a, otherWall]), false);
  const across = info("x", 1, 1.2, 2.0, 2.4, { axis: [0, 1] });
  assert.equal(stackedOnOpening(across, [a, across]), false);
  const edge = info("e", 1.9, 1.2, 2.0, 2.4);
  assert.equal(stackedOnOpening(edge, [a, edge]), false);
});

test("the sill setting overrides the automatic rule", () => {
  const lower = info("lower", 1, 1.2, 0.9, 2.0);
  const forced = info("f", 1, 1.2, 2.0, 2.4, { sill_board: "inside" });
  assert.deepEqual(sillBoards(forced, [lower, forced]), { inside: true, outside: false });
  const outside = info("o", 1, 1.2, 0.9, 2.2, { sill_board: "outside", exterior: false });
  assert.deepEqual(sillBoards(outside, [outside]), { inside: false, outside: true });
  const none = info("n", 1, 1.2, 0.9, 2.2, { sill_board: "none" });
  assert.deepEqual(sillBoards(none, [none]), { inside: false, outside: false });
  // a terrace door gets none by itself; one chosen by hand lies at the floor (#702)
  const terrace = info("t", 1, 1.0, 0, 2.1);
  assert.deepEqual(sillBoards(terrace, [terrace]), { inside: false, outside: false });
  const chosen = info("tc", 1, 1.0, 0, 2.1, { sill_board: "inside" });
  assert.deepEqual(sillBoards(chosen, [chosen]), { inside: true, outside: false });
});

test("a board chosen by hand shows on a window down to the floor; a glass wall has none unless chosen (#702)", () => {
  const floorLong = info("f", 1, 1.2, 0, 2.2, { sill_board: "inside" });
  assert.deepEqual(sillBoards(floorLong, [floorLong]), { inside: true, outside: false });
  const out = info("o", 1, 1.2, 0, 2.2, { sill_board: "outside" });
  assert.deepEqual(sillBoards(out, [out]), { inside: false, outside: true });
  const glass = info("g", 1, 2.4, 0.9, 2.4, { style: "glass_wall" });
  assert.deepEqual(sillBoards(glass, [glass]), { inside: false, outside: false });
  const glassBoard = info("gb", 1, 2.4, 0.9, 2.4, { style: "glass_wall", sill_board: "inside" });
  assert.deepEqual(sillBoards(glassBoard, [glassBoard]), { inside: true, outside: false });
});

test("a top-hung window opens its bottom outwards (#327)", () => {
  const minN = (top: boolean) => {
    const w = info("w", 1, 1.2, 0.9, 2.2, { top_hung: top });
    const parts = buildOpeningParts([w], new Map([["w", { open: 1, tilt: 0, cover: null }]]), 99);
    const pos = parts.glass.getAttribute("position").array as ArrayLike<number>;
    // the room lies towards +z (toRoom [0, 1]): outwards is -z
    let min = Infinity;
    for (let i = 2; i < pos.length; i += 3) min = Math.min(min, pos[i]);
    return min;
  };
  assert.ok(minN(true) < -0.3, `top-hung glass reaches outside (${minN(true)})`);
  assert.ok(minN(false) > -0.2, "a turning window opens into the room");
});

test("a lift-and-slide door slides its pane along the wall, the fixed one stays (#397)", () => {
  const span = (open: number) => {
    const w = info("s", 1, 2.4, 0, 2.15, { style: "slide" });
    const parts = buildOpeningParts([w], new Map([["s", { open, tilt: 0, cover: null }]]), 99);
    const pos = parts.glass.getAttribute("position").array as ArrayLike<number>;
    let minX = Infinity;
    let maxX = -Infinity;
    let minZ = Infinity;
    for (let i = 0; i < pos.length; i += 3) {
      minX = Math.min(minX, pos[i]);
      maxX = Math.max(maxX, pos[i]);
      minZ = Math.min(minZ, pos[i + 2]);
    }
    return { minX, maxX, minZ };
  };
  const shut = span(0);
  const open = span(1);
  // closed both panes fill the opening; open, both lie on the hinge half
  assert.ok(shut.maxX > 3.2, `closed reaches the far end (${shut.maxX})`);
  assert.ok(open.maxX < 2.4, `open the pane moved over the fixed one (${open.maxX})`);
  assert.ok(open.minZ > -0.2, "it does not swing out of the wall");
});

test("a venetian blind is drawn as single slats that turn; shut it is the plain blind; the light follows the slats (#971)", () => {
  const w = info("w", 1, 1.2, 0.9, 2.3);
  const tris = (slats: number | null | undefined) => buildOpeningParts([w], new Map([["w", { open: 0, tilt: 0, cover: 1, slats }]]), 99).blinds.getAttribute("position").count / 3;
  // a roller shutter and a shut venetian blind: one panel (two triangles)
  assert.equal(tris(undefined), 2);
  assert.equal(tris(0), 2);
  // open slats: one strip every 7 cm over the 1.4 m of the window
  assert.equal(tris(1), 20 * 2);
  assert.equal(tris(0.5), 20 * 2);
  // level slats lie flat (no height), half-open ones rise from the outer to the inner edge
  const ys = (slats: number) => {
    const pos = buildOpeningParts([w], new Map([["w", { open: 0, tilt: 0, cover: 1, slats }]]), 99).blinds.getAttribute("position");
    return [pos.getY(0), pos.getY(2)];
  };
  assert.ok(Math.abs(ys(1)[0] - ys(1)[1]) < 1e-6);
  assert.ok(ys(0.5)[1] - ys(0.5)[0] > 0.03);
  // light: a blind that is down lets through what its slats leave open
  assert.equal(lightCover({ cover: 1, slats: null }), 1);
  assert.equal(lightCover({ cover: 1, slats: 1 }), 0);
  assert.equal(lightCover({ cover: 0.5, slats: 0.5 }), 0.25);
  assert.equal(lightCover({ cover: null }), 0);
  assert.equal(lightCover(undefined), 0);
});

test("a blind set to hang inside is a roller shade on the room's side of the wall; outside stays the default (#904)", () => {
  const zs = (o: Partial<Opening>) => {
    const w = info("w", 1, 1.2, 0.9, 2.3, o);
    const pos = buildOpeningParts([w], new Map([["w", { open: 0, tilt: 0, cover: 0.5 }]]), 99).blinds.getAttribute("position");
    return Array.from({ length: pos.count }, (_, i) => pos.getZ(i));
  };
  // the wall's faces lie 12 cm to either side of its axis (z = 0), the room on the +z side
  assert.ok(zs({}).every((z) => z < -0.12), "outside: in front of the outer face");
  assert.ok(zs({ blind_side: "outside" }).every((z) => z < -0.12));
  assert.ok(zs({ blind_side: "inside" }).every((z) => z > 0.12), "inside: in front of the room's face");
  // a garage door has no shade inside
  assert.equal(blindInside({ type: "garage", blind_side: "inside" }), false);
  assert.equal(blindInside({ type: "door", blind_side: "inside" }), true);
  assert.equal(blindInside({ type: "window" }), false);
});
