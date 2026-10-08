import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding } from "../model.ts";
import type { HomeAssistant } from "../types.ts";
import type { WireDay } from "./timeline.ts";

// the session listens for the page being hidden; node has no document
// (lit, loaded with the time bar, walks templates through it)
(globalThis as Record<string, unknown>).document ??= { hidden: false, addEventListener() {}, removeEventListener() {}, createTreeWalker: () => ({}) };
const { Session } = await import("./entry.ts");

const until = async (ok: () => boolean) => {
  for (let i = 0; i < 200 && !ok(); i++) await new Promise((r) => setTimeout(r, 5));
};

function start(opts: { states?: Record<string, unknown>; entities?: string[]; range?: "24h" | "7d"; quality?: "auto" | "low" | "high" } = {}) {
  const asked: [number, number][] = [];
  const hass = {
    language: "de",
    entities: {},
    areas: {},
    devices: {},
    floors: {},
    config: {},
    states: { "light.a": { entity_id: "light.a", state: "on", attributes: { friendly_name: "Lampe" } }, ...opts.states },
    connection: { subscribeMessage: async () => async () => undefined },
    callService: async () => undefined,
    callWS: async (msg: Record<string, unknown>): Promise<WireDay> => {
      const from = Math.floor(msg.start_time as number);
      asked.push([from * 1000, (msg.end_time as number) * 1000]);
      // the light is switched on an hour into the window, then nothing happens any more
      return { day_start: from, end: Math.ceil(msg.end_time as number), oldest: null, keep_days: 10, entities: { "light.a": { t: [0, 3600], v: [0, 1], tab: ["off", "on"] } }, stats: {}, missing: [] };
    },
  } as unknown as HomeAssistant;
  let changes = 0;
  const session = new Session({
    live: hass,
    building: emptyBuilding(),
    spec: { entities: ["light.a", ...(opts.entities ?? [])], openings: [], furniture: [], low: false },
    quality: opts.quality ?? "high",
    range: opts.range ?? null,
    t: (k) => k,
    onChange: () => changes++,
    onExit: () => undefined,
  });
  return { session, hass, changes: () => changes, asked };
}

const DAY_MS = 24 * 3600000;

test("session: the clock reaches the listeners on every tick and jump, even when no state changed", async () => {
  const { session, changes } = start();
  await until(() => session.state === "ready");
  assert.equal(session.state, "ready");
  const heard: [number, number][] = [];
  const off = session.replay.listen(() => heard.push([session.replay.t, session.replay.seek]));
  // a jump inside a quiet stretch: the same replayed object, but the moment and the jump counter move
  session.seek(session.start + 2 * 3600000, true);
  const h = session.hass;
  const seek = session.replay.seek;
  const before = changes();
  session.seek(session.start + 3 * 3600000, true);
  assert.equal(session.hass, h);
  assert.equal(session.replay.seek, seek + 1);
  assert.equal(heard.at(-1)?.[0], session.start + 3 * 3600000);
  assert.equal(heard.at(-1)?.[1], seek + 1);
  // playing on through the quiet stretch: the listeners hear the clock, the host is not asked to render
  const n = heard.length;
  session.play();
  assert.equal(session.playing, true);
  await until(() => heard.filter(([t]) => t > session.start + 3 * 3600000).length >= 2);
  session.pause();
  assert.equal(session.playing, false);
  const moved = heard.slice(n).filter(([t]) => t > session.start + 3 * 3600000);
  assert.ok(moved.length >= 2, `ticks heard: ${moved.length}`);
  assert.equal(session.hass, h);
  assert.equal(changes(), before + 1);
  off();
  session.dispose();
});

test("session: the live states after the start never reach the past", async () => {
  const { session, hass } = start();
  await until(() => session.state === "ready");
  const h = session.hass!;
  session.setLive({ ...hass, states: { ...hass.states, "light.b": { entity_id: "light.b", state: "on", attributes: {} } } } as HomeAssistant);
  assert.equal(session.hass, h);
  assert.equal(session.hass!.states["light.b"], undefined);
  session.dispose();
});

test("session: the live edge moves the range with the end, adds the live rows and works out what follows from them", async () => {
  const { session, hass } = start({ states: { "switch.x": { entity_id: "switch.x", state: "on", attributes: {} } }, entities: ["switch.x"] });
  await until(() => session.state === "ready");
  const version = session.version;
  // the recorder had nothing of switch.x: it read "unknown" so far
  assert.equal(session.timeline!.tracks.has("switch.x"), false);
  await new Promise((r) => setTimeout(r, 30));
  const at = new Date().toISOString();
  session.setLive({ ...hass, states: { ...hass.states, "light.a": { entity_id: "light.a", state: "off", attributes: {}, last_updated: at } } } as HomeAssistant);
  const pb = session.playback!;
  session.seek(pb.end - 5000);
  session.play();
  await until(() => !session.playing);
  assert.equal(session.playing, false);
  const light = session.timeline!.tracks.get("light.a")!;
  assert.equal(light.values[light.vals[light.times.length - 1]].s, "off");
  assert.ok(session.version > version, "the summaries are worked out again");
  // the range follows the end: the playhead stays on the track
  assert.equal(pb.start, Math.max(session.timeline!.start, session.start));
  assert.ok(pb.t >= pb.start && pb.t <= pb.end);
  // at the present the live states are known, also of an entity without a recorded past
  assert.equal(session.hass!.states["light.a"].state, "off");
  assert.equal(session.hass!.states["switch.x"].state, "on");
  session.dispose();
});

test("session: the week keeps the chosen speed; previous and next stay on the track", async () => {
  const { session } = start();
  await until(() => session.state === "ready");
  session.nextSpeed();
  assert.equal(session.playback!.speed, 900);
  session.setRange("7d");
  assert.equal(session.playback!.speed, 900);
  session.setRange("24h");
  await until(() => !session.loadingDay);
  // an event of an older day, still in memory, is no step target in the 24-hour view
  session.events = [{ t: session.end - 3 * DAY_MS, kind: "door", entity: "light.a" }];
  session.seek(session.playback!.start + 3600000);
  session.step(-1);
  assert.equal(session.playback!.t, session.playback!.start);
  assert.deepEqual(session.shownEvents(), []);
  session.dispose();
});

test("session: the comparison fetches the day before without switching to the week", async () => {
  const { session, asked } = start();
  await until(() => session.state === "ready");
  const tl = session.timeline!;
  const day = tl.start - DAY_MS;
  const n = asked.length;
  session.ensureLoaded(day);
  await until(() => session.timeline!.start <= day && session.loadingDay === null);
  assert.ok(asked.length > n);
  assert.ok(session.timeline!.start <= day);
  assert.equal(session.range, "24h");
  assert.equal(session.playback!.start, Math.max(session.timeline!.start, session.start));
  const sum = session.daySummary(day)!;
  assert.equal(sum.from, day);
  // asked once: a second call fetches nothing more
  const m = asked.length;
  session.ensureLoaded(day);
  await new Promise((r) => setTimeout(r, 20));
  assert.equal(asked.length, m);
  session.dispose();
});

test("session: the tablet level lets the older days of a week go", async () => {
  const { session } = start({ range: "7d" });
  await until(() => session.state === "ready" && session.loadingDay === null && session.timeline!.start <= session.start + 60000);
  assert.ok(session.timeline!.start <= session.end - 6 * DAY_MS);
  session.replay.setQuality("low", true);
  assert.equal(session.maxDays, 7, "the card asked for the week");
  session.dispose();
  const tablet = start();
  await until(() => tablet.session.state === "ready");
  tablet.session.setRange("7d");
  await until(() => tablet.session.loadingDay === null && tablet.session.timeline!.start <= tablet.session.start + 60000);
  assert.ok(tablet.session.timeline!.start <= tablet.session.end - 6 * DAY_MS);
  tablet.session.replay.setQuality("low", true);
  assert.equal(tablet.session.maxDays, 2);
  assert.ok(tablet.session.timeline!.start >= tablet.session.end - 2 * DAY_MS - 60000);
  assert.ok(tablet.session.hass);
  tablet.session.dispose();
});
