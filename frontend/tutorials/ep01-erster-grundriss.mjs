// Tutorial episode 1 – "Dein erster Grundriss": teaser, a floor, a floor-plan picture as template (short, episode 2
// shows it in full), rooms drawn over it, linking the rooms to their Home Assistant areas, an open kitchen, doors and
// windows, a second floor, the 3D view with live room values.
// Drives the preview with invented demo data (its areas: Wohnzimmer, Küche, Flur, Bad, Schlafzimmer, Kinderzimmer,
// Arbeitszimmer …); the floor-plan picture is invented too (tutorials/assets/make-plan.py).
// Usage (from frontend/): node tutorials/ep01-erster-grundriss.mjs <out-dir> [<voice-dir de> [<voice-dir en>]]
//   (voice dirs: private/tutorial-audio/ep01/de and …/en; a line then lasts the longer of both plus 0.3 s)
// Then: python ../tools/make-tutorial.py <out-dir> <out.mp4>

import { join } from "node:path";
import { appVersion, narration, startRecorder } from "./recorder.mjs";

const out = process.argv[2] ?? "tutorial-ep01";
const R = await startRecorder({ outDir: out, width: 1920, height: 1080, lang: "de" });
const N = narration(R, process.argv.slice(3));
const { say, sayOver, chapter, catchUp } = N;
/** sayOver that returns the time the line ends (to start the next steps just before it). */
const sayOverEnd = async (text) => {
  await sayOver(text);
  return R.time + N.length(text);
};
const holdUntil = async (t) => {
  if (t - R.time > 0.02) await R.hold(t - R.time);
};
const PLAN = join(import.meta.dirname, "assets", "bauplan-eg.png");
// record from a snapshot (TUTORIAL_ROOT, see SERIES.md); the version line goes on the title and outro cards
const VERSION = `<br><span style="font-size:20px;opacity:.7">aufgenommen mit NeonPlan 3D ${appVersion()}</span>`;

const rect = async (x0, z0, x1, z1, seconds = 1) => {
  await R.clickOn({ text: "Rechteck", exact: true }, 0.45);
  const a = await R.planPoint(x0, z0);
  const b = await R.planPoint(x1, z1);
  await R.move(a.x, a.y, 0.5);
  await R.drag(b.x, b.y, seconds);
};
/** Type over the value of a form field. */
const fill = async (label, value) => {
  await R.clickOn({ label }, 0.5);
  await R.page.keyboard.down("Control");
  await R.page.keyboard.press("a");
  await R.page.keyboard.up("Control");
  await R.type(value, 0.06);
  await R.key("Enter");
};
const tapPlan = async (x, z, seconds = 0.5) => {
  const p = await R.planPoint(x, z);
  await R.move(p.x, p.y, seconds);
  await R.click();
};
const pointPlan = async (x, z, seconds = 0.5) => {
  const p = await R.planPoint(x, z);
  await R.move(p.x, p.y, seconds);
};
/** Back to the floor (a fresh room form: the area field then shows the right value). */
const back = async (seconds = 0.5) => {
  await R.clickOn({ text: "Zurück zur Etage" }, seconds);
};
/** Back to the floor, tap a room in the plan and link it to a Home Assistant area. */
const link = async (x, z, area, seconds = 0.5) => {
  await back(seconds);
  await tapPlan(x, z, seconds);
  await R.pickOption("Bereich", area, seconds);
};
const opening = async (x, z) => {
  await R.clickOn({ text: "Tür & Fenster", exact: true }, 0.5);
  await tapPlan(x, z, 0.55);
};
/** Park the cursor on the side panel's edge (no field under it) and scroll a section into view. */
const scrollSide = async (text, top, seconds = 0.7) => {
  await R.move(1607, 640, 0.4);
  await R.scrollTo(text, top, seconds);
};

// ---------------------------------------------------------------- 0. Teaser: the finished house, live
await chapter("Teaser");
await R.open("");
await R.hideCursor();
await R.clickOn({ text: "Editor", exact: true }, 0.01);
await R.editor("e.fit();");
await R.sleep(600);
await R.clickOn({ text: "3D", exact: true }, 0.01);
await R.sleep(600);
await R.clickOn({ text: "Alle Etagen", exact: true }, 0.01);
await R.clickOn({ text: "Gestapelt", exact: true }, 0.01);
await R.sleep(1500);
const A = { theta: 0.9, phi: 0.95, radius: 26 };
const B = { theta: 2.2, phi: 0.8, radius: 23 };
const C = { theta: 3.0, phi: 0.65, radius: 25 };
await R.view(A);
await R.sleep(800);
await R.title("Dein erster Grundriss", `NeonPlan 3D · Folge 1${VERSION}`);
await sayOver("Das ist dein Zuhause in 3D – live aus Home Assistant: Lichter, Fenster, Temperaturen, alles in Echtzeit.");
await R.glide(A, B, 5);
await R.untitle();
await sayOver("Und es läuft sogar auf alten Wandtablets. Heute zeichnen wir zusammen deinen ersten Grundriss.");
await R.glide(B, C, 5);

// ---------------------------------------------------------------- 1. Intro
await chapter("Was wir heute bauen");
await R.open("empty");
await R.clickOn({ text: "Editor", exact: true }, 0.01);
await R.sleep(500);
await R.hideCursor(false);
await sayOver("Wir legen eine Etage an, zeichnen fünf Räume und verbinden sie mit Home Assistant.");
await R.move(800, 550, 0.6);
await R.hold(0.6);
await sayOver("Dazu Türen, Fenster, eine offene Küche, ein Obergeschoss – und am Ende alles in 3D.");
await R.moveTo({ text: "3D", exact: true }, 0.6);
await R.hold(0.8);
await sayOver("Oben ist die Werkzeugleiste, in der Mitte die Zeichenfläche,");
await R.moveTo({ text: "Rechteck", exact: true }, 0.6);
await R.hold(0.6);
await R.move(800, 550, 0.6);
await sayOver("und rechts die Seitenleiste: Sie zeigt immer die Einstellungen zu dem, was du gerade ausgewählt hast.");
await R.moveTo({ text: "Etage hinzufügen" }, 0.6);

// ---------------------------------------------------------------- 2. A floor
await chapter("Eine Etage anlegen");
await sayOver("Als Erstes brauchen wir eine Etage: Klick rechts auf „Etage hinzufügen“.");
await R.clickOn({ text: "Etage hinzufügen" }, 0.4);
await R.hold(0.5);
await sayOver("Hier stehen die Etagen aus deinem Home Assistant. Ich nehme das Erdgeschoss.");
await R.hold(1.6);
await R.clickOn({ text: "Erdgeschoss", nth: 0 }, 0.5);
await sayOver("Rechts siehst du jetzt den Namen, die „Höhe über Boden“ – beim Erdgeschoss null –");
await R.moveTo({ label: "Name" }, 0.5);
await R.hold(0.6);
await R.moveTo({ label: "Höhe über Boden" }, 0.5);
await sayOver("und die „Raumhöhe“: zweieinhalb Meter. So hoch werden die Wände in 3D.");
await R.moveTo({ label: "Raumhöhe" }, 0.5);
await sayOver("Darunter: Die Etage ist schon mit dem Erdgeschoss in Home Assistant verknüpft.");
await R.moveTo({ label: "Etage in Home Assistant" }, 0.5);
await sayOver("Tipp: Dieser Knopf legt für jeden Bereich einen Raum an. Ich zeichne heute selbst – dann stimmen die Größen gleich.");
await R.moveTo({ text: "Räume aus HA-Bereichen anlegen" }, 0.5);

// ---------------------------------------------------------------- 3. A floor-plan picture as template (short)
await chapter("Bauplan als Vorlage");
await sayOver("Hast du einen Bauplan als Bild? Dann leg ihn einfach unter die Zeichenfläche. Ganz unten rechts unter „Vorlage“");
await R.move(1607, 640, 0.4);
await R.scrollTo("Vorlage (Grundriss-Bild)", 900, 0.7);
await R.clickOn({ text: "Vorlage (Grundriss-Bild)" }, 0.5);
await sayOver("klickst du auf „Bild wählen“ und suchst deinen Plan aus.");
{
  const [chooser] = await Promise.all([R.page.waitForFileChooser(), R.clickOn({ text: "Bild wählen" }, 0.5)]);
  await R.hold(0.8);
  await chooser.accept([PLAN]);
  await R.sleep(1200);
  await R.frame(1 / 25, 200);
}
await sayOver("Schon liegt er unter dem Raster. Mit „Verschieben, skalieren und drehen“ bekommt das Bild Griffe,");
await R.hold(0.8);
await R.move(1607, 640, 0.4);
await R.scrollTo("Verschieben, skalieren und drehen", 500, 0.6);
await R.clickOn({ text: "Verschieben, skalieren und drehen" }, 0.5);
await catchUp();
await sayOver("und ich schiebe es so hin, dass die Ecke des Hauses auf dem Nullpunkt liegt.");
{
  const a = await R.planPoint(5, 4);
  const b = await R.planPoint(3.5, 2.5);
  await R.move(a.x, a.y, 0.6);
  await R.drag(b.x, b.y, 1.4);
}
// the drag lands within a centimetre; lay the picture exactly (invisible)
await R.editor("e.updateFloor({ background: { ...e.floor.background, x: -1.5, z: -1.5 } });");
await sayOver("„Fertig“ – jetzt liegt es fest. Wie du den Maßstab genau triffst, zeige ich dir ausführlich in Folge zwei.");
await R.clickOn({ text: "Fertig", exact: true }, 0.5);
await R.move(1607, 640, 0.4);
await R.scrollTo("Name", 122, 0.6);

// ---------------------------------------------------------------- 4. Rooms
await chapter("Räume zeichnen");
await sayOver("Jetzt zeichnen wir einfach nach. Oben auf „Rechteck“, dann mit gedrückter Maustaste von Ecke zu Ecke.");
await rect(0, 0, 6, 4, 1.3);
await sayOver("Die Maße stehen gleich an den Wänden. Vier Meter Tiefe sind zu wenig – rechts bei „Tiefe“ tippe ich 4,5 ein.");
await R.hold(1.4);
await fill("Tiefe", "4,5");
await sayOver("Du kannst auch mit „Auswählen“ an den Ecken ziehen. Und jeden Schritt nimmt Strg+Z wieder zurück.");
await pointPlan(6, 4.5, 0.6);
await R.hold(1.4);
await R.moveTo({ text: "Rückgängig", exact: true }, 0.6);
await sayOver("Der nächste Raum setzt direkt an: Die Ecken rasten ein, und die gemeinsame Kante wird automatisch zur Innenwand.");
await rect(6, 0, 9.5, 4.5, 1.1);
await sayOver("Genauso zeichne ich darunter Flur, Bad und Schlafzimmer – immer an den Wänden der Vorlage entlang.");
await rect(0, 4.5, 3, 7.5, 0.7);
await rect(3, 4.5, 6, 7.5, 0.7);
await sayOver("Die Räume heißen noch „Raum 1“ bis „Raum 5“. Für L-förmige Räume gibt es übrigens „Freie Form“.");
await rect(6, 4.5, 9.5, 7.5, 0.7);
await R.moveTo({ text: "Freie Form", exact: true }, 0.6);

// ---------------------------------------------------------------- 5. Link the rooms to Home Assistant areas
await chapter("Räume mit Home Assistant verbinden");
await sayOver("Jetzt der wichtigste Schritt: Jeder Raum bekommt seinen Bereich aus Home Assistant.");
await tapPlan(3, 1.6, 0.6);
await sayOver("Darüber weiß NeonPlan, welche Lichter, Sensoren und Rollläden in welchem Raum sind. Noch steht hier „Kein Bereich“,");
await R.moveTo({ label: "Bereich" }, 0.6);
await R.hold(1.6);
{
  const end = await sayOverEnd("und unten bei „Geräte“ nur ein Hinweis.");
  await scrollSide("Geräte", 300, 0.6);
  await R.moveTo({ text: "Dieser Bereich" }, 0.5);
  // scroll back while the line ends, so the next one follows without a pause
  await holdUntil(end - 0.9);
  await scrollSide("Raum", 140, 0.6);
}
await sayOver("Also: auf „Bereich“ klicken und das Wohnzimmer wählen.");
await R.pickOption("Bereich", "Wohnzimmer", 0.6);
await sayOver("Schon heißt der Raum Wohnzimmer: Ohne eigenen Namen übernimmt er den Namen des Bereichs.");
await pointPlan(3, 2.4, 0.6);
await R.hold(1);
await R.moveTo({ label: "Name" }, 0.6);
await sayOver("Und bei den Geräten stehen jetzt zwölf Geräte aus dem Wohnzimmer – Lichter, Rollladen, Heizung, Fernseher und Sensoren.");
await scrollSide("Geräte", 200, 0.6);
await R.moveTo({ text: "Dieser Bereich" }, 0.5);
{
  const end = await sayOverEnd("Unter „Raumklima“ siehst du, woher die Temperatur kommt: „Automatisch“ nimmt die Sensoren aus dem Bereich.");
  await scrollSide("Raumklima", 330, 0.6);
  await R.clickOn({ text: "Raumklima" }, 0.5);
  await holdUntil(end - 0.9);
  await scrollSide("Raum", 140, 0.6);
}
await sayOver("Die anderen Räume gehen schnell: „Zurück zur Etage“, Raum antippen, Bereich wählen. Raum 2 wird die Küche.");
await link(7.75, 1.6, "Küche", 0.55);
await sayOver("Raum 3 wird der Flur, Raum 4 das Bad und Raum 5 das Schlafzimmer.");
await link(1.5, 6.6, "Flur", 0.4);
await sayOver("In der Liste stehen alle Bereiche aus deinem Home Assistant – auch die fürs Obergeschoss.");
await link(4.5, 6.6, "Bad", 0.4);
await sayOver("Fehlt dir ein Bereich, legst du ihn in Home Assistant unter Einstellungen an. Danach steht er hier in der Liste.");
await link(7.75, 6.6, "Schlafzimmer", 0.4);
await back(0.5);
await pointPlan(4.75, 4.5, 0.6);

// ---------------------------------------------------------------- 6. Walls: an open kitchen
await chapter("Wände ändern: offene Küche");
await sayOver("Jetzt eine offene Küche. Ich klicke ins Wohnzimmer. Rechts unter „Wandhöhen“ steht jede Wand – benannt nach den Ecknummern im Plan.");
await tapPlan(3, 1.6, 0.6);
await R.hold(1.2);
await R.moveTo({ text: "Keine Wand", nth: 1 }, 0.6);
await catchUp();
await sayOver("Die Wand zur Küche ist „Wand 2–3“. Ein Klick auf „Keine Wand“ – und sie ist weg.");
await R.hold(1.6);
await R.click();
await sayOver("In Home Assistant bleiben es zwei Bereiche. Der Pfeil daneben holt die Wand zurück – und eine niedrige Wand wird zur Theke.");
await pointPlan(6, 2.25, 0.6);

// ---------------------------------------------------------------- 7. Doors and windows
await chapter("Türen und Fenster");
await sayOver("Weiter mit Türen: oben „Tür & Fenster“, dann auf die Wand – hier vom Flur ins Wohnzimmer.");
await R.hold(0.6);
await opening(1.5, 4.5);
await sayOver("Rechts wählst du die Art: Tür, Fenster, Terrassentür und mehr. Darunter Breite und Höhe.");
await R.moveTo({ text: "Terrassentür", exact: true }, 0.6);
await R.hold(1.4);
await R.moveTo({ label: "Breite" }, 0.6);
await sayOver("Geht die Tür falsch herum auf, hilft „Anschlag wechseln“.");
await R.clickOn({ text: "Anschlag wechseln" }, 0.6);
await sayOver("Noch eine Tür ins Bad, und eine in die Außenwand vom Flur.");
await opening(3, 6);
await opening(1.5, 7.5);
await sayOver("In der Außenwand macht NeonPlan daraus automatisch eine Haustür.");
await R.moveTo({ label: "Stil" }, 0.6);
await sayOver("Jetzt die Fenster: wieder „Tür & Fenster“, auf die Außenwand, und rechts auf „Fenster“.");
await opening(3, 0);
await R.clickOn({ text: "Fenster", exact: true }, 0.6);
await sayOver("Und eins für die Küche.");
await opening(7.75, 0);
await sayOver("Kontakte und Rollläden sucht sich NeonPlan selbst aus dem Bereich des Raums – noch ein Grund für die Verknüpfung.");
await R.clickOn({ text: "Fenster", exact: true }, 0.6);
await pointPlan(7.75, 0, 0.6);

// ---------------------------------------------------------------- 8. A second floor
await chapter("Zweite Etage");
await sayOver("Jetzt das Obergeschoss: zurück zur Etage und noch einmal „Etage hinzufügen“.");
// back up to the floor (from the window to its room, from the room to the floor)
for (let i = 0; i < 3; i++) {
  const up = await R.locate({ text: "Zurück zu" }).catch(() => null);
  if (!up) break;
  await R.clickOn({ text: "Zurück zu" }, 0.5);
}
await R.clickOn({ text: "Etage hinzufügen" }, 0.5);
await R.clickOn({ text: "Obergeschoss", nth: 0 }, 0.5);
await sayOver("Es liegt automatisch über dem Erdgeschoss: 2,75 Meter – Raumhöhe plus Decke. Das Erdgeschoss siehst du gestrichelt darunter.");
await R.moveTo({ label: "Höhe über Boden" }, 0.6);
await R.hold(2);
await pointPlan(6, 4.5, 0.6);
await sayOver("Hier zeichne ich zwei Räume und wähle gleich den Bereich: zuerst das Kinderzimmer,");
await rect(0, 0, 4.5, 7.5, 0.9);
await R.pickOption("Bereich", "Kinderzimmer", 0.5);
await sayOver("und daneben das Arbeitszimmer. Die Ecken rasten wieder von selbst ein.");
await back(0.5);
await rect(4.5, 0, 9.5, 7.5, 0.9);
await sayOver("Gespeichert wird von selbst – oben rechts steht „Gespeichert“.");
await R.pickOption("Bereich", "Arbeitszimmer", 0.5);
await R.move(1830, 34, 0.6);

// ---------------------------------------------------------------- 9. 3D
await chapter("Alles in 3D");
await sayOver("Und jetzt der schönste Moment: oben auf „3D“.");
await R.clickOn({ text: "3D", exact: true }, 0.6);
await R.sleep(800);
await R.clickOn({ text: "Alle Etagen", exact: true }, 0.5);
await catchUp();
await R.hideCursor();
const D = { theta: 0.8, phi: 0.95, radius: 18 };
const E = { theta: 2.0, phi: 0.75, radius: 16 };
await R.view(D);
await sayOver("Da ist dein Haus – zwei Etagen, Türen, Fenster und die offene Küche. Drehen und zoomen geht mit der Maus oder dem Finger.");
await R.glide(D, E, 6.5);
await R.hideCursor(false);
await sayOver("Weil die Räume verbunden sind, ist schon Leben drin: Erdgeschoss öffnen und unten auf „Werte“.");
await R.clickOn({ text: "Erdgeschoss", exact: true }, 0.6);
await R.hold(1);
await R.clickOn({ text: "Werte", exact: true }, 0.6);
await catchUp();
await sayOver("An jedem Raum stehen Temperatur und Luftfeuchtigkeit, live aus Home Assistant. Und die zwei Fenster leuchten, weil sie in der Demo offen sind –");
await R.hideCursor();
await sayOver("ganz ohne ein einziges Gerät zu platzieren.");

// ---------------------------------------------------------------- 10. Outro
await chapter("Wie geht es weiter");
await R.title("Nächste Folge: Bauplan als Vorlage", `NeonPlan 3D – läuft auch auf alten Wandtablets${VERSION}`);
await say("Das war dein erster Grundriss. In Folge zwei geht es ausführlich um den Bauplan als Vorlage, danach um Geräte, Lampen und Möbel.");
await say("Links zur Online-Demo und zur Anleitung findest du in der Beschreibung. Und NeonPlan läuft auch auf alten Wandtablets. Bis zum nächsten Mal!");
await R.hold(0.6);

N.report();
const result = await R.finish();
console.log(`recorded ${result.frames} frames, ${result.duration.toFixed(1)} s → ${out}`);
