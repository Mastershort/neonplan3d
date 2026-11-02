// "Only show while …" (furniture): a piece stands in 3D only while an entity is in a state – the Christmas tree while
// input_boolean.weihnachten is on, the paddling pool while the season sensor says summer. The editor always shows it.
import type { Building, Furniture } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

/** A piece's condition: the entity, and the states it shows in. */
export interface ShowIf {
  entity: string;
  /**
   * The states, separated by commas ("on", "summer, autumn"); "<20" or ">80" compare a number; a "!" before the whole
   * list turns it round (shown in every other state). Empty: shown while the entity is "on".
   */
  state?: string | null;
}

/** Whether the entity's state matches the condition. An entity Home Assistant does not know keeps the piece hidden. */
export function showIfMet(hass: HomeAssistant | undefined, cond: ShowIf): boolean {
  const st = hass?.states[cond.entity]?.state;
  if (st === undefined) return false;
  let spec = (cond.state ?? "").trim();
  const not = spec.startsWith("!");
  if (not) spec = spec.slice(1).trim();
  const wanted = spec ? spec.split(",").map((s) => s.trim()).filter(Boolean) : ["on"];
  const value = Number(st);
  const hit = wanted.some((w) => {
    const cmp = /^([<>]=?)\s*(-?\d+(?:[.,]\d+)?)$/.exec(w);
    if (cmp) {
      if (!Number.isFinite(value) || st.trim() === "") return false;
      const n = Number(cmp[2].replace(",", "."));
      return cmp[1] === "<" ? value < n : cmp[1] === "<=" ? value <= n : cmp[1] === ">" ? value > n : value >= n;
    }
    return st.toLowerCase() === w.toLowerCase();
  });
  return not ? !hit : hit;
}

/** Whether a piece stands in 3D now (no condition: always). */
export function furnitureShown(hass: HomeAssistant | undefined, f: Pick<Furniture, "show_if">): boolean {
  return !f.show_if?.entity || showIfMet(hass, f.show_if);
}

/**
 * Which pieces with a condition are shown now: when this changes, the 3D view draws the furniture again. Only the
 * outcome counts – a sensor whose number changes all the time draws nothing again until a piece comes or goes.
 */
export function showIfSignature(hass: HomeAssistant | undefined, b: Building | null): string {
  if (!b) return "";
  let sig = "";
  for (const f of b.floors) for (const x of f.furniture) if (x.show_if?.entity) sig += `${x.id}:${furnitureShown(hass, x) ? 1 : 0};`;
  return sig;
}
