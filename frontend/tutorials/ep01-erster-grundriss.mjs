// Tutorial episode 1 – "Dein erster Grundriss in 10 Minuten": teaser, a floor, rooms, linking the rooms to their
// Home Assistant areas, an open kitchen, doors and windows, a second floor, the 3D view with live room values.
// Drives the preview with invented demo data (its areas: Wohnzimmer, Küche, Flur, Bad, Schlafzimmer, Kinderzimmer,
// Arbeitszimmer …).
// Usage (from frontend/): node tutorials/ep01-erster-grundriss.mjs <out-dir>
// Then: python ../tools/make-tutorial.py <out-dir> <out.mp4>

import { startRecorder } from "./recorder.mjs";

const out = process.argv[2] ?? "tutorial-ep01";
const R = await startRecorder({ outDir: out, width: 1920, height: 1080, lang: "de" });

/** Seconds it takes to say a line (about 2.4 words a second, a short pause after it). */
const spoken = (text) => text.split(/\s+/).length / 2.4 + 0.4;
let busyUntil = 0;
/** Wait until the line before is said in full. */
const catchUp = async () => {
  if (busyUntil > R.time + 0.05) await R.hold(busyUntil - R.time);
};
/** A narration line; the picture is held while it is said. */
const say = async (text) => {
  await catchUp();
  await R.say(text, spoken(text));
  busyUntil = R.time;
};
/** A narration line said while the next steps run (the next line waits for it). */
const sayOver = async (text) => {
  await catchUp();
  await R.say(text);
  busyUntil = R.time + spoken(text);
};
/** A chapter starts once the line before it is said. */
const chapter = async (title) => {
  await catchUp();
  R.chapter(title);
};
const rect = async (x0, z0, x1, z1) => {
  await R.clickOn({ text: "Rechteck", exact: true });
  const a = await R.planPoint(x0, z0);
  const b = await R.planPoint(x1, z1);
  await R.move(a.x, a.y, 0.7);
  await R.drag(b.x, b.y, 1.4);
};
/** Type over the value of a form field. */
const fill = async (label, value) => {
  await R.clickOn({ label });
  await R.page.keyboard.down("Control");
  await R.page.keyboard.press("a");
  await R.page.keyboard.up("Control");
  await R.type(value);
  await R.key("Enter");
};
const tapPlan = async (x, z, seconds = 0.6) => {
  const p = await R.planPoint(x, z);
  await R.move(p.x, p.y, seconds);
  await R.click();
};
/** Back to the floor (a fresh room form: the area field then shows the right value). */
const back = async () => {
  await R.clickOn({ text: "Zurück zur Etage" }, 0.7);
  await R.hold(0.2);
};
/** Back to the floor, tap a room in the plan and link it to a Home Assistant area. */
const link = async (x, z, area) => {
  await back();
  await tapPlan(x, z, 0.8);
  await R.hold(0.3);
  await R.pickOption("Bereich", area, 0.7);
  await R.hold(0.6);
};
const opening = async (x, z) => {
  await R.clickOn({ text: "Tür & Fenster", exact: true }, 0.8);
  await tapPlan(x, z, 0.9);
};
/** Park the cursor on the side panel's edge (no field under it) and scroll a section into view. */
const scrollSide = async (text, top) => {
  await R.move(1607, 640, 0.6);
  await R.scrollTo(text, top, 1.2);
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
await R.title("Dein erster Grundriss in 10 Minuten", "NeonPlan 3D · Folge 1");
await sayOver("Das hier ist dein Zuhause in 3D – live mit Home Assistant: Lichter, Fenster, Temperaturen, alles in Echtzeit.");
await R.glide(A, B, 6);
await R.untitle();
await sayOver("Und es läuft sogar auf einem alten Wandtablet. Heute zeichnen wir zusammen deinen ersten Grundriss.");
await R.glide(B, C, 6);
await R.hold(0.6);

// ---------------------------------------------------------------- 1. Intro
await chapter("Was wir heute bauen");
await R.open("empty");
await R.clickOn({ text: "Editor", exact: true }, 0.01);
await R.sleep(500);
await R.hideCursor(false);
await say(
  "In diesem Video zeige ich dir Schritt für Schritt, wie du deinen ersten Grundriss zeichnest: eine Etage, fünf Räume, eine offene Küche, Türen und Fenster, ein Obergeschoss – und am Ende alles in 3D.",
);
await say("Und wir verbinden jeden Raum mit seinem Bereich in Home Assistant – erst dadurch wird dein Plan lebendig. Du brauchst nur ungefähre Maße deiner Räume.");
await sayOver("Wir starten im Editor mit einem leeren Projekt. Oben ist die Werkzeugleiste,");
await R.moveTo({ text: "Rechteck", exact: true }, 1.2);
await R.hold(1.5);
await sayOver("in der Mitte die Zeichenfläche mit dem Raster,");
await R.move(800, 550, 1.2);
await R.hold(1);
await sayOver("und rechts die Seitenleiste. Sie zeigt immer die Einstellungen zu dem, was du gerade ausgewählt hast.");
await R.moveTo({ text: "Etage hinzufügen" }, 1.2);

// ---------------------------------------------------------------- 2. A floor
await chapter("Eine Etage anlegen");
await sayOver("Als Erstes brauchen wir eine Etage. Klick rechts auf „Etage hinzufügen“.");
await R.clickOn({ text: "Etage hinzufügen" }, 0.6);
await R.hold(0.8);
await say("NeonPlan zeigt dir die Etagen, die du in Home Assistant schon angelegt hast: Keller, Erdgeschoss, Obergeschoss und Dachgeschoss. Ich nehme das Erdgeschoss.");
await R.clickOn({ text: "Erdgeschoss", nth: 0 }, 0.8);
await R.hold(0.6);
await sayOver("Rechts stehen jetzt die Einstellungen der Etage. Oben der Name.");
await R.moveTo({ label: "Name" }, 0.8);
await R.hold(1.2);
await sayOver("Darunter die „Höhe über Boden“ – beim Erdgeschoss null.");
await R.moveTo({ label: "Höhe über Boden" }, 0.8);
await R.hold(1.2);
await sayOver("Weiter unten die „Raumhöhe“: zweieinhalb Meter. So hoch werden die Wände in 3D.");
await R.moveTo({ label: "Raumhöhe" }, 0.8);
await R.hold(1.5);
await sayOver("Darunter: Die Etage ist schon mit dem Erdgeschoss in Home Assistant verknüpft.");
await R.moveTo({ label: "Etage in Home Assistant" }, 0.8);
await R.hold(1.5);
await sayOver("Tipp: Dieser Knopf legt für jeden Bereich einen Raum an, den du dann an seinen Platz schiebst. Ich zeichne heute selbst – dann stimmen die Größen gleich.");
await R.moveTo({ text: "Räume aus HA-Bereichen anlegen" }, 0.8);

// ---------------------------------------------------------------- 3. Rooms
await chapter("Räume zeichnen");
await say("Klick oben auf „Rechteck“ und zieh den Raum mit gedrückter Maustaste auf – von einer Ecke zur gegenüberliegenden.");
await rect(0, 0, 6, 4);
await R.hold(0.6);
await say("Fertig ist der erste Raum. Die Maße stehen direkt an den Wänden: sechs Meter breit, vier Meter tief.");
await say("Eigentlich soll das Wohnzimmer viereinhalb Meter tief sein. Kein Problem: Rechts im Formular tippst du Breite und Tiefe genau ein.");
await fill("Tiefe", "4,5");
await R.hold(1);
await say("Alternativ ziehst du mit „Auswählen“ einfach an den Ecken – so entstehen auch schräge Wände. Und jeden Schritt nimmt Strg+Z wieder zurück.");
await sayOver("Der nächste Raum setzt direkt an. Die Ecken rasten an den anderen Räumen ein, und aus der gemeinsamen Kante wird automatisch eine Innenwand.");
await rect(6, 0, 9.5, 4.5);
await R.hold(0.8);
await sayOver("Genauso zeichne ich darunter noch drei Räume: Flur, Bad und Schlafzimmer.");
await rect(0, 4.5, 3, 7.5);
await rect(3, 4.5, 6, 7.5);
await rect(6, 4.5, 9.5, 7.5);
await R.hold(0.6);
await say(
  "Die Räume heißen noch „Raum 1“ bis „Raum 5“ – das ändern wir gleich über Home Assistant. Für L-förmige Räume gibt es übrigens „Freie Form“.",
);

// ---------------------------------------------------------------- 4. Link the rooms to Home Assistant areas
await chapter("Räume mit Home Assistant verbinden");
await say(
  "Jetzt der wichtigste Schritt: Wir verbinden jeden Raum mit seinem Bereich in Home Assistant. Dort gehört jedes Gerät zu einem Bereich. Darüber weiß NeonPlan, welche Lichter, Sensoren und Rollläden in welchem Raum sind.",
);
await sayOver("Klick dafür mit „Auswählen“ in den ersten Raum.");
await tapPlan(3, 1.6, 1);
await R.hold(1);
await sayOver("Rechts siehst du das Formular des Raums: ganz oben der Name, direkt darunter das Feld „Bereich“. Im Moment steht da „Kein Bereich“.");
await R.moveTo({ label: "Bereich" }, 0.9);
await R.hold(1);
await sayOver("Weiter unten bei „Geräte“ steht deshalb nur ein Hinweis: Verknüpfe den Raum mit einem Bereich.");
await scrollSide("Geräte", 300);
await R.moveTo({ text: "Dieser Bereich" }, 0.8);
await R.hold(1);
await catchUp();
await scrollSide("Raum", 140);
await sayOver("Also: Klick auf „Bereich“. Du siehst alle Bereiche aus deinem Home Assistant. Ich nehme das Wohnzimmer.");
await R.pickOption("Bereich", "Wohnzimmer", 0.9);
await R.hold(1);
await say(
  "Und schau: Der Raum heißt jetzt Wohnzimmer. Solange ein Raum keinen eigenen Namen hat, übernimmt NeonPlan den Namen des Bereichs. Einen anderen Namen tippst du oben bei „Name“ ein – die Verknüpfung bleibt.",
);
await sayOver("Jetzt noch einmal runter zu den Geräten.");
await scrollSide("Geräte", 200);
await R.moveTo({ text: "Dieser Bereich" }, 0.8);
await R.hold(0.6);
await say(
  "Da sind sie: Unter „Dieser Bereich“ stehen jetzt zwölf Geräte aus dem Wohnzimmer – Deckenlicht, Stehlampe, Rollladen, Heizung, Fernseher und Sensoren. Mit „Platzieren“ setzt du sie in einer späteren Folge an ihren Platz.",
);
await sayOver("Etwas weiter oben, unter „Raumklima“, siehst du, woher die Temperatur des Raums kommt.");
await scrollSide("Raumklima", 330);
await R.clickOn({ text: "Raumklima" }, 0.8);
await R.hold(1);
await say(
  "„Automatisch“ nimmt die Sensoren aus dem Bereich – hier Temperatur und Luftfeuchtigkeit vom Wohnzimmer. Meistens musst du hier nichts tun.",
);
await scrollSide("Raum", 140);
await sayOver("Die anderen Räume gehen schnell: „Zurück zur Etage“, Raum antippen, „Bereich“ wählen. Raum 2 wird die Küche,");
await link(7.75, 1.6, "Küche");
await sayOver("Raum 3 der Flur,");
await link(1.5, 6.6, "Flur");
await sayOver("Raum 4 das Bad");
await link(4.5, 6.6, "Bad");
await sayOver("und Raum 5 das Schlafzimmer.");
await link(7.75, 6.6, "Schlafzimmer");
await back();
await R.hold(0.4);
await say("Fertig: Alle fünf Räume sind mit Home Assistant verbunden und haben ihre Namen.");
await say(
  "Gibt es einen Bereich noch nicht, legst du ihn in Home Assistant an, unter Einstellungen bei den Bereichen, und ordnest ihm deine Geräte zu. Danach erscheint er hier in der Liste.",
);

// ---------------------------------------------------------------- 5. Walls: an open kitchen
await chapter("Wände ändern: offene Küche");
await say("Jetzt machen wir aus Wohnzimmer und Küche einen offenen Raum. Klick dafür ins Wohnzimmer.");
await tapPlan(3, 1.6, 0.9);
await R.hold(0.8);
await sayOver("Rechts im Kasten „Wandhöhen“ steht jede Wand des Raums – benannt nach den Ecknummern im Plan. Die Wand zur Küche ist „Wand 2–3“.");
await R.moveTo({ text: "Keine Wand", nth: 1 }, 1);
await R.hold(1.5);
await catchUp();
await sayOver("Bei ihr tippst du auf „Keine Wand“.");
await R.click();
await R.hold(1.2);
await say(
  "Schon ist die Wand weg – ein offener Raum, auch für das Licht in 3D. In Home Assistant bleiben es zwei Bereiche. Der Pfeil daneben holt die Wand zurück. Tipp: Hier kannst du eine Wand auch niedriger machen, etwa für eine Theke.",
);

// ---------------------------------------------------------------- 6. Doors and windows
await chapter("Türen und Fenster");
await say("Weiter mit Türen und Fenstern. Klick oben auf „Tür & Fenster“ und dann auf die Wand – hier die Tür vom Flur ins Wohnzimmer.");
await opening(1.5, 4.5);
await R.hold(1);
await sayOver("Rechts siehst du jetzt die Tür. Oben wählst du die Art: Tür, Haustür, Fenster, Terrassentür, Garagentor und mehr.");
await R.moveTo({ text: "Terrassentür", exact: true }, 1);
await R.hold(1.5);
await catchUp();
await sayOver("Darunter Breite und Höhe – eine normale Innentür ist neunzig Zentimeter breit.");
await R.moveTo({ label: "Breite" }, 0.8);
await R.hold(1.5);
await sayOver("Geht die Tür zur falschen Seite auf, hilft „Anschlag wechseln“ oder „Öffnungsrichtung umdrehen“.");
await R.clickOn({ text: "Anschlag wechseln" }, 0.9);
await R.hold(1.5);
await sayOver("Noch eine Tür vom Flur ins Bad,");
await opening(3, 6);
await R.hold(0.6);
await sayOver("und eine in die Außenwand vom Flur.");
await opening(1.5, 7.5);
await R.hold(0.6);
await sayOver("In einer Außenwand nimmt NeonPlan beim Stil automatisch eine Haustür – die passt hier also schon.");
await R.moveTo({ label: "Stil" }, 0.9);
await R.hold(1.5);
await sayOver("Jetzt ein Fenster fürs Wohnzimmer: wieder „Tür & Fenster“, und auf die Außenwand oben.");
await opening(3, 0);
await R.hold(0.6);
await say("Auch hier setzt NeonPlan erst einmal eine Tür. Ich will ein Fenster – also rechts auf „Fenster“.");
await R.clickOn({ text: "Fenster", exact: true }, 0.9);
await R.hold(0.8);
await sayOver("Und noch eins für die Küche.");
await opening(7.75, 0);
await R.clickOn({ text: "Fenster", exact: true }, 0.9);
await R.hold(0.8);
await say(
  "Mit „Auswählen“ schiebst du Türen und Fenster entlang der Wand. Und Kontakte und Rollläden sucht sich NeonPlan automatisch aus dem Bereich des Raums – noch ein Grund für die Verknüpfung.",
);

// ---------------------------------------------------------------- 7. A second floor
await chapter("Zweite Etage");
await sayOver("Jetzt das Obergeschoss: zurück zur Etage und noch einmal „Etage hinzufügen“.");
// back up to the floor (from the window to its room, from the room to the floor)
for (let i = 0; i < 3; i++) {
  const back = await R.locate({ text: "Zurück zu" }).catch(() => null);
  if (!back) break;
  await R.clickOn({ text: "Zurück zu" }, 0.7);
}
await R.clickOn({ text: "Etage hinzufügen" }, 0.9);
await R.clickOn({ text: "Obergeschoss", nth: 0 }, 0.8);
await R.hold(0.6);
await sayOver("Die neue Etage liegt automatisch über dem Erdgeschoss: Die „Höhe über Boden“ ist 2,75 Meter – Raumhöhe plus Decke.");
await R.moveTo({ label: "Höhe über Boden" }, 0.9);
await R.hold(1.5);
await say("Das Erdgeschoss siehst du gestrichelt darunter. So triffst du die Wände genau.");
await sayOver("Oben zeichne ich zwei Räume und verbinde sie gleich mit ihren Bereichen: das Kinderzimmer");
await rect(0, 0, 4.5, 7.5);
await R.pickOption("Bereich", "Kinderzimmer", 0.9);
await R.hold(0.5);
await sayOver("und das Arbeitszimmer.");
await back();
await rect(4.5, 0, 9.5, 7.5);
await R.pickOption("Bereich", "Arbeitszimmer", 0.9);
await R.hold(0.8);
await sayOver("Tipp: Der Plan speichert sich beim Bearbeiten von selbst. Oben rechts siehst du „Gespeichert“.");
await R.move(1830, 34, 1);
await R.hold(1);

// ---------------------------------------------------------------- 8. 3D
await chapter("Alles in 3D");
await sayOver("Und jetzt der schönste Moment: Klick oben auf „3D“.");
await R.clickOn({ text: "3D", exact: true }, 0.9);
await R.sleep(800);
await R.clickOn({ text: "Alle Etagen", exact: true }, 0.8);
await R.hold(1);
await R.hideCursor();
const D = { theta: 0.8, phi: 0.95, radius: 18 };
const E = { theta: 2.0, phi: 0.75, radius: 16 };
await R.view(D);
await sayOver("Da ist dein Haus – mit beiden Etagen, Türen, Fenstern und der offenen Küche. Drehen und zoomen geht mit der Maus oder dem Finger.");
await R.glide(D, E, 7);
await R.hold(0.5);
await R.hideCursor(false);
await sayOver("Und weil die Räume mit Home Assistant verbunden sind, ist schon jetzt Leben drin. Ich öffne das Erdgeschoss");
await R.clickOn({ text: "Erdgeschoss", exact: true }, 0.9);
await R.hold(1.2);
await catchUp();
await sayOver("und tippe unten auf „Werte“.");
await R.clickOn({ text: "Werte", exact: true }, 0.9);
await R.hold(1);
await say("An jedem Raum stehen jetzt Temperatur und Luftfeuchtigkeit – live aus den Sensoren der Bereiche. Und die beiden Fenster leuchten, weil sie in der Demo gerade offen sind: Ihre Kontakte hat NeonPlan über den Bereich gefunden. Ohne ein einziges Gerät zu platzieren.");
await R.hold(0.5);

// ---------------------------------------------------------------- 9. Outro
await chapter("Wie geht es weiter");
await R.hideCursor();
await R.title("Nächste Folge: Bauplan als Vorlage", "NeonPlan 3D – läuft auch auf alten Wandtablets");
await say(
  "Das war dein erster Grundriss – mit Bereichen, Türen, Fenstern und Obergeschoss. In der nächsten Folge legst du ein Bild deines Bauplans als Vorlage unter den Editor und zeichnest ihn einfach nach. Danach kommen Geräte und Lampen, und dann die Möbel.",
);
await say("Den Link zur Online-Demo und zur Anleitung findest du in der Beschreibung. Und denk dran: NeonPlan läuft auch auf alten Wandtablets. Bis zum nächsten Mal!");
await R.hold(1);

const result = await R.finish();
console.log(`recorded ${result.frames} frames, ${result.duration.toFixed(1)} s → ${out}`);
