// What is going on in a floor plan, at a glance – for the overview of all plans and the warnings from another plan
// (water in the garden house shows while the house is open). Counts from the room tiles; no 3D work.
import { alertSources, findAlerts, type Alert } from "./alerts.ts";
import type { Building } from "./model.ts";
import { roomTiles } from "./room-bar.ts";
import type { HomeAssistant } from "./types.ts";

export interface PlanSummary {
  rooms: number;
  lightsOn: number;
  open: number;
  playing: number;
  /** The mean of the rooms' temperatures (Home Assistant's unit), null without any. */
  temp: number | null;
  /** The warnings of its rooms (a house-wide alarm panel is everyone's, it is not counted per plan). */
  alerts: Alert[];
}

export function planSummary(hass: HomeAssistant, b: Building): PlanSummary {
  const tiles = roomTiles(hass, b, null);
  const temps = tiles.map((t) => t.temp).filter((t): t is number => t !== null);
  const alerts = findAlerts(hass, b, alertSources(hass, b), new Map()).filter((a) => a.roomId !== null);
  return {
    rooms: tiles.length,
    lightsOn: tiles.reduce((n, t) => n + t.lightsOn.length, 0),
    open: tiles.reduce((n, t) => n + t.open, 0),
    playing: tiles.filter((t) => t.playing).length,
    temp: temps.length ? Math.round((temps.reduce((a, t) => a + t, 0) / temps.length) * 10) / 10 : null,
    alerts,
  };
}
