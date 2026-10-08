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

function start() {
  const hass = {
    language: "de",
    entities: {},
    areas: {},
    devices: {},
    floors: {},
    config: {},
    states: { "light.a": { entity_id: "light.a", state: "on", attributes: { friendly_name: "Lampe" } } },
    connection: { subscribeMessage: async () => async () => undefined },
    callService: async () => undefined,
    callWS: async (msg: Record<string, unknown>): Promise<WireDay> => {
      const from = Math.floor(msg.start_time as number);
      // the light is switched on an hour into the window, then nothing happens any more
      return { day_start: from, end: Math.ceil(msg.end_time as number), oldest: null, keep_days: 10, entities: { "light.a": { t: [0, 3600], v: [0, 1], tab: ["off", "on"] } }, stats: {}, missing: [] };
    },
  } as unknown as HomeAssistant;
  let changes = 0;
  const session = new Session({
    live: hass,
    building: emptyBuilding(),
    spec: { entities: ["light.a"], openings: [], furniture: [], low: false },
    quality: "high",
    t: (k) => k,
    onChange: () => changes++,
    onExit: () => undefined,
  });
  return { session, hass, changes: () => changes };
}

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
