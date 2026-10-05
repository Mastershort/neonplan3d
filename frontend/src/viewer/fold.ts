// Shader patch that shows or hides wall parts on the GPU. Geometry carries a "fold" attribute (see
// build.ts); per floor, one bit mask says which wall buckets stand (the others are cut) and another
// which buckets are drawn as glass. Hidden vertices are moved outside the clip volume, so their
// triangles and lines are dropped before rasterising.
//
// Roles: "plain" (lines, window and door parts) only follows standing/cut; "solid" (walls) also leaves
// out glass buckets; "glass" draws only the wall parts of glass buckets, as tinted glass.

import type { Material } from "three";

export interface FoldMask {
  value: number;
}

export interface FoldMasks {
  standing: FoldMask;
  glass: FoldMask;
}

export type FoldRole = "plain" | "solid" | "glass";

export function makeFoldable<T extends Material>(material: T, masks: FoldMasks, role: FoldRole = "plain"): T {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uStanding = masks.standing;
    shader.uniforms.uGlass = masks.glass;
    shader.vertexShader = shader.vertexShader.replace("#include <common>", "#include <common>\nattribute float fold;\nuniform int uStanding;\nuniform int uGlass;").replace(
      "#include <project_vertex>",
      `#include <project_vertex>
      {
        bool fp3dShow = ${role === "glass" ? "false" : "true"};
        if (fold > -0.5) {
          int fp3dFold = int(fold + 0.5);
          int fp3dKind = fp3dFold / 16;
          int fp3dBucket = fp3dFold - fp3dKind * 16;
          bool fp3dStanding = ((uStanding >> fp3dBucket) & 1) == 1;
          bool fp3dGlass = ((uGlass >> fp3dBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height, 4 furniture above the cut
          fp3dShow = fp3dKind == 0 || fp3dKind == 4 ? fp3dStanding : fp3dKind == 1 || fp3dKind == 3 ? !fp3dStanding : true;
          bool fp3dWall = fp3dKind == 0 || fp3dKind == 2;
          ${role === "solid" ? "if (fp3dGlass && fp3dWall) fp3dShow = false;" : ""}
          ${role === "glass" ? "fp3dShow = fp3dShow && fp3dGlass && fp3dWall;" : ""}
        }
        if (!fp3dShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`,
    );
    if (role === "glass") {
      // dark walls become a faint cyan-tinted glass
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <color_fragment>",
        `#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`,
      );
    }
  };
  material.customProgramCacheKey = () => `fp3d-fold-${role}`;
  return material;
}
