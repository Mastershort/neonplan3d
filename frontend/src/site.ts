// The property (Grundstück): the main plan with the plans standing beside it (the garage, the garden house) as one
// building for the 3D view – each moved and turned to its place, its ids prefixed with its plan so nothing collides.
// Floors at the same height are drawn as one (the garden house's ground floor beside the house's). Read only: a tap
// on a room maps back to its plan and room.
import type { PlanSite } from "./api.ts";
import type { Building, Floor, RoofSection, Vec2 } from "./model.ts";
import { roofSectionsFromRooms, turnSectionAbout } from "./roof-sections.ts";

/** The separator between a plan's id and the id of one of its pieces in the property view. */
export const SITE_SEP = ":";

/** How far apart (m) two floors may be in height and still be drawn as one. */
const SAME_LEVEL = 0.05;

export interface SitePlan {
  id: string;
  building: Building;
  site: PlanSite | null;
}

/** A piece of the property view back to its plan: "pgarten:werk" → { plan: "pgarten", id: "werk" }; unprefixed: the main plan. */
export function siteOwner(id: string, main: string): { plan: string; id: string } {
  const i = id.indexOf(SITE_SEP);
  return i > 0 ? { plan: id.slice(0, i), id: id.slice(i + 1) } : { plan: main, id };
}

/** A point turned by `rot` degrees (clockwise in the plan, as the editor's "turn 90°") and moved by (x, y). */
export function placePoint(p: Vec2, site: PlanSite): Vec2 {
  const a = (site.rot * Math.PI) / 180;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const r = (v: number) => Math.round(v * 1000) / 1000;
  return [r(p[0] * c - p[1] * s + site.x), r(p[0] * s + p[1] * c + site.y)];
}

/** One plan's floor moved to its place on the property, its ids prefixed. */
export function placeFloor(f: Floor, plan: string, site: PlanSite): Floor {
  const id = (x: string) => `${plan}${SITE_SEP}${x}`;
  const mv = (p: Vec2) => placePoint(p, site);
  const turn = (deg: number | null | undefined) => (((deg ?? 0) + site.rot) % 360 + 360) % 360;
  return {
    ...f,
    id: id(f.id),
    rooms: f.rooms.map((r) => ({ ...r, id: id(r.id), points: r.points.map(mv), start_view: null })),
    openings: f.openings.map((o) => ({ ...o, id: id(o.id), room_id: id(o.room_id), wall: o.wall ? id(o.wall) : o.wall })),
    furniture: f.furniture.map((m) => {
      const [x, z] = mv([m.x, m.z]);
      return { ...m, id: id(m.id), x, z, rotation: turn(m.rotation) };
    }),
    placements: f.placements.map((p) => {
      const [x, z] = mv([p.x, p.z]);
      return { ...p, x, z, rotation: turn(p.rotation) };
    }),
    outdoor: (f.outdoor ?? []).map((a) => ({ ...a, id: id(a.id), points: a.points.map(mv) })),
    walls: (f.walls ?? []).map((w) => ({ ...w, id: id(w.id), a: mv(w.a), b: mv(w.b) })),
    background: null,
    start_view: null,
  };
}

/** A building's roof as sections (an automatic roof is turned into the sections it is made of; none: no roof). */
export function roofSectionsOf(b: Building, prefix = ""): RoofSection[] {
  const roof = b.settings.roof;
  if (!roof || roof.type === "none") return [];
  if (roof.type === undefined || roof.type === "custom") return roof.sections ?? [];
  const made = roofSectionsFromRooms(b, (i) => `${prefix}roof_${i + 1}`);
  return roof.type === "flat" ? made.map((x) => ({ ...x, shape: "flat" as const })) : made;
}

/** A roof section of another plan moved and turned with its building, its id prefixed. */
export function placeSection(sec: RoofSection, plan: string, site: PlanSite): RoofSection {
  const turned = site.rot ? turnSectionAbout(sec, site.rot, [0, 0]) : sec;
  const mv = (p: Vec2): Vec2 => [p[0] + site.x, p[1] + site.y];
  return {
    ...turned,
    id: `${plan}${SITE_SEP}${sec.id}`,
    x0: turned.x0 + site.x,
    x1: turned.x1 + site.x,
    z0: turned.z0 + site.y,
    z1: turned.z1 + site.y,
    pivot: turned.pivot ? mv(turned.pivot) : turned.pivot,
    points: turned.points ? turned.points.map(mv) : turned.points,
  };
}

/**
 * The property as one building: the main plan as it is, every plan standing on it (`site.on`) placed beside it.
 * A floor of another plan joins the main plan's floor at its height, else it is a floor of its own.
 */
export function composeSite(main: Building, others: readonly SitePlan[]): Building {
  const floors: Floor[] = main.floors.map((f) => ({ ...f, rooms: [...f.rooms], openings: [...f.openings], furniture: [...f.furniture], placements: [...f.placements], outdoor: [...(f.outdoor ?? [])], walls: [...(f.walls ?? [])] }));
  for (const p of others) {
    if (!p.site?.on) continue;
    for (const f of p.building.floors) {
      const placed = placeFloor(f, p.id, p.site);
      const same = floors.find((x) => Math.abs(x.elevation - f.elevation) < SAME_LEVEL);
      if (!same) {
        floors.push(placed);
        continue;
      }
      same.rooms.push(...placed.rooms);
      same.openings.push(...placed.openings);
      same.furniture.push(...placed.furniture);
      same.placements.push(...placed.placements);
      same.outdoor.push(...placed.outdoor);
      same.walls = [...(same.walls ?? []), ...(placed.walls ?? [])];
    }
  }
  floors.sort((a, b) => a.elevation - b.elevation);
  // every building keeps its own roof: all of them become sections of one roof (an automatic roof would span the
  // whole property). The main roof's solar fields on its single roof move to its first section.
  const own = roofSectionsOf(main);
  const single = main.settings.roof.type !== "custom" && main.settings.roof.type !== undefined;
  const solar = (main.settings.roof.solar ?? []).map((f) => (single && own[0] && f.face.startsWith("main:") ? { ...f, face: `${own[0].id}:${f.face.slice(5)}` } : f));
  const sections = [...own, ...others.filter((p) => p.site?.on).flatMap((p) => roofSectionsOf(p.building).map((x) => placeSection(x, p.id, p.site!)))];
  const roof = { ...main.settings.roof, type: "custom" as const, sections, solar };
  // the property has no house start view (it would frame the main house only) and no card templates of its own
  return { ...main, floors, card_templates: [], settings: { ...main.settings, start_view: null, roof } };
}
