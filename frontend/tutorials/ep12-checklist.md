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

TIMES

## Wo alles liegt
- [ ] a · Reiter „Editor“, Seitenleiste rechts: ganz unten die Abschnitte zum Aufklappen
- [ ] a · Reihenfolge: „Startansicht“, „Favoriten“, („Hilfe und Rückmeldung“), „Vorlage (Grundriss-Bild)“, „Einstellungen“, „Sicherung“
- [ ] a · „3D daneben“ zeigt jede Änderung sofort in 3D
- [ ] a · Alles gilt für den ganzen Plan (alle Geräte, Karte und Kiosk), nicht nur für dieses Gerät

## Wände und Raster (4.5, 4.4)
- [ ] a · „Außenwand (m)“: Stärke aller Außenwände (Demo 0,24 → 0,36 und zurück, in 3D sichtbar)
- [ ] a · „Innenwand (m)“: Stärke aller Innenwände
- [ ] a · Tipp: einzelne Wand dicker im Raum-Formular „Wandhöhen“ → „Dicke (m)“ (Folge 2)
- [ ] a · „Raster (m)“: Schrittweite beim Zeichnen (Demo 5 cm), Fangen der Ecken
- [ ] a · Pfeiltasten schieben um einen Rasterschritt, Umschalt 10 cm, Alt 1 cm
- [ ] a · Fehler: grobes Raster → Räume passen nicht aufs Maß; zum Nachzeichnen fein lassen

## Nordrichtung und Sonnenlicht (4.5, 5.7)
- [ ] a · „Nordrichtung (° im Uhrzeigersinn von oben)“: Grad im Uhrzeigersinn von oben im Plan
- [ ] a · Wozu: Sonnenstand aus sun.sun, Licht durch die Fenster, die zur Sonne zeigen
- [ ] a · Typischer Fehler: Sonne fällt durch die falschen Fenster → Nordrichtung prüfen
- [ ] a · „Sonnenlicht durch die Fenster“: Haken weg = keine Sonnenflecken auf dem Boden
- [ ] a · Heruntergelassene Rollläden verkleinern die Flecken

## Dach – Grundlagen (4.5, Verweis Folge 7/8)
- [ ] a · „Dach“: „Kein Dach“, „Flachdach“, „Satteldach“, „Dachflächen (frei)“
- [ ] a · „First“: „Entlang der langen Seite“ / „Entlang der kurzen Seite (z. B. Reihenhaus)“
- [ ] a · „Dachneigung (°)“ (in 3D sichtbar)
- [ ] a · „Dachüberstand (m)“
- [ ] a · „Dachflächen (frei)“ schlägt Flächen aus den Räumen vor und öffnet das Werkzeug Dach → Folgen 7 und 8

## Wetter (4.5, 6.2, 5.8)
- [ ] a · „Wetter-Entität“: suchbare Auswahl, „Automatisch (…)“ nimmt die erste
- [ ] a · Wofür: Regen, Schnee, Nebel, Wolken in 3D und die Regenwarnung
- [ ] a · „Wetter-Effekte in 3D“: „Regen“, „Schnee“, „Nebel (graut die Szene ein)“, „Wolken dunkeln Himmel und Sonne ab“, „Blitze bei Gewitter“, „Sonne und Mond am Himmel“
- [ ] a · Nebel ist anfangs aus; auf der Qualitätsstufe Tablet bleibt nur die Wolken-Abdunkelung
- [ ] a · Das Wetter ums Haus ist die Pro-Erweiterung „Wetter draußen“ (ein Satz)
- [ ] a · „Warnung: Fenster offen bei Regen“: kostenlos, nimmt dieselbe Wetter-Entität, hier einzeln abschaltbar

## Startansicht (4.5, Folge 10)
- [ ] a · „Startansicht“ aufklappen, 3D rechts drehen, „Aktuelle 3D-Ansicht als Start merken“
- [ ] a · gilt für 3D-Ansicht, Karte und Kiosk; YAML-Zeile für eine Karte mit eigener Ansicht
- [ ] a · „Standard“ setzt zurück; Etage und Raum haben eigene Startansichten (Folge 10)

## Favoriten und eigene Knöpfe (4.5)
- [ ] a · „Favoriten“: Szenen, Skripte, Automationen, Tasten und Schalter für den Stern der 3D-Ansicht
- [ ] a · Beispiele: Party, Anwesenheitssimulation, Verschattung, Bewässerung
- [ ] a · „Favorit hinzufügen“: suchbare Auswahl (tippen zum Suchen)
- [ ] a · ↑ ↓ Reihenfolge, ✕ entfernt
- [ ] a · „Eigene Knöpfe“: „+ Eigener Knopf“
- [ ] a · „Beschriftung“
- [ ] a · „Aktion“: „Seite öffnen“ (Pfad wie /lovelace/rollos)
- [ ] a · „Details einer Entität“ (Entität)
- [ ] a · „Dienst aufrufen“ („Dienst (domain.service)“ + „Daten (JSON)“)
- [ ] a · „fire-dom-event (browser_mod)“: Popup mit eigener Karte
- [ ] a · „Eigenes Symbol (Material-Design-Icon)“ (mdi:…)
- [ ] a · ↑ verschiebt einen Knopf, „Löschen“ entfernt ihn
- [ ] a · Ergebnis im Stern der 3D-Ansicht
- [ ] a · „Sender und Playlists (Klang & Kino)“: für die Pro-Erweiterung Klang & Kino (ein Satz)

## Grundriss sperren (4.1)
- [ ] a · „🔒 Grundriss“ oben in der Werkzeugleiste
- [ ] a · sperrt Räume, Wände, Türen, Fenster, Außenflächen (auch neu gezeichnete); Möbel und Geräte bleiben frei
- [ ] a · Gesperrt: auswählen und im Formular bearbeiten geht, ziehen nicht – Ziehen bewegt die Ansicht
- [ ] a · Raum zeigt „🔒 Grundriss gesperrt“, ein Klick darauf entsperrt
- [ ] a · Rechtsklick auf einen Raum: „🔒 Grundriss sperren“ / „🔓 Grundriss entsperren“
- [ ] a · Möbel/Geräte einzeln fixieren mit „🔓 Fixieren“ / Taste L (Verweis Folge 4)

## Weitere Abschnitte (Verweise)
- [ ] a · „Vorlage (Grundriss-Bild)“: Grundriss-Bild als Vorlage → Folge 2
- [ ] a · Energie-Sensoren (Netz, Solar, Akku) stehen im Werkzeug „Energie“ → Folge zu Energie Pro
- [ ] a · Sprache folgt dem Home-Assistant-Profil
- [ ] b · „Hilfe und Rückmeldung“: „Problem melden“, „Idee vorschlagen“, „Community auf Discord“

## Rückgängig (4.1)
- [ ] b · „Rückgängig“ / „Wiederholen“ oben in der Werkzeugleiste
- [ ] b · Strg+Z, Strg+Y bzw. Strg+Umschalt+Z
- [ ] b · gilt für die Änderungen dieser Sitzung; für ältere Stände die Wiederherstellungspunkte

## Wiederherstellungspunkte (10)
- [ ] b · Abschnitt „Sicherung“ unten in der Seitenleiste, „Wiederherstellungspunkte“
- [ ] b · entstehen beim Bearbeiten höchstens alle 10 Minuten, die letzten 20 bleiben
- [ ] b · jede Zeile: Zeit, Räume, Möbel
- [ ] b · „Wiederherstellen“ mit Rückfrage; der jetzige Stand bleibt selbst als Punkt erhalten
- [ ] b · auch ein Import legt vorher einen Punkt an

## Dateien: Export und Import (10)
- [ ] b · „Exportieren“: der Plan mit allen Verknüpfungen als Datei (ohne Bilder: „Hintergrundbilder sind nicht in der Datei enthalten.“)
- [ ] b · „Als Vorlage teilen“: ohne Bereiche, Geräte, Sensoren und Bilder – zum Weitergeben
- [ ] b · „Importieren …“: ersetzt den ganzen Grundriss nach Rückfrage, jetziger Stand bleibt als Punkt
- [ ] b · Nach dem Import einer Vorlage: Räume ohne Bereich, keine Geräte → „Bereich“ wählen, Geräte sind zurück
- [ ] b · Auf einem anderen Home Assistant: Verknüpfungen laufen über Bereichs- und Entitäts-IDs; gleiche Namen → alles verbunden, sonst je Raum den Bereich neu wählen
- [ ] b · Zurück zum alten Stand über den Wiederherstellungspunkt

## Komplett-Backup (10)
- [ ] b · „Komplett-Backup“: „Alles sichern (Plan, Bilder, Packs)“
- [ ] b · enthält Plan, alle Hintergrund- und Bildschirmbilder, die installierten Packs
- [ ] b · der Lizenzschlüssel ist nicht in der Datei
- [ ] b · „Komplett-Backup wiederherstellen …“ mit Rückfrage; dieselbe oder eine andere Installation
- [ ] b · jedes Pack wird erneut geprüft; für eine andere Installation signierte Packs werden übersprungen
- [ ] b · Das Backup von Home Assistant sichert NeonPlan 3D ebenfalls vollständig

## Umzug auf ein neues Home Assistant (10, 7.1)
- [ ] b · Weg 1: Home-Assistant-Backup auf der neuen Hardware einspielen → alles da
- [ ] b · Weg 2 Schritt 1: altes System „Alles sichern“
- [ ] b · Schritt 2: neues System NeonPlan 3D über HACS installieren, Integration hinzufügen, Bereiche anlegen
- [ ] b · Schritt 3: Editor → „Sicherung“ → „Komplett-Backup wiederherstellen …“
- [ ] b · Schritt 4: „Erweiterungen“ → Schlüssel eintragen → „Aktivieren“ → Packs „Installieren“
- [ ] b · Installationsbindung: Packs sind für genau eine Installation signiert („Installations-Kennung“, anonymer Fingerabdruck)
- [ ] b · Ein Schlüssel: höchstens drei Installationen gleichzeitig, die älteste fällt heraus; bis zu fünf neue Verbindungen pro Jahr
- [ ] b · „Trennen“ auf dem alten System (optional), installierte Packs bleiben

## Daten und Datenschutz (11)
- [ ] b · Plan, Bilder, Packs liegen in Home Assistant unter .storage, nichts verlässt die Installation
- [ ] b · Internet nur mit Lizenzschlüssel: einmal am Tag mastershort.de, Schlüssel + anonyme Kennung
- [ ] b · Kamerabilder, Verlauf, Zustände bleiben in Home Assistant, nur im Browser angezeigt

## Abschluss der Serie
- [ ] b · Dank an die Zuschauer, Playlist „NeonPlan 3D – Tutorials“
- [ ] b · Online-Demo, Anleitung, GitHub für Fehler, Discord-Community
- [ ] b · läuft auch auf alten Wandtablets
