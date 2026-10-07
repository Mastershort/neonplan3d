# Folge 7 – Dächer Teil 1: Satteldach, Walmdach & Co.: Coverage-Checkliste

Quellen: `docs/anleitung.md` 4.19 (erste Hälfte: einfaches Dach, Dachflächen, Formen), Formulare in
`frontend/src/components/editor.ts` (`renderSettings` → Dach, `renderRoofPanel`, `renderRoofSectionForm`,
`renderRoofFloors`, `useRoofSections`, `addRoofSection`, `roofFixed`, Taste L in `onKey`), Labels aus `frontend/src/i18n.ts`.
Zu viel für 8 Minuten in einem Stück → zwei Teile: **a** = Teil 1 „Dachflächen und alle Dachformen“ (4:50),
**b** = Teil 2 „Traufe, Neigung, Pultdach und Garage“ (4:52). Zeit = Stelle im fertigen Video (Zeilenbeginn, echte Stimme).
Das Haus ist für diese Folge erfunden: zwei Etagen in L-Form, ein Anbau (Hauswirtschaft) in der Ecke, eine Garage.

Bewusst nur erwähnt (Folge 8): „+ Gaube oben/unten“, Zwerchgiebel, Kniestock/Dachschrägen (Hinweistext unter der
Wandoberkante), „Überdachung“ (Terrassendach, Carport), „Umriss des Geschosses übernehmen“ / „Zurück zum Rechteck“,
„+ Dachfenster“, „Dach bleibt“ in 3D.

## Einfaches Dach (Einstellungen)
- [x] a 0:23 · „Einstellungen“ unten in der Seitenleiste (Etage), aufklappen
- [x] a 0:30 · „Dach“: „Kein Dach“, „Flachdach“, „Satteldach“, „Dachflächen (frei)“ (Liste gezeigt, „Satteldach“ gewählt)
- [x] a 0:39 · „First“: „Entlang der langen Seite“ / „Entlang der kurzen Seite (z. B. Reihenhaus)“
- [x] a 0:39 · „Dachneigung (°)“
- [x] a 0:39 · „Dachüberstand (m)“
- [x] a 0:48 · Das einfache Dach liegt über dem ganzen obersten Geschoss (in 3D gezeigt)
- [x] a 0:54 · Beim L-Haus deckt es das ganze Rechteck ab, Anbau und Garage bekommen keins → Dachflächen
- [x] a 1:03 · Für ein einfaches rechteckiges Haus reicht es

## Dachflächen anlegen
- [x] a 1:09 · Werkzeug „Dach“ oben in der Leiste
- [x] a 1:09 · „Dachflächen aus den Räumen erzeugen“ (Knopf im Werkzeug, solange kein Flächen-Dach aktiv)
- [x] a 1:43 · Gleiches über Einstellungen → „Dach“ → „Dachflächen (frei)“ (gesagt, Option bei 0:30 im Bild)
- [x] a 1:19 · Vorschlag aus den Räumen: je Etage die Teile ohne höhere Etage darüber, alle mit Satteldach
- [x] a 1:29 · Ergebnis hier: Haupthaus + Seitenflügel (Obergeschoss), Garage + Anbau (Erdgeschoss)
- [x] a 1:36 · Das Werkzeug öffnet „3D daneben“ mit dem ganzen Haus, Änderungen sofort sichtbar
- [x] a 1:50 · Hinweis „🏠 Dach: Hier lassen sich nur Dachflächen und Dachfenster verschieben …“

## Auswählen, Etage, Zeichnen, Verschieben, Größe
- [x] a 1:56 · Liste: Nummer · Form · Größe · Firsthöhe; Plan-Beschriftung am First (Nummer · Form · Firsthöhe)
- [x] a 2:04 · Antippen (Liste oder Plan) wählt aus, Formular rechts, Ecken im Plan
- [x] a 2:12 · „‹ Dachflächen“ zurück zur Liste
- [x] a 2:15 · Etagen-Knöpfe oben (Obergeschoss / Erdgeschoss): welche Räume der Plan zeigt, zum Zeichnen entlang der Wände
- [x] a 2:25 · Hinweiszeile unten: „Dachfläche aufziehen · antippen wählt aus · ziehen verschiebt · Ecken ändern die Größe“
- [x] a 2:30 · „Löschen“ (Vorschlag der Garage)
- [x] a 2:36 · Neue Dachfläche im Plan aufziehen
- [x] a 2:41 · Neue Fläche: Satteldach, Höhe von den Wänden darunter, egal welche Etage der Plan zeigt
- [x] a 2:51 · Ziehen verschiebt die Fläche
- [x] a 2:55 · Ecken ändern die Größe; Fläche bis zur Außenkante der Wände, Überstand kommt automatisch dazu
- [x] a 3:03 · „Duplizieren“ (Doppelgarage), „Rückgängig“

## Formen und Firstrichtung
- [x] a 3:12 · „Form“-Auswahl (acht Formen, Liste gezeigt)
- [x] a 3:19 · „Sattel“ in 3D
- [x] a 3:25 · „Walm“ in 3D
- [x] a 3:30 · „Krüppelwalm“ in 3D
- [x] a 3:36 · „Zelt“ in 3D
- [x] a 3:43 · „Mansard“ in 3D
- [x] a 3:48 · „Pult“ in 3D
- [x] a 3:54 · „Flach“ in 3D
- [x] a 3:57 · „Attika“ in 3D
- [x] a 4:04 · „First ↔“ / „First ↕“ (Firstrichtung), Wirkung auf die Höhe in 3D
- [x] a 4:10 · „Firsthöhe“ unten im Formular und im Plan

## Traufe, Neigung, Seiten
- [x] b 0:18 · Zwei Seiten je Fläche, „Traufe (m)“ und „Neigung (°)“ je Seite
- [x] b 0:25 · Traufe = Höhe der unteren Dachkante; Seiten heißen links/rechts (First ↕) bzw. oben/unten (First ↔)
- [x] b 0:34 · Alle Höhen zählen vom Boden (5,25 m = Wände des Obergeschosses)
- [x] b 0:40 · Tiefere Traufe auf einer Seite → Abschleppdach (in 3D)
- [x] b 0:49 · „Rückgängig“; „Neigung“ rechts 50° (in 3D)
- [x] b 0:56 · „Firsthöhe“ ändert sich mit Traufe und Neigung: Formular, Liste, Plan

## Anbau mit Pultdach
- [x] b 1:03 · Form „Pult“ für den Anbau an der Hauswand
- [x] b 1:10 · Pultdach steigt von der ersten Seite an (hier falsch herum, in 3D)
- [x] b 1:17 · „⇅ Seiten tauschen“ (hohe Seite an die Hauswand)
- [x] b 1:22 · Pult: nur eine Traufe und eine Neigung; 15° eingestellt
- [x] b 1:28 · Wo eine Fläche an einen höheren Hausteil stößt, entfällt dort der Überstand

## Wandoberkante, Sitzt auf Etage
- [x] b 1:33 · „Wandoberkante (m)“: wo die Wände unter dem Dach enden (Anbau 2,5 m)
- [x] b 1:42 · Giebel/Drempel bis unters Dach hochgezogen, Raum unter dem Pultdach geschlossen (in 3D)
- [x] b 1:48 · Neue Fläche übernimmt die Wandoberkante der Räume darunter; tiefer als die Decke → Dachschrägen (Folge 8)
- [x] b 1:58 · „Sitzt auf Etage“ zeigt die Etage der Fläche
- [x] b 2:05 · Andere Etage wählen: Fläche springt auf deren Wände, Wandoberkante und Traufe wandern mit (in 3D)
- [x] b 2:12 · Typischer Fall: Fläche auf der falschen Etage (Obergeschoss mit Treppenloch); zurück auf „Erdgeschoss“

## Überschneidungen
- [x] b 2:23 · Seitenflügel und Anbau ragen ins Haupthaus (im Plan gezeigt), gewollt
- [x] b 2:29 · Das niedrigere Dach läuft unter das höhere, First verschwindet in der Dachfläche (in 3D)
- [x] b 2:38 · Fläche weiter hineinziehen ändert nichts in 3D; Flächen müssen nicht genau aneinanderstoßen

## Garage mit Flachdach
- [x] b 2:46 · Form „Flach“
- [x] b 2:49 · Bei Flach/Attika nur „Höhe (m)“ statt Traufe und Neigung
- [x] b 2:55 · „Attika“ (Brüstung)
- [x] b 3:01 · „Dachüberstand (m)“ je Dachfläche (Garage: 0)
- [x] b 3:08 · Solarfelder mit dem Werkzeug „Energie“, auch aufs Flachdach; Energie Pro (ein Satz)
- [x] b 3:17 · „Überdachung“, Gauben-Knöpfe, „Umriss des Geschosses übernehmen“ → nächste Folge (im Bild gezeigt)

## Fixieren, Neu erzeugen, Zurück zu einem Dach
- [x] b 3:24 · „🔓 Fixieren“ im Formular, Taste L
- [x] b 3:29 · Fixiert: Ziehen bewegt nur die Ansicht, Hinweis „🔒 Fixiert – zum Verschieben erst lösen …“ unten
- [x] b 3:35 · „🔒 Lösen“ / Taste L
- [x] b 3:39 · „🔒 Grundriss“ in der Leiste sperrt alle Dachflächen („Grundriss gesperrt“ im Formular), zweiter Klick hebt auf
- [x] b 3:48 · „Neu aus den Räumen erzeugen“ mit Rückfrage („Alle Dachflächen durch einen neuen Vorschlag … ersetzen?“)
- [x] b 3:58 · „Rückgängig“ holt die eigenen Flächen zurück
- [x] b 4:02 · „Zurück zu einem Dach“ → einfaches Satteldach
- [x] b 4:08 · Dachflächen bleiben gespeichert, „Dachflächen aus den Räumen erzeugen“ holt sie zurück
- [x] b 4:16 · Ergebnis in der 3D-Ansicht
