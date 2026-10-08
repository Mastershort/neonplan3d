# Folge 10 – Die 3D-Ansicht bedienen: Coverage-Checkliste

Quellen: `docs/anleitung.md` Kapitel 5 (5.1–5.9) und 3 (Reiter), die Ansicht in `frontend/src/panel.ts` (Kopfzeile mit
den Ansichtsoptionen, Etagen-/Raumleiste, Schalter unten), `frontend/src/components/view3d.ts` (`renderThumbs`,
`renderFind`, `renderCentral`, `renderEye`, `renderAlerts`, `renderScenes`, `renderLegend`), `room-panel.ts`,
`quick-menu.ts`, die Startansichten in `editor.ts` (`renderStartView`, `rememberFloorView`, `rememberRoomView`), Labels
aus `frontend/src/i18n.ts`. Zu viel für 8 Minuten in einem Stück → zwei Teile: **a** = Teil 1 „Navigieren und alle
Schalter“, **b** = Teil 2 „Das Haus bedienen“. Zeit = Stelle im fertigen Video (Zeilenbeginn, echte Stimme).
Das Demo-Haus der Online-Demo (erfundene Daten). ◧ / ◨ und ⌖ kommen mit 1.12.7 → Versionszeile 1.12.7.

## 3D-Ansicht: Haus, Etage, Raum (5.1, Kapitel 3)
- [x] a 0:27 · Reiter „3D“ oben (Haus ansehen und bedienen)
- [x] a 0:27 · Hausansicht mit Beschriftung je Etage (Räume, Lichter an, offene Fenster)
- [x] a 0:36 · Ziehen dreht die Ansicht
- [x] a 0:36 · Mausrad / zwei Finger zoomen
- [x] a 0:40 · Etagenbeschriftung antippen öffnet die Etage, Etagen darüber fliegen weg
- [x] a 0:44 · Raum antippen: Kamera fliegt hinein, Raumfenster öffnet sich
- [x] a 0:50 · Esc geht eine Ebene höher
- [x] a 0:50 · „Zurück“ unten geht eine Ebene höher
- [x] a 0:54 · Doppeltipp auf eine freie Stelle geht eine Ebene höher
- [x] a 0:59 · Etagen-Miniaturen links wechseln direkt zur Etage, Haus-Knopf „Alle Etagen“
- [x] a 1:05 · Pfeil ◂ / ▸ klappt die Etagenbilder zu Knöpfen ein (Gerät merkt es sich)
- [x] a 1:12 · Leiste oben: alle Etagen und Räume, in der Hausansicht mit Etagennamen vor den Räumen
- [x] a 1:19 · Leiste scrollt seitlich (am PC mit Mausrad); ≡ / ↔ umbrechen und zurück
- [x] b 1:26 · Etage → Raum: Kamera fliegt hinein (Ebene 3)

## Schalter unten (5.2)
- [x] a 1:30 · „Wände hoch“: volle Höhe, vordere Wände als getöntes Glas
- [x] a 1:40 · „Schnitt“: Wände in Hüfthöhe, hohe Möbel mitgeschnitten
- [x] a 1:49 · Die Wahl merkt sich jedes Gerät
- [x] a 1:55 · „Auseinander“ / „Gestapelt“ (Hausansicht)
- [x] a 2:05 · Dach hebt sich beim Heranzoomen und blendet aus
- [x] a 2:10 · „Dach bleibt“ (Hausansicht)
- [x] a 2:19 · „Abgedunkelt“ (offene Etage)
- [x] a 2:24 · „Gestapelt“ (ganzes Haus bis hier) / „Einzeln“
- [x] a 2:29 · Heatmap „Temp.“ mit Farbskala am Rand
- [x] a 2:37 · Sensoren des Bereichs; °C / °F aus Home Assistant, richtig umgerechnet
- [x] a 2:45 · „Feuchte“, „CO₂“ (Hinweis „Keine passenden Sensoren …“ in der Skala)
- [x] a 2:51 · „Werte“: Zahlen unter den Raumnamen
- [x] a 2:59 · „Normal“ schaltet die Heatmap ab
- [x] a 3:01 · „Raumnamen“ ein/aus
- [x] a 3:07 · „Spur“, „Kameras“ (Kamera-Cockpit) und „Wetter“ (Wetter draußen) als Pro, Schloss ohne Erweiterung – je ein Satz
- [x] a 4:54 · Auge: blendet Kopfzeile, Leisten, Etagenbilder, Schalter aus
- [x] a 5:04 · Energiewerte verschwinden mit (Energie Pro, ein Satz)
- [x] a 5:09 · Raum bleibt antippbar, Auge holt alles zurück, Gerät merkt sich die Wahl
- [x] a 4:47 · ⚙ auf dem Handy klappt die Ansichtsoptionen auf und zu (gesagt)

## Kopfzeile oben rechts (5.2)
- [x] a 3:17 · Qualität „Auto“
- [x] a 3:23 · „Tablet“: ohne Muster, Schatten, Halos; auf Fire-Tablets automatisch
- [x] a 3:30 · „Hoch“: Lichtkegel unter Spots
- [x] a 3:35 · Look „Neon“ / „Blueprint“ / „Tag“
- [x] a 3:45 · Farbfeld: eigene Akzentfarbe (Linien im Neon-Look, Knöpfe und Pins in jedem Look)
- [x] a 3:54 · ↺ zurück zu Cyan
- [x] a 3:56 · Symbole „Alle“
- [x] a 4:02 · „Wichtige“ (ohne 3D-Modell, Werte wie Watt, laufende App) / „Keine“
- [x] a 4:13 · ◧ / ◨: Etagenbilder, Stern, Suche und Auge links oder rechts (1.12.7)
- [x] a 4:24 · ⌖ „Ansicht halten“: Kamera bleibt beim Etagenwechsel (1.12.7)
- [x] a 4:32 · „FPS“: Bildrate, langsamstes Bild, Grund je Bild
- [x] a 4:39 · Im Ruhezustand 0 B/s
- [x] a 4:47 · Version ganz rechts in der Kopfzeile
- [x] a 5:09 · Alle Schalter merkt sich das jeweilige Gerät

## Bedienen (5.3)
- [x] b 0:24 · Antippen schaltet, Lampe blinkt zur Bestätigung
- [x] b 0:29 · Senkrecht wischen dimmt, Wert am Finger
- [x] b 0:36 · Lange drücken: Schnellmenü Licht (Helligkeit, Farbtemperatur, Farben)
- [x] b 0:41 · Doppeltipp auf einen Raum: alle Lichter aus / an
- [x] b 0:46 · „Vor dem Schalten nachfragen“: kein Wischen, beim Doppeltipp außen vor (gesagt)
- [x] b 0:54 · Wischen auf Rollladen/Fenster fährt den Rollladen
- [x] b 0:59 · Schnellmenü Rollladen: Auf, Stopp, Zu, feste Positionen
- [x] b 1:04 · Lamellen-Regler (Raffstore/Jalousie) – gesagt, die Demo hat keine Lamellen
- [x] b 1:12 · Fenster antippen (Rahmen, Glas, Rollladen): Rollladen-Menü oder Kontakt
- [x] b 1:21 · Fernseher, Türen, Garagentore direkt antippen

## Raumfenster (5.4)
- [x] b 1:26 · Raumfenster rechts, auf Handy/hochkant unten (gesagt)
- [x] b 1:34 · Kopf mit Raumwerten; Licht mit Helligkeit, Farbtemperatur, Farben
- [x] b 1:45 · „Alle aus“ / „Alle an“
- [x] b 1:51 · Rollläden: Auf, Stopp, Zu, Position, „Alle auf“ / „Alle zu“
- [x] b 1:58 · Heizung, Medien, Schalter, Kameras mit Standbild, Sensoren, Szenen & Skripte
- [x] b 2:08 · Zeigt platzierte Geräte und ☆ aus dem Editor; „Weitere Geräte des Bereichs“
- [x] b 2:20 · Name antippen öffnet Details; ✕ schließt
- [x] b 2:27 · Ohne Raumfenster: Szenen und Skripte als Knöpfe unten (Karte, Folge 11)

## Stern und Suche (5.5)
- [x] b 2:36 · Stern: Zentral-Menü Lichter an/aus, Rollläden auf/zu für die Etage
- [x] b 2:44 · Hausansicht: ganzes Haus mit „Sicher?“, zweiter Tipp führt aus; Garagentore zählen nicht
- [x] b 2:54 · Favoriten (Szenen, Skripte, Automationen, Tasten, Schalter)
- [x] b 3:04 · Eigene Knöpfe; leuchten, solange ihre Entität an ist
- [x] b 5:26 · Favoriten und eigene Knöpfe im Editor unter „Favoriten“
- [x] b 3:17 · Lupe „Wo ist …?“: Gerätename oder Raum tippen
- [x] b 3:24 · Treffer: Kamera fliegt hin, Gerät blinkt
- [x] b 3:29 · Raum als Treffer öffnet den Raum

## Heatmap (5.6)
- [x] a 2:29 · Temp./Feuchte/CO₂ färben die Böden, Farbskala am Rand (siehe oben)

## Sonne und Tageslicht (5.7)
- [x] b 4:03 · Mit Nordrichtung fällt Sonnenlicht aus sun.sun als Flecken durch die Fenster
- [x] b 4:13 · Rollläden verkleinern die Flecken (gesagt); Himmel tagsüber heller
- [x] b 4:20 · „Sonnenlicht durch die Fenster“ in den Einstellungen

## Warnungen (5.8)
- [x] b 3:33 · Kostenlos, ohne Einrichtung; Raum pulsiert rot, Banner oben (Rauch Küche)
- [x] b 3:42 · Tipp auf die Warnung springt in den Raum
- [x] b 3:45 · Rauch, Gas, CO, Wasser, Alarm ausgelöst, Fenster offen bei Regen
- [x] b 3:54 · Regenwarnung: Wetter-Entität, „Warnung: Fenster offen bei Regen“ abschaltbar

## Kameras in 3D (5.9)
- [x] b 4:26 · Kamera oder Sichtkegel antippen: Standbild, erneuert sich; Kegel größere Tippfläche
- [x] b 4:35 · Bild antippen: Livebild

## Startansicht von Haus, Etage, Raum
- [x] b 4:38 · Im Editor mit „3D daneben“
- [x] b 4:44 · Haus in der 3D-Ansicht rechts drehen
- [x] b 4:51 · „Startansicht“ → „Aktuelle 3D-Ansicht als Start merken“ (3D-Ansicht, Karte, Kiosk)
- [x] b 5:02 · YAML-Zeile start_view für eine Karte; „Standard“ setzt zurück
- [x] b 5:11 · „Ansicht als Start der Etage“
- [x] b 5:16 · Raum wählen, 3D daneben auf den Raum drehen und zoomen
- [x] b 5:21 · „Ansicht als Start des Raums“, ↺ entfernt sie
- [x] b 5:31 · Raum in 3D antippen fliegt in die Startansicht
