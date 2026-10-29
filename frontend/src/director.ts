// Live director (Kamera-Cockpit): a wall tablet shows by itself what happens in the house. The doorbell rings and
// the view flies to the front door and looks through its camera; a camera sees someone; the washer is done; a
// warning comes up. After a while the view goes back to where it was. Nothing of it is on unless switched on, per
// event in the house settings and per screen (card option or this device's switch).

import type { BuildingSettings } from "./model.ts";
import { entityAreaId } from "./devices.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

export type DirectorSettings = NonNullable<BuildingSettings["director"]>;
export type ShotKind = "alert" | "doorbell" | "trigger" | "motion" | "appliance";

/** What the view is to show. */
export interface Shot {
  kind: ShotKind;
  /** One per source: a doorbell, a camera, an appliance, a warning. */
  key: string;
  /** The entity it is about (shown when there is no camera to look through). */
  entity: string;
  /** The camera to look through (doorbell, motion). */
  camera?: string | null;
}

/** Seconds a shot stays before the view goes back (default), and the bounds of the setting. */
export const HOLD_DEFAULT = 30;
export const HOLD_MIN = 10;
export const HOLD_MAX = 600;

/** Which shot wins when two come at once (higher first). */
const PRIORITY: Record<ShotKind, number> = { alert: 3, doorbell: 2, trigger: 1.5, motion: 1, appliance: 0 };
/** The same source again within this time is not shown again (ms). */
const COOLDOWN: Record<ShotKind, number> = { alert: 0, doorbell: 20_000, trigger: 30_000, motion: 120_000, appliance: 60_000 };
/** A touch this recent means someone uses the screen: only warnings and the doorbell take the view from them (ms). */
const BUSY_MS = 20_000;

/** An appliance counts as finished after resting this long (a washer pauses while it soaks; ms). */
export const STOP_MS = 3 * 60_000;

const DEAD = new Set(["unavailable", "unknown", ""]);

/** The device's local switch (a panel on a wall tablet; the card has its option `director`). */
const LOCAL_KEY = "neonplan3d.director";

export function directorOnHere(): boolean {
  try {
    return localStorage.getItem(LOCAL_KEY) === "1";
  } catch {
    return false;
  }
}

export function setDirectorHere(on: boolean): void {
  try {
    if (on) localStorage.setItem(LOCAL_KEY, "1");
    else localStorage.removeItem(LOCAL_KEY);
  } catch {
    // private mode: nothing remembered
  }
}

/** Whether any event is switched on in the house settings. */
export function directorAny(s: DirectorSettings | null | undefined): boolean {
  return !!s && !!(s.doorbell || (s.motion && s.motion !== "off") || s.appliances || s.alerts || (s.triggers ?? []).some((t) => t.entity));
}

const BELL_WORDS = /(doorbell|klingel|visitor|besucher|\bding\b|deurbel|sonnette|campanello)/;

/**
 * Doorbells: event entities of the class "doorbell" (Ring, UniFi Protect, ONVIF …) and binary sensors named like one
 * (Reolink's "Visitor", "Klingel"). The chosen one only, when one is chosen.
 */
export function doorbellEntities(hass: HomeAssistant, chosen?: string | null): string[] {
  if (chosen) return hass.states[chosen] ? [chosen] : [];
  return Object.keys(hass.states)
    .filter((id) => {
      const st = hass.states[id];
      if (id.startsWith("event.")) return st.attributes.device_class === "doorbell";
      if (!id.startsWith("binary_sensor.")) return false;
      const text = `${id} ${String(st.attributes.friendly_name ?? "")}`.toLowerCase().replace(/[_.-]/g, " ");
      return BELL_WORDS.test(text);
    })
    .sort();
}

/**
 * Whether the doorbell was pressed between two states: an event entity takes a new time stamp (a recent one – the
 * state coming back after a restart is not a ring), a binary sensor turns on.
 */
export function doorbellRang(prev: HassEntity | undefined, cur: HassEntity | undefined, now = Date.now()): boolean {
  if (!prev || !cur || DEAD.has(cur.state) || prev.state === cur.state) return false;
  if (cur.entity_id.startsWith("event.")) {
    const t = Date.parse(cur.state);
    return Number.isFinite(t) && now - t < 30_000;
  }
  return prev.state === "off" && cur.state === "on";
}

const ACTIVE = new Set(["on", "open", "opening", "unlocked", "unlocking", "detected", "home", "playing", "triggered"]);

/**
 * An own trigger (D615) went off: an event entity takes a new recent time stamp (a second doorbell, a button), any
 * other entity becomes active – on, open or opening (a garage door, a gate), unlocked.
 */
export function triggerFired(prev: HassEntity | undefined, cur: HassEntity | undefined, now = Date.now()): boolean {
  if (!prev || !cur || DEAD.has(cur.state) || prev.state === cur.state) return false;
  if (cur.entity_id.startsWith("event.")) return doorbellRang(prev, cur, now);
  // coming back after a restart is no opening
  if (DEAD.has(prev.state)) return false;
  return ACTIVE.has(cur.state) && !ACTIVE.has(prev.state);
}

/** The camera that shows the doorbell's door: the chosen one, one of the doorbell's own device, else one in its area. */
export function doorbellCamera(hass: HomeAssistant, doorbell: string, placed: readonly string[], chosen?: string | null): string | null {
  if (chosen) return chosen;
  const reg = hass.entities ?? {};
  const device = reg[doorbell]?.device_id;
  const cams = placed.filter((id) => id.startsWith("camera."));
  const same = device ? cams.find((id) => reg[id]?.device_id === device) : undefined;
  if (same) return same;
  const areaOf = (id: string) => entityAreaId(hass, id);
  const area = areaOf(doorbell);
  return (area && cams.find((id) => areaOf(id) === area)) || null;
}

/**
 * The director's memory: the states seen last (to notice a ring, a person, the end of a program), the shot on
 * screen and when each source was shown last.
 */
export class Director {
  private seen = new Map<string, HassEntity | undefined>();
  /** Appliances: running, or resting since when after a run. */
  private runs = new Map<string, { run: boolean; since: number; ran: boolean }>();
  private shown = new Map<string, number>();
  private touchedAt = -Infinity;
  current: { shot: Shot; since: number; until: number; touched: boolean } | null = null;

  /** Whether the state changed the given way since the last look (the first look only remembers it). */
  edge(id: string, cur: HassEntity | undefined, test: (prev: HassEntity | undefined, cur: HassEntity | undefined) => boolean): boolean {
    const had = this.seen.has(id);
    const prev = this.seen.get(id);
    this.seen.set(id, cur);
    return had && prev !== cur && test(prev, cur);
  }

  /**
   * Whether an appliance's program has ended: it ran (while watched) and has rested for STOP_MS since – a pause in
   * the program (soaking, drying) does not count. True once per run.
   */
  stopped(id: string, running: boolean, now: number): boolean {
    const r = this.runs.get(id);
    if (running) {
      if (!r?.run) this.runs.set(id, { run: true, since: now, ran: true });
      return false;
    }
    if (!r || r.run) {
      this.runs.set(id, { run: false, since: now, ran: !!r?.run });
      return false;
    }
    if (r.ran && now - r.since >= STOP_MS) {
      r.ran = false;
      return true;
    }
    return false;
  }

  /** Whether an appliance rests after a run and is to be looked at again (it may be finished then). */
  resting(): boolean {
    for (const r of this.runs.values()) if (!r.run && r.ran) return true;
    return false;
  }

  /** Someone touched the screen: a shot on screen stays (no going back), and quiet shots wait. */
  touch(now: number): void {
    this.touchedAt = now;
    if (this.current) this.current.touched = true;
  }

  /** Take a shot when it may be shown now; true when the view is to show it. */
  offer(shot: Shot, now: number, holdS = HOLD_DEFAULT): boolean {
    const last = this.shown.get(shot.key);
    if (last !== undefined && now - last < COOLDOWN[shot.kind]) return false;
    const urgent = shot.kind === "alert" || shot.kind === "doorbell";
    if (!urgent && now - this.touchedAt < BUSY_MS) return false;
    const cur = this.current;
    if (cur && now < cur.until && PRIORITY[cur.shot.kind] > PRIORITY[shot.kind]) return false;
    // the doorbell keeps its picture twice as long: someone may still be on the way to the door
    const hold = Math.min(HOLD_MAX, Math.max(HOLD_MIN, holdS)) * (shot.kind === "doorbell" ? 2 : 1) * 1000;
    this.current = { shot, since: now, until: now + hold, touched: false };
    this.shown.set(shot.key, now);
    return true;
  }

  /**
   * The shot whose time is up: the view goes back – unless the screen was touched meanwhile (then it stays where the
   * person took it). Null while nothing is due.
   */
  due(now: number): { shot: Shot; back: boolean } | null {
    const cur = this.current;
    if (!cur || now < cur.until) return null;
    this.current = null;
    return { shot: cur.shot, back: !cur.touched };
  }

  /** Forget the shot on screen (the view was closed by hand, the director switched off). */
  clear(): void {
    this.current = null;
  }
}
