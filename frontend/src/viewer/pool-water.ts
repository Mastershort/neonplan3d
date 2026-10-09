// Pool Pro: living water over a pool's static surface. A thin sheet glows in the pool light's colour (or
// tinted by the water temperature) with moving caustics while the filter pump runs; a warm shimmer shows the
// heat pump heating; the cover slides over the water as far as it is closed. The sheet only moves while
// frames are drawn (the viewer keeps drawing while a pump runs), so a resting pool costs nothing.

import { AdditiveBlending, BufferGeometry, DoubleSide, Float32BufferAttribute, Group, LineBasicMaterial, LineSegments, Mesh, ShaderMaterial } from "three";
import type { Vec2 } from "../model.ts";
import { clipConvex } from "../geometry/area.ts";
import { triangulate } from "./geo.ts";

export interface PoolPiece {
  id: string;
  floorId: string;
  points: Vec2[];
  /** Water surface height in floor coordinates. */
  y: number;
  color: [number, number, number];
  /** How strongly the water glows (0..1). */
  level: number;
  /** The filter pump runs: the water moves. */
  flow: boolean;
  /** The heat pump heats: a warm shimmer. */
  heat: boolean;
  /** How far the cover is closed (0 open … 1 closed). */
  cover: number;
}

const WATER_VERT = /* glsl */ `
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const WATER_FRAG = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uLevel;
  uniform float uFlow;
  uniform float uHeat;
  varying vec2 vXZ;
  float wave(vec2 p, float t) {
    return sin(p.x * 3.1 + t * 1.3) * sin(p.y * 2.7 - t * 1.1) + 0.5 * sin((p.x + p.y) * 4.3 + t * 1.7);
  }
  void main() {
    float t = uTime * (0.3 + 1.5 * uFlow);
    float c = wave(vXZ, t) + wave(vXZ * 1.7 + 3.0, t * 1.3);
    // bright lines where the waves cross: the caustics of light under moving water
    float caustic = pow(clamp(1.0 - abs(c) * 0.55, 0.0, 1.0), 5.0);
    vec3 col = uColor * uLevel * (0.55 + (0.35 + 0.6 * uFlow) * caustic);
    col += vec3(1.0, 0.42, 0.12) * uHeat * 0.07 * (0.6 + 0.4 * sin(t * 1.7 + vXZ.x * 2.0 + vXZ.y));
    gl_FragColor = vec4(col, 1.0);
  }
`;

const COVER_VERT = WATER_VERT;
const COVER_FRAG = /* glsl */ `
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;

function sheet(points: Vec2[], y: number): BufferGeometry {
  const pos: number[] = [];
  for (const [i, j, k] of triangulate(points)) for (const n of [i, k, j]) pos.push(points[n][0], y, points[n][1]);
  const g = new BufferGeometry();
  g.setAttribute("position", new Float32BufferAttribute(pos, 3));
  return g;
}

/** The pools of one floor as meshes in floor coordinates; `time` is the viewer's shared animation clock. */
export function buildPools(pieces: PoolPiece[], time: { value: number }): Group {
  const group = new Group();
  for (const p of pieces) {
    if (p.points.length < 3) continue;
    const water = new Mesh(
      sheet(p.points, p.y + 0.004),
      new ShaderMaterial({
        uniforms: { uTime: time, uColor: { value: p.color }, uLevel: { value: p.level }, uFlow: { value: p.flow ? 1 : 0 }, uHeat: { value: p.heat ? 1 : 0 } },
        vertexShader: WATER_VERT,
        fragmentShader: WATER_FRAG,
        transparent: true,
        blending: AdditiveBlending,
        depthWrite: false,
        side: DoubleSide,
      }),
    );
    water.renderOrder = 5;
    water.frustumCulled = false;
    group.add(water);
    if (p.cover > 0.02) {
      // the cover rolls along the pool's long side, from its first end
      const xs = p.points.map((q) => q[0]);
      const zs = p.points.map((q) => q[1]);
      const [x0, x1, z0, z1] = [Math.min(...xs), Math.max(...xs), Math.min(...zs), Math.max(...zs)];
      const alongX = x1 - x0 >= z1 - z0;
      const reach = Math.min(1, p.cover);
      const box: Vec2[] = alongX
        ? [[x0 - 0.1, z0 - 0.1], [x0 + (x1 - x0) * reach, z0 - 0.1], [x0 + (x1 - x0) * reach, z1 + 0.1], [x0 - 0.1, z1 + 0.1]]
        : [[x0 - 0.1, z0 - 0.1], [x1 + 0.1, z0 - 0.1], [x1 + 0.1, z0 + (z1 - z0) * reach], [x0 - 0.1, z0 + (z1 - z0) * reach]];
      const part = clipConvex(p.points, box);
      if (part.length >= 3) {
        const cover = new Mesh(
          sheet(part, p.y + 0.03),
          new ShaderMaterial({ uniforms: { uAxis: { value: alongX ? [1, 0] : [0, 1] } }, vertexShader: COVER_VERT, fragmentShader: COVER_FRAG, transparent: true, side: DoubleSide }),
        );
        cover.renderOrder = 6;
        group.add(cover);
        const edge: number[] = [];
        for (let i = 0; i < part.length; i++) {
          const a = part[i];
          const b = part[(i + 1) % part.length];
          edge.push(a[0], p.y + 0.032, a[1], b[0], p.y + 0.032, b[1]);
        }
        const eg = new BufferGeometry();
        eg.setAttribute("position", new Float32BufferAttribute(edge, 3));
        group.add(new LineSegments(eg, new LineBasicMaterial({ color: 0x5b7cff, transparent: true, opacity: 0.6 })));
      }
    }
  }
  return group;
}

/** Frees the meshes of a pool group. */
export function disposePools(group: Group): void {
  for (const c of group.children) {
    (c as Mesh).geometry?.dispose();
    ((c as Mesh).material as { dispose?: () => void } | undefined)?.dispose?.();
  }
  group.clear();
}
