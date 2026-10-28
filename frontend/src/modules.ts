// Module loader: code the shop delivers as a signed pack (not part of this repository) runs inside NeonPlan through
// a small, versioned interface. A module is an ES module whose default export is a `NeonModule`; the backend
// checked its signature and binding like a furniture pack's, so what runs here is what we signed.

import type { Building, Floor, Furniture, OutdoorArea, PoolPipe, PoolPort, Room, Vec2 } from "./model.ts";
import type { PipePlanner } from "./pipe-planner.ts";
import type { HomeAssistant } from "./types.ts";

export type { PipePlanner, WallSpec } from "./pipe-planner.ts";

/** The loader interface this NeonPlan speaks; a module written for a newer one is left alone. */
export const MODULE_API = 1;

/** A spoken question's answer: what to say, and what to show in the house. */
export interface VoiceAnswer {
  /** The answer (shown as a bubble, spoken when `speak` is not false); empty when only something is shown. */
  text?: string;
  /** What is spoken instead of `text` (a short intro before a tour whose stops speak for themselves). */
  spoken?: string;
  speak?: boolean;
  /** Where to fly: a device by its entity, a piece of furniture, a room or a floor. */
  focus?: { entity?: string; furnitureId?: string; roomId?: string; floorId?: string } | null;
  /** Devices that flash in 3D (the open windows, the appliances running). */
  highlight?: string[];
  /** A tour: the view flies to each stop in turn (an open window, a running appliance) and stays a moment; a tap ends it. */
  tour?: { entity?: string; furnitureId?: string; openingId?: string; say?: string }[];
}

/** A piece of furniture or a placed device the house knows, with where it stands. */
export interface SpokenDevice {
  /** The entity, or "furniture:<id>". */
  id: string;
  entity: string | null;
  name: string;
  /** Every name it answers to. */
  names: string[];
  room: string;
  floorId: string;
  roomId: string | null;
  /** Its power sensor, when it has one. */
  power: string | null;
  type: string;
  /** Haushalt Pro: minutes left of its program (a washer, dryer, dishwasher with a time sensor), null without. */
  remaining?: number | null;
  /** A plant with a moisture sensor: whether it is thirsty (null: not a plant, or no sensor). */
  thirsty?: boolean | null;
}

/** Haushalt Pro: a line of "Today in the household" ("Restmüll: morgen", "Waschmaschine: 23 min"). */
export interface SpokenHousehold {
  text: string;
  entity: string | null;
  /** Something to do now (glows in amber). */
  hot: boolean;
}

/** A warning shown in 3D right now (smoke, water, a window open in the rain …). */
export interface SpokenAlert {
  kind: string;
  entity: string;
  /** The sensor's name as Home Assistant has it. */
  name: string;
  /** A module's warning in its own words (the house's own kinds carry none). */
  text?: string;
  room: string | null;
  floorId: string | null;
  roomId: string | null;
}

/** Auto Pro: a car in its parking spot. */
export interface SpokenCar {
  name: string;
  /** The parking spot (furniture id) and its floor. */
  spot: string;
  floorId: string;
  /** Whether the car stands in its spot; `away` names the zone it is in otherwise (null: unknown). */
  present: boolean;
  away: string | null;
  soc: number | null;
  range: number | null;
  rangeUnit: string;
  charging: boolean;
  chargingW: number | null;
  plugged: boolean | null;
  locked: boolean | null;
}

/** Pool Pro: a pool with links. */
export interface SpokenPool {
  name: string;
  floorId: string;
  areaId: string;
  temp: number | null;
  unit: string;
  pumpOn: boolean | null;
  heating: boolean | null;
  ph: { value: number; ok: boolean } | null;
  chlorine: { value: number; unit: string; ok: boolean } | null;
}

/** A door, window, garage door or roof window of the plan, by one of its entities (contact, blind, lock …). */
export interface SpokenOpening {
  /** The opening's id in the plan (for a tour stop). */
  id: string;
  entity: string;
  kind: "door" | "window" | "garage" | "roof_window";
  /** The kind's word in the user's language ("Fenster"), or the roof window's own name. */
  name: string;
  room: string;
  floorId: string;
  roomId: string | null;
  /** As the 3D view shows it: standing open (a sash, a door, a garage door), or only tilted. */
  open: boolean;
  tilted: boolean;
}

/** What a module may ask the host for. */
export interface ModuleHost {
  api: typeof MODULE_API;
  hass(): HomeAssistant;
  building(): Building | null;
  /** The language of the user ("de", "en-GB" …). */
  language(): string;
  /** The devices and furniture of the plan, each with its room. */
  devices(): SpokenDevice[];
  /** The one a sentence names ("die Waschmaschine", "der Fernseher im Wohnzimmer"), by the host's own matching. */
  findDevice(sentence: string): SpokenDevice | null;
  /** The doors and windows of the plan with their rooms, one entry per linked entity (the plan names them better than Home Assistant's contact sensors do). */
  openings(): SpokenOpening[];
  /** The energy balance shown now (W; grid + = import, battery + = discharging; soc %), null without one. */
  energy(): { consumption: number | null; solar: number | null; grid: number | null; battery: number | null; soc: number | null } | null;
  /** Consumers drawing power right now (from the plan's sensors), highest first. */
  consumers(): { id: string; entity: string | null; name: string; watts: number }[];
  /** Haushalt Pro: today's household lines (empty without the Pro, or when nothing is due). */
  household?(): SpokenHousehold[];
  /** The warnings shown right now. */
  alerts?(): SpokenAlert[];
  /** Auto Pro: the cars of the plan (empty without the Pro). */
  cars?(): SpokenCar[];
  /** Pool Pro: the pools with links (empty without the Pro). */
  pools?(): SpokenPool[];
  /** The weather entity the plan uses (null without one). */
  weather?(): string | null;

  // --- the house as a stage: what a module that draws may ask for and do (the 3D view's host has them) ---
  /** The view is dimmed (night, replay): water and cards rest. */
  dimmed?(): boolean;
  /** The user may change the plan (an administrator, not a replay). */
  canEdit?(): boolean;
  /** Changes the plan and saves it (administrators only; a module's card may set a valve the way it really stands). */
  updateBuilding?(mutate: (next: Building) => void): void;
  callService?(domain: string, service: string, data?: Record<string, unknown>): Promise<unknown>;
  /** A fresh id for something new in the plan ("pipe", "port" …). */
  newId?(prefix: string): string;
  /** Where a pool's water stands and where its floor lies (floor coordinates), null for an area that is no pool. */
  waterLevel?(floorId: string, areaId: string): { y: number; floorY: number | null } | null;
  /** The height of the ground at a point outside (floor coordinates: a lawn's surface, the terrain), 0 without one. */
  groundAt?(floorId: string, x: number, z: number): number;
  /** Something the view should show again (a module keeps state of its own, e.g. a target just set). */
  refresh?(): void;
  /** Lays pipes the way the editor's wall view does: walls, node positions, connections through holes (host geometry). */
  plan?: PipePlanner;

  // --- talking to the people in the house (the 3D view's host has them) ---
  /** Listens once with the host's microphone and Assist's speech-to-text; the words, or null (no microphone, nothing said). */
  listen?(onListening?: () => void): Promise<string | null>;
  /** A short note at the bottom of the view ("Durchsage an Kinderzimmer gesendet"). */
  notify?(text: string): void;
  /** The rooms someone is in right now: located people, and presence or motion sensors of the room's area. */
  occupied?(): { floorId: string; roomId: string }[];
  /** The media players of the plan (placed as a device or linked to a piece of furniture), each with its room. */
  /** The plan's speakers; `at` where it stands (floor x, z) and `top` its height above the floor (m). */
  speakers?(): { entity: string; name: string; floorId: string; roomId: string | null; furnitureId?: string; at?: [number, number]; top?: number }[];
}

/**
 * A sheet a module opens over the 3D view – from a room's panel or from the ⭐ menu: a choice at the top, quick
 * choices as chips, a line to type (with the microphone), a few lines of text. The host draws it in its own look
 * and closes it after a chip or a sent line.
 */
export interface ModuleSheet {
  id: string;
  /** An emoji or a short symbol shown on the button that opens it. */
  icon: string;
  title: string;
  /** A choice at the top (which rooms: this one, all of them, where someone is). */
  choice?: { value: string; options: { id: string; label: string }[]; set(v: string): void };
  chips?: { label: string; onTap(): void | Promise<void> }[];
  input?: { placeholder: string; button: string; mic?: boolean; onSubmit(text: string): void | Promise<void> };
  lines?: string[];
}

/** A piece a module adds to the 3D stage; the host draws it with its own means (a module never touches three.js). */
export type ScenePiece =
  | {
      kind: "water";
      id: string;
      floorId: string;
      points: Vec2[];
      /** Water surface height (floor coordinates); `floorY` where the caustics lie (null: only the surface glows). */
      y: number;
      floorY?: number | null;
      color: [number, number, number];
      /** How strongly the water glows (0..1). */
      level: number;
      /** The water moves (a pump runs); a warm shimmer (heating); how far a cover is closed (0 open … 1 closed). */
      flow: boolean;
      heat: boolean;
      cover: number;
    }
  | {
      /** A piece of furniture lit by the module (the pump while it runs, the heat pump while it heats). */
      kind: "glow";
      furnitureId: string;
      color: [number, number, number];
      level: number;
      /** A band of light round the item at mid height instead of its screen. */
      band?: boolean;
      /** Layers: light round the item from its foot (`color`) up to its top (this colour) – a tank warm above, cool below. */
      top?: [number, number, number];
    }
  | {
      /**
       * A line along points (floor coordinates, y above the floor), drawn like the energy cables: a pipe, a loop in
       * the ground. Light runs along it from the first point to the last.
       */
      kind: "line";
      floorId: string;
      points: [number, number, number][];
      /** One colour, or one per point (the colour runs along the line). */
      colors: [number, number, number][];
      /** How fast the light runs, like watts on a cable (0: it rests and glows faintly, 100 slow … 2500 fast). */
      flow: number;
      /** Its width against an energy cable's (1 … 3; a pipe is wider). */
      width?: number;
      /**
       * "flow" (default): a glowing cable with comets like the energy cables. "pipe": a solid pipe in its colour with
       * a dark edge, readable on bright floors, with a soft light running along it while it flows.
       */
      look?: "flow" | "pipe";
      /**
       * "house": shown only in the house view (hidden while a floor is opened); "floor": only while a floor is opened
       * (hidden in the house view); "all" (default): always. Applies to the "pipe" look.
       */
      views?: "all" | "house" | "floor";
    }
  | {
      /**
       * A round symbol marker on a piece of furniture, like the device markers (a technical device's symbol). A tap opens
       * the module's card `card` (unfolds it and flies there), or its sheet `sheet` for a room.
       */
      kind: "marker";
      id: string;
      floorId: string;
      /** The item it sits on; without one it stands at `at` (floor coordinates x, z). */
      furnitureId?: string;
      at?: Vec2;
      /** A tap opens this sheet of the module for the room (as the room panel's button does). */
      sheet?: { roomId: string; id: string };
      /** A 24 × 24 line icon as an SVG path (stroke drawn); without one the `text` alone shows. */
      path?: string;
      /** An emoji as the symbol instead of a line icon (📢). */
      emoji?: string;
      /** The short state under the symbol ("heizt", "3,8 kW"). */
      text?: string;
      name: string;
      /** The colour (0..1) of its glow while active. */
      color?: [number, number, number];
      active?: boolean;
      /** The id of the module's card a tap opens. */
      card?: string;
      /** Height of the marker above the floor (m; default the item's top, 1.2 without an item). */
      y?: number;
    }
  | {
      /** A see-through surface over an area (floor coordinates; y above the floor): a tint on a room's floor, soil under a lawn. */
      kind: "patch";
      floorId: string;
      points: Vec2[];
      y: number;
      color: [number, number, number];
      /** 0 (invisible) … 1 (covering). */
      opacity: number;
      /** Adds light instead of tinting: the surface glows (a heated floor), drawn like light on the floor. */
      glow?: boolean;
    }
  | {
      /** A small label floating at a point (floor coordinates): a value and what it is. */
      kind: "tag";
      id: string;
      floorId: string;
      at: [number, number, number];
      text: string;
      sub?: string;
      /** CSS colour of the value. */
      color?: string;
      /** "house": only in the house view; "floor": only while a floor is opened; "all" (default): always. */
      views?: "all" | "house" | "floor";
    }
  | {
      /** The water in an area's pipes: which pipe carries water now and in what colour (the host draws the pipes). */
      kind: "pipeflow";
      floorId: string;
      areaId: string;
      flows: Record<string, { active: boolean; color: [number, number, number] }>;
    };

/** A row of a module's glass card: a label with its value, coloured, with a position on a scale (0..100) when it has one. */
export interface CardRow {
  label: string;
  value: string;
  color?: string;
  /** Where the value sits on its scale (a marker on a bar), 0..100. */
  at?: number;
  /** A filled bar up to `at` instead of a marker (a tank's temperature). */
  fill?: boolean;
  /** Less important: left out on the tablet level and on narrow screens. */
  minor?: boolean;
}

/** A small value with its label (a cell of a card's grid, a step of its chain). */
export interface CardCell {
  label: string;
  value: string;
  color?: string;
  /** Less important: left out on the tablet level and on narrow screens. */
  minor?: boolean;
}

export interface CardButton {
  label: string;
  title?: string;
  /** Pressed look (a valve open, a light on). */
  on?: boolean;
  onTap(): void;
}

/** A glass card a module shows over a place in the house, drawn by the host like its own cards. */
export interface ModuleCard {
  /** Stable id (the fold state is remembered by it). */
  id: string;
  /** Where it floats: over an outdoor area or over a piece of furniture. */
  anchor: { floorId: string; areaId?: string; furnitureId?: string };
  icon: string;
  title: string;
  /** What is live now ("heizt", "Pumpe läuft"); shown in the head. */
  live?: string;
  /** The live text's colour (a state in plain words: heating orange, a fault red). */
  liveColor?: string;
  /** A state line under the head, larger than the live text: an icon, the state in plain words, since when. */
  status?: { icon?: string; text: string; since?: string; color?: string };
  /** The big number and its colour, and a smaller line beside it; `side` a second value beside it (a COP and its grade). */
  main?: { text: string; color?: string; sub?: string; side?: { text: string; sub?: string; color?: string } };
  /** A chain of values with arrows between them (source → device → supply / return), and a note under it. */
  chain?: { items: CardCell[]; note?: string; noteColor?: string };
  rows?: CardRow[];
  /** Small values in a grid of cells (today's figures). */
  cells?: CardCell[];
  /** A highlighted hint (something worth a look). */
  hint?: { text: string; color?: string };
  /** Plain lines under the rows. */
  lines?: string[];
  /** Groups of chips (ball valves, the six-way valve's positions). */
  chips?: { title: string; items: CardButton[] }[];
  /** The buttons at the bottom (−/+, on/off, open/close …). */
  buttons?: CardButton[];
  /** A small curve under the rows (the last hours), oldest value first, with a caption. */
  spark?: { values: number[]; color?: string; label?: string; minor?: boolean };
}

/** A warning a module raises; the host shows it like its own (banner, pulsing rooms). */
export interface ModuleAlert {
  /** A kind of the module's own ("pool_ph"); used to tell warnings apart. */
  kind: string;
  entity: string;
  /** The banner's text, already in the user's language. */
  text: string;
  color: [number, number, number];
  floorId: string | null;
  roomId: string | null;
}

/** A field a module adds to a form of the editor; the host renders it and writes the value where the module says. */
export type ModuleField =
  | { kind: "heading"; text: string }
  | { kind: "text"; text: string }
  | { kind: "entity"; label: string; value: string | null; auto?: string | null; filter(id: string): boolean; set(v: string | null): void }
  | { kind: "select"; label: string; value: string; options: { id: string; label: string }[]; set(v: string): void }
  | { kind: "check"; label: string; value: boolean; set(v: boolean): void }
  | { kind: "button"; label: string; primary?: boolean; title?: string; onTap(): void }
  /** A list of lines to edit, one per line (sentences, names). */
  | { kind: "lines"; label: string; value: string[]; placeholder?: string; set(v: string[]): void };

/** A pool's pipe as the module's flow logic sees it. */
export interface PipeFlowDevice {
  id: string;
  type: string;
  open?: boolean;
  valve?: string | null;
}
export interface PipeFlowState {
  active: boolean;
  warm: boolean;
  waste: boolean;
}

/**
 * What a module knows about drawing pipes: which way water goes at a part, which connection a line belongs to,
 * what still hangs loose. The host's drawing tools ask these; without a module that answers, the tools stay hidden.
 */
export interface PipeRules {
  /** Which way water goes at a node for a new line ("source" out of it, "sink" into it; null unknown). */
  nodeFlow(node: string, area: Pick<OutdoorArea, "pool">, devices: readonly { id: string; type: string }[]): "source" | "sink" | null;
  /** The connection of a device a line drawn to the device as a whole belongs to. */
  autoPort(type: string, other: "source" | "sink" | null, toWaste: boolean, taken: readonly string[]): string | null;
  /** A pipe turned so the water runs from its source end to its sink end. */
  orientPipe(p: PoolPipe, fromFlow: "source" | "sink" | null, toFlow: "source" | "sink" | null): PoolPipe;
  /** What the drawing still lacks: loose ends, connections without a pipe, pool lines not brought in. */
  issues(area: Pick<OutdoorArea, "pool">, devices: readonly { id: string; type: string }[]): { kind: "loose" | "port" | "feed"; node: string }[];
  /** Whether a pool line ("skimmer", "drain", "inlet", "waste") is already brought into the room. */
  feedDone(area: Pick<OutdoorArea, "pool">, kind: string): boolean;
  /** Where the water flows with the pump running (for the drawing's colours). */
  flow(input: { pipes: readonly PoolPipe[]; ports: readonly PoolPort[]; devices: readonly PipeFlowDevice[]; pumpOn: boolean; heaterOn: boolean; heating: boolean }): Map<string, PipeFlowState>;
  /** The colour of the water in a pipe. */
  waterColor(f: PipeFlowState | undefined): [number, number, number];
}

export interface NeonModule {
  api: number;
  id: string;
  /** Voice: a spoken sentence the host did not understand itself; null leaves it to Assist. */
  voice?(sentence: string, host: ModuleHost): Promise<VoiceAnswer | null> | VoiceAnswer | null;
  /** Example sentences the module understands, in the user's language (shown in the voice settings). */
  help?(language: string): string[];
  /** Entities whose changes the module cares about (the host redraws when one of them changes). */
  watched?(host: ModuleHost): string[];
  /** What the module adds to the 3D stage right now (cheap: called on every change of a watched entity). */
  scene?(host: ModuleHost): ScenePiece[];
  /** The module's glass cards. */
  cards?(host: ModuleHost): ModuleCard[];
  /** The module's warnings. */
  alerts?(host: ModuleHost): ModuleAlert[];
  /** Fields the module adds to an outdoor area's form in the editor (a pool's entities, an assistant). */
  areaFields?(host: ModuleHost, area: OutdoorArea): ModuleField[];
  /** Fields the module adds to a piece of furniture's form in the editor (a device's entities, a setup assistant). */
  furnitureFields?(host: ModuleHost, item: Furniture): ModuleField[];
  /** The module's own settings (the editor's module dialog and the 3D view's ⚙ menu show them under its name). */
  settings?(host: ModuleHost): ModuleField[];
  /** Fields the module adds to a room's form in the editor (a room's own speaker …). */
  roomFields?(host: ModuleHost, room: Room, floor: Floor): ModuleField[];
  /** Sheets a room's panel offers (a button each). */
  roomSheets?(host: ModuleHost, place: { floorId: string; roomId: string }): ModuleSheet[];
  /** Sheets the ⭐ menu offers. */
  menuSheets?(host: ModuleHost): ModuleSheet[];
  /** The module's knowledge about drawing pipes (the host's pipe tools show only with it). */
  pipes?: PipeRules;
  /** Pool Pro: the pools as the voice modules ask for them. */
  pools?(host: ModuleHost): SpokenPool[];
}

interface Loaded {
  id: string;
  release: number;
  module: NeonModule;
}

const loaded = new Map<string, Loaded>();
const loading = new Map<string, Promise<Loaded | null>>();
/** Object URLs of the code, revoked when a module is replaced. */
const urls = new Map<string, string>();

/** Packs that carry a module, as the pack list shows them (the code is fetched apart). */
export interface ModulePack {
  id: string;
  release?: number;
  module?: { api: number; kind: string; approved?: boolean };
}

/** A module whose code an admin still has to read and approve (new, or an update waiting beside the running code). */
export function moduleWaits(pack: { module?: { approved?: boolean }; pending?: unknown }): boolean {
  return !!pack.module && (pack.module.approved !== true || !!pack.pending);
}

async function fetchCode(hass: HomeAssistant, packId: string): Promise<{ code: string; release: number; api: number }> {
  return hass.callWS({ type: "neonplan3d/modules/code", pack_id: packId });
}

async function load(hass: HomeAssistant, pack: ModulePack): Promise<Loaded | null> {
  const got = await fetchCode(hass, pack.id);
  if (got.api !== MODULE_API) return null;
  const url = URL.createObjectURL(new Blob([got.code], { type: "text/javascript" }));
  try {
    const mod = (await import(/* @vite-ignore */ url)) as { default?: NeonModule };
    const module = mod.default;
    if (!module || module.api !== MODULE_API || typeof module.id !== "string") return null;
    const old = urls.get(pack.id);
    if (old) URL.revokeObjectURL(old);
    urls.set(pack.id, url);
    const entry = { id: pack.id, release: got.release, module };
    loaded.set(pack.id, entry);
    return entry;
  } catch (err) {
    URL.revokeObjectURL(url);
    throw err;
  }
}

/**
 * Load the modules of the installed packs (once per pack and release); packs gone are dropped. Errors of one
 * module never stop the others – a broken module is simply not there.
 */
export async function syncModules(hass: HomeAssistant, packs: readonly ModulePack[]): Promise<void> {
  // only code an admin has read and approved runs (HACS review): a module waiting for approval is not loaded
  const wanted = new Map(packs.filter((p) => p.module && p.module.api === MODULE_API && p.module.approved === true).map((p) => [p.id, p]));
  for (const id of [...loaded.keys()]) if (!wanted.has(id)) loaded.delete(id);
  await Promise.all(
    [...wanted.values()].map((p) => {
      const have = loaded.get(p.id);
      if (have && have.release === (p.release ?? 1)) return Promise.resolve(have);
      let job = loading.get(p.id);
      if (!job) {
        job = load(hass, p)
          .catch((err) => {
            console.warn(`NeonPlan 3D: module ${p.id} did not load`, err);
            return null;
          })
          .finally(() => loading.delete(p.id));
        loading.set(p.id, job);
      }
      return job;
    }),
  );
}

/** The loaded modules (for the extensions page and tests). */
export function loadedModules(): readonly { id: string; release: number }[] {
  return [...loaded.values()].map((m) => ({ id: m.id, release: m.release }));
}

/** Example sentences of every loaded module (for the voice settings). */
export function moduleHelp(language: string): string[] {
  const out: string[] = [];
  for (const m of loaded.values()) {
    try {
      out.push(...(m.module.help?.(language) ?? []));
    } catch {
      // a module without a usable help list is simply not listed
    }
  }
  return out;
}

/** Ask the voice modules in turn; the first answer wins. */
export async function moduleVoice(sentence: string, host: ModuleHost): Promise<VoiceAnswer | null> {
  for (const m of loaded.values()) {
    if (!m.module.voice) continue;
    try {
      const answer = await m.module.voice(sentence, host);
      if (answer) return answer;
    } catch (err) {
      console.warn(`NeonPlan 3D: module ${m.id} failed on "${sentence}"`, err);
    }
  }
  return null;
}

/** Everything the loaded modules add to the stage. */
export function moduleScene(host: ModuleHost): ScenePiece[] {
  return collect((m) => m.scene?.(host));
}

export function moduleCards(host: ModuleHost): ModuleCard[] {
  return collect((m) => m.cards?.(host));
}

export function moduleAlerts(host: ModuleHost): ModuleAlert[] {
  return collect((m) => m.alerts?.(host));
}

export function moduleWatched(host: ModuleHost): string[] {
  return collect((m) => m.watched?.(host));
}

export function moduleAreaFields(host: ModuleHost, area: OutdoorArea): ModuleField[] {
  return collect((m) => m.areaFields?.(host, area));
}

export function moduleFurnitureFields(host: ModuleHost, item: Furniture): ModuleField[] {
  return collect((m) => m.furnitureFields?.(host, item));
}

export function moduleRoomFields(host: ModuleHost, room: Room, floor: Floor): ModuleField[] {
  return collect((m) => m.roomFields?.(host, room, floor));
}

export function moduleRoomSheets(host: ModuleHost, place: { floorId: string; roomId: string }): ModuleSheet[] {
  return collect((m) => m.roomSheets?.(host, place));
}

export function moduleMenuSheets(host: ModuleHost): ModuleSheet[] {
  return collect((m) => m.menuSheets?.(host));
}

/** Every loaded module with settings, with its pack id (the 3D view's ⚙ menu lists them). */
export function modulesWithSettings(): string[] {
  return [...loaded.values()].filter((m) => !!m.module.settings).map((m) => m.id);
}

/** The settings of the module loaded from a pack (empty without a module, or one without settings). */
export function moduleSettings(packId: string, host: ModuleHost): ModuleField[] {
  const m = loaded.get(packId);
  if (!m?.module.settings) return [];
  try {
    return m.module.settings(host) ?? [];
  } catch (err) {
    console.warn(`NeonPlan 3D: module ${m.id} failed`, err);
    return [];
  }
}

export function modulePools(host: ModuleHost): SpokenPool[] {
  return collect((m) => m.pools?.(host));
}

/** The pipe rules of the first module that has them (null: no module draws pipes). */
export function modulePipeRules(): PipeRules | null {
  for (const m of loaded.values()) if (m.module.pipes) return m.module.pipes;
  return null;
}

/** Whether any module is loaded (the view then asks it on every change). */
export function anyModule(): boolean {
  return loaded.size > 0;
}

function collect<T>(pick: (m: NeonModule) => T[] | undefined | null): T[] {
  const out: T[] = [];
  for (const m of loaded.values()) {
    try {
      out.push(...(pick(m.module) ?? []));
    } catch (err) {
      console.warn(`NeonPlan 3D: module ${m.id} failed`, err);
    }
  }
  return out;
}

/** For tests: register a module without loading code. */
export function registerModule(module: NeonModule, release = 1): void {
  loaded.set(module.id, { id: module.id, release, module });
}

export function clearModules(): void {
  loaded.clear();
}
