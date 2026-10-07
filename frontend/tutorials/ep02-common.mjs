// Helpers shared by both parts of tutorial episode 2 ("Bauplan als Vorlage"): the invented floor-plan picture
// (tutorials/assets/bauplan-l.png, made by make-plan.py, turned 2.5° like a crooked scan), the traced house as a
// starting state, and small UI helpers (form rows, entity pickers, side-panel scrolling, live states of the mock).

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { appVersion } from "./recorder.mjs";

export const PLAN = join(import.meta.dirname, "assets", "bauplan-l.png");
/** Key points of the plan picture as fractions (u, v) of the turned picture, its turn and its aspect. */
export const PTS = JSON.parse(readFileSync(join(import.meta.dirname, "assets", "bauplan-l.json"), "utf-8"));
/** The picture's true width in the plan (17.5 m at 100 px per metre) and its turn. */
export const PLAN_WIDTH = 17.5;
export const VERSION = `<br><span style="font-size:20px;opacity:.7">aufgenommen mit NeonPlan 3D ${appVersion()}</span>`;

/** The traced rooms (plan metres; the house corner at 0/0). */
export const ROOMS = {
  garage: [[0, 0], [3.5, 0], [3.5, 6], [0, 6]],
  wohnen: [[3.5, 0], [10, 0], [10, 4], [7.5, 4], [7.5, 8.5], [3.5, 8.5]],
  kueche: [[10, 0], [14, 0], [14, 4], [10, 4]],
  flur: [[7.5, 4], [14, 4], [14, 5.5], [7.5, 5.5]],
  bad: [[7.5, 5.5], [10.5, 5.5], [10.5, 8.5], [7.5, 8.5]],
  schlafen: [[10.5, 5.5], [14, 5.5], [14, 8.5], [10.5, 8.5]],
};

/** EP02_FAST=1: a quick dry run for checking the steps (short moves and glides; the timing is not usable). */
export const FAST = !!process.env.EP02_FAST;
export function fastMode(R) {
  if (!FAST) return;
  const { move, glide, type } = R;
  R.move = (x, y) => move(x, y, 0.04);
  R.glide = (a, b) => glide(a, b, 0.12);
  R.type = (text) => type(text, 0.01);
}

/** Click an element without recording frames (for invisible setup steps before a part starts). */
export async function tap(R, target) {
  const b = await R.locate(target);
  await R.page.mouse.click(b.x, b.y);
  await R.sleep(400);
}

export function helpers(R) {
  const editorEval = (fn, ...args) =>
    R.page.evaluate(
      (src, ...args) => {
        const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
        return new Function("e", "args", src)(e, args);
      },
      fn,
      ...args,
    );

  const h = {
    /** Type over the value of the focused field. */
    async typeOver(value, perLetter = 0.06) {
      await R.page.keyboard.down("Control");
      await R.page.keyboard.press("a");
      await R.page.keyboard.up("Control");
      await R.type(value, perLetter);
      await R.key("Enter");
    },
    /** Type over a form field found by its label. */
    async fill(label, value, seconds = 0.5) {
      await R.clickOn({ label }, seconds);
      await h.typeOver(value);
    },
    async tapPlan(x, z, seconds = 0.5) {
      const p = await R.planPoint(x, z);
      await R.move(p.x, p.y, seconds);
      await R.click();
    },
    async pointPlan(x, z, seconds = 0.5) {
      const p = await R.planPoint(x, z);
      await R.move(p.x, p.y, seconds);
    },
    /** Drag from one plan point to another. */
    async dragPlan(from, to, seconds = 1) {
      const a = await R.planPoint(...from);
      const b = await R.planPoint(...to);
      await R.move(a.x, a.y, 0.5);
      await R.drag(b.x, b.y, seconds);
    },
    /** Park the cursor on the side panel's edge (no field under it). */
    async side(seconds = 0.4) {
      await R.move(1607, 640, seconds);
    },
    /** Scroll the side panel (wheel at its edge) until the target's middle sits at `y` (a findBox target or an async function giving a box). */
    async scrollSide(target, y = 300, seconds = 0.6) {
      await h.side(0.35);
      await R.page.evaluate(() => {
        let a = document.activeElement;
        while (a?.shadowRoot?.activeElement) a = a.shadowRoot.activeElement;
        a?.blur?.();
      });
      const b = typeof target === "function" ? await target() : await h.anywhere(target);
      const total = b.y - y;
      const n = Math.max(1, Math.round(seconds * 25));
      let done = 0;
      for (let i = 1; i <= n; i++) {
        const t = i / n;
        const k = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        const step = Math.round(total * k) - done;
        done += step;
        if (step) await R.page.mouse.wheel({ deltaY: step });
        await R.frame(1 / 25, 30);
      }
      await R.frame(1 / 25, 120);
    },
    /** Like R.locate (a {label} or {text, exact, nth}), but also finds elements scrolled out of view. */
    async anywhere(target) {
      const box = await R.page.evaluate((target) => {
        const walk = function* (root) {
          for (const el of root.querySelectorAll("*")) {
            yield el;
            if (el.shadowRoot) yield* walk(el.shadowRoot);
          }
        };
        const shown = (el) => el.getBoundingClientRect().width > 0;
        const text = (el) => el.textContent.replace(/\s+/g, " ").trim();
        let hit = null;
        if (target.label) {
          for (const el of walk(document)) {
            if (el.tagName !== "LABEL" || !shown(el) || !text(el).startsWith(target.label)) continue;
            const input = el.querySelector("input, select, textarea, fp3d-entity-picker");
            if (input && shown(input)) hit = input;
          }
        } else {
          const hits = [];
          for (const el of walk(document)) {
            if (!/^(BUTTON|A|LABEL|SUMMARY)$/.test(el.tagName) || !shown(el)) continue;
            const t = text(el);
            if (target.exact ? t === target.text : t.includes(target.text)) hits.push(el);
          }
          hit = typeof target.nth === "number" ? hits[target.nth] : hits[hits.length - 1];
        }
        if (!hit) return null;
        const r = hit.getBoundingClientRect();
        return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      }, target);
      if (!box) throw new Error(`not found anywhere: ${JSON.stringify(target)}`);
      return box;
    },
    /** Scroll the side panel back to the top of the selected item's form ("Zurück zu …"). */
    async sideTop(seconds = 0.4) {
      await h.scrollSide({ text: "Zurück zu" }, 150, seconds);
    },
    /** The centre of a control inside a row of the "Wandhöhen" box: "height", "thick", "split" or a button text. */
    async rowBox(title, what) {
      const box = await R.page.evaluate(
        (title, what) => {
          const walk = function* (root) {
            for (const el of root.querySelectorAll("*")) {
              yield el;
              if (el.shadowRoot) yield* walk(el.shadowRoot);
            }
          };
          const row = [...walk(document)].find((el) => el.classList?.contains("fp3d-edge-height") && el.querySelector("b")?.textContent.trim() === title);
          if (!row) return null;
          const inputs = [...row.querySelectorAll("input")];
          const el =
            what === "row"
              ? row.querySelector("b")
              : what === "height"
                ? inputs[0]
                : what === "thick" || what === "split"
                  ? row.querySelector(".fp3d-split-row input")
                  : [...row.querySelectorAll("button")].find((b) => b.textContent.trim() === what);
          if (!el) return null;
          const r = el.getBoundingClientRect();
          return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
        },
        title,
        what,
      );
      if (!box) throw new Error(`no row control: ${title} / ${what}`);
      return box;
    },
    async rowMove(title, what, seconds = 0.5) {
      const b = await h.rowBox(title, what);
      await R.move(b.x, b.y, seconds);
      return b;
    },
    async rowClick(title, what, seconds = 0.5) {
      await h.rowMove(title, what, seconds);
      await R.click();
    },
    /**
     * Pick an entity in a searchable picker (found by its label): click the field, type a search, click the hit.
     * `option` is the visible text of the list entry (e.g. "Keiner" or a friendly name).
     */
    async pickEntity(label, search, option, seconds = 0.5, nth) {
      const b = await h.pickerBox(label, nth);
      await R.move(b.x, b.y, seconds);
      await R.click();
      await R.frame(0.3, 80);
      if (search) await R.type(search, 0.06);
      await R.frame(0.3, 120);
      const at = await R.page.evaluate((option) => {
        const walk = function* (root) {
          for (const el of root.querySelectorAll("*")) {
            yield el;
            if (el.shadowRoot) yield* walk(el.shadowRoot);
          }
        };
        const li = [...walk(document)].find((el) => el.tagName === "LI" && el.getAttribute("role") === "option" && el.querySelector("span")?.textContent.trim().startsWith(option));
        if (!li) return null;
        const r = li.getBoundingClientRect();
        return { x: r.left + Math.min(90, r.width / 2), y: r.top + r.height / 2 };
      }, option);
      if (!at) throw new Error(`no entity option: ${option}`);
      await R.move(at.x, at.y, 0.45);
      await R.click();
      await R.frame(1 / 25, 150);
    },
    /**
     * The field of a searchable entity picker found by its label (exact text first, else the start of it); `nth`
     * picks one of several (0 = the first on the page), else the last.
     */
    async pickerBox(label, nth) {
      const box = await R.page.evaluate(
        (label, nth) => {
          const walk = function* (root) {
            for (const el of root.querySelectorAll("*")) {
              yield el;
              if (el.shadowRoot) yield* walk(el.shadowRoot);
            }
          };
          const all = [...walk(document)].filter((el) => el.tagName === "LABEL" && el.querySelector("fp3d-entity-picker") && el.getBoundingClientRect().width > 0);
          const text = (el) => el.textContent.replace(/\s+/g, " ").trim();
          let hits = all.filter((el) => text(el) === label);
          if (!hits.length) hits = all.filter((el) => text(el).startsWith(label));
          const hit = typeof nth === "number" ? hits[nth] : hits[hits.length - 1];
          if (!hit) return null;
          const r = hit.querySelector("fp3d-entity-picker").getBoundingClientRect();
          return { x: r.left + Math.min(120, r.width / 2), y: r.top + r.height / 2 };
        },
        label,
        nth ?? null,
      );
      if (!box) throw new Error(`no picker: ${label}`);
      return box;
    },
    async pickerMove(label, seconds = 0.5, nth) {
      const b = await h.pickerBox(label, nth);
      await R.move(b.x, b.y, seconds);
    },
    /** A screen point of the plan picture, given as a fraction of the picture (follows its turn and size). */
    async bgPoint(u, v) {
      return editorEval(
        `const [u, v] = args; const bg = e.floor.background; const asp = e._images[bg.image_id].aspect;
         const w = bg.width, hh = w * asp, cx = bg.x + w / 2, cz = bg.z + hh / 2;
         const lx = bg.x + u * w - cx, lz = bg.z + v * hh - cz, r = (bg.rotation || 0) * Math.PI / 180;
         const world = [cx + lx * Math.cos(r) - lz * Math.sin(r), cz + lx * Math.sin(r) + lz * Math.cos(r)];
         const s = e.toScreen(world); const box = e.renderRoot.querySelector("svg").getBoundingClientRect();
         return { x: box.left + s[0], y: box.top + s[1] };`,
        u,
        v,
      );
    },
    /** Centre of an element in the editor's plan (e.g. "[data-bg-handle]"). */
    async planElement(selector) {
      return editorEval(
        `const el = e.renderRoot.querySelector(args[0]); if (!el) return null; const r = el.getBoundingClientRect();
         return { x: r.left + r.width / 2, y: r.top + r.height / 2 };`,
        selector,
      );
    },
    /** Lay the picture exactly: the house corner on 0/0, true size and turn (after the visible steps, a few mm). */
    async exactPlan() {
      await editorEval(
        `const [W, u, v, a] = args; const bg = e.floor.background; const asp = e._images[bg.image_id].aspect;
         const H = W * asp, r = a * Math.PI / 180, L = [u * W - W / 2, v * H - H / 2];
         const RL = [L[0] * Math.cos(r) - L[1] * Math.sin(r), L[0] * Math.sin(r) + L[1] * Math.cos(r)];
         e.updateFloor({ background: { ...bg, width: W, rotation: a, x: Math.round((-RL[0] - W / 2) * 1000) / 1000, z: Math.round((-RL[1] - H / 2) * 1000) / 1000 } });`,
        PLAN_WIDTH,
        PTS.corner[0],
        PTS.corner[1],
        PTS.angle,
      );
    },
    /** The plan view (scale in px per metre, offsets in px). */
    view2d(scale, ox, oy) {
      return editorEval(`e._view = { scale: args[0], ox: args[1], oy: args[2] };`, scale, ox, oy);
    },
    /** The camera of the 3D half beside the plan (theta, phi, radius, target). */
    view3d(cam) {
      return editorEval(
        `const v = e.renderRoot.querySelector("fp3d-view3d"); if (!v) return null;
         const viewer = Object.values(v).find((x) => x && x.floors && x.floorMap); if (!viewer) return null;
         if (args[0]) { const { target, ...rest } = args[0]; Object.assign(viewer.controls.view, rest); if (target) Object.assign(viewer.controls.view.target, target); viewer.invalidate(); }
         return JSON.parse(JSON.stringify(viewer.controls.view));`,
        cam,
      );
    },
    /** Glide the 3D half's camera (theta, phi, radius and, when both have one, the target). */
    async glide3d(from, to, seconds) {
      const n = FAST ? 2 : Math.max(1, Math.round(seconds * 25));
      for (let i = 1; i <= n; i++) {
        const t = i / n;
        const k = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        const mix = (a, b) => a + (b - a) * k;
        const target = from.target && to.target ? { x: mix(from.target.x, to.target.x), y: mix(from.target.y, to.target.y), z: mix(from.target.z, to.target.z) } : undefined;
        await h.view3d({ theta: mix(from.theta, to.theta), phi: mix(from.phi, to.phi), radius: mix(from.radius, to.radius), ...(target ? { target } : {}) });
        await R.frame(1 / 25, 40);
      }
    },
    /** Set a state in the mock Home Assistant (invented entities only), so 3D shows it live. */
    setState(id, state, attributes) {
      return R.page.evaluate(
        (id, state, attributes) => {
          const panel = window.fp3dPanel;
          const hass = panel.hass;
          const old = hass.states[id];
          hass.states[id] = { entity_id: id, ...(old ?? {}), state, attributes: { ...(old?.attributes ?? {}), ...(attributes ?? {}) } };
          panel.hass = { ...hass, states: { ...hass.states } };
        },
        id,
        state,
        attributes ?? null,
      );
    },
    /** Add invented entities to the mock (registry entry with area, and state). */
    addEntities(list) {
      return R.page.evaluate((list) => {
        const panel = window.fp3dPanel;
        const hass = panel.hass;
        for (const [id, area, state, attributes] of list) {
          hass.entities[id] = { entity_id: id, area_id: area };
          hass.states[id] = { entity_id: id, state, attributes };
        }
        panel.hass = { ...hass, states: { ...hass.states }, entities: { ...hass.entities } };
      }, list);
    },
    editorEval,
  };
  return h;
}

/**
 * Starting state with the traced house: a floor, the plan picture laid exactly, the rooms linked to their areas,
 * and (optionally) the walls of part 1 (counter, open hall, room divider) and the openings of parts 2 and 3
 * (`openings: true` for all, `"doors"` for the doors and the garage door only).
 * Only for clean starting states and teasers – never for the steps shown.
 */
export async function traceHouse(R, { walls = true, openings = false } = {}) {
  const h = helpers(R);
  await tap(R, { text: "Editor", exact: true });
  await R.sleep(500);
  await tap(R, { text: "Etage hinzufügen" });
  await tap(R, { text: "Erdgeschoss", nth: 0 });
  await R.sleep(500);
  const png = "data:image/png;base64," + readFileSync(PLAN).toString("base64");
  await R.page.evaluate((png) => window.fp3dPanel.hass.callWS({ type: "neonplan3d/image/set", image_id: "img_plan", data: png }), png);
  await h.editorEval(
    `const [rooms, walls, openings, W, asp, u, v, a] = args;
     const H = W * asp, r = a * Math.PI / 180, L = [u * W - W / 2, v * H - H / 2];
     const RL = [L[0] * Math.cos(r) - L[1] * Math.sin(r), L[0] * Math.sin(r) + L[1] * Math.cos(r)];
     const room = (id, name, area, m) => ({ id, name, area_id: area, points: rooms[id], floor_material: m });
     e.change((doc, f) => {
       doc.settings.wall_exterior = 0.3;
       f.background = { image_id: "img_plan", width: W, rotation: a, x: Math.round((-RL[0] - W / 2) * 1000) / 1000, z: Math.round((-RL[1] - H / 2) * 1000) / 1000, opacity: 0.6 };
       f.rooms.push(room("garage", "Garage", "garage", "concrete"), room("wohnen", "Wohnzimmer", "wohnzimmer", "oak"), room("kueche", "Küche", "kueche", "tiles"),
         room("flur", "Flur", "flur", "wood"), room("bad", "Bad", "bad", "tiles"), room("schlafen", "Schlafzimmer", "schlafzimmer", "carpet"));
       if (walls) {
         Object.assign(f.rooms[1], { wall_splits: [null, [2], null, null, null, null], wall_heights: [null, [1.1, null], 0, null, null, null] });
         f.walls = [{ id: "teiler", a: [3.5, 5], b: [5.5, 5], thickness: 0.1, height: 1.2 }];
       }
       if (openings) {
         let n = 0;
         const o = (room_id, edge, offset, width, type, extra = {}) => ({ id: "t" + ++n, room_id, edge, offset, width, type, sill: type === "window" ? 0.9 : 0,
           height: type === "door" ? 2.05 : type === "garage" ? 2.1 : 1.3, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null, ...extra });
         f.openings = [
           o("flur", 1, 0.75, 1.0, "door", { style: "front_glass", height: 2.1, contact: "binary_sensor.haustuer" }),
           o("wohnen", 1, 3, 1.6, "door", { leaves: 2, style: "glass", shut: true }),
           o("wohnen", 3, 0.75, 1.0, "door", { style: "passage" }),
           o("flur", 2, 5.5, 0.8, "door", { contact: "none", hinge: "right" }),
           o("flur", 2, 1.55, 0.9, "door", { style: "sliding", contact: "none" }),
           o("wohnen", 0, 2, 1.6, "window", { leaves: 2 }),
           o("wohnen", 4, 2, 1.8, "window", { leaves: 2, sill: 0, height: 2.1, contact: "binary_sensor.wohnzimmer_terrasse", contact2: "binary_sensor.wohnzimmer_terrasse_2" }),
           o("wohnen", 5, 1.25, 2.0, "window", { sill: 0, height: 2.4, style: "glass_wall", contact: "none" }),
           o("kueche", 0, 2, 1.2, "window", { style: "bars" }),
           o("bad", 2, 1.5, 0.8, "window", { sill: 1.3, height: 0.8, contact: "none" }),
           o("schlafen", 2, 1.75, 1.4, "window", { contact: "binary_sensor.schlafzimmer_fenster", sensor: "contact_tilt", tilt: "binary_sensor.schlafzimmer_kipp" }),
           o("garage", 2, 1.75, 2.5, "garage", { cover: "cover.garagentor" }),
         ].filter((x) => openings !== "doors" || x.type !== "window");
       }
     });`,
    ROOMS,
    walls,
    openings,
    PLAN_WIDTH,
    PTS.aspect,
    PTS.corner[0],
    PTS.corner[1],
    PTS.angle,
  );
  await h.view2d(70, 310, 300);
  await R.sleep(1200);
}
