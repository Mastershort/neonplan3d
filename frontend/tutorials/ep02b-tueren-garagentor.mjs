// Tutorial episode 2, part 2 – "Türen und Garagentor": the doors of the traced house (episode 2, part 1) with every
// kind and style – front door with glass panel and side lights, interior door, sliding door, double glass door, a
// passage without a door – width, position, height, hinge side and opening direction, door contacts (automatic from
// the area, and picked by hand), "Ohne Sensor geschlossen zeigen", the garage door with its motor, "Markieren in 3D"
// and the plan lock, each change seen live in the 3D half beside the plan.
// The bathroom door contact ("Bad Tür") is added to the demo's mock Home Assistant at runtime (invented, like the rest).
// Usage (from frontend/): node tutorials/ep02b-tueren-garagentor.mjs <out-dir> [<voice-dir with durations.json>]
// Then: python ../tools/make-tutorial.py <out-dir> <out.mp4>

import { narration, startRecorder } from "./recorder.mjs";
import { VERSION, fastMode, helpers, traceHouse } from "./ep02-common.mjs";

const out = process.argv[2] ?? "tutorial-ep02b";
const R = await startRecorder({ outDir: out, width: 1920, height: 1080, lang: "de" });
fastMode(R);
const N = narration(R, process.argv[3]);
const { say, sayOver, chapter, catchUp } = N;
const H = helpers(R);
const { fill, tapPlan, pointPlan, side, scrollSide, pickEntity, pickerMove, view3d, glide3d, setState } = H;

const BAD_TUER = ["binary_sensor.bad_tuer", "bad", "off", { friendly_name: "Bad Tür", device_class: "door" }];
/** Camera views of the 3D half (plan metres as target). */
const V = {
  // theta 0 looks from the south (plan bottom), pi/2 from the east; the 3D half beside the plan needs a large radius
  over: { theta: 0.45, phi: 0.9, radius: 28, target: { x: 7, y: 0.75, z: 4.25 } },
  front: { theta: 1.35, phi: 1.0, radius: 10, target: { x: 14, y: 1.1, z: 4.75 } },
  bad: { theta: 2.9, phi: 0.7, radius: 10, target: { x: 8.5, y: 0.8, z: 5.5 } },
  schiebe: { theta: 2.9, phi: 0.7, radius: 10, target: { x: 12.45, y: 0.8, z: 5.5 } },
  doppel: { theta: -1.75, phi: 0.7, radius: 10, target: { x: 10, y: 0.8, z: 3 } },
  durch: { theta: 1.75, phi: 0.7, radius: 10, target: { x: 7.5, y: 0.8, z: 4.75 } },
  garage: { theta: 0.1, phi: 1.0, radius: 11, target: { x: 1.75, y: 1.2, z: 6 } },
};
let cam = V.over;
const look = async (to, seconds = 1.2) => {
  await glide3d(cam, to, seconds);
  cam = to;
};
const tool = () => R.clickOn({ text: "Tür & Fenster", exact: true }, 0.5);
/** Move a cover (garage door) in steps, so 3D shows it travelling. */
const travel = async (id, from, to, seconds) => {
  const n = Math.max(2, Math.round(seconds * 5));
  for (let i = 1; i <= n; i++) {
    const pos = Math.round(from + ((to - from) * i) / n);
    await setState(id, pos > 0 ? "open" : "closed", { current_position: pos });
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
const A = { theta: 1.0, phi: 0.85, radius: 19 };
const B = { theta: 0.35, phi: 0.9, radius: 21 };
await R.view(A);
await R.sleep(1200);
await R.title("Bauplan als Vorlage – Teil 2", `NeonPlan 3D · Folge 2 · Türen und Garagentor${VERSION}`);
await sayOver("Eine Haustür, die live aufgeht, ein Garagentor, das mitfährt – heute kommen die Türen in unseren nachgezeichneten Grundriss.");
await R.glide(A, { theta: 0.7, phi: 0.87, radius: 20 }, 2.5);
await setState("binary_sensor.haustuer", "on");
await R.glide({ theta: 0.7, phi: 0.87, radius: 20 }, B, 3);
await R.untitle();
await sayOver("Jede Art, jeder Stil, jedes Feld – und wie du sie mit den Kontakten aus Home Assistant verbindest.");
await travel("cover.garagentor", 60, 100, 2.5);
await R.glide(B, { theta: 0.2, phi: 0.9, radius: 21 }, 2);

// ---------------------------------------------------------------- 1. Intro
await chapter("Was wir heute machen");
await R.open("empty");
await traceHouse(R, { walls: true });
await H.addEntities([BAD_TUER]);
await R.clickOn({ text: "3D daneben", exact: true }, 0.01);
await R.sleep(1500);
await R.clickOn({ text: "Wände hoch", exact: true }, 0.01);
await H.view2d(58, 25, 330);
await view3d(V.over);
await R.sleep(1200);
await R.hideCursor(false);
await R.move(700, 560, 0.01);
await sayOver("Wir machen da weiter, wo Teil 1 aufgehört hat: Der Bauplan liegt darunter, Räume und Wände sind nachgezeichnet.");
await R.hold(1);
await pointPlan(10.75, 4.75, 0.6);
await sayOver("Die Räume sind schon mit ihren Bereichen aus Home Assistant verknüpft, wie in Folge 1. Darüber findet NeonPlan die Türkontakte von selbst.");
await R.hold(0.8);
await R.move(1240, 520, 0.6);
await sayOver("Rechts läuft „3D daneben“ mit – so siehst du jede Änderung sofort. Die Fenster kommen in Teil 3.");
await R.moveTo({ text: "3D daneben", exact: true }, 0.6);

// ---------------------------------------------------------------- 2. Front door
await chapter("Die Haustür");
await sayOver("Oben auf „Tür & Fenster“. Unten steht der Hinweis: auf eine Wand tippen – die Art wählst du danach rechts.");
await tool();
await R.move(330, 1064, 0.6);
await R.hold(1);
await sayOver("Ich tippe auf die Außenwand am Ende vom Flur, genau dort, wo der Plan die Haustür zeigt.");
await tapPlan(14, 4.75, 0.7);
await look(V.front, 1.4);
await sayOver("In einer Außenwand wird eine Tür von selbst zur Haustür: Unter „Stil“ steht „Automatisch (Haustür)“.");
await R.moveTo({ label: "Stil" }, 0.6);
await R.hold(0.6);
await sayOver("Oben wählst du die Art: Tür, Haustür, Doppeltür, Fenster, Terrassentür, Garagentor und Glaswand – jeweils mit passenden Maßen.");
await R.moveTo({ text: "Tür", exact: true }, 0.5);
await R.moveTo({ text: "Doppeltür", exact: true }, 0.5);
await R.moveTo({ text: "Terrassentür", exact: true }, 0.5);
await R.moveTo({ text: "Garagentor", exact: true }, 0.5);
await R.moveTo({ text: "Glaswand", exact: true }, 0.5);
await sayOver("Darunter „Breite“, „Mitte ab Ecke“ – also wo sie in der Wand sitzt – und „Höhe“. Laut Plan: ein Meter breit und 2,10 hoch.");
await R.moveTo({ label: "Mitte ab Ecke" }, 0.5);
await fill("Breite", "1");
await fill("Höhe", "2,1");
await sayOver("Verschieben geht auch im Plan: die Tür an der Wand entlangziehen. Die Pfeiltasten schieben sie ebenfalls an der Wand entlang.");
{
  const a = await R.planPoint(14, 4.75);
  const b = await R.planPoint(14, 5.05);
  await R.move(a.x, a.y, 0.5);
  await R.drag(b.x, b.y, 0.8);
  await R.drag(a.x, a.y, 0.8);
}
await sayOver("„Anschlag wechseln“ setzt die Scharniere auf die andere Seite, „Öffnungsrichtung umdrehen“ lässt die Tür nach außen aufgehen.");
await R.clickOn({ text: "Anschlag wechseln" }, 0.6);
await R.hold(0.8);
await R.clickOn({ text: "Anschlag wechseln" }, 0.5);
await R.moveTo({ text: "Öffnungsrichtung umdrehen" }, 0.5);
await sayOver("Das Feld „Anschlag“ zeigt die Seite der Scharniere – immer vom Raum aus gesehen, zu dem die Tür gehört. Oben steht: „Zurück zu Flur“.");
await R.moveTo({ label: "Anschlag" }, 0.5);
await R.hold(0.8);
await R.moveTo({ text: "Zurück zu" }, 0.6);
await sayOver("Ganz unten der „Kontakt“: „Automatisch (Haustür)“. NeonPlan hat den Türkontakt aus dem Bereich Flur gefunden.");
await scrollSide({ label: "Ohne Sensor geschlossen zeigen" }, 820, 0.6);
await pickerMove("Kontakt", 0.5);
await sayOver("Geht die Haustür in Home Assistant auf, schwingt sie in 3D mit. In der Demo schalte ich den Kontakt von Hand.");
await R.hold(0.8);
await setState("binary_sensor.haustuer", "on");
await R.hold(1.6);
await setState("binary_sensor.haustuer", "off");
await sayOver("Für Haustüren gibt es eigene Stile: mit Glasausschnitt, mit einem Seitenteil oder mit zwei.");
await scrollSide({ label: "Stil" }, 420, 0.5);
await R.pickOption("Stil", "Haustür mit Seitenteil", 0.5);
await sayOver("Beim Seitenteil stellst du darunter seine Breite ein – leer heißt automatisch. Der Haken setzt es auf die Seite der Scharniere.");
await R.moveTo({ label: "Breite Seitenteil" }, 0.5);
await R.hold(0.6);
await R.moveTo({ label: "Seitenteil an der Anschlagseite" }, 0.5);
await sayOver("Mit zwei Seitenteilen gibt es links und rechts je ein Feld. Ich nehme die Haustür mit Glasausschnitt – wie im Plan.");
await R.pickOption("Stil", "Haustür mit 2 Seitenteilen", 0.5);
await R.moveTo({ label: "Seitenteil links" }, 0.5);
await R.moveTo({ label: "Seitenteil rechts" }, 0.5);
await R.pickOption("Stil", "Haustür mit Glasausschnitt", 0.5);

// ---------------------------------------------------------------- 3. Interior doors
await chapter("Innentüren und Kontakte");
await sayOver("Jetzt die Badtür. Das Werkzeug springt nach jeder Öffnung auf „Auswählen“ zurück – also wieder „Tür & Fenster“ und auf die Wand zwischen Flur und Bad.");
await R.clickOn({ text: "Schnitt", exact: true }, 0.5);
await tool();
await tapPlan(8.5, 5.5, 0.7);
await H.sideTop();
await look(V.bad, 1.3);
await sayOver("Innen wird es von selbst eine Zimmertür. 80 Zentimeter Breite reichen, und sie soll ins Bad aufgehen: „Öffnungsrichtung umdrehen“.");
await fill("Breite", "0,8");
await R.clickOn({ text: "Öffnungsrichtung umdrehen" }, 0.6);
await R.hold(0.6);
await sayOver("Beim Kontakt steht „Automatisch (keiner gefunden)“. NeonPlan verteilt die Kontakte eines Bereichs der Reihe nach – und der Türkontakt vom Flur gehört schon der Haustür.");
await scrollSide({ label: "Ohne Sensor geschlossen zeigen" }, 820, 0.6);
await pickerMove("Kontakt", 0.5);
await R.hold(1.5);
await sayOver("Also wähle ich von Hand: ins Feld klicken, „Bad“ tippen, „Bad Tür“. Das geht bei jedem Sensor – und „Keiner“ schaltet ihn ganz ab.");
await pickEntity("Kontakt", "Bad", "Bad Tür", 0.5);
await R.hold(0.5);
await setState("binary_sensor.bad_tuer", "on");
await sayOver("Hat ein Raum mehrere Türen, prüf die automatische Zuordnung also kurz. Jetzt schwingt auch die Badtür mit.");
await R.hold(1.6);
await setState("binary_sensor.bad_tuer", "off");
await sayOver("Ins Schlafzimmer kommt eine Schiebetür. Unter „Stil“ stehen alle Türstile: Zimmertür, vier Haustüren, Glastür, Schiebetür und Durchbruch.");
await tool();
await tapPlan(12.45, 5.5, 0.7);
await H.sideTop();
await look(V.schiebe, 1.2);
await R.pickOption("Stil", "Schiebetür", 0.6);
await R.hold(0.6);
await sayOver("Vom Essbereich in die Küche geht eine Doppeltür: auf die Wand tippen, oben „Doppeltür“ – und als Stil „Glastür“.");
await tool();
await tapPlan(10, 3, 0.7);
await H.sideTop();
await R.clickOn({ text: "Doppeltür", exact: true }, 0.5);
await look(V.doppel, 1.2);
await R.pickOption("Stil", "Glastür", 0.5);
await sayOver("Bei zwei Flügeln heißen Knopf und Feld „Hauptflügel“: Sie bestimmen, welcher Flügel zuerst aufgeht. Und jeder Flügel kann einen eigenen Kontakt haben.");
await R.moveTo({ text: "Hauptflügel wechseln" }, 0.5);
await R.hold(0.4);
await R.moveTo({ label: "Hauptflügel (vom Raum aus)" }, 0.5);
await R.hold(0.4);
await scrollSide({ label: "Ohne Sensor geschlossen zeigen" }, 820, 0.6);
await pickerMove("Kontakt Hauptflügel", 0.5);
await pickerMove("Kontakt zweiter Flügel", 0.5);
await sayOver("Ohne Kontakt steht eine Tür in 3D halb offen – das steht auch im Hinweis ganz unten. „Ohne Sensor geschlossen zeigen“ zeichnet sie zu.");
await R.hold(0.6);
await R.clickOn({ label: "Ohne Sensor geschlossen zeigen" }, 0.5);
await R.hold(0.6);
await sayOver("Bleibt der Durchbruch vom Flur ins Wohnzimmer. Das Werkzeug merkt sich die zuletzt gewählte Art – deshalb wird es erst eine Doppeltür.");
await tool();
await tapPlan(7.5, 4.75, 0.7);
await H.sideTop();
await look(V.durch, 1.2);
await R.hold(0.6);
await sayOver("Ich klicke „Tür“ und wähle „Durchbruch“: eine Öffnung ohne Zarge und Türblatt, durch die auch das Licht fällt.");
await R.clickOn({ text: "Tür", exact: true }, 0.5);
await R.pickOption("Stil", "Durchbruch (ohne Tür)", 0.5);
await fill("Breite", "1");

// ---------------------------------------------------------------- 4. Garage door
await chapter("Garagentor");
await sayOver("Jetzt das Garagentor: „Tür & Fenster“, auf die Vorderwand der Garage – und oben „Garagentor“.");
await tool();
await tapPlan(1.75, 6, 0.7);
await H.sideTop();
await R.clickOn({ text: "Garagentor", exact: true }, 0.5);
await R.clickOn({ text: "Wände hoch", exact: true }, 0.5);
await look(V.garage, 1.3);
await sayOver("Ein Tor hat keinen Stil und keinen Anschlag. Unter „Antrieb“ hat NeonPlan das Garagentor aus dem Bereich Garage gefunden – es steht gerade auf 60 Prozent.");
await pickerMove("Antrieb", 0.6);
await R.hold(1);
await sayOver("Fährt das Tor, fährt es in 3D mit – der offene Teil liegt unter der Decke. Statt eines Antriebs geht auch ein Garagentor-Kontakt.");
await travel("cover.garagentor", 60, 100, 2);
await travel("cover.garagentor", 100, 0, 2.5);
await pickerMove("Kontakt", 0.5);
await sayOver("„Positions-Sensor“ holt die Position aus einem eigenen Sensor. Und „Vor dem Schalten nachfragen“ fragt erst nach, bevor das Tor fährt – gut für Tablets im Flur.");
await pickerMove("Positions-Sensor", 0.5);
await R.hold(0.8);
await R.clickOn({ label: "Vor dem Schalten nachfragen" }, 0.5);
await travel("cover.garagentor", 0, 60, 1.5);

// ---------------------------------------------------------------- 5. Mark in 3D
await chapter("Markieren in 3D");
await sayOver("Noch einmal zur Badtür. Unter „Markieren in 3D“ steht normal „Wenn offen“: Offene Türen und Fenster leuchten warm.");
await R.clickOn({ text: "Schnitt", exact: true }, 0.5);
await tapPlan(8.5, 5.5, 0.7);
await look(V.bad, 1.2);
await scrollSide({ label: "Markieren in 3D" }, 520, 0.5);
await R.moveTo({ label: "Markieren in 3D" }, 0.5);
await sayOver("„Wenn geschlossen“ dreht das um – praktisch fürs WC: Die Tür leuchtet, solange sie zu ist. Dafür braucht sie einen Kontakt.");
await R.pickOption("Markieren in 3D", "Wenn geschlossen (z. B. WC)", 0.5);
await R.hold(1.2);
await sayOver("Geht sie auf, ist das Leuchten weg.");
await setState("binary_sensor.bad_tuer", "on");
await R.hold(1.4);
await setState("binary_sensor.bad_tuer", "off");

// ---------------------------------------------------------------- 6. Lock and delete
await chapter("Sperren und Löschen");
await sayOver("Passt alles, sperrst du den Grundriss oben mit „Grundriss“: Räume, Wände, Türen und Fenster lassen sich dann nicht mehr versehentlich verschieben.");
await R.clickOn({ text: "Grundriss", exact: false, nth: 0 }, 0.6);
await R.hold(0.6);
await side();
await scrollSide({ text: "Grundriss gesperrt" }, 300, 0.4).catch(() => null);
await R.moveTo({ text: "Grundriss gesperrt" }, 0.5).catch(() => null);
await sayOver("Ein Klick auf „Grundriss gesperrt“ oben im Formular gibt ihn wieder frei. Und gelöscht wird mit „Löschen“ unten im Formular oder mit der Entf-Taste.");
await R.clickOn({ text: "Grundriss gesperrt" }, 0.5).catch(() => null);
await scrollSide({ text: "Löschen", exact: true }, 700, 0.5);
await R.moveTo({ text: "Löschen", exact: true }, 0.5);
await catchUp();
await look(V.over, 1.5);

// ---------------------------------------------------------------- 7. Outro
await chapter("Wie geht es weiter");
await R.hideCursor();
await R.title("Teil 3: Fenster, Sensoren und Rollläden", `NeonPlan 3D – läuft auch auf alten Wandtablets${VERSION}`);
await say("Das waren die Türen und das Garagentor. In Teil 3 kommen die Fenster: Terrassentür, Glaswand, Griff- und Kippsensoren und Rollläden, die live mitfahren.");
await say("Links zur Online-Demo und zur Anleitung findest du in der Beschreibung. Und NeonPlan läuft auch auf alten Wandtablets. Bis gleich!");
await R.hold(0.6);

N.report();
const result = await R.finish();
console.log(`recorded ${result.frames} frames, ${result.duration.toFixed(1)} s → ${out}`);
