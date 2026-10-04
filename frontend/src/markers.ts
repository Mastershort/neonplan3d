// Turns placements and entity states into device markers for the 3D view, and formats short state
// texts shared by markers and the room panel.

import { defaultHeight, entityName, isActive, isUnavailable, kindOf, lightGlow, tempUnit } from "./devices.ts";
import { formatNumber, translate, type I18nKey } from "./i18n.ts";
import { iconSvg, mdiIcon } from "./icons.ts";
import type { Building } from "./model.ts";
import { pointInPolygon } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";
import type { DeviceMarker } from "./viewer/viewer3d.ts";

const t = (hass: HomeAssistant | undefined, key: I18nKey) => translate(hass, key);

/** Short, localised state text for a marker or a panel row. */
export function stateText(hass: HomeAssistant | undefined, st: HassEntity | undefined): string {
  if (!st || isUnavailable(st)) return t(hass, "state_unavailable");
  const a = st.attributes;
  switch (kindOf(st.entity_id)) {
    case "light":
      if (st.state !== "on") return t(hass, "state_off");
      return typeof a.brightness === "number" ? `${Math.round((a.brightness / 255) * 100)} %` : t(hass, "state_on");
    case "switch":
    case "fan":
      return t(hass, st.state === "on" ? "state_on" : "state_off");
    case "cover":
      if (typeof a.current_position === "number" && st.state !== "opening" && st.state !== "closing") return `${a.current_position} %`;
      return translateState(hass, st.state);
    case "climate": {
      const cur = typeof a.current_temperature === "number" ? `${formatNumber(hass, a.current_temperature, 1)} ${hass ? tempUnit(hass) : "°C"}` : null;
      if (st.state === "off") return cur ? `${cur} · ${t(hass, "state_off")}` : t(hass, "state_off");
      return cur ?? translateState(hass, st.state);
    }
    case "media": {
      // what is running: the app (Netflix, YouTube, …), else the title or the input source
      const running = st.state === "playing" || st.state === "paused" || st.state === "on" || st.state === "idle";
      const what = [a.app_name, a.media_title, a.source].find((v) => typeof v === "string" && v) as string | undefined;
      return running && what ? what : translateState(hass, st.state);
    }
    case "lock":
    case "camera":
      return translateState(hass, st.state);
    case "binary": {
      const opening = ["door", "window", "opening", "garage_door"].includes(a.device_class as string);
      if (opening) return t(hass, st.state === "on" ? "state_open" : "state_closed");
      return t(hass, st.state === "on" ? "state_detected" : "state_clear");
    }
    case "sensor": {
      const v = Number(st.state);
      const unit = (a.unit_of_measurement as string | undefined) ?? "";
      // the decimals set in Home Assistant win (a gas meter reads 1234.567 m³)
      const digits = hass?.entities?.[st.entity_id]?.display_precision ?? 1;
      return Number.isFinite(v) ? `${formatNumber(hass, v, digits)}${unit ? ` ${unit}` : ""}` : st.state;
    }
    default:
      return "";
  }
}

function translateState(hass: HomeAssistant | undefined, state: string): string {
  const key = `state_${state}` as I18nKey;
  const s = translate(hass, key);
  return s === key ? state : s;
}

/** Markers for every placed entity that still exists. */
export function buildMarkers(hass: HomeAssistant, building: Building): DeviceMarker[] {
  const out: DeviceMarker[] = [];
  for (const floor of building.floors) {
    for (const pl of floor.placements) {
      const kind = kindOf(pl.entity_id);
      const st = hass.states[pl.entity_id];
      if (!kind || !st) continue;
      const room = floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([pl.x, pl.z], r.points)) ?? null;
      const areaName = room?.area_id ? hass.areas?.[room.area_id]?.name : undefined;
      out.push({
        id: pl.entity_id,
        floorId: floor.id,
        roomId: room?.id ?? null,
        x: pl.x,
        z: pl.z,
        y: pl.y ?? defaultHeight(kind, floor.height, pl.mount ?? null),
        lamp: kind === "light" ? (pl.mount ?? "ceiling") : null,
        model: kind === "camera" ? (pl.mount === "ceiling" ? "camera_ceiling" : "camera_wall") : undefined,
        motion: kind === "camera" ? cameraMotion(hass, pl.entity_id) : undefined,
        fov: pl.fov ?? undefined,
        reach: pl.reach ?? undefined,
        tilt: pl.tilt ?? undefined,
        rotation: pl.rotation ?? 0,
        icon: pl.icon ? mdiIcon(pl.icon) : iconSvg(kind),
        cone: kind === "camera" && pl.cone === false ? false : undefined,
        name: entityName(hass, pl.entity_id, areaName),
        text: stateText(hass, st),
        active: isActive(st),
        unavailable: isUnavailable(st),
        glow: kind === "light" ? lightGlow(st) : null,
        show: pl.marker ?? undefined,
        fixed: !!pl.locked,
      });
    }
  }
  return out;
}

/** Whether a camera's device reports motion or a person right now (its motion/occupancy sensors). */
export function cameraMotion(hass: HomeAssistant, cameraId: string): boolean {
  return cameraMotionSensors(hass, cameraId).some((id) => hass.states[id]?.state === "on");
}

/** The motion, occupancy and presence sensors of a camera's device. */
export function cameraMotionSensors(hass: HomeAssistant, cameraId: string): string[] {
  const device = hass.entities?.[cameraId]?.device_id;
  if (!device) return [];
  return Object.values(hass.entities ?? {})
    .filter((e) => e.device_id === device && e.entity_id.startsWith("binary_sensor."))
    .map((e) => e.entity_id)
    .filter((id) => ["motion", "occupancy", "presence"].includes(String(hass.states[id]?.attributes.device_class)));
}

/** Entity ids placed anywhere in the building (to notice relevant state changes cheaply). */
export function placedEntities(building: Building): string[] {
  return building.floors.flatMap((f) => f.placements.map((p) => p.entity_id));
}

/** Opens Home Assistant's more-info dialog for an entity. */
export function openMoreInfo(from: HTMLElement, entityId: string): void {
  from.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId }, bubbles: true, composed: true }));
}

/** Toggle an entity with its own domain's toggle service (light.toggle, switch.toggle, …). */
export function toggleEntity(hass: HomeAssistant, entityId: string): Promise<unknown> {
  const domain = entityId.slice(0, entityId.indexOf("."));
  return hass.callService(domain, "toggle", { entity_id: entityId });
}
