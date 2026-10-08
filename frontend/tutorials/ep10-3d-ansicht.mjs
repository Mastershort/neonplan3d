// Tutorial episode 10 – "Die 3D-Ansicht bedienen", in two parts (manual chapter 5 does not fit into 8 minutes):
//   a) Navigieren und alle Schalter: house / floor / room (labels, drag, wheel, Esc, „Zurück“, double tap on a free
//      spot, floor pictures and their fold arrow, the bar at the top with ≡ / ↔), „Wände hoch“ / „Schnitt“,
//      „Auseinander“ / „Gestapelt“, „Dach bleibt“, „Abgedunkelt“ / „Gestapelt“ / „Einzeln“, the heatmap (Temp.,
//      Feuchte, CO₂, Werte, Normal), „Raumnamen“, „Spur“ / „Kameras“ / „Wetter“ (Pro, one sentence), the header
//      options (quality, look, accent colour, markers, ◧ / ◨, ⌖ „Ansicht halten“, FPS, version, ⚙ on phones) and the
//      eye (Energie Pro in one sentence).
//   b) Bedienen: tap, swipe, long press on lamps and blinds, windows, TV, double tap on a room, the room panel, the
//      star (central menu, favourites, own buttons), the search, warnings, sun and daylight, cameras in 3D, the
//      start views of house, floor and room.
// The full demo house (invented data, mock Home Assistant). Setup steps before a scene are invisible.
// Usage (from frontend/): node tutorials/ep10-3d-ansicht.mjs <out-dir> a|b [<voice-dir de> [<voice-dir en>]]
//   (voice dirs: private/tutorial-audio/ep10a/de and …/en, resp. ep10b)
// EP10_FAST=1: a quick dry run for checking the steps (the timing is not usable).
// Then: python ../tools/make-tutorial.py <out-dir> <out.mp4> --en tutorials/ep10a-narration-en.json

import { FPS, narration, startRecorder } from "./recorder.mjs";

const out = process.argv[2] ?? "tutorial-ep10";
const PART = process.argv[3] === "b" ? "b" : "a";
const FAST = !!process.env.EP10_FAST;
// the controls side (◧ / ◨) and „Ansicht halten“ (⌖) come with 1.12.7; the bundle recorded already has them
const VERSION = `<br><span style="font-size:20px;opacity:.7">aufgenommen mit NeonPlan 3D 1.12.7</span>`;

const R = await startRecorder({ outDir: out, width: 1920, height: 1080, lang: "de" });
const N = narration(R, process.argv.slice(4));
const { say, sayOver, chapter, catchUp } = N;
if (FAST) {
  const { move, type } = R;
  R.move = (x, y) => move(x, y, 0.04);
  R.type = (text) => type(text, 0.01);
}
// a draft that fails still writes what it recorded (for checking the stills)
for (const ev of ["uncaughtException", "unhandledRejection"]) {
  process.on(ev, async (err) => {
    console.error(err);
    await R.page.screenshot({ path: `${out}/error.png` }).catch(() => {});
    await R.frame(0.04).catch(() => {});
    await R.finish().catch(() => {});
    process.exit(1);
  });
}
// every scene starts from the demo's stored defaults
await R.page.evaluateOnNewDocument(() => {
  try {
    localStorage.clear();
  } catch {
    // no storage
  }
});
R.page.on("dialog", (d) => void d.accept());

// ---------------------------------------------------------------- helpers
const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
/** sayOver that returns the video time the line ends. */
const line = async (text) => {
  await sayOver(text);
  return R.time + N.length(text);
};
/** Real frames until video time `end` (lights blink, effects run), with an optional step per frame. */
const live = async (end, each = null) => {
  const n = Math.max(1, Math.round((end - R.time) * FPS));
  for (let i = 1; i <= n; i++) {
    if (each) await each(i, n);
    await R.frame(1 / FPS, 15);
  }
};
/** A setup click before a scene's first line: nothing is recorded. */
const quiet = async (target, wait = 400) => {
  const b = await R.locate(target);
  await R.page.mouse.click(b.x, b.y);
  await R.sleep(wait);
};
/** Click and let the camera flight run with real frames. */
const clickLive = async (target, seconds = 0.5, flight = 1.2) => {
  await R.moveTo(target, seconds);
  await R.click();
  await live(R.time + flight);
};
const EYE = 'button[aria-label="Bedienelemente ausblenden – nur die 3D-Ansicht bleibt"]';
const EYE_BACK = 'button[aria-label="Bedienelemente wieder einblenden"]';
const STAR = 'button[aria-label="Zentral: alle Lichter, Rollläden und Favoriten"]';
const FIND = 'button[aria-label="Suchen"]';
/** The main 3D view's viewer object. */
const VIEWER = `const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d"); const viewer = Object.values(v).find((o) => o && o.floors && o.floorMap);`;
/** Set the main 3D view's camera around a plan point of a floor (or the house when floorId is null). */
const cam = (floorId, x, z, c) =>
  R.page.evaluate(
    (VIEWER, floorId, x, z, c) => {
      const fn = new Function("floorId", "x", "z", "c", `${VIEWER}
        const view = viewer.controls.view;
        if (floorId) {
          const fv = viewer.floorMap.get(floorId);
          const t = fv.group.position.clone().set(x, c.y ?? 0, z);
          fv.group.localToWorld(t);
          view.target.copy(t);
        }
        Object.assign(view, { theta: c.theta, phi: c.phi, radius: c.radius });
        viewer.invalidate();`);
      fn(floorId, x, z, c);
    },
    VIEWER,
    floorId,
    x,
    z,
    c,
  );
/** The camera as it stands (theta, phi, radius). */
const camNow = () => R.page.evaluate((VIEWER) => new Function(`${VIEWER} const w = viewer.controls.view; return { theta: w.theta, phi: w.phi, radius: w.radius };`)(), VIEWER);
/** Glide the main 3D camera around a plan point while recording. */
const glide = async (floorId, x, z, a, b, seconds) => {
  const n = FAST ? 2 : Math.max(1, Math.round(seconds * FPS));
  for (let i = 1; i <= n; i++) {
    const k = ease(i / n);
    await cam(floorId, x, z, { theta: a.theta + (b.theta - a.theta) * k, phi: a.phi + (b.phi - a.phi) * k, radius: a.radius + (b.radius - a.radius) * k, y: (a.y ?? 0) + ((b.y ?? 0) - (a.y ?? 0)) * k });
    await R.frame(1 / FPS, 40);
  }
};
/** Glide from the camera as it stands: turn by dTheta, tilt by dPhi, zoom by a radius factor (target kept). */
const orbit = async (dTheta, factor = 1, seconds = 2, dPhi = 0) => {
  const a = await camNow();
  await glide(null, 0, 0, a, { theta: a.theta + dTheta, phi: a.phi + dPhi, radius: a.radius * factor }, seconds);
};
/** Screen point of a plan point (x, height y, z) of a floor in the main 3D view. */
const point3d = (floorId, x, y, z) =>
  R.page.evaluate(
    (VIEWER, floorId, x, y, z) =>
      new Function("floorId", "x", "y", "z", `${VIEWER}
        const fv = viewer.floorMap.get(floorId);
        const p = fv.group.position.clone().set(x, y, z);
        fv.group.localToWorld(p);
        p.project(viewer.camera);
        const c = (v.renderRoot ?? v.shadowRoot).querySelector("canvas").getBoundingClientRect();
        return { x: c.left + ((p.x + 1) / 2) * c.width, y: c.top + ((1 - p.y) / 2) * c.height };`)(floorId, x, y, z),
    VIEWER,
    floorId,
    x,
    y,
    z,
  );
/** Long press at the cursor (quick menu): hold the button for `seconds`. */
const longPress = async (seconds = 0.8) => {
  await R.page.evaluate(() => {
    const r = document.createElement("div");
    r.id = "tut-hold";
    document.body.appendChild(r);
  });
  await R.page.mouse.down();
  const n = Math.max(1, Math.round(seconds * FPS));
  for (let i = 0; i < n; i++) await R.frame(1 / FPS, 30);
  await R.page.mouse.up();
  await R.page.evaluate(() => document.getElementById("tut-hold")?.remove());
  await R.frame(1 / FPS, 120);
};
/** Drag with the mouse (turning the 3D view) from the cursor by dx/dy. */
const turn = async (dx, dy, seconds = 1.2) => {
  const { x, y } = await R.page.evaluate(() => {
    const c = document.getElementById("tut-cursor").style.transform.match(/-?[\d.]+/g).map(Number);
    return { x: c[0] + 4, y: c[1] + 2 };
  });
  await R.drag(x + dx, y + dy, seconds);
};
/** The click ring at the cursor without clicking. */
const ringHere = async () => {
  await R.page.evaluate(() => {
    const c = document.getElementById("tut-cursor").style.transform.match(/-?[\d.]+/g).map(Number);
    const r = document.createElement("div");
    r.id = "tut-ring";
    r.style.left = `${c[0] + 4}px`;
    r.style.top = `${c[1] + 2}px`;
    document.body.appendChild(r);
    setTimeout(() => r.remove(), 500);
  });
  for (let i = 0; i < 8; i++) await R.frame(1 / FPS, 25);
};
/** Set a state on the mock Home Assistant (attributes merged). */
const setState = (id, state, attributes = {}) =>
  R.page.evaluate(
    (id, state, attributes) => {
      const panel = window.fp3dPanel;
      const hass = panel.hass;
      const old = hass.states[id];
      hass.states[id] = { entity_id: id, ...(old ?? {}), state, attributes: { ...(old?.attributes ?? {}), ...attributes } };
      panel.hass = { ...hass, states: { ...hass.states } };
    },
    id,
    state,
    attributes,
  );
/** A double tap at the cursor (two quick clicks, one ring). */
const dbl = async () => {
  const { x, y } = await R.page.evaluate(() => {
    const c = document.getElementById("tut-cursor").style.transform.match(/-?[\d.]+/g).map(Number);
    return { x: c[0] + 4, y: c[1] + 2 };
  });
  const ring = (x, y) =>
    R.page.evaluate((x, y) => {
      const r = document.createElement("div");
      r.id = "tut-ring";
      r.style.left = `${x}px`;
      r.style.top = `${y}px`;
      document.body.appendChild(r);
      setTimeout(() => r.remove(), 500);
    }, x, y);
  await ring(x, y);
  await R.page.mouse.click(x, y);
  await R.sleep(70);
  await ring(x, y);
  await R.page.mouse.click(x, y);
  for (let i = 0; i < 8; i++) await R.frame(1 / FPS, 25);
};
/** Mouse wheel at the cursor in small steps (zoom). */
const wheel = async (total, seconds = 1) => {
  const n = Math.max(1, Math.round(seconds * FPS));
  for (let i = 0; i < n; i++) {
    await R.page.mouse.wheel({ deltaY: total / n });
    await R.frame(1 / FPS, 30);
  }
};
/** A service call on the mock Home Assistant. */
const service = (domain, name, data) => R.page.evaluate((d, s, data) => window.fp3dPanel.hass.callService(d, s, data), domain, name, data);
/** Any visible element whose text contains `text` (innermost last match, or the n-th). */
const textBox = (text, nth = null, tags = "P|SPAN|DIV|LABEL|BUTTON|B|SMALL|SUMMARY|H3") =>
  R.page.evaluate(
    (text, nth, tags) => {
      const re = new RegExp(`^(${tags})$`);
      const walk = function* (root) {
        for (const el of root.querySelectorAll("*")) {
          yield el;
          if (el.shadowRoot) yield* walk(el.shadowRoot);
        }
      };
      const hits = [];
      for (const el of walk(document)) {
        if (!re.test(el.tagName) || !el.textContent.includes(text)) continue;
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.height > 0 && r.top < innerHeight && r.bottom > 0) hits.push(el);
      }
      const hit = nth === null ? hits[hits.length - 1] : hits[nth];
      if (!hit) return null;
      const r = hit.getBoundingClientRect();
      return { x: r.left + Math.min(r.width / 2, 120), y: r.top + Math.min(r.height / 2, 14) };
    },
    text,
    nth,
    tags,
  );
const moveToText = async (text, seconds = 0.5, nth = null, tags) => {
  const b = await textBox(text, nth, tags);
  if (!b) throw new Error(`text not found: ${text}`);
  await R.move(b.x, b.y, seconds);
};
/** A device pin of the main view (by entity), as a screen box. */
const pinBox = (entity) =>
  R.page.evaluate((entity) => {
    const walk = function* (root) {
      for (const el of root.querySelectorAll("*")) {
        yield el;
        if (el.shadowRoot) yield* walk(el.shadowRoot);
      }
    };
    for (const el of walk(document)) {
      if (el.dataset?.entity !== entity) continue;
      const r = el.getBoundingClientRect();
      if (r.width > 0) return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    }
    return null;
  }, entity);
/** Open the 3D view at the house with the stored defaults (a fresh page). */
const fresh = async (query = "") => {
  await R.open(query);
  await R.sleep(800);
};

// ================================================================ part a
if (PART === "a") {
  // ---------------------------------------------------------------- 1. Teaser
  await chapter("Teaser");
  await fresh();
  await R.hideCursor();
  await quiet(EYE, 700);
  {
    const d = await camNow();
    const a = { theta: d.theta - 0.7, phi: d.phi + 0.05, radius: d.radius * 1.05 };
    const b = { theta: d.theta + 0.3, phi: d.phi - 0.05, radius: d.radius * 0.92 };
    await cam(null, 0, 0, a);
    await R.sleep(1200);
    await R.title("Die 3D-Ansicht bedienen", `NeonPlan 3D · Folge 10 · Teil 1${VERSION}`);
    const l1 = "Die 3D-Ansicht ist das, was du jeden Tag benutzt: dein Haus live, zum Anschauen und zum Bedienen.";
    const l2 = "In dieser Folge zeige ich dir jeden Knopf und jeden Schalter darin.";
    const total = N.length(l1) + N.length(l2);
    const t0 = R.time;
    const step = async (end) => {
      const t1 = R.time;
      const n = Math.max(1, Math.round((end - t1) * FPS));
      for (let i = 1; i <= n; i++) {
        const k = ease((t1 - t0 + (i / n) * (end - t1)) / total);
        await cam(null, 0, 0, { theta: a.theta + (b.theta - a.theta) * k, phi: a.phi + (b.phi - a.phi) * k, radius: a.radius + (b.radius - a.radius) * k });
        await R.frame(1 / FPS, 15);
      }
    };
    await step(await line(l1));
    await R.untitle();
    await step(await line(l2));
  }

  // ---------------------------------------------------------------- 2. Intro
  await chapter("Worum es heute geht");
  await fresh();
  await R.move(960, 560, 0.01);
  await sayOver("Folge 10 hat zwei Teile. In Teil 1 geht es ums Navigieren und um alle Schalter der Ansicht.");
  await R.move(700, 1040, 1.2);
  await R.move(1500, 70, 1.4);
  await sayOver("Teil 2 zeigt das Bedienen: Lampen und Rollläden, Raumfenster, Stern, Suche, Warnungen und Startansichten. Ich nehme das Demo-Haus aus der Online-Demo.");
  await R.move(960, 520, 1.2);

  // ---------------------------------------------------------------- 3. House, floor, room
  await chapter("Haus, Etage, Raum");
  await sayOver("Oben auf „3D“ siehst du zuerst das ganze Haus. Jede Etage hat eine Beschriftung: wie viele Räume und wie viele Lichter gerade an sind.");
  await R.moveTo({ text: "3D", exact: true, nth: 0 }, 0.6);
  await R.hold(0.5);
  await R.moveTo('button[data-floor="og"]', 0.7);
  await R.hold(0.6);
  await R.moveTo('button[data-floor="eg"]', 0.6);
  await sayOver("Ziehen dreht die Ansicht, das Mausrad oder zwei Finger zoomen.");
  await R.move(1000, 640, 0.5);
  await turn(-320, -40, 1.4);
  await wheel(-500, 1.0);
  await wheel(400, 0.8);
  await sayOver("Ein Tipp auf die Beschriftung öffnet die Etage. Die Etagen darüber fliegen weg.");
  await clickLive('button[data-floor="eg"]', 0.6, 2.0);
  await sayOver("Ein Tipp auf einen Raum fliegt hinein, und rechts öffnet sich das Raumfenster – dazu mehr in Teil 2.");
  await clickLive('button[data-room="wohnen"]', 0.6, 2.4);
  await sayOver("Eine Ebene höher geht es mit Esc, mit „Zurück“ unten …");
  await R.move(1000, 640, 0.5);
  await R.key("Escape");
  await live(R.time + 1.2);
  await clickLive({ text: "Zurück", exact: true }, 0.7, 1.4);
  await sayOver("… oder mit einem Doppeltipp auf eine freie Stelle.");
  await clickLive('button[data-floor="eg"]', 0.6, 1.6);
  await R.move(1500, 260, 0.6);
  await dbl();
  await live(R.time + 0.7);
  await sayOver("Links stehen die Etagenbilder. Ein Tipp wechselt direkt zu einer Etage, das Haus darüber zeigt wieder alle.");
  await clickLive({ text: "Obergeschoss", exact: true, nth: 1 }, 0.6, 1.8);
  await clickLive({ text: "Alle Etagen", exact: true, nth: 1 }, 0.5, 1.4);
  await sayOver("Der kleine Pfeil darüber klappt sie zu schlichten Knöpfen ein – und wieder auf. Das merkt sich das Gerät.");
  await R.clickOn('button[aria-label="Etagenbilder zu Knöpfen einklappen"]', 0.6);
  await R.hold(1.0);
  await R.clickOn('button[aria-label="Etagenbilder wieder zeigen"]', 0.4);
  await sayOver("Oben in der Leiste stehen alle Etagen und die Räume. In der Hausansicht steht vor den Räumen jeder Etage ihr Name.");
  await R.moveTo({ text: "Alle Etagen", exact: true, nth: 0 }, 0.6);
  await R.hold(0.4);
  await moveToText("Erdgeschoss", 0.6, 1, "SPAN");
  await R.hold(0.4);
  await sayOver("Passen nicht alle in eine Zeile, scrollt die Leiste seitlich, am PC mit dem Mausrad. Der Knopf rechts bricht sie auf mehrere Zeilen um, ein zweiter Tipp holt die eine Zeile zurück.");
  await R.clickOn('button[aria-label="Leiste umbrechen: alle Etagen und Räume auf mehreren Zeilen"]', 0.8);
  await R.hold(1.2);
  await R.clickOn('button[aria-label="Leiste in einer Zeile (seitlich scrollen)"]', 0.5);

  // ---------------------------------------------------------------- 4. Walls
  await chapter("Wände hoch und Schnitt");
  await quiet('button[data-floor="eg"]', 1800);
  await sayOver("Unten liegen die Schalter. „Wände hoch“ zeigt die Wände in voller Höhe; die vorderen werden zu getöntem Glas, damit du trotzdem hineinsiehst.");
  await R.moveTo({ text: "Wände hoch", exact: true }, 0.7);
  await R.hold(0.3);
  await orbit(0.5, 0.75, 2.4);
  await sayOver("„Schnitt“ schneidet alle Wände auf Hüfthöhe. Hohe Möbel wie Schrank, Treppe oder Hochschrank werden mitgeschnitten, damit sie nichts dahinter verdecken.");
  await R.clickOn({ text: "Schnitt", exact: true }, 0.5);
  await orbit(-0.5, 1, 3.0);
  await sayOver("Die Wahl merkt sich jedes Gerät: Das Wandtablet zeigt vielleicht den Schnitt, das Handy die hohen Wände.");
  await R.clickOn({ text: "Wände hoch", exact: true }, 0.6);
  await R.hold(0.8);

  // ---------------------------------------------------------------- 5. Floors and roof
  await chapter("Etagen und Dach");
  await sayOver("In der Hausansicht kommen zwei Schalter dazu. „Auseinander“ zieht die Etagen auseinander, „Gestapelt“ setzt sie aufeinander wie im echten Haus.");
  await clickLive({ text: "Alle Etagen", exact: true, nth: 0 }, 0.6, 1.4);
  await R.clickOn({ text: "Gestapelt", exact: true }, 0.6);
  await live(R.time + 1.6);
  await R.clickOn({ text: "Auseinander", exact: true }, 0.5);
  await live(R.time + 1.2);
  await sayOver("Normalerweise hebt sich das Dach beim Heranzoomen und blendet sich aus, damit du ins Haus siehst.");
  await R.clickOn({ text: "Gestapelt", exact: true }, 0.5);
  await R.move(960, 560, 0.6);
  const houseCam = await camNow();
  await orbit(0, 0.75, 1.8);
  await live(R.time + 0.6);
  await sayOver("Mit „Dach bleibt“ bleibt es liegen – gut, wenn du das Haus von außen zeigen willst, etwa das Dach mit der Solaranlage.");
  await R.clickOn({ text: "Dach bleibt", exact: true }, 0.6);
  await live(R.time + 1.6);
  await R.clickOn({ text: "Dach bleibt", exact: true }, 0.4);
  await R.move(960, 560, 0.5);
  await glide(null, 0, 0, await camNow(), houseCam, 1.0);
  await R.clickOn({ text: "Auseinander", exact: true }, 0.5);
  await sayOver("Ist eine Etage offen, wählst du, was mit den Etagen darunter passiert: „Abgedunkelt“ …");
  await clickLive('button[data-floor="og"]', 0.6, 1.8);
  await R.moveTo({ text: "Abgedunkelt", exact: true }, 0.5);
  await R.hold(0.4);
  await sayOver("… „Gestapelt“ – das ganze Haus bis hier – oder „Einzeln“, nur diese eine Etage.");
  await R.clickOn({ text: "Gestapelt", exact: true }, 0.5);
  await live(R.time + 1.4);
  await R.clickOn({ text: "Einzeln", exact: true }, 0.5);
  await live(R.time + 1.2);
  await R.clickOn({ text: "Abgedunkelt", exact: true }, 0.5);

  // ---------------------------------------------------------------- 6. Heatmap
  await chapter("Heatmap und Werte");
  await quiet({ text: "Erdgeschoss", exact: true, nth: 0 }, 1800);
  await sayOver("Die nächste Gruppe ist die Heatmap. „Temp.“ färbt die Böden nach der Temperatur im Raum, am Rand steht die Farbskala.");
  await R.clickOn({ text: "Temp.", exact: true }, 0.6);
  await R.hold(0.6);
  await R.moveTo(".fp3d-legend", 0.6);
  await sayOver("Es zählen die Sensoren im Bereich des Raums. Die Einheit kommt aus Home Assistant, Celsius oder Fahrenheit, und wird richtig umgerechnet.");
  await orbit(0.35, 1, 2.2);
  await sayOver("„Feuchte“ und „CO2“ funktionieren genauso. Hat kein Raum so einen Sensor, steht das in der Skala.");
  await R.clickOn({ text: "Feuchte", exact: true }, 0.5);
  await R.hold(1.0);
  await R.clickOn({ text: "CO₂", exact: true }, 0.5);
  await R.hold(0.8);
  await sayOver("„Werte“ färbt nichts, sondern schreibt Temperatur, Feuchte und CO2 als Zahlen unter die Raumnamen.");
  await R.clickOn({ text: "Werte", exact: true }, 0.5);
  await R.hold(1.0);
  await sayOver("„Normal“ schaltet die Heatmap wieder ab.");
  await R.clickOn({ text: "Normal", exact: true }, 0.5);

  // ---------------------------------------------------------------- 7. Room names and the Pro switches
  await chapter("Raumnamen, Spur, Kameras und Wetter");
  await sayOver("„Raumnamen“ blendet die Namen der Räume aus und wieder ein – für ein ruhiges Bild an der Wand.");
  await R.clickOn({ text: "Raumnamen", exact: true }, 0.6);
  await R.hold(1.2);
  await R.clickOn({ text: "Raumnamen", exact: true }, 0.4);
  await sayOver("„Spur“ und „Kameras“ gehören zur Erweiterung Kamera-Cockpit, „Wetter“ zu Wetter draußen. Ohne die Erweiterung steht ein Schloss davor.");
  await R.moveTo({ text: "Spur", exact: true }, 0.6);
  await R.hold(0.6);
  await R.moveTo({ text: "Kameras", exact: true }, 0.4);
  await R.hold(0.6);
  await R.moveTo({ text: "Wetter", exact: true }, 0.4);
  await R.hold(0.6);

  // ---------------------------------------------------------------- 8. Quality and look
  await chapter("Qualität und Look");
  await sayOver("Oben rechts stehen die Ansichtsoptionen. Zuerst die Qualität: „Auto“ wählt selbst.");
  await R.moveTo({ text: "Auto", exact: true }, 0.8);
  await sayOver("„Tablet“ lässt Muster, Schatten und Lichthöfe weg. Das ist die sparsamste Stufe, auf Fire-Tablets wird sie von selbst gewählt.");
  await R.clickOn({ text: "Tablet", exact: true }, 0.5);
  await live(R.time + 1.5);
  await sayOver("„Hoch“ zeigt zusätzlich Lichtkegel unter den Spots, wie hier im Bad.");
  await R.clickOn({ text: "Hoch", exact: true }, 0.5);
  await live(R.time + 1.2);
  await R.clickOn({ text: "Auto", exact: true }, 0.5);
  await sayOver("Daneben der Look: „Neon“ ist der Standard, „Blueprint“ sieht aus wie ein Bauplan, und „Tag“ zeigt das Haus hell.");
  await R.clickOn({ text: "Blueprint", exact: true }, 0.6);
  await live(R.time + 1.4);
  await R.clickOn({ text: "Tag", exact: true }, 0.5);
  await live(R.time + 1.4);
  await R.clickOn({ text: "Neon", exact: true }, 0.5);
  await sayOver("Das Farbfeld daneben setzt deine eigene Akzentfarbe. Im Neon-Look nehmen Linien und Leuchtkanten sie an, Knöpfe und Pins in jedem Look.");
  // only a ring on the colour field: a real click would open the native colour picker
  await R.moveTo('input[aria-label="Akzentfarbe"]', 0.6);
  await ringHere();
  await R.page.evaluate(() => {
    const walk = function* (root) {
      for (const el of root.querySelectorAll("*")) {
        yield el;
        if (el.shadowRoot) yield* walk(el.shadowRoot);
      }
    };
    for (const el of walk(document)) {
      if (el.matches?.('input[aria-label="Akzentfarbe"]')) {
        el.value = "#ff8a00";
        el.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
      }
    }
  });
  await live(R.time + 1.6);
  await sayOver("Der Pfeil daneben bringt das Cyan zurück.");
  await R.clickOn('button[aria-label="Zurück zu Cyan"]', 0.5);
  await R.hold(0.5);

  // ---------------------------------------------------------------- 9. Markers, controls side, keep view, FPS
  await chapter("Symbole, Seite, Ansicht halten, FPS");
  // a calm house for the FPS counter (music paused, no colour effect, the robot docked, no solar sweep)
  for (const id of ["media_player.kueche_lautsprecher", "media_player.bad_lautsprecher", "media_player.fernseher"]) await setState(id, "paused");
  await setState("light.led_band", "on", { effect: "none" });
  await setState("vacuum.saugi", "docked");
  // the solar modules sweep while they produce: evening for the counter
  await setState("sensor.pv_leistung", "0");
  await setState("sensor.balkon_leistung", "0");
  await sayOver("„Symbole“ bestimmt, welche Gerätesymbole erscheinen. „Alle“ zeigt jedes Gerät …");
  await R.clickOn({ text: "Alle", exact: true }, 0.6);
  await R.hold(1.0);
  await sayOver("„Wichtige“ nur Geräte ohne eigenes 3D-Modell und Werte wie Watt oder die laufende App. „Keine“ blendet sie aus.");
  await R.clickOn({ text: "Wichtige", exact: true }, 0.5);
  await R.hold(1.0);
  await R.clickOn({ text: "Keine", exact: true }, 0.5);
  await R.hold(0.8);
  await R.clickOn({ text: "Wichtige", exact: true }, 0.5);
  await sayOver("Die zwei Knöpfe mit den halben Kästchen setzen Etagenbilder, Stern, Suche und Auge nach links oder nach rechts – praktisch, wenn die Ansicht am linken Rand des Dashboards sitzt.");
  await R.clickOn('button[aria-label="Bedienleiste rechts"]', 0.6);
  await R.hold(1.4);
  await R.clickOn('button[aria-label="Bedienleiste links"]', 0.5);
  await sayOver("Das Fadenkreuz heißt „Ansicht halten“: Wechselst du die Etage, bleibt die Kamera, wo sie ist, nur die Höhe wandert mit.");
  await R.clickOn('button[aria-label="Ansicht halten"]', 0.6);
  await R.move(1000, 640, 0.5);
  await turn(-150, 20, 0.9);
  await clickLive({ text: "Obergeschoss", exact: true, nth: 1 }, 0.6, 1.6);
  await clickLive({ text: "Erdgeschoss", exact: true, nth: 1 }, 0.5, 1.4);
  await R.clickOn('button[aria-label="Ansicht halten"]', 0.6);
  await sayOver("„FPS“ zeigt unten rechts die Bildrate, das langsamste Bild und den Grund für jedes gezeichnete Bild.");
  await R.clickOn({ text: "FPS", exact: true }, 0.6);
  await live(R.time + 1.0);
  await sayOver("In Ruhe steht dort null Bilder pro Sekunde: NeonPlan zeichnet nur, wenn sich etwas ändert. Darum läuft es auch auf alten Wandtablets.");
  await live(R.time + 2.0);
  await R.clickOn({ text: "FPS", exact: true }, 0.5);
  await sayOver("Ganz rechts steht die installierte Version. Auf dem Handy klappt ein Zahnrad diese Optionen auf und wieder zu.");
  await moveToText("v1.", 0.6, null, "SPAN");
  await R.hold(0.6);

  // ---------------------------------------------------------------- 10. The eye
  await chapter("Das Auge");
  await sayOver("Unten links, neben der Lupe, sitzt das Auge. Ein Tipp blendet alles aus, was nicht die 3D-Ansicht ist: Kopfzeile, Leisten, Etagenbilder und Schalter.");
  await R.clickOn(EYE, 0.7);
  await live(R.time + 1.2);
  await sayOver("Auch die Energiewerte oben links verschwinden – die zeigt die Pro-Erweiterung Energie Pro.");
  await R.move(180, 160, 0.8);
  await sayOver("Ein Raum lässt sich weiter antippen, und ein Tipp aufs Auge holt alles zurück. Auch diese Wahl merkt sich jedes Gerät, wie alle Schalter.");
  await R.clickOn(EYE_BACK, 0.7);
  await R.hold(0.8);

  // ---------------------------------------------------------------- 11. Outro
  await chapter("Wie geht es weiter");
  await catchUp();
  await fresh();
  await R.hideCursor();
  await quiet(EYE, 700);
  {
    const d = await camNow();
    const a = { theta: d.theta + 0.2, phi: d.phi, radius: d.radius };
    const b = { theta: d.theta + 1.0, phi: d.phi - 0.08, radius: d.radius * 0.9 };
    await cam(null, 0, 0, a);
    await R.sleep(700);
    const end = await line("Das waren Haus, Etage und Raum und alle Schalter der Ansicht.");
    await glide(null, 0, 0, a, { ...b, theta: 0.5 }, end - R.time);
    await R.title("Teil 2: Das Haus bedienen", `NeonPlan 3D – läuft auch auf alten Wandtablets${VERSION}`);
    let e2 = await line("In Teil 2 bedienen wir das Haus: Lampen, Rollläden, Raumfenster, Stern, Suche, Warnungen und Startansichten.");
    await glide(null, 0, 0, { ...b, theta: 0.5 }, b, e2 - R.time);
    e2 = await line("Links zur Online-Demo und zur Anleitung stehen in der Beschreibung. Bis gleich!");
    await live(e2 + 0.6);
  }
}

// ================================================================ part b
if (PART === "b") {
  /** Range inputs of the room panel (brightness, colour temperature, position …) as screen boxes, top to bottom. */
  const panelSliders = () =>
    R.page.evaluate(() => {
      const panel = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-room-panel");
      const root = panel.shadowRoot ?? panel.renderRoot;
      return [...root.querySelectorAll('input[type="range"]')]
        .map((el) => el.getBoundingClientRect())
        .filter((r) => r.width > 0 && r.top > 120 && r.bottom < 1060)
        .map((r) => ({ x: r.left, y: r.top + r.height / 2, w: r.width }));
    });
  /** Scroll the room panel with the wheel over it. */
  const panelWheel = async (dy, seconds = 0.8) => {
    await R.move(1720, 640, 0.4);
    await wheel(dy, seconds);
  };
  /** The camera of the demo reports motion now and then; quiet for the lamp scenes. */
  const noMotion = () =>
    R.page.evaluate(() => {
      const panel = window.fp3dPanel;
      const hass = panel.hass;
      for (const id of ["binary_sensor.wohnzimmer_kamera_bewegung", "binary_sensor.wohnzimmer_kamera_person"]) hass.states[id] = { ...hass.states[id], state: "off" };
      panel.hass = { ...hass, states: { ...hass.states } };
    });
  /** The editor's 3D pane: its centre, its camera, and setting its camera around a plan point. */
  const PANE = `const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor"); const v = e.renderRoot.querySelector("fp3d-view3d"); const viewer = Object.values(v).find((o) => o && o.floors && o.floorMap);`;
  const paneCentre = () =>
    R.page.evaluate((PANE) => new Function(`${PANE} const r = v.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 };`)(), PANE);
  const paneView = () => R.page.evaluate((PANE) => new Function(`${PANE} const w = viewer.controls.view; return { theta: w.theta, phi: w.phi, radius: w.radius };`)(), PANE);
  const pane = (floorId, x, z, c) =>
    R.page.evaluate(
      (PANE, floorId, x, z, c) =>
        new Function("floorId", "x", "z", "c", `${PANE}
          const fv = viewer.floorMap.get(floorId);
          const t = fv.group.position.clone().set(x, c.y ?? 0, z);
          fv.group.localToWorld(t);
          viewer.controls.view.target.copy(t);
          Object.assign(viewer.controls.view, { theta: c.theta, phi: c.phi, radius: c.radius });
          viewer.invalidate();`)(floorId, x, z, c),
      PANE,
      floorId,
      x,
      z,
      c,
    );
  /** Close a quick menu with a tap on an empty floor spot. */
  const away = async () => {
    const open = await R.locate(".fp3d-menu-backdrop").catch(() => null);
    if (!open) return;
    await R.page.mouse.click(1700, 980);
    await R.sleep(300);
  };

  // ---------------------------------------------------------------- 1. Teaser
  await chapter("Teaser");
  await fresh();
  await R.hideCursor();
  await quiet('button[data-floor="eg"]', 1800);
  await quiet(EYE, 700);
  {
    const a = { theta: -0.2, phi: 0.8, radius: 10, y: 0.4 };
    const b = { theta: 0.45, phi: 0.72, radius: 8.5, y: 0.4 };
    await cam("eg", 6.5, 2.4, a);
    await R.sleep(1200);
    await R.title("Die 3D-Ansicht bedienen", `NeonPlan 3D · Folge 10 · Teil 2${VERSION}`);
    const l1 = "Licht an, Rollladen runter, eine Szene starten – alles direkt im 3D-Haus.";
    const l2 = "In Teil 2 zeige ich dir, wie du dein Zuhause in der 3D-Ansicht bedienst.";
    const total = N.length(l1) + N.length(l2);
    const t0 = R.time;
    const step = async (end) => {
      const t1 = R.time;
      const n = Math.max(1, Math.round((end - t1) * FPS));
      for (let i = 1; i <= n; i++) {
        const k = ease((t1 - t0 + (i / n) * (end - t1)) / total);
        await cam("eg", 6.5, 2.4, { theta: a.theta + (b.theta - a.theta) * k, phi: a.phi + (b.phi - a.phi) * k, radius: a.radius + (b.radius - a.radius) * k, y: 0.4 });
        await R.frame(1 / FPS, 15);
      }
    };
    await step(await line(l1));
    await R.untitle();
    await step(await line(l2));
  }

  // ---------------------------------------------------------------- 2. Intro
  await chapter("Worum es heute geht");
  await fresh();
  await quiet('button[data-floor="eg"]', 1800);
  await R.move(960, 560, 0.01);
  await sayOver("In Teil 1 ging es ums Navigieren und um die Schalter. Jetzt bedienen wir: Lampen, Rollläden, das Raumfenster, den Stern mit den Favoriten und die Suche.");
  await R.move(1300, 600, 1.4);
  await sayOver("Danach Warnungen, Sonnenlicht, Kameras und die Startansicht für Haus, Etage und Raum.");
  await R.move(60, 950, 1.2);

  // ---------------------------------------------------------------- 3. Lamps
  await chapter("Lampen schalten und dimmen");
  await noMotion();
  await cam("eg", 4.2, 1.6, { theta: -0.35, phi: 0.78, radius: 9, y: 0.6 });
  await R.sleep(800);
  await sayOver("Ein Tipp auf eine Lampe schaltet sie. Sie blinkt kurz zur Bestätigung.");
  {
    const p = await point3d("eg", 5.3, 1.35, 0.7);
    await R.move(p.x, p.y, 0.7);
    await R.click();
    await live(R.time + 1.2);
    await R.click();
    await live(R.time + 0.8);
  }
  await sayOver("Senkrecht wischen dimmt: nach oben heller, nach unten dunkler. Der Wert steht dabei am Finger.");
  {
    const p = await point3d("eg", 5.3, 1.35, 0.7);
    await R.move(p.x, p.y, 0.3);
    await R.page.mouse.down();
    await R.move(p.x, p.y - 170, 1.4);
    await R.move(p.x, p.y - 70, 0.9);
    await R.page.mouse.up();
    await live(R.time + 0.6);
  }
  await sayOver("Lange drücken öffnet das Schnellmenü: Helligkeit, Farbtemperatur und Farben.");
  {
    const p = await point3d("eg", 5.3, 1.35, 0.7);
    await R.move(p.x, p.y, 0.4);
    await longPress(0.8);
    await R.hold(0.6);
    const sw = await R.locate(".qm-swatch").catch(() => null);
    if (sw) {
      await R.move(sw.x, sw.y, 0.5);
      await R.click();
    }
    await live(R.time + 0.8);
  }
  await sayOver("Ein Doppeltipp auf den Boden eines Raums schaltet alle Lichter des Raums aus – und wieder an.");
  {
    await away();
    const p = await point3d("eg", 2.2, 0, 3.6);
    await R.move(p.x, p.y, 0.6);
    await dbl();
    await live(R.time + 1.6);
    await dbl();
    await R.sleep(150);
    const off = await R.page.evaluate(() => window.fp3dPanel.hass.states["light.wohnzimmer_decke"].state !== "on");
    if (off) {
      console.log("double tap on: fallback");
      for (const id of ["light.wohnzimmer_decke", "light.stehlampe", "light.led_band"]) await service("light", "turn_on", { entity_id: id });
    }
    await live(R.time + 1.0);
  }
  await sayOver("Geräte mit „Vor dem Schalten nachfragen“ bleiben dabei außen vor und reagieren auch nicht aufs Wischen – das war Folge 6.");
  await R.move(1100, 700, 1.0);

  // ---------------------------------------------------------------- 4. Blinds, windows, TV
  await chapter("Rollläden, Fenster und Fernseher");
  await sayOver("Auf einem Rollladen oder Fenster fährt senkrechtes Wischen den Rollladen.");
  {
    const p = await point3d("eg", 1.6, 1.6, 0.05);
    await R.move(p.x, p.y, 0.6);
    await R.page.mouse.down();
    await R.move(p.x, p.y + 150, 1.4);
    await R.page.mouse.up();
    await live(R.time + 1.2);
  }
  await sayOver("Lange drücken zeigt „Auf“, „Stopp“, „Zu“ und feste Positionen.");
  {
    const p = await point3d("eg", 1.6, 1.6, 0.05);
    await R.move(p.x, p.y, 0.4);
    await longPress(0.8);
    await R.hold(0.8);
  }
  await sayOver("Raffstores und Jalousien mit Lamellen bekommen hier und im Raumfenster zusätzlich einen Lamellen-Regler, sobald die Entität das kann.");
  await R.move(1200, 520, 0.8);
  await R.hold(0.4);
  await sayOver("Ein Tipp aufs Fenster – egal ob Rahmen, Glas oder Rollladen – öffnet dieses Menü, wie hier in der Küche. Ein Fenster ohne Rollladen zeigt seinen Kontakt.");
  {
    await away();
    await cam("eg", 6.5, 1.6, { theta: -0.35, phi: 0.78, radius: 9.5, y: 0.6 });
    await R.frame(0.2, 300);
    const p = await point3d("eg", 8.4, 1.6, 0.05);
    await R.move(p.x, p.y, 0.6);
    await R.click();
    await R.hold(1.0);
  }
  await sayOver("Fernseher, Türen und Garagentore lassen sich ebenfalls direkt antippen.");
  {
    await away();
    await cam("eg", 3.0, 1.6, { theta: -0.35, phi: 0.78, radius: 9, y: 0.6 });
    await R.frame(0.2, 300);
    const p = await point3d("eg", 3.0, 1.1, 0.35);
    await R.move(p.x, p.y, 0.6);
    await R.click();
    await R.hold(1.2);
    await away();
  }

  // ---------------------------------------------------------------- 5. The room panel
  await chapter("Das Raumfenster");
  await sayOver("Tippe ich auf den Raum, fliegt die Kamera hinein, und rechts öffnet sich das Raumfenster. Auf dem Handy und hochkant sitzt es unten.");
  await clickLive('button[data-room="wohnen"]', 0.6, 2.2);
  await sayOver("Oben stehen Name und Raumwerte, darunter die Geräte nach Art. Bei „Licht“ hat jede Lampe ihren Schalter, Helligkeit, Farbtemperatur und Farben.");
  await moveToText("21,4", 0.6, null, "P");
  await R.hold(0.4);
  {
    const sl = await panelSliders();
    const b = sl[4] ?? sl[0];
    await R.move(b.x + b.w * 0.6, b.y, 0.6);
    await R.drag(b.x + b.w * 0.9, b.y, 0.9);
  }
  await sayOver("„Alle aus“ schaltet alle Lichter des Raums. Sind alle aus, steht dort „Alle an“.");
  await R.moveTo({ text: "Alle aus", exact: true }, 0.6);
  await R.hold(0.6);
  await sayOver("Rollläden haben „Auf“, „Stopp“, „Zu“ und die Position, bei mehreren auch „Alle auf“ und „Alle zu“.");
  await R.moveTo({ text: "Stopp", exact: true }, 0.6);
  await R.hold(0.6);
  await sayOver("Weiter unten: die Heizung mit Solltemperatur und Modus, Medien mit Lautstärke, Schalter, Kameras mit Standbild, Sensoren und die Szenen und Skripte des Bereichs.");
  await panelWheel(500, 1.2);
  await R.hold(0.6);
  await panelWheel(700, 1.4);
  await R.hold(0.6);
  await sayOver("Das Raumfenster zeigt die Geräte, die im Plan im Raum stehen, und alles, was du im Editor mit dem Stern dazugenommen hast. „Weitere Geräte des Bereichs“ blendet den Rest ein.");
  await panelWheel(1500, 1.0);
  {
    // the panel's last row sits partly under the switch bar: click its right end, which stays free
    const m = await R.locate({ text: "Weitere Geräte des Bereichs" }).catch(() => null);
    if (m) {
      await R.move(m.x + m.w / 2 - 25, m.y, 0.6);
      await R.click();
      await R.hold(0.6);
      await panelWheel(400, 0.6);
    } else console.log("no „Weitere Geräte des Bereichs“");
  }
  await sayOver("Ein Tipp auf einen Gerätenamen öffnet die Details aus Home Assistant, das Kreuz oben schließt das Fenster.");
  await panelWheel(-4000, 1.0);
  await moveToText("Deckenlicht", 0.5, null, "BUTTON");
  await R.hold(0.5);
  await R.clickOn('button[aria-label="Schließen"]', 0.6);
  await live(R.time + 0.8);
  await sayOver("In der Dashboard-Karte lässt sich das Raumfenster abschalten. Dann stehen die Szenen und Skripte des Raums unten als Knöpfe – mehr dazu in Folge 11.");
  await R.move(960, 990, 1.0);

  // ---------------------------------------------------------------- 6. The star
  await chapter("Der Stern: Zentral-Menü und Favoriten");
  await sayOver("Der Stern unten links öffnet das Zentral-Menü: alle Lichter an oder aus und alle Rollläden auf oder zu – für die Etage, die du gerade siehst.");
  await R.clickOn(STAR, 0.7);
  await R.hold(0.5);
  await R.clickOn({ text: "Aus", exact: true }, 0.6);
  await live(R.time + 1.2);
  await R.clickOn({ text: "An", exact: true }, 0.5);
  await live(R.time + 0.8);
  await sayOver("In der Hausansicht gilt es fürs ganze Haus. Dann fragt der Knopf erst „Sicher?“, und nur ein zweiter Tipp führt es aus. Garagentore zählen dabei nicht als Rollläden.");
  await R.clickOn({ text: "Alle Etagen", exact: true, nth: 0 }, 0.6);
  await live(R.time + 1.0);
  await R.clickOn(STAR, 0.6);
  await R.hold(0.4);
  await R.clickOn({ text: "Aus", exact: true }, 0.6);
  await R.hold(1.6);
  await sayOver("Darunter stehen deine Favoriten: Szenen, Skripte, Automationen, Tasten und Schalter. Ein Tipp startet die Szene oder schaltet den Schalter um.");
  await R.clickOn({ text: "Wohnzimmer Film", exact: true }, 0.6);
  await R.hold(0.6);
  await moveToText("Gute Nacht", 0.5, null, "BUTTON");
  await sayOver("Und ganz unten deine eigenen Knöpfe: Sie öffnen eine Dashboard-Seite oder die Details einer Entität, rufen einen Dienst auf oder öffnen ein Popup mit deiner eigenen Karte. Ein Knopf leuchtet, solange seine Entität an ist.");
  await moveToText("Rollos", 0.6, null, "BUTTON");
  await R.hold(0.6);
  await moveToText("Energie", 0.5, null, "BUTTON");
  await R.hold(0.6);
  await R.clickOn(STAR, 0.6);

  // ---------------------------------------------------------------- 7. Search
  await chapter("Suchen: Wo ist …?");
  await sayOver("Die Lupe darunter öffnet „Wo ist …?“. Tippe einen Gerätenamen oder einen Raum …");
  await R.clickOn(FIND, 0.6);
  await R.clickOn('input[type="search"]', 0.4);
  await R.type("Stehl", 0.12);
  await R.hold(0.6);
  await sayOver("… ein Tipp auf den Treffer fliegt die Kamera hin, und das Gerät blinkt.");
  await moveToText("Stehlampe", 0.5, null, "B");
  await R.click();
  await live(R.time + 2.6);
  await sayOver("Ist der Treffer ein Raum, öffnet sich gleich der Raum.");
  await R.clickOn(FIND, 0.6);
  await R.clickOn('input[type="search"]', 0.4);
  await R.type("Kinder", 0.1);
  await R.hold(0.4);
  await moveToText("Kinderzimmer", 0.5, null, "B");
  await R.click();
  await live(R.time + 1.0);

  // ---------------------------------------------------------------- 8. Warnings
  await chapter("Warnungen");
  await fresh("alerts");
  await quiet('button[data-floor="eg"]', 2000);
  await sayOver("NeonPlan warnt kostenlos und ohne Einrichtung. Hier meldet der Rauchmelder in der Küche Rauch: Der Raum pulsiert rot, und oben erscheint ein Banner.");
  await R.move(960, 560, 0.4);
  await live(R.time + 1.0);
  await moveToText("Rauch", 0.7, null, "BUTTON");
  await live(R.time + 1.0);
  await sayOver("Ein Tipp auf die Warnung springt in den Raum.");
  await R.click();
  await live(R.time + 2.0);
  await sayOver("Warnungen gibt es für Rauch, Gas, Kohlenmonoxid und Wasser, für eine ausgelöste Alarmanlage und für offene Fenster bei Regen – wie das Küchenfenster gerade.");
  await moveToText("Regen", 0.7, null, "BUTTON");
  await live(R.time + 1.6);
  await sayOver("Die Regenwarnung nimmt die Wetter-Entität aus den Einstellungen des Plans. Dort lässt sie sich unter „Warnung: Fenster offen bei Regen“ auch einzeln abschalten.");
  await live(R.time + 1.0);

  // ---------------------------------------------------------------- 9. Sun and daylight
  await chapter("Sonne und Tageslicht");
  await fresh();
  await quiet('button[data-floor="eg"]', 1500);
  // cut walls: the sun patch on the bedroom floor is not hidden behind the wall
  await quiet({ text: "Schnitt", exact: true }, 600);
  await noMotion();
  await cam("eg", 2.2, 6.3, { theta: 0, phi: 0.85, radius: 9, y: 0.3 });
  await R.sleep(800);
  await sayOver("Ist im Editor die Nordrichtung eingestellt, fällt das Sonnenlicht aus Home Assistant durch die Fenster, die zur Sonne zeigen – als weiche Flecken auf dem Boden, wie hier im Schlafzimmer.");
  await glide("eg", 2.2, 6.3, { theta: 0, phi: 0.85, radius: 9, y: 0.3 }, { theta: 0.45, phi: 0.75, radius: 8, y: 0.3 }, 3.0);
  await sayOver("Heruntergelassene Rollläden machen die Flecken kleiner. Tagsüber wird außerdem der Himmel hinter dem Haus heller.");
  await glide("eg", 2.2, 6.3, { theta: 0.45, phi: 0.75, radius: 8, y: 0.3 }, { theta: 0.45, phi: 1.05, radius: 16, y: 0.3 }, 2.6);
  await sayOver("Wer die Flecken nicht mag, schaltet sie in den Einstellungen mit „Sonnenlicht durch die Fenster“ ab.");
  await live(R.time + 0.8);

  // ---------------------------------------------------------------- 10. Cameras in 3D
  await chapter("Kameras in 3D");
  await cam("eg", 1.6, 1.6, { theta: -0.75, phi: 0.72, radius: 6.8, y: 0.6 });
  await R.sleep(700);
  await sayOver("Ein Tipp auf eine Kamera oder auf ihren Sichtkegel öffnet das Standbild. Es erneuert sich alle paar Sekunden, und der Kegel ist die viel größere Tippfläche.");
  {
    const p = await point3d("eg", 1.2, 0.02, 1.3);
    await R.move(p.x, p.y, 0.7);
    await R.click();
    await R.hold(1.0);
  }
  await sayOver("Ein Tipp aufs Bild öffnet das Livebild von Home Assistant.");
  await R.moveTo(".qm-camera", 0.6).catch(() => {});
  await R.hold(0.6);
  await away();

  // ---------------------------------------------------------------- 11. Start views
  await chapter("Startansicht für Haus, Etage und Raum");
  await sayOver("Zum Schluss die Startansichten. Du stellst sie im Editor ein, mit „3D daneben“.");
  await R.clickOn({ text: "Editor", exact: true }, 0.6);
  await R.sleep(1200);
  await R.clickOn({ text: "3D daneben", exact: true }, 0.6);
  await live(R.time + 1.6);
  await sayOver("Fürs ganze Haus drehst du die 3D-Ansicht rechts, bis dir das Bild gefällt – zum Beispiel von der Gartenseite.");
  {
    const c = await paneCentre();
    await R.move(c.x + 160, c.y + 120, 0.5);
    await ringHere();
    // the turn itself: a smooth glide of the pane's camera while the cursor drags
    const a = await paneView();
    const b = { theta: a.theta + 2.2, phi: 0.95, radius: 24 };
    for (let i = 1, n = FAST ? 2 : 35; i <= n; i++) {
      const k = ease(i / n);
      await pane("eg", 6.8, 4.6, { theta: a.theta + (b.theta - a.theta) * k, phi: a.phi + (b.phi - a.phi) * k, radius: a.radius + (b.radius - a.radius) * k, y: 0 });
      await R.page.evaluate((x, y) => {
        const c = document.getElementById("tut-cursor");
        if (c) c.style.transform = `translate(${x - 4}px, ${y - 2}px)`;
      }, c.x + 160 - 360 * k, c.y + 120);
      await R.frame(1 / FPS, 40);
    }
    await R.move(c.x - 200, c.y + 120, 0.01);
  }
  await sayOver("Dann unten in der Seitenleiste „Startansicht“ aufklappen und „Aktuelle 3D-Ansicht als Start merken“. So öffnen 3D-Ansicht, Karte und Kiosk das Haus.");
  await R.move(1760, 700, 0.5);
  await R.scrollTo("Startansicht", 300, 0.8);
  await R.clickOn({ text: "Startansicht", exact: true }, 0.5);
  await R.hold(0.4);
  await R.clickOn({ text: "Aktuelle 3D-Ansicht als Start merken", exact: true }, 0.6);
  await R.hold(0.6);
  await sayOver("Darunter steht die Zeile für die YAML einer Karte, falls eine Karte anders starten soll. „Standard“ nimmt die eigene Startansicht wieder zurück.");
  await R.moveTo(".fp3d-code", 0.6).catch(() => {});
  await R.hold(0.6);
  await R.moveTo({ text: "Standard", exact: true }, 0.5);
  await sayOver("Für eine Etage steht oben „Ansicht als Start der Etage“ – das kennst du aus Folge 3.");
  await R.move(1760, 500, 0.4);
  await R.scrollTo("Ansicht als Start der Etage", 450, 0.8);
  await R.moveTo({ text: "Ansicht als Start der Etage", exact: true }, 0.5);
  await R.hold(0.6);
  await sayOver("Und für einen Raum: Raum antippen, die 3D-Ansicht auf den Raum drehen und heranzoomen …");
  await R.clickOn({ text: "Wohnzimmer", nth: 0 }, 0.6).catch(async () => {
    await R.editor(`e.selectItem("room", "wohnen");`);
  });
  if ((await R.editor(`return e._roomId;`)) !== "wohnen") await R.editor(`e.selectItem("room", "wohnen");`);
  await R.frame(0.2, 400);
  {
    const c = await paneCentre();
    await R.move(c.x, c.y, 0.5);
    const a = await paneView();
    const b = { theta: -0.55, phi: 0.78, radius: 9 };
    for (let i = 1, n = FAST ? 2 : 40; i <= n; i++) {
      const k = ease(i / n);
      await pane("eg", 3, 2.3, { theta: a.theta + (b.theta - a.theta) * k, phi: a.phi + (b.phi - a.phi) * k, radius: a.radius + (b.radius - a.radius) * k, y: 0.5 });
      await R.frame(1 / FPS, 40);
    }
  }
  await sayOver("… dann „Ansicht als Start des Raums“. Der Pfeil daneben nimmt sie wieder weg.");
  await R.move(1760, 500, 0.4);
  await R.scrollTo("Ansicht als Start des Raums", 520, 0.8);
  await R.clickOn({ text: "Ansicht als Start des Raums", exact: true }, 0.5);
  await R.hold(0.4);
  await R.moveTo('button[title="Startansicht des Raums entfernen (wieder von oben)"]', 0.5).catch(() => {});
  await R.hold(0.5);
  await sayOver("Unter „Favoriten“ legst du fest, was im Stern erscheint, dazu die eigenen Knöpfe.");
  await R.clickOn({ text: "Zurück zur Etage" }, 0.5);
  await R.frame(0.1, 300);
  {
    const fav = () =>
      R.page.evaluate(() => {
        const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
        const sm = [...e.renderRoot.querySelectorAll("summary")].find((x) => x.textContent.trim().startsWith("Favoriten"));
        if (!sm) return null;
        const r = sm.getBoundingClientRect();
        return { x: r.left + 60, y: r.top + r.height / 2 };
      });
    await R.move(1760, 700, 0.4);
    let f = await fav();
    if (f) {
      const n = FAST ? 2 : 20;
      const total = f.y - 200;
      let done = 0;
      for (let i = 1; i <= n; i++) {
        const step = Math.round(total * ease(i / n)) - done;
        done += step;
        if (step) await R.page.mouse.wheel({ deltaY: step });
        await R.frame(1 / FPS, 30);
      }
      f = await fav();
      await R.move(f.x, f.y, 0.5);
      await R.click();
      await R.hold(0.4);
      await R.move(f.x + 60, f.y + 260, 0.8);
    } else console.log("no Favoriten summary");
  }
  await sayOver("Zurück in 3D: Ein Tipp aufs Wohnzimmer – und die Kamera fliegt genau in diese Ansicht.");
  await R.clickOn({ text: "3D", exact: true, nth: 0 }, 0.6);
  await R.sleep(1200);
  await clickLive({ text: "Wohnzimmer", exact: true, nth: 0 }, 0.6, 2.6);

  // ---------------------------------------------------------------- 12. Outro
  await chapter("Zusammenfassung");
  await catchUp();
  await fresh();
  await R.hideCursor();
  await quiet(EYE, 700);
  {
    const a = { theta: -0.6, phi: 0.95, radius: 28 };
    const b = { theta: 0.4, phi: 0.85, radius: 24 };
    await cam(null, 0, 0, a);
    await R.sleep(700);
    const end = await line("Kurz zusammengefasst: antippen schaltet, wischen dimmt, lange drücken öffnet das Schnellmenü. Dazu Raumfenster, Stern, Suche und Warnungen.");
    await glide(null, 0, 0, a, b, end - R.time);
  }
  await R.title("Nächste Folge: Dashboard-Karte und Wandtablet", `NeonPlan 3D – läuft auch auf alten Wandtablets${VERSION}`);
  {
    let end = await line("In der nächsten Folge bringen wir die 3D-Ansicht als Karte ins Dashboard und aufs Wandtablet.");
    await live(end);
    end = await line("Links zur Online-Demo und zur Anleitung stehen in der Beschreibung. Und NeonPlan 3D läuft auch auf alten Wandtablets. Bis zum nächsten Mal!");
    await live(end + 0.6);
  }
}

N.report();
const result = await R.finish();
console.log(`recorded ${result.frames} frames, ${result.duration.toFixed(1)} s → ${out}`);
