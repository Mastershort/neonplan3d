# Folge 12 – Einstellungen, Sicherung und Umzug: Coverage-Checkliste

Quellen: `docs/anleitung.md` 4.5 (Einstellungen), 4.1 (🔒 Grundriss, Rückgängig/Wiederholen, Tasten), 5.7/5.8
(Sonnenlicht, Regenwarnung), 6.2 (Wetter-Effekte), 7.1 (Schlüssel, Installationen), 10 (Sicherung und Umzug),
11 (Daten und Datenschutz), 12 (Hilfe und Rückmeldung); die Seitenleiste in `frontend/src/components/editor.ts`
(`renderSide` → `renderStartView`, `renderFavorites` mit `renderOwnButtons` und `renderMediaPresets`,
`renderHelpLinks`, `renderBackgroundForm`, `renderSettings`, `renderBackup`), `transfer.ts` (Export, Vorlage ohne
Bereiche/Geräte/Bilder), Labels aus `frontend/src/i18n.ts`. Zu viel für 8 Minuten → zwei Teile: **a** = Teil 1
„Alle Einstellungen“, **b** = Teil 2 „Sicherung, Umzug und Datenschutz“ (mit dem Abschluss der Serie).
Zeit = Stelle im fertigen Video (Zeilenbeginn, echte Stimme). Demo-Haus der Online-Demo (erfundene Daten), nie ein
echter Lizenzschlüssel. Versionszeile 1.12.7.

Fertige Videos: **Teil 1** (`ep12a`, 6:49), **Teil 2** (`ep12b`, 5:27). Zeit vor dem Punkt = Stelle im jeweiligen Teil (a = Teil 1, b = Teil 2).

## Wo alles liegt
- [x] 0:27 a · Reiter „Editor“, Seitenleiste rechts: ganz unten die Abschnitte zum Aufklappen
- [x] 0:36 a · Reihenfolge: „Startansicht“, „Favoriten“, („Hilfe und Rückmeldung“), „Vorlage (Grundriss-Bild)“, „Einstellungen“, „Sicherung“
- [x] 0:27 a · „3D daneben“ zeigt jede Änderung sofort in 3D
- [x] 0:46 a · Alles gilt für den ganzen Plan (alle Geräte, Karte und Kiosk), nicht nur für dieses Gerät

## Wände und Raster (4.5, 4.4)
- [x] 0:52 a · „Außenwand (m)“: Stärke aller Außenwände (Demo 0,24 → 0,36 und zurück, in 3D sichtbar)
- [x] 1:01 a · „Innenwand (m)“: Stärke aller Innenwände
- [x] 1:09 a · Tipp: einzelne Wand dicker im Raum-Formular „Wandhöhen“ → „Dicke (m)“ (Folge 2)
- [x] 1:18 a · „Raster (m)“: Schrittweite beim Zeichnen (Demo 5 cm), Fangen der Ecken
- [x] 1:25 a · Pfeiltasten schieben um einen Rasterschritt, Umschalt 10 cm, Alt 1 cm
- [x] 1:32 a · Fehler: grobes Raster → Räume passen nicht aufs Maß; zum Nachzeichnen fein lassen

## Nordrichtung und Sonnenlicht (4.5, 5.7)
- [x] 1:39 a · „Nordrichtung (° im Uhrzeigersinn von oben)“: Grad im Uhrzeigersinn von oben im Plan
- [x] 1:46 a · Wozu: Sonnenstand aus sun.sun, Licht durch die Fenster, die zur Sonne zeigen
- [x] 1:59 a · Typischer Fehler: Sonne fällt durch die falschen Fenster → Nordrichtung prüfen
- [x] 2:05 a · „Sonnenlicht durch die Fenster“: Haken weg = keine Sonnenflecken auf dem Boden
- [x] 2:14 a · Heruntergelassene Rollläden verkleinern die Flecken

## Dach – Grundlagen (4.5, Verweis Folge 7/8)
- [x] 2:19 a · „Dach“: „Kein Dach“, „Flachdach“, „Satteldach“, „Dachflächen (frei)“
- [x] 2:28 a · „First“: „Entlang der langen Seite“ / „Entlang der kurzen Seite (z. B. Reihenhaus)“
- [x] 2:38 a · „Dachneigung (°)“ (in 3D sichtbar)
- [x] 2:46 a · „Dachüberstand (m)“
- [x] 2:52 a · „Dachflächen (frei)“ schlägt Flächen aus den Räumen vor und öffnet das Werkzeug Dach → Folgen 7 und 8

## Wetter (4.5, 6.2, 5.8)
- [x] 2:59 a · „Wetter-Entität“: suchbare Auswahl, „Automatisch (…)“ nimmt die erste
- [x] 3:08 a · Wofür: Regen, Schnee, Nebel, Wolken in 3D und die Regenwarnung
- [x] 3:08 a · „Wetter-Effekte in 3D“: „Regen“, „Schnee“, „Nebel (graut die Szene ein)“, „Wolken dunkeln Himmel und Sonne ab“, „Blitze bei Gewitter“, „Sonne und Mond am Himmel“
- [x] 3:17 a · Nebel ist anfangs aus; auf der Qualitätsstufe Tablet bleibt nur die Wolken-Abdunkelung
- [x] 3:25 a · Das Wetter ums Haus ist die Pro-Erweiterung „Wetter draußen“ (ein Satz)
- [x] 3:31 a · „Warnung: Fenster offen bei Regen“: kostenlos, nimmt dieselbe Wetter-Entität, hier einzeln abschaltbar

## Startansicht (4.5, Folge 10)
- [x] 3:42 a · „Startansicht“ aufklappen, 3D rechts drehen, „Aktuelle 3D-Ansicht als Start merken“
- [x] 3:51 a · gilt für 3D-Ansicht, Karte und Kiosk; YAML-Zeile für eine Karte mit eigener Ansicht – *die YAML-Zeile ist nicht gesagt; die YAML-Option `start_view` zeigt Folge 11 (Teil 2, „YAML: Optionen nur im Code“)*
- [x] 3:51 a · „Standard“ setzt zurück; Etage und Raum haben eigene Startansichten (Folge 10)

## Favoriten und eigene Knöpfe (4.5)
- [x] 4:00 a · „Favoriten“: Szenen, Skripte, Automationen, Tasten und Schalter für den Stern der 3D-Ansicht
- [x] 4:09 a · Beispiele: Party, Anwesenheitssimulation, Verschattung, Bewässerung
- [x] 4:15 a · „Favorit hinzufügen“: suchbare Auswahl (tippen zum Suchen)
- [x] 4:22 a · ↑ ↓ Reihenfolge, ✕ entfernt
- [x] 4:26 a · „Eigene Knöpfe“: „+ Eigener Knopf“
- [x] 4:35 a · „Beschriftung“
- [x] 4:35 a · „Aktion“: „Seite öffnen“ (Pfad wie /lovelace/rollos)
- [x] 4:42 a · „Details einer Entität“ (Entität)
- [x] 4:49 a · „Dienst aufrufen“ („Dienst (domain.service)“ + „Daten (JSON)“)
- [x] 4:57 a · „fire-dom-event (browser_mod)“: Popup mit eigener Karte
- [x] 5:06 a · „Eigenes Symbol (Material-Design-Icon)“ (mdi:…)
- [x] 5:13 a · ↑ verschiebt einen Knopf, „Löschen“ entfernt ihn
- [x] 5:17 a · Ergebnis im Stern der 3D-Ansicht
- [x] 5:24 a · „Sender und Playlists (Klang & Kino)“: für die Pro-Erweiterung Klang & Kino (ein Satz)

## Grundriss sperren (4.1)
- [x] 5:31 a · „🔒 Grundriss“ oben in der Werkzeugleiste
- [x] 5:37 a · sperrt Räume, Wände, Türen, Fenster, Außenflächen (auch neu gezeichnete); Möbel und Geräte bleiben frei
- [x] 5:46 a · Gesperrt: auswählen und im Formular bearbeiten geht, ziehen nicht – Ziehen bewegt die Ansicht
- [x] 5:52 a · Raum zeigt „🔒 Grundriss gesperrt“, ein Klick darauf entsperrt
- [x] 5:52 a · Rechtsklick auf einen Raum: „🔒 Grundriss sperren“ / „🔓 Grundriss entsperren“
- [x] 5:59 a · Möbel/Geräte einzeln fixieren mit „🔓 Fixieren“ / Taste L (Verweis Folge 4)

## Weitere Abschnitte (Verweise)
- [x] 6:06 a · „Vorlage (Grundriss-Bild)“: Grundriss-Bild als Vorlage → Folge 2
- [x] 6:11 a · Energie-Sensoren (Netz, Solar, Akku) stehen im Werkzeug „Energie“ → Folge zu Energie Pro
- [x] 6:19 a · Sprache folgt dem Home-Assistant-Profil
- [x] 4:43 b · „Hilfe und Rückmeldung“: „Problem melden“, „Idee vorschlagen“, „Community auf Discord“

## Rückgängig (4.1)
- [x] 0:26 b · „Rückgängig“ / „Wiederholen“ oben in der Werkzeugleiste
- [x] 0:32 b · Strg+Z, Strg+Y bzw. Strg+Umschalt+Z – *gesagt: Strg+Z und Strg+Umschalt+Z*
- [x] 0:38 b · gilt für die Änderungen dieser Sitzung; für ältere Stände die Wiederherstellungspunkte

## Wiederherstellungspunkte (10)
- [x] 0:44 b · Abschnitt „Sicherung“ unten in der Seitenleiste, „Wiederherstellungspunkte“
- [x] 0:49 b · entstehen beim Bearbeiten höchstens alle 10 Minuten, die letzten 20 bleiben
- [x] 0:49 b · jede Zeile: Zeit, Räume, Möbel
- [x] 0:59 b · „Wiederherstellen“ mit Rückfrage; der jetzige Stand bleibt selbst als Punkt erhalten
- [x] 1:41 b · auch ein Import legt vorher einen Punkt an

## Dateien: Export und Import (10)
- [x] 1:07 b · „Exportieren“: der Plan mit allen Verknüpfungen als Datei (ohne Bilder: „Hintergrundbilder sind nicht in der Datei enthalten.“)
- [x] 1:21 b · „Als Vorlage teilen“: ohne Bereiche, Geräte, Sensoren und Bilder – zum Weitergeben
- [x] 1:36 b · „Importieren …“: ersetzt den ganzen Grundriss nach Rückfrage, jetziger Stand bleibt als Punkt
- [x] 1:48 b · Nach dem Import einer Vorlage: Räume ohne Bereich, keine Geräte → „Bereich“ wählen, Geräte sind zurück
- [x] 1:56 b · Auf einem anderen Home Assistant: Verknüpfungen laufen über Bereichs- und Entitäts-IDs; gleiche Namen → alles verbunden, sonst je Raum den Bereich neu wählen
- [x] 2:12 b · Zurück zum alten Stand über den Wiederherstellungspunkt

## Komplett-Backup (10)
- [x] 2:22 b · „Komplett-Backup“: „Alles sichern (Plan, Bilder, Packs)“
- [x] 2:22 b · enthält Plan, alle Hintergrund- und Bildschirmbilder, die installierten Packs
- [x] 2:36 b · der Lizenzschlüssel ist nicht in der Datei
- [x] 2:39 b · „Komplett-Backup wiederherstellen …“ mit Rückfrage; dieselbe oder eine andere Installation
- [x] 2:48 b · jedes Pack wird erneut geprüft; für eine andere Installation signierte Packs werden übersprungen
- [x] 2:56 b · Das Backup von Home Assistant sichert NeonPlan 3D ebenfalls vollständig

## Umzug auf ein neues Home Assistant (10, 7.1)
- [x] 3:03 b · Weg 1: Home-Assistant-Backup auf der neuen Hardware einspielen → alles da
- [x] 3:13 b · Weg 2 Schritt 1: altes System „Alles sichern“
- [x] 3:18 b · Schritt 2: neues System NeonPlan 3D über HACS installieren, Integration hinzufügen, Bereiche anlegen
- [x] 3:27 b · Schritt 3: Editor → „Sicherung“ → „Komplett-Backup wiederherstellen …“
- [x] 3:38 b · Schritt 4: „Erweiterungen“ → Schlüssel eintragen → „Aktivieren“ → Packs „Installieren“
- [x] 3:53 b · Installationsbindung: Packs sind für genau eine Installation signiert („Installations-Kennung“, anonymer Fingerabdruck)
- [x] 4:03 b · Ein Schlüssel: höchstens drei Installationen gleichzeitig, die älteste fällt heraus; bis zu fünf neue Verbindungen pro Jahr
- [x] 4:13 b · „Trennen“ auf dem alten System (optional), installierte Packs bleiben

## Daten und Datenschutz (11)
- [x] 4:19 b · Plan, Bilder, Packs liegen in Home Assistant unter .storage, nichts verlässt die Installation
- [x] 4:28 b · Internet nur mit Lizenzschlüssel: einmal am Tag mastershort.de, Schlüssel + anonyme Kennung
- [x] 4:37 b · Kamerabilder, Verlauf, Zustände bleiben in Home Assistant, nur im Browser angezeigt

## Abschluss der Serie
- [x] 5:07 b · Dank an die Zuschauer, Playlist „NeonPlan 3D – Tutorials“
- [x] 5:13 b · Online-Demo, Anleitung, GitHub für Fehler, Discord-Community
- [x] 5:21 b · läuft auch auf alten Wandtablets
