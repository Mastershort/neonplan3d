// Tutorial episode 0 – the teaser "Das ist NeonPlan 3D": the first video of the playlist, 2–3 minutes of the full
// demo house at its best in short scenes with hard cuts (each scene loads the preview fresh): the flight in, floors,
// lights and colours, the room panel, blinds, heatmap, sun and evening, weather, warnings, Energy Pro, cameras,
// search, the dashboard card and the wall tablet, a glimpse of the editor, the extensions, and the way into episode 1.
// Drives the preview with invented demo data. States the viewer cannot get from a tap (sun position, weather,
// a smoke alarm) are set on the mock Home Assistant directly, and the camera glides are set on the 3D view – both
// only for the picture, never as a step the viewer is meant to copy.
// Usage (from frontend/): node tutorials/ep00-teaser.mjs <out-dir> [<voice-dir de> [<voice-dir en>]]
//   (voice dirs: private/tutorial-audio/ep00/de and …/en; a line then lasts the longer of both plus 0.3 s)
// Then: python ../tools/make-tutorial.py <out-dir> <out.mp4> --en tutorials/ep00-narration-en.json

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { appVersion, FPS, narration, startRecorder } from "./recorder.mjs";

const out = process.argv[2] ?? "tutorial-ep00";
const R = await startRecorder({ outDir: out, width: 1920, height: 1080, lang: "de" });
const N = narration(R, process.argv.slice(3));
const { sayOver, chapter } = N;
const VERSION = `<br><span style="font-size:20px;opacity:.7">aufgenommen mit NeonPlan 3D ${appVersion()}</span>`;
const PLAN = join(import.meta.dirname, "assets", "bauplan-eg.png");

// every scene starts from the stored defaults (the panel remembers the look, hidden bars and more per device)
await R.page.evaluateOnNewDocument(() => {
  try {
    localStorage.clear();
  } catch {
    // no storage
  }
});
// confirm() / alert() of the app: accepted at once
R.page.on("dialog", (d) => void d.accept());

// ---------------------------------------------------------------- helpers
const VIEW = `const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
  const viewer = Object.values(v).find((x) => x && x.floors && x.floorMap);`;
/** Set the 3D camera, with an optional target point [x, y, z]. */
const cam = (c) =>
  R.page.evaluate(
    (code, c) => {
      const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
      const viewer = Object.values(v).find((x) => x && x.floors && x.floorMap);
      const { target, ...rest } = c;
      if (target) viewer.controls.view.target.set(target[0], target[1], target[2]);
      Object.assign(viewer.controls.view, rest);
      viewer.invalidate();
    },
    VIEW,
    c,
  );
const mix = (a, b, k) => {
  const c = { theta: a.theta + (b.theta - a.theta) * k, phi: a.phi + (b.phi - a.phi) * k, radius: a.radius + (b.radius - a.radius) * k };
  if (a.target && b.target) c.target = a.target.map((x, i) => x + (b.target[i] - x) * k);
  return c;
};
const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
/**
 * Keep recording real frames (rain, power flow and pulses keep moving – a held still would freeze them) until the
 * video time `end`, gliding the camera from `a` to `b` if given; `each(i, n)` runs before every frame.
 */
const live = async (end, a = null, b = null, each = null) => {
  const n = Math.max(1, Math.round((end - R.time) * FPS));
  for (let i = 1; i <= n; i++) {
    if (a && b) await cam(mix(a, b, ease(i / n)));
    if (each) await each(i, n);
    await R.frame(1 / FPS, 15);
  }
};
/** A narration line over the steps that follow; returns the video time it ends. */
const line = async (text) => {
  await sayOver(text);
  return R.time + N.length(text);
};
/** Load the preview fresh (a hard cut: nothing is recorded while it loads). */
const scene = async (query = "", cursor = false) => {
  await R.open(query);
  await R.hideCursor(!cursor);
};
/** Hide every bar: only the 3D view stays (the eye button of the app). */
const clean = async () => {
  await quiet('button[aria-label="Bedienelemente ausblenden – nur die 3D-Ansicht bleibt"]', 700);
};
/** Set states on the mock Home Assistant (sun, weather, a smoke alarm) – the next service call resets them. */
const setStates = (patch) =>
  R.page.evaluate((patch) => {
    const p = window.fp3dPanel;
    const st = { ...p.hass.states };
    for (const [id, s] of Object.entries(patch)) st[id] = { ...st[id], ...s, attributes: { ...st[id]?.attributes, ...(s.attributes || {}) } };
    p.hass = { ...p.hass, states: st };
  }, patch);
/** A service call on the mock Home Assistant (as if an automation or a wall switch did it). */
const service = (domain, name, data) => R.page.evaluate((d, s, data) => window.fp3dPanel.hass.callService(d, s, data), domain, name, data);
/** The n-th visible element for a CSS selector (through shadow roots), as a screen point. */
const nthBox = async (selector, nth) => {
  const box = await R.page.evaluate(
    (selector, nth) => {
      const walk = function* (root) {
        for (const el of root.querySelectorAll("*")) {
          yield el;
          if (el.shadowRoot) yield* walk(el.shadowRoot);
        }
      };
      const hits = [];
      for (const el of walk(document)) {
        if (!el.matches(selector)) continue;
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.top < innerHeight && r.bottom > 0) hits.push(r);
      }
      const r = hits[nth];
      return r ? { x: r.left + r.width / 2, y: r.top + r.height / 2 } : null;
    },
    selector,
    nth,
  );
  if (!box) throw new Error(`not found: ${selector} #${nth}`);
  return box;
};
const tap = async (selector, nth = 0, seconds = 0.5) => {
  const b = await nthBox(selector, nth);
  await R.move(b.x, b.y, seconds);
  await R.click();
};
const rect = async (x0, z0, x1, z1, seconds = 0.6, hop = 0.35) => {
  await R.clickOn({ text: "Rechteck", exact: true }, hop);
  const a = await R.planPoint(x0, z0);
  const b = await R.planPoint(x1, z1);
  await R.move(a.x, a.y, hop);
  await R.drag(b.x, b.y, seconds);
};
/** A setup click at the start of a scene (before its first line): nothing is recorded, the viewer sees the result. */
const quiet = async (target, wait = 300) => {
  const b = await R.locate(target);
  await R.page.mouse.click(b.x, b.y);
  await R.sleep(wait);
};
const flash = (on) => R.page.evaluate((on) => (document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d")._flash = on), on);

// ---------------------------------------------------------------- 1. The flight in, title card
await chapter("Das ist NeonPlan 3D");
await scene("flows");
await clean();
{
  const far = { theta: -1.9, phi: 1.25, radius: 78, target: [6.8, 3.4, 4.6] };
  const mid = { theta: -1.05, phi: 1.0, radius: 42, target: [6.8, 3.4, 4.6] };
  const near = { theta: -0.45, phi: 0.88, radius: 30, target: [6.8, 3.0, 4.6] };
  await cam(far);
  await R.sleep(1200);
  await R.title("NeonPlan 3D", `Dein Zuhause in 3D – live mit Home Assistant${VERSION}`);
  // a moment of picture before the first word
  await live(R.time + 0.8, far, mix(far, mid, 0.08));
  let end = await line("Das ist NeonPlan 3D: dein Zuhause in 3D – live mit Home Assistant.");
  await live(end, mix(far, mid, 0.08), mid);
  await R.untitle();
  end = await line("Jeder Raum, jedes Licht, jedes Fenster – genau da, wo es bei dir wirklich ist.");
  await live(end, mid, near);
}

// ---------------------------------------------------------------- 2. Floors: stacked, apart, one floor

await scene("flows");
{
  const a = { theta: -0.45, phi: 0.95, radius: 30, target: [6.8, 2.6, 4.6] };
  const b = { theta: 0.35, phi: 0.95, radius: 29, target: [6.8, 2.6, 4.6] };
  await cam(a);
  await R.sleep(800);
  const end = await line("Die Etagen stapelst du, ziehst sie auseinander oder schaust in jede einzeln hinein.");
  const t0 = R.time;
  const span = end - t0;
  await quiet({ text: "Gestapelt", exact: true }, 0);
  await live(t0 + span * 0.36, a, mix(a, b, 0.4));
  await quiet({ text: "Auseinander", exact: true }, 0);
  await live(t0 + span * 0.66, mix(a, b, 0.4), mix(a, b, 0.75));
  await quiet({ text: "Obergeschoss", exact: true, nth: 0 }, 0);
  await live(end + 0.4);
}

// ---------------------------------------------------------------- 3. Lights live, colours, the room panel
await chapter("Live mit Home Assistant");
await scene("", true);
await quiet({ text: "Erdgeschoss", exact: true, nth: 0 });
await R.sleep(800);
await quiet({ text: "Wohnzimmer", exact: true });
await R.sleep(1800);
await R.move(1300, 640, 0.01);
{
  let end = await line("Tippst du ein Licht an, schaltet es auch in echt – und in 3D siehst du es sofort.");
  await R.clickOn({ text: "Alle aus", exact: true }, 0.5);
  await live(R.time + 0.9);
  await tap('button[aria-label="LED Band"]', 0, 0.5);
  await live(R.time + 0.7);
  await tap('button[aria-label="Stehlampe"]', 0, 0.5);
  await live(end);
  end = await line("Mit Helligkeit und Farbe, genau wie Home Assistant es meldet.");
  await tap('button[aria-label="rgb(255, 95, 210)"]', 0, 0.5);
  await live(R.time + 0.5);
  await tap('button[aria-label="Deckenlicht"]', 0, 0.5);
  await live(R.time + 0.4);
  await tap('button[aria-label="rgb(55, 224, 255)"]', 1, 0.5);
  await live(end);
  end = await line("Im Raumfenster steht alles aus dem Raum: Licht, Rollladen, Heizung und Fernseher.");
  await R.moveTo({ text: "Rollladen" }, 0.5);
  await live(R.time + 0.4);
  await tap('button[aria-label="Wärmer"]', 0, 0.5);
  await tap('button[aria-label="Wärmer"]', 0, 0.2);
  await live(R.time + 0.3);
  await R.moveTo({ text: "Fernseher" }, 0.5);
  await live(end);
}

// ---------------------------------------------------------------- 4. Blinds moving

await scene("");
await quiet({ text: "Erdgeschoss", exact: true, nth: 0 });
await R.sleep(900);
await clean();
{
  const a = { theta: 3.0, phi: 1.2, radius: 9.5, target: [3, 0.8, 0.5] };
  const b = { theta: 3.3, phi: 1.16, radius: 8.5, target: [3, 0.8, 0.5] };
  await cam(a);
  await R.sleep(900);
  const end = await line("Fährt der Rollladen runter, fährt er auch in 3D – live.");
  const t0 = R.time;
  const pos = (k) => (k < 0.55 ? Math.round(70 - (70 * k) / 0.55) : Math.round(((k - 0.55) / 0.45) * 100));
  let last = -1;
  await live(end + 0.3, a, b, async (i, n) => {
    const p = Math.max(0, Math.min(100, Math.round(pos(i / n) / 5) * 5));
    if (p !== last) {
      last = p;
      await service("cover", "set_cover_position", { entity_id: "cover.wohnzimmer", position: p });
    }
  });
  void t0;
}

// ---------------------------------------------------------------- 5. Heatmap

await scene("");
await quiet({ text: "Erdgeschoss", exact: true, nth: 0 });
await R.sleep(900);
await quiet({ text: "Schnitt", exact: true });
await quiet({ text: "Temp.", exact: true });
await R.sleep(600);
{
  const a = { theta: 0.15, phi: 0.6, radius: 19 };
  const b = { theta: 0.55, phi: 0.52, radius: 17 };
  await cam(a);
  await R.sleep(1200);
  const end = await line("Wo ist es zu warm, wo zu kalt? Die Heatmap zeigt es auf einen Blick.");
  await live(end + 0.2, a, b);
}

// ---------------------------------------------------------------- 6. The sun through the windows, evening
await chapter("Sonne, Wetter und Warnungen");
await scene("");
await quiet({ text: "Erdgeschoss", exact: true, nth: 0 });
await R.sleep(900);
await clean();
{
  const a = { theta: 0.35, phi: 0.72, radius: 14.5, target: [3.5, 0.3, 4] };
  const b = { theta: 0.75, phi: 0.78, radius: 13.5, target: [3.5, 0.3, 4] };
  const sun = (k) => ({ elevation: 32 - 40 * k, azimuth: 195 + 95 * k });
  // daytime: every light off, so only the sun patches light the floor
  const lights = Object.keys(await R.page.evaluate(() => window.fp3dPanel.hass.states)).filter((k) => k.startsWith("light."));
  await setStates(Object.fromEntries(lights.map((k) => [k, { state: "off" }])));
  await setStates({ "sun.sun": { state: "above_horizon", attributes: sun(0) } });
  await cam(a);
  await R.sleep(1200);
  let end = await line("Die Sonne steht, wo sie wirklich steht, und scheint durch deine Fenster.");
  const t0 = R.time;
  const m = mix(a, b, 0.55);
  await live(end, a, m, async (i, n) => {
    // the sun sinks from the afternoon towards the evening (every few frames, the patches are rebuilt each time)
    if (i % 3 === 0) await setStates({ "sun.sun": { attributes: sun((0.7 * i) / n) } });
  });
  end = await line("Wird es Abend, wird es auch in 3D dunkel – und die Lichter gehen an.");
  const t1 = R.time;
  let lit = false;
  await live(end + 0.3, m, b, async (i, n) => {
    const k = 0.7 + 0.3 * Math.min(1, (i / n) * 1.6);
    if (i % 3 === 0) await setStates({ "sun.sun": { state: k > 0.85 ? "below_horizon" : "above_horizon", attributes: sun(k) } });
    if (!lit && i / n > 0.55) {
      lit = true;
      await setStates({
        "light.wohnzimmer_decke": { state: "on", attributes: { brightness: 200 } },
        "light.stehlampe": { state: "on", attributes: { brightness: 160 } },
        "light.led_band": { state: "on", attributes: { brightness: 220, rgb_color: [255, 95, 210], color_mode: "hs" } },
        "light.schlafzimmer": { state: "on", attributes: { brightness: 170 } },
        "light.nachttisch": { state: "on", attributes: { brightness: 90 } },
        "light.flur": { state: "on", attributes: { brightness: 120 } },
      });
    }
  });
  void t0;
  void t1;
}

// ---------------------------------------------------------------- 7. Weather: rain, snow, thunderstorm

await scene("flows");
await clean();
{
  const a = { theta: -0.9, phi: 1.05, radius: 33, target: [6.8, 3.0, 4.6] };
  const b = { theta: -0.25, phi: 1.0, radius: 31, target: [6.8, 3.0, 4.6] };
  const c = { theta: 0.35, phi: 1.02, radius: 32, target: [6.8, 3.0, 4.6] };
  await setStates({ "weather.zuhause": { state: "pouring", attributes: { cloud_coverage: 85, wind_speed: 25, wind_speed_unit: "km/h" } } });
  await cam(a);
  await R.sleep(1500);
  let end = await line("Das Wetter draußen kommt mit ins Bild: Regen, Schnee …");
  const t0 = R.time;
  await live(t0 + (end - t0) * 0.5, a, mix(a, b, 0.5));
  await setStates({ "weather.zuhause": { state: "snowy" } });
  await live(end, mix(a, b, 0.5), b);
  await setStates({ "weather.zuhause": { state: "lightning-rainy" } });
  end = await line("und sogar ein Gewitter über deinem Haus.");
  // two flashes at fixed frames (the app's own flashes come at random real-time moments)
  await live(end + 0.5, b, c, async (i, n) => {
    const f = Math.round(n * 0.25);
    const g = Math.round(n * 0.7);
    if (i === f || i === g || i === g + 4) await flash(true);
    if (i === f + 3 || i === g + 2 || i === g + 6) await flash(false);
  });
  await flash(false);
}

// ---------------------------------------------------------------- 8. Open windows in the rain, a smoke alarm

await scene("");
await quiet({ text: "Erdgeschoss", exact: true, nth: 0 });
await R.sleep(1000);
{
  const a = { theta: -0.75, phi: 0.92, radius: 21 };
  const b = { theta: -0.35, phi: 0.85, radius: 19 };
  await cam(a);
  await R.sleep(1000);
  let end = await line("Offene Fenster leuchten – und regnet es rein, sagt dir NeonPlan Bescheid.");
  const t0 = R.time;
  await live(t0 + 1.4, a, mix(a, b, 0.25));
  await setStates({ "weather.zuhause": { state: "pouring", attributes: { cloud_coverage: 85, wind_speed: 25, wind_speed_unit: "km/h" } } });
  await live(end, mix(a, b, 0.25), mix(a, b, 0.55));
  await setStates({ "binary_sensor.kueche_rauch": { state: "on" } });
  end = await line("Schlägt ein Rauchmelder an, blinkt der Raum rot, und oben steht, was los ist.");
  await live(end + 0.3, mix(a, b, 0.55), b);
}

// ---------------------------------------------------------------- 9. Energy Pro: power flow, solar fields, holograms
await chapter("Energie Pro und Kameras");
await scene("flows&pv=5400");
await quiet({ text: "Gestapelt", exact: true });
await R.sleep(600);
await clean();
{
  const a = { theta: 3.9, phi: 1.2, radius: 17, target: [8.5, 1.4, 5] };
  const b = { theta: 3.3, phi: 1.15, radius: 16, target: [8.5, 1.4, 5] };
  const c = { theta: 0.5, phi: 1.12, radius: 24, target: [6.8, 3.6, 4.6] };
  const d = { theta: 1.3, phi: 0.95, radius: 25, target: [6.8, 3.8, 4.6] };
  await cam(a);
  await R.sleep(1500);
  let end = await line("Mit Energie Pro siehst du den Strom fließen: vom Dach in den Akku, ins Haus und ins Auto.");
  await live(end, a, b);
  await cam(c);
  await R.sleep(900);
  end = await line("Jedes Solarfeld liegt auf dem Dach, und darüber schweben Hologramme mit den Werten von heute.");
  await live(end + 0.2, c, d);
}

// ---------------------------------------------------------------- 10. Cameras

await scene("", true);
await quiet({ text: "Erdgeschoss", exact: true, nth: 0 });
await R.sleep(900);
{
  const a = { theta: -0.95, phi: 0.95, radius: 11, target: [2.2, 0.6, 1.6] };
  const b = { theta: -0.45, phi: 0.9, radius: 9.5, target: [2.2, 0.6, 1.6] };
  await cam(a);
  await R.sleep(1000);
  await R.move(1500, 700, 0.01);
  // the camera's field of view on the floor: faint first, red as soon as it sees motion
  await setStates({ "binary_sensor.wohnzimmer_kamera_bewegung": { state: "off" } });
  let end = await line("Kameras hängen da, wo sie wirklich hängen – mit Blickfeld und erkannten Personen.");
  const t0 = R.time;
  await live(t0 + 1.6, a, mix(a, b, 0.35));
  await setStates({ "binary_sensor.wohnzimmer_kamera_bewegung": { state: "on" } });
  await live(end, mix(a, b, 0.35), b);
  end = await line("Ein Tipp, und du siehst alle Kamerabilder auf einmal.");
  await R.clickOn({ text: "Kameras", exact: true }, 0.6);
  await live(end + 0.3);
}

// ---------------------------------------------------------------- 11. Search
await chapter("Suche, Dashboard und Wandtablet");
await scene("", true);
{
  await R.move(500, 700, 0.01);
  const end = await line("Wo war noch mal die Stehlampe? Einfach suchen – und die Ansicht fliegt hin.");
  await R.clickOn('button[aria-label="Suchen"]', 0.5);
  await R.clickOn("input", 0.3);
  await R.type("Stehl", 0.09);
  await live(R.time + 0.6);
  await R.key("Enter");
  await R.hideCursor();
  await live(end + 0.4);
}

// ---------------------------------------------------------------- 12. Dashboard card and wall tablet

await scene("card", true);
await R.sleep(1500);
{
  let end = await line("Als Karte kommt NeonPlan auf dein Dashboard – mit einem eigenen Editor für alle Einstellungen.");
  await R.move(300, 300, 0.5);
  try {
    await R.pickOption("Look", "Blueprint", 0.5);
  } catch (e) {
    console.log(`card editor: ${e.message}`);
  }
  await live(R.time + 0.6);
  try {
    await R.pickOption("Look", "Neon", 0.5);
  } catch (e) {
    console.log(`card editor: ${e.message}`);
  }
  await live(end);
  // the same card on a wall tablet: the page around it dressed as a tablet (only the picture, the card is unchanged)
  await R.hideCursor();
  await R.page.evaluate(() => {
    const card = window.fp3dCard;
    const wrap = card.parentElement;
    wrap.firstElementChild.style.display = "none";
    wrap.style.cssText += ";display:flex;align-items:center;justify-content:center;height:100vh;box-sizing:border-box;padding:0;background:radial-gradient(circle at 50% 40%, #1b2638, #070b14)";
    const bezel = document.createElement("div");
    bezel.style.cssText = "padding:34px;border-radius:44px;background:#0d0f13;box-shadow:0 30px 80px rgba(0,0,0,.7), inset 0 0 0 2px #2a2f38";
    const screen = document.createElement("div");
    screen.style.cssText = "width:1340px;height:838px;border-radius:10px;overflow:hidden;background:#000";
    card.replaceWith(bezel);
    bezel.append(screen);
    screen.append(card);
    card.setConfig({ type: "custom:neonplan3d-card", quality: "low", floor: "eg", height: 838, flows: false, controls: true, fullscreen_button: false, floor_thumbs: true, idle_return: 1, idle_orbit: true });
  });
  await R.sleep(2500);
  end = await line("Und es läuft sogar auf alten Wandtablets – mit einer eigenen, sparsamen Stufe dafür.");
  await live(end + 0.3);
}

// ---------------------------------------------------------------- 13. The editor: picture, rooms, 3D beside, furniture
await chapter("Der Editor");
await scene("empty", true);
await quiet({ text: "Editor", exact: true });
await R.sleep(500);
await quiet({ text: "Etage hinzufügen" });
await quiet({ text: "Erdgeschoss", nth: 0 });
await R.sleep(500);
{
  const png = "data:image/png;base64," + readFileSync(PLAN).toString("base64");
  await R.page.evaluate((png) => window.fp3dPanel.hass.callWS({ type: "neonplan3d/image/set", image_id: "img_plan", data: png }), png);
  await R.editor(`e.change((doc, f) => { f.background = { image_id: "img_plan", width: 12, rotation: 0, x: -1.5, z: -1.5, opacity: 0.6 }; }); e.past = []; e._canUndo = false; e.fit();`);
  await R.sleep(800);
  await quiet({ text: "3D daneben", exact: true });
  await R.sleep(1500);
  await R.editor("e.fit();");
  await R.sleep(700);
  await R.move(700, 500, 0.01);
  let end = await line("Dein eigenes Haus zeichnest du selbst: Bauplan als Bild darunterlegen und die Räume nachziehen.");
  await rect(0, 0, 6, 4.5, 0.7);
  await rect(6, 0, 9.5, 4.5, 0.5);
  await rect(0, 4.5, 3, 7.5, 0.45);
  await live(end);
  end = await line("Daneben wächst dein Haus gleich in 3D mit.");
  await rect(3, 4.5, 6, 7.5, 0.4, 0.25);
  await rect(6, 4.5, 9.5, 7.5, 0.4, 0.25);
  await live(end + 0.2);
}
await scene("", true);
await quiet({ text: "Editor", exact: true });
await R.sleep(600);
await quiet({ text: "3D daneben", exact: true });
await R.sleep(1200);
await R.editor("e._roomId = 'wohnen'; e._furnitureId = 'm2'; e.fit();");
await R.sleep(1500);
{
  const p = await R.planPoint(2.4, 3.7);
  await R.move(p.x + 60, p.y - 80, 0.01);
  const end = await line("Möbel stellst du einfach hin und schiebst sie zurecht – im Plan und in 3D.");
  await R.move(p.x, p.y, 0.5);
  const q = await R.planPoint(3.3, 3.1);
  await R.drag(q.x, q.y, 1.2);
  await live(R.time + 0.4);
  const r = await R.planPoint(2.4, 3.7);
  await R.drag(r.x, r.y, 1.0);
  await live(end + 0.2);
}

// ---------------------------------------------------------------- 14. Free, open source, extensions
await chapter("Kostenlos, erweiterbar und wie es weitergeht");
await scene("flows");
await clean();
{
  const a = { theta: 0.9, phi: 1.0, radius: 30, target: [6.8, 3.0, 4.6] };
  const b = { theta: 1.5, phi: 1.0, radius: 29, target: [6.8, 3.0, 4.6] };
  await cam(a);
  await R.sleep(1200);
  const end = await line("NeonPlan 3D ist kostenlos und Open Source.");
  await live(end, a, b);
}
await scene("flows");
await quiet({ text: "Erweiterungen" });
await R.sleep(1500);
{
  const end = await line("Wer mehr will, findet Möbel-Packs und Pro-Erweiterungen – zum Beispiel für Energie, Kameras und Wetter.");
  await live(end + 0.2);
}

// ---------------------------------------------------------------- 15. Outro: the way into episode 1

await scene("flows");
await clean();
{
  const a = { theta: 1.6, phi: 1.0, radius: 36, target: [6.8, 3.0, 4.6] };
  const b = { theta: 2.6, phi: 0.95, radius: 34, target: [6.8, 3.0, 4.6] };
  await cam(a);
  await R.sleep(1200);
  await R.title("Folge 1: Dein erster Grundriss", `NeonPlan 3D – Tutorials · kostenlos und Open Source${VERSION}`);
  const end = await line("In dieser Playlist zeige ich dir Schritt für Schritt, wie du dein eigenes Zuhause baust – los geht's mit Folge 1.");
  await live(end + 1.5, a, b);
}

N.report();
const result = await R.finish();
console.log(`recorded ${result.frames} frames, ${result.duration.toFixed(1)} s → ${out}`);
