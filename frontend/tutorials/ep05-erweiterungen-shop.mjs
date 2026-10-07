// Tutorial episode 5 – "Erweiterungen: Shop verbinden und Möbel-Packs" (manual chapter 7): what is free (the
// built-in furniture), the locked look of Pro features, the Extensions page, connecting the shop with a licence
// key, installing and updating packs and a Pro add-on, "Neu im Shop", importing a sampler pack file, where pack
// furniture shows up in the library, removing a pack, disconnecting, and what keeps working without the shop.
// Drives the preview with invented demo data and its shop simulation (?shop). Never a real licence key: the key
// typed is invented (NP-DEMO-…), and the prices of the demo offers are taken out of the mock's answers (no
// prices in the tutorials). The shop scene starts disconnected and without the demo Pro pack, so connecting and
// installing can be shown; installing the bought Pro add-on imports a small demo feature pack ("Wetter draußen")
// – the preview's install call alone only flips the status. The sampler pack is an invented demo file.
// Usage (from frontend/): node tutorials/ep05-erweiterungen-shop.mjs <out-dir> [<voice-dir de> [<voice-dir en>]]
//   (voice dirs: private/tutorial-audio/ep05/de and …/en; a line then lasts the longer of both plus 0.3 s)
// Then: python ../tools/make-tutorial.py <out-dir> <out.mp4> --en tutorials/ep05-narration-en.json

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { appVersion, FPS, narration, startRecorder } from "./recorder.mjs";

const out = process.argv[2] ?? "tutorial-ep05";
const R = await startRecorder({ outDir: out, width: 1920, height: 1080, lang: "de" });
const N = narration(R, process.argv.slice(3));
const { say, sayOver, chapter, catchUp } = N;
const VERSION = `<br><span style="font-size:20px;opacity:.7">aufgenommen mit NeonPlan 3D ${appVersion()}</span>`;

// every scene starts from the stored defaults; confirm() of the app (remove a pack, disconnect) is accepted
await R.page.evaluateOnNewDocument(() => {
  try {
    localStorage.clear();
  } catch {
    // no storage
  }
});
R.page.on("dialog", (d) => void d.accept());

// the invented sampler pack (a newsletter gift in real life): three simple items, "signed" for the preview
const SAMPLER = resolve(out, "schnupper-demo.fp3dpack");
writeFileSync(
  SAMPLER,
  JSON.stringify({
    payload: {
      format: "fp3dpack",
      version: 1,
      id: "demo.schnupper",
      name: "Schnupper-Pack (Demo)",
      publisher: "Demo",
      licensee: "Newsletter-Geschenk",
      items: [
        { id: "pouf", name: { de: "Pouf", en: "Pouf" }, size: [0.6, 0.6, 0.42], parts: [{ shape: "cyl", x: 0, z: 0, w: 1, d: 1, y: 0, h: 1, color: "#d08a5a", edges: true }] },
        {
          id: "side_table",
          name: { de: "Beistelltisch rund", en: "Round side table" },
          size: [0.5, 0.5, 0.55],
          surface: true,
          parts: [
            { shape: "cyl", x: 0, z: 0, w: 1, d: 1, y: 0.92, h: 0.08, color: "wood", edges: true },
            { shape: "cyl", x: 0, z: 0, w: 0.12, d: 0.12, y: 0, h: 0.92, color: "body" },
          ],
        },
        {
          id: "floor_vase",
          name: { de: "Bodenvase", en: "Floor vase" },
          size: [0.32, 0.32, 0.8],
          parts: [
            { shape: "loft", x: 0, z: 0, w: 0.7, d: 0.7, y: 0, h: 0.85, tw: 1, td: 1, color: "#c9b79c", edges: true },
            { shape: "cyl", x: 0, z: 0, w: 0.6, d: 0.6, y: 0.85, h: 0.15, color: "#c9b79c" },
          ],
        },
      ],
    },
    signature: "demo",
  }),
);

// ---------------------------------------------------------------- helpers
/** sayOver that returns the video time the line ends. */
const line = async (text) => {
  await sayOver(text);
  return R.time + N.length(text);
};
/** Load the preview fresh (a hard cut: nothing is recorded while it loads). */
const scene = async (query = "", cursor = true) => {
  await R.open(query);
  await R.hideCursor(!cursor);
};
/** Set the 3D camera, with an optional target point [x, y, z]. */
const cam = (c) =>
  R.page.evaluate((c) => {
    const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
    const viewer = Object.values(v).find((x) => x && x.floors && x.floorMap);
    const { target, ...rest } = c;
    if (target) viewer.controls.view.target.set(target[0], target[1], target[2]);
    Object.assign(viewer.controls.view, rest);
    viewer.invalidate();
  }, c);
const mix = (a, b, k) => {
  const c = { theta: a.theta + (b.theta - a.theta) * k, phi: a.phi + (b.phi - a.phi) * k, radius: a.radius + (b.radius - a.radius) * k };
  if (a.target && b.target) c.target = a.target.map((x, i) => x + (b.target[i] - x) * k);
  return c;
};
const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
/** Real frames until video time `end` (rain keeps falling), gliding the camera from a to b if given. */
const live = async (end, a = null, b = null) => {
  const n = Math.max(1, Math.round((end - R.time) * FPS));
  for (let i = 1; i <= n; i++) {
    if (a && b) await cam(mix(a, b, ease(i / n)));
    await R.frame(1 / FPS, 15);
  }
};
/** A setup click before a scene's first line: nothing is recorded. */
const quiet = async (target, wait = 300) => {
  const b = await R.locate(target);
  await R.page.mouse.click(b.x, b.y);
  await R.sleep(wait);
};
/**
 * Centre of a visible element by its text, through shadow roots: headings, paragraphs, bold names, links, codes.
 * `nth` picks one of several (0 = first on the page, default the last).
 */
const textAt = async (text, { exact = true, nth, tags = "H2,H3,P,B,SPAN,A,BUTTON,LABEL,CODE,STRONG" } = {}) => {
  const box = await R.page.evaluate(
    (text, exact, nth, tags) => {
      const ok = new Set(tags.split(","));
      const walk = function* (root) {
        for (const el of root.querySelectorAll("*")) {
          yield el;
          if (el.shadowRoot) yield* walk(el.shadowRoot);
        }
      };
      const hits = [];
      for (const el of walk(document)) {
        if (!ok.has(el.tagName)) continue;
        const t = el.textContent.replace(/\s+/g, " ").trim();
        if (exact ? t !== text : !t.includes(text)) continue;
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.height > 0 && r.top < innerHeight && r.bottom > 0) hits.push({ x: r.left + Math.min(r.width / 2, 160), y: r.top + r.height / 2 });
      }
      return typeof nth === "number" ? (hits[nth] ?? null) : (hits[hits.length - 1] ?? null);
    },
    text,
    exact,
    nth ?? null,
    tags,
  );
  if (!box) {
    await R.page.screenshot({ path: resolve(out, "error.png") });
    throw new Error(`text not found: ${text}`);
  }
  return box;
};
const pointAt = async (text, seconds = 0.5, opts = {}) => {
  const b = await textAt(text, opts);
  await R.move(b.x, b.y, seconds);
};
/** The button `label` in the pack row named `name` (Extensions page: shop list or installed packs). */
const rowButton = async (name, label, seconds = 0.5) => {
  const box = await R.page.evaluate(
    (name, label) => {
      const walk = function* (root) {
        for (const el of root.querySelectorAll("*")) {
          yield el;
          if (el.shadowRoot) yield* walk(el.shadowRoot);
        }
      };
      let hit = null;
      for (const el of walk(document)) {
        if (!el.classList?.contains("fp3d-pack")) continue;
        if (el.querySelector("b")?.textContent.trim() !== name) continue;
        const btn = [...el.querySelectorAll("button")].find((b) => b.textContent.trim() === label);
        const r = btn?.getBoundingClientRect();
        if (r && r.width > 0 && r.top < innerHeight && r.bottom > 0) hit = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      }
      return hit;
    },
    name,
    label,
  );
  if (!box) {
    await R.page.screenshot({ path: resolve(out, "error.png") });
    throw new Error(`no ${label} for ${name}`);
  }
  await R.move(box.x, box.y, seconds);
  await R.click();
};
/** Park the cursor beside the Extensions page's column and scroll a heading to `top`. */
const scrollPage = async (text, top, seconds = 0.8) => {
  await R.move(1660, 620, 0.4);
  await R.scrollTo(text, top, seconds);
};
/** Park the cursor on the editor's side panel and scroll a section into view. */
const scrollSide = async (text, top, seconds = 0.7) => {
  await R.move(1890, 640, 0.4);
  await R.scrollTo(text, top, seconds);
};
const tapPlan = async (x, z, seconds = 0.5) => {
  const p = await R.planPoint(x, z);
  await R.move(p.x, p.y, seconds);
  await R.click();
};
/** Screen point of the placed sampler pouf (it lands in the middle of the selected room). */
const poufPoint = async () => {
  const at = await R.editor(`for (const f of e._doc.floors.flatMap((fl) => fl.furniture)) if (f.type === "pack:demo.schnupper:pouf") return [f.x, f.z]; return null;`);
  if (!at) throw new Error("pouf not placed");
  return R.planPoint(at[0], at[1]);
};
/** The Extensions element (to clear a stale import message of the preview's install call). */
const clearPackMsg = () =>
  R.page.evaluate(() => {
    const x = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-extensions");
    if (x) x._packMsg = null;
  });

/**
 * The shop scene: start disconnected and without the demo Pro pack; wrap the mock's answers so no price shows,
 * the kitchen (already updated, see the update note) reads v2, and the bought Pro add-on "Wetter draußen" is in
 * the account – installing it imports a small demo feature pack, like the real shop delivers one.
 */
const shopScene = async () => {
  await R.page.evaluate(async () => {
    const p = window.fp3dPanel;
    const h = p.hass;
    const orig = h.callWS;
    await orig({ type: "neonplan3d/license/remove" });
    await orig({ type: "neonplan3d/packs/remove", pack_id: "demo.pro" });
    let weather = null;
    h.callWS = async (m) => {
      if (m.type === "neonplan3d/packs/install" && m.pack_id === "mastershort.pro_weather") {
        const payload = { format: "fp3dpack", version: 1, id: "demo.pro_weather", name: "Wetter draußen", publisher: "Demo", licensee: "Demo Kunde", features: ["weather"], items: [] };
        await orig({ type: "neonplan3d/packs/import", pack: JSON.stringify({ payload, signature: "demo" }) });
        weather = 1;
        return { id: payload.id, name: payload.name, publisher: "Demo", licensee: "Demo Kunde", release: 1, items: 0 };
      }
      const r = await orig(m);
      if (m.type.startsWith("neonplan3d/license/") && r) {
        return {
          ...r,
          offers: (r.offers ?? []).filter((o) => o.id !== "pro_weather").map((o) => ({ ...o, price: null })),
          packs: [
            ...r.packs.map((pk) => (pk.id === "mastershort.kitchen" ? { ...pk, release: 2, installed: 2 } : pk)),
            { id: "mastershort.pro_weather", name: "Wetter draußen", release: 1, url: r.shop_url, installed: weather },
          ],
        };
      }
      return r;
    };
    await p.data.reloadPacks();
    p._newOffers = 0;
  });
  await R.sleep(800);
};

// ---------------------------------------------------------------- 1. Teaser: the house with Pro, in the rain
await chapter("Teaser");
await scene("flows&weather=rainy", false);
await quiet('button[aria-label="Bedienelemente ausblenden – nur die 3D-Ansicht bleibt"]', 700);
{
  const a = { theta: -1.6, phi: 1.12, radius: 60, target: [6.8, 3.2, 4.6] };
  const b = { theta: -0.95, phi: 0.98, radius: 40, target: [6.8, 3.2, 4.6] };
  const c = { theta: -0.35, phi: 0.9, radius: 31, target: [6.8, 2.8, 4.6] };
  await cam(a);
  await R.sleep(1500);
  await R.title("Erweiterungen: Shop verbinden und Möbel-Packs", `NeonPlan 3D · Folge 5${VERSION}`);
  await live(R.time + 0.6, a, mix(a, b, 0.05));
  let end = await line("NeonPlan 3D ist kostenlos – alles aus den bisherigen Folgen gehört dazu, ohne Abo und ohne Konto.");
  await live(end, mix(a, b, 0.05), b);
  await R.untitle();
  end = await line("Dazu gibt es Erweiterungen: Möbel-Packs mit mehr Möbeln und Pro-Funktionen, zum Beispiel den Regen am Haus.");
  await live(end, b, c);
}

// ---------------------------------------------------------------- 2. Intro, the locked look
await chapter("Worum es heute geht");
await scene("nopro");
await R.move(960, 560, 0.01);
await sayOver("In dieser Folge geht es um den Reiter „Erweiterungen“: was kostenlos ist, wie du den Shop verbindest und Packs installierst.");
await R.moveTo({ text: "✦ Erweiterungen" }, 0.6);
await R.hold(1.2);
await sayOver("Pro-Funktionen erkennst du am Schloss: Unten tragen „Spur“, „Kameras“ und „Wetter“ eins, solange die Erweiterung fehlt.");
await R.moveTo({ text: "🔒 Spur", exact: true }, 0.7);
await R.hold(0.7);
await R.moveTo({ text: "🔒 Kameras", exact: true }, 0.4);
await R.hold(0.5);
await R.moveTo({ text: "🔒 Wetter", exact: true }, 0.4);
await sayOver("Tippst du trotzdem drauf, erklärt ein Hinweis, was dahinter steckt.");
await R.clickOn({ text: "🔒 Spur", exact: true }, 0.5);
await R.hold(0.6);
await pointAt("Diese Funktion ist eine Pro-Erweiterung.", 0.6, { exact: false, tags: "SPAN" });
await sayOver("Mit Links zum Shop, zur Anleitung und direkt zu den Erweiterungen. Ich schließe ihn wieder.");
await R.moveTo({ text: "Zum Shop", exact: true }, 0.5);
await R.hold(0.4);
await R.moveTo({ text: "Mehr erfahren", exact: true }, 0.4);
await R.hold(0.4);
await R.moveTo({ text: "Erweiterungen", exact: true }, 0.4);
await R.hold(0.6);
await R.clickOn({ text: "Schließen", exact: true }, 0.4);

// ---------------------------------------------------------------- 3. Free: the built-in furniture
await chapter("Kostenlos: die eingebauten Möbel");
await sayOver("Im Editor öffnet das Werkzeug „Möbel“ die Bibliothek.");
await R.clickOn({ text: "Editor", exact: true }, 0.5);
await R.hold(0.4);
await R.clickOn({ text: "Möbel", exact: true }, 0.5);
await sayOver("Alles in diesen Abschnitten ist eingebaut und kostenlos: Leuchten, Wohnen, Essen, Küche, Schlafen, Bad und Arbeiten.");
await pointAt("Leuchten", 0.5, { exact: false, tags: "BUTTON", nth: 0 });
await R.hold(0.5);
await pointAt("Wohnen", 0.4, { exact: false, tags: "BUTTON", nth: 0 });
await R.hold(0.4);
for (const s of ["Essen", "Küche", "Schlafen", "Bad & Hauswirtschaft", "Arbeiten & Sonstiges"]) {
  await pointAt(s, 0.35, { exact: false, tags: "BUTTON", nth: 0 });
  await R.hold(0.25);
}
await sayOver("Damit richtest du eine ganze Wohnung ein – Folge 4 hat es gezeigt.");
await R.moveTo({ text: "Sofa", exact: true }, 0.5);
await R.hold(1.6);
await sayOver("Darunter folgen deine installierten Packs. In der Demo ist das ein kleines Demo-Pack mit einem Sitzwürfel.");
await pointAt("Demo-Pack", 0.6, { exact: false, tags: "BUTTON" });
await R.click();
await R.hold(0.6);
await R.moveTo({ text: "Sitzwürfel", exact: true }, 0.5);
await R.hold(1.5);
await sayOver("Ganz unten steht ein Hinweis auf mehr Möbel und Pro-Funktionen. „Erweiterungen öffnen“ führt zur Seite – wie der Reiter oben.");
await scrollSide("Erweiterungen öffnen", 900, 0.7);
await R.moveTo({ text: "Erweiterungen öffnen", exact: true }, 0.5);
await R.hold(1.6);
await R.clickOn({ text: "Erweiterungen öffnen", exact: true }, 0.2);

// ---------------------------------------------------------------- 4. The Extensions page
await chapter("Die Seite „Erweiterungen“");
await sayOver("Die Seite sehen nur Administratoren von Home Assistant.");
await R.moveTo({ text: "✦ Erweiterungen" }, 0.6);
await R.hold(0.6);
await pointAt("Erweiterungen", 0.5, { tags: "H2" });
await sayOver("Oben: „Shop öffnen“, „Problem melden“ und „Idee vorschlagen“ auf GitHub, die Community auf Discord und die Anleitung.");
await R.moveTo({ text: "Shop öffnen", exact: true }, 0.5);
await R.hold(0.7);
await R.moveTo({ text: "Problem melden" }, 0.4);
await R.hold(0.6);
await R.moveTo({ text: "Idee vorschlagen" }, 0.4);
await R.hold(0.8);
await R.moveTo({ text: "Community auf Discord" }, 0.4);
await R.hold(0.6);
await R.moveTo({ text: "Anleitung" }, 0.4);
await sayOver("Darunter die Shop-Verbindung, dann die Pro-Erweiterungen und ganz unten die Möbel-Packs.");
await pointAt("Shop-Verbindung", 0.5, { tags: "H3" });
await R.hold(0.6);
await pointAt("Pro-Erweiterungen", 0.5, { tags: "H3" });
await R.hold(0.6);
await pointAt("Möbel-Packs", 0.5, { tags: "H3" });
await sayOver("Ohne Lizenzschlüssel fragt NeonPlan 3D den Shop übrigens nie – es geht nichts ins Internet.");
await R.moveTo("input.fp3d-shop-key", 0.6);
await sayOver("Sechs Pro-Erweiterungen gibt es im Moment: Kamera-Cockpit, Wetter draußen, Bildschirme live, Energie Pro, Klang und Kino und Auto Pro.");
await scrollPage("Pro-Erweiterungen", 160, 0.8);
for (const [name, nth] of [
  ["Kamera-Cockpit", 0],
  ["Wetter draußen", 0],
  ["Bildschirme live", 0],
  ["Energie Pro", 0],
  ["Klang & Kino", 0],
  ["Auto Pro", 0],
]) {
  await pointAt(name, 0.4, { exact: false, tags: "B", nth });
  await R.hold(0.45);
}
await sayOver("Jede Kachel sagt kurz, was sie kann. Ohne Erweiterung steht ein Schloss davor und der Link „Im Shop ansehen“.");
await pointAt("Kamera-Cockpit: durch", 0.5, { exact: false, tags: "SPAN" });
await R.hold(1);
await R.moveTo({ text: "Im Shop ansehen", nth: 0 }, 0.5);
await sayOver("„Mehr erfahren“ öffnet das passende Kapitel der Anleitung.");
await R.moveTo({ text: "Mehr erfahren", nth: 0 }, 0.5);
await sayOver("Und unter „Möbel-Packs“ steht, was installiert ist – hier nur das Demo-Pack.");
await scrollPage("Möbel-Packs", 520, 0.6);
await pointAt("Demo-Pack", 0.5, { tags: "B" });

// ---------------------------------------------------------------- 5. Connect the shop
await chapter("Shop verbinden");
await catchUp();
await scene("shop&weather=rainy");
await shopScene();
await quiet({ text: "✦ Erweiterungen" }, 900);
await R.move(960, 560, 0.01);
await sayOver("Jetzt verbinde ich den Shop. Mit dem ersten Kauf bekommst du einen Lizenzschlüssel – er steht in der Bestell-Mail und im Kundenkonto.");
await pointAt("Shop-Verbindung", 0.6, { tags: "H3" });
await R.hold(0.8);
await R.moveTo("input.fp3d-shop-key", 0.6);
await sayOver("Darüber steht die „Installations-Kennung“: ein anonymer Fingerabdruck dieser Installation. „Kopieren“ legt sie in die Zwischenablage.");
await pointAt("Installations-Kennung", 0.5, { tags: "SPAN" });
await R.hold(0.8);
await pointAt("3f9c2a7b1e4d8c05", 0.4, { tags: "CODE" });
await R.hold(0.6);
await R.moveTo({ text: "Kopieren", exact: true }, 0.4);
await sayOver("Den Schlüssel trägst du in das Feld ein. Ich nehme einen erfundenen Demo-Schlüssel – und vertippe mich absichtlich.");
await R.clickOn("input.fp3d-shop-key", 0.5);
await R.type("NP-DEMO-1234", 0.07);
await R.key("Enter");
await sayOver("Ist er unvollständig oder falsch, sagt die Seite das gleich. Er sieht immer so aus: NP und viermal vier Zeichen.");
await pointAt("Diesen Schlüssel kennt der Shop nicht.", 0.5, { exact: false, tags: "P" });
await sayOver("Also vervollständigen und auf „Aktivieren“ – Enter geht auch.");
await R.clickOn("input.fp3d-shop-key", 0.4);
await R.key("End");
await R.type("-ABCD-7K2M", 0.07);
await R.clickOn({ text: "Aktivieren", exact: true }, 0.5);
await R.hold(0.6);
await sayOver("Verbunden. Die Seite zeigt, als wer und mit welchem Schlüssel – von dem nur die letzten vier Zeichen.");
await scrollPage("Shop-Verbindung", 110, 0.8);
await pointAt("Verbunden als", 0.5, { exact: false, tags: "SPAN" });

// ---------------------------------------------------------------- 6. Install and update
await chapter("Packs installieren und aktualisieren");
await sayOver("Darunter stehen alle Packs aus deinem Konto, jeweils mit ihrem Stand.");
await pointAt("Wohnzimmer", 0.5, { tags: "B" });
await R.hold(0.4);
await pointAt("Küche", 0.4, { tags: "B" });
await R.hold(0.4);
await pointAt("Fahrzeuge", 0.4, { tags: "B" });
await sayOver("„Noch nicht installiert“ heißt: gekauft, aber noch nicht hier. „Installieren“ holt das Pack vom Shop – signiert für genau diese Installation.");
await pointAt("noch nicht installiert", 0.5, { tags: "SPAN", nth: 0 });
await R.hold(1.6);
await rowButton("Fahrzeuge", "Installieren", 0.6);
await R.hold(0.8);
await clearPackMsg();
await pointAt("installiert · v1", 0.5, { tags: "SPAN", nth: 0 });
await sayOver("Gibt es eine neuere Version, steht da „Update auf v2 verfügbar“, und der Knopf heißt „Aktualisieren“.");
await pointAt("Update auf v2 verfügbar", 0.5, { tags: "SPAN" });
await R.hold(1.4);
await rowButton("Wohnzimmer", "Aktualisieren", 0.5);
await R.hold(0.6);
await clearPackMsg();
await sayOver("Meist musst du das gar nicht selbst tun: Einmal am Tag schaut NeonPlan 3D nach und installiert neue Käufe und Updates von allein.");
await pointAt("installiert · v2", 0.5, { tags: "SPAN", nth: 0 });
await sayOver("„Jetzt prüfen“ fragt sofort nach. Daneben steht, wann zuletzt geprüft wurde.");
await R.clickOn({ text: "Jetzt prüfen", exact: true }, 0.5);
await R.hold(0.4);
await pointAt("zuletzt geprüft", 0.5, { exact: false, tags: "SPAN" });
await sayOver("Kam mit einem Update etwas dazu, sagt dir die Seite das einmal ganz oben – hier zehn neue Möbel für die Küche.");
await scrollPage("Erweiterungen", 85, 0.8);
await pointAt("Küche wurde auf Version 2", 0.5, { exact: false, tags: "P" });

// ---------------------------------------------------------------- 7. New in the shop
await chapter("Neu im Shop");
await sayOver("Mit Shop-Verbindung zeigt die Seite außerdem, was es neu gibt und du noch nicht hast. Frische Sachen tragen „NEU“.");
await pointAt("Neu im Shop", 0.5, { tags: "H3" });
await R.hold(0.5);
await pointAt("Heimkino & Hi-Fi", 0.5, { tags: "B" });
await R.hold(0.5);
await pointAt("NEU", 0.4, { tags: "SPAN", nth: 0 });
await R.hold(0.6);
await pointAt("Haustiere", 0.5, { tags: "B" });
await sayOver("Ein Tipp auf eine Kachel öffnet sie im Shop. Packs gibt es für die Räume, für Garten, Garage, Fitness und Smart Home, für Fahrzeuge, Treppen, Heimkino, Haustechnik, Haustiere und Architektur.");
await pointAt("Möbel-Pack", 0.5, { tags: "SPAN", nth: 0 });
await R.hold(1.2);
await R.move(1160, 560, 1.2);
await sayOver("Geräte darin haben eine kleine Leuchtfläche: Mit einem Media-Player, Schalter oder Licht verknüpft, leuchtet sie, solange das Gerät läuft.");
await pointAt("Leinwand, Beamer", 0.5, { exact: false, tags: "SPAN" });
await sayOver("Nach dem ersten Kauf steht hier auch dein persönlicher Rabattcode. Ein Tipp auf ein Angebot nimmt ihn gleich mit in den Warenkorb.");
await pointAt("NP-TREUE-DEMO42", 0.5, { tags: "CODE" });
await R.hold(1.2);
await R.moveTo({ text: "Kopieren", exact: true, nth: 0 }, 0.5);
await sayOver("Und gibt es etwas Neues, leuchtet am Reiter „Erweiterungen“ ein kleiner Punkt – auch wenn du gerade in 3D bist.");
await R.page.evaluate(() => (window.fp3dPanel._newOffers = 2));
{
  const b = await R.locate({ text: "✦ Erweiterungen" });
  await R.move(b.x + b.w / 2 - 14, b.y + 26, 0.7);
  await R.hold(1.5);
}

// ---------------------------------------------------------------- 8. Pro add-ons: installed and active
await chapter("Pro-Erweiterungen installieren");
await sayOver("Pro-Erweiterungen kommen genauso: Nach dem Kauf stehen sie in der Liste. Ich installiere „Wetter draußen“.");
await R.page.evaluate(() => (window.fp3dPanel._newOffers = 0));
await scrollPage("Shop-Verbindung", 110, 0.8);
await pointAt("Wetter draußen", 0.5, { tags: "B" });
await R.hold(0.6);
await rowButton("Wetter draußen", "Installieren", 0.5);
await R.hold(0.6);
await clearPackMsg();
await sayOver("Die Kachel bekommt einen Haken und „aktiv“ – das Schloss ist weg.");
await scrollPage("Pro-Erweiterungen", 160, 0.8);
await pointAt("Wetter draußen", 0.5, { exact: false, tags: "B" });
await R.hold(0.6);
await pointAt("aktiv", 0.4, { tags: "SPAN" });
{
  await sayOver("In 3D ist der Schalter „Wetter“ jetzt frei – und regnet es draußen, regnet es auch am Haus.");
  const end = R.time + N.length("In 3D ist der Schalter „Wetter“ jetzt frei – und regnet es draußen, regnet es auch am Haus.");
  await R.clickOn({ text: "3D", exact: true }, 0.6);
  await R.sleep(1500);
  await R.moveTo({ text: "Wetter", exact: true }, 0.8);
  await live(end);
}
await sayOver("Unter „Möbel-Packs“ steht die Erweiterung jetzt auch: Sie schaltet eine Pro-Funktion frei.");
await R.clickOn({ text: "✦ Erweiterungen" }, 0.6);
await R.sleep(500);
await scrollPage("Möbel-Packs", 360, 0.8);
await pointAt("schaltet 1 Pro-Funktionen frei", 0.5, { exact: false, tags: "SPAN" });

// ---------------------------------------------------------------- 9. Sampler packs and pack files
await chapter("Schnupper-Packs und Pack-Dateien");
await sayOver("Packs gibt es auch als Datei: Schnupper-Packs aus dem Newsletter mit ein paar Möbeln zum Ausprobieren, Downloads von der Website, oder für eine Installation ohne Internet.");
await R.moveTo({ text: "Möbel-Packs importieren" }, 0.6);
await R.hold(1);
await sayOver("Dafür ist „Möbel-Packs importieren …“ da. Du kannst auch mehrere Dateien auf einmal auswählen.");
{
  const [chooser] = await Promise.all([R.page.waitForFileChooser(), R.clickOn({ text: "Möbel-Packs importieren" }, 0.4)]);
  await R.hold(1.2);
  await chooser.accept([SAMPLER]);
  await R.sleep(600);
}
await sayOver("Ich nehme ein Demo-Schnupper-Pack mit drei Möbeln. Es steht sofort in der Liste – lizenziert für „Newsletter-Geschenk“.");
await pointAt("importiert", 0.5, { exact: false, tags: "P" });
await R.hold(1);
await pointAt("Schnupper-Pack (Demo)", 0.5, { tags: "B" });
await R.hold(0.6);
await pointAt("Lizenziert für Newsletter-Geschenk", 0.4, { exact: false, tags: "SPAN" });
await sayOver("Wichtig: Packs sind digital signiert. Nur Packs vom Herausgeber lassen sich importieren, veränderte Dateien werden abgelehnt.");
await scrollPage("Möbel-Packs", 240, 0.6);
await pointAt("Nur unterschriebene Packs", 0.6, { exact: false, tags: "P" });

// ---------------------------------------------------------------- 10. New furniture in the library
await chapter("Neue Möbel in der Bibliothek");
await sayOver("Und wo landen die neuen Möbel? Im Editor unter „Möbel“ – unter den eingebauten Abschnitten, mit einem eigenen Abschnitt je Pack.");
await R.clickOn({ text: "Editor", exact: true }, 0.6);
await R.sleep(500);
await tapPlan(4.6, 1.4, 0.6);
await R.clickOn({ text: "Möbel", exact: true }, 0.5);
await R.hold(0.4);
await pointAt("Schnupper-Pack (Demo)", 0.6, { exact: false, tags: "BUTTON" });
await R.click();
await R.hold(0.4);
await sayOver("Fährst du mit der Maus über einen Eintrag, zeigt eine kleine Vorschau das Möbel in 3D.");
await R.moveTo({ text: "Beistelltisch rund", exact: true }, 0.5);
await R.hold(1.4);
await R.moveTo({ text: "Bodenvase", exact: true }, 0.4);
await sayOver("Die Suche findet auch den Pack-Namen: „schnupper“ zeigt nur dieses Pack.");
await R.clickOn('input[placeholder="Möbel suchen …"]', 0.5);
await R.type("schnupper", 0.07);
await sayOver("Antippen setzt das Möbel in den gewählten Raum. Ab da ist es ein Möbel wie jedes andere.");
await R.clickOn({ text: "Pouf", exact: true }, 0.5);
await R.hold(0.5);
{
  // moved like any other item: off the coffee table to a free corner of the living room
  const p = await poufPoint();
  await R.move(p.x, p.y, 0.5);
  const q = await R.planPoint(4.95, 1.35);
  await R.drag(q.x, q.y, 0.9);
}

// ---------------------------------------------------------------- 11. Remove, disconnect, move house
await chapter("Entfernen, Trennen und Umzug");
await sayOver("Unter „Erweiterungen“ entfernst du ein Pack mit „Entfernen“ – nach einer kurzen Rückfrage.");
await R.clickOn({ text: "✦ Erweiterungen" }, 0.6);
await R.sleep(500);
await scrollPage("Möbel-Packs", 360, 0.8);
await rowButton("Schnupper-Pack (Demo)", "Entfernen", 0.6);
// the list gets shorter: off the button, which now belongs to the next pack
await R.move(1200, 560, 0.4);
await pointAt("Möbel-Packs", 0.4, { tags: "H3" });
await R.hold(0.4);
await sayOver("Seine Möbel bleiben als einfache Kästen im Plan stehen. Importierst du das Pack wieder, sind sie zurück – mit allen Verknüpfungen.");
await R.clickOn({ text: "Editor", exact: true }, 0.6);
await R.sleep(500);
{
  const p = await poufPoint();
  await R.move(p.x, p.y, 0.6);
  await R.click();
  await R.hold(0.8);
}
await sayOver("Genauso ersetzt eine neuere Version eines Packs die alte, ohne dass im Plan etwas verloren geht.");
await R.hold(0.5);
await sayOver("„Trennen“ entfernt den Schlüssel wieder. Alles Installierte bleibt und läuft weiter – nur Updates kommen dann nicht mehr von selbst.");
await R.clickOn({ text: "✦ Erweiterungen" }, 0.6);
await R.sleep(500);
await scrollPage("Shop-Verbindung", 110, 0.8);
await R.clickOn({ text: "Trennen", exact: true }, 0.5);
await R.hold(0.8);
await scrollPage("Pro-Erweiterungen", 160, 0.8);
await pointAt("Wetter draußen", 0.5, { exact: false, tags: "B" });
await sayOver("Installierte Packs und Pro-Erweiterungen werden nämlich lokal geprüft. Sie brauchen den Shop nicht – auch nicht, wenn er mal nicht erreichbar ist.");
await R.move(1160, 420, 1.2);
await sayOver("Ein Schlüssel gilt für bis zu drei Installationen gleichzeitig. Ziehst du auf neue Hardware um, verbindest du einfach die neue – die älteste fällt heraus.");
await scrollPage("Shop-Verbindung", 300, 0.8);
await R.moveTo("input.fp3d-shop-key", 0.6);
await sayOver("Bis zu fünf neue Verbindungen sind pro Jahr möglich. Meldet die Seite, dass das Limit erreicht ist, melde dich bei uns.");
await pointAt("Installations-Kennung", 0.5, { tags: "SPAN" });
await sayOver("Ist der Shop gerade ausgelastet, wartest du eine Minute und drückst noch mal „Aktivieren“.");
await R.moveTo({ text: "Aktivieren", exact: true }, 0.5);
await sayOver("Braucht eine Erweiterung eine neuere NeonPlan-Version, sagt die Seite das auch: dann zuerst NeonPlan 3D über HACS aktualisieren.");
await R.move(1160, 560, 1);
await sayOver("Und beim Komplett-Backup sind deine Packs mit drin, der Schlüssel nicht. Mehr dazu in der Folge über Sicherung und Umzug.");
await R.move(1300, 700, 1);

// ---------------------------------------------------------------- 12. Outro
await chapter("Zusammenfassung");
await catchUp();
await R.clickOn({ text: "3D", exact: true }, 0.6);
await R.sleep(1200);
await R.hideCursor();
{
  const a = { theta: -0.9, phi: 1.0, radius: 38, target: [6.8, 3.0, 4.6] };
  const b = { theta: 0.3, phi: 0.92, radius: 33, target: [6.8, 2.8, 4.6] };
  await cam(a);
  await R.sleep(600);
  let end = await line("Kurz zusammengefasst: Alles Grundlegende ist kostenlos. Packs und Pro-Erweiterungen installierst du unter „Erweiterungen“ – per Schlüssel oder per Datei.");
  const t0 = R.time;
  const total = N.length("Kurz zusammengefasst: Alles Grundlegende ist kostenlos. Packs und Pro-Erweiterungen installierst du unter „Erweiterungen“ – per Schlüssel oder per Datei.") + N.length("Was du einmal installiert hast, bleibt – auch ohne Shop und ohne Internet.");
  await live(end, a, mix(a, b, (end - t0) / total));
  const k = (end - t0) / total;
  end = await line("Was du einmal installiert hast, bleibt – auch ohne Shop und ohne Internet.");
  await live(end, mix(a, b, k), b);
}
await R.title("Nächste Folge: Geräte, Lampen und Kameras", `NeonPlan 3D – läuft auch auf alten Wandtablets${VERSION}`);
{
  let end = await line("In der nächsten Folge geht es um Geräte, Lampen und Kameras.");
  await live(end);
  end = await line("Links zur Online-Demo und zur Anleitung stehen in der Beschreibung. Und NeonPlan 3D läuft auch auf alten Wandtablets. Bis zum nächsten Mal!");
  await live(end + 0.6);
}

N.report();
const result = await R.finish();
console.log(`recorded ${result.frames} frames, ${result.duration.toFixed(1)} s → ${out}`);
