// The floor's background picture (the plan drawing to trace): stored by its upper left corner, turned about its middle.
import type { Background, Vec2 } from "../model.ts";

const round = (v: number) => Math.round(v * 1000) / 1000;

/**
 * The picture after the floor (or the whole house) turned by 90° with `mv`: its middle goes where `mv` takes it and
 * it turns about that middle, so it stays under the rooms drawn on it. Turning its corner instead let a picture that
 * is not square slide off them (#1124). `aspect` = height / width.
 */
export function turnedBackground(bg: Background, aspect: number, mv: (p: Vec2) => Vec2): Background {
  const h = bg.width * aspect;
  const [mx, mz] = mv([bg.x + bg.width / 2, bg.z + h / 2]);
  return { ...bg, x: round(mx - bg.width / 2), z: round(mz - h / 2), rotation: ((bg.rotation ?? 0) + 90) % 360 };
}
