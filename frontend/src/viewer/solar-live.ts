// Energie Pro: the solar modules come alive. A thin overlay on every module shows its cells and a band of
// light sweeping down towards the eave, brighter and faster the more the field produces.

import { AdditiveBlending, BufferGeometry, DoubleSide, Float32BufferAttribute, MeshBasicMaterial } from "three";
import type { SolarField } from "../model.ts";
import { fieldModules, type RoofFace } from "../solar.ts";

/** Vertex range of a field in the overlay geometry (its level is written there). */
export interface SolarRange {
  id: string;
  start: number;
  count: number;
}

export interface SolarLive {
  geometry: BufferGeometry;
  ranges: SolarRange[];
}

/** Overlay quads of all modules of the given fields, a hair above the glass, lowered by `dy` into local coordinates. */
export function buildSolarLive(entries: readonly { face: RoofFace; field: SolarField }[], dy: number): SolarLive | null {
  const p: number[] = [];
  const uv: number[] = [];
  const cells: number[] = [];
  const phase: number[] = [];
  const ranges: SolarRange[] = [];
  for (const { face, field } of entries) {
    const start = p.length / 3;
    const cu = field.portrait === false ? 10 : 6;
    const cv = field.portrait === false ? 6 : 10;
    // every field sweeps on its own rhythm
    const ph = (hash(field.id) % 1000) / 1000;
    for (const m of fieldModules(face, field)) {
      const [a, c, d, e] = m.corners.map((q) => [q[0] + face.n[0] * 0.006, q[1] + face.n[1] * 0.006 - dy, q[2] + face.n[2] * 0.006]);
      const quad = [
        [a, 0, 0],
        [c, 1, 0],
        [d, 1, 1],
        [e, 0, 1],
      ] as const;
      for (const i of [0, 1, 2, 0, 2, 3]) {
        const [pos, u, v] = quad[i];
        p.push(pos[0], pos[1], pos[2]);
        uv.push(u, v);
        cells.push(cu, cv);
        phase.push(ph);
      }
    }
    const count = p.length / 3 - start;
    if (count) ranges.push({ id: field.id, start, count });
  }
  if (!p.length) return null;
  const g = new BufferGeometry();
  g.setAttribute("position", new Float32BufferAttribute(p, 3));
  g.setAttribute("uv", new Float32BufferAttribute(uv, 2));
  g.setAttribute("aCells", new Float32BufferAttribute(cells, 2));
  g.setAttribute("aPhase", new Float32BufferAttribute(phase, 1));
  g.setAttribute("aLevel", new Float32BufferAttribute(new Float32Array(p.length / 3), 1));
  return { geometry: g, ranges };
}

/** Write the fields' levels (0..1) into the overlay; returns true when any module is alive. */
export function writeSolarLevels(live: SolarLive, levels: ReadonlyMap<string, number>): boolean {
  const attr = live.geometry.getAttribute("aLevel") as Float32BufferAttribute;
  const arr = attr.array as Float32Array;
  let alive = false;
  for (const r of live.ranges) {
    const level = Math.min(1, Math.max(0, levels.get(r.id) ?? 0));
    arr.fill(level, r.start, r.start + r.count);
    if (level > 0.02) alive = true;
  }
  attr.needsUpdate = true;
  return alive;
}

/** The overlay material: cell lines and the sweeping band, driven by the shared flow clock (seconds). */
export function solarLiveMaterial(time: { value: number }): MeshBasicMaterial {
  const m = new MeshBasicMaterial({ transparent: true, blending: AdditiveBlending, depthWrite: false, side: DoubleSide, forceSinglePass: true });
  m.onBeforeCompile = (shader) => {
    shader.uniforms.uFlowTime = time;
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nattribute vec2 aCells;\nattribute float aLevel;\nattribute float aPhase;\nvarying vec2 vCells;\nvarying float vLevel;\nvarying float vPhase;\nvarying vec2 vLiveUv;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvCells = aCells;\nvLevel = aLevel;\nvPhase = aPhase;\nvLiveUv = uv;");
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", "#include <common>\nuniform float uFlowTime;\nvarying vec2 vCells;\nvarying float vLevel;\nvarying float vPhase;\nvarying vec2 vLiveUv;")
      .replace(
        "#include <color_fragment>",
        `#include <color_fragment>
        // the cell borders of the module
        vec2 fp3dG = abs(fract(vLiveUv * vCells) - 0.5);
        float fp3dLine = smoothstep(0.455, 0.5, max(fp3dG.x, fp3dG.y));
        // a band of light sweeping down the module towards the eave, faster with more power
        float fp3dSweep = exp(-fract(vLiveUv.y * 1.3 + uFlowTime * (0.12 + 0.3 * vLevel) + vPhase) * 4.0);
        // a second, faint band crossing the other way keeps the picture alive
        float fp3dBack = 0.35 * exp(-fract(vLiveUv.x * 0.9 - uFlowTime * 0.07 + vPhase * 2.0) * 6.0);
        // the cells glow softly, their borders light up as the band passes
        float fp3dGlow = vLevel * (0.07 + 0.32 * fp3dSweep + 0.10 * fp3dBack) + fp3dLine * vLevel * (0.35 + 0.9 * fp3dSweep);
        vec3 fp3dAmber = vec3(1.0, 0.76, 0.30);
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`,
      );
  };
  m.customProgramCacheKey = () => "fp3d-solar-live";
  return m;
}

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619) >>> 0;
  return h;
}
