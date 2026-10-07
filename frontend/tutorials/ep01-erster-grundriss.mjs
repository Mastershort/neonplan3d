// Tutorial episode 1 – "Dein erster Grundriss in 10 Minuten": teaser, a floor, rooms, an open kitchen,
// a door and a window, a second floor, the 3D view. Drives the preview with invented demo data.
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
const rename = async (name) => {
  await R.clickOn({ label: "Name" });
  await R.page.keyboard.down("Control");
  await R.page.keyboard.press("a");
  await R.page.keyboard.up("Control");
  await R.type(name);
  await R.key("Enter");
};
const tapPlan = async (x, z, seconds = 0.6) => {
  const p = await R.planPoint(x, z);
  await R.move(p.x, p.y, seconds);
  await R.click();
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
await sayOver("Das hier ist dein Zuhause in 3D – live mit Home Assistant: Lichter, Fenster, Strom, alles in Echtzeit.");
await R.glide(A, B, 6);
await R.untitle();
await sayOver("Und das Beste: Es läuft sogar auf einem alten Wandtablet. In zehn Minuten hast du deinen eigenen Grundriss.");
await R.glide(B, C, 6);
await R.hold(0.6);

// ---------------------------------------------------------------- 1. Intro
await chapter("Was wir heute bauen");
await R.open("empty");
await R.clickOn({ text: "Editor", exact: true }, 0.01);
await R.sleep(500);
await R.hideCursor(false);
await say("In diesem Video zeige ich dir Schritt für Schritt, wie du in NeonPlan 3D deinen ersten Grundriss zeichnest: eine Etage anlegen, Räume zeichnen, eine offene Küche, Tür und Fenster, ein Obergeschoss – und am Ende alles in 3D.");
await say("Wir starten im Editor mit einem leeren Projekt. Oben findest du die Werkzeuge, rechts die Einstellungen.");

// ---------------------------------------------------------------- 2. A floor
await chapter("Eine Etage anlegen");
await sayOver("Als Erstes brauchen wir eine Etage. Klick rechts auf „Etage hinzufügen“.");
await R.clickOn({ text: "Etage hinzufügen" }, 0.9);
await R.hold(0.8);
await say("NeonPlan bietet dir die Etagen an, die du in Home Assistant schon angelegt hast. Ich nehme das Erdgeschoss.");
await R.clickOn({ text: "Erdgeschoss", nth: 0 }, 0.8);
await R.hold(0.6);

// ---------------------------------------------------------------- 3. Rooms
await chapter("Räume zeichnen");
await say("Jetzt zeichnen wir die Räume. Nimm das Werkzeug „Rechteck“ und zieh den Raum einfach mit gedrückter Maustaste auf.");
await rect(0, 0, 6, 4.5);
await say("Fertig ist der erste Raum. Die Maße stehen direkt an den Wänden. Rechts gibst du ihm einen Namen.");
await rename("Wohnzimmer");
await R.hold(0.5);
await sayOver("Der nächste Raum setzt einfach an. NeonPlan erkennt die gemeinsame Wand und macht daraus eine Innenwand.");
await rect(6, 0, 9.5, 4.5);
await rename("Küche");
await rect(0, 4.5, 3, 7.5);
await rename("Flur");
await rect(3, 4.5, 6, 7.5);
await rename("Bad");
await rect(6, 4.5, 9.5, 7.5);
await rename("Schlafzimmer");
await say("Fünf Räume in einer Minute. Mit „Freie Form“ gehen übrigens auch schräge oder L-förmige Räume – das zeige ich dir in einer eigenen Folge.");

// ---------------------------------------------------------------- 4. Walls: an open kitchen
await chapter("Wände ändern: offene Küche");
await say("Jetzt machen wir aus Wohnzimmer und Küche einen offenen Raum. Klick dafür ins Wohnzimmer, um es auszuwählen.");
await tapPlan(2.5, 2.2);
await R.hold(0.8);
await say("Rechts siehst du jede Wand mit Höhe und Dicke. Die Wand zur Küche ist die zweite – bei ihr tippst du auf „Keine Wand“.");
await R.clickOn({ text: "Keine Wand", nth: 1 }, 0.9);
await R.hold(1);
await say("Schon ist die Wand weg, und Wohnzimmer und Küche sind ein offener Raum – auch für das Licht in 3D. Genauso kannst du hier eine Wand niedriger machen, etwa für eine Theke.");

// ---------------------------------------------------------------- 5. Door and window
await chapter("Tür und Fenster");
await say("Jetzt kommen Türen und Fenster. Nimm das Werkzeug „Tür & Fenster“ und klick einfach auf eine Wand.");
const opening = async (x, z) => {
  await R.clickOn({ text: "Tür & Fenster", exact: true }, 0.8);
  await tapPlan(x, z, 0.9);
};
await opening(1.5, 4.5);
await R.hold(1);
await say("Auf einer Innenwand wird es eine Tür. Ich setze noch eine Tür ins Bad und ein Fenster in die Außenwand vom Wohnzimmer.");
await opening(4.5, 4.5);
await opening(3, 0);
await R.hold(0.8);
await say("In der Außenwand macht NeonPlan daraus erst einmal eine Haustür. Ich will hier aber ein Fenster – also rechts einfach auf „Fenster“ tippen.");
await R.clickOn({ text: "Fenster", exact: true }, 0.9);
await R.hold(1);
await say("Breite, Höhe und Art – zum Beispiel Terrassentür, Doppeltür oder Garagentor – stellst du rechts im Formular ein. Mit Kontakt- und Rollladen-Sensor zeigt NeonPlan später live, ob offen oder zu.");

// ---------------------------------------------------------------- 6. A second floor
await chapter("Zweite Etage");
await sayOver("Ein Haus hat meistens mehr als eine Etage. Also: noch einmal „Etage hinzufügen“, diesmal das Obergeschoss.");
// back up to the floor (from the window to its room, from the room to the floor)
for (let i = 0; i < 3; i++) {
  const back = await R.locate({ text: "Zurück zu" }).catch(() => null);
  if (!back) break;
  await R.clickOn({ text: "Zurück zu" }, 0.7);
}
await R.clickOn({ text: "Etage hinzufügen" }, 0.9);
await R.clickOn({ text: "Obergeschoss", nth: 0 }, 0.8);
await R.hold(0.6);
await say("Die neue Etage liegt automatisch über dem Erdgeschoss. Das Erdgeschoss siehst du blass darunter – so triffst du die Wände genau.");
await rect(0, 0, 4.5, 7.5);
await rename("Kinderzimmer");
await rect(4.5, 0, 9.5, 7.5);
await rename("Elternschlafzimmer");
await R.hold(0.6);

// ---------------------------------------------------------------- 7. 3D
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
await sayOver("Da ist dein Haus – mit beiden Etagen, Türen und Fenster, und der offenen Küche. Du kannst es mit der Maus oder dem Finger drehen und hineinzoomen.");
await R.glide(D, E, 7);
await R.hold(1.5);

// ---------------------------------------------------------------- 8. Outro
await chapter("Wie geht es weiter");
await R.title("Nächste Folge: Möbel, Lampen und Geräte", "NeonPlan 3D – läuft auch auf alten Wandtablets");
await say("Das war dein erster Grundriss. In der nächsten Folge richten wir ihn ein: Möbel, Lampen und deine Geräte aus Home Assistant. Den Link zur Online-Demo und zur Anleitung findest du in der Beschreibung. Bis zum nächsten Mal!");
await R.hold(1);

const result = await R.finish();
console.log(`recorded ${result.frames} frames, ${result.duration.toFixed(1)} s → ${out}`);
