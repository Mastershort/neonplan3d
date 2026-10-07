// Tutorial episode 7 – "Dächer Teil 1: Satteldach, Walmdach & Co." (manual 4.19, first half), in two parts (the
// checklist does not fit into 8 minutes):
//   a) Dachflächen und alle Dachformen: the simple roof in the settings (Kein Dach, Flachdach, Satteldach with
//      First, Dachneigung, Dachüberstand) and why an L-shaped house needs more, „Dachflächen (frei)“ with the proposal
//      from the rooms, the roof tool (3D beside, the note, the list, the plan labels, the floor buttons, selecting),
//      deleting a proposal and drawing a section yourself, moving it, resizing it at its corners, „Duplizieren“,
//      every „Form“ in 3D one after another and the ridge direction.
//   b) Traufe, Neigung, Pultdach und Garage: eave and pitch per side (a catslide), „Firsthöhe“, the lean-to with a
//      pent roof and „Seiten tauschen“, „Wandoberkante“, „Sitzt auf Etage“, overlapping sections, the garage with
//      a flat roof and a parapet, „Höhe“ and „Dachüberstand“, „Fixieren“ (L) and the plan lock, „Neu aus den Räumen
//      erzeugen“, „Zurück zu einem Dach“, and the result in 3D.
// Dormers, roof windows, knee walls and the carport are episode 8 – only mentioned.
// The house is invented for this episode: two floors in an L shape, a utility lean-to in the inner corner, a garage.
// Usage (from frontend/): node tutorials/ep07-daecher.mjs <out-dir> a|b [<voice-dir de> [<voice-dir en>]]
//   (voice dirs: private/tutorial-audio/ep07a/de and …/en, resp. ep07b)
// EP07_FAST=1: a quick dry run for checking the steps (the timing is not usable).
// Then: python ../tools/make-tutorial.py <out-dir> <out.mp4> --en tutorials/ep07a-narration-en.json

import { appVersion, narration, startRecorder } from "./recorder.mjs";
import { helpers, tap } from "./ep02-common.mjs";

const out = process.argv[2] ?? "tutorial-ep07";
const PART = process.argv[3] === "b" ? "b" : "a";
const FAST = !!process.env.EP07_FAST;
const VERSION = `<br><span style="font-size:20px;opacity:.7">aufgenommen mit NeonPlan 3D ${appVersion()}</span>`;

// ---------------------------------------------------------------- the invented house
const rect = (id, name, area_id, x0, z0, x1, z1, floor_material = "wood") => ({ id, name, area_id, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material });
const hole = (id, type, room_id, edge, offset, width, extra = {}) => ({
  id,
  room_id,
  edge,
  offset,
  width,
  type,
  sill: type === "window" ? 0.9 : 0,
  height: type === "window" ? 1.3 : type === "garage" ? 2.1 : 2.05,
  hinge: "left",
  leaves: 1,
  swing: "in",
  cover: null,
  contact: null,
  contact2: null,
  tilt: null,
  ...extra,
});
const floorOf = (id, name, elevation, ha_floor, rooms, openings) => ({ id, name, elevation, height: 2.5, cut_height: 1.15, rooms, openings, furniture: [], placements: [], background: null, outdoor: [], walls: [], ha_floor });
const HOUSE = [
  floorOf(
    "eg",
    "Erdgeschoss",
    0,
    "erdgeschoss",
    [
      rect("r_wohnen", "Wohnzimmer", "wohnzimmer", 0, 0, 6, 4.5),
      rect("r_kueche", "Küche", "kueche", 6, 0, 9.5, 4.5, "tiles"),
      rect("r_flur", "Flur", "flur", 0, 4.5, 4, 7.5, "tiles"),
      rect("r_bad", "Bad", "bad", 4, 4.5, 6.5, 7.5, "tiles"),
      rect("r_schlafen", "Schlafzimmer", "schlafzimmer", 6.5, 4.5, 9.5, 7.5, "carpet"),
      rect("r_essen", "Esszimmer", null, 0, 7.5, 4, 12),
      rect("r_hwr", "Hauswirtschaft", null, 4, 7.5, 7, 10, "tiles"),
      rect("r_garage", "Garage", "garage", 9.5, 0, 13, 6, "concrete"),
    ],
    [
      hole("o1", "window", "r_wohnen", 0, 3, 1.6),
      hole("o2", "window", "r_kueche", 0, 1.75, 1.2),
      hole("o3", "window", "r_essen", 3, 2.25, 1.6),
      hole("o4", "window", "r_essen", 2, 2, 1.2),
      hole("o5", "door", "r_hwr", 2, 1.5, 0.9),
      hole("o6", "window", "r_schlafen", 2, 1.2, 1.2),
      hole("g1", "garage", "r_garage", 0, 1.75, 2.5),
    ],
  ),
  floorOf(
    "og",
    "Obergeschoss",
    2.75,
    "obergeschoss",
    [
      rect("r_kind", "Kinderzimmer", "kinderzimmer", 0, 0, 4.5, 4.5),
      rect("r_arbeit", "Arbeitszimmer", "arbeitszimmer", 4.5, 0, 9.5, 4.5),
      rect("r_flur_og", "Flur oben", null, 0, 4.5, 9.5, 7.5),
      rect("r_eltern", "Elternzimmer", null, 0, 7.5, 4, 12, "carpet"),
    ],
    [hole("p1", "window", "r_kind", 0, 2.25, 1.2), hole("p2", "window", "r_arbeit", 0, 2.5, 1.6), hole("p3", "window", "r_eltern", 3, 2.25, 1.2), hole("p4", "window", "r_eltern", 2, 2, 1.2), hole("p5", "window", "r_flur_og", 2, 4.75, 1.2)],
  ),
];
/** The garage section as part 1 draws, moves and resizes it. */
const GARAGE = { x0: 9.25, z0: -0.25, x1: 13.25, z1: 6.25 };
// plan points
const MAIN = [4.75, 2.6];
const WING = [2, 10.3];
const HWR = [5.5, 8.9];
const GAR = [11.25, 3.2];
// 3D targets (plan x, height, plan z) of the 3D half
const T_MAIN = { x: 4.75, y: 5, z: 3.75 };
const T_HOUSE = { x: 6.5, y: 3, z: 6 };
const T_WING = { x: 2, y: 4, z: 9.5 };
const T_HWR = { x: 5.5, y: 2.5, z: 8.5 };
const T_GAR = { x: 11.25, y: 2, z: 3 };

// ---------------------------------------------------------------- recorder
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
    await R.finish().catch(() => {});
    process.exit(1);
  });
}
// confirm() of the app: accepted at once (a native dialog is not in the screenshots; fakeConfirm shows it)
R.page.on("dialog", (d) => void d.accept());
await R.page.evaluateOnNewDocument(() => {
  try {
    localStorage.clear();
  } catch {
    // no storage
  }
});

// ---------------------------------------------------------------- helpers
const { fill, typeOver, tapPlan, pointPlan, scrollSide, view3d } = h;
const T = (o) => JSON.stringify(o);
/** The house without a roof, loaded invisibly (no undo step), the ground floor shown. */
const loadHouse = async () => {
  await R.editor(`const d = structuredClone(e._doc); d.floors = ${T(HOUSE)}; d.settings.roof = { type: "none", pitch: 35, overhang: 0.4 }; e.setDoc(d, null); e.past = []; e._canUndo = false; e._floorId = "eg"; e._roomId = null; e.fit();`);
  await R.sleep(900);
};
/** The roof as part 1 leaves it (the proposal, the garage drawn anew); `final`: as part 2 leaves it. */
const roofState = (final = false) =>
  R.editor(`e.useRoofSections(true);
  const s = e._doc.settings.roof.sections;
  const garage = s.find((x) => x.x0 > 9);
  const rest = s.filter((x) => x !== garage);
  const g = { ...garage, ...${T(GARAGE)}, id: "roof_garage" };
  if (${final}) {
    const hwr = rest.find((x) => x.x0 > 3 && x.z0 > 7);
    Object.assign(hwr, { shape: "pent", flip: true, pitch_a: 15 });
    Object.assign(g, { shape: "parapet", overhang: 0 });
  }
  const d = structuredClone(e._doc); d.settings.roof.sections = [...rest, g]; e.setDoc(d, null);
  e.past = []; e._canUndo = false; e._roofId = null;`);
/** Open the preview with the house; the 3D tab shows the floors stacked (the roof sits on the house). */
const start = async () => {
  await R.open("empty");
  await tap(R, { text: "Editor", exact: true });
  await R.sleep(700);
  await loadHouse();
  await tap(R, { text: "3D", exact: true, nth: 0 });
  await R.sleep(1500);
  await tap(R, { text: "Gestapelt", exact: true });
  await R.sleep(300);
  await tap(R, { text: "Editor", exact: true });
  await R.sleep(900);
};
/** The roof tool with 3D beside, invisibly. */
const roofTool = async () => {
  await tap(R, { text: "Dach", exact: true });
  await R.sleep(2500);
  await tap(R, { text: "Alles zeigen", exact: true });
};
/** Change the building in the 3D tab (teaser only): roof sections patched by a test. */
const patch3d = (fn) =>
  R.page.evaluate((src) => {
    const p = window.fp3dPanel;
    const b = structuredClone(p.data.building);
    new Function("b", src)(b);
    p.data.edit(b);
  }, fn);
/** Glide the main 3D view (theta, phi, radius). */
const glideMain = async (a, b, seconds) => {
  const n = FAST ? 2 : Math.max(1, Math.round(seconds * 25));
  for (let i = 1; i <= n; i++) {
    const t = i / n;
    const k = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    await R.view({ theta: a.theta + (b.theta - a.theta) * k, phi: a.phi + (b.phi - a.phi) * k, radius: a.radius + (b.radius - a.radius) * k });
    await R.frame(1 / 25, 40);
  }
};
/** The 3D half's camera (with its target) and a glide of it. */
const cam = (theta, phi, radius, target) => ({ theta, phi, radius, target });
const setCam = (c) => view3d(c);
const glide3d = (a, b, seconds) => h.glide3d(a, b, FAST ? 0.1 : seconds);
/** Record frames while nothing is clicked (the 3D half settles). */
const live = async (seconds) => {
  const end = R.time + seconds;
  while (R.time < end - 0.02) await R.frame(1 / 25, 40);
};
/** Take the focus out of a form field (keys go to the plan then). */
const blur = () =>
  R.page.evaluate(() => {
    let a = document.activeElement;
    while (a?.shadowRoot?.activeElement) a = a.shadowRoot.activeElement;
    a?.blur?.();
  });
/** A key cap at the bottom left of the plan, or none. */
const keyCap = (text) =>
  R.page.evaluate((text) => {
    document.getElementById("tut-key")?.remove();
    if (!text) return;
    const d = document.createElement("div");
    d.id = "tut-key";
    d.style.cssText =
      "position:fixed;left:40px;bottom:70px;z-index:2147483643;padding:12px 22px;border-radius:12px;background:rgba(8,16,34,.86);border:2px solid #37e0ff;box-shadow:0 0 22px rgba(55,224,255,.45);color:#eaf6ff;font:700 34px/1 system-ui,'Segoe UI',sans-serif;letter-spacing:.5px";
    d.textContent = text;
    document.body.appendChild(d);
  }, text);
const press = async (label, key) => {
  await blur();
  await keyCap(label);
  await R.page.keyboard.press(key);
  await R.frame(0.35, 150);
};
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
/** Move the cursor onto any element whose text contains `text` (innermost last match). */
const moveToText = async (text, seconds = 0.5) => {
  const box = await R.page.evaluate((text) => {
    const walk = function* (root) {
      for (const el of root.querySelectorAll("*")) {
        yield el;
        if (el.shadowRoot) yield* walk(el.shadowRoot);
      }
    };
    let hit = null;
    for (const el of walk(document)) {
      if (!/^(P|SPAN|DIV|LABEL|BUTTON|B)$/.test(el.tagName)) continue;
      if (!el.textContent.includes(text)) continue;
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.height > 0 && r.top < innerHeight && r.bottom > 0) hit = el;
    }
    if (!hit) return null;
    const r = hit.getBoundingClientRect();
    return { x: r.left + Math.min(r.width / 2, 120), y: r.top + Math.min(r.height / 2, 14) };
  }, text);
  if (!box) throw new Error(`text not found: ${text}`);
  await R.move(box.x, box.y, seconds);
};
/** Centre of an element of the editor (selector), the n-th match. */
const edEl = (selector, n = 0) =>
  R.editor(`const el = e.renderRoot.querySelectorAll(${T(selector)})[${n}]; if (!el) return null; const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 };`);
/** The id of the roof section that contains a plan point (the last one, drawn on top). */
const secAt = (x, z) => R.editor(`const s = (e._doc.settings.roof.sections ?? []).filter((s) => s.x0 <= ${x} && ${x} <= s.x1 && s.z0 <= ${z} && ${z} <= s.z1); return s.length ? s[s.length - 1].id : null;`);
const selected = () => R.editor(`const s = e.roofSection; return s ? JSON.parse(JSON.stringify(s)) : null;`);
/** Tap a roof section in the plan; if the tap picked another one, select the right one the way the tap would. */
const tapSection = async ([x, z], seconds = 0.5) => {
  const want = await secAt(x, z);
  await tapPlan(x, z, seconds);
  const got = await R.editor(`return e._roofId;`);
  if (got !== want) {
    console.log(`tap at ${x}/${z} selected ${got}, not ${want}`);
    await R.editor(`e._roofId = ${T(want)};`);
    await R.frame(1 / 25, 200);
  }
};
/** A select field whose label text (without its options) is exactly `label`: its centre. */
const selBox = (label) =>
  R.page.evaluate((label) => {
    const walk = function* (root) {
      for (const el of root.querySelectorAll("*")) {
        yield el;
        if (el.shadowRoot) yield* walk(el.shadowRoot);
      }
    };
    for (const el of walk(document)) {
      if (el.tagName !== "LABEL") continue;
      const s = el.querySelector("select");
      if (!s || s.getBoundingClientRect().width === 0) continue;
      const own = [...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join("").trim();
      if (own !== label) continue;
      const r = s.getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    }
    return null;
  }, label);
/** A click ring at x/y without clicking (for select fields). */
const ring = async (x, y) => {
  await R.page.evaluate((x, y) => {
    const r = document.createElement("div");
    r.id = "tut-ring";
    r.style.left = `${x}px`;
    r.style.top = `${y}px`;
    document.body.appendChild(r);
    setTimeout(() => r.remove(), 500);
  }, x, y);
  for (let i = 0; i < 8; i++) await R.frame(1 / 25, 25);
};
/**
 * Pick an option of a select field (its own label text exactly `label`): a ring on the field, the option list as an
 * overlay (a native dropdown is not in headless screenshots), the option clicked, then the value set.
 */
const pick = async (label, option, seconds = 0.5) => {
  const box = await selBox(label);
  if (!box) throw new Error(`no select: ${label}`);
  await R.move(box.x, box.y, seconds);
  // only the ring: a real click would open the native dropdown beside the overlay (it shows up in the screenshots)
  await ring(box.x, box.y);
  const at = await R.page.evaluate(
    (label, option) => {
      const walk = function* (root) {
        for (const el of root.querySelectorAll("*")) {
          yield el;
          if (el.shadowRoot) yield* walk(el.shadowRoot);
        }
      };
      let sel = null;
      for (const el of walk(document)) {
        if (el.tagName !== "LABEL") continue;
        const s = el.querySelector("select");
        if (!s || s.getBoundingClientRect().width === 0) continue;
        if ([...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join("").trim() === label) sel = s;
      }
      if (!sel) return null;
      if (!document.getElementById("tut-options-style")) {
        const st = document.createElement("style");
        st.id = "tut-options-style";
        st.textContent = `#tut-options { position: fixed; z-index: 2147483640; background: #101a2e; border: 1px solid #37e0ff; border-radius: 8px;
          box-shadow: 0 8px 30px rgba(0,0,0,.6); padding: 4px 0; font: 15px/1.2 system-ui, "Segoe UI", sans-serif; color: #eaf6ff; overflow: hidden; }
          #tut-options div { padding: 7px 14px; white-space: nowrap; }
          #tut-options div.tut-sel { color: #37e0ff; }
          #tut-options div.tut-hover { background: #1f6f86; color: #fff; }`;
        document.head.appendChild(st);
      }
      const r = sel.getBoundingClientRect();
      const o = document.createElement("div");
      o.id = "tut-options";
      let hit = null;
      for (const opt of sel.options) {
        const d = document.createElement("div");
        d.textContent = opt.textContent.trim();
        if (opt.selected) d.className = "tut-sel";
        if (d.textContent === option) hit = d;
        o.appendChild(d);
      }
      o.style.left = `${r.left}px`;
      o.style.width = `${r.width}px`;
      document.body.appendChild(o);
      const hh = o.getBoundingClientRect().height;
      o.style.top = `${r.bottom + hh + 4 < innerHeight ? r.bottom + 2 : Math.max(4, r.top - hh - 2)}px`;
      if (!hit) return null;
      hit.classList.add("tut-hover");
      const b = hit.getBoundingClientRect();
      return { x: b.left + Math.min(60, b.width / 2), y: b.top + b.height / 2 };
    },
    label,
    option,
  );
  if (!at) throw new Error(`no option: ${label} / ${option}`);
  await R.frame(0.4, 60);
  await R.move(at.x, at.y, 0.5);
  await R.click();
  await R.page.evaluate(
    (label, option) => {
      document.getElementById("tut-options")?.remove();
      const walk = function* (root) {
        for (const el of root.querySelectorAll("*")) {
          yield el;
          if (el.shadowRoot) yield* walk(el.shadowRoot);
        }
      };
      for (const el of walk(document)) {
        if (el.tagName !== "LABEL") continue;
        const s = el.querySelector("select");
        if (!s || s.getBoundingClientRect().width === 0) continue;
        if ([...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join("").trim() !== label) continue;
        const opt = [...s.options].find((o) => o.textContent.trim() === option);
        s.value = opt.value;
        s.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
        s.blur();
        return;
      }
    },
    label,
    option,
  );
  await R.frame(1 / 25, 250);
};
/** Drag from one plan point to another. */
const dragPlan = async (x0, z0, x1, z1, seconds = 1) => {
  const a = await R.planPoint(x0, z0);
  const b = await R.planPoint(x1, z1);
  await R.move(a.x, a.y, 0.5);
  await R.drag(b.x, b.y, seconds);
};
/** Drag a corner handle of the selected section to a plan point. */
const dragCorner = async (kx, kz, x, z, seconds = 1) => {
  const id = await R.editor(`return e._roofId;`);
  const a = await edEl(`[data-roof-corner="${id}:${kx}:${kz}"] .fp3d-hit`);
  if (!a) throw new Error("no corner handle");
  const b = await R.planPoint(x, z);
  await R.move(a.x, a.y, 0.5);
  await R.drag(b.x, b.y, seconds);
};
/** Scroll the side panel back to its top. */
const sideTop = async (seconds = 0.4) => {
  await h.side(0.3);
  const top = await R.editor(`const s = e.renderRoot.querySelector("aside.fp3d-side:not(.fp3d-side-strip)"); return s ? s.scrollTop : 0;`);
  if (!top) return;
  const n = Math.max(1, Math.round(seconds * 25));
  let done = 0;
  for (let i = 1; i <= n; i++) {
    const t = i / n;
    const k = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    const step = Math.round(top * k) - done;
    done += step;
    if (step) await R.page.mouse.wheel({ deltaY: -step });
    await R.frame(1 / 25, 30);
  }
  await R.frame(1 / 25, 120);
};
/** A point in the 3D half (for pointing at the roof): plan x, height y, plan z. */
const panePoint = (x, y, z) =>
  R.editor(`const v = e.renderRoot.querySelector("fp3d-view3d"); const viewer = Object.values(v).find((o) => o && o.floors && o.floorMap);
    const fv = viewer.floorMap.get("eg"); const p = fv.group.position.clone().set(${x}, ${y}, ${z}); fv.group.localToWorld(p);
    p.project(viewer.camera); const c = (v.renderRoot ?? v.shadowRoot).querySelector("canvas").getBoundingClientRect();
    return { x: c.left + ((p.x + 1) / 2) * c.width, y: c.top + ((1 - p.y) / 2) * c.height };`);
const point3d = async (x, y, z, seconds = 0.5) => {
  const p = await panePoint(x, y, z);
  await R.move(p.x, p.y, seconds);
};

// ================================================================ PART 1: Dachflächen und alle Dachformen
if (PART === "a") {
  // ---------------------------------------------------------------- teaser: the finished roof, shapes changing
  await chapter("Teaser");
  await start();
  await roofState(true);
  await R.hideCursor();
  await tap(R, { text: "3D", exact: true, nth: 0 });
  await R.sleep(2500);
  {
    const A = { theta: 0.35, phi: 0.95, radius: 30 };
    const B = { theta: 0.85, phi: 0.9, radius: 27 };
    const C = { theta: 1.5, phi: 0.95, radius: 29 };
    const shape = (s) => patch3d(`b.settings.roof.sections[0].shape = ${T(s)};`);
    await R.view(A);
    await R.sleep(1500);
    await R.title("Dächer: Satteldach, Walmdach & Co.", `NeonPlan 3D · Folge 7 · Teil 1${VERSION}`);
    await sayOver("Satteldach, Walmdach, Krüppelwalm oder Mansarddach – in NeonPlan bekommt jedes Haus sein eigenes Dach.");
    await glideMain(A, { theta: 0.5, phi: 0.94, radius: 29.5 }, 1.6);
    await shape("hip");
    await glideMain({ theta: 0.5, phi: 0.94, radius: 29.5 }, { theta: 0.65, phi: 0.93, radius: 28.5 }, 1.6);
    await shape("halfhip");
    await glideMain({ theta: 0.65, phi: 0.93, radius: 28.5 }, B, 1.6);
    await shape("mansard");
    await R.untitle();
    await sayOver("In diesem Video zeige ich dir, wie du ein Dach aus Dachflächen baust – und jede Dachform in 3D.");
    await glideMain(B, { theta: 1.15, phi: 0.92, radius: 28 }, 2.2);
    await shape("gable");
    await glideMain({ theta: 1.15, phi: 0.92, radius: 28 }, C, 2.6);
  }

  // ---------------------------------------------------------------- intro
  await chapter("Was wir heute machen");
  await start();
  await R.hideCursor(false);
  await sayOver("Für diese Folge habe ich ein Haus vorbereitet: zwei Etagen in L-Form, dazu ein Anbau mit Hauswirtschaftsraum und eine Garage.");
  await pointPlan(2, 9.8, 0.6);
  await R.hold(0.6);
  await pointPlan(5.5, 8.8, 0.5);
  await R.hold(0.6);
  await pointPlan(11.25, 3, 0.6);
  await sayOver("Ein Dach hat es noch nicht. Das ändern wir jetzt.");
  await pointPlan(4.75, 2.2, 0.6);

  // ---------------------------------------------------------------- the simple roof
  await chapter("Das einfache Dach in den Einstellungen");
  await sayOver("Der schnellste Weg ist das einfache Dach. Du findest es unten in der Seitenleiste, unter „Einstellungen“.");
  await scrollSide({ text: "Einstellungen" }, 760, 0.9);
  await R.clickOn({ text: "Einstellungen" }, 0.5);
  await scrollSide(() => selBox("Dach"), 420, 0.8);
  await sayOver("Bei „Dach“ wählst du „Kein Dach“, „Flachdach“, „Satteldach“ oder „Dachflächen (frei)“. Ich nehme „Satteldach“.");
  await pick("Dach", "Satteldach", 0.5);
  await sayOver("Dazu kommen drei Felder: „First“ – entlang der langen oder der kurzen Seite, etwa beim Reihenhaus –, die „Dachneigung“ und der „Dachüberstand“ über die Außenwände.");
  await R.moveTo({ label: "First" }, 0.5);
  await R.hold(1.6);
  await R.moveTo({ label: "Dachneigung" }, 0.5);
  await R.hold(0.8);
  await R.moveTo({ label: "Dachüberstand" }, 0.5);
  await sayOver("Dieses Dach liegt immer über dem ganzen obersten Geschoss. Schauen wir es uns in 3D an.");
  await R.clickOn({ text: "3D", exact: true, nth: 0 }, 0.6);
  await R.sleep(2000);
  {
    const A = { theta: 0.2, phi: 0.95, radius: 31 };
    const B = { theta: 0.75, phi: 0.92, radius: 29 };
    await R.view(A);
    await R.frame(0.2, 400);
    await sayOver("Beim L-Haus siehst du das Problem: Das Satteldach deckt das ganze Rechteck ab – auch die Ecke, in der gar kein Haus steht. Anbau und Garage bekommen gar nichts.");
    await glideMain(A, B, 5);
    await sayOver("Für ein einfaches, rechteckiges Haus reicht das völlig. Für alles andere gibt es Dachflächen.");
    await glideMain(B, { theta: 0.95, phi: 0.92, radius: 29 }, 2);
  }
  await R.clickOn({ text: "Editor", exact: true }, 0.6);
  await R.sleep(1500);

  // ---------------------------------------------------------------- roof sections from the rooms
  await chapter("Dachflächen aus den Räumen");
  await sayOver("Zurück im Editor nehme ich oben das Werkzeug „Dach“ und dann „Dachflächen aus den Räumen erzeugen“.");
  await R.clickOn({ text: "Dach", exact: true }, 0.6);
  await R.sleep(1500);
  await R.frame(0.5, 300);
  await R.clickOn({ text: "Dachflächen aus den Räumen erzeugen" }, 0.6);
  await R.sleep(1500);
  await R.frame(0.3, 300);
  await setCam(cam(0.75, 0.92, 36, T_HOUSE));
  await R.clickOn({ text: "Alles zeigen", exact: true }, 0.6);
  await sayOver("NeonPlan schlägt die Dachflächen gleich aus deinen Räumen vor: je Etage die Teile, über denen keine höhere Etage liegt – jede mit Satteldach.");
  await glide3d(cam(0.75, 0.92, 36, T_HOUSE), cam(0.35, 0.95, 34, T_HOUSE), 5);
  await sayOver("Hier sind es vier: das Haupthaus und der Seitenflügel über dem Obergeschoss, dazu Garage und Anbau über dem Erdgeschoss.");
  await moveToText("1 · Sattel · 10", 0.5);
  await R.hold(0.6);
  await moveToText("2 · Sattel", 0.4);
  await R.hold(0.6);
  await moveToText("3 · Sattel", 0.4);
  await R.hold(0.6);
  await moveToText("4 · Sattel", 0.4);
  await sayOver("Das Werkzeug „Dach“ öffnet daneben die 3D-Ansicht mit dem ganzen Haus. Jede Änderung siehst du dort sofort.");
  await R.moveTo({ text: "Dach", exact: true }, 0.6);
  await R.hold(0.8);
  await R.move(1250, 560, 0.6);
  await sayOver("Dasselbe passiert, wenn du in den Einstellungen bei „Dach“ „Dachflächen (frei)“ wählst.");
  await moveToText("1 · Sattel · 10", 0.5);
  await R.hold(0.6);
  await sayOver("Der Hinweis oben sagt: Hier lassen sich nur Dachflächen und Dachfenster verschieben – Räume und Möbel sind gesperrt.");
  await moveToText("Hier lassen sich nur Dachflächen", 0.6);
  await R.hold(0.6);

  // ---------------------------------------------------------------- selecting
  await chapter("Dachflächen auswählen");
  await sayOver("In der Liste steht jede Dachfläche mit Nummer, Form, Größe und Firsthöhe. Im Plan steht das Gleiche kurz am First.");
  await moveToText("1 · Sattel · 10", 0.5);
  await R.hold(0.8);
  await pointPlan(4.4, 3.75, 0.6);
  await sayOver("Antippen wählt eine Fläche aus, in der Liste oder direkt im Plan. Ich tippe das Haupthaus an: Rechts erscheint sein Formular, im Plan die Ecken.");
  await tapSection(MAIN, 0.5);
  await R.hold(1.2);
  await sayOver("„Dachflächen“ oben führt zurück zur Liste.");
  await R.clickOn({ text: "‹ Dachflächen" }, 0.5);
  await sayOver("Mit den Knöpfen oben wählst du, welche Etage der Plan darunter zeigt. Im Obergeschoss siehst du dessen Räume – praktisch, um an ihren Wänden entlang zu zeichnen.");
  await R.clickOn({ text: "Obergeschoss", exact: true }, 0.5);
  await R.hold(1.4);
  await R.clickOn({ text: "Erdgeschoss", exact: true }, 0.5);
  await sayOver("Unten steht immer, was im Plan geht: aufziehen, antippen, ziehen, Ecken.");
  await moveToText("Dachfläche aufziehen", 0.6);
  await R.hold(0.6);

  // ---------------------------------------------------------------- drawing one yourself
  await chapter("Eine Dachfläche selbst zeichnen");
  await sayOver("Die Garage zeichne ich selbst. Erst lösche ich den Vorschlag: antippen und unten „Löschen“.");
  await setCam(cam(2.4, 1.0, 22, T_GAR));
  await tapSection(GAR, 0.6);
  await R.clickOn({ text: "Löschen", exact: true }, 0.6);
  await R.hold(0.4);
  await sayOver("Dann ziehe ich im Plan ein Rechteck auf – ungefähr reicht erst einmal.");
  await dragPlan(13.6, 5.6, 10.0, 0.4, 1.4);
  await R.hold(0.3);
  console.log("drawn:", JSON.stringify(await selected()));
  await sayOver("Die neue Fläche bekommt ein Satteldach. Ihre Höhe holt sie sich von den Wänden darunter – hier von der Garage, egal welche Etage der Plan gerade zeigt.");
  await glide3d(cam(2.4, 1.0, 22, T_GAR), cam(2.75, 1.0, 21, T_GAR), 4);
  await sayOver("Ziehen verschiebt die Fläche. Ich schiebe sie bündig an die Ecke.");
  {
    const s = await selected();
    const cx = (s.x0 + s.x1) / 2;
    const cz = (s.z0 + s.z1) / 2;
    await dragPlan(cx, cz, cx + (GARAGE.x0 - s.x0), cz + (GARAGE.z0 - s.z0), 1.2);
    console.log("moved:", JSON.stringify(await selected()));
  }
  await sayOver("An den Ecken änderst du die Größe – bis die Fläche die Garage bis zur Außenkante der Wände abdeckt. Den Dachüberstand legt NeonPlan selbst dazu.");
  await dragCorner(1, 1, GARAGE.x1, GARAGE.z1, 1.3);
  console.log("resized:", JSON.stringify(await selected()));
  await R.hold(0.6);
  await sayOver("„Duplizieren“ legt eine Kopie daneben – etwa für eine Doppelgarage. Ich brauche sie nicht und nehme sie mit „Rückgängig“ wieder weg.");
  await R.clickOn({ text: "Duplizieren", exact: true }, 0.5);
  await R.hold(2.2);
  await R.clickOn({ text: "Rückgängig", exact: true }, 0.6);
  await R.hold(0.5);

  // ---------------------------------------------------------------- every shape
  await chapter("Alle Dachformen in 3D");
  await sayOver("Jetzt die Formen. Ich tippe das Haupthaus an. Ganz oben im Formular steht „Form“ – acht Stück gibt es.");
  await tapSection(MAIN, 0.6);
  await setCam(cam(-2.05, 1.0, 30, T_MAIN));
  await R.moveTo({ label: "Form" }, 0.5);
  await R.hold(0.4);
  const shapes = [
    ["Sattel", null, "„Sattel“ ist das klassische Satteldach: zwei Dachflächen, an den Enden je ein Giebel."],
    ["Walm", "Walm", "„Walm“: Auch die Giebelseiten sind schräg – vier Dachflächen rundherum."],
    ["Krüppelwalm", "Krüppelwalm", "„Krüppelwalm“: ein Giebel, dessen Spitze abgewalmt ist. Das siehst du an vielen älteren Häusern."],
    ["Zelt", "Zelt", "„Zelt“: vier Flächen, die sich oben in einem Punkt treffen – ideal für ein fast quadratisches Haus."],
    ["Mansard", "Mansard", "„Mansard“: unten steil, oben flach. So bleibt im Dachgeschoss viel Platz."],
    ["Pult", "Pult", "„Pult“: eine einzige schräge Fläche – typisch für einen Anbau oder ein modernes Haus."],
    ["Flach", "Flach", "„Flach“: ein Flachdach, wie beim Bungalow."],
    ["Attika", "Attika", "Und „Attika“: ein Flachdach mit einer Brüstung rundherum."],
  ];
  let th = -2.05;
  for (const [, option, text] of shapes) {
    await sayOver(text);
    const end = R.time + N.length(text) - 0.3;
    if (option) await pick("Form", option, 0.4);
    await point3d(T_MAIN.x, 6.2, T_MAIN.z, 0.5);
    const left = Math.max(0.6, end - R.time);
    await glide3d(cam(th, 1.0, 30, T_MAIN), cam(th + 0.12, 1.0, 30, T_MAIN), left);
    th += 0.12;
  }
  await sayOver("Für unser Haus bleibe ich beim Satteldach.");
  await pick("Form", "Sattel", 0.5);
  await glide3d(cam(th, 1.0, 30, T_MAIN), cam(th + 0.1, 1.0, 30, T_MAIN), 1);

  // ---------------------------------------------------------------- ridge direction
  await chapter("Die Firstrichtung");
  await sayOver("Unter der Form legen zwei Knöpfe fest, wie der First läuft: im Plan quer oder von oben nach unten.");
  await R.moveTo({ text: "First ↔", exact: true }, 0.5);
  await R.hold(0.6);
  await R.clickOn({ text: "First ↕", exact: true }, 0.5);
  await sayOver("Jetzt spannt das Dach über die lange Seite und wird höher. Die „Firsthöhe“ steht unten im Formular – und im Plan am First.");
  await glide3d(cam(th + 0.1, 1.0, 30, T_MAIN), cam(th - 0.2, 0.98, 31, T_MAIN), 2.5);
  await moveToText("Firsthöhe:", 0.5);
  await R.hold(0.8);
  await pointPlan(4.75, 3.75, 0.5);
  await sayOver("Bei unserem Haus läuft der First quer. Also wieder zurück.");
  await R.clickOn({ text: "First ↔", exact: true }, 0.5);
  await R.hold(0.8);

  // ---------------------------------------------------------------- outro
  await chapter("Wie geht es weiter");
  await R.title("Teil 2: Traufe, Neigung, Pultdach und Garage", `NeonPlan 3D – läuft auch auf alten Wandtablets${VERSION}`);
  await sayOver("Das war Teil eins: das einfache Dach, Dachflächen aus den Räumen, selbst zeichnen, verschieben, alle acht Formen und die Firstrichtung.");
  await R.clickOn({ text: "‹ Dachflächen" }, 0.5);
  await glide3d(cam(th - 0.2, 0.98, 31, T_MAIN), cam(0.6, 0.93, 36, T_HOUSE), 3);
  await catchUp();
  await say("In Teil zwei stellen wir Traufe und Neigung ein, bauen das Pultdach am Anbau und das Flachdach der Garage – und schauen, wie sich Dachflächen überschneiden.");
  await say("Links zur Online-Demo und zur Anleitung stehen in der Beschreibung. NeonPlan läuft übrigens auch auf alten Wandtablets. Bis gleich in Teil zwei!");
  await R.hold(0.6);
} else {
  // ================================================================ PART 2: Traufe, Neigung, Pultdach und Garage
  // ---------------------------------------------------------------- teaser
  await chapter("Teaser");
  await start();
  await roofState(true);
  await R.hideCursor();
  await tap(R, { text: "3D", exact: true, nth: 0 });
  await R.sleep(2500);
  {
    const A = { theta: 1.3, phi: 0.95, radius: 30 };
    const B = { theta: 0.7, phi: 0.9, radius: 26 };
    const C = { theta: 0.1, phi: 0.95, radius: 29 };
    await R.view(A);
    await R.sleep(1500);
    await R.title("Traufe, Neigung, Pultdach und Garage", `NeonPlan 3D · Folge 7 · Teil 2${VERSION}`);
    await sayOver("Ein Anbau mit Pultdach, eine Garage mit Flachdach und ein Haus in L-Form – alles aus einzelnen Dachflächen.");
    await glideMain(A, B, 5.5);
    await R.untitle();
    await sayOver("In diesem Video stellen wir jede Dachfläche fein ein: Traufe, Neigung, Höhen und Etage.");
    await glideMain(B, C, 4.5);
  }

  // ---------------------------------------------------------------- intro
  await chapter("Was wir heute machen");
  await start();
  await roofState(false);
  await roofTool();
  await setCam(cam(0.6, 0.93, 36, T_HOUSE));
  await R.sleep(800);
  await R.hideCursor(false);
  await sayOver("Wir machen mit dem Haus aus Teil eins weiter: vier Dachflächen, alle noch mit Satteldach.");
  await moveToText("1 · Sattel · 10", 0.6);
  await R.hold(0.5);
  await moveToText("4 · Sattel", 0.5);

  // ---------------------------------------------------------------- eave and pitch per side
  await chapter("Traufe und Neigung je Seite");
  await sayOver("Ich tippe den Seitenflügel an. Jede Dachfläche hat zwei Seiten, und für jede stellst du „Traufe“ und „Neigung“ ein.");
  await tapSection(WING, 0.6);
  await setCam(cam(-0.75, 1.0, 24, T_WING));
  await R.moveTo({ label: "Traufe (m) links" }, 0.5);
  await R.hold(0.4);
  await R.moveTo({ label: "Neigung (°) rechts" }, 0.6);
  await sayOver("Die Traufe ist die Höhe der unteren Dachkante. Weil der First hier von oben nach unten läuft, heißen die Seiten links und rechts – sonst oben und unten.");
  await R.moveTo({ label: "Traufe (m) links" }, 0.5);
  await R.hold(1.2);
  await sayOver("Alle Höhen zählen vom Boden: 5,25 Meter, genau auf den Wänden des Obergeschosses.");
  await R.moveTo({ label: "Traufe (m) rechts" }, 0.5);
  await R.hold(0.6);
  await sayOver("Setze ich die Traufe links auf 3 Meter, zieht diese Seite weiter herunter. So entsteht ein Abschleppdach, wie man es oft über einem niedrigen Anbau sieht.");
  await fill("Traufe (m) links", "3");
  await glide3d(cam(-0.75, 1.0, 24, T_WING), cam(-0.45, 0.98, 24, T_WING), 4);
  await sayOver("„Rückgängig“ nimmt es zurück. Die Neigung macht eine Seite steiler oder flacher – hier rechts 50 Grad.");
  await R.clickOn({ text: "Rückgängig", exact: true }, 0.6);
  await R.hold(0.4);
  await fill("Neigung (°) rechts", "50");
  await glide3d(cam(-0.45, 0.98, 24, T_WING), cam(0.35, 0.98, 25, T_WING), 2.5);
  await sayOver("Mit Traufe und Neigung ändert sich die „Firsthöhe“. Sie steht unten im Formular, in der Liste und im Plan am First.");
  await moveToText("Firsthöhe:", 0.5);
  await R.hold(1);
  await pointPlan(2, 9.9, 0.5);
  await R.hold(0.4);
  await R.clickOn({ text: "Rückgängig", exact: true }, 0.6);
  await R.hold(0.4);

  // ---------------------------------------------------------------- lean-to with a pent roof
  await chapter("Anbau mit Pultdach");
  await sayOver("Jetzt der Anbau. Ein typischer Fall: ein Pultdach, das an der Hauswand lehnt. Bei „Form“ wähle ich „Pult“.");
  await tapSection(HWR, 0.6);
  await setCam(cam(0.8, 1.05, 18, T_HWR));
  await pick("Form", "Pult", 0.5);
  await sayOver("Ein Pultdach steigt von der ersten Seite an – hier von oben im Plan, also von der Hauswand weg. Das ist falsch herum.");
  await glide3d(cam(0.8, 1.05, 18, T_HWR), cam(0.55, 1.1, 18, T_HWR), 3.5);
  await sayOver("„Seiten tauschen“ dreht es um: Jetzt liegt die hohe Seite an der Hauswand.");
  await R.clickOn({ text: "Seiten tauschen" }, 0.6);
  await R.hold(1.2);
  await sayOver("Beim Pultdach gibt es nur eine Traufe und eine Neigung. Ich stelle flache 15 Grad ein.");
  await R.moveTo({ label: "Traufe (m)" }, 0.5);
  await R.hold(0.4);
  await fill("Neigung (°)", "15");
  await glide3d(cam(0.55, 1.1, 18, T_HWR), cam(0.8, 1.05, 18, T_HWR), 1.5);
  await sayOver("Wo das Pultdach an die höhere Hauswand stößt, fällt der Überstand weg – das Dach endet an der Wand.");
  await glide3d(cam(0.8, 1.05, 18, T_HWR), cam(0.25, 1.2, 15, T_HWR), 3.5);

  // ---------------------------------------------------------------- top of walls
  await chapter("Die Wandoberkante");
  await sayOver("„Wandoberkante“ ist die Höhe, auf der die Wände unter dem Dach enden – beim Anbau 2,5 Meter, wie seine Räume.");
  await R.moveTo({ label: "Wandoberkante" }, 0.5);
  await R.hold(0.8);
  await sayOver("Von dort zieht NeonPlan die Wände bis unters Dach hoch. So ist der Raum unter dem Pultdach rundherum geschlossen.");
  await glide3d(cam(0.25, 1.2, 15, T_HWR), cam(1.15, 1.15, 16, T_HWR), 4);
  await sayOver("Eine neue Dachfläche übernimmt die Wandoberkante von den Räumen darunter. Liegt sie tiefer als die Decke, entstehen Dachschrägen – das zeige ich in der nächsten Folge.");
  await moveToText("Liegt sie unter der Deckenhöhe", 0.6);
  await R.hold(1);

  // ---------------------------------------------------------------- sits on floor
  await chapter("Sitzt auf Etage");
  await sayOver("Daneben zeigt „Sitzt auf Etage“, zu welcher Etage das Dach gehört: Erdgeschoss.");
  await R.moveTo({ label: "Sitzt auf Etage" }, 0.5);
  await R.hold(0.6);
  await sayOver("Wähle ich „Obergeschoss“, springt die Fläche auf die Wände des Obergeschosses. Wandoberkante und Traufe wandern mit.");
  await pick("Sitzt auf Etage", "Obergeschoss", 0.5);
  await glide3d(cam(1.15, 1.15, 16, T_HWR), cam(0.8, 1.0, 22, T_HWR), 2.5);
  await R.moveTo({ label: "Wandoberkante" }, 0.5);
  await sayOver("Das brauchst du, wenn eine neue Fläche auf der falschen Etage gelandet ist – etwa über einem Obergeschoss mit Treppenloch in der Mitte. Ich stelle zurück auf „Erdgeschoss“.");
  await R.hold(2.5);
  await pick("Sitzt auf Etage", "Erdgeschoss", 0.5);
  await glide3d(cam(0.8, 1.0, 22, T_HWR), cam(0.8, 1.05, 18, T_HWR), 1.5);

  // ---------------------------------------------------------------- overlapping sections
  await chapter("Dachflächen überschneiden sich");
  await R.clickOn({ text: "‹ Dachflächen" }, 0.5);
  await setCam(cam(0.25, 0.95, 26, { x: 3, y: 5, z: 8 }));
  await sayOver("Schau dir den Plan an: Seitenflügel und Anbau ragen ein Stück ins Haupthaus. Das ist gewollt.");
  await pointPlan(2, 7.5, 0.6);
  await R.hold(0.8);
  await pointPlan(5.5, 7.5, 0.5);
  await R.hold(0.6);
  await sayOver("Das niedrigere Dach läuft unter das höhere, wie bei einem echten Anbau. Der First des Seitenflügels verschwindet in der Dachfläche des Haupthauses.");
  await point3d(2, 6.6, 8.2, 0.6);
  await glide3d(cam(0.25, 0.95, 26, { x: 3, y: 5, z: 8 }), cam(-0.25, 0.95, 25, { x: 3, y: 5, z: 8 }), 4.5);
  await sayOver("Ich ziehe den Seitenflügel sogar noch weiter hinein – in 3D ändert sich nichts. Die Flächen müssen also nicht genau aneinanderstoßen.");
  await tapSection(WING, 0.5);
  {
    const s = await selected();
    await dragCorner(0, 0, s.x0, s.z0 - 1.5, 1.2);
  }
  await R.hold(2.6);
  await R.clickOn({ text: "Rückgängig", exact: true }, 0.6);
  await R.hold(0.4);

  // ---------------------------------------------------------------- the garage: flat roof, parapet
  await chapter("Garage mit Flachdach");
  await sayOver("Die Garage bekommt ein Flachdach: „Form“, „Flach“.");
  await tapSection(GAR, 0.6);
  await setCam(cam(2.4, 1.0, 21, T_GAR));
  await pick("Form", "Flach", 0.5);
  await sayOver("Statt Traufe und Neigung gibt es jetzt nur die „Höhe“ – 2,5 Meter, auf den Garagenwänden.");
  await R.moveTo({ label: "Höhe (m)" }, 0.5);
  await R.hold(0.8);
  await sayOver("„Attika“ setzt eine Brüstung rundherum. So sehen viele Garagen mit Flachdach aus.");
  await pick("Form", "Attika", 0.5);
  await glide3d(cam(2.4, 1.0, 21, T_GAR), cam(2.1, 0.95, 20, T_GAR), 2);
  await sayOver("Der „Dachüberstand“ gilt je Dachfläche: wie weit das Dach über die Wände ragt. Bei der Garage nehme ich null.");
  await fill("Dachüberstand (m)", "0");
  await R.hold(1);
  await sayOver("Solarfelder kommen später mit dem Werkzeug „Energie“ aufs Dach, auch aufs Flachdach. Mit der Erweiterung Energie Pro leben die Module dann mit der Sonne.");
  await R.moveTo({ text: "Energie", exact: true }, 0.6);
  await R.hold(1.2);
  await sayOver("„Überdachung“, die Gauben-Knöpfe und „Umriss des Geschosses übernehmen“ zeige ich in der nächsten Folge.");
  await R.moveTo({ text: "Überdachung (Pfosten" }, 0.5);
  await R.hold(0.5);
  await R.moveTo({ text: "Umriss des Geschosses" }, 0.5);
  await R.hold(0.5);

  // ---------------------------------------------------------------- fix
  await chapter("Fixieren");
  await sayOver("Ist eine Dachfläche fertig, fixierst du sie: oben „Fixieren“ – oder die Taste L.");
  await sideTop(0.3);
  await R.clickOn({ text: "Fixieren" }, 0.5);
  await R.hold(0.5);
  await sayOver("Jetzt verrutscht sie nicht mehr. Ziehen bewegt nur noch die Ansicht, und unten steht ein Hinweis.");
  await dragPlan(GAR[0], GAR[1], GAR[0] - 1.4, GAR[1] + 0.8, 1.1);
  await R.hold(0.6);
  await moveToText("Fixiert – zum Verschieben", 0.5).catch(() => {});
  await R.hold(0.6);
  await R.clickOn({ text: "Alles zeigen", exact: true }, 0.5);
  await sayOver("„Lösen“ gibt sie wieder frei, auch mit L.");
  await h.side(0.3);
  await press("L", "l");
  await keyCap(null);
  // the "Fixiert" hint under the plan stays until the next tap in the plan, also after releasing: take it away
  await R.editor(`e._fixedHint = false;`);
  await R.moveTo({ text: "Fixieren" }, 0.4);
  await R.hold(0.3);
  await sayOver("Und „Grundriss“ oben in der Leiste sperrt alle Dachflächen auf einmal, zusammen mit Räumen und Wänden. Ein zweiter Klick hebt die Sperre auf.");
  await R.clickOn({ text: "🔒 Grundriss", exact: true }, 0.6);
  await R.hold(0.6);
  await R.moveTo({ text: "Grundriss gesperrt" }, 0.5);
  await R.hold(0.6);
  await R.clickOn({ text: "🔒 Grundriss", exact: true }, 0.6);
  await R.hold(0.4);

  // ---------------------------------------------------------------- regenerate, back to one roof
  await chapter("Neu erzeugen und zurück zu einem Dach");
  await R.clickOn({ text: "‹ Dachflächen" }, 0.5);
  await setCam(cam(0.6, 0.93, 36, T_HOUSE));
  await sayOver("Unter der Liste stehen zwei Knöpfe. „Neu aus den Räumen erzeugen“ ersetzt alle Dachflächen durch einen frischen Vorschlag. Vorher fragt NeonPlan nach.");
  await R.page.evaluate(() => {
    window.__tutConfirm = window.confirm;
    window.confirm = () => false;
  });
  await R.clickOn({ text: "Neu aus den Räumen erzeugen" }, 0.6);
  await fakeConfirm("Alle Dachflächen durch einen neuen Vorschlag aus den Räumen ersetzen?");
  await R.hold(0.8);
  {
    const b = await R.page.evaluate(() => {
      const r = document.querySelector("#tut-ok").getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    });
    await R.move(b.x, b.y, 0.5);
    await R.click();
  }
  await noDialog();
  await R.editor(`window.confirm = () => true; e.useRoofSections(true); window.confirm = window.__tutConfirm;`);
  await R.frame(0.4, 600);
  await sayOver("Alles wieder Satteldach. Mit „Rückgängig“ ist meine Arbeit sofort zurück.");
  await R.hold(1);
  await R.clickOn({ text: "Rückgängig", exact: true }, 0.6);
  await R.hold(0.8);
  await sayOver("„Zurück zu einem Dach“ schaltet auf das einfache Satteldach aus den Einstellungen um.");
  await R.clickOn({ text: "Zurück zu einem Dach" }, 0.6);
  await R.hold(1.5);
  await sayOver("Deine Dachflächen bleiben dabei gespeichert: Ein Klick auf „Dachflächen aus den Räumen erzeugen“ – und sie sind wieder da, nichts geht verloren.");
  await R.clickOn({ text: "Dachflächen aus den Räumen erzeugen" }, 0.6);
  await R.hold(1.2);

  // ---------------------------------------------------------------- result in 3D
  await chapter("Das Ergebnis in 3D");
  await sayOver("Und so sieht das Haus jetzt in 3D aus.");
  await R.clickOn({ text: "3D", exact: true, nth: 0 }, 0.6);
  await R.sleep(2000);
  await R.hideCursor();
  {
    const A = { theta: 1.4, phi: 0.95, radius: 31 };
    const B = { theta: 0.3, phi: 0.9, radius: 27 };
    await R.view(A);
    await R.frame(0.2, 400);
    await sayOver("Haupthaus und Seitenflügel mit Satteldach, der Anbau mit Pultdach an der Hauswand und die Garage mit Attika.");
    await glideMain(A, B, 8);
  }
  await R.hideCursor(false);

  // ---------------------------------------------------------------- outro
  await chapter("Wie geht es weiter");
  await R.title("Nächste Folge: Gauben, Dachfenster, Dachschrägen und Carport", `NeonPlan 3D – läuft auch auf alten Wandtablets${VERSION}`);
  await say("Das war Teil zwei: Traufe und Neigung je Seite, Pultdach und Seiten tauschen, Wandoberkante, Etage, Überschneidungen, Flachdach und Attika, Fixieren und Neu erzeugen.");
  await say("In der nächsten Folge geht es weiter mit dem Dach: Gauben, Dachfenster, Dachschrägen mit Kniestock und ein Carport.");
  await say("Links zur Online-Demo und zur Anleitung stehen in der Beschreibung. Und NeonPlan läuft auch auf alten Wandtablets. Bis zum nächsten Mal!");
  await R.hold(0.6);
}

await catchUp();
N.report();
const result = await R.finish();
console.log(`recorded ${result.frames} frames, ${result.duration.toFixed(1)} s → ${out}`);
