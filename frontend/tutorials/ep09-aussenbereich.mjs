// Tutorial episode 9 – "Außenbereich und Garten" (manual 4.17, with the outdoor parts of 4.8/4.11 and 4.14), in two
// parts (the checklist does not fit into 8 minutes):
//   a) Flächen: the tool „Außen“, drawing, the form, moving, corners (a rectangle stays a rectangle), X/Y/Breite/Tiefe,
//      arrow keys, „Duplizieren“, „Löschen“, a plot of several lawns with „Umrisslinie zeigen“ off, every area type
//      (Rasen, Terrasse, Weg, Einfahrt, Pool, Beet, Wildfläche), holes („Aus Flächen darunter ausschneiden“: the pool
//      and a wild patch in the lawn), „Höhenversatz“ (a raised terrace) and „Gefälle“ (the driveway down to the garage,
//      the front garden on a slope).
//   b) Hecken, Zaun, Pergola, Licht und Pflanzen: hedges with „Höhe“ (Thuja 2.5 m, low 0.5 m), a fence leaning
//      against the house („Offen“), the pergola (height, offset, „X-Verstrebung“, slope), outdoor lights (Wegleuchte,
//      Garten-Spot, Wandleuchte außen; light entity, duplicate, glow), the built-in plant, a parking spot in the
//      driveway, the plan lock, the garden at night in 3D.
// The house is invented (one ground floor with a garage, a gable roof); only built-in items are shown.
// Usage (from frontend/): node tutorials/ep09-aussenbereich.mjs <out-dir> a|b [<voice-dir de> [<voice-dir en>]]
//   (voice dirs: private/tutorial-audio/ep09a/de and …/en, resp. ep09b)
// EP09_FAST=1: a quick dry run for checking the steps (the timing is not usable).
// Then: python ../tools/make-tutorial.py <out-dir> <out.mp4> --en tutorials/ep09a-narration-en.json

import { appVersion, narration, startRecorder } from "./recorder.mjs";
import { helpers, tap } from "./ep02-common.mjs";

const out = process.argv[2] ?? "tutorial-ep09";
const PART = process.argv[3] === "b" ? "b" : "a";
const FAST = !!process.env.EP09_FAST;
const VERSION = `<br><span style="font-size:20px;opacity:.7">aufgenommen mit NeonPlan 3D ${appVersion()}</span>`;

// ---------------------------------------------------------------- the invented house and garden
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
const GROUND = {
  id: "eg",
  name: "Erdgeschoss",
  elevation: 0,
  height: 2.5,
  cut_height: 1.15,
  ha_floor: "erdgeschoss",
  placements: [],
  background: null,
  walls: [],
  furniture: [],
  outdoor: [],
  rooms: [
    rect("r_flur", "Flur", "flur", 0, 0, 3, 4, "tiles"),
    rect("r_kueche", "Küche", "kueche", 3, 0, 7, 4, "tiles"),
    rect("r_bad", "Bad", "bad", 7, 0, 10, 4, "tiles"),
    rect("r_wohnen", "Wohnzimmer", "wohnzimmer", 0, 4, 6, 9),
    rect("r_schlafen", "Schlafzimmer", "schlafzimmer", 6, 4, 10, 9, "carpet"),
    rect("r_garage", "Garage", "garage", 10, 0, 13.5, 6, "concrete"),
    rect("r_hwr", "Hauswirtschaft", null, 10, 6, 13.5, 9, "tiles"),
  ],
  openings: [
    hole("o1", "door", "r_flur", 0, 1.7, 1.0, { style: "front_glass", height: 2.1 }),
    hole("o2", "window", "r_kueche", 0, 2, 1.4),
    hole("o3", "window", "r_bad", 0, 1.5, 0.8),
    hole("o4", "door", "r_wohnen", 2, 3, 2.0, { leaves: 2, style: "glass" }),
    hole("o5", "window", "r_schlafen", 2, 2, 1.4),
    hole("o6", "garage", "r_garage", 0, 1.75, 2.5),
    hole("o7", "window", "r_wohnen", 3, 2.5, 1.6),
  ],
};
const area = (id, type, x0, z0, x1, z1, extra = {}) => ({ id, type, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], ...extra });
const HANG = { offset: 0.6, slope: 0.6, slope_dir: "z" };
// plan rectangles (x0, z0, x1, z1)
const R_BACK = [-4, 9, 17, 17];
const R_LEFT = [-4, 0, 0, 9];
const R_FRONT = [-4, -8, 10, 0];
const R_RIGHT = [13.5, -8, 17, 9];
const R_TERRACE = [0, 9, 6, 12.5];
const R_PATH = [1, -8, 2.4, 0];
const R_DRIVE = [10, -8, 13.5, 0];
const R_POOL = [9, 11, 13, 14];
const R_BED = [6.5, 9.5, 9.5, 10.5];
const R_WILD = [-3, 13, 1, 16];
const R_THUJA = [-4.6, -8, -4, 17.5];
const R_LOWHEDGE = [-4, 17, 17, 17.5];
const R_FENCE = [13.5, 2, 16.5, 9];
const R_PERGOLA = [0.3, 9.3, 4, 12.2];
/** The garden at the end of part 1. */
const GARDEN_A = [
  area("g_back", "lawn", ...R_BACK, { outline: false }),
  area("g_left", "lawn", ...R_LEFT, { outline: false }),
  area("g_front", "lawn", ...R_FRONT, { outline: false, ...HANG }),
  area("g_right", "lawn", ...R_RIGHT, { outline: false }),
  area("g_terrace", "terrace", ...R_TERRACE, { offset: 0.3 }),
  area("g_path", "path", ...R_PATH, HANG),
  area("g_drive", "driveway", ...R_DRIVE, HANG),
  area("g_pool", "pool", ...R_POOL, { cut: true }),
  area("g_bed", "bed", ...R_BED),
  area("g_wild", "wild", ...R_WILD, { cut: true }),
];
/** The garden at the end of part 2. */
const GARDEN_B = [
  ...GARDEN_A,
  area("g_thuja", "hedge", ...R_THUJA, { height: 2.5 }),
  area("g_low", "hedge", ...R_LOWHEDGE, { height: 0.5 }),
  area("g_fence", "fence", ...R_FENCE, { height: 1.2, open: true }),
  area("g_pergola", "pergola", ...R_PERGOLA, { height: 2.4, offset: 0.3, bracing: true, slope: 0.3, slope_dir: "z" }),
];
const item = (id, type, x, z, w, d, h, rotation = 0, extra = {}) => ({ id, type, x, z, w, d, h, rotation, variant: null, ...extra });
// lamp positions (plan metres)
const LAMPS = [
  [2.8, -6.5],
  [2.8, -4],
  [2.8, -1.5],
];
const SPOT = [11, 14.6];
const WALL_LAMP = [0.6, -0.36];
const PLANT = [5.3, 11.7];
const PARK = [11.75, -4];
const FURNITURE_B = [
  ...LAMPS.map(([x, z], i) => item(`f_weg${i}`, "lamp_bollard", x, z, 0.16, 0.16, 0.8, 0, { entity: "light.garten" })),
  item("f_spot", "lamp_garden", ...SPOT, 0.12, 0.12, 0.3, 0, { entity: "light.pool", glow_scale: 1.5 }),
  item("f_wand", "lamp_wall", ...WALL_LAMP, 0.3, 0.15, 0.3, 180, { entity: "light.haustuer", mount_y: 2 }),
  item("f_plant", "plant", ...PLANT, 0.45, 0.45, 1.5),
  item("f_park", "parking", ...PARK, 2.6, 5, 0.02, 0, { entity: "binary_sensor.einfahrt_auto" }),
];
const ENTITIES = [["binary_sensor.einfahrt_auto", "garage", "on", { friendly_name: "Auto in der Einfahrt", device_class: "occupancy" }]];
// plan views: the whole plot, the front garden, the back garden, the side yard
const PLOT = [-5, -8.6, 17.6, 18];
const FRONT = [-2.5, -9, 15.5, 1];
const BACK = [-2.5, 8, 16.5, 18];
const SIDE = [9, 0.5, 18.5, 10.5];
// 3D cameras of the 3D half (theta, phi, radius, target)
const cam = (theta, phi, radius, x, z, y = 0) => ({ theta, phi, radius, target: { x, y, z } });
const C_HOUSE = cam(-2.65, 0.92, 34, 6.5, 4.5);
const C_BACK = cam(0.35, 0.92, 38, 6.5, 6);
const C_FRONT = cam(-2.75, 0.9, 38, 6.5, 2);
const C_BACK_NEAR = cam(0.45, 0.82, 20, 6, 12.5);
const C_POOL = cam(0.5, 0.78, 13, 9.5, 13);
const C_FRONT_NEAR = cam(-2.3, 0.95, 26, 7, -3);
const C_DRIVE = cam(-2.9, 1.1, 20, 11, -3);
const C_SIDE = cam(1.35, 0.8, 18, 14.5, 5);
const C_TERRACE = cam(0.6, 0.8, 14, 3, 11);

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
const { fill, tapPlan, pointPlan, view3d } = h;
const T = (o) => JSON.stringify(o);
const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
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
const press = async (label, key, times = 1) => {
  await blur();
  await keyCap(label);
  for (let i = 0; i < times; i++) {
    await R.page.keyboard.press(key);
    await R.frame(0.12, 60);
  }
  await R.frame(0.3, 120);
};
/** Move the cursor onto any element whose text contains `text` (innermost last match). */
const textBox = (text) =>
  R.page.evaluate((text) => {
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
      if (r.width > 0 && r.height > 0) hit = el;
    }
    if (!hit) return null;
    const r = hit.getBoundingClientRect();
    return { x: r.left + Math.min(r.width / 2, 120), y: r.top + Math.min(r.height / 2, 14) };
  }, text);
const moveToText = async (text, seconds = 0.5) => {
  const box = await textBox(text);
  if (!box) throw new Error(`text not found: ${text}`);
  await R.move(box.x, box.y, seconds);
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
  await R.page.evaluate(
    (x, y) => {
      const r = document.createElement("div");
      r.id = "tut-ring";
      r.style.left = `${x}px`;
      r.style.top = `${y}px`;
      document.body.appendChild(r);
      setTimeout(() => r.remove(), 500);
    },
    x,
    y,
  );
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
  await R.frame(0.3, 60);
  await R.move(at.x, at.y, 0.45);
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
/** Fill a form field quickly (repetitive settings). */
const quickFill = async (label, value) => {
  await R.clickOn({ label }, 0.35);
  await h.typeOver(value, 0.04);
};
/** Drag from one plan point to another. */
const dragPlan = async (x0, z0, x1, z1, seconds = 1) => {
  const a = await R.planPoint(x0, z0);
  const b = await R.planPoint(x1, z1);
  await R.move(a.x, a.y, 0.45);
  await R.drag(b.x, b.y, seconds);
};
/** The tool „Außen“, then an area dragged open (plan rectangle). */
const drawArea = async ([x0, z0, x1, z1], seconds = 0.9) => {
  await R.clickOn({ text: "Außen", exact: true }, 0.45);
  await R.frame(0.15, 250);
  await dragPlan(x0, z0, x1, z1, seconds);
  await R.frame(0.2, 350);
};
/** Tap an outdoor area (select tool) at a plan point. */
const tapArea = async (x, z, seconds = 0.5) => {
  await tapPlan(x, z, seconds);
  await R.frame(0.15, 300);
};
/** The plan view fitting a plan rectangle (x0, z0, x1, z1). */
const viewFor = ([x0, z0, x1, z1]) =>
  R.editor(`const r = e.renderRoot.querySelector("svg").getBoundingClientRect(); const v = e.renderRoot.querySelector("fp3d-view3d")?.getBoundingClientRect();
    const w = (v && v.width > 0 && v.left > r.left ? v.left : r.right) - r.left, h = r.height; const s = Math.min((w - 40) / ${x1 - x0}, (h - 70) / ${z1 - z0});
    return { scale: s, ox: w / 2 - ${(x0 + x1) / 2} * s, oy: (h - 30) / 2 - ${(z0 + z1) / 2} * s };`);
const setPlan = async (rectangle) => {
  const v = await viewFor(rectangle);
  await R.editor(`e._view = ${T(v)};`);
  await R.frame(1 / 25, 200);
};
/** Glide the plan view to fit a rectangle. */
const planTo = async (rectangle, seconds = 1) => {
  const a = await R.editor(`return { ...e._view };`);
  const b = await viewFor(rectangle);
  const n = FAST ? 2 : Math.max(1, Math.round(seconds * 25));
  for (let i = 1; i <= n; i++) {
    const k = ease(i / n);
    const v = { scale: a.scale + (b.scale - a.scale) * k, ox: a.ox + (b.ox - a.ox) * k, oy: a.oy + (b.oy - a.oy) * k };
    await R.editor(`e._view = ${T(v)};`);
    await R.frame(1 / 25, 30);
  }
  await R.frame(1 / 25, 150);
};
/** The 3D half: set and glide. */
let CAM = C_HOUSE;
const setCam = async (c) => {
  CAM = c;
  await view3d(c);
};
const glide3d = async (to, seconds) => {
  await h.glide3d(CAM, to, FAST ? 0.1 : seconds);
  CAM = to;
};
/** Glide the 3D half over the time a line takes (minus a little). */
const glideLine = async (to, line, part = 1) => glide3d(to, Math.max(1, N.length(line) * part - 0.3));
/** The main 3D view (3D tab): theta, phi, radius and, if given, the target; returns the view. */
const setMain = (c) =>
  R.page.evaluate((c) => {
    const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
    const viewer = Object.values(v).find((x) => x && x.floors && x.floorMap);
    const { target, ...rest } = c;
    Object.assign(viewer.controls.view, rest);
    if (target) Object.assign(viewer.controls.view.target, target);
    viewer.invalidate();
    return { ...JSON.parse(JSON.stringify(viewer.controls.view)), hr: viewer.houseRadius };
  }, c);
const glideMain = async (a, b, seconds) => {
  const n = FAST ? 2 : Math.max(1, Math.round(seconds * 25));
  for (let i = 1; i <= n; i++) {
    const k = ease(i / n);
    const mix = (p, q) => p + (q - p) * k;
    await setMain({ theta: mix(a.theta, b.theta), phi: mix(a.phi, b.phi), radius: mix(a.radius, b.radius), target: { x: mix(a.target.x, b.target.x), y: mix(a.target.y, b.target.y), z: mix(a.target.z, b.target.z) } });
    await R.frame(1 / 25, 40);
  }
};
/** The real mouse away from the 3D view (hovering it shows floor labels); the visible cursor stays. */
const park = () => R.page.mouse.move(700, 40);
/** Evening: the sun below the horizon (the lamps light the garden). */
const evening = () => h.setState("sun.sun", "below_horizon", { elevation: -6, azimuth: 290 });
/** Centre of a corner handle of the selected outdoor area (index into its points). */
const cornerOf = (i) =>
  R.editor(`const el = [...e.renderRoot.querySelectorAll("[data-out-vertex]")].find((g) => g.getAttribute("data-out-vertex").endsWith(":${i}")); if (!el) return null;
    const r = el.querySelector(".fp3d-hit").getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 };`);
/** A library entry of the furniture tool (button text). */
const libItem = (text) => ({ text, exact: true });
/** Make a side-panel target visible (scroll the panel when it is out of view). */
const reveal = async (target) => {
  const b = await h.anywhere(target);
  if (b.y < 140 || b.y > 980) await h.scrollSide(target, 420, 0.5);
};
/** Fill a side-panel field, scrolling to it first when needed. */
const fillSide = async (label, value, fast = false) => {
  await reveal({ label });
  if (fast) await quickFill(label, value);
  else await fill(label, value);
};
/** Click a side-panel button, scrolling to it first when needed. */
const clickSide = async (target, seconds = 0.5) => {
  await reveal(target);
  await R.clickOn(target, seconds);
};
/** Put the selected (small) furniture item at a plan point with the X and Y fields. */
const placeXY = async (x, z, fast = true) => {
  await fillSide("X (m)", String(x).replace(".", ","), fast);
  await fillSide("Y (m)", String(z).replace(".", ","), fast);
};
/** Drag the selected furniture item from where it stands to a plan point. */
const dragItem = async (x, z, seconds = 0.9) => {
  const f = await R.editor(`const f = e.furnitureItem; return f ? { x: f.x, z: f.z } : null;`);
  if (!f) throw new Error("no furniture selected");
  await dragPlan(f.x, f.z, x, z, seconds);
};

// ---------------------------------------------------------------- starting states (invisible)
/** The house (and a garden, furniture) loaded invisibly (no undo step), the ground floor shown. */
const loadHouse = async (outdoor = [], furniture = []) => {
  const floor = { ...GROUND, outdoor, furniture };
  await R.editor(`const d = structuredClone(e._doc); d.floors = [${T(floor)}]; d.settings.roof = { type: "gable", pitch: 35, overhang: 0.4 };
    e.setDoc(d, null); e.past = []; e._canUndo = false; e._floorId = "eg"; e._roomId = null; e.fit();`);
  await R.sleep(900);
};
/** Open the preview with the house; the editor with „3D daneben“, the plan fitted to the plot. */
const start = async (outdoor = [], furniture = []) => {
  await R.open("empty");
  await h.addEntities(ENTITIES);
  await tap(R, { text: "Editor", exact: true });
  await R.sleep(700);
  await loadHouse(outdoor, furniture);
  await tap(R, { text: "3D daneben", exact: true });
  await R.sleep(2200);
  await setPlan(PLOT);
  await setCam(C_HOUSE);
  await R.sleep(600);
};
/** The 3D tab with the whole garden in the evening, no cursor. */
const show3d = async () => {
  await R.hideCursor();
  await tap(R, { text: "3D", exact: true, nth: 0 });
  await R.sleep(2500);
  await evening();
  await park();
  await R.sleep(800);
};

// ================================================================ PART 1: Flächen
if (PART === "a") {
  // ---------------------------------------------------------------- teaser
  await chapter("Teaser");
  await start(GARDEN_B, FURNITURE_B);
  await show3d();
  {
    const A = cam(-2.75, 0.95, 40, 6.5, 4.5);
    const B = cam(-1.6, 0.9, 36, 6.5, 4.5);
    const C = cam(0.45, 0.85, 32, 6.5, 6);
    await setMain(A);
    await R.frame(0.2, 1200);
    await R.title("Außenbereich und Garten", `NeonPlan 3D · Folge 9 · Teil 1${VERSION}`);
    const l1 = "Rasen, Terrasse, Pool, eine Einfahrt am Hang, Hecken, Zaun und Pergola – und abends leuchten die Wege.";
    await sayOver(l1);
    await glideMain(A, B, N.length(l1));
    await R.untitle();
    const l2 = "In dieser Folge legst du den Garten um dein Haus an. In Teil eins geht es um die Flächen.";
    await sayOver(l2);
    await glideMain(B, C, N.length(l2));
  }

  // ---------------------------------------------------------------- intro
  await chapter("Was wir heute machen");
  await start();
  await R.hideCursor(false);
  await sayOver("Wir starten mit einem fertigen Haus, aber noch ohne Garten. Rechts daneben läuft die 3D-Ansicht mit.");
  await pointPlan(5, 4.5, 0.6);
  await R.hold(1.2);
  await R.move(1250, 600, 0.6);
  await glide3d(cam(-2.3, 0.92, 34, 6.5, 4.5), 2.5);
  {
    const line = "Gezeichnet werden Rasen, Terrasse, Weg, Einfahrt, Pool, Beet und Wildfläche – dazu Löcher, Höhen und Gefälle.";
    await sayOver(line);
    await glideLine(C_BACK, line);
  }

  // ---------------------------------------------------------------- the tool
  await chapter("Das Werkzeug „Außen“");
  await sayOver("Oben in der Werkzeugleiste wählst du „Außen“. Unten im Plan steht dann, was zu tun ist: ziehen, um eine Außenfläche aufzuziehen.");
  await R.clickOn({ text: "Außen", exact: true }, 0.6);
  await R.frame(0.3, 300);
  await moveToText("Ziehen, um eine Außenfläche", 0.6);
  await R.hold(1.2);
  await sayOver("Ich ziehe hinter dem Haus ein Rechteck auf, für den Garten.");
  await dragPlan(-4, 9, 15, 15, 1.4);
  await R.frame(0.3, 500);
  await sayOver("Eine neue Fläche ist erst einmal Rasen. Rechts im Formular stehen „Art“, Lage und Größe, „Höhenversatz“ und „Gefälle“ und zwei Haken.");
  await R.moveTo({ label: "Art" }, 0.5);
  await R.hold(0.6);
  await R.moveTo({ label: "Breite (m)" }, 0.4);
  await R.hold(0.4);
  await R.moveTo({ label: "Höhenversatz" }, 0.4);
  await R.hold(0.4);
  await R.moveTo({ text: "Umrisslinie zeigen" }, 0.4);
  await R.hold(0.4);
  await sayOver("Das Werkzeug springt danach auf „Auswählen“ zurück. Für jede neue Fläche klickst du „Außen“ wieder an.");
  await R.moveTo({ text: "Auswählen", exact: true }, 0.6);
  await R.hold(0.8);
  await R.moveTo({ text: "Außen", exact: true }, 0.5);
  await glide3d(cam(0.4, 0.9, 30, 5.5, 10), 2);

  // ---------------------------------------------------------------- moving and sizing
  await chapter("Verschieben und Größe ändern");
  await sayOver("Eine ausgewählte Fläche verschiebst du, indem du sie ziehst.");
  await dragPlan(5.5, 12, 5.5, 14, 0.8);
  await dragPlan(5.5, 14, 5.5, 12, 0.8);
  await sayOver("An den Ecken änderst du die Größe. Ein Rechteck bleibt dabei ein Rechteck – die Nachbarecken wandern mit.");
  {
    const c = await cornerOf(2);
    if (!c) throw new Error("no corner");
    await R.move(c.x, c.y, 0.5);
    const b = await R.planPoint(17, 16);
    await R.drag(b.x, b.y, 1.2);
  }
  await sayOver("Genauer geht es mit den Zahlen: X und Y sind die Ecke oben links, dazu Breite und Tiefe. Ich mache den Garten 8 Meter tief.");
  await R.moveTo({ label: "X (m)" }, 0.5);
  await R.hold(0.5);
  await R.moveTo({ label: "Y (m)" }, 0.4);
  await R.hold(0.5);
  await fill("Tiefe (m)", "8");
  await sayOver("Die Pfeiltasten schieben eine Fläche in kleinen Schritten. „Duplizieren“ legt eine Kopie daneben, „Löschen“ oder die Entf-Taste entfernt sie wieder.");
  await pointPlan(5.5, 13, 0.4);
  await press("→", "ArrowRight", 4);
  await press("←", "ArrowLeft", 4);
  await keyCap(null);
  await R.clickOn({ text: "Duplizieren", exact: true }, 0.6);
  await R.frame(0.6, 400);
  await R.clickOn({ text: "Löschen", exact: true }, 0.5);
  await R.frame(0.3, 400);

  // ---------------------------------------------------------------- a plot of several areas
  await chapter("Ein Grundstück aus mehreren Flächen");
  await sayOver("Außenflächen sind immer Rechtecke. Ein Grundstück, das ums Haus herum geht, setzt du deshalb aus mehreren Flächen zusammen: links, vorn und rechts vom Haus.");
  await drawArea(R_LEFT, 0.7);
  await drawArea(R_FRONT, 0.8);
  await drawArea(R_RIGHT, 0.8);
  {
    const line = "In 3D siehst du jetzt an jeder Naht eine Leuchtlinie.";
    await sayOver(line);
    await glideLine(C_FRONT, line);
  }
  await sayOver("Dafür gibt es den Haken „Umrisslinie zeigen“. Ohne ihn hat die Fläche keine Leuchtlinie am Rand – ich nehme ihn bei allen vier Rasenflächen weg.");
  for (const [x, z] of [
    [5, -5],
    [15.5, -4],
    [-2, 4.5],
    [5, 15],
  ]) {
    await tapArea(x, z, 0.45);
    await R.clickOn({ text: "Umrisslinie zeigen" }, 0.45);
    await R.frame(0.15, 250);
  }
  {
    const line = "Jetzt wirkt der Rasen wie aus einem Stück.";
    await sayOver(line);
    await glideLine(C_BACK, line);
  }

  // ---------------------------------------------------------------- the area types
  await chapter("Terrasse, Weg, Einfahrt, Pool und Beet");
  await sayOver("Jetzt die Terrasse hinter dem Wohnzimmer: „Außen“, aufziehen, und bei „Art“ wähle ich „Terrasse“.");
  await drawArea(R_TERRACE, 0.9);
  await pick("Art", "Terrasse");
  {
    const line = "Eine Terrasse liegt etwas höher als der Rasen und hat einen eigenen Belag.";
    await sayOver(line);
    await glideLine(C_BACK_NEAR, line);
  }
  await sayOver("Vorn kommt der Weg zur Haustür dazu, Art „Weg“ …");
  await setCam(C_FRONT_NEAR);
  await drawArea(R_PATH, 0.8);
  await pick("Art", "Weg");
  await sayOver("… und vor der Garage die „Einfahrt“.");
  await drawArea(R_DRIVE, 0.8);
  await pick("Art", "Einfahrt");
  await sayOver("Hinten im Garten ein „Pool“ – sein Wasser liegt unter dem Boden.");
  await setCam(C_BACK_NEAR);
  await drawArea(R_POOL, 0.8);
  await pick("Art", "Pool");
  await sayOver("Und ein „Beet“ an der Hauswand, ein Stück höher als der Rasen.");
  await drawArea(R_BED, 0.7);
  await pick("Art", "Beet");

  // ---------------------------------------------------------------- holes
  await chapter("Löcher: Pool und Wildfläche");
  {
    const line = "Schau dir den Pool in 3D an: Das Wasser fehlt. Der Rasen liegt noch darüber, denn der Pool liegt mitten in der Rasenfläche.";
    await sayOver(line);
    await glideLine(C_POOL, line, 0.6);
  }
  await sayOver("Dafür ist der Haken „Aus Flächen darunter ausschneiden“: Jede vorher gezeichnete Fläche, in der diese ganz liegt, bekommt hier ein Loch.");
  await tapArea(11, 12.5);
  await R.clickOn({ text: "Aus Flächen darunter ausschneiden" }, 0.6);
  await live(0.8);
  {
    const line = "Jetzt ist der Rasen dort offen, und du siehst das Wasser.";
    await sayOver(line);
    await glideLine(cam(0.25, 0.8, 13, 9.5, 13), line);
  }
  await sayOver("Genauso geht eine „Wildfläche“ für eine ungemähte Ecke mitten im Rasen: aufziehen, Art „Wildfläche“, Haken setzen.");
  await setCam(cam(0.15, 0.8, 16, 1, 13.5));
  await drawArea(R_WILD, 0.8);
  await pick("Art", "Wildfläche");
  await R.clickOn({ text: "Aus Flächen darunter ausschneiden" }, 0.5);
  await live(0.6);
  {
    const line = "Wichtig ist die Reihenfolge: Das Loch entsteht nur in Flächen, die vorher gezeichnet wurden.";
    await sayOver(line);
    await glideLine(cam(-0.3, 0.85, 18, 1, 13.5), line);
  }

  // ---------------------------------------------------------------- height offset
  await chapter("Höhenversatz: die erhöhte Terrasse");
  await setCam(C_TERRACE);
  await sayOver("Jede Fläche hat einen „Höhenversatz“: Plus hebt sie an, Minus senkt sie unter den Boden.");
  await tapArea(4.5, 11.5);
  await R.moveTo({ label: "Höhenversatz" }, 0.5);
  await R.hold(0.6);
  await sayOver("Meine Terrasse soll 30 Zentimeter höher liegen, wie mit zwei Stufen. Also trage ich 0,3 ein.");
  await R.hold(1.2);
  await fill("Höhenversatz", "0,3");
  {
    const line = "Mit einem Minuswert liegt eine Fläche tiefer, etwa vor einer Garage im Untergeschoss. Leuchten auf der Fläche gehen mit hoch oder runter.";
    await sayOver(line);
    await glideLine(cam(1.0, 0.75, 13, 3, 11), line);
  }

  // ---------------------------------------------------------------- slope
  await chapter("Gefälle: die Einfahrt am Hang");
  await planTo(FRONT, 0.8);
  await setCam(C_DRIVE);
  await sayOver("Bei diesem Grundstück liegt die Straße höher als das Haus. Die Einfahrt fällt also zur Garage hin ab.");
  await tapArea(11.75, -4);
  await R.hold(0.6);
  await sayOver("Erst der „Höhenversatz“: 0,6 – so hoch liegt die Einfahrt oben an der Straße.");
  await fill("Höhenversatz", "0,6");
  await sayOver("Dann das „Gefälle“: ebenfalls 0,6 Meter Höhenunterschied. Bei „Fällt nach“ wähle ich „unten“ – im Plan nach unten, zur Garage.");
  await fill("Gefälle (m)", "0,6");
  await pick("Fällt nach", "unten (+Z)");
  await sayOver("Der Hinweis darunter fasst es zusammen: Die hohe Kante liegt auf dem Höhenversatz, die tiefe Kante um das Gefälle tiefer.");
  await moveToText("Höhenunterschied von der hohen", 0.6);
  await R.hold(1);
  {
    const line = "In 3D läuft die Einfahrt jetzt von der Straße hinunter bis zum Garagentor.";
    await sayOver(line);
    await glideLine(cam(-2.45, 1.05, 19, 11, -3), line);
  }
  await sayOver("Den Vorgarten und den Weg stelle ich genauso ein, dann liegt der ganze Vorgarten am Hang.");
  await setCam(C_FRONT_NEAR);
  await tapArea(6, -5, 0.5);
  await quickFill("Höhenversatz", "0,6");
  await quickFill("Gefälle (m)", "0,6");
  await pick("Fällt nach", "unten (+Z)", 0.4);
  {
    const line = "So baust du auch einen Hang im Garten oder eine Rampe. Zaunpfosten und Leuchten stellen sich später auf die schräge Fläche.";
    await catchUp();
    const t0 = R.time;
    await sayOver(line);
    await tapArea(1.7, -5, 0.5);
    await quickFill("Höhenversatz", "0,6");
    await quickFill("Gefälle (m)", "0,6");
    await pick("Fällt nach", "unten (+Z)", 0.4);
    await glide3d(cam(-2.0, 0.95, 28, 6, -3), Math.max(1.2, t0 + N.length(line) - R.time - 0.3));
  }

  // ---------------------------------------------------------------- outro
  await chapter("Wie geht es weiter");
  await R.title("Teil 2: Hecken, Zaun, Pergola, Licht und Pflanzen", `NeonPlan 3D – läuft auch auf alten Wandtablets${VERSION}`);
  await say("Das war Teil eins: das Werkzeug „Außen“, alle Flächen, ein Grundstück aus mehreren Rasenflächen ohne Umrisslinien, Löcher, Höhenversatz und Gefälle.");
  await say("In Teil zwei kommen Hecken, Zaun und Pergola, Außenleuchten, Pflanzen und ein Stellplatz in der Einfahrt.");
  await say("Links zur Online-Demo und zur Anleitung stehen in der Beschreibung. NeonPlan läuft übrigens auch auf alten Wandtablets. Bis gleich in Teil zwei!");
  await R.hold(0.6);
} else {
  // ================================================================ PART 2: Hecken, Zaun, Pergola, Licht und Pflanzen
  // ---------------------------------------------------------------- teaser
  await chapter("Teaser");
  await start(GARDEN_B, FURNITURE_B);
  await show3d();
  {
    const A = cam(0.5, 0.92, 38, 6.5, 6);
    const B = cam(1.5, 0.85, 34, 6.5, 5);
    const C = cam(-2.5, 0.88, 26, 6.5, 0);
    await setMain(A);
    await R.frame(0.2, 1200);
    await R.title("Außenbereich und Garten", `NeonPlan 3D · Folge 9 · Teil 2${VERSION}`);
    const l1 = "Eine Thujahecke, ein Zaun am Haus, eine Pergola auf der Terrasse – und abends Licht an Weg, Pool und Haustür.";
    await sayOver(l1);
    await glideMain(A, B, N.length(l1));
    await R.untitle();
    const l2 = "In Teil zwei kommen Hecken, Zaun, Pergola, Licht und Pflanzen in den Garten.";
    await sayOver(l2);
    await glideMain(B, C, N.length(l2));
  }

  // ---------------------------------------------------------------- intro
  await chapter("Was wir heute machen");
  await start(GARDEN_A);
  await R.hideCursor(false);
  await setCam(C_BACK);
  {
    const line = "Wir machen mit dem Garten aus Teil eins weiter: Rasen, Terrasse, Weg, die Einfahrt am Hang, Pool, Beet und Wildfläche.";
    await sayOver(line);
    await pointPlan(3, 10.7, 0.6);
    await R.hold(0.6);
    await pointPlan(11.75, -4, 0.6);
    await R.hold(0.6);
    await pointPlan(11, 12.5, 0.6);
    await glide3d(C_FRONT, Math.max(1, N.length(line) - 2.5));
  }

  // ---------------------------------------------------------------- hedges
  await chapter("Hecken");
  await setCam(cam(-2.0, 0.85, 30, 2, 4));
  await sayOver("Eine Hecke ist auch eine Außenfläche: „Außen“, einen schmalen Streifen aufziehen, Art „Hecke“.");
  await drawArea(R_THUJA, 1.2);
  await pick("Art", "Hecke");
  await sayOver("Hecke, Zaun und Pergola haben zusätzlich eine „Höhe“. Für einen Sichtschutz aus Thuja trage ich 2,5 Meter ein.");
  await fill("Höhe (m)", "2,5");
  await live(0.5);
  await sayOver("Eine niedrige Hecke als Einfassung bekommt 0,5 Meter. Ich ziehe sie hinten an der Grundstücksgrenze auf.");
  await setCam(cam(0.2, 0.85, 30, 6, 12));
  await drawArea(R_LOWHEDGE, 1.1);
  await pick("Art", "Hecke");
  await fill("Höhe (m)", "0,5");
  {
    const line = "In 3D stehen die Hecken als grüne Blöcke am Rand – hoch an der Seite, niedrig hinten.";
    await sayOver(line);
    await glideLine(cam(0.9, 0.85, 34, 4, 6), line);
  }

  // ---------------------------------------------------------------- fence
  await chapter("Zaun");
  await planTo(SIDE, 0.8);
  await setCam(C_SIDE);
  await sayOver("Neben der Garage soll ein kleiner Hof eingezäunt werden. Wieder „Außen“, aufziehen, Art „Zaun“.");
  await drawArea(R_FENCE, 1);
  await pick("Art", "Zaun");
  await sayOver("Ein Zaun läuft erst einmal rundherum, auch an der Hauswand entlang. Die Höhe stelle ich auf 1,2 Meter.");
  await fill("Höhe (m)", "1,2");
  await sayOver("Mit „Offen“ fällt die Kante vom letzten zum ersten Punkt weg. Bei einem aufgezogenen Rechteck ist das die linke – so lehnt der Zaun am Haus.");
  await R.clickOn({ text: "Offen (letzte Kante weglassen)" }, 0.6);
  await live(0.6);
  {
    const line = "In 3D: Pfosten etwa alle zwei Meter, zwei Latten, und zur Hauswand hin ist er offen.";
    await sayOver(line);
    await glideLine(cam(2.2, 0.85, 18, 15, 5), line);
  }

  // ---------------------------------------------------------------- pergola
  await chapter("Pergola");
  await planTo(BACK, 0.8);
  await setCam(C_TERRACE);
  await sayOver("Auf die Terrasse kommt eine Pergola: aufziehen, Art „Pergola / Rahmen“.");
  await drawArea(R_PERGOLA, 0.9);
  await pick("Art", "Pergola / Rahmen");
  await sayOver("Sie bekommt Eckpfosten, Balken und Sparren in der eingestellten Höhe – ich nehme 2,4 Meter. Und weil die Terrasse 30 Zentimeter höher liegt, bekommt die Pergola denselben Höhenversatz.");
  await fill("Höhe (m)", "2,4");
  await fill("Höhenversatz", "0,3");
  await sayOver("„X-Verstrebung“ setzt Kreuze in alle Seiten.");
  await R.clickOn({ text: "X-Verstrebung" }, 0.6);
  await live(0.5);
  await sayOver("Mit dem Gefälle neigt sich die Pergola: 0,3 Meter, fällt nach unten – also vom Haus weg.");
  await fill("Gefälle (m)", "0,3");
  await pick("Fällt nach", "unten (+Z)");
  {
    const line = "Den Haken „Offen“ gibt es auch hier. Und als Rahmen taugt sie genauso für ein Carport-Gerüst oder den Unterbau eines Rolldachs.";
    await sayOver(line);
    await R.moveTo({ text: "Offen (letzte Kante weglassen)" }, 0.5);
    await glideLine(cam(1.1, 0.72, 12, 2.2, 10.8), line, 0.9);
  }

  // ---------------------------------------------------------------- outdoor lights
  await chapter("Außenleuchten");
  await planTo(FRONT, 0.8);
  await setCam(C_FRONT_NEAR);
  await R.editor(`e._roomId = null; e._outdoorId = null;`);
  await sayOver("Jetzt das Licht. Außenleuchten sind Möbel: Werkzeug „Möbel“, Abschnitt „Leuchten“. Ganz unten stehen „Wegleuchte“ und „Garten-Spot“.");
  await R.clickOn({ text: "Möbel", exact: true }, 0.6);
  await R.frame(0.3, 400);
  await R.moveTo(libItem("Wegleuchte"), 0.6);
  await R.hold(0.5);
  await R.moveTo(libItem("Garten-Spot"), 0.4);
  await R.hold(0.4);
  await sayOver("Ist kein Raum ausgewählt, landet die Leuchte in der Mitte des Plans. Kleine Leuchten setzt du am genauesten mit X und Y – hier an den Weg.");
  await clickSide(libItem("Wegleuchte"), 0.5);
  await R.frame(0.3, 500);
  await placeXY(...LAMPS[0], false);
  await sayOver("Bei „Licht oder Schalter“ wähle ich das Licht aus Home Assistant, hier die Wegleuchten.");
  await reveal({ label: "Licht oder Schalter" });
  await h.pickEntity("Licht oder Schalter", "weg", "Garten Wegleuchten");
  await sayOver("„Duplizieren“ macht zwei weitere daraus. Ich verteile sie am Weg, alle zweieinhalb Meter – und alle folgen demselben Licht.");
  for (const p of LAMPS.slice(1)) {
    await clickSide({ text: "Duplizieren", exact: true }, 0.5);
    await R.frame(0.2, 400);
    await placeXY(...p);
  }
  await sayOver("An die Haustür kommt eine „Wandleuchte“. Draußen rastet sie nicht von selbst ein, also setze ich sie mit X und Y vor die Wand …");
  await clickSide(libItem("Wandleuchte"), 0.6);
  await R.frame(0.3, 500);
  await placeXY(...WALL_LAMP);
  await sayOver("… drehe sie mit „Drehung“ auf 180 Grad nach außen und hänge sie mit „Höhe über Boden“ auf 2 Meter.");
  await fillSide("Drehung (°)", "180");
  await fillSide("Höhe über Boden (m)", "2");
  await sayOver("Dazu das Licht „Haustür Außenlicht“.");
  await reveal({ label: "Licht oder Schalter" });
  await h.pickEntity("Licht oder Schalter", "haus", "Haustür Außenlicht");
  await sayOver("Den „Garten-Spot“ stelle ich an den Pool, mit dem Pool-Licht. „Leuchtstärke in 3D“ macht ihn kräftiger: 150 Prozent.");
  await planTo(BACK, 0.8);
  await setCam(C_POOL);
  await clickSide(libItem("Garten-Spot"), 0.5);
  await R.frame(0.3, 500);
  await placeXY(...SPOT);
  await reveal({ label: "Licht oder Schalter" });
  await h.pickEntity("Licht oder Schalter", "pool", "Pool Spot");
  await fillSide("Leuchtstärke in 3D (%)", "150", true);
  {
    const line = "Wegleuchte, Garten-Spot und Wandleuchte außen beleuchten alle Außenflächen und die Fassade. Abends sieht das so aus.";
    await sayOver(line);
    await evening();
    await setCam(cam(0.6, 0.8, 16, 10, 13));
    await glideLine(cam(0.1, 0.8, 16, 9, 13), line, 0.4);
    await planTo(FRONT, 0.6);
    await glide3d(cam(-2.3, 0.95, 22, 4, -3), Math.max(1, N.length(line) * 0.6 - 1));
  }
  {
    const line = "Die Wegleuchten stehen auf dem schrägen Vorgarten, das Licht fällt auf den Weg und die Fassade.";
    await sayOver(line);
    await glideLine(cam(-2.0, 0.9, 16, 2, -2.5), line);
  }

  // ---------------------------------------------------------------- plants
  await chapter("Pflanzen");
  await planTo(BACK, 0.8);
  await setCam(C_TERRACE);
  await R.editor(`e._roomId = null; e._furnitureId = null;`);
  await sayOver("Für Grün gibt es die eingebaute „Pflanze“ unter „Wohnen“. Ich stelle sie auf die Terrasse und mache sie mit „Höhe“ etwas größer.");
  await clickSide(libItem("Pflanze"), 0.6);
  await R.frame(0.3, 500);
  await placeXY(...PLANT);
  await fillSide("Höhe (m)", "1,5");
  {
    const line = "Bäume, Sträucher und Gestrüpp bringt das Pack „Garten & Terrasse“ mit – Breite und Höhe bestimmen dort Krone und Wuchs.";
    await sayOver(line);
    await glideLine(cam(1.1, 0.75, 12, 4, 11), line);
  }

  // ---------------------------------------------------------------- parking spot
  await chapter("Stellplatz in der Einfahrt");
  await planTo(FRONT, 0.8);
  await setCam(C_DRIVE);
  await R.editor(`e._roomId = null; e._furnitureId = null;`);
  await sayOver("Für das Auto in der Einfahrt öffne ich den Abschnitt „Stellplätze“ und nehme den „Stellplatz“.");
  await h.scrollSide({ text: "Stellplätze" }, 620);
  await R.clickOn({ text: "Stellplätze" }, 0.5);
  await R.frame(0.3, 400);
  await clickSide(libItem("Stellplatz"), 0.5);
  await R.frame(0.3, 500);
  await fillSide("Drehung (°)", "0", true);
  await placeXY(...PARK);
  await sayOver("Er markiert, wo ein Auto steht. Bei „Sensor Auto anwesend“ wähle ich den Sensor, der das Auto in der Einfahrt meldet.");
  await reveal({ label: "Sensor" });
  await h.pickEntity("Sensor", "einfahrt", "Auto in der Einfahrt");
  {
    const line = "Das Fahrzeug selbst kommt aus dem Pack „Fahrzeuge“ – das zeigt Folge 4.";
    await sayOver(line);
    await h.scrollSide(() => textBox("Kein Fahrzeug-Pack"), 420, 0.5);
    await moveToText("Kein Fahrzeug-Pack", 0.5);
    await glideLine(cam(-2.5, 1.0, 18, 11, -3), line);
  }

  // ---------------------------------------------------------------- plan lock
  await chapter("Grundriss sperren");
  await sayOver("Ist der Garten fertig, sperrst du ihn mit dem Schloss „Grundriss“ oben in der Leiste. Dann verrutschen Räume, Wände, Türen und Außenflächen nicht mehr aus Versehen.");
  await R.clickOn({ text: "Auswählen", exact: true }, 0.4);
  await R.clickOn({ text: "Grundriss", nth: 0 }, 0.5);
  await R.frame(0.4, 400);
  await dragPlan(6, -5, 6, -3, 0.8);
  await R.frame(0.3, 300);
  await sayOver("Möbel und Leuchten bleiben frei. Ein zweiter Klick hebt die Sperre wieder auf.");
  await R.hold(1.2);
  await R.clickOn({ text: "Grundriss", nth: 0 }, 0.5);
  await R.frame(0.4, 300);

  // ---------------------------------------------------------------- result
  await chapter("Der Garten in 3D");
  await show3d();
  {
    const A = cam(-2.75, 0.92, 38, 6.5, 3);
    const B = cam(-0.6, 0.88, 36, 6.5, 5);
    const C = cam(0.7, 0.85, 34, 6.5, 6);
    await setMain(A);
    await R.frame(0.2, 600);
    const line = "Der fertige Garten: Einfahrt am Hang mit Stellplatz, Weg mit Licht, Zaun, Hecken, Pool, Terrasse mit Pergola.";
    await sayOver(line);
    const len = N.length(line);
    await glideMain(A, B, len * 0.5);
    await glideMain(B, C, len * 0.5 + 0.4);
  }

  // ---------------------------------------------------------------- outro
  await chapter("Wie geht es weiter");
  await R.title("Nächste Folge: Die 3D-Ansicht bedienen", `NeonPlan 3D – läuft auch auf alten Wandtablets${VERSION}`);
  await say("Das war Teil zwei: Hecken mit eigener Höhe, ein offener Zaun am Haus, die Pergola mit Verstrebung und Gefälle, Außenleuchten, Pflanzen und der Stellplatz.");
  await say("In der nächsten Folge geht es um die 3D-Ansicht: alle Schalter, Geräte bedienen, Raumfenster und Suche.");
  await say("Links zur Online-Demo und zur Anleitung stehen in der Beschreibung. Und NeonPlan läuft auch auf alten Wandtablets. Bis zum nächsten Mal!");
  await R.hold(0.6);
}

await catchUp();
N.report();
const result = await R.finish();
console.log(`recorded ${result.frames} frames, ${result.duration.toFixed(1)} s → ${out}`);
