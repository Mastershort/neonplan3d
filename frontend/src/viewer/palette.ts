// The colours the house is built with: the neon ones (every look recolours them in the shader), or natural
// materials for the "homely" styles (wood floors, light walls, fabric and wood furniture, real wall colours).
// Switching rebuilds the house once; nothing is added per frame.

let natural = false;
let cutTop: number | null = null;
let facade: number | null = null;

/** Natural materials on or off; dark cut wall tops (an architect's section model) and the facade colour with them. Returns whether anything changed. */
export function setNaturalPalette(on: boolean, opts: { cutTop?: number | null; facade?: number | null } = {}): boolean {
  const c = on ? (opts.cutTop ?? null) : null;
  const f = on ? (opts.facade ?? null) : null;
  const changed = on !== natural || c !== cutTop || f !== facade;
  natural = on;
  cutTop = c;
  facade = f;
  return changed;
}

export function naturalPalette(): boolean {
  return natural;
}

/** The colour of cut wall tops in the natural palette (null = light, like the walls). */
export function cutTopColor(): number | null {
  return cutTop;
}

/** The outside of the house in the natural palette (null = the walls' colour). */
export function facadeColor(): number | null {
  return facade;
}

/** A colour table that answers from its natural twin while natural materials are on. */
export function palette<T extends object>(neon: T, nat: T): T {
  return new Proxy(neon, { get: (t, k) => Reflect.get(natural ? nat : t, k) });
}

/** "#rrggbb" to a number, null for anything else. */
export function hexColor(h: unknown): number | null {
  return typeof h === "string" && /^#[0-9a-f]{6}$/i.test(h) ? parseInt(h.slice(1), 16) : null;
}
