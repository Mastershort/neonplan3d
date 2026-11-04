// Configuration of the dashboard card, shared by the card and its visual editor (a bundle of its own).

import type { Building, CardTemplate, StartView } from "./model.ts";
import type { Quality, WallMode } from "./viewer/viewer3d.ts";

/** Where the clock sits: a corner, or none. */
export type ClockPos = "off" | "tl" | "tr" | "bl" | "br";

export interface CardConfig {
  type: string;
  /** A card template made in the editor (its id): its options apply, the ones written here win over them. */
  template?: string;
  /** The floor plan shown (its id; default the main plan). Its card templates are the ones `template` names. */
  plan?: string;
  floor?: string;
  /** Start in this room (its id from the editor): a display for one room, e.g. for the kids. */
  room?: string;
  /** Show only these rooms (and outdoor areas, by id): the others, their furniture and devices are left out. One room
   * opens with its panel beside the 3D view. */
  rooms?: string[];
  /** With `rooms`: the tablet stays in them (taps, jumps and floors outside do nothing); false lets one leave. */
  rooms_lock?: boolean;
  /** A start view of this card's own (theta, phi, radius and target as the editor shows them); default: the plan's. */
  start_view?: StartView;
  height?: number;
  walls?: WallMode;
  /** The floor pictures, star, search and eye on the right instead of the left (#285). */
  controls_side?: "left" | "right";
  /** Switching floors keeps the camera (#191). */
  keep_view?: boolean;
  /** 3D lock: the angle stays fixed, a drag moves the view (a wall tablet with children around). */
  angle_lock?: boolean;
  /** Pull floors apart in the house view (default true). */
  explode?: boolean;
  /** A "Cameras" button that opens the camera wall, every camera's live picture (Pro: camera cockpit). */
  camera_wall?: boolean;
  /** The roof lifts and fades while zooming in (default true); false keeps it on the house. */
  roof_fade?: boolean;
  /** Show the roof (default true); false leaves it out altogether, as if the house had none (D601). */
  roof?: boolean;
  /** A plain floor plan: walls, doors and stairs without furniture (default false); the devices stay. */
  plain?: boolean;
  /** The room bar along the bottom: a tile per room with its temperature, lights, open windows (default false). */
  room_bar?: boolean;
  /** The favourites (scenes, scripts, switches) at the front of the room bar (default false). */
  room_bar_favorites?: boolean;
  quality?: Quality;
  /** Show the performance display (frames per second, draw calls). */
  stats?: boolean;
  /** HTML markers: none | important (default) | all. */
  markers?: "none" | "important" | "all" | "room";
  /** How large the device symbols are (default normal). */
  marker_size?: "small" | "normal" | "large";
  /** Every device with an own name shows it under its marker (#156). */
  marker_names?: boolean;
  /** The star with the central menu: all lights / blinds of the floor or house and the favourites (default true, #145). */
  central?: boolean;
  /** The walk through the house at eye height (default on). */
  walk?: boolean;
  /** Fun pack "pets": the animals set up in the extensions show in this card (default on). */
  pets?: boolean;
  /** Fun pack "Halloween": the ghost floats through this card's house too (default on). */
  ghost?: boolean;
  /** Own buttons in the central menu (replace the ones set in the editor): label, icon, action, target, data (D143). */
  buttons?: { label: string; icon?: string; action: "navigate" | "more_info" | "service" | "fire_dom_event"; target?: string; data?: Record<string, unknown> }[];
  /** Heatmap of the rooms: none | temperature | humidity | co2 | values (the numbers at the room names). */
  heatmap?: "none" | "temperature" | "humidity" | "co2" | "values";
  /** Look: neon | blueprint | day. */
  /** The look; "auto" shows Day while the sun is up and Neon at night. */
  theme?: "neon" | "blueprint" | "day" | "auto";
  /** Date and time in a corner of the view (default off). */
  clock?: ClockPos;
  /** Accent colour for the neon look and the card's chips ("#rrggbb"); leave out for the stock cyan. */
  accent?: string;
  /** Energy values at the top (default true). */
  energy?: boolean;
  /** Power flow lines always on or off; without it the card has its own switch. */
  flows?: boolean;
  /** Energy Pro holograms always on or off; without it the card has its own switch. */
  holograms?: boolean;
  /** Tapping a room opens its details (lights, blinds, cameras); default true. */
  room_panel?: boolean;
  /** Fill the screen below the dashboard header instead of a fixed height. */
  fill?: boolean;
  /** Switches in the card: all (true) or a list of walls, floors, temperature, humidity, co2. */
  controls?: boolean | CardControl[];
  /** Start with every bar and overlay hidden (the eye button brings them back); false shows the eye, hidden by default. */
  controls_hidden?: boolean;
  /** Hide every bar and overlay after this many seconds without a touch; a touch shows them again. */
  controls_hide_after?: number;
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
  /** Kamera-Cockpit: the live director – the card shows by itself what happens (events chosen in the settings; default off). */
  director?: boolean;
  /** Voice control: a microphone button – "Show the living room" shows it, other sentences go to Assist (default off). */
  voice?: boolean;
  /** This card's screen name for Assist and the service `neonplan3d.ask`: a sentence that names a screen is only for it. */
  screen?: string;
  /** The Home Assistant area this card's tablet hangs in: sentences without a room ("Lights on") apply there; else the device's setting. */
  voice_area?: string;
  /** Scene and script chips of the selected room (default true). */
  scenes?: boolean;
  /** Motion trail: where motion was reported in the last half hour, with times (default off). */
  motion_trail?: boolean;
  /** Weather outside the house: rain, snow, fog, clouds, sun and moon (default on). */
  weather?: boolean;
  /** The weather entity to use (default: the first one). */
  weather_entity?: string;
  /** Haushalt Pro: the glass card "Today in the household" (bins, post, appliances, plants …; default on). */
  household_card?: boolean;
  /** Pro: a "Time travel" button replays the last 24 hours in the card (read-only). */
  time_travel?: boolean;
  /** How far back the time travel starts: 24 hours (default) or the week ("7d" also on a wall tablet, which else holds two days). */
  time_travel_range?: "24h" | "7d";
  /** Replay speed: one hour in a minute (60), 10 s (360, default), 4 s (900), 1 s (3600) or, over the week, a day in 6 s (14400). */
  time_travel_speed?: 60 | 360 | 900 | 3600 | 14400;
  /** Kiosk: seconds without a touch after which the card returns to its start view (0 = never). */
  idle_return?: number;
  /** Kiosk: dim at night – "off", "sun" (sun.sun below the horizon) or a time range "22:00-06:00". */
  night?: string;
  /** Kiosk: after the idle return, turn the view slowly by itself until the next touch. */
  idle_orbit?: boolean;
}

export const CARD_CONTROLS = ["walls", "floors", "temperature", "humidity", "co2"] as const;
export type CardControl = (typeof CARD_CONTROLS)[number];

/** The template a card names, if the plan has it. */
export function cardTemplate(b: Building | null | undefined, id: string | undefined): CardTemplate | undefined {
  const key = id?.trim();
  const list = b?.card_templates;
  return key ? (list?.find((t) => t.id === key) ?? list?.find((t) => t.aliases?.includes(key))) : undefined;
}

/** What belongs to the dashboard the card sits on, not to its template: its size (a card on a tablet's whole screen),
 * and the floor plan whose template it is. */
export const CARD_OWN: readonly (keyof CardConfig)[] = ["fill", "height", "fullscreen_button", "plan"];

/**
 * The options a card works with: a card that names a template shows the template – only its size comes from the
 * card itself (CARD_OWN: how it sits on that dashboard). Other options left on the card from before are not used: they
 * would keep winning unseen, as `plain: true` from an old card hid the furniture. The template's name is the card's
 * screen name unless the template has one of its own (announcements, "here" in voice control). A card without a
 * template, or with one the plan does not have, keeps its YAML as it is.
 */
export function effectiveConfig(yaml: CardConfig, b: Building | null | undefined): CardConfig {
  const tpl = cardTemplate(b, yaml.template);
  if (!tpl) return yaml;
  const own = Object.fromEntries(CARD_OWN.filter((k) => yaml[k] !== undefined).map((k) => [k, yaml[k]]));
  return { ...tpl.config, ...own, screen: tpl.config.screen || tpl.name, type: yaml.type, template: yaml.template } as CardConfig;
}

/**
 * A template renamed: its id follows the new name (the YAML shown in the editor matches it), the old id stays as an
 * alias so a tablet already set up with it keeps working. Returns the template as it is then.
 */
export function renameTemplate(list: readonly CardTemplate[], id: string, name: string): CardTemplate | undefined {
  const tpl = list.find((t) => t.id === id);
  if (!tpl) return undefined;
  tpl.name = name;
  const taken = list.filter((t) => t !== tpl).flatMap((t) => [t.id, ...(t.aliases ?? [])]);
  const next = templateId(name, taken);
  if (next !== tpl.id) {
    const aliases = [...(tpl.aliases ?? []), tpl.id].filter((a, i, all) => a !== next && all.indexOf(a) === i);
    tpl.id = next;
    tpl.aliases = aliases;
  }
  return tpl;
}

/** The options being edited: the unsent changes of a template that is not live, else what the tablets show. */
export function workingConfig(tpl: CardTemplate): Partial<CardConfig> {
  return tpl.live === false && tpl.draft ? tpl.draft : tpl.config;
}

/** Options edited: live straight to the tablets, else into the draft (a draft equal to what they show is none). */
export function editWorking(tpl: CardTemplate, config: Partial<CardConfig>): void {
  if (tpl.live !== false) {
    tpl.config = config;
    delete tpl.draft;
  } else if (JSON.stringify(config) === JSON.stringify(tpl.config)) delete tpl.draft;
  else tpl.draft = config;
}

/** "Send to the tablets": the draft becomes what they show. */
export function publishDraft(tpl: CardTemplate): void {
  if (tpl.draft) tpl.config = tpl.draft;
  delete tpl.draft;
}

/** Live on or off; switched on, changes not sent yet go out with it. */
export function setLive(tpl: CardTemplate, live: boolean): void {
  if (live) {
    publishDraft(tpl);
    delete tpl.live;
  } else tpl.live = false;
}

/** An id for a new template from its name: lower case, umlauts spelled out, words joined by "_", unique in the plan. */
export function templateId(name: string, taken: readonly string[]): string {
  const base =
    name
      .toLowerCase()
      .replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue")
      .replace(/ß/g, "ss")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "")
      .slice(0, 40) || "vorlage";
  let id = base;
  for (let n = 2; taken.includes(id); n++) id = `${base}_${n}`;
  return id;
}
