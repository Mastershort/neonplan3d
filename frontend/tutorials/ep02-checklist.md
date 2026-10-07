# Folge 2 – Bauplan als Vorlage: Grundriss, Türen und Fenster – Abdeckung

Quellen: `docs/anleitung.md` 4.1 (Bedienung), 4.2 (Hintergrundbild), 4.3, 4.4, 4.6, 4.7; Formulare in
`editor.ts` (`renderBackgroundForm`, `renderRoomForm`, `renderEdgeHeights`, `renderFreeWallForm`,
`renderOpeningForm`, `renderStyleSelect`, `renderSidelightFields`), Beschriftungen aus `i18n.ts`.
Zwei Teile: **A** = Teil 1 (Bild, Räume, Wände), **B** = Teil 2 (Türen, Fenster, Garagentor, Sensoren).
Zeiten werden nach der Aufnahme eingetragen: `[x] A 1:23` = Teil 1 bei 1:23.

## Teil 1 – Vorlage (Grundriss-Bild)

- [ ] Ausgangspunkt: „Etage hinzufügen“ → „Erdgeschoss“
- [ ] Abschnitt „Vorlage (Grundriss-Bild)“ unten in der Seitenleiste aufklappen
- [ ] „Bild wählen …“ – Foto oder Scan, PNG, JPG oder WebP
- [ ] Das Bild liegt unter dem Raster (ein Kästchen = 1 m), anfangs 12 m breit bzw. über den vorhandenen Räumen
- [ ] Die Vorlage gibt es nur im Editor, nicht in 3D; jede Etage hat ihre eigene
- [ ] „Deckkraft“ – Bild kräftiger oder dezenter
- [ ] Zoomen mit dem Mausrad, Ansicht auf einer leeren Stelle ziehen (Tablet: zwei Finger)
- [ ] „Verschieben, skalieren und drehen“ – das Bild bekommt Griffe wie ein Möbel
- [ ] Bild ziehen = verschieben
- [ ] Griff unten rechts = größer / kleiner
- [ ] Runder Griff oben = drehen, mit Umschalt in 15°-Schritten
- [ ] Hinweistext im Formular (Griffe / „Das Bild liegt fest …“)
- [ ] „Fertig“ legt das Bild fest, dann zeichnest du ungestört darüber
- [ ] Felder „X (m)“ und „Y (m)“
- [ ] „Breite im Plan (m)“
- [ ] „Drehung (°)“ auf den Zehntelgrad genau
- [ ] „📐 Gerade ausrichten“: zwei Punkte auf eine Wand, die waagerecht oder senkrecht sein soll – das Bild dreht sich passend
- [ ] „Ausrichten abbrechen“
- [ ] „📏 Maßstab mit Lineal“: Anfang und Ende einer Strecke bekannter Länge (bemaßte Wand, Maßkette)
- [ ] Hinweis „Im Plan gemessen: … m“
- [ ] „Echte Länge (m)“ eintippen, „Maßstab übernehmen“ – der erste Punkt bleibt stehen
- [ ] „Lineal abbrechen“
- [ ] Reihenfolge: erst gerade ausrichten, dann Maßstab, dann zeichnen
- [ ] Tipp: Hausecke auf einen Rasterpunkt schieben – Ecken rasten dann sauber auf den Wänden ein
- [ ] „Vorlage entfernen“

## Teil 1 – Räume nachzeichnen

- [ ] „Rechteck“ für rechteckige Räume (aus Folge 1)
- [ ] „Freie Form“: Punkt für Punkt, z. B. ein L-förmiger Raum
- [ ] Hinweis unten im Plan zum aktiven Werkzeug
- [ ] Freie Form schließen: Tipp auf den ersten Punkt oder Enter; Esc bricht ab
- [ ] Fangen: Raster, Ecken und Kanten anderer Räume, Fluchtlinien; Alt = ohne Fangen
- [ ] Ecken ziehen mit „Auswählen“
- [ ] „+“ auf einer Kante fügt einen Punkt ein (Erker)
- [ ] Liste „Eckpunkte“ mit X / Y je Punkt
- [ ] „Punkt löschen“ (×)
- [ ] Pfeiltasten verschieben das Ausgewählte (Rasterschritt, Umschalt 10 cm, Alt 1 cm)
- [ ] „Rückgängig“ / Strg+Z, „Wiederholen“ / Strg+Y
- [ ] „Alles zeigen“
- [ ] Räume mit Bereichen verknüpfen (aus Folge 1, hier nur erwähnt)

## Teil 1 – Wände

- [ ] Wände entstehen automatisch: gemeinsame Kante = Innenwand, Außenkante = Außenwand, Ecken und T-Stöße verschnitten
- [ ] Wandstärken unter „Einstellungen“: „Außenwand (m)“, „Innenwand (m)“
- [ ] Kasten „Wandhöhen“: jede Wand nach ihren Eckpunkten („Wand 2–3“, Nummern im Plan) mit Länge
- [ ] Über eine Zeile fahren / ins Feld tippen – die Wand leuchtet im Plan
- [ ] Geteilte Wände: Nachbarräume teilen eine Wand automatisch in „Teil 1“, „Teil 2“, jedes Stück mit eigener Höhe
- [ ] „Höhe (m)“ je Wand – Brüstung oder Theke; niedrige Wände sind im Plan heller
- [ ] Fenster und Türen in einer niedrigen Wand enden an der Wandhöhe
- [ ] Teilen sich zwei Räume die Wand, gilt die niedrigere Höhe
- [ ] ↥ setzt auf volle Raumhöhe zurück
- [ ] ✂ teilt eine Wand (zwei Höhen in einer Flucht)
- [ ] „Teilpunkt ab Ecke (m)“, im Plan als Strich markiert
- [ ] ⨉ fügt die Teile wieder zusammen
- [ ] „Dicke (m)“ je Wand (z. B. 0,365 / 0,115)
- [ ] ↺ setzt die Dicke auf die Hausdicke zurück; bei geteilter Wand gilt die dickere Angabe, die Wand bleibt mittig
- [ ] „Keine Wand“ – offener Grundriss, in Home Assistant getrennte Bereiche, Licht fällt hindurch; ↥ holt sie zurück
- [ ] Werkzeug „Wand“: einzelne, frei stehende Wand ziehen (Raumteiler, halbe Wand)
- [ ] Umschalt hält sie gerade, Alt zeichnet ohne Fangen; trifft sie eine Raumwand, wird die Ecke verschnitten
- [ ] Ausgewählt: Endpunkte an den Griffen ziehen, ganze Wand an der Linie verschieben
- [ ] „Länge (m)“, „Wandstärke (m)“, „Höhe (m)“ (halbhohe Wand)
- [ ] Türen und Fenster gehen auch in einzelne Wände; „Löschen“ nimmt sie mit
- [ ] „3D daneben“ zur Kontrolle, oben „Wände hoch“ / „Schnitt“

## Teil 2 – Türen und Fenster einsetzen

- [ ] Räume sind mit ihren Bereichen verknüpft (Folge 1) – darüber kommen Kontakte und Rollläden
- [ ] Werkzeug „Tür & Fenster“, dann auf eine Wand tippen (Raumwand oder einzelne Wand); Hinweis unten
- [ ] Das Werkzeug springt danach auf „Auswählen“ zurück – vor jeder Öffnung neu wählen
- [ ] Art-Knöpfe: „Tür“, „Haustür“, „Doppeltür“, „Fenster“, „Fenster 2-flügelig“, „Terrassentür“, „Terrassentür 2-flügelig“, „Garagentor“, „Glaswand“
- [ ] Die zuletzt gewählte Art gilt für die nächste Öffnung
- [ ] In einer Außenwand wird eine Tür automatisch zur Haustür („Automatisch (Haustür)“)
- [ ] „Breite (m)“
- [ ] „Mitte ab Ecke (m)“
- [ ] „Höhe (m)“
- [ ] „Brüstung (m)“ (Fenster); Brüstung 0 = Terrassentür
- [ ] Mit „Auswählen“ entlang der Wand ziehen; Pfeiltasten schieben entlang der Wand
- [ ] „⇆ Anschlag wechseln“ (bei zwei Flügeln „Hauptflügel wechseln“)
- [ ] „⇅ Öffnungsrichtung umdrehen“ (Türen)
- [ ] „Anschlag (vom Raum aus)“ Links / Rechts; „Hauptflügel (vom Raum aus)“
- [ ] „Stil“ Türen: „Automatisch (…)“, „Zimmertür“, „Haustür“, „Haustür mit Glasausschnitt“, „Haustür mit Seitenteil“, „Haustür mit 2 Seitenteilen“, „Glastür“, „Schiebetür“, „Durchbruch (ohne Tür)“
- [ ] Seitenteil: „Breite Seitenteil (m)“ (leer = automatisch), „Seitenteil an der Anschlagseite“
- [ ] Zwei Seitenteile: „Seitenteil links (m)“ / „Seitenteil rechts (m)“
- [ ] Durchbruch: nur eine Öffnung ohne Zarge und Türblatt, Licht fällt hindurch
- [ ] „Stil“ Fenster: „Standard“, „Mit Sprossen“, „Glaswand (feststehend)“
- [ ] Glaswand: feststehende, raumhohe Verglasung, Breite und Höhe frei
- [ ] „Markieren in 3D“: „Wenn offen“ / „Wenn geschlossen (z. B. WC)“ – braucht einen Kontakt
- [ ] „Ohne Sensor geschlossen zeigen“ (sonst steht eine Tür ohne Kontakt halb offen)
- [ ] Hinweistext unten im Formular
- [ ] Fixieren-Schloss oben im Formular; „Löschen“ / Entf
- [ ] „Zurück zu <Raum>“

## Teil 2 – Sensoren, Rollläden, Garagentor, live in 3D

- [ ] Automatisch: Kontakte und Rollläden aus dem Bereich des Raums – „Automatisch (Name)“ / „Automatisch (keiner gefunden)“
- [ ] Der Reihe nach: bei mehreren Türen in einem Raum die Zuordnung prüfen und von Hand wählen
- [ ] Auswahlfeld mit Suche, „Keiner“
- [ ] „Rollladen“ (Fenster) – fährt in 3D mit der Position der Cover-Entität
- [ ] „Antrieb (Tür oder Tor mit Motor)“ bei Türen und Toren; Rollladen auch vor Haustür / Terrassentür / Schiebetür
- [ ] „Positions-Sensor (live)“ (z. B. Homematic „Level“)
- [ ] „Sensor zählt umgekehrt (0 = offen)“
- [ ] „Vor dem Schalten nachfragen“
- [ ] „Kontakt“ – die Tür schwingt auf, das Fenster öffnet sich
- [ ] „Sensor-Art“: „Fensterkontakt (offen/zu)“, „Griff-Sensor (offen/gekippt/zu)“, „Kontakt + Kipp-Sensor“
- [ ] „Griff-Sensor“
- [ ] „Kipp-Sensor“
- [ ] „Kippwinkel-Sensor (°, optional)“, „Winkel für „ganz gekippt“ (°)“, „Offset: Winkel bei geschlossenem Fenster (°)“, „Winkel zählt andersherum“
- [ ] Gekippt zählt auch für die Warnung „Fenster offen bei Regen“
- [ ] Zwei Flügel: „Hauptflügel“ / „Zweiter Flügel“ mit eigenen Sensoren (Türen: „Kontakt Hauptflügel“ / „Kontakt zweiter Flügel“)
- [ ] Garagentor: Cover oder Garagentor-Kontakt aus dem Bereich, der offene Teil liegt unter der Decke, kein Stil
- [ ] Live in 3D: Tür schwingt, Fenster offen / gekippt, Rollladen fährt, Garagentor fährt, warmes Leuchten
- [ ] Erweiterung (ein Satz): „Wetter draußen“ zeigt den Regen am Haus
- [ ] Tipp: „🔒 Grundriss“ sperrt Räume, Wände, Türen und Fenster, wenn alles passt
