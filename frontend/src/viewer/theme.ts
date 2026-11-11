// Looks of the 3D view. Geometry keeps its neon colours; a small shader patch maps them to the chosen
// look, so switching is instant and nothing has to be rebuilt. Signal colours (lit lamps, open windows,
// glowing screens) are bright and saturated and stay as they are in every look.

import { AdditiveBlending, NormalBlending, Vector3, type Material } from "three";
import { THEMES, type Theme } from "../themes.ts";
import type { StyleDef } from "../looks.ts";

export type { Theme } from "../themes.ts";

export interface ThemeUniform {
  value: number;
  /** The style's shader numbers of this view (several views on a page each keep their own). */
  style?: StyleUniforms;
}

export function themeIndex(theme: Theme): number {
  return THEMES.indexOf(theme);
}

/** The neon look's accent (lines, cyan surfaces): the stock cyan, or a colour of the user's choice. */
export const accentUniform = { value: new Vector3(0.22, 0.88, 1) };
export const accentOnUniform = { value: 0 };

/** Look index of the styles (a palette or natural materials with their realism): driven by `styleUniforms`. */
export const STYLE_LOOK = 3;

/** A fresh set of a style's shader numbers (one per view). */
export function makeStyleUniforms() {
  return {
    uStLine: { value: new Vector3(0.55, 0.57, 0.6) },
    uStDark: { value: new Vector3(0.8, 0.79, 0.76) },
    uStLight: { value: new Vector3(0.98, 0.98, 0.97) },
    uStHue: { value: 0 },
    uStLift: { value: 0.3 },
    uStContrast: { value: 3 },
    uStSignal: { value: 1 },
    uStNatural: { value: 0 },
    uStSun: { value: 0 },
    uStAO: { value: 0 },
    uStDim: { value: 0 },
    uStFloors: { value: 0 },
  };
}
export type StyleUniforms = ReturnType<typeof makeStyleUniforms>;
/** The set of views that bring none of their own. */
export const styleUniforms = makeStyleUniforms();

const hex3 = (h: string): [number, number, number] => {
  const n = parseInt(h.replace("#", ""), 16) || 0;
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
};

/** Puts a style's numbers into the shader (no recompiling, takes effect with the next frame). */
export function applyStyleUniforms(s: StyleDef, u: StyleUniforms = styleUniforms): void {
  const p = s.palette;
  if (p) {
    u.uStLine.value.set(...hex3(p.line));
    u.uStDark.value.set(...hex3(p.dark));
    u.uStLight.value.set(...hex3(p.light));
    u.uStHue.value = p.hue;
    u.uStLift.value = p.lift;
    u.uStContrast.value = p.contrast;
  } else {
    // natural materials: soft grey edges
    u.uStLine.value.set(...hex3(s.base === "neon" ? "#4a4e56" : "#a3a7ad"));
  }
  u.uStSignal.value = s.signal === false ? 0 : 1;
  u.uStNatural.value = s.natural ? 1 : 0;
  u.uStSun.value = s.sun ?? 0;
  u.uStAO.value = s.ao ?? 0;
  u.uStDim.value = s.natural ? (s.dim ?? 0) : 0;
  u.uStFloors.value = s.natural ? (s.floors ?? 0) : 0;
}

/** Where a floor lies in the world, per material (for the darker wall feet and the floor structure). */
export function floorLevelUniform(material: Material): { value: number } {
  const ud = material.userData as { fp3dFloorY?: { value: number } };
  return (ud.fp3dFloorY ??= { value: -1000 });
}

/** "#rrggbb" to the 0–1 colour the shader uses, null for anything else. */
export function parseAccent(hex: string | null | undefined): [number, number, number] | null {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex?.trim() ?? "");
  if (!m) return null;
  const n = parseInt(m[1], 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

const GLSL = `
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
uniform vec3 uStLine;
uniform vec3 uStDark;
uniform vec3 uStLight;
uniform float uStHue;
uniform float uStLift;
uniform float uStContrast;
uniform int uStSignal;
uniform int uStNatural;
uniform float uStSun;
uniform float uStAO;
uniform float uStDim;
uniform float uStFloors;
uniform float uFloorY;
varying vec3 vFp3dWorld;
float fp3dHash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
// the face's normal from the screen-space change of the world position: no normals needed in the geometry
vec3 fp3dFaceNormal() { return normalize(cross(dFdx(vFp3dWorld), dFdy(vFp3dWorld))); }
// light by direction (faces turned away darker, tops brightest) and darker feet of walls and cabinets
float fp3dStyleLight(vec3 n) {
  float k = 1.0;
  if (uStSun > 0.0) k *= 1.0 - uStSun * (0.5 - 0.5 * dot(n, normalize(vec3(-0.45, 0.8, 0.4))));
  if (uStAO > 0.0 && abs(n.y) < 0.5 && uFloorY > -999.0) k *= 1.0 - uStAO * (1.0 - smoothstep(0.0, 0.45, vFp3dWorld.y - uFloorY));
  return k;
}
// floors get their structure from the position alone: planks, tile joints or a fine grain (colours are linear here),
// faded out where a pixel covers more than a few centimetres, so nothing shimmers from afar
float fp3dStyleFloor(vec3 c, vec3 n) {
  if (uStFloors <= 0.0 || uFloorY < -999.0 || n.y < 0.9 || abs(vFp3dWorld.y - uFloorY) > 0.03) return 1.0;
  vec2 p = vFp3dWorld.xz;
  float fade = (1.0 - smoothstep(0.006, 0.04, fwidth(p.x) + fwidth(p.y))) * uStFloors;
  if (fade <= 0.0) return 1.0;
  float mx = max(c.r, max(c.g, c.b));
  float sat = mx > 0.0 ? (mx - min(c.r, min(c.g, c.b))) / mx : 0.0;
  float k;
  if (c.r - c.b > 0.16 && sat > 0.2) {
    float w = 0.19;
    float L = 1.4;
    float row = floor(p.x / w);
    float off = fp3dHash(vec2(row, 3.1)) * L;
    float seed = fp3dHash(vec2(row, floor((p.y + off) / L)));
    float fx = fract(p.x / w) * w;
    float fz = fract((p.y + off) / L) * L;
    float seam = smoothstep(0.0, 0.006, min(fx, w - fx)) * smoothstep(0.0, 0.006, min(fz, L - fz));
    float grain = 0.965 + 0.035 * sin(p.y * 38.0 + seed * 25.0 + sin(p.x * 11.0 + seed * 6.0) * 2.5);
    k = (0.9 + 0.17 * seed) * grain * mix(0.78, 1.0, seam);
  } else if (sat < 0.12 && mx > 0.6) {
    float s = 0.6;
    vec2 f = fract(p / s) * s;
    float seam = smoothstep(0.0, 0.006, min(min(f.x, s - f.x), min(f.y, s - f.y)));
    k = (0.96 + 0.07 * fp3dHash(floor(p / s))) * mix(0.72, 1.0, seam);
  } else {
    k = 0.965 + 0.05 * fp3dHash(floor(p / 0.03));
  }
  return mix(1.0, k, fade);
}
vec3 fp3dThemed(vec3 c, bool line, bool accent) {
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float sat = mx > 0.0 ? (mx - mn) / mx : 0.0;
  if (uTheme == ${STYLE_LOOK}) {
    if (line) return uStLine * clamp(mx * 1.4, 0.55, 1.0);
    // lit lamps, screens, open windows keep their colour – but not the green of plants, which only looks like one
    bool signal = mx > 0.45 && sat > 0.45 && !(c.g > c.r * 1.25 && c.g > c.b * 1.25);
    vec3 n = fp3dFaceNormal();
    if (uStNatural == 1) {
      // neon leftovers the natural palette does not reach (dark navy lamp bodies, small devices) turn neutral grey
      vec3 cc = (mx < 0.2 && c.b > c.r * 2.0 && c.b > c.g * 1.5) ? vec3(0.32 + dot(c, vec3(0.3, 0.59, 0.11)) * 1.4) : c;
      cc *= fp3dStyleLight(n) * fp3dStyleFloor(cc, n);
      // evening: the house dims warm, lit lamps and screens keep their glow
      if (uStDim > 0.0 && !signal) cc *= mix(vec3(1.0), vec3(0.62, 0.52, 0.42), uStDim) * (1.0 - 0.75 * uStDim);
      return cc;
    }
    if (uStSignal == 1 && signal) return c;
    float ll = dot(c, vec3(0.299, 0.587, 0.114));
    vec3 g = mix(uStDark, uStLight, clamp(uStLift + ll * uStContrast, 0.0, 1.0));
    return mix(g, g * (c / max(mx, 0.001)), uStHue) * fp3dStyleLight(n);
  }
  if (uTheme == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    if (accent && uAccentOn == 1 && (line || (sat > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6))) return uAccent * mx;
    return c;
  }
  // signal colours keep their colour
  if (!line && mx > 0.45 && sat > 0.45) return c;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  if (uTheme == 1) {
    // blueprint: white lines on shades of blue
    if (line) return vec3(0.8, 0.9, 1.0) * min(1.0, mx * 1.15);
    return mix(vec3(0.04, 0.13, 0.3), vec3(0.2, 0.42, 0.75), clamp(l * 5.0, 0.0, 1.0));
  }
  // day: light surfaces that keep their shading and some of their hue, dark blue lines (#645: too bright, too flat –
  // the neon surfaces' dark tones are spread wider, so walls, floors and furniture stand apart)
  if (line) return vec3(0.05, 0.11, 0.27) * clamp(mx * 1.6, 0.6, 1.0);
  vec3 g = vec3(clamp(0.28 + l * 3.6, 0.0, 0.92));
  return mix(g, g * (c / max(mx, 0.001)), 0.3);
}
`;

/**
 * Maps a material's colours to the look in `uniform` (0 neon, 1 blueprint, 2 day). Composes with an
 * existing onBeforeCompile (e.g. the fold patch). `line`: edges are mapped as lines. `accent`: false keeps the
 * material's cyan colours from an own accent colour (the floors: a heatmap's cool rooms are cyan, #558).
 */
export function themed<T extends Material>(material: T, uniform: ThemeUniform, line = false, accent = true): T {
  const before = material.onBeforeCompile.bind(material);
  const key = material.customProgramCacheKey.bind(material);
  material.onBeforeCompile = (shader, renderer) => {
    before(shader, renderer);
    shader.uniforms.uTheme = uniform;
    shader.uniforms.uAccent = accentUniform;
    shader.uniforms.uAccentOn = accentOnUniform;
    Object.assign(shader.uniforms, uniform.style ?? styleUniforms);
    shader.uniforms.uFloorY = floorLevelUniform(material);
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nvarying vec3 vFp3dWorld;")
      .replace("#include <project_vertex>", "#include <project_vertex>\nvFp3dWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;");
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", `#include <common>\n${GLSL}`)
      .replace("#include <color_fragment>", `#include <color_fragment>\n  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${line}, ${accent});`);
  };
  material.customProgramCacheKey = () => `${key()}-themed-${line ? "l" : "s"}${accent ? "" : "-na"}`;
  return material;
}

/** Additive glow disappears on light backgrounds: in the day look, lines are drawn normally. */
export function lineBlending(theme: Theme): typeof AdditiveBlending | typeof NormalBlending {
  return theme === "day" ? NormalBlending : AdditiveBlending;
}
