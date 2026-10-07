// Tutorial episode 2, part 3 – "Fenster, Sensoren und Rollläden": the windows of the traced house (episode 2,
// parts 1 and 2) – two-leaf window, window with bars, a high bathroom window, a two-leaf terrace door, a glass wall –
// sill, styles, the automatic and the hand-picked contacts per leaf, the sensor kinds (contact, handle sensor,
// contact + tilt sensor, tilt angle sensor), blinds with a live position sensor, and everything live in 3D.
// The handle sensor, the tilt angle sensor, the blind level sensor and the bathroom door contact are added to the
// demo's mock Home Assistant at runtime (invented, like the rest of the demo).
// Usage (from frontend/): node tutorials/ep02c-fenster-sensoren.mjs <out-dir> [<voice-dir with durations.json>]
// Then: python ../tools/make-tutorial.py <out-dir> <out.mp4>

import { narration, startRecorder } from "./recorder.mjs";
import { VERSION, fastMode, helpers, traceHouse } from "./ep02-common.mjs";

const out = process.argv[2] ?? "tutorial-ep02c";
const R = await startRecorder({ outDir: out, width: 1920, height: 1080, lang: "de" });
fastMode(R);
const N = narration(R, process.argv[3]);
const { say, sayOver, chapter, catchUp } = N;
const H = helpers(R);
const { fill, tapPlan, pointPlan, scrollSide, pickEntity, pickerMove, view3d, glide3d, setState } = H;

const ENTITIES = [
  ["binary_sensor.bad_tuer", "bad", "off", { friendly_name: "Bad Tür", device_class: "door" }],
  ["sensor.schlafzimmer_fenstergriff", "schlafzimmer", "closed", { friendly_name: "Schlafzimmer Fenstergriff" }],
  ["sensor.schlafzimmer_kippwinkel", "schlafzimmer", "0", { friendly_name: "Schlafzimmer Kippwinkel", unit_of_measurement: "°" }],
  ["sensor.wohnzimmer_rollladen_level", "wohnzimmer", "70", { friendly_name: "Wohnzimmer Rollladen Level", unit_of_measurement: "%" }],
];
/** Camera views of the 3D half (plan metres as target). */
const V = {
  over: { theta: 0.3, phi: 0.95, radius: 20, target: { x: 7, y: 0.75, z: 4.25 } },
  wtop: { theta: 0.05, phi: 0.95, radius: 7, target: { x: 5.5, y: 1.3, z: 0.4 } },
  kueche: { theta: 0.1, phi: 0.95, radius: 7, target: { x: 12, y: 1.3, z: 0.4 } },
  badwin: { theta: 3.05, phi: 0.95, radius: 6, target: { x: 9, y: 1.4, z: 8.1 } },
  terr: { theta: 3.0, phi: 0.95, radius: 7.5, target: { x: 5.5, y: 1.1, z: 8.1 } },
  glas: { theta: 1.5, phi: 0.95, radius: 7, target: { x: 3.9, y: 1.2, z: 7.25 } },
  schlaf: { theta: 3.1, phi: 0.95, radius: 6, target: { x: 12.25, y: 1.3, z: 8.1 } },
};
let cam = V.over;
const look = async (to, seconds = 1.2) => {
  await glide3d(cam, to, seconds);
  cam = to;
};
const tool = () => R.clickOn({ text: "Tür & Fenster", exact: true }, 0.5);
/** Move a blind (cover, or the number of a level sensor) in steps, so 3D shows it travelling. */
const travel = async (id, from, to, seconds, sensor = false) => {
  const n = Math.max(2, Math.round(seconds * 5));
  for (let i = 1; i <= n; i++) {
    const pos = Math.round(from + ((to - from) * i) / n);
    if (sensor) await setState(id, String(pos));
    else await setState(id, pos > 0 ? "open" : "closed", { current_position: pos });
    await R.hold(seconds / n);
  }
};

// ---------------------------------------------------------------- 0. Teaser
await chapter("Teaser");
await R.open("empty");
await R.hideCursor();
await traceHouse(R, { walls: true, openings: true });
await R.clickOn({ text: "3D", exact: true }, 0.01);
await R.sleep(2500);
const A = { theta: -0.2, phi: 0.85, radius: 19 };
const B = { theta: 0.5, phi: 0.9, radius: 20 };
await setState("binary_sensor.kueche_fenster", "off");
await R.view(A);
await R.sleep(1200);
await R.title("Bauplan als Vorlage – Teil 3", `NeonPlan 3D · Folge 2 · Fenster, Sensoren und Rollläden${VERSION}`);
await sayOver("Fenster, die live aufgehen und kippen, Rollläden, die mitfahren – heute kommen die Fenster dazu.");
await R.glide(A, { theta: 0.1, phi: 0.87, radius: 19.5 }, 2.5);
await setState("binary_sensor.kueche_fenster", "on");
await travel("cover.kueche", 40, 100, 1.5);
await R.untitle();
await sayOver("Mit jedem Fensterstil, jeder Sensor-Art und dem Rollladen-Positionssensor.");
await R.glide({ theta: 0.1, phi: 0.87, radius: 19.5 }, B, 3.5);

// ---------------------------------------------------------------- 1. Intro
await chapter("Was wir heute machen");
await R.open("empty");
await traceHouse(R, { walls: true, openings: "doors" });
await H.addEntities(ENTITIES);
// the bathroom door as part 2 left it (starting state)
await H.editorEval(
  `e.change((doc, f) => { const d = f.openings.find((o) => o.room_id === "flur" && o.edge === 2 && o.offset === 5.5); if (d) Object.assign(d, { contact: "binary_sensor.bad_tuer", mark: "closed" }); });`,
);
await R.clickOn({ text: "3D daneben", exact: true }, 0.01);
await R.sleep(1500);
await H.view2d(58, 25, 330);
await R.clickOn({ text: "Wände hoch", exact: true }, 0.01);
await view3d(V.over);
await R.sleep(1200);
await R.hideCursor(false);
await R.move(700, 560, 0.01);
await sayOver("Teil 3: Die Türen sind drin – jetzt kommen die Fenster, mit Kontakten, Griff- und Kippsensoren und Rollläden.");
await R.hold(0.8);
await pointPlan(5.5, 0, 0.6);
await sayOver("Rechts läuft wieder „3D daneben“ mit, und wie in Teil 2 kommen Kontakte und Rollläden aus dem Bereich des Raums.");
await R.move(1240, 520, 0.6);

// ---------------------------------------------------------------- 2. Windows
await chapter("Fenster einsetzen");
await sayOver("„Tür & Fenster“ und auf die Außenwand vom Wohnzimmer. Zuerst wird daraus eine Haustür – also oben „Fenster 2-flügelig“.");
await tool();
await tapPlan(5.5, 0, 0.7);
await H.sideTop();
await R.hold(0.4);
await R.clickOn({ text: "Fenster 2-flügelig", exact: true }, 0.5);
await look(V.wtop, 1.3);
await sayOver("Fenster haben zusätzlich die „Brüstung“: die Höhe der Unterkante über dem Boden. Dazu „Breite“, „Mitte ab Ecke“ und „Höhe“ wie bei den Türen.");
await R.moveTo({ label: "Brüstung" }, 0.5);
await R.hold(0.8);
await R.moveTo({ label: "Breite" }, 0.5);
await R.moveTo({ label: "Höhe" }, 0.5);
await sayOver("Unter „Stil“: Standard, mit Sprossen oder eine feststehende Glaswand.");
await R.pickOption("Stil", "Standard", 0.5);
await sayOver("Der „Rollladen“ ist schon gefunden: „Automatisch (Wohnzimmer Rollladen)“. Bei zwei Flügeln hat jeder Flügel eigene Sensoren – Hauptflügel und zweiter Flügel.");
await scrollSide(() => H.pickerBox("Rollladen"), 380, 0.6);
await pickerMove("Rollladen", 0.5);
await R.hold(0.6);
await pickerMove("Kontakt", 0.5, 0);
await R.hold(0.4);
await pickerMove("Kontakt", 0.5, 1);
await sayOver("Beim Kontakt steht „Automatisch (Terrassentür)“ – der erste Kontakt aus dem Wohnzimmer. Dieses Fenster hat aber keinen: „Keiner“.");
await pickerMove("Kontakt", 0.5, 0);
await R.hold(1.2);
await pickEntity("Kontakt", "", "Keiner", 0.4, 0);
await sayOver("Die Küche bekommt ein Fenster mit Sprossen: auf die Wand, oben „Fenster“, Stil „Mit Sprossen“.");
await tool();
await tapPlan(12, 0, 0.7);
await H.sideTop();
await R.clickOn({ text: "Fenster", exact: true }, 0.5);
await look(V.kueche, 1.2);
await R.pickOption("Stil", "Mit Sprossen", 0.5);
await sayOver("Kontakt und Rollladen findet NeonPlan im Bereich Küche von selbst. Das Fenster ist in der Demo offen – es steht in 3D auf und leuchtet warm.");
await scrollSide(() => H.pickerBox("Rollladen"), 380, 0.5);
await pickerMove("Rollladen", 0.5);
await R.hold(0.5);
await pickerMove("Kontakt", 0.5);
await R.hold(0.6);
await sayOver("Im Bad sitzt das Fenster höher: 80 Zentimeter breit, Brüstung 1,3 Meter, Höhe 0,8.");
await tool();
await tapPlan(9, 8.5, 0.7);
await H.sideTop();
await look(V.badwin, 1.2);
await fill("Breite", "0,8");
await fill("Brüstung", "1,3");
await fill("Höhe", "0,8");
await sayOver("Zur Terrasse kommt eine zweiflügelige Terrassentür – im Grunde ein Fenster mit Brüstung null.");
await tool();
await tapPlan(5.5, 8.5, 0.7);
await H.sideTop();
await R.clickOn({ text: "Terrassentür 2-flügelig", exact: true }, 0.5);
await look(V.terr, 1.2);
await R.moveTo({ label: "Brüstung" }, 0.5);
await sayOver("Ihre Kontakte wähle ich von Hand: Der Hauptflügel bekommt „Terrassentür“, der zweite Flügel den „Standflügel“.");
await scrollSide(() => H.pickerBox("Rollladen"), 330, 0.5);
await pickEntity("Kontakt", "Terrasse", "Terrassentür ·", 0.5, 0);
await pickEntity("Kontakt", "Stand", "Terrassentür Standflügel", 0.5, 1);
await sayOver("Jetzt geht in 3D der Hauptflügel auf – und mit dem zweiten Kontakt auch der Standflügel.");
await R.hold(1);
await setState("binary_sensor.wohnzimmer_terrasse_2", "on");
await R.hold(1.6);
await setState("binary_sensor.wohnzimmer_terrasse_2", "off");
await sayOver("Und links die Glaswand: auf die Wand, oben „Glaswand“. Feststehend, raumhoch, ohne Flügel – Breite und Höhe stellst du frei ein.");
await tool();
await tapPlan(3.5, 7.25, 0.7);
await H.sideTop();
await R.clickOn({ text: "Glaswand", exact: true }, 0.5);
await look(V.glas, 1.2);
await R.moveTo({ label: "Breite" }, 0.5);
await R.moveTo({ label: "Höhe" }, 0.5);

// ---------------------------------------------------------------- 3. Sensor kinds
await chapter("Sensor-Art: Kontakt, Griff, Kipp");
await sayOver("Jetzt das Schlafzimmer. Das Werkzeug hat sich die Glaswand gemerkt – also oben „Fenster“, Breite 1,40.");
await tool();
await tapPlan(12.25, 8.5, 0.7);
await H.sideTop();
await R.clickOn({ text: "Fenster", exact: true }, 0.5);
await look(V.schlaf, 1.2);
await fill("Breite", "1,4");
await sayOver("Wichtig ist die „Sensor-Art“. Ein Fensterkontakt meldet nur offen oder zu – das ist der Standard.");
await scrollSide({ label: "Sensor-Art" }, 420, 0.6);
await R.moveTo({ label: "Sensor-Art" }, 0.5);
await sayOver("Ein „Griff-Sensor“ meldet offen, gekippt und zu – etwa ein Homematic-Fenstergriff. Ich wähle „Schlafzimmer Fenstergriff“.");
await R.pickOption("Sensor-Art", "Griff-Sensor (offen/gekippt/zu)", 0.5);
await pickEntity("Griff-Sensor", "Griff", "Schlafzimmer Fenstergriff", 0.5);
await sayOver("Gekippt kippt der Flügel in 3D, offen geht er auf – und zu ist zu.");
await setState("sensor.schlafzimmer_fenstergriff", "tilted");
await R.hold(1.6);
await setState("sensor.schlafzimmer_fenstergriff", "open");
await R.hold(1.6);
await setState("sensor.schlafzimmer_fenstergriff", "closed");
await sayOver("Die dritte Art: „Kontakt + Kipp-Sensor“ – ein normaler Kontakt und ein zweiter Sensor, der nur „gekippt“ meldet.");
await R.pickOption("Sensor-Art", "Kontakt + Kipp-Sensor", 0.5);
await pickEntity("Kipp-Sensor", "gekippt", "Schlafzimmer Fenster gekippt", 0.5);
await R.hold(0.6);
await sayOver("Optional liefert ein „Kippwinkel-Sensor“ den Winkel in Grad. Dann kippt der Flügel genau so weit – mit Feldern für den Winkel „ganz gekippt“, einen Offset und die Zählrichtung.");
await pickEntity("Kippwinkel-Sensor", "Kippwinkel", "Schlafzimmer Kippwinkel", 0.5);
await setState("sensor.schlafzimmer_kippwinkel", "6");
await R.moveTo({ label: "Winkel für" }, 0.5);
await R.moveTo({ label: "Offset" }, 0.5);
await R.moveTo({ label: "Winkel zählt andersherum" }, 0.5);
await sayOver("Gekippt zählt übrigens auch für die Warnung „Fenster offen bei Regen“. Mit der Erweiterung „Wetter draußen“ siehst du den Regen dann auch am Haus.");
await setState("sensor.schlafzimmer_kippwinkel", "15");
await R.hold(1.2);

// ---------------------------------------------------------------- 4. Blinds
await chapter("Rollläden");
await sayOver("Zurück zum Wohnzimmerfenster: Der Rollladen fährt in 3D mit der Position aus Home Assistant.");
await tapPlan(5.5, 0, 0.7);
await look(V.wtop, 1.2);
await travel("cover.wohnzimmer", 70, 15, 2);
await sayOver("Meldet dein Rollladen die Position über einen eigenen Sensor – etwa Homematic „Level“ –, wählst du ihn unter „Positions-Sensor“. Dann fährt er auch während der Fahrt live.");
await scrollSide(() => H.pickerBox("Rollladen"), 380, 0.5);
await pickEntity("Positions-Sensor", "Level", "Wohnzimmer Rollladen Level", 0.5);
await travel("sensor.wohnzimmer_rollladen_level", 70, 25, 1.6, true);
await travel("sensor.wohnzimmer_rollladen_level", 25, 85, 1.6, true);
await sayOver("Zählt der Sensor andersherum, hilft „Sensor zählt umgekehrt“. Und „Vor dem Schalten nachfragen“ kennst du schon vom Garagentor.");
await R.moveTo({ label: "Sensor zählt umgekehrt" }, 0.5);
await R.hold(0.8);
await R.moveTo({ label: "Vor dem Schalten nachfragen" }, 0.5);
await sayOver("Auch vor Türen fährt ein Rollladen: Bei der Terrassentür heißt das Feld „Rollladen“, bei Haustür und Schiebetür „Antrieb“.");
await tapPlan(14, 4.75, 0.7);
await scrollSide(() => H.pickerBox("Antrieb"), 500, 0.5);
await pickerMove("Antrieb", 0.5);
await R.hold(0.8);

// ---------------------------------------------------------------- 5. Live in 3D
await chapter("Alles live in 3D");
await sayOver("Und jetzt das ganze Haus: oben auf „3D“.");
await R.clickOn({ text: "3D", exact: true }, 0.6);
await R.sleep(1500);
await catchUp();
await R.hideCursor();
const D = { theta: 0.15, phi: 0.9, radius: 20 };
const E = { theta: 0.9, phi: 0.8, radius: 18 };
await R.view(D);
await R.sleep(1000);
await sayOver("Offene Fenster und Türen leuchten warm, gekippte kippen, Rollläden und Garagentor fahren mit – alles live aus Home Assistant.");
await R.glide(D, { theta: 0.5, phi: 0.85, radius: 19 }, 3);
await setState("binary_sensor.haustuer", "on");
await travel("cover.garagentor", 60, 100, 1.5);
await sayOver("Und die Badtür leuchtet, solange sie zu ist – genau wie in Teil 2 eingestellt.");
await R.glide({ theta: 0.5, phi: 0.85, radius: 19 }, E, 4);

// ---------------------------------------------------------------- 6. Outro
await chapter("Wie geht es weiter");
await R.title("Nächste Folge: Etagen, Treppen und Keller", `NeonPlan 3D – läuft auch auf alten Wandtablets${VERSION}`);
await say("Das war Folge 2: Bauplan unterlegen, nachzeichnen, Wände, Türen und Fenster. In Folge 3 geht es um Etagen, Treppen und den Keller.");
await say("Links zur Online-Demo und zur Anleitung findest du in der Beschreibung. Und NeonPlan läuft auch auf alten Wandtablets. Bis zum nächsten Mal!");
await R.hold(0.6);

N.report();
const result = await R.finish();
console.log(`recorded ${result.frames} frames, ${result.duration.toFixed(1)} s → ${out}`);
