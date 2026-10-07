# Folge 2 – Bauplan als Vorlage: Grundriss, Türen und Fenster – Abdeckung

Quellen: `docs/anleitung.md` 4.1 (Bedienung), 4.2 (Hintergrundbild), 4.3, 4.4, 4.6, 4.7; Formulare in
`editor.ts` (`renderBackgroundForm`, `renderRoomForm`, `renderEdgeHeights`, `renderFreeWallForm`,
`renderOpeningForm`, `renderStyleSelect`, `renderSidelightFields`), Beschriftungen aus `i18n.ts`.
Drei Teile: **A** = Teil 1 (Bild, Räume, Wände, `ep02a`), **B** = Teil 2 (Türen, Garagentor, `ep02b`), **C** = Teil 3
(Fenster, Sensoren, Rollläden, `ep02c`). Zeiten aus den fertigen Aufnahmen (Stimme DE/EN): `[x] A 1:23` = Teil 1 bei 1:23.

## Teil 1 – Vorlage (Grundriss-Bild)

- [x] A 0:34 Ausgangspunkt: „Etage hinzufügen“ → „Erdgeschoss“
- [x] A 0:41 Abschnitt „Vorlage (Grundriss-Bild)“ unten in der Seitenleiste aufklappen
- [x] A 0:48 „Bild wählen …“ – Foto oder Scan, PNG, JPG oder WebP
- [x] A 0:54 Das Bild liegt unter dem Raster (ein Kästchen = 1 m), anfangs 12 m breit bzw. über den vorhandenen Räumen
- [x] A 1:02 Die Vorlage gibt es nur im Editor, nicht in 3D; jede Etage hat ihre eigene
- [x] A 1:02 „Deckkraft“ – Bild kräftiger oder dezenter
- [x] A 2:09 Zoomen mit dem Mausrad, Ansicht auf einer leeren Stelle ziehen (Tablet: zwei Finger)
- [x] A 1:12 „Verschieben, skalieren und drehen“ – das Bild bekommt Griffe wie ein Möbel
- [x] A 1:18 Bild ziehen = verschieben
- [x] A 1:19 Griff unten rechts = größer / kleiner
- [x] A 1:23 Runder Griff oben = drehen, mit Umschalt in 15°-Schritten
- [x] A 1:42 Hinweistext im Formular (Griffe / „Das Bild liegt fest …“)
- [x] A 1:35 „Fertig“ legt das Bild fest, dann zeichnest du ungestört darüber
- [x] A 1:28 Felder „X (m)“ und „Y (m)“
- [x] A 1:28 „Breite im Plan (m)“
- [x] A 1:28 „Drehung (°)“ auf den Zehntelgrad genau
- [x] A 1:55 „📐 Gerade ausrichten“: zwei Punkte auf eine Wand, die waagerecht oder senkrecht sein soll – das Bild dreht sich passend
- [x] A 1:47 „Ausrichten abbrechen“
- [x] A 2:19 „📏 Maßstab mit Lineal“: Anfang und Ende einer Strecke bekannter Länge (bemaßte Wand, Maßkette)
- [x] A 2:33 Hinweis „Im Plan gemessen: … m“
- [x] A 2:33, A 2:42 „Echte Länge (m)“ eintippen, „Maßstab übernehmen“ – der erste Punkt bleibt stehen
- [x] A 2:19 „Lineal abbrechen“
- [x] A 2:57 Reihenfolge: erst gerade ausrichten, dann Maßstab, dann zeichnen
- [x] A 2:49 Tipp: Hausecke auf einen Rasterpunkt schieben – Ecken rasten dann sauber auf den Wänden ein
- [x] A 2:57 „Vorlage entfernen“

## Teil 1 – Räume nachzeichnen

- [x] A 3:07 „Rechteck“ für rechteckige Räume (aus Folge 1)
- [x] A 3:13 „Freie Form“: Punkt für Punkt, z. B. ein L-förmiger Raum
- [x] A 3:20 Hinweis unten im Plan zum aktiven Werkzeug
- [x] A 3:28 Freie Form schließen: Tipp auf den ersten Punkt oder Enter; Esc bricht ab
- [x] A 3:20, A 3:28 Fangen: Raster, Ecken und Kanten anderer Räume, Fluchtlinien; Alt = ohne Fangen
- [x] A 3:52 Ecken ziehen mit „Auswählen“
- [x] A 3:59 „+“ auf einer Kante fügt einen Punkt ein (Erker)
- [x] A 4:07 Liste „Eckpunkte“ mit X / Y je Punkt
- [x] A 4:07 „Punkt löschen“ (×)
- [x] A 4:16 Pfeiltasten verschieben das Ausgewählte (Rasterschritt, Umschalt 10 cm, Alt 1 cm)
- [x] A 4:23 „Rückgängig“ / Strg+Z, „Wiederholen“ / Strg+Y
- [x] A 4:23 „Alles zeigen“
- [x] A 3:47 Räume mit Bereichen verknüpfen (aus Folge 1, hier nur erwähnt)

## Teil 1 – Wände

- [x] A 4:32 Wände entstehen automatisch: gemeinsame Kante = Innenwand, Außenkante = Außenwand, Ecken und T-Stöße verschnitten
- [x] A 4:43 Wandstärken unter „Einstellungen“: „Außenwand (m)“, „Innenwand (m)“
- [x] A 4:53 Kasten „Wandhöhen“: jede Wand nach ihren Eckpunkten („Wand 2–3“, Nummern im Plan) mit Länge
- [x] A 5:00 Über eine Zeile fahren / ins Feld tippen – die Wand leuchtet im Plan
- [x] A 5:00 Geteilte Wände: Nachbarräume teilen eine Wand automatisch in „Teil 1“, „Teil 2“, jedes Stück mit eigener Höhe
- [x] A 5:24 „Höhe (m)“ je Wand – Brüstung oder Theke; niedrige Wände sind im Plan heller
- [x] A 5:24 Fenster und Türen in einer niedrigen Wand enden an der Wandhöhe
- [x] A 5:34 Teilen sich zwei Räume die Wand, gilt die niedrigere Höhe
- [x] A 5:34 ↥ setzt auf volle Raumhöhe zurück
- [x] A 5:11 ✂ teilt eine Wand (zwei Höhen in einer Flucht)
- [x] A 5:17 „Teilpunkt ab Ecke (m)“, im Plan als Strich markiert
- [x] A 5:17 ⨉ fügt die Teile wieder zusammen
- [x] A 5:50 „Dicke (m)“ je Wand (z. B. 0,365 / 0,115)
- [x] A 5:50, A 5:58 ↺ setzt die Dicke auf die Hausdicke zurück; bei geteilter Wand gilt die dickere Angabe, die Wand bleibt mittig
- [x] A 5:40 „Keine Wand“ – offener Grundriss, in Home Assistant getrennte Bereiche, Licht fällt hindurch; ↥ holt sie zurück
- [x] A 6:04 Werkzeug „Wand“: einzelne, frei stehende Wand ziehen (Raumteiler, halbe Wand)
- [x] A 6:04, A 6:13 Umschalt hält sie gerade, Alt zeichnet ohne Fangen; trifft sie eine Raumwand, wird die Ecke verschnitten
- [x] A 6:27 Ausgewählt: Endpunkte an den Griffen ziehen, ganze Wand an der Linie verschieben
- [x] A 6:13, A 6:20 „Länge (m)“, „Wandstärke (m)“, „Höhe (m)“ (halbhohe Wand)
- [x] A 6:27 Türen und Fenster gehen auch in einzelne Wände; „Löschen“ nimmt sie mit
- [x] A 6:36, A 6:41 „3D daneben“ zur Kontrolle, oben „Wände hoch“ / „Schnitt“

## Teil 2 und 3 – Türen und Fenster einsetzen

- [x] B 0:19 Räume sind mit ihren Bereichen verknüpft (Folge 1) – darüber kommen Kontakte und Rollläden
- [x] B 0:35 Werkzeug „Tür & Fenster“, dann auf eine Wand tippen (Raumwand oder einzelne Wand); Hinweis unten
- [x] B 2:13 Das Werkzeug springt danach auf „Auswählen“ zurück – vor jeder Öffnung neu wählen
- [x] B 0:55, C 0:25, C 1:37 Art-Knöpfe: „Tür“, „Haustür“, „Doppeltür“, „Fenster“, „Fenster 2-flügelig“, „Terrassentür“, „Terrassentür 2-flügelig“, „Garagentor“, „Glaswand“
- [x] B 3:31, C 2:04 Die zuletzt gewählte Art gilt für die nächste Öffnung
- [x] B 0:48 In einer Außenwand wird eine Tür automatisch zur Haustür („Automatisch (Haustür)“)
- [x] B 1:04 „Breite (m)“
- [x] B 1:04 „Mitte ab Ecke (m)“
- [x] B 1:04 „Höhe (m)“
- [x] C 0:34, C 1:37 „Brüstung (m)“ (Fenster); Brüstung 0 = Terrassentür
- [x] B 1:15 Mit „Auswählen“ entlang der Wand ziehen; Pfeiltasten schieben entlang der Wand
- [x] B 1:22, B 3:14 „⇆ Anschlag wechseln“ (bei zwei Flügeln „Hauptflügel wechseln“)
- [x] B 1:22 „⇅ Öffnungsrichtung umdrehen“ (Türen)
- [x] B 1:31, B 3:14 „Anschlag (vom Raum aus)“ Links / Rechts; „Hauptflügel (vom Raum aus)“
- [x] B 2:58, B 1:53 „Stil“ Türen: „Automatisch (…)“, „Zimmertür“, „Haustür“, „Haustür mit Glasausschnitt“, „Haustür mit Seitenteil“, „Haustür mit 2 Seitenteilen“, „Glastür“, „Schiebetür“, „Durchbruch (ohne Tür)“
- [x] B 1:59 Seitenteil: „Breite Seitenteil (m)“ (leer = automatisch), „Seitenteil an der Anschlagseite“
- [x] B 2:06 Zwei Seitenteile: „Seitenteil links (m)“ / „Seitenteil rechts (m)“
- [x] B 3:38 Durchbruch: nur eine Öffnung ohne Zarge und Türblatt, Licht fällt hindurch
- [x] C 0:43, C 1:08 „Stil“ Fenster: „Standard“, „Mit Sprossen“, „Glaswand (feststehend)“
- [x] C 1:55 Glaswand: feststehende, raumhohe Verglasung, Breite und Höhe frei
- [x] B 4:19, B 4:26 „Markieren in 3D“: „Wenn offen“ / „Wenn geschlossen (z. B. WC)“ – braucht einen Kontakt
- [x] B 3:22 „Ohne Sensor geschlossen zeigen“ (sonst steht eine Tür ohne Kontakt halb offen)
- [x] B 3:22 Hinweistext unten im Formular
- [x] B 4:46, B 4:46 Fixieren-Schloss oben im Formular; „Löschen“ / Entf
- [x] B 1:31 „Zurück zu <Raum>“

## Teil 2 und 3 – Sensoren, Rollläden, Garagentor, live in 3D

- [x] B 1:40, B 2:32 Automatisch: Kontakte und Rollläden aus dem Bereich des Raums – „Automatisch (Name)“ / „Automatisch (keiner gefunden)“
- [x] B 2:32, B 2:52 Der Reihe nach: bei mehreren Türen in einem Raum die Zuordnung prüfen und von Hand wählen
- [x] B 2:42 Auswahlfeld mit Suche, „Keiner“
- [x] C 0:48, C 2:58 „Rollladen“ (Fenster) – fährt in 3D mit der Position der Cover-Entität
- [x] B 3:52, C 3:21 „Antrieb (Tür oder Tor mit Motor)“ bei Türen und Toren; Rollladen auch vor Haustür / Terrassentür / Schiebetür
- [x] B 4:08, C 3:04 „Positions-Sensor (live)“ (z. B. Homematic „Level“)
- [x] C 3:13 „Sensor zählt umgekehrt (0 = offen)“
- [x] B 4:08 „Vor dem Schalten nachfragen“
- [x] B 1:47, C 1:18 „Kontakt“ – die Tür schwingt auf, das Fenster öffnet sich
- [x] C 2:12 „Sensor-Art“: „Fensterkontakt (offen/zu)“, „Griff-Sensor (offen/gekippt/zu)“, „Kontakt + Kipp-Sensor“
- [x] C 2:19 „Griff-Sensor“
- [x] C 2:31 „Kipp-Sensor“
- [x] C 2:39 „Kippwinkel-Sensor (°, optional)“, „Winkel für „ganz gekippt“ (°)“, „Offset: Winkel bei geschlossenem Fenster (°)“, „Winkel zählt andersherum“
- [x] C 2:49 Gekippt zählt auch für die Warnung „Fenster offen bei Regen“
- [x] C 0:48, C 1:43, B 3:14 Zwei Flügel: „Hauptflügel“ / „Zweiter Flügel“ mit eigenen Sensoren (Türen: „Kontakt Hauptflügel“ / „Kontakt zweiter Flügel“)
- [x] B 3:45, B 3:52, B 4:01 Garagentor: Cover oder Garagentor-Kontakt aus dem Bereich, der offene Teil liegt unter der Decke, kein Stil
- [x] C 3:32 Live in 3D: Tür schwingt, Fenster offen / gekippt, Rollladen fährt, Garagentor fährt, warmes Leuchten
- [x] C 2:49 Erweiterung (ein Satz): „Wetter draußen“ zeigt den Regen am Haus
- [x] B 4:37 Tipp: „🔒 Grundriss“ sperrt Räume, Wände, Türen und Fenster, wenn alles passt
