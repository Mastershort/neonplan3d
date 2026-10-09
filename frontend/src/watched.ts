// The entities whose state changes redraw the 3D view (markers, cables, openings, warnings, weather …).
// Shared by the view (it compares them on every update) and the time travel (it fetches their history).

import { carWatched, kindOf, areaEntities, robotRoomSensor, type FurnitureLinks, type OpeningEntities } from "./devices.ts";
import { poolWatched } from "./pool.ts";
import { powerSensorFor } from "./energy.ts";
import { hasFeature } from "./features.ts";
import { cameraMotionSensors, placedEntities } from "./markers.ts";
import type { Building } from "./model.ts";
import { parkingEntities } from "./parking.ts";
import { trailSources } from "./trail.ts";
import type { HomeAssistant } from "./types.ts";
import { weatherEntity } from "./weather.ts";

export interface WatchLinks {
  /** Entities of each door and window. */
  openings: Map<string, OpeningEntities>;
  /** Entities of electric furniture (TV, fridge, …). */
  furniture: Map<string, FurnitureLinks>;
  /** The heatmap or the room values need the sensors of every room's area. */
  heat: boolean;
  /** Entities of the warnings (smoke, water, alarm, rain). */
  warnings: string[];
  /** The weather entity chosen for this view (null: the plan's, else the first). */
  weatherEntityId: string | null;
}

/** Every entity the view watches, each once, in a stable order. */
export function watchedEntities(hass: HomeAssistant, b: Building, w: WatchLinks): string[] {
  const links = [...w.openings.values()].flatMap((e) => [e.cover, e.contact, e.tilt, e.contact2 ?? null, e.tilt2 ?? null, e.position ?? null, e.tiltAngle ?? null]);
  const placed = placedEntities(b);
  const cameraSensors = placed.filter((id) => kindOf(id) === "camera").flatMap((id) => cameraMotionSensors(hass, id));
  const power = placed.map((id) => powerSensorFor(hass, id));
  const e = b.energy;
  const presence = b.presence.flatMap((p) => [p.person, p.sensor]);
  const lights = b.floors.flatMap((f) => f.rooms.flatMap((r) => areaEntities(hass, r.area_id).filter((id) => kindOf(id) === "light")));
  const furniture = [...w.furniture.values()].flatMap((l) => [l.entity, l.power]);
  const states = b.floors.flatMap((f) => f.furniture.flatMap((m) => [m.state_entity ?? null, m.state_entity2 ?? null, m.color_entity ?? null]));
  const doors = b.floors.flatMap((f) => f.furniture.flatMap((m) => [m.door_left ?? null, m.door_right ?? null, m.soc ?? null, m.status ?? null, m.charge ?? null, m.export ?? null]));
  const roofWindowIds = (b.settings.roof?.windows ?? []).flatMap((x) => [x.cover, x.contact, x.tilt]).filter((x): x is string => !!x && x !== "none");
  // the solar fields' and strings' sensors feed the roof cables
  const solarIds = [...(b.settings.roof?.solar ?? []).map((f) => f.entity), ...(b.settings.roof?.strings ?? []).map((s) => s.entity)].filter((x): x is string => !!x && x !== "none");
  const robotRooms = b.floors.flatMap((f) => f.furniture.filter((m) => m.type === "robot_vacuum").map((m) => robotRoomSensor(hass, w.furniture.get(m.id)?.entity ?? null, m.room_sensor)));
  const pictureRules = b.floors.flatMap((f) => f.furniture.flatMap((m) => (m.pictures ?? []).flatMap((r) => [r.entity, ...(r.image.startsWith("camera:") ? [r.image.slice(7)] : [])])));
  const heat = w.heat ? b.floors.flatMap((f) => f.rooms.flatMap((r) => areaEntities(hass, r.area_id).filter((id) => id.startsWith("sensor.")))) : [];
  const parking = [...parkingEntities(b.floors), ...(hasFeature("auto_pro") ? carWatched(hass, b.floors) : []), ...(hasFeature("pool") ? poolWatched(hass, b.floors) : [])];
  const motion = trailSources(hass, b).map((s) => s.entity);
  const weather = weatherEntity(hass, w.weatherEntityId ?? b.settings.weather_entity);
  const all = [...placed, ...cameraSensors, ...links, ...power, ...furniture, ...states, ...doors, ...robotRooms, ...roofWindowIds, ...solarIds, ...pictureRules, e.grid, e.solar, e.battery, e.battery_soc, e.consumption, e.tariff, ...presence, ...lights, ...heat, ...w.warnings, ...parking, ...motion, weather, "sun.sun"];
  return [...new Set(all.filter((id): id is string => !!id))];
}
