# Folge 8 – Dächer Teil 2: Gauben, Dachfenster, Dachschrägen, Carport: Coverage-Checkliste

Quellen: `docs/anleitung.md` 4.19 (zweite Hälfte: Flachdach als freie Form, Gauben, Zwerchgiebel, Dachschrägen,
Überdachung) und „Dachfenster“, Formulare in `frontend/src/components/editor.ts` (`renderRoofSectionForm`,
`addDormer`, `takeRoofOutline`, `addRoofSection` → Überdachung, `renderRoofWindowList`, `renderRoofWindowForm`,
`renderHeadroom`), `panel.ts` („Dach bleibt“), `viewer/viewer3d.ts` (`placeRoof`), Labels aus `frontend/src/i18n.ts`.
Zu viel für 8 Minuten in einem Stück → zwei Teile: **a** = Teil 1 „Dachschrägen, Gauben und Zwerchgiebel“ (4:53),
**b** = Teil 2 „Dachfenster, Flachdach, Terrassendach und Carport“ (4:25). Zeit = Stelle im fertigen Video
(Zeilenbeginn, echte Stimme).
Das Haus ist das erfundene L-Haus aus Folge 7 (Erdgeschoss, Anbau mit Pultdach, Garage mit Attika); das obere
Geschoss ist hier ein ausgebautes Dachgeschoss. Energie Pro wird nicht erwähnt (Solarfelder kommen nicht vor).

## Dachschrägen (Kniestock)
- [x] a 0:24 · „Wandoberkante (m)“: wo die Wände unter dem Dach enden
- [x] a 0:31 · Wandoberkante unter die Deckenhöhe des Geschosses darunter: Kniestock 0,9 m über dem Dachgeschossboden (2,75 → 3,65)
- [x] a 0:42 · „Traufe (m) oben“ / „Traufe (m) unten“ auf dieselbe Höhe
- [x] a 0:46 · Steileres Dach für Kopfhöhe: „Neigung (°) oben/unten“ 45°
- [x] a 0:52 · In 3D (3D daneben): Kniestock an der Traufe, Giebelwände bis zum First
- [x] a 0:59 · Hinweis unter dem Feld: „Liegt sie unter der Deckenhöhe … enden dessen Wände an der Dachunterseite … Innenwände an der Schräge“
- [x] a 1:08 · Gleiches für den Seitenflügel (Wandoberkante, Traufe links/rechts, Neigung links/rechts)
- [x] a 1:18 · Grundriss des Dachgeschosses: gestrichelte Linien 1,5 m und 2 m Kopfhöhe
- [x] a 1:25 · Tipp zum Einrichten unter der Schräge
- [x] a 1:35 · 3D-Ansicht: Heranzoomen hebt das Dach ab und blendet es aus, Blick ins Dachgeschoss
- [x] a 1:42 · In 3D im Dachgeschoss: Kniestock an der Traufe, Giebel bis zum First, Innenwände an der Schräge
- [x] a 1:49 · Fenster nur, wo die Wand hoch genug ist (Giebel, gezeigt); an der Traufseite Gaube oder Dachfenster

## Gauben
- [x] a 1:57 · „+ Gaube oben“ / „+ Gaube unten“ im Formular einer Dachfläche (je Dachseite)
- [x] a 2:14 · „+ Gaube oben“ geklickt
- [x] a 2:18 · Vorschlag: 2 m breit, Front an der Außenwand, Satteldach, Traufe 1,4 m über der Dachtraufe (5,05 m, Feld gezeigt)
- [x] a 2:29 · So tief, dass der First auf die Schräge trifft; Hauptdach öffnet sich darunter, Seiten (Wangen) schließen ab (in 3D)
- [x] a 2:37 · Eigene kleine Dachfläche: „Gaube 5“ im Formular, „Gaube“ in Liste und Plan
- [x] a 2:44 · Verschieben (im Plan ziehen)
- [x] a 2:48 · Breite (Ecke ziehen, 2,5 m)
- [x] a 2:53 · „Form“: „Sattel“ oder „Pult“; Pult + Firstrichtung quer = Schleppgaube (in 3D)
- [x] a 3:04 · Höhen/Neigung der Gaube: „Neigung (°)“ 15° bei der Schleppgaube
- [x] a 3:11 · „Rückgängig“ (dreimal) zurück zur Satteldachgaube
- [x] a 3:15 · Wand des Dachgeschosses steigt bis zur Gauben-Traufe; „Tür & Fenster“, auf die Wand tippen
- [x] a 3:24 · Art „Fenster“ wählen – Gaubenfenster in 3D

## Zwerchgiebel
- [x] a 3:29 · Zwerchgiebel = vortretender Giebel (Drei-Giebel-Haus) = breite Gaube mit Traufe auf der Wandoberkante
- [x] a 3:39 · Haupthaus antippen, „+ Gaube oben“, über das Arbeitszimmer ziehen
- [x] a 3:45 · Breite an der Ecke auf 3,4 m
- [x] a 3:49 · Beide Traufen auf die Wandoberkante (3,65 m), Neigung 45°
- [x] a 3:56 · Tiefe passt sich selbst an (First trifft die Schräge), Hauptdach öffnet sich nur unter dem Giebeldach (Kehlen), in 3D
- [x] a 4:07 · Wand darunter steigt bis in den Giebel, Fenster mit „Tür & Fenster“
- [x] a 4:14 · Ergebnis in der 3D-Ansicht, von außen und von innen (Gaube und Zwerchgiebel mit Fenstern)

## Dachfenster
- [x] b 0:22 · Abschnitt „🪟 Dachfenster“ unter den Dachflächen (Hinweistext gezeigt)
- [x] b 0:22 · „+ Dachfenster“
- [x] b 0:31 · Landet auf der Südseite des Hauptdachs, 78 × 118 cm; Rechteck im Plan
- [x] b 0:39 · Im Grundriss verschieben
- [x] b 0:44 · Auf eine andere Dachfläche ziehen (Seitenflügel, „Abschnitt 2 · Ost“)
- [x] b 0:50 · „Dachfläche“ im Formular (Anzeige und Auswahl, zurück auf „Abschnitt 1 · Süd · 45°“)
- [x] b 0:58 · „Breite“ und „Höhe (m)“ (94 × 140 cm)
- [x] b 1:05 · „Abstand vom Rand (m)“, „Abstand von der Traufe (m)“
- [x] b 1:13 · „Rollladen“, „Kontakt“, „Kippkontakt“ (Entitäten gewählt)
- [x] b 1:22 · Live in 3D: offen – Flügel oben angeschlagen nach außen, Rahmen leuchtet warm
- [x] b 1:29 · Gekippt: öffnet ein Stück
- [x] b 1:31 · Rollladen fährt von oben über die Scheibe
- [x] b 1:36 · „Fenstermotor (Cover, optional)“: Stellung als Cover, Flügel öffnet so weit (50 % gezeigt)
- [x] b 1:45 · Kontakt/Kippkontakt auch ohne Motor (Hinweistext); „Name (optional)“ ausgefüllt
- [x] b 1:52 · Loch in der Schräge: aus dem Dachgeschoss schaut man hinaus (gesagt über die Nahansicht)
- [x] b 1:58 · „🔓 Fixieren“, „Löschen“, „‹ Dachflächen“ zurück zur Liste

## Flachdach als freie Form
- [x] b 2:06 · Beispiel Bungalow (das Erdgeschoss allein) mit einer Flach-Dachfläche als Rechteck
- [x] b 2:13 · Rechteck deckt auch Ecken ohne Haus ab (Plan und 3D)
- [x] b 2:20 · Bei „Flach“/„Attika“: „Umriss des Geschosses übernehmen“
- [x] b 2:27 · Umriss aller Räume des angezeigten Geschosses, auch L-/Z-Form, eine Fläche ohne Kanten (in 3D)
- [x] b 2:34 · Ecken im Plan ziehen (Hinweis „Freie Form: Ziehe die Ecken im Plan …“ gezeigt)
- [x] b 2:41 · „Zurück zum Rechteck“
- [x] b 2:45 · Mehrere Etagen: Etagen-Knöpfe oben bestimmen das Geschoss (gesagt; der Bungalow hat nur eine Etage)

## Überdachung
- [x] b 2:51 · Terrassendach: Dachfläche über einer Fläche ohne Raum aufziehen
- [x] b 2:58 · Wird automatisch Überdachung: flaches Pultdach auf 2,4 m, Pfosten und Balken, durchsichtig (in 3D)
- [x] b 3:07 · Liegt an der Hauswand auf; Haken „Überdachung (Pfosten statt Wände, durchsichtig)“ im Formular; „Überdachung“ in Liste und Plan
- [x] b 3:17 · Carport neben der Garage (aufziehen, in 3D)
- [x] b 3:22 · Schalter „Überdachung“ bei jeder Dachfläche: aus = normales Dach ohne Pfosten, an = Carport (in 3D)

## Dach bleibt (3D-Ansicht)
- [x] b 3:30 · Heranzoomen hebt das Dach ab und blendet es aus
- [x] b 3:37 · „Dach bleibt“ unten in der 3D-Ansicht einschalten: Dach bleibt auch ganz nah
- [x] b 3:45 · Den Schalter gibt es in der Hausansicht, sobald das Haus ein Dach hat
- [x] b 3:52 · Zweiter Klick schaltet ihn aus
- [x] b 3:54 · Ergebnis in 3D (Gaube, Zwerchgiebel, Dachfenster offen, Terrassendach, Carport)
