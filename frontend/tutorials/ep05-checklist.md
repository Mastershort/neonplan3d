# Folge 5 – Erweiterungen: Shop verbinden und Möbel-Packs: Coverage-Checkliste

Quellen: `docs/anleitung.md` Kapitel 7 (7.1–7.3), dazu 6 (Einleitung: Schloss und Hinweis), 4.8 (Bibliothek: Packs
unter den eingebauten Abschnitten, Suche nach Pack-Name), 10 (Komplett-Backup mit Packs), 11 (Shop nur mit
Schlüssel) und 12 (FAQ: graue Kästen, „Limit erreicht“, „ausgelastet“/429, neuere Version nötig, Shop nicht
erreichbar); Seite `frontend/src/components/extensions.ts`, Pro-Hinweis `view3d.ts` (`renderProHint`), Schalter in
`panel.ts`, Bibliothek in `editor.ts`, Labels aus `frontend/src/i18n.ts`. Gezeigt im Demo-Shopmodus (`?shop`) mit
erfundenem Schlüssel `NP-DEMO-1234-ABCD-7K2M`, ohne Preise.
Zeit = Stelle im fertigen Video (ep05.mp4, 6:57, eine Folge, kein Teil 2 nötig).

## Kostenlos und gesperrt
- [x] 0:00 Alles aus den Grundlagen ist kostenlos (kein Abo, kein Konto)
- [x] 0:41 Eingebaute Möbel in der Bibliothek: Abschnitte Leuchten, Wohnen, Essen, Küche, Schlafen, Bad & Hauswirtschaft, Arbeiten & Sonstiges – kostenlos
- [x] 0:53 Installierte Packs als eigene Abschnitte darunter („Demo-Pack“)
- [x] 0:59 Kasten „Mehr Möbel und Pro-Funktionen“ unten in der Bibliothek mit „Erweiterungen öffnen“
- [x] 0:21 Gesperrte Pro-Schalter unten in 3D: „🔒 Spur“, „🔒 Kameras“, „🔒 Wetter“
- [x] 0:28 / 0:32 Pro-Hinweis „NeonPlan Pro“ beim Tippen: „Zum Shop“, „Mehr erfahren“, „Erweiterungen“, „Schließen“

## Seite „✦ Erweiterungen“ (7)
- [x] 0:13 / 1:09 Reiter „✦ Erweiterungen“ oben, nur für Administratoren (gesagt, Demo ist Admin)
- [x] 1:12 Kopfzeile: „Shop öffnen“, „Problem melden“, „Idee vorschlagen“, „Community auf Discord“, „Anleitung“
- [x] 1:20 Aufbau: Shop-Verbindung, Pro-Erweiterungen, Möbel-Packs
- [x] 1:25 Ohne Schlüssel fragt NeonPlan 3D den Shop nie (11)

## Pro-Erweiterungen (7.2)
- [x] 1:31 Kacheln: Kamera-Cockpit, Wetter draußen, Bildschirme live, Energie Pro, Klang & Kino, Auto Pro
- [x] 1:40 Gesperrt: 🔒 und „Im Shop ansehen“
- [x] 1:49 „Mehr erfahren“ öffnet das Kapitel der Anleitung
- [x] 4:09 Aktiv: ✓ und „aktiv“
- [x] 4:02 Pro-Erweiterungen kommen wie Packs über die Shop-Verbindung („Installieren“)
- [x] 4:13 Nach der Installation ist der Schalter in 3D frei („Wetter“ ohne Schloss, Regen am Haus)
- [x] 4:19 Unter „Möbel-Packs“: „schaltet n Pro-Funktionen frei“

## Shop-Verbindung (7.1)
- [x] 1:58 Lizenzschlüssel `NP-XXXX-XXXX-XXXX-XXXX` kommt mit dem ersten Kauf, steht in Bestell-Mail und Kundenkonto
- [x] 2:05 „Installations-Kennung“ = anonymer Fingerabdruck, „Kopieren“
- [x] 2:16 / 2:29 Schlüssel eintragen (Feld mit Platzhalter), Enter oder „Aktivieren“
- [x] 2:22 Fehler „Diesen Schlüssel kennt der Shop nicht. Er sieht so aus: …“ (Tippfehler)
- [x] 2:29 / 2:34 „Verbunden – die gekauften Packs stehen unten.“ / „Verbunden als … (Schlüssel …7K2M)“
- [x] 2:40 / 2:44 Liste der gekauften Packs: „noch nicht installiert“ → „Installieren“ (signiert für genau diese Installation)
- [x] 2:44 „installiert · v1“
- [x] 2:53 „Update auf v2 verfügbar“ → „Aktualisieren“
- [x] 2:59 Updates kommen von selbst: einmal täglich, installiert neue Käufe und Versionen
- [x] 3:07 „Jetzt prüfen“, „zuletzt geprüft …“, „Geprüft.“
- [x] 3:12 Pack-Updates: Seite zeigt einmal, was dazukam („Küche wurde auf Version 2 aktualisiert: 10 neue Möbel …“)
- [x] 3:19 / 3:26 „Neu im Shop“: Packs und Pro-Erweiterungen, die du noch nicht hast, „NEU“-Schild, Art (Möbel-Pack / Pro-Erweiterung)
- [x] 3:55 Punkt am Reiter „✦ Erweiterungen“, wenn es Neues gibt
- [x] 3:47 Treuerabatt-Code mit „Kopieren“; Tipp auf ein Angebot nimmt ihn in den Warenkorb
- [x] 1:58–2:16 „Mehr Packs im Shop“-Link / Hinweistext unter der Verbindung (im Bild unter dem Schlüsselfeld; Inhalt gesagt 1:58 und 2:59)
- [x] 5:36 „Trennen“: Rückfrage, Schlüssel weg, installierte Packs bleiben, nur keine automatischen Updates mehr
- [x] 5:44 / 6:39 Ohne Internet läuft alles weiter (lokal geprüft); Shop nicht erreichbar → alles läuft weiter (12)
- [x] 5:52 Mehrere Installationen: höchstens drei gleichzeitig, beim Umzug neue verbinden, älteste fällt heraus
- [x] 6:01 Bis zu fünf neue Verbindungen pro Jahr; „Limit erreicht“ → bei uns melden (12)
- [x] 6:08 „Der Shop ist gerade ausgelastet“ → eine Minute warten, noch mal „Aktivieren“ (12)
- [x] 6:13 „braucht eine neuere NeonPlan-Version“ → erst über HACS aktualisieren (12)
- [x] 6:22 Komplett-Backup enthält die Packs, nicht den Schlüssel (10)

## Möbel-Packs (7.3)
- [x] 3:26 Welche Packs es gibt (Räume, Bereiche, Fahrzeuge, Treppen, Heimkino, Haustechnik, Haustiere, Architektur)
- [x] 3:39 Geräte in Packs mit Leuchtfläche, verknüpfbar (Media-Player, Schalter, Licht)
- [x] 1:53 / 5:17 Installierte Packs unten mit „Entfernen“
- [x] 4:24 „Möbel-Packs importieren …“: Schnupper-Packs aus dem Newsletter, Downloads, Installationen ohne Internet
- [x] 4:33 Mehrere Dateien auf einmal
- [x] 4:40 Meldung „„…“ von … importiert – n Möbel“, „Lizenziert für …“
- [x] 4:47 Packs sind signiert; nur vom Herausgeber, veränderte Dateien abgelehnt („Nur unterschriebene Packs …“)
- [x] 0:53 / 4:55 Neue Möbel in der Bibliothek: je Pack ein Abschnitt unter den eingebauten
- [x] 5:02 Vorschau beim Überfahren
- [x] 5:08 Suche findet auch den Pack-Namen
- [x] 5:12 Pack-Möbel platzieren wie jedes andere Möbel
- [x] 5:17 / 5:23 Entfernen: Rückfrage, Möbel bleiben als einfache Kästen („Möbel aus entferntem Pack“)
- [x] 5:23 Wieder importieren: Möbel sind zurück, mit Verknüpfungen (gesagt über dem grauen Kasten, nicht noch einmal importiert)
- [x] 5:30 Neuere Version ersetzt die alte, im Plan geht nichts verloren
