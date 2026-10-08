// Time travel: what the main bundle and the lazily loaded time travel bundle share (types only).

import type { FurnitureLinks, OpeningEntities } from "../devices.ts";
import type { Building } from "../model.ts";
import type { HistoryRow } from "../trail.ts";
import type { HomeAssistant } from "../types.ts";

/** What the 3D view shows and how its doors, windows and furniture are linked (for the history and events). */
export interface HistorySpec {
  entities: string[];
  openings: [string, OpeningEntities][];
  furniture: [string, FurnitureLinks][];
  /** The view runs at the tablet level (fewer updates per second). */
  low: boolean;
  /** The cars' own trackers (Auto Pro): replayed as home or away only, never a place. */
  cars?: string[];
  /** Pro add-ons the owner has: Energie Pro (energy in the summaries and events), Auto Pro. */
  energy?: boolean;
  auto?: boolean;
}

/** The moment the view replays; handed to the 3D view (the same object for the whole session). */
export interface ReplayInfo {
  /** The replayed moment (ms). */
  t: number;
  /** Counts jumps (scrubbing, events): doors and blinds stand at once instead of moving there. */
  seek: number;
  /** History rows (as Home Assistant's history answers them) of some entities between two moments. */
  rows(ids: readonly string[], from: number, to: number): Record<string, HistoryRow[]>;
  /**
   * Called on every tick and jump (also when no replayed state changed), for what follows the clock:
   * the motion trail, a camera's detections, the "now" mark of a day curve. Returns the unsubscribe.
   */
  listen(fn: () => void): () => void;
  /** Entities that went on and back off between the last two ticks (too short to see): they flash. */
  pulses: readonly string[];
  /** An entity the view should show (an event was tapped, or the camera follows the events), counted by focusSeq. */
  focus: string | null;
  focusSeq: number;
  /** Five-minute means of some sensors between two moments (for a day curve of the replayed day). */
  stats(ids: readonly string[], from: number, to: number): Record<string, { start: number; mean: number }[]>;
  /** The rooms a robot vacuum has cleaned in its run at the replayed moment, in order (names as its sensor reports them). */
  robotRooms(vacuum: string, sensor: string | null): string[];
  /** The view's quality changed (the replay ticks as often as the quality allows). */
  setQuality(quality: "auto" | "low" | "high", low: boolean): void;
}

export type Speed = 60 | 360 | 900 | 3600 | 14400;

/** How far back the time travel reaches. */
export type Range = "24h" | "7d";

export interface StartOptions {
  live: HomeAssistant;
  building: Building;
  spec: HistorySpec;
  quality: "auto" | "low" | "high";
  speed?: number | null;
  /** The card's time_travel_range: "7d" offers the week also at the tablet level. */
  range?: Range | null;
  /** Where to start: a moment (ms) or a link's text ("07:42", "-3h"); null: an hour ago. */
  at?: number | string | null;
  /** Texts in the user's language (the bundle has no texts of its own). */
  t: (key: string, vars?: Record<string, string | number>) => string;
  /** The replayed states or the session changed: the host renders again. */
  onChange: () => void;
  /** The user went back to live. */
  onExit: () => void;
}

export interface TimeTravelSession {
  /** Home Assistant as it was at the replayed moment (null while the history loads). */
  readonly hass: HomeAssistant | null;
  readonly replay: ReplayInfo;
  /** Playback runs (an idle return leaves an unattended replay alone). */
  readonly playing: boolean;
  /** The live Home Assistant changed (registry, language): the replay follows. */
  setLive(hass: HomeAssistant): void;
  exit(): void;
  dispose(): void;
}
