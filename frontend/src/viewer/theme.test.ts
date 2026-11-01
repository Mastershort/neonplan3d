import assert from "node:assert/strict";
import { test } from "node:test";
import { MeshBasicMaterial, type WebGLProgramParametersWithUniforms, type WebGLRenderer } from "three";
import { themed } from "./theme.ts";

function compile(m: MeshBasicMaterial): string {
  const shader = { uniforms: {}, vertexShader: "", fragmentShader: "#include <common>\n#include <color_fragment>" } as unknown as WebGLProgramParametersWithUniforms;
  m.onBeforeCompile(shader, {} as WebGLRenderer);
  return shader.fragmentShader;
}

test("floors keep their colours from an own accent colour, other surfaces take it (#558)", () => {
  const uniform = { value: 0 };
  const surface = themed(new MeshBasicMaterial(), uniform);
  const floor = themed(new MeshBasicMaterial(), uniform, false, false);
  assert.match(compile(surface), /fp3dThemed\(diffuseColor\.rgb, false, true\)/);
  assert.match(compile(floor), /fp3dThemed\(diffuseColor\.rgb, false, false\)/);
  // two different programs
  assert.notEqual(surface.customProgramCacheKey(), floor.customProgramCacheKey());
});
