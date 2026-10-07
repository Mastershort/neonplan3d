// Tutorial episode 8 – "Dächer Teil 2: Gauben, Dachfenster, Dachschrägen, Carport" (manual 4.19, second half, and
// „Dachfenster“), in two parts (the checklist does not fit into 8 minutes):
//   a) Dachschrägen, Gauben und Zwerchgiebel: the knee wall („Wandoberkante“ under the ceiling, eaves on it), the
//      headroom lines in the attic plan, the attic in 3D (the roof lifts while zooming in), „+ Gaube oben/unten“
//      (the proposal, moving, width, heights, Sattel and Pult), the dormer window with „Tür & Fenster“, the cross
//      gable (a wide dormer with its eaves on the wall top), the attic in 3D.
//   b) Dachfenster, Flachdach und Carport: „+ Dachfenster“ (moving, onto another roof face, size, position),
//      „Rollladen“, „Kontakt“, „Kippkontakt“, „Fenstermotor“ live in 3D, „Name“; the flat roof as a free outline
//      („Umriss des Geschosses übernehmen“, corners, „Zurück zum Rechteck“) on a bungalow, the terrace roof and the
//      carport („Überdachung“), „Dach bleibt“ in the 3D view.
// The house is the invented L-shaped house of episode 7; its upper floor is an attic („Dachgeschoss“) here.
// Usage (from frontend/): node tutorials/ep08-dachausbau.mjs <out-dir> a|b [<voice-dir de> [<voice-dir en>]]
//   (voice dirs: private/tutorial-audio/ep08a/de and …/en, resp. ep08b)
// EP08_FAST=1: a quick dry run for checking the steps (the timing is not usable).
// Then: python ../tools/make-tutorial.py <out-dir> <out.mp4> --en tutorials/ep08a-narration-en.json

import { appVersion, narration, startRecorder } from "./recorder.mjs";
import { helpers, tap } from "./ep02-common.mjs";

const out = process.argv[2] ?? "tutorial-ep08";
const PART = process.argv[3] === "b" ? "b" : "a";
const FAST = !!process.env.EP08_FAST;
const VERSION = `<br><span style="font-size:20px;opacity:.7">aufgenommen mit NeonPlan 3D ${appVersion()}</span>`;

// ---------------------------------------------------------------- the invented house (episode 7, with an attic)
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
const GROUND = floorOf(
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
);
// the attic: windows only in the gables (the eave sides get a dormer, a cross gable and a roof window)
const ATTIC = floorOf(
  "dg",
  "Dachgeschoss",
  2.75,
  "dachgeschoss",
  [
    rect("r_kind", "Kinderzimmer", "kinderzimmer", 0, 0, 4.5, 4.5),
    rect("r_arbeit", "Arbeitszimmer", "arbeitszimmer", 4.5, 0, 9.5, 4.5),
    rect("r_flur_og", "Flur oben", null, 0, 4.5, 9.5, 7.5),
    rect("r_eltern", "Elternzimmer", null, 0, 7.5, 4, 12, "carpet"),
  ],
  [hole("p1", "window", "r_kind", 3, 2.25, 1.2), hole("p2", "window", "r_arbeit", 1, 2.25, 1.2), hole("p4", "window", "r_eltern", 2, 2, 1.2)],
);
const HOUSE = [GROUND, ATTIC];
/** The knee wall: 0.9 m above the attic floor, eaves on it, 45° (part 1 sets it step by step). */
const KNEE = { base: 3.65, eave_a: 3.65, eave_b: 3.65, pitch_a: 45, pitch_b: 45 };
/** The dormer and the cross gable as part 1 leaves them (x range; the rest is the app's proposal). */
const DORMER = { x0: 1.25, x1: 3.75 };
const CROSS = { x0: 5.3, x1: 8.7, eave_a: 3.65, eave_b: 3.65, pitch_a: 45, pitch_b: 45 };
// the invented entities of the roof window (mock Home Assistant)
const RWIN = {
  cover: "cover.dachfenster_rollladen",
  contact: "binary_sensor.dachfenster_kontakt",
  tilt: "binary_sensor.dachfenster_kipp",
  motor: "cover.dachfenster_motor",
};
const ENTITIES = [
  [RWIN.cover, "kinderzimmer", "open", { friendly_name: "Dachfenster Rollladen", device_class: "shutter", current_position: 100, supported_features: 15 }],
  [RWIN.contact, "kinderzimmer", "off", { friendly_name: "Dachfenster Kontakt", device_class: "window" }],
  [RWIN.tilt, "kinderzimmer", "off", { friendly_name: "Dachfenster gekippt", device_class: "window" }],
  [RWIN.motor, "kinderzimmer", "closed", { friendly_name: "Dachfenster Motor", device_class: "window", current_position: 0, supported_features: 15 }],
];
// plan points
const MAIN = [6.5, 3.2];
const WING = [2, 10.3];
const TERRACE = { x0: 0.5, z0: -3.25, x1: 5.5, z1: -0.25 };
const CARPORT = { x0: 13.5, z0: 0, x1: 16.5, z1: 6 };
// 3D targets (plan x, height, plan z) of the 3D half
const T_MAIN = { x: 4.75, y: 4.5, z: 3.75 };
const T_HOUSE = { x: 6.5, y: 3, z: 6 };
const T_FRONT = { x: 4.75, y: 4, z: 1 };
const T_WING = { x: 2, y: 4, z: 9.5 };
const T_RWIN = { x: 4.75, y: 5.5, z: 5.5 };
const T_CAN = { x: 9, y: 1.5, z: 1 };

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
// confirm() of the app: accepted at once
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

// ---------------------------------------------------------------- the house and its roof (invisible set-up)
/** The house without a roof, loaded invisibly (no undo step), the ground floor shown. */
const loadHouse = async (floors = HOUSE) => {
  await R.editor(`const d = structuredClone(e._doc); d.floors = ${T(floors)}; d.settings.roof = { type: "none", pitch: 35, overhang: 0.4 }; e.setDoc(d, null); e.past = []; e._canUndo = false; e._floorId = "eg"; e._roomId = null; e.fit();`);
  await R.sleep(900);
};
/**
 * The roof at a stage: 0 = as episode 7 leaves it, 1 = with the knee wall, 2 = + dormer, cross gable and their
 * windows (part 1 done), 3 = + the roof window, 4 = + terrace roof and carport (part 2 done).
 */
const roofState = async (stage) => {
  await R.editor(`e.useRoofSections(true);
    const d = structuredClone(e._doc); const S = d.settings.roof.sections;
    const garage = S.find((x) => x.x0 > 9);
    const hwr = S.find((x) => x.x0 > 3 && x.z0 > 7 && x.x0 < 9);
    const wing = S.find((x) => x.axis === "z" && x.x0 < 0);
    const main = S.find((x) => x !== garage && x !== hwr && x !== wing);
    Object.assign(main, { id: "roof_main" });
    Object.assign(wing, { id: "roof_wing" });
    Object.assign(garage, { id: "roof_garage", x0: 9.25, z0: -0.25, x1: 13.25, z1: 6.25, shape: "parapet", overhang: 0 });
    Object.assign(hwr, { id: "roof_hwr", shape: "pent", flip: true, pitch_a: 15 });
    d.settings.roof.sections = [main, wing, garage, hwr];
    if (${stage} >= 1) { Object.assign(main, ${T(KNEE)}); Object.assign(wing, ${T(KNEE)}); }
    e.setDoc(d, null);`);
  if (stage >= 2) {
    await R.editor(`e._roofId = "roof_main"; e.addDormer("a"); e.updateRoofSection(${T(DORMER)});
      e._roofId = "roof_main"; e.addDormer("a"); e.updateRoofSection(${T(CROSS)});
      const d = structuredClone(e._doc); const f = d.floors.find((x) => x.id === "dg");
      f.openings.push(${T(hole("w_gaube", "window", "r_kind", 0, 2.5, 1.2))}, ${T(hole("w_zwerch", "window", "r_arbeit", 0, 2.5, 1.2))});
      e.setDoc(d, null);`);
  }
  if (stage >= 3) {
    await R.editor(`e._roofId = null; e.addRoofWindow();
      e.updateRoofWindow({ w: 0.94, h: 1.4, cover: ${T(RWIN.cover)}, contact: ${T(RWIN.contact)}, tilt: ${T(RWIN.tilt)}, window: ${T(RWIN.motor)}, name: "Dachfenster Flur" });
      e._roofWinId = null;`);
  }
  if (stage >= 4) {
    await R.editor(`e.addRoofSection(${T([TERRACE.x0, TERRACE.z0])}, ${T([TERRACE.x1, TERRACE.z1])});
      e.addRoofSection(${T([CARPORT.x0, CARPORT.z0])}, ${T([CARPORT.x1, CARPORT.z1])});`);
  }
  await R.editor(`e.past = []; e._canUndo = false; e._roofId = null; e._roofWinId = null;`);
};
/** Open the preview with the house; the 3D tab shows the floors stacked (the roof sits on the house). */
const start = async (floors = HOUSE) => {
  await R.open("empty");
  await h.addEntities(ENTITIES);
  await tap(R, { text: "Editor", exact: true });
  await R.sleep(700);
  await loadHouse(floors);
  await tap(R, { text: "3D", exact: true, nth: 0 });
  await R.sleep(1500);
  if (floors.length > 1) await tap(R, { text: "Gestapelt", exact: true });
  await R.sleep(300);
  await tap(R, { text: "Editor", exact: true });
  await R.sleep(900);
};
/** The main 3D view (3D tab): theta, phi, radius and, if given, the target; returns the view. */
const setMain = (cam) =>
  R.page.evaluate((cam) => {
    const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
    const viewer = Object.values(v).find((x) => x && x.floors && x.floorMap);
    const { target, ...rest } = cam;
    Object.assign(viewer.controls.view, rest);
    if (target) Object.assign(viewer.controls.view.target, target);
    viewer.invalidate();
    return { ...JSON.parse(JSON.stringify(viewer.controls.view)), hr: viewer.houseRadius };
  }, cam);
/** The plan view of the roof tool (scale, offsets), kept for coming back from the 3D view. */
let PLANVIEW = null;
/** The house radius of the main 3D view (read with `setMain({})`): closer than 0.92 of it, the roof fades. */
let HR = 20;
const readHR = async () => {
  const v = await setMain({});
  HR = v.hr;
  console.log("house radius", HR);
  return v;
};
/** A house view (radius over 18) never comes so close that the roof fades. */
const fit = (c) => ({ ...c, radius: c.radius > 18 ? Math.max(c.radius, HR * 0.97) : c.radius });
/** Glide the main 3D view (with its target when both have one). */
const glideMainT = async (a, b, seconds) => {
  a = fit(a);
  b = fit(b);
  const n = FAST ? 2 : Math.max(1, Math.round(seconds * 25));
  for (let i = 1; i <= n; i++) {
    const t = i / n;
    const k = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    const mix = (p, q) => p + (q - p) * k;
    const target = a.target && b.target ? { x: mix(a.target.x, b.target.x), y: mix(a.target.y, b.target.y), z: mix(a.target.z, b.target.z) } : undefined;
    await setMain({ theta: mix(a.theta, b.theta), phi: mix(a.phi, b.phi), radius: mix(a.radius, b.radius), ...(target ? { target } : {}) });
    await R.frame(1 / 25, 40);
  }
};
/** The real mouse away from the 3D view (hovering it shows floor labels); the visible cursor stays. */
const park = () => R.page.mouse.move(700, 40);
/** A plan label of the headroom lines ("1,5 m", "2 m"): its centre. */
const headroomLabel = (text) =>
  R.editor(`const el = [...e.renderRoot.querySelectorAll(".fp3d-headroom-label")].find((t) => t.textContent.trim() === ${T(text)}); if (!el) return null; const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 };`);
/** Tap the front wall of the attic at plan x with the tool „Tür & Fenster“ (an opening is placed). */
const placeWindow = async (x) => {
  await R.clickOn({ text: "Tür & Fenster", exact: true }, 0.5);
  await R.frame(0.3, 500);
  await tapPlan(x, 0, 0.6);
  await R.frame(0.3, 400);
};
/** The type chip „Fenster“ of the opening just placed. */
const chipWindow = async () => {
  await R.clickOn({ text: "Fenster", exact: true }, 0.5);
  await R.frame(0.3, 400);
};
/** The id of the newest section (a dormer just added). */
const newest = () => R.editor(`const s = e._doc.settings.roof.sections; return s[s.length - 1].id;`);
/** Drag the selected section (its own centre as drawn in the plan) by dx/dz. */
const moveSel = async (dx, dz, seconds = 1) => {
  const s = await selected();
  const cx = (s.x0 + s.x1) / 2;
  const cz = s.z0 + Math.min(0.6, (s.z1 - s.z0) / 2);
  await dragPlan(cx, cz, cx + dx, cz + dz, seconds);
};
/** Centre of the selected roof window in the plan. */
const roofWinBox = () =>
  R.editor(`const el = e.renderRoot.querySelector(".fp3d-roofwin-sel polygon") ?? e.renderRoot.querySelector(".fp3d-roofwin polygon"); if (!el) return null; const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 };`);
/** The option text of a select (own label `label`) that contains `part`. */
const optionWith = (label, part) =>
  R.page.evaluate(
    (label, part) => {
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
        const o = [...s.options].find((o) => o.textContent.includes(part));
        return o ? o.textContent.trim() : null;
      }
      return null;
    },
    label,
    part,
  );

// ================================================================ PART 1: Dachschrägen, Gauben und Zwerchgiebel
if (PART === "a") {
  // ---------------------------------------------------------------- teaser: the finished attic roof
  await chapter("Teaser");
  await start();
  await roofState(4);
  await R.hideCursor();
  await tap(R, { text: "3D", exact: true, nth: 0 });
  await R.sleep(2500);
  await park();
  {
    const home = await readHR();
    const A = { theta: -2.45, phi: 0.95, radius: 31, target: home.target };
    const B = { theta: -2.95, phi: 0.92, radius: 27, target: home.target };
    const C = { theta: -2.9, phi: 0.85, radius: 13, target: { x: 0, y: 3, z: 0 } };
    await setMain(fit(A));
    await R.sleep(1500);
    await R.title("Dächer Teil 2: Gauben, Dachfenster, Dachschrägen, Carport", `NeonPlan 3D · Folge 8 · Teil 1${VERSION}`);
    await sayOver("Eine Gaube, ein Zwerchgiebel, ein Dachfenster und ein Carport – und darunter ein Dachgeschoss mit echten Schrägen.");
    await glideMainT(A, B, 6);
    await R.untitle();
    await sayOver("In diesem Teil baust du das Dachgeschoss aus: mit Kniestock, Gaube und Zwerchgiebel.");
    await glideMainT(B, C, 4.5);
  }

  // ---------------------------------------------------------------- intro
  await chapter("Was wir heute machen");
  await start();
  await roofState(0);
  await roofTool();
  await setCam(cam(-2.6, 0.95, 32, T_HOUSE));
  await R.sleep(800);
  PLANVIEW = await R.editor(`return { ...e._view };`);
  await R.hideCursor(false);
  await sayOver("Wir machen mit dem Haus aus Folge 7 weiter. Oben liegt diesmal ein ausgebautes Dachgeschoss.");
  await R.clickOn({ text: "Dachgeschoss", exact: true }, 0.6);
  await pointPlan(2.25, 2.6, 0.5);
  await R.hold(0.4);
  await pointPlan(7, 2.6, 0.5);
  await R.hold(0.4);
  await pointPlan(2, 10, 0.5);
  await sayOver("Noch sitzt das Dach auf vollen Wänden, wie über einem Obergeschoss. In vielen Häusern beginnt die Schräge aber viel tiefer.");
  await glide3d(cam(-2.6, 0.95, 32, T_HOUSE), cam(-2.9, 0.98, 30, T_HOUSE), 5);

  // ---------------------------------------------------------------- knee wall
  await chapter("Dachschrägen mit Kniestock");
  await sayOver("Ich tippe das Haupthaus an. Entscheidend ist die „Wandoberkante“: die Höhe, auf der die Wände unter dem Dach enden.");
  await tapSection(MAIN, 0.6);
  await setCam(cam(-2.9, 1.0, 27, T_MAIN));
  await R.moveTo({ label: "Wandoberkante" }, 0.5);
  await R.hold(0.4);
  await sayOver("Typisch ist ein Kniestock von etwa 90 Zentimetern. Der Boden des Dachgeschosses liegt auf 2,75 Metern, also trage ich 3,65 ein.");
  await R.hold(2.2);
  await fill("Wandoberkante (m)", "3,65");
  await sayOver("Damit das Dach dort auch aufliegt, setze ich beide Traufen auf denselben Wert.");
  await fill("Traufe (m) oben", "3,65");
  await fill("Traufe (m) unten", "3,65");
  await sayOver("Und weil ein Dachgeschoss Kopfhöhe braucht, wird das Dach steiler: 45 Grad auf beiden Seiten.");
  await fill("Neigung (°) oben", "45");
  await fill("Neigung (°) unten", "45");
  await sayOver("Jetzt enden die Wände unter dem Dach: ein niedriger Kniestock an der Traufe, die Giebelwände reichen bis zum First.");
  await glide3d(cam(-2.9, 1.0, 27, T_MAIN), cam(-2.3, 1.05, 24, T_MAIN), 5);
  await sayOver("So steht es auch im Hinweis unter dem Feld: Liegt die Wandoberkante unter der Deckenhöhe, enden die Wände an der Dachunterseite – auch die Innenwände an der Schräge.");
  await moveToText("Liegt sie unter der Deckenhöhe", 0.6);
  await R.hold(1.5);
  await sayOver("Den Seitenflügel stelle ich genauso ein: Wandoberkante und Traufen auf 3,65, beide Neigungen auf 45 Grad.");
  await tapSection(WING, 0.5);
  await setCam(cam(-0.75, 1.0, 26, T_WING));
  for (const [label, value] of [["Wandoberkante (m)", "3,65"], ["Traufe (m) links", "3,65"], ["Traufe (m) rechts", "3,65"], ["Neigung (°) links", "45"], ["Neigung (°) rechts", "45"]]) {
    await R.clickOn({ label }, 0.35);
    await h.typeOver(value, 0.04);
  }
  await glide3d(cam(-0.75, 1.0, 26, T_WING), cam(-1.2, 1.0, 26, T_WING), 1.5);

  // ---------------------------------------------------------------- headroom and the attic in 3D
  await chapter("Dachschrägen im Plan und in 3D");
  await R.clickOn({ text: "‹ Dachflächen" }, 0.5);
  await sayOver("Im Plan des Dachgeschosses zeigen gestrichelte Linien, wo unter der Schräge noch 1,5 Meter und 2 Meter Kopfhöhe bleiben.");
  {
    const a = await headroomLabel("1,5 m");
    const b = await headroomLabel("2 m");
    if (a) await R.move(a.x, a.y, 0.6);
    await R.hold(1.2);
    if (b) await R.move(b.x, b.y, 0.5);
    await R.hold(0.8);
  }
  await sayOver("Praktisch beim Einrichten: Unter 1,5 Metern passt nur noch eine niedrige Kommode, ein Bett lieber dort, wo du aufrecht stehen kannst.");
  await pointPlan(2.25, 5, 0.6);
  await R.hold(1.5);
  await sayOver("Und so sieht es in der 3D-Ansicht aus. Zoome ich heran, hebt sich das Dach ab und blendet aus – du schaust ins Dachgeschoss.");
  await R.clickOn({ text: "3D", exact: true, nth: 0 }, 0.6);
  await R.sleep(2000);
  await R.hideCursor();
  await park();
  {
    const home = await readHR();
    const A = { theta: -2.6, phi: 0.95, radius: 30, target: home.target };
    const B = { theta: -2.75, phi: 0.82, radius: 13, target: { x: 0, y: 3, z: 0 } };
    const C = { theta: -2.2, phi: 0.8, radius: 13, target: { x: 0, y: 3, z: 0 } };
    await setMain(fit(A));
    await R.frame(0.3, 400);
    await glideMainT(A, B, 4.5);
    await sayOver("Da ist der Kniestock an der Traufe, die Giebel reichen bis zum First, und die Innenwände folgen der Schräge.");
    await glideMainT(B, C, 5);
    {
      const line = "Fenster passen dann nur, wo die Wand hoch genug ist – hier in den Giebeln. Für die Traufseite gibt es Gauben und Dachfenster.";
      await sayOver(line);
      await glideMainT(C, { ...C, theta: -1.7 }, N.length(line) - 0.2);
    }
  }
  await R.hideCursor(false);
  await R.clickOn({ text: "Editor", exact: true }, 0.6);
  await R.sleep(1500);

  // ---------------------------------------------------------------- a dormer
  await chapter("Eine Gaube einsetzen");
  await setCam(cam(-2.9, 1.0, 24, T_MAIN));
  await sayOver("Zurück im Editor nehme ich wieder das Werkzeug „Dach“ und oben „Dachgeschoss“. Dann tippe ich das Haupthaus an: Unten im Formular stehen „+ Gaube oben“ und „+ Gaube unten“, eine für jede Dachseite.");
  await R.clickOn({ text: "Dach", exact: true }, 0.6);
  await R.sleep(1500);
  // the plan as it was before the 3D view (coming back, the editor fits it to the narrower pane only later)
  await R.editor(`e._view = ${T(PLANVIEW)};`);
  await setCam(cam(-2.9, 1.0, 24, T_MAIN));
  await R.frame(0.2, 300);
  await R.clickOn({ text: "Dachgeschoss", exact: true }, 0.5);
  await R.editor(`e._view = ${T(PLANVIEW)};`);
  await R.frame(0.2, 300);
  await tapSection(MAIN, 0.6);
  await R.moveTo({ text: "+ Gaube oben" }, 0.5);
  await R.hold(0.5);
  await R.moveTo({ text: "+ Gaube unten" }, 0.4);
  await sayOver("Ich nehme „+ Gaube oben“, die Seite zur Straße.");
  await R.clickOn({ text: "+ Gaube oben" }, 0.5);
  await setCam(cam(-2.9, 1.05, 18, T_FRONT));
  await R.hold(0.4);
  await sayOver("Die Gaube kommt in die Mitte: zwei Meter breit, die Front auf der Außenwand, mit Satteldach. Ihre Traufe liegt 1,4 Meter über der Dachtraufe, hier 5,05 Meter.");
  await glide3d(cam(-2.9, 1.05, 18, T_FRONT), cam(-2.6, 1.05, 17, T_FRONT), 3.5);
  await R.moveTo({ label: "Traufe (m) links" }, 0.5);
  await R.hold(1.2);
  await sayOver("Sie ist genau so tief, dass ihr First auf die Schräge trifft. Darunter öffnet sich das Hauptdach, und die Seiten der Gaube schließen sie ab.");
  await glide3d(cam(-2.6, 1.05, 17, T_FRONT), cam(-3.3, 1.0, 17, T_FRONT), 6);
  await sayOver("Eine Gaube ist eine eigene kleine Dachfläche: Im Formular heißt sie „Gaube 5“, und auch Liste und Plan zeigen „Gaube“.");
  await moveToText("Gaube 5", 0.5);
  await R.hold(0.8);
  {
    const s = await selected();
    await pointPlan((s.x0 + s.x1) / 2, 0.75, 0.5);
  }
  await sayOver("Ziehen verschiebt sie. Ich setze sie über das Kinderzimmer.");
  {
    const s = await selected();
    await moveSel(DORMER.x0 - s.x0, 0, 1.2);
  }
  await R.hold(0.3);
  await sayOver("An den Ecken änderst du die Breite. Ich mache sie etwas breiter, 2,5 Meter.");
  {
    const s = await selected();
    await dragCorner(1, 1, DORMER.x1, s.z1, 1.1);
    console.log("dormer:", JSON.stringify(await selected()));
  }
  await glide3d(cam(-3.3, 1.0, 17, T_FRONT), cam(-2.9, 1.05, 16, { ...T_FRONT, x: 2.5 }), 2);
  await sayOver("Bei „Form“ wählst du „Sattel“ oder „Pult“. Für eine Schleppgaube nehme ich „Pult“ und die Firstrichtung quer: Dann fällt die Fläche nach vorn.");
  await pick("Form", "Pult", 0.5);
  await R.clickOn({ text: "First ↔", exact: true }, 0.5);
  await sayOver("Eine Schleppgaube ist flacher als das Dach, hier 15 Grad. So trifft sie weiter oben auf die Schräge.");
  await fill("Neigung (°)", "15");
  await glide3d(cam(-2.9, 1.05, 16, { ...T_FRONT, x: 2.5 }), cam(-2.4, 1.05, 16, { ...T_FRONT, x: 2.5 }), 3);
  console.log("pent dormer:", JSON.stringify(await selected()));
  await sayOver("Für unser Haus bleibe ich bei der Satteldachgaube, also dreimal „Rückgängig“.");
  for (let i = 0; i < 3; i++) await R.clickOn({ text: "Rückgängig", exact: true }, i ? 0.25 : 0.6);
  await R.hold(0.6);
  console.log("dormer back:", JSON.stringify(await selected()));

  // ---------------------------------------------------------------- the dormer window
  await chapter("Das Gaubenfenster");
  await sayOver("Unter der Gaube steigt die Wand des Dachgeschosses bis zu ihrer Traufe. Dort setzt du das Fenster mit „Tür & Fenster“: Werkzeug wählen und auf die Wand tippen.");
  await placeWindow(2.5);
  await sayOver("Rechts stelle ich die Art auf „Fenster“ – fertig ist das Gaubenfenster.");
  await chipWindow();
  await R.hold(0.8);
  await R.clickOn({ text: "Dach", exact: true }, 0.6);
  await R.sleep(1500);
  await setCam(cam(-2.95, 1.12, 13, { x: 2.5, y: 4, z: 0 }));
  await R.frame(0.2, 400);
  await glide3d(cam(-2.95, 1.12, 13, { x: 2.5, y: 4, z: 0 }), cam(-2.6, 1.1, 13, { x: 2.5, y: 4, z: 0 }), 2);

  // ---------------------------------------------------------------- the cross gable
  await chapter("Der Zwerchgiebel");
  await sayOver("Ein Zwerchgiebel ist ein Giebel, der aus der Traufseite vortritt – typisch beim Drei-Giebel-Haus. In NeonPlan ist das eine breite Gaube, deren Traufe auf der Wandoberkante liegt.");
  await R.clickOn({ text: "‹ Dachflächen" }, 0.5).catch(() => {});
  await pointPlan(7, 0.6, 0.6);
  await R.hold(1.5);
  await sayOver("Also: Haupthaus antippen, „+ Gaube oben“ und die neue Gaube über das Arbeitszimmer ziehen.");
  await tapSection(MAIN, 0.5);
  await R.clickOn({ text: "+ Gaube oben" }, 0.5);
  await R.hold(0.3);
  {
    const s = await selected();
    await moveSel(CROSS.x0 - s.x0, 0, 1.1);
  }
  await sayOver("An der Ecke ziehe ich sie auf etwa 3,4 Meter Breite.");
  {
    const s = await selected();
    await dragCorner(1, 1, CROSS.x1, s.z1, 1.1);
  }
  await setCam(cam(-2.95, 1.05, 17, { x: 7, y: 4, z: 1 }));
  await sayOver("Jetzt beide Traufen auf die Wandoberkante, 3,65 Meter, und 45 Grad Neigung wie beim Hauptdach.");
  for (const [label, value] of [["Traufe (m) links", "3,65"], ["Traufe (m) rechts", "3,65"], ["Neigung (°) links", "45"], ["Neigung (°) rechts", "45"]]) {
    await R.clickOn({ label }, 0.35);
    await h.typeOver(value, 0.04);
  }
  console.log("cross gable:", JSON.stringify(await selected()));
  await sayOver("Die Tiefe passt sich von selbst an: Der Giebel reicht genau so weit, bis sein First auf die Schräge trifft. Das Hauptdach öffnet sich nur unter dem Giebeldach, so entstehen die Kehlen.");
  await glide3d(cam(-2.95, 1.05, 17, { x: 7, y: 4, z: 1 }), cam(-2.35, 0.9, 17, { x: 7, y: 4, z: 1 }), 8);
  await sayOver("Auch hier steigt die Wand darunter bis in den Giebel. Das Fenster setze ich wieder mit „Tür & Fenster“.");
  await placeWindow(7);
  await chipWindow();
  await R.hold(0.3);
  await R.clickOn({ text: "Dach", exact: true }, 0.6);
  await R.sleep(1500);
  await setCam(cam(-2.9, 1.1, 18, { x: 5, y: 4, z: 0 }));
  await R.frame(0.2, 400);
  await glide3d(cam(-2.9, 1.1, 18, { x: 5, y: 4, z: 0 }), cam(-2.5, 1.05, 19, { x: 5, y: 4, z: 0 }), 2);

  // ---------------------------------------------------------------- the attic in 3D
  await chapter("Das Dachgeschoss in 3D");
  await sayOver("In der 3D-Ansicht hast du jetzt ein Haus mit Gaube und Zwerchgiebel.");
  await R.clickOn({ text: "3D", exact: true, nth: 0 }, 0.6);
  await R.sleep(2000);
  await R.hideCursor();
  await park();
  {
    const home = await readHR();
    const A = { theta: -2.4, phi: 0.95, radius: 29, target: home.target };
    const B = { theta: -2.95, phi: 0.95, radius: 26, target: home.target };
    const C = { theta: -2.95, phi: 0.82, radius: 13, target: { x: 0, y: 3, z: 0 } };
    await setMain(fit(A));
    await R.frame(0.2, 400);
    await glideMainT(A, B, 4);
    const line = "Und von innen: Die Wand steigt unter der Gaube und im Zwerchgiebel hoch, mit den beiden neuen Fenstern.";
    await sayOver(line);
    const len = N.length(line);
    await glideMainT(B, C, Math.min(4, len * 0.55));
    await glideMainT(C, { ...C, theta: -2.45 }, Math.max(1.5, len - Math.min(4, len * 0.55)));
  }

  // ---------------------------------------------------------------- outro
  await chapter("Wie geht es weiter");
  await R.title("Teil 2: Dachfenster, Flachdach, Terrassendach und Carport", `NeonPlan 3D – läuft auch auf alten Wandtablets${VERSION}`);
  await say("Das war Teil eins: Kniestock und Dachschrägen, die Kopfhöhe im Plan, die Gaube als Sattel oder Pult mit ihrem Fenster und der Zwerchgiebel.");
  await say("In Teil zwei kommen Dachfenster mit Rollladen und Kontakt, ein Flachdach als freie Form, Terrassendach und Carport – und der Schalter „Dach bleibt“.");
  await say("Links zur Online-Demo und zur Anleitung stehen in der Beschreibung. NeonPlan läuft übrigens auch auf alten Wandtablets. Bis gleich in Teil zwei!");
  await R.hold(0.6);
} else {
  // ================================================================ PART 2: Dachfenster, Flachdach und Carport
  // ---------------------------------------------------------------- teaser
  await chapter("Teaser");
  await start();
  await roofState(4);
  await R.hideCursor();
  await tap(R, { text: "3D", exact: true, nth: 0 });
  await R.sleep(2500);
  await park();
  {
    const home = await readHR();
    const A = { theta: 0.9, phi: 0.95, radius: 30, target: home.target };
    const B = { theta: 0.3, phi: 0.88, radius: 22, target: home.target };
    const C = { theta: -1.4, phi: 0.95, radius: 30, target: home.target };
    await setMain(fit(A));
    await R.sleep(1500);
    await R.title("Dachfenster, Flachdach, Terrassendach und Carport", `NeonPlan 3D · Folge 8 · Teil 2${VERSION}`);
    await sayOver("Ein Dachfenster, das live aufgeht, ein Terrassendach und ein Carport auf Pfosten.");
    await glideMainT(A, B, 2.5);
    await h.setState(RWIN.motor, "open", { current_position: 100 });
    await glideMainT(B, { ...B, theta: 0.05 }, 2.5);
    await R.untitle();
    await sayOver("In diesem Teil zeige ich dir Dachfenster mit Rollladen, Kontakt und Motor, ein Flachdach als freie Form, die Überdachung und „Dach bleibt“.");
    await glideMainT({ ...B, theta: 0.05 }, C, 8);
  }

  // ---------------------------------------------------------------- intro
  await chapter("Was wir heute machen");
  await start();
  await roofState(2);
  await roofTool();
  await R.editor(`e._floorId = "dg";`);
  await setCam(cam(-2.6, 0.95, 32, T_HOUSE));
  await R.sleep(800);
  await R.hideCursor(false);
  await sayOver("Wir machen mit dem Dachgeschoss aus Teil eins weiter: Kniestock, Gaube und Zwerchgiebel sind fertig. Jetzt kommt Licht von der anderen Seite.");
  await glide3d(cam(-2.6, 0.95, 32, T_HOUSE), cam(0.35, 0.95, 32, T_HOUSE), 4);

  // ---------------------------------------------------------------- roof window: add, move, size
  await chapter("Ein Dachfenster einsetzen");
  await sayOver("Unter der Liste der Dachflächen steht der Abschnitt „Dachfenster“. „+ Dachfenster“ legt ein Fenster in eine Dachfläche.");
  await moveToText("Dachfenster liegen in der Dachfläche", 0.6);
  await R.hold(0.8);
  await R.clickOn({ text: "+ Dachfenster" }, 0.5);
  await setCam(cam(0.35, 0.95, 24, T_RWIN));
  await sayOver("Es landet auf der Südseite des Hauptdachs, 78 mal 118 Zentimeter, ein übliches Maß. Im Plan ist es das kleine Rechteck.");
  await glide3d(cam(0.35, 0.95, 24, T_RWIN), cam(0.15, 0.95, 24, T_RWIN), 3);
  {
    const b = await roofWinBox();
    await R.move(b.x, b.y, 0.5);
  }
  await R.hold(0.6);
  await sayOver("Im Plan ziehst du es an die richtige Stelle. Ich schiebe es etwas nach rechts, über den Flur.");
  {
    const b = await roofWinBox();
    const p0 = await R.planPoint(0, 0);
    const p1 = await R.planPoint(1, 0);
    await R.move(b.x, b.y, 0.4);
    await R.drag(b.x + 1.8 * (p1.x - p0.x), b.y, 1.1);
  }
  await R.hold(0.4);
  await sayOver("Ziehst du es weiter, wechselt es auf eine andere Dachfläche – hier auf den Seitenflügel über dem Elternzimmer.");
  {
    const b = await roofWinBox();
    const to = await R.planPoint(3.1, 10);
    await R.move(b.x, b.y, 0.4);
    await R.drag(to.x, to.y, 1.4);
  }
  await setCam(cam(-0.6, 1.0, 22, T_WING));
  await R.hold(0.6);
  console.log("roof window on the wing:", JSON.stringify(await R.editor(`return e._doc.settings.roof.windows;`)));
  await sayOver("Oben im Formular steht, auf welcher Dachfläche es liegt. Dort kannst du sie auch wählen. Ich nehme wieder das Hauptdach, Südseite.");
  await R.moveTo({ label: "Dachfläche" }, 0.5);
  await R.hold(0.8);
  {
    const opt = await optionWith("Dachfläche", "Abschnitt 1 · Süd");
    await pick("Dachfläche", opt ?? "Abschnitt 1 · Süd · 45°", 0.4);
  }
  await setCam(cam(0.35, 0.95, 24, T_RWIN));
  await sayOver("„Breite“ und „Höhe“ ändern die Größe. Ich nehme 94 mal 140 Zentimeter.");
  await fill("Breite", "0,94");
  await fill("Höhe (m)", "1,4");
  await sayOver("„Abstand vom Rand“ und „Abstand von der Traufe“ legen die Lage auf den Zentimeter genau fest.");
  await R.moveTo({ label: "Abstand vom Rand" }, 0.5);
  await R.hold(0.8);
  await R.moveTo({ label: "Abstand von der Traufe" }, 0.5);
  await R.hold(0.6);

  // ---------------------------------------------------------------- blind, contacts, motor live
  await chapter("Rollladen, Kontakt und Fenstermotor");
  await sayOver("Wie ein normales Fenster hat das Dachfenster einen „Rollladen“, einen „Kontakt“ und einen „Kippkontakt“.");
  await h.pickEntity("Rollladen", "dachfenster", "Dachfenster Rollladen", 0.5);
  await h.pickEntity("Kontakt", "dachfenster", "Dachfenster Kontakt", 0.45);
  await h.pickEntity("Kippkontakt", "dachfenster", "Dachfenster gekippt", 0.45);
  await setCam(cam(0.4, 0.95, 15, T_RWIN));
  await sayOver("Meldet der Kontakt offen, klappt der Flügel in 3D nach außen, oben angeschlagen, und der Rahmen leuchtet warm.");
  await h.setState(RWIN.contact, "on");
  await glide3d(cam(0.4, 0.95, 15, T_RWIN), cam(0.75, 1.0, 15, T_RWIN), 5);
  await sayOver("Gekippt öffnet er nur ein Stück.");
  await h.setState(RWIN.contact, "off");
  await h.setState(RWIN.tilt, "on");
  await live(2.4);
  await sayOver("Und fährt der Rollladen herunter, schiebt er sich von oben über die Scheibe.");
  await h.setState(RWIN.tilt, "off");
  await live(0.6);
  await h.setState(RWIN.cover, "open", { current_position: 40 });
  await live(1.6);
  await h.setState(RWIN.cover, "closed", { current_position: 0 });
  await live(1.4);
  await sayOver("Hat dein Dachfenster einen Motor, wählst du ihn bei „Fenstermotor“. Er meldet seine Stellung als Cover, und der Flügel öffnet in 3D genau so weit.");
  await h.setState(RWIN.cover, "open", { current_position: 100 });
  await h.pickEntity("Fenstermotor", "motor", "Dachfenster Motor", 0.5);
  await h.setState(RWIN.motor, "open", { current_position: 50 });
  await glide3d(cam(0.75, 1.0, 15, T_RWIN), cam(0.45, 0.95, 15, T_RWIN), 3);
  await sayOver("Kontakt und Kippkontakt gehen aber auch ohne Motor. Der „Name“ ist optional, praktisch bei mehreren Dachfenstern.");
  await fill("Name (optional)", "Dachfenster Flur");
  await sayOver("Weil das Fenster ein Loch in die Schräge schneidet, schaust du in 3D aus dem Dachgeschoss hinaus.");
  await glide3d(cam(0.45, 0.95, 15, T_RWIN), cam(0.2, 0.8, 11, T_RWIN), 4);
  await sayOver("„Fixieren“, „Löschen“ und oben „Dachflächen“ zurück zur Liste gibt es wie bei jeder Dachfläche.");
  await sideTop(0.3);
  await R.moveTo({ text: "Fixieren" }, 0.5);
  await R.hold(0.4);
  await R.moveTo({ text: "Löschen", exact: true }, 0.5);
  await R.hold(0.4);
  await R.clickOn({ text: "‹ Dachflächen" }, 0.5);
  await h.setState(RWIN.motor, "closed", { current_position: 0 });
  await R.hold(0.4);

  // ---------------------------------------------------------------- flat roof as a free outline (a bungalow)
  await chapter("Flachdach als freie Form");
  await start([GROUND]);
  await R.editor(`const d = structuredClone(e._doc); d.settings.roof = { type: "custom", pitch: 35, overhang: 0.4, sections: [{ id: "roof_bungalow", x0: -0.25, z0: -0.25, x1: 13.25, z1: 12.25, shape: "flat", axis: "x", eave_a: 2.5, eave_b: 2.5, pitch_a: 35, pitch_b: 35, base: 2.5, overhang: 0.3 }] };
    e.setDoc(d, null); e.past = []; e._canUndo = false;`);
  await roofTool();
  await setCam(cam(-2.5, 0.95, 28, { x: 6.5, y: 1.5, z: 6 }));
  await R.sleep(800);
  await sayOver("Ein Flachdach muss kein Rechteck sein. Ein Beispiel: unser Erdgeschoss allein, als Bungalow mit Flachdach.");
  await glide3d(cam(-2.5, 0.95, 28, { x: 6.5, y: 1.5, z: 6 }), cam(-2.2, 0.95, 28, { x: 6.5, y: 1.5, z: 6 }), 3);
  await sayOver("Ich habe eine Dachfläche darübergezogen und „Flach“ gewählt. Das Rechteck deckt aber auch die Ecken ab, in denen gar kein Haus steht.");
  await tapSection([6.5, 5], 0.5);
  await pointPlan(11, 9.5, 0.6);
  await glide3d(cam(-2.2, 0.95, 28, { x: 6.5, y: 1.5, z: 6 }), cam(-0.9, 0.95, 28, { x: 6.5, y: 1.5, z: 6 }), 3);
  await sayOver("Bei „Flach“ und „Attika“ gibt es dafür „Umriss des Geschosses übernehmen“.");
  await R.clickOn({ text: "Umriss des Geschosses übernehmen" }, 0.6);
  await R.hold(0.4);
  await sayOver("Die Fläche bekommt den Umriss aller Räume des angezeigten Geschosses – auch in L- oder Z-Form, als eine Fläche ohne Kanten.");
  await glide3d(cam(-0.9, 0.95, 28, { x: 6.5, y: 1.5, z: 6 }), cam(-2.4, 0.95, 28, { x: 6.5, y: 1.5, z: 6 }), 5);
  console.log("outline:", JSON.stringify(await selected()));
  await sayOver("Die Ecken ziehst du danach im Plan, so steht es auch im Hinweis. Hier ziehe ich das Dach über den Eingang der Garage.");
  await moveToText("Freie Form: Ziehe", 0.5);
  await R.hold(0.6);
  {
    // the outline corner nearest to the garage's front right corner
    const k = await R.editor(`const s = e.roofSection; let best = 0, d = 1e9; s.points.forEach((p, i) => { const q = Math.hypot(p[0] - 13.25, p[1] + 0.25); if (q < d) { d = q; best = i; } }); return best;`);
    const id = await R.editor(`return e._roofId;`);
    const a = await edEl(`[data-roof-vertex="${id}:${k}"] .fp3d-hit`);
    const b = await R.planPoint(13.25, -1.5);
    if (a) {
      await R.move(a.x, a.y, 0.5);
      await R.drag(b.x, b.y, 1.2);
    }
  }
  await R.hold(0.5);
  await sayOver("„Zurück zum Rechteck“ löscht die freie Form wieder.");
  await R.clickOn({ text: "Zurück zum Rechteck" }, 0.6);
  await R.hold(0.6);
  await sayOver("Hat dein Haus mehrere Etagen, wählst du oben mit den Etagen-Knöpfen, welches Geschoss den Umriss liefert.");
  await glide3d(cam(-2.4, 0.95, 28, { x: 6.5, y: 1.5, z: 6 }), cam(-2.0, 0.95, 28, { x: 6.5, y: 1.5, z: 6 }), 4);

  // ---------------------------------------------------------------- terrace roof
  await chapter("Terrassendach");
  await start();
  await roofState(3);
  await roofTool();
  await R.editor(`e._floorId = "eg"; e._view = { scale: 45, ox: 50, oy: 255 };`);
  await setCam(cam(-2.75, 1.0, 26, T_CAN));
  await R.sleep(800);
  await sayOver("Zurück zu unserem Haus. Vor das Wohnzimmer kommt ein Terrassendach. Du ziehst einfach eine Dachfläche dort auf, wo kein Raum ist.");
  await pointPlan(3, -1.8, 0.6);
  await R.hold(0.6);
  await dragPlan(TERRACE.x0, TERRACE.z0, TERRACE.x1, TERRACE.z1, 1.5);
  console.log("terrace:", JSON.stringify(await selected()));
  await sayOver("NeonPlan macht daraus von selbst eine Überdachung: ein flaches Pultdach auf 2,4 Metern, getragen von Pfosten und Balken, mit durchsichtiger Dachfläche.");
  await glide3d(cam(-2.75, 1.0, 26, T_CAN), cam(-3.2, 1.05, 20, { x: 3, y: 1.5, z: -1 }), 7);
  await sayOver("An der Hauswand liegt es auf. Im Formular ist dafür „Überdachung“ angehakt, und Liste und Plan zeigen „Überdachung“.");
  await R.moveTo({ text: "Überdachung (Pfosten" }, 0.5);
  await R.hold(1.2);
  await pointPlan(3, -1.9, 0.6);
  await R.hold(0.6);

  // ---------------------------------------------------------------- carport
  await chapter("Carport");
  await sayOver("Genauso entsteht der Carport neben der Garage: Fläche aufziehen, fertig.");
  await dragPlan(CARPORT.x0, CARPORT.z0, CARPORT.x1, CARPORT.z1, 1.4);
  console.log("carport:", JSON.stringify(await selected()));
  await glide3d(cam(-3.2, 1.05, 20, { x: 3, y: 1.5, z: -1 }), cam(-3.98, 1.0, 19, { x: 14.5, y: 1.5, z: 3 }), 3);
  await sayOver("Den Schalter „Überdachung“ hat jede Dachfläche. Ohne Haken wird daraus ein normales Dach ohne Pfosten – mit Haken wieder ein Carport.");
  await R.clickOn({ text: "Überdachung (Pfosten" }, 0.5);
  await live(1.8);
  await R.clickOn({ text: "Überdachung (Pfosten" }, 0.5);
  await glide3d(cam(-3.98, 1.0, 19, { x: 14.5, y: 1.5, z: 3 }), cam(-4.28, 0.95, 19, { x: 14.5, y: 1.5, z: 3 }), 2.5);

  // ---------------------------------------------------------------- roof stays (3D view)
  await chapter("Dach bleibt");
  await sayOver("Zum Schluss die 3D-Ansicht. Zoomst du nah heran, hebt sich das Dach ab, damit du ins Haus schauen kannst.");
  await R.clickOn({ text: "3D", exact: true, nth: 0 }, 0.6);
  await R.sleep(2000);
  const kb = await R.locate({ text: "Dach bleibt", exact: true });
  await R.move(kb.x + 150, kb.y - 60, 0.4);
  {
    const home = await readHR();
    const A = { theta: -2.6, phi: 0.95, radius: 30, target: home.target };
    const B = { theta: -2.85, phi: 0.9, radius: 13, target: { x: 0, y: 3, z: 0 } };
    await setMain(fit(A));
    await R.frame(0.2, 400);
    await glideMainT(A, B, 4.5);
    await sayOver("Willst du das Dach auch aus der Nähe sehen, etwa die Gaube oder das Dachfenster, schalte unten „Dach bleibt“ ein.");
    await R.clickOn({ text: "Dach bleibt", exact: true }, 0.6);
    await live(1.2);
    await sayOver("Jetzt bleibt es auf dem Haus, auch ganz nah. Den Schalter gibt es in der Hausansicht, sobald dein Haus ein Dach hat.");
    await glideMainT(B, { ...B, theta: -2.3, phi: 0.85 }, 5);
    await sayOver("Ein zweiter Klick schaltet ihn wieder aus.");
    await R.clickOn({ text: "Dach bleibt", exact: true }, 0.5);
    await live(1.2);

    // ---------------------------------------------------------------- result
    await chapter("Das Ergebnis in 3D");
    await R.hideCursor();
    await park();
    const C = { theta: -2.3, phi: 0.95, radius: 32, target: home.target };
    const D = { theta: 0.5, phi: 0.92, radius: 30, target: home.target };
    await h.setState(RWIN.motor, "open", { current_position: 100 });
    const line = "Gaube, Zwerchgiebel, Dachfenster, Terrassendach und Carport – alles aus Dachflächen.";
    await sayOver(line);
    const len = N.length(line);
    await glideMainT({ ...B, theta: -2.3, phi: 0.85 }, C, len * 0.35);
    await glideMainT(C, D, len * 0.65 + 0.4);
  }

  // ---------------------------------------------------------------- outro
  await chapter("Wie geht es weiter");
  await R.title("Nächste Folge: Außenbereich und Garten", `NeonPlan 3D – läuft auch auf alten Wandtablets${VERSION}`);
  await say("Das war Teil zwei: Dachfenster mit Rollladen, Kontakt und Motor, das Flachdach als freie Form, Terrassendach und Carport und der Schalter „Dach bleibt“.");
  await say("In der nächsten Folge geht es nach draußen: Außenbereich und Garten mit Wegen, Zäunen, Bäumen und Licht.");
  await say("Links zur Online-Demo und zur Anleitung stehen in der Beschreibung. Und NeonPlan läuft auch auf alten Wandtablets. Bis zum nächsten Mal!");
  await R.hold(0.6);
}

await catchUp();
N.report();
const result = await R.finish();
console.log(`recorded ${result.frames} frames, ${result.duration.toFixed(1)} s → ${out}`);
