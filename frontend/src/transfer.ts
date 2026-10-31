// Export and import of the building as a JSON file. Without entities, a plan can be shared with others:
// areas, lights, sensors and every other link to this Home Assistant are removed.

import { normalizeBuilding, type Building } from "./model.ts";

export const EXPORT_FORMAT = "neonplan3d";

export interface ExportFile {
  format: typeof EXPORT_FORMAT;
  version: 1;
  exported_at: string;
  building: Building;
}

/** Home Assistant's entity domains: a string "<domain>.<object>" in a plan is a link to this home. */
const DOMAINS = new Set(
  "alarm_control_panel assist_satellite automation binary_sensor button calendar camera climate conversation counter cover date datetime device_tracker event fan group humidifier image input_boolean input_button input_datetime input_number input_select input_text lawn_mower light lock media_player notify number person remote scene script select sensor siren stt sun switch text time timer todo tts update vacuum valve wake_word water_heater weather zone".split(" "),
);
const ENTITY = /^([a-z_]+)\.[a-z0-9_]+$/;
const isEntity = (v: unknown): v is string => typeof v === "string" && DOMAINS.has(ENTITY.exec(v)?.[1] ?? "");

/**
 * Every link to this home, wherever it stands (a lock on a door, the gas meter, the rain sensor, a fan on a lamp,
 * a module's setting): entity ids become null or leave their lists and maps, areas and devices are cleared.
 */
function scrub(v: unknown): unknown {
  if (Array.isArray(v)) return v.filter((x) => !isEntity(x)).map(scrub);
  if (!v || typeof v !== "object") return isEntity(v) ? null : v;
  const o = v as Record<string, unknown>;
  for (const key of Object.keys(o)) {
    if (isEntity(key)) delete o[key];
    else if (/(^|_)(area|area_id|areas|device|device_id|devices)$/.test(key) && o[key] !== null && typeof o[key] !== "boolean" && typeof o[key] !== "number") o[key] = Array.isArray(o[key]) ? [] : null;
    else o[key] = scrub(o[key]);
  }
  return o;
}

/** A copy of the building without any link to entities or areas (background images stay out anyway). */
export function withoutEntities(b: Building): Building {
  const out = scrub(structuredClone(b)) as Building;
  out.energy = { ...out.energy, grid: null, solar: null, battery: null, battery_soc: null, tariff: null };
  out.presence = [];
  for (const f of out.floors) {
    f.placements = [];
    f.background = null;
    f.rooms = f.rooms.map((r) => ({ ...r, area_id: null }));
    f.furniture = f.furniture.map((m) => ({ ...m, entity: null, power: null }));
    f.openings = f.openings.map((o) => ({ ...o, cover: null, contact: null, tilt: null }));
  }
  return out;
}

export function exportFile(b: Building, shareable: boolean): ExportFile {
  return { format: EXPORT_FORMAT, version: 1, exported_at: new Date().toISOString(), building: shareable ? withoutEntities(b) : structuredClone(b) };
}

/** Reads an export file; throws "not_json" or "not_plan" when it is none. */
export function parseExport(text: string): Building {
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("not_json");
  }
  const file = data as Partial<ExportFile>;
  const b = (file?.format === EXPORT_FORMAT ? file.building : data) as Building | undefined;
  if (!b || b.version !== 1 || !Array.isArray(b.floors) || !b.settings) throw new Error("not_plan");
  // background images are not part of an export
  for (const f of b.floors) f.background = null;
  return normalizeBuilding(b);
}

/** Ids of the stored pictures a plan uses: floor backgrounds and screen pictures (not URLs or cameras). */
export function storedImageIds(b: Building): string[] {
  const ids = new Set<string>();
  for (const f of b.floors) {
    if (f.background?.image_id) ids.add(f.background.image_id);
    for (const m of f.furniture) for (const r of m.pictures ?? []) if (r.image && !/^https?:\/\//.test(r.image) && !r.image.startsWith("camera:")) ids.add(r.image);
  }
  return [...ids];
}

/** Starts a download of a text file in the browser. */
export function download(name: string, text: string): void {
  const url = URL.createObjectURL(new Blob([text], { type: "application/json" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
