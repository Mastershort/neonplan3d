// Tutorial episode 6 – "Geräte, Lampen und Kameras", in two parts (the checklist does not fit into 8 minutes):
//   a) Geräte platzieren, Symbole und Namen: the device list of a room (grouping, „+n weitere“, which sensors show,
//      search, the sources „Dieser Bereich“ / „Andere Bereiche“ / „Ohne Bereich“), „Platzieren“, „Alle n platzieren …“
//      with undo, ☆ / 👁 / Aa for the room panel (checked live in 3D), „Raumklima“, the device form (X/Y, symbol
//      height, turn, „Fixieren“, „In Raummitte“, „Entfernen“), „Vor dem Schalten nachfragen“ (live in 3D), „Symbol
//      in 3D“ and the „Symbole“ switch, watts from a power sensor (Energie Pro hologram in one sentence), an own mdi
//      icon, an own name under the symbol, „Als Möbel darstellen“ / „Wieder als Geräte-Pin“.
//   b) Lampen und Kameras: the lamp types, a wall light with its light, „Farbe und Helligkeit von“, „Leuchtstärke in
//      3D“, pendant shapes, the table lamp on its nightstand, a light as a plain pin with its mount, LED strips,
//      „Spots setzen“, operating lamps live in 3D (tap, swipe, quick menu, double tap), cameras (mount, cone, handle,
//      angle, reach, tilt, cone in 3D, red on motion, still and live picture; Kamera-Cockpit in one sentence).
// The full demo house (invented data, mock Home Assistant). Setup steps before a scene are invisible.
// Usage (from frontend/): node tutorials/ep06-geraete-lampen-kameras.mjs <out-dir> a|b [<voice-dir de> [<voice-dir en>]]
//   (voice dirs: private/tutorial-audio/ep06a/de and …/en, resp. ep06b)
// EP06_FAST=1: a quick dry run for checking the steps (the timing is not usable).
// Then: python ../tools/make-tutorial.py <out-dir> <out.mp4> --en tutorials/ep06a-narration-en.json

import { appVersion, FPS, narration, startRecorder } from "./recorder.mjs";
import { helpers } from "./ep02-common.mjs";

const out = process.argv[2] ?? "tutorial-ep06";
const PART = process.argv[3] === "b" ? "b" : "a";
const FAST = !!process.env.EP06_FAST;
const VERSION = `<br><span style="font-size:20px;opacity:.7">aufgenommen mit NeonPlan 3D ${appVersion()}</span>`;

const R = await startRecorder({ outDir: out, width: 1920, height: 1080, lang: "de" });
const N = narration(R, process.argv.slice(4));
const { say, sayOver, chapter, catchUp } = N;
const h = helpers(R);
if (FAST) {
  const { move, glide, type } = R;
  R.move = (x, y) => move(x, y, 0.04);
  R.glide = (a, b) => glide(a, b, 0.12);
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
// Home Assistant draws mdi icons with its <ha-icon> element; the preview's mock has none, so an own symbol would
// stay empty. A tiny stand-in with the one icon the episode uses (the mdi "coffee" path) – recording only.
await R.page.evaluateOnNewDocument(() => {
  const PATHS = { "mdi:coffee": "M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z" };
  const define = () => {
    if (customElements.get("ha-icon")) return;
    customElements.define(
      "ha-icon",
      class extends HTMLElement {
        static get observedAttributes() {
          return ["icon"];
        }
        set icon(v) {
          this.setAttribute("icon", v);
        }
        get icon() {
          return this.getAttribute("icon");
        }
        attributeChangedCallback() {
          const d = PATHS[this.getAttribute("icon")] ?? "";
          this.style.display = "inline-flex";
          this.innerHTML = d ? `<svg viewBox="0 0 24 24" style="width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px)"><path fill="currentColor" d="${d}"/></svg>` : "";
        }
      },
    );
  };
  if (window.customElements) define();
});
// confirm() of the app: accepted at once (a native dialog is not in the screenshots; fakeConfirm shows it)
R.page.on("dialog", (d) => void d.accept());

// ---------------------------------------------------------------- helpers
const { typeOver, tapPlan, pointPlan, pickEntity, pickerMove, scrollSide } = h;
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
/**
 * The editor's side panel is 320 px wide; the device rows (name, 👁, Aa, ☆, „Platzieren“) are wider and their
 * last button is cut off at the window's edge. For the video the panel gets 360 px (a style in the recording only).
 */
const widenSide = () =>
  R.editor(`if (!e.renderRoot.getElementById("tut-wide")) { const s = document.createElement("style"); s.id = "tut-wide"; s.textContent = ".fp3d-editor { grid-template-columns: 1fr 360px !important; }"; e.renderRoot.appendChild(s); }`);
const editorOpen = async (record = false) => {
  if (record) await R.clickOn({ text: "Editor", exact: true }, 0.5);
  else await quiet({ text: "Editor", exact: true }, 300);
  await widenSide();
  await R.sleep(700);
};
/** Tap an empty spot of a room; if the tap missed, select the room the way the tap would. */
const tapRoom = async (x, z, id, seconds = 0.5) => {
  await tapPlan(x, z, seconds);
  const got = await R.editor(`return e._roomId;`);
  if (got !== id || (await R.editor(`return !!(e._furnitureId || e._deviceId);`))) {
    console.log(`tap at ${x}/${z} selected ${got}, not ${id}`);
    await R.editor(`e._furnitureId = null; e._deviceId = null; e.selectItem("room", ${JSON.stringify(id)});`);
    await R.frame(1 / 25, 200);
  }
};
/** Tap a placed device pin in the plan (by entity); falls back to selecting it the way the tap would. */
const tapDevice = async (id, seconds = 0.5) => {
  const at = await R.editor(`for (const f of e._doc.floors) { const p = f.placements.find((p) => p.entity_id === ${JSON.stringify(id)}); if (p) return [p.x, p.z]; } return null;`);
  await tapPlan(at[0], at[1], seconds);
  if ((await R.editor(`return e._deviceId;`)) !== id) {
    console.log(`tap missed ${id}`);
    await R.editor(`e.selectItem("device", ${JSON.stringify(id)});`);
    await R.frame(1 / 25, 200);
  }
};
/** Tap a furniture item (the first of a type, or by entity) in the plan; falls back to selecting it. */
const tapItem = async (pick, seconds = 0.5) => {
  const f = await R.editor(`const f = e.floor.furniture.find((f) => f.type === ${JSON.stringify(pick)} || f.entity === ${JSON.stringify(pick)}); return f ? { id: f.id, x: f.x, z: f.z } : null;`);
  await tapPlan(f.x, f.z, seconds);
  if ((await R.editor(`return e._furnitureId;`)) !== f.id) {
    console.log(`tap missed ${pick}`);
    await R.editor(`e.selectItem("furniture", ${JSON.stringify(f.id)});`);
    await R.frame(1 / 25, 200);
  }
  return f;
};
/** A button in the device row named `name` of the side panel: "Platzieren", "Entfernen", "☆", "👁", "Aa" … */
const rowBox = (name, label) =>
  R.editor(
    `const rows = [...e.renderRoot.querySelectorAll(".fp3d-dev-row")];
     const own = (r) => { const sp = r.querySelector(".fp3d-dev-name span"); if (!sp) return ""; const c = sp.cloneNode(true); c.querySelector("small")?.remove(); return c.textContent.trim(); };
     const row = rows.find((r) => own(r) === ${JSON.stringify(name)} && r.getBoundingClientRect().width > 0);
     if (!row) return null;
     const el = ${JSON.stringify(label)} === "name" ? row.querySelector(".fp3d-dev-name span") : [...row.querySelectorAll("button")].find((b) => b.textContent.trim() === ${JSON.stringify(label)});
     if (!el) return null; const r = el.getBoundingClientRect();
     return { x: r.left + Math.min(r.width / 2, 70), y: r.top + r.height / 2 };`,
  );
const rowMove = async (name, label, seconds = 0.5) => {
  let b = await rowBox(name, label);
  if (b && (b.y > 1030 || b.y < 160)) {
    await scrollSide(() => rowBox(name, label), 640, 0.6);
    b = await rowBox(name, label);
  }
  if (!b) throw new Error(`no ${label} in row ${name}`);
  await R.move(b.x, b.y, seconds);
};
const rowClick = async (name, label, seconds = 0.5) => {
  await rowMove(name, label, seconds);
  await R.click();
};
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
const moveToText = async (text, seconds = 0.5, nth = null) => {
  const b = await textBox(text, nth);
  if (!b) throw new Error(`text not found: ${text}`);
  await R.move(b.x, b.y, seconds);
};
/** Pick an option of a select field without the overlay: a ring on the field, then the value. */
const setSelect = async (label, option) => {
  await R.moveTo({ label }, 0.5);
  await R.click();
  await R.page.evaluate(
    (label, option) => {
      const walk = function* (root) {
        for (const el of root.querySelectorAll("*")) {
          yield el;
          if (el.shadowRoot) yield* walk(el.shadowRoot);
        }
      };
      let sel = null;
      for (const el of walk(document)) {
        if (el.tagName !== "LABEL" || !el.textContent.replace(/\s+/g, " ").trim().startsWith(label)) continue;
        const s = el.querySelector("select");
        if (s && s.getBoundingClientRect().width > 0) sel = s;
      }
      const opt = [...sel.options].find((o) => o.textContent.trim() === option);
      sel.value = opt.value;
      sel.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      sel.blur();
    },
    label,
    option,
  );
  await R.frame(1 / 25, 200);
};
/** Fill a number/text field found by its label (Ctrl+A, type, Enter). */
const fill = async (label, value, seconds = 0.5) => {
  await R.clickOn({ label }, seconds);
  await typeOver(value);
};
/** Take the focus out of a form field. */
const blur = () =>
  R.page.evaluate(() => {
    let a = document.activeElement;
    while (a?.shadowRoot?.activeElement) a = a.shadowRoot.activeElement;
    a?.blur?.();
  });
/** The app's confirm() as a visible box with OK and „Abbrechen“ (native dialogs are not in headless screenshots). */
const fakeConfirm = (text) =>
  R.page.evaluate((t) => {
    const d = document.createElement("div");
    d.id = "tut-dialog";
    d.style.cssText =
      "position:fixed;left:50%;top:22%;transform:translateX(-50%);z-index:2147483644;max-width:620px;padding:22px 26px;border-radius:12px;background:#f4f6fa;color:#111;font:18px/1.4 system-ui,'Segoe UI',sans-serif;box-shadow:0 12px 50px rgba(0,0,0,.6)";
    d.innerHTML = `<div style="font-size:14px;color:#555;margin-bottom:8px">127.0.0.1 meldet</div>${t}<div style="text-align:right;margin-top:18px"><span id="tut-ok" style="display:inline-block;padding:7px 22px;border-radius:6px;background:#1a73e8;color:#fff;margin-right:10px">OK</span><span id="tut-cancel" style="display:inline-block;padding:7px 18px;border-radius:6px;border:1px solid #1a73e8;color:#1a73e8">Abbrechen</span></div>`;
    document.body.appendChild(d);
  }, text);
const noDialog = () => R.page.evaluate(() => document.getElementById("tut-dialog")?.remove());
/** Keep the app's confirm() from firing; it answers "no" (a fake dialog is shown instead). */
const muteDialogs = (on) =>
  R.page.evaluate((on) => {
    if (on) {
      window.__tutConfirm = window.confirm;
      window.confirm = () => false;
    } else if (window.__tutConfirm) window.confirm = window.__tutConfirm;
  }, on);
const clickFakeOk = async () => {
  const b = await R.page.evaluate(() => {
    const r = document.getElementById("tut-ok").getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  });
  await R.move(b.x, b.y, 0.5);
  await R.click();
  await noDialog();
};
/** A service call on the mock Home Assistant (as the confirmed tap would do it). */
const service = (domain, name, data) => R.page.evaluate((d, s, data) => window.fp3dPanel.hass.callService(d, s, data), domain, name, data);
/** Set the main 3D view's camera around a plan point of a floor. */
const cam = (floorId, x, z, c) =>
  R.page.evaluate(
    (floorId, x, z, c) => {
      const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
      const viewer = Object.values(v).find((o) => o && o.floors && o.floorMap);
      const fv = viewer.floorMap.get(floorId);
      const t = fv.group.position.clone().set(x, c.y ?? 0, z);
      fv.group.localToWorld(t);
      const view = viewer.controls.view;
      view.target.copy(t);
      Object.assign(view, { theta: c.theta, phi: c.phi, radius: c.radius });
      viewer.invalidate();
    },
    floorId,
    x,
    z,
    c,
  );
/** Glide the main 3D camera around a plan point while recording. */
const glide = async (floorId, x, z, a, b, seconds) => {
  const n = FAST ? 2 : Math.max(1, Math.round(seconds * FPS));
  for (let i = 1; i <= n; i++) {
    const k = ease(i / n);
    await cam(floorId, x, z, { theta: a.theta + (b.theta - a.theta) * k, phi: a.phi + (b.phi - a.phi) * k, radius: a.radius + (b.radius - a.radius) * k, y: (a.y ?? 0) + ((b.y ?? 0) - (a.y ?? 0)) * k });
    await R.frame(1 / FPS, 40);
  }
};
/** Screen point of a plan point (x, height y, z) of a floor in the main 3D view. */
const point3d = (floorId, x, y, z) =>
  R.page.evaluate(
    (floorId, x, y, z) => {
      const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
      const viewer = Object.values(v).find((o) => o && o.floors && o.floorMap);
      const fv = viewer.floorMap.get(floorId);
      const p = fv.group.position.clone().set(x, y, z);
      fv.group.localToWorld(p);
      p.project(viewer.camera);
      const c = (v.renderRoot ?? v.shadowRoot).querySelector("canvas").getBoundingClientRect();
      return { x: c.left + ((p.x + 1) / 2) * c.width, y: c.top + ((1 - p.y) / 2) * c.height };
    },
    floorId,
    x,
    y,
    z,
  );
/** Long press at the cursor (quick menu): hold the button for `seconds`. */
const longPress = async (seconds = 0.8) => {
  await R.page.mouse.down();
  const n = Math.max(1, Math.round(seconds * FPS));
  for (let i = 0; i < n; i++) await R.frame(1 / FPS, 30);
  await R.page.mouse.up();
  await R.frame(1 / FPS, 120);
};
/** Up to the floor form: "Zurück zu …" until nothing is selected. */
const toFloor = async () => {
  for (let i = 0; i < 3; i++) {
    const up = await R.locate({ text: "Zurück zu" }).catch(() => null);
    if (!up) break;
    await R.clickOn({ text: "Zurück zu" }, 0.4);
  }
};
const fitPlan = () => R.clickOn({ text: "Alles zeigen", exact: true }, 0.4);

// ================================================================ part a
if (PART === "a") {
  // ---------------------------------------------------------------- 1. Teaser: the living room live, pins and the camera cone
  await chapter("Teaser");
  await R.open("");
  await R.hideCursor();
  await quiet({ text: "Erdgeschoss", exact: true, nth: 0 }, 1200);
  await quiet('button[aria-label="Bedienelemente ausblenden – nur die 3D-Ansicht bleibt"]', 700);
  {
    const a = { theta: -0.75, phi: 0.78, radius: 12.5, y: 0.3 };
    const b = { theta: -0.2, phi: 0.7, radius: 10, y: 0.3 };
    await cam("eg", 4.0, 2.3, a);
    await R.sleep(1500);
    await R.title("Geräte, Lampen und Kameras", `NeonPlan 3D · Folge 6 · Teil 1${VERSION}`);
    const l1 = "Lampen, die in 3D genau so leuchten wie bei dir, Sensoren mit ihren Werten und Kameras mit ihrem Blickfeld.";
    const l2 = "Wie deine Geräte aus Home Assistant in den Plan kommen, zeige ich dir in dieser Folge.";
    const total = N.length(l1) + N.length(l2);
    const t0 = R.time;
    let end = await line(l1);
    const n1 = Math.max(1, Math.round((end - t0) * FPS));
    for (let i = 1; i <= n1; i++) {
      const k = ease(((i / n1) * (end - t0)) / total);
      await cam("eg", 4.0, 2.3, { theta: a.theta + (b.theta - a.theta) * k, phi: a.phi + (b.phi - a.phi) * k, radius: a.radius + (b.radius - a.radius) * k, y: 0.3 });
      await R.frame(1 / FPS, 15);
    }
    await R.untitle();
    end = await line(l2);
    const t1 = R.time;
    const n2 = Math.max(1, Math.round((end - t1) * FPS));
    for (let i = 1; i <= n2; i++) {
      const k = ease((t1 - t0 + (i / n2) * (end - t1)) / total);
      await cam("eg", 4.0, 2.3, { theta: a.theta + (b.theta - a.theta) * k, phi: a.phi + (b.phi - a.phi) * k, radius: a.radius + (b.radius - a.radius) * k, y: 0.3 });
      await R.frame(1 / FPS, 15);
    }
  }

  // ---------------------------------------------------------------- 2. Intro
  await chapter("Worum es heute geht");
  await R.open("");
  // the radiator of the demo stands for the heating already; here the heating is a plain pin (for „Als Möbel darstellen“)
  await R.page.evaluate(() => {});
  await editorOpen();
  await R.editor(`e.change((doc) => { const f = doc.floors[0]; f.furniture = f.furniture.filter((m) => m.type !== "radiator"); const k = f.placements.find((p) => p.entity_id === "switch.kaffeemaschine"); k.x = 8.85; k.z = 0.75; }); e.past = []; e._canUndo = false;`);
  await R.sleep(500);
  await R.move(900, 560, 0.01);
  await sayOver("Folge 6 hat zwei Teile. In Teil 1 geht es um die Geräteliste eines Raums, ums Platzieren, um Symbole und Namen.");
  await R.move(780, 470, 1.2);
  await sayOver("Teil 2 zeigt Lampen und Kameras im Detail. Du brauchst nur Räume, die mit einem Bereich aus Home Assistant verknüpft sind – das war Folge 1.");
  await pointPlan(3.0, 1.6, 1.0);

  // ---------------------------------------------------------------- 3. The device list
  await chapter("Die Geräteliste eines Raums");
  await sayOver("Ich tippe im Editor das Wohnzimmer an. Rechts unter „Geräte“ steht alles, was in Home Assistant im Bereich Wohnzimmer liegt.");
  await tapRoom(5.5, 4.0, "wohnen");
  await R.hold(0.4);
  await scrollSide({ text: "Dieser Bereich" }, 200, 0.8);
  { const b = await textBox("Geräte", null, "H3"); if (b) await R.move(b.x, b.y, 0.5); }
  await sayOver("Die Liste ist nach Geräten sortiert: vorn die Hauptentität, dahinter steckt der Rest.");
  await rowMove("Deckenlicht", "name", 0.5);
  await R.hold(0.6);
  await rowMove("Fernseher", "name", 0.5);
  await R.hold(0.4);
  await moveToText("+1 weitere", 0.4);
  await sayOver("Die Pixeluhr hat zum Beispiel vier weitere Lichter für Anzeigen und Effekte. „+4 weitere“ klappt sie auf, „weniger“ wieder zu.");
  await rowMove("Pixeluhr", "name", 0.5);
  await R.hold(0.5);
  await R.clickOn({ text: "+4 weitere" }, 0.5);
  await R.hold(1.6);
  await R.clickOn({ text: "weniger", exact: true }, 0.5);
  await sayOver("Sensoren erscheinen, wenn sie etwas für den Raum messen: Temperatur, Luftfeuchte, CO2, Leistung und Energie, Gas und Wasser, Helligkeit und Luftdruck.");
  await rowMove("Luftfeuchtigkeit", "name", 0.6);
  await R.hold(0.8);
  await rowMove("Temperatur", "name", 0.5);
  await sayOver("Akku- und Signalsensoren bleiben weg. Und fehlt ein Gerät, liegt es in Home Assistant meist in einem anderen Bereich.");
  await R.move(1700, 900, 1.0);
  await sayOver("Bei großen Bereichen hilft das Suchfeld.");
  await R.clickOn('input[type="search"]', 0.5);
  await R.type("temp", 0.08);
  await R.hold(0.8);
  await typeOver("");
  await R.key("Escape");

  // ---------------------------------------------------------------- 4. Other sources
  await chapter("Andere Bereiche und ohne Bereich");
  await sayOver("Über der Liste wählst du die Quelle. „Dieser Bereich“ ist der Standard, die Zahl dahinter sagt, wie viele Geräte es sind.");
  await R.moveTo({ text: "Dieser Bereich" }, 0.6);
  await R.hold(1.2);
  await sayOver("„Andere Bereiche“ zeigt die Geräte aller übrigen Bereiche, nach Bereich sortiert. Steht eins schon in einem anderen Raum, steht das dabei.");
  await R.clickOn({ text: "Andere Bereiche" }, 0.5);
  await R.hold(0.6);
  { const b = await textBox("Arbeitszimmer", 0, "DIV"); if (b) await R.move(b.x, b.y, 0.5); }
  await R.hold(0.6);
  await moveToText("in Arbeitszimmer", 0.5, 0);
  await sayOver("„Platzieren“ holt es dann hierher. Der Bereich in Home Assistant bleibt dabei, wie er ist.");
  await rowMove("Schreibtischlampe", "Platzieren", 0.6);
  await sayOver("„Ohne Bereich“ zeigt alles, was keinem Bereich zugeordnet ist: Template-Lichter, Gruppen und Helfer. Hier zählt jeder Sensor mit Zahl und Einheit.");
  await R.clickOn({ text: "Ohne Bereich" }, 0.5);
  await R.hold(0.6);
  await rowMove("Pool Spot", "name", 0.5);
  await R.hold(0.6);
  await rowMove("Strompreis", "name", 0.6);
  await sayOver("Werden es zu viele, sagt die Liste, wie viele noch fehlen – dann grenzt du mit der Suche ein.");
  await R.moveTo('input[type="search"]', 0.6);

  // ---------------------------------------------------------------- 5. Placing
  await chapter("Geräte platzieren");
  await sayOver("Zurück zu „Dieser Bereich“. Helle Einträge stehen schon im Plan, blasse noch nicht.");
  await R.clickOn({ text: "Dieser Bereich" }, 0.5);
  await R.hold(0.4);
  await rowMove("Deckenlicht", "name", 0.5);
  await R.hold(0.5);
  await rowMove("Temperatur", "name", 0.5);
  await sayOver("„Platzieren“ setzt ein Gerät in den Raum. Der Temperatursensor steht jetzt als Symbol im Plan.");
  await rowClick("Temperatur", "Platzieren", 0.5);
  await R.hold(0.3);
  {
    const p = await R.editor(`const p = e.floor.placements.find((p) => p.entity_id === "sensor.wohnzimmer_temperatur"); return [p.x, p.z];`);
    await pointPlan(p[0], p[1], 0.7);
  }
  await sayOver("Ich ziehe ihn an seinen Platz – an die Wand zur Küche.");
  {
    const p = await R.editor(`const p = e.floor.placements.find((p) => p.entity_id === "sensor.wohnzimmer_temperatur"); return [p.x, p.z];`);
    const a = await R.planPoint(p[0], p[1]);
    await R.move(a.x, a.y, 0.3);
    const b = await R.planPoint(5.75, 1.45);
    await R.drag(b.x, b.y, 1.1);
  }
  await sayOver("„Alle 5 platzieren …“ setzt nach einer Rückfrage alle übrigen Hauptgeräte auf einmal.");
  await scrollSide({ text: "Alle 5 platzieren" }, 900, 0.6).catch(() => scrollSide({ text: "platzieren …" }, 900, 0.6));
  await muteDialogs(true);
  await R.clickOn({ text: "platzieren …" }, 0.5);
  await fakeConfirm("5 Geräte auf einmal in den Raum setzen? (Strg+Z bzw. „Rückgängig“ nimmt alle in einem Schritt zurück.)");
  await R.hold(0.6);
  await clickFakeOk();
  await muteDialogs(false);
  {
    // the real click behind the fake dialog (confirm() is answered "yes" by the dialog handler)
    const b = await R.locate({ text: "platzieren …" });
    await R.page.mouse.click(b.x, b.y);
    await R.sleep(300);
  }
  await R.hold(0.4);
  await sayOver("Lichter werden dabei gleich als Leuchte aus der Bibliothek gesetzt, damit sie in 3D leuchten – wie die Pixeluhr hier. Mehr dazu in Teil 2.");
  {
    const f = await R.editor(`const f = e.floor.furniture.find((f) => f.entity === "light.pixeluhr"); return f ? [f.x, f.z] : [3, 2];`);
    await pointPlan(f[0], f[1], 0.8);
  }
  await sayOver("Gefällt dir das nicht, nimmt „Rückgängig“ oder Strg+Z alle in einem Schritt zurück.");
  await R.clickOn({ text: "Rückgängig", exact: true }, 0.7);
  await R.hold(0.6);
  await sayOver("Ein platziertes Gerät nimmst du mit „Entfernen“ in seiner Zeile wieder heraus.");
  await scrollSide({ text: "Dieser Bereich" }, 300, 0.6);
  await rowMove("Rollladen", "Entfernen", 0.6);

  // ---------------------------------------------------------------- 6. The room panel: ☆, 👁, Aa
  await chapter("Stern, Auge und Aa fürs Raumfenster");
  await sayOver("Die kleinen Knöpfe in jeder Zeile gehören zum Raumfenster in 3D. Es zeigt die Geräte, die im Raum stehen.");
  await rowMove("Deckenlicht", "👁", 0.6);
  await R.hold(0.5);
  await rowMove("Deckenlicht", "Aa", 0.4);
  await sayOver("Der Stern nimmt ein Gerät zusätzlich auf, ohne es zu platzieren – hier die Luftfeuchtigkeit.");
  await rowClick("Luftfeuchtigkeit", "☆", 0.6);
  await R.hold(0.6);
  await sayOver("Das Auge blendet ein Gerät im Raumfenster aus. Es wird durchgestrichen, ein zweiter Tipp holt es zurück.");
  await rowClick("Fernseher", "👁", 0.6);
  await R.hold(0.8);
  await sayOver("„Aa“ blendet nur den Zustand aus – praktisch bei einem Rollladen, der seine Position nicht meldet.");
  await rowClick("Rollladen", "Aa", 0.6);
  await R.hold(0.8);
  await sayOver("In 3D steht die Luftfeuchtigkeit jetzt im Raumfenster, der Fernseher fehlt, und der Rollladen kommt ohne Prozentzahl.");
  await R.clickOn({ text: "3D", exact: true }, 0.6);
  await R.sleep(1000);
  await quiet({ text: "Erdgeschoss", exact: true, nth: 0 }, 1000);
  await R.clickOn({ text: "Wohnzimmer", exact: true }, 0.5);
  await R.sleep(1500);
  await R.frame(0.2, 100);
  await moveToText("Rollladen", 0.6);
  await R.hold(0.8);
  {
    // scroll the room panel down to the sensors
    const b = await textBox("Rollladen");
    await R.move(b.x + 120, b.y, 0.4);
    for (let i = 0; i < 12; i++) {
      await R.page.mouse.wheel({ deltaY: 70 });
      await R.frame(1 / FPS, 30);
    }
  }
  await moveToText("Luftfeuchtigkeit", 0.5).catch(() => {});
  await sayOver("Ganz unten blendet „Weitere Geräte des Bereichs“ den Rest ein – ausgeblendete bleiben weg.");
  {
    const b = await textBox("Weitere Geräte des Bereichs");
    if (b) await R.move(b.x, b.y, 0.6);
    else {
      for (let i = 0; i < 10; i++) {
        await R.page.mouse.wheel({ deltaY: 90 });
        await R.frame(1 / FPS, 30);
      }
      await moveToText("Weitere Geräte des Bereichs", 0.5);
    }
  }

  // ---------------------------------------------------------------- 7. Room climate
  await chapter("Raumklima");
  await sayOver("Zurück im Editor: Unter „Raumklima“ legst du fest, welche Sensoren Temperatur, Luftfeuchte und CO2 des Raums liefern – für die Heatmap und das Raumfenster.");
  await editorOpen(true);
  await tapRoom(5.5, 4.0, "wohnen");
  await scrollSide({ text: "Raumklima" }, 360, 0.7).catch(async () => {
    await scrollSide(() => textBox("RAUMKLIMA"), 360, 0.7);
  });
  {
    const b = await textBox("Raumklima", null, "SUMMARY");
    await R.move(b.x, b.y, 0.5);
    await R.click();
  }
  await R.hold(0.6);
  await sayOver("„Automatisch“ nimmt die Sensoren des Bereichs und die im Raum platzierten – aber keine Gerätetemperaturen, etwa vom 3D-Drucker. Du kannst auch einen Sensor wählen oder „Keiner“.");
  await pickerMove("Temperatur", 0.5);
  await R.hold(1.0);
  await pickerMove("Luftfeuchte", 0.4);
  await R.hold(0.8);
  await pickerMove("CO₂", 0.4);

  // ---------------------------------------------------------------- 8. The device form
  await chapter("Das Geräteformular");
  await sayOver("Tippst du ein Gerät im Plan an, öffnet sich rechts sein Formular. Oben stehen Art und Name, daneben „Fixieren“ gegen versehentliches Verschieben.");
  await tapDevice("sensor.wohnzimmer_temperatur", 0.6);
  await R.hold(0.4);
  await R.moveTo(".fp3d-dev-title", 0.5);
  await R.hold(0.5);
  await R.moveTo({ text: "Fixieren" }, 0.5);
  await sayOver("„X“ und „Y“ setzen den Platz genau. „Höhe des Symbols“ bestimmt, wie hoch der Pin in 3D schwebt – „Höhe automatisch“ setzt sie zurück.");
  await R.moveTo({ label: "X (m)" }, 0.5);
  await R.hold(0.4);
  await fill("Höhe des Symbols", "1,5");
  await R.hold(0.4);
  await R.clickOn({ text: "Höhe automatisch", exact: true }, 0.5);
  await sayOver("„Drehung“ dreht das Gerät – wichtig vor allem bei Kameras, dazu mehr in Teil 2.");
  await R.moveTo({ label: "Drehung" }, 0.5);
  await sayOver("„In Raummitte“ holt ein verrutschtes Gerät in die Mitte, „Entfernen“ nimmt es aus dem Plan.");
  await R.moveTo({ text: "In Raummitte", exact: true }, 0.5);
  await R.hold(0.7);
  await R.moveTo({ text: "Entfernen", exact: true }, 0.5);

  // ---------------------------------------------------------------- 9. Ask before switching
  await chapter("Vor dem Schalten nachfragen");
  await sayOver("Bei Schaltern und Lampen gibt es „Vor dem Schalten nachfragen“. Ich nehme die Kaffeemaschine in der Küche.");
  await tapDevice("switch.kaffeemaschine", 0.7);
  await R.hold(0.4);
  await sayOver("Mit Haken fragt NeonPlan erst nach – beim Antippen in 3D, im Schnellmenü und im Raumfenster. Das schützt etwa den Server-Schalter vor einem versehentlichen Tipp.");
  await R.clickOn({ text: "Vor dem Schalten nachfragen" }, 0.6);
  await R.hold(0.8);
  await sayOver("Ein Doppeltipp auf den Raum, der alle Lichter schaltet, lässt so ein Gerät aus. Und Wischen bewegt es auch nicht.");
  await R.move(1300, 420, 1.2);

  // ---------------------------------------------------------------- 10. Symbol in 3D and power
  await chapter("Symbol in 3D und Leistung");
  await sayOver("Hat ein Gerät in Home Assistant einen Leistungssensor, zeigt sein Symbol in 3D die Watt – die Kaffeemaschine gerade 900 Watt.");
  await R.moveTo({ label: "Symbol in 3D" }, 0.6);
  await sayOver("„Symbol in 3D“ legt fest, wann der Pin erscheint. „Automatisch“ folgt dem Schalter in der 3D-Ansicht, „Immer zeigen“ zeigt ihn immer.");
  await R.pickOption("Symbol in 3D", "Immer zeigen", 0.5);
  await sayOver("„Ohne Watt“ lässt die Leistung weg, etwa an einer Steckdose. „Ausblenden“ zeigt nie ein Symbol.");
  {
    const b = await R.locate({ label: "Symbol in 3D" });
    await R.move(b.x, b.y, 0.5);
    await R.hold(1.6);
  }
  await sayOver("Mit Energie Pro gibt es außerdem ein Hologramm über dem Gerät: Leistung jetzt, Verbrauch heute und die Tageskurve.");
  await R.moveTo({ text: "Hologramm über dem Gerät" }, 0.6);

  // ---------------------------------------------------------------- 11. Own icon and name
  await chapter("Eigenes Symbol und eigener Name");
  await sayOver("„Eigenes Symbol“ ersetzt das Symbol nach Geräteart. Du trägst den Namen eines Material-Design-Icons ein, genau wie in Home Assistant.");
  await R.clickOn({ label: "Eigenes Symbol" }, 0.6);
  await R.type("mdi:coffee", 0.08);
  await R.key("Enter");
  await sayOver("Daneben erscheint gleich die Vorschau. Leer lassen heißt: das Standard-Symbol.");
  await R.moveTo({ label: "Eigenes Symbol" }, 0.4);
  {
    const b = await R.locate({ label: "Eigenes Symbol" });
    await R.move(b.x + b.w / 2 + 20, b.y, 0.5);
  }
  await R.hold(0.8);
  await sayOver("„Eigener Name“ gilt nur im Plan – die Entität in Home Assistant bleibt, wie sie ist.");
  await fill("Eigener Name", "Espresso");
  await sayOver("Dann erscheint „Name unter dem Symbol in 3D zeigen“. So bleiben etwa drei Thermometer im Garten unterscheidbar.");
  await R.clickOn({ text: "Name unter dem Symbol in 3D zeigen" }, 0.6);
  await R.hold(0.6);
  await sayOver("Für die Dashboard-Karte gibt es dafür auch eine Option, die alle eigenen Namen zeigt – mehr in der Folge zur Karte.");
  await R.move(1300, 500, 1.0);

  // ---------------------------------------------------------------- 12. In 3D: the pin, the markers switch, the question
  await chapter("In 3D: Symbole und Rückfrage");
  await sayOver("In 3D steht der Pin jetzt mit Kaffeetasse, Watt und Namen da.");
  await R.clickOn({ text: "3D", exact: true }, 0.6);
  await R.sleep(800);
  await quiet({ text: "Küche", exact: true }, 1500);
  await R.clickOn('button[aria-label="Schließen"]', 0.01).catch(() => {});
  await cam("eg", 8.4, 1.6, { theta: -0.25, phi: 0.82, radius: 6.5 });
  await R.sleep(800);
  await R.frame(0.1, 100);
  await R.moveTo('.fp3d-dev[data-entity="switch.kaffeemaschine"]', 0.7);
  await sayOver("Oben rechts wählst du, welche Symbole die 3D-Ansicht zeigt: „Keine“, „Wichtige“ oder „Alle“.");
  await R.moveTo({ text: "Wichtige", exact: true }, 0.7);
  await R.hold(0.5);
  await R.clickOn({ text: "Alle", exact: true }, 0.4);
  await R.hold(0.8);
  await sayOver("„Wichtige“ lässt Lampen und Geräte weg, die ihr 3D-Modell schon zeigt; Sensoren und Watt bleiben. „Keine“ blendet alle aus – auch die mit „Immer zeigen“.");
  await R.clickOn({ text: "Wichtige", exact: true }, 0.5);
  await R.hold(1.0);
  await R.clickOn({ text: "Keine", exact: true }, 0.5);
  await R.hold(1.0);
  await R.clickOn({ text: "Wichtige", exact: true }, 0.5);
  await sayOver("Tippe ich die Kaffeemaschine an, kommt jetzt erst die Rückfrage. Erst mit „OK“ schaltet sie.");
  await muteDialogs(true);
  await R.clickOn('.fp3d-dev[data-entity="switch.kaffeemaschine"]', 0.7);
  await fakeConfirm("Kaffeemaschine wirklich schalten?");
  await R.hold(1.0);
  await clickFakeOk();
  await muteDialogs(false);
  await service("switch", "turn_off", { entity_id: "switch.kaffeemaschine" });
  await R.hold(0.5);
  await sayOver("Lange drücken öffnet bei Schaltern und Lampen das Schnellmenü. Wie du Lampen in 3D bedienst, zeigt Teil 2.");
  await R.moveTo('.fp3d-dev[data-entity="switch.kaffeemaschine"]', 0.5);
  await longPress(0.8);
  await R.hold(1.2);

  // ---------------------------------------------------------------- 13. As furniture
  await chapter("Als Möbel darstellen");
  await sayOver("Manche Geräte sehen als Möbel besser aus. Die Heizung im Wohnzimmer ist noch ein einfacher Pin.");
  await editorOpen(true);
  await tapDevice("climate.wohnzimmer", 0.6);
  await R.hold(0.4);
  await sayOver("„Als Möbel darstellen“ ersetzt den Pin durch ein passendes Möbel an derselben Stelle, schon mit dem Gerät verknüpft. Die Liste zeigt nur, was zur Geräteart passt.");
  await scrollSide({ text: "In Raummitte", exact: true }, 700, 0.5);
  await R.pickOption("Als Möbel darstellen", "Heizkörper", 0.6);
  await R.hold(0.6);
  await sayOver("Aus der Heizung ist ein Heizkörper geworden, der in 3D glüht, solange geheizt wird. Ein Lautsprecher, eine Leuchte oder der Saugroboter gehen genauso.");
  {
    const f = await R.editor(`const f = e.floor.furniture.find((f) => f.type === "radiator"); return [f.x, f.z];`);
    await pointPlan(f[0], f[1], 0.6);
  }
  await R.hold(1.2);
  await sayOver("Im Möbelformular holt „Wieder als Geräte-Pin“ den einfachen Pin zurück – und Strg+Z nimmt beides zurück.");
  await scrollSide({ text: "Wieder als Geräte-Pin" }, 800, 0.6);
  await R.moveTo({ text: "Wieder als Geräte-Pin" }, 0.5);

  // ---------------------------------------------------------------- 14. Outro
  await chapter("Zusammenfassung");
  await catchUp();
  await R.clickOn({ text: "3D", exact: true }, 0.6);
  await R.sleep(1000);
  await quiet({ text: "Erdgeschoss", exact: true, nth: 0 }, 1200);
  await R.hideCursor();
  await quiet('button[aria-label="Bedienelemente ausblenden – nur die 3D-Ansicht bleibt"]', 700);
  {
    const a = { theta: -0.6, phi: 0.95, radius: 13 };
    const b = { theta: 0.4, phi: 0.85, radius: 11 };
    const l1 = "Kurz zusammengefasst: Die Geräteliste zeigt den Bereich des Raums, „Platzieren“ setzt Geräte in den Plan, und im Formular stellst du Symbol, Name und Rückfrage ein.";
    await cam("eg", 5.5, 3.5, a);
    await R.sleep(700);
    const end = await line(l1);
    await glide("eg", 5.5, 3.5, a, b, end - R.time);
  }
  await R.title("Teil 2: Lampen und Kameras", `NeonPlan 3D – läuft auch auf alten Wandtablets${VERSION}`);
  {
    let end = await line("In Teil 2 geht es um Lampen und Kameras.");
    await live(end);
    end = await line("Links zur Online-Demo und zur Anleitung stehen in der Beschreibung. Und NeonPlan 3D läuft auch auf alten Wandtablets. Bis gleich in Teil 2!");
    await live(end + 0.6);
  }
}

// ================================================================ part b
if (PART === "b") {
  /** Point the editor's 3D pane ("3D daneben") at a plan point of a floor. */
  const pane = (floorId, x, z, c) =>
    R.page.evaluate(
      (floorId, x, z, c) => {
        const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
        const v = e.renderRoot.querySelector("fp3d-view3d");
        const viewer = Object.values(v).find((o) => o && o.floors && o.floorMap);
        const fv = viewer.floorMap.get(floorId);
        const t = fv.group.position.clone().set(x, c.y ?? 0, z);
        fv.group.localToWorld(t);
        const view = viewer.controls.view;
        view.target.copy(t);
        Object.assign(view, { theta: c.theta, phi: c.phi, radius: c.radius });
        viewer.invalidate();
      },
      floorId,
      x,
      z,
      c,
    );
  const paneCentre = () =>
    R.page.evaluate(() => {
      const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
      const r = e.renderRoot.querySelector("fp3d-view3d").getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    });

  // ---------------------------------------------------------------- 1. Teaser: the kitchen's coloured lights, the camera cone
  await chapter("Teaser");
  await R.open("");
  await R.hideCursor();
  await quiet({ text: "Erdgeschoss", exact: true, nth: 0 }, 1200);
  await quiet('button[aria-label="Bedienelemente ausblenden – nur die 3D-Ansicht bleibt"]', 700);
  {
    const a = { theta: 0.5, phi: 0.75, radius: 13, y: 0.3 };
    const b = { theta: -0.35, phi: 0.68, radius: 10.5, y: 0.3 };
    await cam("eg", 5.5, 2.3, a);
    await R.sleep(1500);
    await R.title("Geräte, Lampen und Kameras", `NeonPlan 3D · Folge 6 · Teil 2${VERSION}`);
    const l1 = "Lampen, die in Farbe und Helligkeit genau wie bei dir leuchten, und Kameras mit ihrem Blickfeld im Raum.";
    const l2 = "Das ist Teil 2 von Folge 6: Lampen und Kameras.";
    const total = N.length(l1) + N.length(l2);
    const t0 = R.time;
    const step = async (end) => {
      const t1 = R.time;
      const n = Math.max(1, Math.round((end - t1) * FPS));
      for (let i = 1; i <= n; i++) {
        const k = ease(Math.min(1, (t1 - t0 + (i / n) * (end - t1)) / total));
        await cam("eg", 5.5, 2.3, { theta: a.theta + (b.theta - a.theta) * k, phi: a.phi + (b.phi - a.phi) * k, radius: a.radius + (b.radius - a.radius) * k, y: 0.3 });
        await R.frame(1 / FPS, 15);
      }
    };
    await step(await line(l1));
    await R.untitle();
    await step(await line(l2));
  }

  // ---------------------------------------------------------------- 2. Intro, 3D beside
  await chapter("Worum es heute geht");
  await R.open("");
  await editorOpen();
  await R.move(900, 560, 0.01);
  await sayOver("In Teil 1 ging es um die Geräteliste und ums Platzieren. Jetzt schauen wir uns Lampen und Kameras genauer an.");
  await R.move(700, 500, 1.2);
  await sayOver("Damit du siehst, was passiert, schalte ich „3D daneben“ ein – die 3D-Ansicht neben dem Plan.");
  await R.clickOn({ text: "3D daneben", exact: true }, 0.6);
  await R.sleep(2500);
  // full walls in the pane: the cut at 1.15 m would hide pendants and wall lights
  await R.clickOn({ text: "Wände hoch", exact: true }, 0.5);
  await fitPlan();
  await pane("eg", 2.2, 6.3, { theta: -0.5, phi: 0.75, radius: 8, y: 0.3 });
  await R.hold(0.5);

  // ---------------------------------------------------------------- 3. Lamps in the library, a wall light
  await chapter("Leuchten aus der Bibliothek");
  await sayOver("Leuchten sind Möbel mit einem verknüpften Licht. Ich tippe das Schlafzimmer an – im Werkzeug „Möbel“ stehen sie ganz oben unter „Leuchten“.");
  await tapRoom(3.7, 5.2, "schlafen");
  await R.clickOn({ text: "Möbel", exact: true }, 0.5);
  await R.hold(0.5);
  await sayOver("Deckenleuchte, Einbauspot, Aufbau-Spot, LED-Panel, Pendelleuchte, Stehlampe, Deckenfluter, Tischlampe, Wandleuchte, LED-Streifen, Wegleuchte und Garten-Spot.");
  for (const name of ["Deckenleuchte", "Einbauspot", "Aufbau-Spot", "LED-Panel", "Pendelleuchte", "Stehlampe", "Deckenfluter", "Tischlampe", "Wandleuchte", "LED-Streifen", "Wegleuchte", "Garten-Spot"]) {
    await R.moveTo({ text: name, exact: true }, 0.3);
    await R.hold(0.15);
  }
  await sayOver("Ich nehme eine Wandleuchte. Ziehe ich sie an die Wand, rastet sie ein – Wandleuchten hängen von sich aus auf 1,75 Metern.");
  await R.clickOn({ text: "Wandleuchte", exact: true }, 0.4);
  await R.hold(0.4);
  {
    const f = await R.editor(`const f = e.furnitureItem; return [f.x, f.z];`);
    const a = await R.planPoint(f[0], f[1]);
    await R.move(a.x, a.y, 0.5);
    // the 10 cm lamp sits under the plan's size handles, so a real drag grabs a handle: the item follows the cursor
    // the way a drag moves it (the editor's own wall snap at the end)
    const n = FAST ? 2 : 25;
    await R.page.evaluate((x, y) => {
      const c = document.getElementById("tut-cursor");
      if (c) c.style.transform = `translate(${x - 4}px, ${y - 2}px)`;
    }, a.x, a.y);
    for (let i = 1; i <= n; i++) {
      const k = ease(i / n);
      const x = f[0] + (4.3 - f[0]) * k;
      const z = f[1] + (5.3 - f[1]) * k;
      const q = await R.planPoint(x, z);
      await R.editor(`const f = e.furnitureItem; const snap = ${i === n} ? e.snapToWall({ ...f, x: ${x}, z: ${z} }) : null; e.change((_, floor) => Object.assign(floor.furniture.find((m) => m.id === f.id), snap ?? { x: ${Math.round(x * 100) / 100}, z: ${Math.round(z * 100) / 100} }), undefined, ${i === n});`);
      await R.move(q.x, q.y, 1 / FPS);
    }
    await R.frame(0.2, 100);
    const at = await R.editor(`const f = e.furnitureItem; return f ? [f.x, f.z, f.rotation] : null;`);
    console.log(`wall light at ${JSON.stringify(at)}`);
  }
  await R.clickOn({ text: "Auswählen", exact: true }, 0.5);
  await pane("eg", 4.2, 5.4, { theta: -1.5, phi: 1.2, radius: 3.6, y: 1.5 });
  await R.hold(0.3);
  await sayOver("Unter „Licht oder Schalter“ wählst du das Licht aus Home Assistant – ich nehme den Nachttisch.");
  await scrollSide({ label: "Licht oder Schalter" }, 520, 0.6).catch(() => {});
  await pickEntity("Licht oder Schalter", "Nacht", "Nachttisch", 0.5);
  await R.hold(0.6);
  await sayOver("Mehrere Leuchten dürfen demselben Licht folgen: Die Tischlampe hängt am selben Licht, beide leuchten jetzt zusammen.");
  await pane("eg", 3.7, 6.6, { theta: -1.0, phi: 1.0, radius: 5.2, y: 0.9 });
  {
    const b = await paneCentre();
    await R.move(b.x, b.y, 0.8);
  }
  await R.hold(1.0);
  await sayOver("Statt eines Lichts geht auch ein Schalter, etwa ein Relais fürs Deckenlicht. Die Leuchte strahlt dann, solange er an ist.");
  await pickerMove("Licht oder Schalter", 0.6);
  await sayOver("Schaltet so ein Relais eine Lampe, die selbst Farbe und Helligkeit kennt, trägst du die Lampe unter „Farbe und Helligkeit von“ ein: An und Aus kommt vom Schalter, die Farbe von dort.");
  await pickerMove("Farbe und Helligkeit von", 0.6);
  await R.hold(1.5);
  await moveToText("Für Lampen, die ein Relais", 0.6);
  await sayOver("„Leuchtstärke in 3D“ sagt, wie kräftig die Leuchte in 3D strahlt: unter 100 Prozent gedämpfter, darüber kräftiger. In Home Assistant schaltet das nichts.");
  await fill("Leuchtstärke in 3D", "150");
  await R.hold(1.2);
  await sayOver("„Höhe über Boden“ hängt sie höher oder tiefer, „Höhe automatisch“ setzt sie zurück.");
  await scrollSide({ label: "Höhe über Boden" }, 500, 0.5).catch(() => {});
  await fill("Höhe über Boden", "2,1");
  await R.hold(0.8);
  await R.clickOn({ text: "Höhe automatisch", exact: true }, 0.5);

  // ---------------------------------------------------------------- 4. Pendant, table and floor lamps
  await chapter("Pendel-, Tisch- und Stehlampen");
  await sayOver("Bei der Pendelleuchte über dem Esstisch wählst du unter „Form“, wie sie aussieht: Schirm, Kugel, Kegel oder Trommel.");
  await tapItem("lamp_pendant", 0.7);
  await pane("eg", 8.0, 2.9, { theta: -0.6, phi: 1.05, radius: 4.2, y: 1.4 });
  await scrollSide({ label: "Form" }, 600, 0.5).catch(() => {});
  await R.pickOption("Form", "Schirm", 0.5);
  await R.hold(0.2);
  await R.pickOption("Form", "Kegel", 0.3);
  await R.hold(0.2);
  await sayOver("Ihre Höhe ist die Abhängung unter der Decke – also wie weit sie von der Decke herunterhängt, etwa über dem Esstisch.");
  await R.pickOption("Form", "Trommel", 0.3);
  await R.hold(0.3);
  await R.pickOption("Form", "Kugel", 0.3);
  await R.moveTo({ label: "Höhe (m)" }, 0.5);
  await sayOver("Eine Tischlampe stellt sich von selbst auf das Möbel darunter – hier auf den Nachttisch.");
  await tapItem("lamp_table", 0.7);
  await pane("eg", 3.3, 7.6, { theta: 2.7, phi: 1.0, radius: 3.4, y: 0.6 });
  await R.hold(1.0);

  // ---------------------------------------------------------------- 5. LED strips
  await chapter("LED-Streifen");
  await sayOver("LED-Streifen rasten wie Wandleuchten an der Wand ein und hängen von sich aus direkt unter der Decke.");
  {
    const f = await R.editor(`const f = e.floor.furniture.find((f) => f.type === "led_strip" && !f.upright); return { id: f.id, x: f.x, z: f.z };`);
    await tapPlan(f.x, f.z + 0.02, 0.7);
    if ((await R.editor(`return e._furnitureId;`)) !== f.id) await R.editor(`e.selectItem("furniture", ${JSON.stringify(f.id)});`);
  }
  await pane("eg", 2.6, 0.6, { theta: 0.15, phi: 1.2, radius: 5.5, y: 1.3 });
  await R.hold(0.6);
  await sayOver("Unter 1 Meter Höhe – an der Sockelleiste oder hinter dem Schrank – strahlen sie nach oben an die Wand, höher montierte nach unten.");
  await scrollSide({ label: "Höhe über Boden" }, 500, 0.5).catch(() => {});
  await fill("Höhe über Boden", "0,3");
  await R.hold(1.6);
  await R.clickOn({ text: "Höhe automatisch", exact: true }, 0.5);
  await sayOver("Ein Streifen unterhalb der Schnitthöhe bleibt auch bei geschnittenen Wänden sichtbar.");
  await R.move(1150, 700, 1.0);
  await sayOver("„Neigung um die Länge“ legt den Streifen an eine Dachschräge oder kippt ihn zur Seite. „Senkrecht“ stellt ihn hochkant – wie die Lichtsäule hier am Fenster.");
  await R.moveTo({ label: "Neigung um die Länge" }, 0.5);
  await R.hold(0.8);
  await R.moveTo({ text: "Senkrecht" }, 0.4);
  await R.hold(0.6);
  await pane("eg", 0.3, 1.3, { theta: 1.45, phi: 1.05, radius: 5, y: 1.1 });
  await pointPlan(0.12, 1.2, 0.7);
  await sayOver("Und läuft in Home Assistant ein Farbeffekt wie ein Farbwechsel, ist er in 3D animiert.");
  await live(R.time + 0.5);
  await catchUp();

  // ---------------------------------------------------------------- 6. Spots
  await chapter("Spots setzen");
  await sayOver("Für Einbauspots gibt es am Raum „Spots setzen“. Es legt ein Raster aus Leuchten an, die alle einem Licht folgen – etwa sechs Spots an einem Dimmer.");
  await tapRoom(3.7, 5.2, "schlafen", 0.7);
  await scrollSide({ text: "Spots setzen", exact: true }, 640, 0.6);
  await R.clickOn({ text: "Spots setzen", exact: true }, 0.5);
  await R.hold(0.5);
  await sayOver("Du wählst die Leuchte, die Spalten und Reihen und das Licht.");
  await R.moveTo({ label: "Leuchte" }, 0.5);
  await R.hold(0.4);
  await fill("Spalten", "3");
  await fill("Reihen", "2");
  await pickerMove("Licht oder Schalter", 0.5);
  await sayOver("„6 Leuchten setzen“ – fertig. Jeder Spot lässt sich danach einzeln verschieben, wie jedes Möbel.");
  await R.clickOn({ text: "6 Leuchten setzen" }, 0.5);
  await pane("eg", 2.2, 6.3, { theta: 0.3, phi: 0.62, radius: 7.5, y: 0.3 });
  await R.hold(1.2);

  // ---------------------------------------------------------------- 7. Lamps live in 3D
  await chapter("Lampen live in 3D");
  await sayOver("In 3D leuchtet jede Lampe in Farbe und Helligkeit, wie Home Assistant sie meldet. Boden und Wände leuchten mit, und zwei farbige Deckenleuchten mischen sich.");
  await R.clickOn({ text: "3D", exact: true }, 0.6);
  await R.sleep(1000);
  await quiet({ text: "Küche", exact: true }, 1500);
  await R.clickOn('button[aria-label="Schließen"]', 0.01).catch(() => {});
  {
    const a = { theta: -0.2, phi: 0.75, radius: 8.5, y: 0.5 };
    const b = { theta: 0.25, phi: 0.7, radius: 7.5, y: 0.5 };
    await cam("eg", 8.0, 2.4, a);
    await R.sleep(600);
    await glide("eg", 8.0, 2.4, a, b, 3.5);
    await sayOver("In den Nachbarraum fällt das Licht nur durch Türen.");
    await glide("eg", 8.0, 2.4, b, { theta: 0.45, phi: 0.72, radius: 7.5, y: 0.5 }, 2.0);
  }
  await sayOver("Ein Tipp schaltet die Lampe, sie blinkt kurz zur Bestätigung.");
  {
    const p = await point3d("eg", 8.0, 1.75, 2.9);
    await R.move(p.x, p.y, 0.6);
    await R.click();
    await live(R.time + 1.2);
    await R.click();
    await live(R.time + 0.8);
  }
  await sayOver("Senkrecht wischen dimmt – der Wert erscheint am Finger.");
  {
    const p = await point3d("eg", 8.0, 1.75, 2.9);
    await R.move(p.x, p.y, 0.3);
    await R.page.mouse.down();
    await R.move(p.x, p.y - 160, 1.4);
    await R.move(p.x, p.y - 60, 0.8);
    await R.page.mouse.up();
    await live(R.time + 0.6);
  }
  await sayOver("Lange drücken öffnet das Schnellmenü: Helligkeit, Farbtemperatur und Farben.");
  {
    const p = await point3d("eg", 8.0, 1.75, 2.9);
    await R.move(p.x, p.y, 0.4);
    await longPress(0.8);
    await R.hold(1.0);
  }
  await sayOver("Ein Doppeltipp auf den Raum schaltet alle Lichter des Raums aus – und wieder an.");
  {
    // close the quick menu with a tap beside it, then double tap the kitchen floor
    const p = await point3d("eg", 6.7, 0, 2.2);
    await R.move(p.x, p.y, 0.6);
    await R.page.mouse.click(p.x, p.y);
    await R.frame(0.6, 600);
    await R.page.mouse.click(p.x, p.y);
    await R.sleep(80);
    await R.page.mouse.click(p.x, p.y);
    await live(R.time + 1.6);
    await R.page.mouse.click(p.x, p.y);
    await R.sleep(80);
    await R.page.mouse.click(p.x, p.y);
    await R.sleep(150);
    // the second double tap is not always taken (it follows the first too closely): switch the room back on the
    // way it would
    const off = await R.page.evaluate(() => window.fp3dPanel.hass.states["light.esstisch"].state !== "on");
    if (off) {
      console.log("double tap on: fallback");
      for (const id of ["light.esstisch", "light.kueche_links", "light.kueche_rechts", "light.kueche"]) await service("light", "turn_on", { entity_id: id });
    }
    await live(R.time + 1.2);
    await R.clickOn('button[aria-label="Schließen"]', 0.4).catch(() => {});
  }

  // ---------------------------------------------------------------- 8. Cameras in the editor
  await chapter("Kameras ausrichten");
  await sayOver("Kameras platzierst du wie jedes Gerät. Im Plan zeigt ein Kegel, wohin die Kamera schaut.");
  await editorOpen(true);
  await tapDevice("camera.wohnzimmer", 0.7);
  await pane("eg", 2.6, 2.0, { theta: -0.75, phi: 0.75, radius: 9, y: 0.3 });
  await R.hold(0.6);
  await sayOver("Unter „Montage“ hängt sie an der Wand und schaut in eine Richtung – die Drehung. An der Decke ist sie ein Dome, der rundum schaut.");
  await R.pickOption("Montage", "Decke (Dome, rundum)", 0.5);
  await R.hold(1.2);
  await R.pickOption("Montage", "Wand (Blickrichtung = Drehung)", 0.4);
  await R.hold(0.4);
  await sayOver("Der Griff an der Spitze des Kegels dreht die Kamera und setzt zugleich die Reichweite.");
  {
    const hnd = await R.editor(`const el = e.renderRoot.querySelector('[data-aim] .fp3d-hit'); if (!el) return null; const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 };`);
    await R.move(hnd.x, hnd.y, 0.6);
    const a = await R.planPoint(4.2, 3.4);
    await R.drag(a.x, a.y, 1.0);
  }
  await sayOver("Genauer geht es mit Zahlen: „Sichtwinkel“, „Reichweite“ und „Neigung nach unten“.");
  await fill("Sichtwinkel", "110");
  await R.hold(0.4);
  await R.moveTo({ label: "Reichweite" }, 0.4);
  await R.hold(0.4);
  await R.moveTo({ label: "Neigung nach unten" }, 0.4);
  await sayOver("„Sichtkegel in 3D zeigen“ blendet den Kegel für diese Kamera aus und wieder ein.");
  await R.clickOn({ text: "Sichtkegel in 3D zeigen" }, 0.5);
  await R.hold(0.8);
  await R.clickOn({ text: "Sichtkegel in 3D zeigen" }, 0.3);
  await sayOver("In 3D endet der Kegel an der ersten Wand: Eine Innenkamera sieht nicht durch die Wand ins Nachbarzimmer.");
  await pane("eg", 3.0, 2.3, { theta: -0.4, phi: 0.6, radius: 10, y: 0.3 });
  await R.move(1150, 560, 0.8);

  // ---------------------------------------------------------------- 9. Cameras in 3D
  await chapter("Kameras in 3D");
  await sayOver("In 3D hängt die Kamera als kleines Modell an der Wand, ihr Sichtfeld liegt als Kegel auf dem Boden.");
  await R.clickOn({ text: "3D", exact: true }, 0.6);
  await R.sleep(1000);
  await quiet({ text: "Wohnzimmer", exact: true }, 1500);
  await R.clickOn('button[aria-label="Schließen"]', 0.01).catch(() => {});
  // evening: the living room's lights off, so the cone on the floor stands out (set up before the line)
  for (const id of ["light.wohnzimmer_decke", "light.stehlampe", "light.led_band", "light.pixeluhr"]) await service("light", "turn_off", { entity_id: id });
  await service("media_player", "turn_off", { entity_id: "media_player.fernseher" });
  await h.setState("binary_sensor.wohnzimmer_kamera_bewegung", "off");
  await h.setState("binary_sensor.wohnzimmer_kamera_person", "off");
  await cam("eg", 1.6, 1.6, { theta: -0.75, phi: 0.72, radius: 6.8, y: 0.6 });
  await R.sleep(700);
  {
    const p = await point3d("eg", 0.2, 2.2, 0.2);
    await R.move(p.x, p.y, 0.7);
  }
  await R.hold(0.5);
  await sayOver("Meldet ein Bewegungs- oder Präsenzsensor der Kamera Bewegung, wird der Kegel rot.");
  // the demo reports motion now and then: hold the sensors at "off" until the moment it turns red
  await live(R.time + 1.2, async () => {
    if (await R.page.evaluate(() => ["binary_sensor.wohnzimmer_kamera_bewegung", "binary_sensor.wohnzimmer_kamera_person"].some((id) => window.fp3dPanel.hass.states[id].state !== "off"))) {
      await h.setState("binary_sensor.wohnzimmer_kamera_bewegung", "off");
      await h.setState("binary_sensor.wohnzimmer_kamera_person", "off");
    }
  });
  await h.setState("binary_sensor.wohnzimmer_kamera_bewegung", "on");
  await live(R.time + 1.6);
  await sayOver("Ein Tipp auf die Kamera oder auf ihren Kegel öffnet das Standbild, das sich alle paar Sekunden erneuert. Der Kegel ist die viel größere Tippfläche.");
  {
    const p = await point3d("eg", 1.2, 0.02, 1.3);
    await R.move(p.x, p.y, 0.7);
    await R.click();
    await R.hold(0.8);
  }
  await sayOver("Ein Tipp aufs Bild öffnet das Livebild von Home Assistant.");
  await R.moveTo(".qm-camera", 0.6).catch(() => {});
  await R.hold(0.6);
  await sayOver("Mit dem Kamera-Cockpit, einer Pro-Erweiterung, schaust du außerdem durch die Kamera in die 3D-Ansicht und siehst alle Livebilder auf einer Kamera-Wand.");
  await R.moveTo({ text: "Durch die Kamera schauen" }, 0.6).catch(() => {});
  await R.hold(1.0);
  await R.moveTo({ text: "Kameras", exact: true }, 0.8).catch(() => {});

  // ---------------------------------------------------------------- 10. Outro
  await chapter("Zusammenfassung");
  await catchUp();
  await R.open("");
  await R.hideCursor();
  await quiet({ text: "Erdgeschoss", exact: true, nth: 0 }, 1200);
  await quiet('button[aria-label="Bedienelemente ausblenden – nur die 3D-Ansicht bleibt"]', 700);
  {
    const a = { theta: -0.6, phi: 0.95, radius: 13 };
    const b = { theta: 0.4, phi: 0.85, radius: 11 };
    await cam("eg", 5.5, 3.5, a);
    await R.sleep(700);
    const end = await line("Kurz zusammengefasst: Leuchten sind Möbel mit einem Licht, mit Form, Höhe und Leuchtstärke. Kameras zeigen mit ihrem Kegel, was sie sehen.");
    await glide("eg", 5.5, 3.5, a, b, end - R.time);
  }
  await R.title("Nächste Folge: Dächer, Teil 1", `NeonPlan 3D – läuft auch auf alten Wandtablets${VERSION}`);
  {
    let end = await line("In der nächsten Folge geht es um Dächer: Satteldach, Walmdach und Co.");
    await live(end);
    end = await line("Links zur Online-Demo und zur Anleitung stehen in der Beschreibung. Und NeonPlan 3D läuft auch auf alten Wandtablets. Bis zum nächsten Mal!");
    await live(end + 0.6);
  }
}

N.report();
const result = await R.finish();
console.log(`recorded ${result.frames} frames, ${result.duration.toFixed(1)} s → ${out}`);
