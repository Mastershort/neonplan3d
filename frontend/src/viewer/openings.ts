// Moving and state-dependent parts of doors and windows: fixed frames, sashes with glass (open or
// tilted from contact sensors), window sills, door frames, blind boxes and blind slats. They are
// rebuilt as merged geometry whenever a state changes (and during the short open/close animation),
// so all windows of a floor stay three draw calls: frames, glass and blinds.

import { Color, type BufferGeometry } from "three";
import { sidelightLayout, isFrontDoor, openingStyle } from "../model.ts";
import type { OpeningInfo } from "./build.ts";
import { ALWAYS, GeoBuffer, shade } from "./geo.ts";

export interface OpeningState {
  /** Window sash or door leaf: 0 = closed, 1 = swung open. */
  open: number;
  /** Second leaf of a double door or window. */
  open2?: number;
  /** 0 = closed, 1 = tilted. */
  tilt: number;
  /** Second leaf tilted. */
  tilt2?: number;
  /** Closed fraction of the blind or garage door (0 = up, 1 = down); null = no blind. */
  cover: number | null;
  /** A sensor reports the state (contact, tilt sensor or cover); without one "closed" is a guess. */
  sensed?: boolean;
}

export const CLOSED: OpeningState = { open: 0, open2: 0, tilt: 0, tilt2: 0, cover: null };

const FRAME = 0x1f3052;
const FRAME_TOP = 0x2a4270;
const SASH = 0x22375f;
const SILL = 0x1c2a47;
const BLIND_BOX = 0x16223a;
const OPEN_WARM = 0xffb547;

const OPEN_ANGLE = 1.2;
const DOOR_ANGLE = 1.5;
const LEAF = 0x1c2c4d;
const LEAF_TOP = 0x27406b;
const LEAF_FRONT = 0x111a30;
const LEAF_FRONT_TOP = 0x1c2a47;
const HANDLE = 0x5b7cff;
const HANDLE_TOP = 0x8aa2ff;
const GLASS = shade(0x37e0ff, 0.08);
const TILT_ANGLE = 0.2;

type Tf = (x: number, n: number, y: number) => number[];

/** Box in local coordinates (x along the opening, n towards the room, y up), all six faces. */
function box(buf: GeoBuffer, tf: Tf, x0: number, x1: number, n0: number, n1: number, y0: number, y1: number, side: Color, top: Color, fold: number): void {
  const v = (x: number, n: number, y: number) => tf(x, n, y);
  const quads: [number[], number[], number[], number[], Color][] = [
    [v(x0, n0, y1), v(x1, n0, y1), v(x1, n1, y1), v(x0, n1, y1), top],
    [v(x0, n0, y0), v(x1, n0, y0), v(x1, n1, y0), v(x0, n1, y0), shade(side.getHex(), 0.6)],
    [v(x0, n1, y0), v(x1, n1, y0), v(x1, n1, y1), v(x0, n1, y1), side],
    [v(x0, n0, y0), v(x1, n0, y0), v(x1, n0, y1), v(x0, n0, y1), shade(side.getHex(), 0.85)],
    [v(x0, n0, y0), v(x0, n1, y0), v(x0, n1, y1), v(x0, n0, y1), shade(side.getHex(), 0.92)],
    [v(x1, n0, y0), v(x1, n1, y0), v(x1, n1, y1), v(x1, n0, y1), shade(side.getHex(), 0.92)],
  ];
  for (const [a, b, c, d, col] of quads) {
    buf.tri(a, b, c, col, col, col, undefined, fold);
    buf.tri(a, c, d, col, col, col, undefined, fold);
  }
}

/** Box split at the cut height: the part above folds away with its wall. */
function splitBox(buf: GeoBuffer, tf: Tf, x0: number, x1: number, n0: number, n1: number, y0: number, y1: number, side: Color, top: Color, cut: number, bucket: number): void {
  if (y1 <= cut + 1e-6) return box(buf, tf, x0, x1, n0, n1, y0, y1, side, top, ALWAYS);
  if (y0 >= cut - 1e-6) return box(buf, tf, x0, x1, n0, n1, y0, y1, side, top, bucket);
  box(buf, tf, x0, x1, n0, n1, y0, cut, side, top, ALWAYS);
  box(buf, tf, x0, x1, n0, n1, cut, y1, side, top, bucket);
}

/** Flat quad in a local plane (for glass and slats), split at the cut height, with optional uvs. */
function panel(buf: GeoBuffer, tf: Tf, x0: number, x1: number, n: number, y0: number, y1: number, color: Color, cut: number, bucket: number, vScale = 0): void {
  const part = (ya: number, yb: number, fold: number) => {
    const uv = (y: number) => (vScale ? (y1 - y) / vScale : 0.5);
    const a = tf(x0, n, ya);
    const b = tf(x1, n, ya);
    const c = tf(x1, n, yb);
    const d = tf(x0, n, yb);
    buf.tri(a, b, c, color, color, color, [0, uv(ya), 1, uv(ya), 1, uv(yb)], fold);
    buf.tri(a, c, d, color, color, color, [0, uv(ya), 1, uv(yb), 0, uv(yb)], fold);
  };
  if (y1 <= cut + 1e-6) part(y0, y1, ALWAYS);
  else if (y0 >= cut - 1e-6) part(y0, y1, bucket);
  else {
    part(y0, cut, ALWAYS);
    part(cut, y1, bucket);
  }
}

/** Horizontal quad in local coordinates (x along the opening, n towards the room) at height y. */
function flatPanel(buf: GeoBuffer, tf: Tf, x0: number, x1: number, n0: number, n1: number, y: number, color: Color, fold: number, vScale: number): void {
  const a = tf(x0, n0, y);
  const b = tf(x1, n0, y);
  const c = tf(x1, n1, y);
  const d = tf(x0, n1, y);
  const v0 = 0;
  const v1 = (n1 - n0) / vScale;
  buf.tri(a, b, c, color, color, color, [0, v0, 1, v0, 1, v1], fold);
  buf.tri(a, c, d, color, color, color, [0, v0, 1, v1, 0, v1], fold);
}

export interface OpeningParts {
  frames: BufferGeometry;
  glass: BufferGeometry;
  blinds: BufferGeometry;
  /** Triangle ranges per opening in frames, glass and blinds, for tapping them in 3D. */
  frameTris: { id: string; start: number; end: number }[];
  glassTris: { id: string; start: number; end: number }[];
  blindTris: { id: string; start: number; end: number }[];
}

export function buildOpeningParts(infos: readonly OpeningInfo[], states: ReadonlyMap<string, OpeningState>, cut: number): OpeningParts {
  const frames = new GeoBuffer();
  const glass = new GeoBuffer();
  const blinds = new GeoBuffer(true);
  const frameC = new Color(FRAME);
  const frameTop = new Color(FRAME_TOP);
  const frameTris: OpeningParts["frameTris"] = [];
  const glassTris: OpeningParts["glassTris"] = [];
  const blindTris: OpeningParts["blindTris"] = [];
  for (const info of infos) {
    const fStart = frames.count;
    const gStart = glass.count;
    const bStart = blinds.count;
    const st = states.get(info.opening.id) ?? CLOSED;
    const W = info.width;
    const { sill: S, top: T, bucket } = info;
    // local frame: x from the opening start along the wall, n from the wall axis towards the room
    const tf: Tf = (x, n, y) => [info.start[0] + info.axis[0] * x + info.toRoom[0] * n, y, info.start[1] + info.axis[1] * x + info.toRoom[1] * n];
    const mid = (info.faceRoom - info.faceOut) / 2;
    // highlighted while open, or while closed when the opening asks for it (and a sensor knows)
    const markClosed = info.opening.mark === "closed";
    // a passage (wall opening without a door) shows nothing but the gap in the wall
    const passage = info.opening.type === "door" && openingStyle(info.opening, info.exterior) === "passage";
    if ((info.opening.type === "door" && !passage) || info.opening.type === "garage") {
      // door frame (Zarge) around the opening, covering the reveal on both faces; an open garage door glows warm
      const n0 = -info.faceOut - 0.012;
      const n1 = info.faceRoom + 0.012;
      const garageOpen = info.opening.type === "garage" && (markClosed ? !!st.sensed && (st.cover ?? 1) >= 0.95 : (st.cover ?? 1) < 0.95);
      const frameC = garageOpen ? shade(OPEN_WARM, 0.8) : new Color(FRAME);
      const frameTop = garageOpen ? shade(OPEN_WARM, 1) : new Color(FRAME_TOP);
      splitBox(frames, tf, -0.045, 0.02, n0, n1, 0, T + 0.045, frameC, frameTop, cut, bucket);
      splitBox(frames, tf, W - 0.02, W + 0.045, n0, n1, 0, T + 0.045, frameC, frameTop, cut, bucket);
      splitBox(frames, tf, 0.02, W - 0.02, n0, n1, T - 0.02, T + 0.045, frameC, frameTop, cut, bucket);
    }
    if (info.opening.type === "door") {
      // leaves flush with the face they swing towards (the room, or the other side), turning around
      // their hinges; a double door has a leaf at each end meeting in the middle
      const style = openingStyle(info.opening, info.exterior);
      const front = isFrontDoor(style);
      const s = info.opening.swing === "out" ? -1 : 1;
      const face = s > 0 ? info.faceRoom : -info.faceOut;
      const two = info.opening.leaves === 2;
      // fixed glass beside the leaf (one sidelight opposite the hinge, or one on each side)
      let x0 = 0.02;
      let x1 = W - 0.02;
      const lights = sidelightLayout(W, style, info.hingeAtStart, info.opening);
      if (lights) {
        for (const [a, b] of lights.panels) {
          splitBox(frames, tf, a, a + 0.04, mid - 0.03, mid + 0.03, 0.02, T - 0.02, frameC, frameTop, cut, bucket);
          splitBox(frames, tf, b - 0.04, b, mid - 0.03, mid + 0.03, 0.02, T - 0.02, frameC, frameTop, cut, bucket);
          splitBox(frames, tf, a, b, mid - 0.03, mid + 0.03, 0.02, 0.1, frameC, frameTop, cut, bucket);
          panel(glass, tf, a + 0.04, b - 0.04, mid, 0.1, T - 0.02, GLASS, cut, bucket);
        }
        x0 = lights.x0;
        x1 = lights.x1;
      }
      const lw = two ? (x1 - x0) / 2 - 0.004 : x1 - x0;
      const thick = front ? 0.06 : 0.04;
      if (front) {
        // threshold across the wall, and a small light over the door outside
        splitBox(frames, tf, 0.02, W - 0.02, -info.faceOut - 0.02, info.faceRoom, 0, 0.02, new Color(SILL), frameTop, cut, bucket);
        if (info.exterior) splitBox(frames, tf, W / 2 - 0.08, W / 2 + 0.08, -info.faceOut - 0.1, -info.faceOut, T + 0.1, T + 0.17, shade(OPEN_WARM, 0.55), shade(OPEN_WARM, 0.85), cut, ALWAYS);
      }
      const leaves: [boolean, number][] = passage ? [] : [[info.hingeAtStart, st.open]];
      if (two && !passage) leaves.push([!info.hingeAtStart, st.open2 ?? 0]);
      for (const [atStart, openness] of leaves) {
        const open = Math.min(1, Math.max(0, openness));
        const theta = style === "sliding" ? 0 : open * DOOR_ANGLE;
        // a sliding leaf runs along the wall face past the hinge side instead of turning
        const slide = style === "sliding" ? open * lw : 0;
        const leafTf: Tf = (u, n, y) => {
          const along = u * Math.cos(theta) - n * Math.sin(theta) - slide;
          const nn = face + s * (n * Math.cos(theta) + u * Math.sin(theta) + (slide ? 0.05 : 0));
          return tf(atStart ? x0 + along : x1 - along, nn, y);
        };
        // an open leaf leaves its wall: keep it visible when the wall folds away
        const leafBucket = open > 0.05 ? ALWAYS : bucket;
        const warm = markClosed ? !!st.sensed && open < 0.05 : open > 0.9;
        const leafC = warm ? shade(OPEN_WARM, 0.7) : new Color(front ? LEAF_FRONT : LEAF);
        const leafTop = warm ? shade(OPEN_WARM, 0.9) : new Color(front ? LEAF_FRONT_TOP : LEAF_TOP);
        if (style === "glass") {
          // a glass door: slim stiles and rails around a pane
          splitBox(frames, leafTf, 0, 0.05, -thick, 0, 0.01, T - 0.01, leafC, leafTop, cut, leafBucket);
          splitBox(frames, leafTf, lw - 0.05, lw, -thick, 0, 0.01, T - 0.01, leafC, leafTop, cut, leafBucket);
          splitBox(frames, leafTf, 0.05, lw - 0.05, -thick, 0, 0.01, 0.12, leafC, leafTop, cut, leafBucket);
          splitBox(frames, leafTf, 0.05, lw - 0.05, -thick, 0, T - 0.08, T - 0.01, leafC, leafTop, cut, leafBucket);
          panel(glass, leafTf, 0.05, lw - 0.05, -thick / 2, 0.12, T - 0.08, GLASS, cut, leafBucket);
        } else {
          splitBox(frames, leafTf, 0, lw, -thick, 0, 0.01, T - 0.01, leafC, leafTop, cut, leafBucket);
        }
        if (style === "front_glass") panel(glass, leafTf, 0.12, lw - 0.12, 0.001, T * 0.55, T - 0.18, GLASS, cut, leafBucket);
        else if (front) panel(glass, leafTf, 0.1, 0.18, 0.001, 0.3, T - 0.3, GLASS, cut, leafBucket);
        // handle on both sides: a knob on a room door, a bar on a front door
        const hy = Math.min(1.05, T * 0.5);
        const hh = front ? 0.3 : 0.012;
        const hx0 = front ? lw - 0.11 : lw - 0.16;
        const hx1 = front ? lw - 0.08 : lw - 0.05;
        splitBox(frames, leafTf, hx0, hx1, 0.004, 0.05, hy - hh, hy + hh, new Color(HANDLE), new Color(HANDLE_TOP), cut, leafBucket);
        splitBox(frames, leafTf, hx0, hx1, -thick - 0.05, -thick - 0.004, hy - hh, hy + hh, new Color(HANDLE), new Color(HANDLE_TOP), cut, leafBucket);
      }
    } else if (info.opening.type === "garage") {
      // sectional door: the closed part hangs in the opening, the open part lies under the ceiling
      const closed = Math.min(1, Math.max(0, st.cover ?? 1));
      const panelC = new Color(0xd4e0ff);
      const plane = info.faceRoom - 0.03;
      const bottom = T * (1 - closed);
      if (closed > 0.01) panel(blinds, tf, 0.02, W - 0.02, plane, bottom, T, panelC, cut, bucket, 0.5);
      const up = (1 - closed) * T;
      if (up > 0.01) flatPanel(blinds, tf, 0.02, W - 0.02, plane, plane + up, T + 0.03, panelC, bucket, 0.5);
    } else {
      const fw = 0.06;
      const fd = 0.035;
      // fixed frame in the middle of the wall
      splitBox(frames, tf, 0, fw, mid - fd, mid + fd, S, T, frameC, frameTop, cut, bucket);
      splitBox(frames, tf, W - fw, W, mid - fd, mid + fd, S, T, frameC, frameTop, cut, bucket);
      splitBox(frames, tf, fw, W - fw, mid - fd, mid + fd, S, S + (S > 0.05 ? fw : 0.03), frameC, frameTop, cut, bucket);
      splitBox(frames, tf, fw, W - fw, mid - fd, mid + fd, T - fw, T, frameC, frameTop, cut, bucket);
      // window board inside and sill outside
      if (S > 0.3) {
        splitBox(frames, tf, -0.04, W + 0.04, mid + fd, info.faceRoom + 0.07, S - 0.03, S, new Color(SILL), frameTop, cut, bucket);
        if (info.exterior) splitBox(frames, tf, -0.03, W + 0.03, -info.faceOut - 0.06, mid - fd, S - 0.04, S - 0.02, new Color(SILL), frameTop, cut, bucket);
      }
      // sashes: each rotates into the room around its hinge, or tilts around its bottom edge; a
      // double window (or French door) has two sashes meeting in the middle, each tilting on its own
      const sw = 0.055;
      const sy0 = S + (S > 0.05 ? fw : 0.03);
      const sy1 = T - fw;
      const n0 = mid + fd;
      const n1 = mid + fd + 0.06;
      const two = info.opening.leaves === 2;
      const sashes: { atStart: boolean; x0: number; x1: number; open: number; tilt: number }[] = two
        ? [
            { atStart: info.hingeAtStart, x0: info.hingeAtStart ? fw : W / 2, x1: info.hingeAtStart ? W / 2 : W - fw, open: st.open, tilt: st.tilt },
            { atStart: !info.hingeAtStart, x0: info.hingeAtStart ? W / 2 : fw, x1: info.hingeAtStart ? W - fw : W / 2, open: st.open2 ?? 0, tilt: st.tilt2 ?? 0 },
          ]
        : [{ atStart: info.hingeAtStart, x0: fw, x1: W - fw, open: st.open, tilt: st.tilt }];
      for (const sash of sashes) {
        const ajar = sash.open > 0.02 || sash.tilt > 0.02;
        const alert = markClosed ? !!st.sensed && !ajar : ajar;
        const sashC = alert ? shade(OPEN_WARM, 0.75) : new Color(SASH);
        const sashTop = alert ? shade(OPEN_WARM, 0.95) : frameTop;
        const sx0 = sash.x0;
        const sx1 = sash.x1;
        const sashW = sx1 - sx0;
        const theta = sash.open * OPEN_ANGLE;
        const phi = sash.tilt * TILT_ANGLE;
        // sash coordinates: u from the hinge across the sash, n, y
        const sashTf: Tf = (u, n, y) => {
          const dy = y - sy0;
          let nn = n + dy * Math.sin(phi);
          const yy = sy0 + dy * Math.cos(phi);
          const along = u * Math.cos(theta) - (nn - n0) * Math.sin(theta);
          nn = n0 + (nn - n0) * Math.cos(theta) + u * Math.sin(theta);
          const x = sash.atStart ? sx0 + along : sx1 - along;
          return tf(x, nn, yy);
        };
        // a sash that has swung into the room belongs to no wall: keep it visible
        const sashBucket = theta > 0.05 ? ALWAYS : bucket;
        splitBox(frames, sashTf, 0, sw, n0, n1, sy0, sy1, sashC, sashTop, cut, sashBucket);
        splitBox(frames, sashTf, sashW - sw, sashW, n0, n1, sy0, sy1, sashC, sashTop, cut, sashBucket);
        splitBox(frames, sashTf, sw, sashW - sw, n0, n1, sy0, sy0 + sw, sashC, sashTop, cut, sashBucket);
        splitBox(frames, sashTf, sw, sashW - sw, n0, n1, sy1 - sw, sy1, sashC, sashTop, cut, sashBucket);
        panel(glass, sashTf, sw, sashW - sw, (n0 + n1) / 2, sy0 + sw, sy1 - sw, alert ? shade(OPEN_WARM, 0.16) : GLASS, cut, sashBucket);
        if (openingStyle(info.opening, info.exterior) === "bars") {
          // glazing bars: a cross over the pane
          const ym = (sy0 + sy1) / 2;
          const nm = (n0 + n1) / 2;
          splitBox(frames, sashTf, sw, sashW - sw, nm - 0.012, nm + 0.012, ym - 0.012, ym + 0.012, sashC, sashTop, cut, sashBucket);
          splitBox(frames, sashTf, sashW / 2 - 0.012, sashW / 2 + 0.012, nm - 0.012, nm + 0.012, sy0 + sw, sy1 - sw, sashC, sashTop, cut, sashBucket);
        }
      }
    }
    // blind on the outside: box above the opening, slats down to the closed fraction
    if (st.cover !== null) {
      const out = -info.faceOut;
      const boxTop = T + 0.2;
      splitBox(frames, tf, -0.05, W + 0.05, out - 0.15, out, T, boxTop, new Color(BLIND_BOX), frameTop, cut, bucket);
      const closed = Math.min(1, Math.max(0, st.cover));
      if (closed > 0.01) {
        const bottom = T - closed * (T - S);
        panel(blinds, tf, 0, W, out - 0.07, bottom, T, new Color(0xffffff), cut, bucket, 0.045);
      }
    }
    frameTris.push({ id: info.opening.id, start: fStart, end: frames.count });
    glassTris.push({ id: info.opening.id, start: gStart, end: glass.count });
    blindTris.push({ id: info.opening.id, start: bStart, end: blinds.count });
  }
  return { frames: frames.geometry(), glass: glass.geometry(), blinds: blinds.geometry(), frameTris, glassTris, blindTris };
}
