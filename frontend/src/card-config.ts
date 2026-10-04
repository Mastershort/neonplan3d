// Configuration of the dashboard card, shared by the card and its visual editor (a bundle of its own).

import type { Quality, WallMode } from "./viewer/viewer3d.ts";

export interface CardConfig {
  type: string;
  floor?: string;
  height?: number;
  walls?: WallMode;
  /** Pull floors apart in the house view (default true). */
  explode?: boolean;
  quality?: Quality;
  /** Show the performance display (frames per second, draw calls). */
  stats?: boolean;
  /** HTML markers: none | important (default) | all. */
  markers?: "none" | "important" | "all";
  /** Heatmap of the rooms: none | temperature | humidity | co2. */
  heatmap?: "none" | "temperature" | "humidity" | "co2";
  /** Look: neon | blueprint | day. */
  theme?: "neon" | "blueprint" | "day";
  /** Energy values at the top (default true). */
  energy?: boolean;
  /** Power flow lines always on or off; without it the card has its own switch. */
  flows?: boolean;
  /** Tapping a room opens its details (lights, blinds, cameras); default true. */
  room_panel?: boolean;
  /** Fill the screen below the dashboard header instead of a fixed height. */
  fill?: boolean;
  /** Switches in the card: all (true) or a list of walls, floors, temperature, humidity, co2. */
  controls?: boolean | CardControl[];
  /** Room names in 3D (default true). */
  room_names?: boolean;
  /** An opened floor with the floors below it dimmed (default), stacked, or on its own. */
  floor_stack?: "dim" | "stacked" | "single";
  /** A button for full screen (hides the dashboard around the card). */
  fullscreen_button?: boolean;
  /** A button that opens another dashboard or view (its path, e.g. "/lovelace/home"), with an optional label. */
  dashboard?: string;
  dashboard_label?: string;
  /** Small pictures of the floors to switch between them (default: on without a start floor). */
  floor_thumbs?: boolean;
  /** Warnings (smoke, water, alarm, window in the rain) as pulsing rooms and a banner (default true). */
  alerts?: boolean;
  /** Jump to the room of a new warning (default false). */
  alert_jump?: boolean;
  /** Scene and script chips of the selected room (default true). */
  scenes?: boolean;
  /** Motion trail: where motion was reported in the last half hour, with times (default off). */
  motion_trail?: boolean;
  /** Weather outside the house: rain, snow, fog, clouds, sun and moon (default on). */
  weather?: boolean;
  /** The weather entity to use (default: the first one). */
  weather_entity?: string;
  /** Kiosk: seconds without a touch after which the card returns to its start view (0 = never). */
  idle_return?: number;
  /** Kiosk: dim at night – "off", "sun" (sun.sun below the horizon) or a time range "22:00-06:00". */
  night?: string;
  /** Kiosk: after the idle return, turn the view slowly by itself until the next touch. */
  idle_orbit?: boolean;
}

export const CARD_CONTROLS = ["walls", "floors", "temperature", "humidity", "co2"] as const;
export type CardControl = (typeof CARD_CONTROLS)[number];
