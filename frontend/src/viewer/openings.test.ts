import assert from "node:assert/strict";
import { test } from "node:test";
import type { Opening } from "../model.ts";
import type { OpeningInfo } from "./build.ts";
import { blindPlace, buildOpeningParts, sillBoards, stackedOnOpening } from "./openings.ts";

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

test("a blind hangs outside as a roller shutter by default, inside as a roller shade when chosen", () => {
  const outside = blindPlace(info("w", 1, 1.2, 0.9, 2.2, { cover: "cover.a" }));
  assert.equal(outside.inside, false);
  assert.ok(outside.n1 <= -0.12 && outside.plane < -0.12, "box and slats lie beyond the outer face");
  assert.deepEqual(blindPlace(info("w", 1, 1.2, 0.9, 2.2, { blind_side: "outside" })), outside);
  const inside = blindPlace(info("w", 1, 1.2, 0.9, 2.2, { cover: "cover.a", blind_side: "inside" }));
  assert.equal(inside.inside, true);
  assert.ok(inside.n0 >= 0.12, "the cassette sits on the room face");
  // the fabric runs clear of the window board, which reaches 7 cm into the room
  assert.ok(inside.plane > 0.12 + 0.07 && inside.plane < inside.n1);
});

test("the blind's fabric is drawn on the side it hangs", () => {
  const blindSide = (o: Partial<Opening>) => {
    const w = info("w", 1, 1.2, 0.9, 2.2, { cover: "cover.a", ...o });
    const parts = buildOpeningParts([w], new Map([["w", { open: 0, tilt: 0, cover: 1 }]]), 99);
    // the wall runs along x with the room towards +z: the fabric's z is its distance from the wall's middle
    const pos = parts.blinds.getAttribute("position");
    const zs = new Set<number>();
    for (let i = 0; i < pos.count; i++) zs.add(Math.round(pos.getZ(i) * 1000) / 1000);
    return [...zs];
  };
  assert.deepEqual(blindSide({}), [-0.19]);
  assert.deepEqual(blindSide({ blind_side: "inside" }), [0.2]);
});
