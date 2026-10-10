// Small pictures of furniture and lamps for the editor's library: one offscreen renderer draws the
// same low-poly models as the 3D view, seen from the front at an angle, into a PNG data URL.

import { Box3, Color, LineBasicMaterial, LineSegments, Mesh, MeshBasicMaterial, OrthographicCamera, Scene, Vector3, WebGLRenderer } from "three";
import type { Furniture } from "../model.ts";
import { packItem, setPacks, type FurniturePack } from "../packs.ts";
import { pushFurniture, pushPackLamp } from "./furniture.ts";
import { GeoBuffer, LineBuffer } from "./geo.ts";
import { pushLampModel, type LampModel } from "./viewer3d.ts";

let renderer: WebGLRenderer | null = null;
const cache = new Map<string, string>();

export interface PreviewItem {
  type: string;
  w: number;
  d: number;
  h: number;
  variant?: string | null;
  /** Lamp model for lamp types (they are drawn by the lamp code, lit). */
  lamp?: LampModel | null;
}

/** The item's model (lamps lit, pack lamps from their parts) in buffers, turned by `rotation` degrees. */
function buildModel(item: PreviewItem, rotation = 0): { buf: GeoBuffer; lines: LineBuffer } {
  const buf = new GeoBuffer();
  const lines = new LineBuffer();
  const packed = packItem(item.type);
  if (packed?.light) {
    pushPackLamp(buf, packed, { x: 0, z: 0, rotation, w: item.w, d: item.d, h: item.h }, 0, 0xffb547);
  } else if (item.lamp) {
    // hanging lamps hang from a ceiling just above them
    pushLampModel(buf, { x: 0, z: 0, size: [item.w, item.d, item.h], base: 0, rotation, variant: item.variant ?? null, lamp: item.lamp }, Math.max(item.h + 0.15, 0.6), 0xffb547);
  } else {
    const f: Furniture = { id: "preview", type: item.type, x: 0, z: 0, rotation, w: item.w, d: item.d, h: item.h, variant: item.variant ?? null, entity: null, power: null };
    pushFurniture(buf, lines, new GeoBuffer(), f);
  }
  return { buf, lines };
}

/** PNG data URL of an item (cached per type and size); `packs` are needed for pack furniture. */
export function furniturePreview(item: PreviewItem, size = 180, packs?: FurniturePack[], brightness = 1.3): string {
  const key = `${item.type}|${item.w}|${item.d}|${item.h}|${item.variant ?? ""}|${size}|${brightness}`;
  const hit = cache.get(key);
  if (hit) return hit;
  if (packs) setPacks(packs);
  renderer ??= new WebGLRenderer({ alpha: true, antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.setSize(size, size, false);
  renderer.setClearColor(0x000000, 0);

  const { buf, lines } = buildModel(item);
  const scene = new Scene();
  // the neon palette is made for a dark room: pictures get a little more light and brighter edges
  const mesh = new Mesh(buf.geometry(), new MeshBasicMaterial({ vertexColors: true, color: new Color(brightness, brightness, brightness) }));
  const edges = new LineSegments(lines.geometry(), new LineBasicMaterial({ vertexColors: true, color: new Color(brightness * 1.8, brightness * 1.8, brightness * 1.8) }));
  scene.add(mesh, edges);

  // look from the front right, a little from above; fit the item's box into the picture
  const box = new Box3().setFromObject(mesh);
  const center = box.getCenter(new Vector3());
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0.01, 100);
  camera.position.copy(center).add(new Vector3(0.9, 0.75, 1.3).normalize().multiplyScalar(20));
  camera.lookAt(center);
  camera.updateMatrixWorld();
  // the camera looks at the centre: the corners' distances in view space give the picture's extent
  let r = 0.05;
  for (const x of [box.min.x, box.max.x])
    for (const y of [box.min.y, box.max.y])
      for (const z of [box.min.z, box.max.z]) {
        const p = new Vector3(x, y, z).applyMatrix4(camera.matrixWorldInverse);
        r = Math.max(r, Math.abs(p.x), Math.abs(p.y));
      }
  const pad = r * 1.12;
  camera.left = -pad;
  camera.right = pad;
  camera.top = pad;
  camera.bottom = -pad;
  camera.updateProjectionMatrix();
  renderer.render(scene, camera);
  const url = renderer.domElement.toDataURL("image/png");

  mesh.geometry.dispose();
  (mesh.material as MeshBasicMaterial).dispose();
  edges.geometry.dispose();
  (edges.material as LineBasicMaterial).dispose();
  cache.set(key, url);
  return url;
}

export interface FrontPicture {
  url: string;
  /** What the picture covers, in metres: across (x, from the item's centre, right as seen) and up from its base (y). */
  x0: number;
  x1: number;
  y0: number;
  y1: number;
}

/**
 * The item seen straight from the front without perspective (the wall view): `rotation` is its turn relative
 * to the viewer (0 = its front faces the viewer), the picture covers exactly the model's extent at `pxPerM`.
 */
export function furnitureFront(item: PreviewItem, rotation: number, pxPerM = 160, packs?: FurniturePack[], brightness = 1.25): FrontPicture | null {
  const key = `front|${item.type}|${item.w}|${item.d}|${item.h}|${item.variant ?? ""}|${Math.round(rotation)}|${pxPerM}|${brightness}`;
  const hit = frontCache.get(key);
  if (hit) return hit;
  if (packs) setPacks(packs);
  const { buf, lines } = buildModel(item, rotation);
  const mesh = new Mesh(buf.geometry(), new MeshBasicMaterial({ vertexColors: true, color: new Color(brightness, brightness, brightness) }));
  const edges = new LineSegments(lines.geometry(), new LineBasicMaterial({ vertexColors: true, color: new Color(brightness * 1.8, brightness * 1.8, brightness * 1.8) }));
  const box = new Box3().setFromObject(mesh);
  if (box.isEmpty()) return null;
  const x0 = box.min.x;
  const x1 = box.max.x;
  const y0 = Math.max(0, box.min.y);
  const y1 = box.max.y;
  const w = Math.max(1, Math.min(1024, Math.round((x1 - x0) * pxPerM)));
  const h = Math.max(1, Math.min(1024, Math.round((y1 - y0) * pxPerM)));
  renderer ??= new WebGLRenderer({ alpha: true, antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(1);
  renderer.setSize(w, h, false);
  renderer.setClearColor(0x000000, 0);
  const scene = new Scene();
  scene.add(mesh, edges);
  // straight from the front (+z), the box exactly in the picture
  const camera = new OrthographicCamera(x0, x1, y1, y0, 0.01, 100);
  camera.position.set(0, 0, 50);
  camera.lookAt(0, 0, 0);
  camera.updateProjectionMatrix();
  renderer.render(scene, camera);
  const url = renderer.domElement.toDataURL("image/png");
  mesh.geometry.dispose();
  (mesh.material as MeshBasicMaterial).dispose();
  edges.geometry.dispose();
  (edges.material as LineBasicMaterial).dispose();
  const out = { url, x0, x1, y0, y1 };
  frontCache.set(key, out);
  return out;
}

const frontCache = new Map<string, FrontPicture>();
