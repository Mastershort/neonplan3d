# Folge 3 – Etagen, Treppen und Keller: Coverage-Checkliste

Quellen: `docs/anleitung.md` 4.2, 4.16, 4.18 (dazu 5.1/5.2 für die Etagen in 3D), Formulare in
`frontend/src/components/editor.ts` (Etagen-Formular, Möbelformular, Werkzeug Bodenöffnung, 3D daneben),
`frontend/src/viewer/build.ts` (`stairHoles`), Labels aus `frontend/src/i18n.ts`.
Zu lang für 8 Minuten → zwei Teile: **a** = Teil 1 „Etagen und Keller“ (5:15), **b** = Teil 2 „Treppen und
Bodenöffnungen“ (4:34). Zeit = Stelle im jeweiligen Entwurf (geschätztes Timing, ohne Stimme).

## Etagen (4.2)
- [x] a 0:24 Etagenliste oben in der Seitenleiste („Etagen“): Etage antippen wechselt die Etage im Plan
- [x] a 0:34 Etagen-Formular erscheint nur ohne Auswahl („Zurück zur Etage“)
- [x] a 0:52 „+ Etage hinzufügen“ öffnet das Menü „Etagen aus Home Assistant:“ mit „· Ebene n“
- [x] a 0:52 Nur HA-Etagen, die noch fehlen, stehen im Menü
- [x] a 0:52 / 3:20 „Leere Etage“ (im Menü gezeigt; sind alle HA-Etagen vergeben, legt der Knopf direkt eine leere Etage an)
- [x] a 0:59 Neue Etage aus HA: Höhe kommt aus der Ebene, Keller Ebene −1 → −2,75
- [x] a 1:03 Etagen werden von unten nach oben einsortiert (Keller landet unten)
- [x] a 0:41 „Name“
- [x] a 0:41 / 1:03 „Höhe über Boden (m)“; negativ = Keller unter der Erde
- [x] a 0:46 / 1:12 / 3:03 „Raumhöhe (m)“ (Keller und Dachgeschoss 2,20)
- [x] a 1:16–1:23 Faustregel: Höhe über Boden + Raumhöhe + Decke (0,25 m) = nächste Etage (Keller −2,45)
- [x] a 0:46 / 3:27 „Etage in Home Assistant“ (Auswahl, „– keine –“; schon verknüpfte HA-Etagen fehlen)
- [x] a 1:30 „Räume aus HA-Bereichen anlegen (4)“: je Bereich eine 4 × 3 m Kachel, schon verknüpft
- [x] a 1:45 Raum ziehen: Ecken rasten an anderen Räumen ein
- [x] a 1:50 Raum genau setzen mit „X (m)“ / „Y (m)“
- [x] a 2:02 „Lücken schließen“: bis 60 cm, Abstand wird Innenwandstärke (Meldung „2 Stellen geschlossen, Innenwand jetzt 0,12 m“)
- [x] a 2:02 Wann es hilft: Innenmaße gemessen
- [x] a 2:15–2:31 „Etage verschieben (m)“: X- und Y-Feld + „Verschieben“ (was mitwandert, was liegen bleibt)
- [x] a 2:38 „90° drehen“ (im Uhrzeigersinn um die Mitte der Räume)
- [x] a 2:45 Strg+Z / „Rückgängig“
- [x] a 2:49 „Alle Etagen mitnehmen (ganzes Haus)“
- [x] a 3:58–4:10 „Ansicht als Start der Etage“ (3D drehen, klicken)
- [x] a 4:17 ↺ neben der Startansicht nimmt sie zurück
- [x] a 3:49 Meldung ohne „3D daneben“
- [x] a 3:34 „Nach oben“ / „Nach unten“ (nur Reihenfolge der Liste; Lage bestimmt die Höhe über Boden)
- [x] a 3:42 „Etage löschen“ (Rückfrage, samt Räumen, Strg+Z)
- [x] a 0:30 / 3:08 Untere Etage gestrichelt unter dem Plan
- [x] a 3:16 Gespeichert wird von selbst

## Treppen (4.16)
- [x] b 0:33 Werkzeug „Möbel“ → Bibliothek, Suchfeld „Möbel suchen …“
- [x] b 0:25 Erst Raum antippen: neue Möbel landen in seiner Mitte
- [x] b 0:39 „Treppe“ (in „Arbeiten & Sonstiges“, kostenlos)
- [x] b 0:45 Höhe automatisch bis zur Etage darüber („Höhe (m)“ 2,75)
- [x] b 0:51 Richtung: steigt von der markierten Vorderkante nach hinten (Pfeil im Plan)
- [x] b 0:57 Drehen: „↻ 90°“ und „Drehung (°)“ („↺ 90°“ steht daneben)
- [x] b 1:03–1:09 Verschieben (ziehen), „X (m)“ / „Y (m)“, „Breite (m)“ / „Tiefe (m)“
- [x] b 0:25 Die Treppe gehört zur unteren Etage
- [x] b 1:15–1:31 Reicht sie bis zur Etage darüber, schneidet sie die Öffnung selbst (in 3D gezeigt)
- [x] b 1:36 Die Öffnung muss oben ganz in einem Raum liegen
- [x] b 1:09 Hinweistext im Formular („Die Treppe steigt nach hinten an …“)
- [x] b 3:09 „Möbelstück“-Auswahl: Art tauschen ohne neu zu setzen (L → U)
- [x] b 2:53 Pack „Treppen & Geländer“: gerade, freitragend, L, U, Wendel, Raumspar-, Außentreppe, Podest, Geländer (einmal als Erweiterung erwähnt, ohne Preis)
- [x] b 3:00 L-Treppe: Richtung mit „Drehung“, andere Seite mit „Spiegeln“
- [x] b 3:27 Pack-Treppen haben eine feste Höhe (3,80): „Höhe (m)“ auf den Etagenabstand stellen (häufiger Fehler)
- [x] b 3:15–3:35 Wendeltreppe Keller → Erdgeschoss (Öffnung im Flur, in 3D gezeigt)
- [x] b 3:41–3:51 Raumspartreppe Obergeschoss → Dachgeschoss (Öffnung im Dachboden, in 3D gezeigt)

## Bodenöffnungen (4.16)
- [x] b 1:43 Werkzeug „Bodenöffnung“, b 1:49 Hinweis unten im Plan
- [x] b 1:49 Öffnung gehört zur Etage, deren Boden sie öffnet
- [x] b 1:43 Wofür: Galerie, Luftraum, breiteres Treppenloch
- [x] b 2:04 Ragt über eine Raumgrenze → Meldung „Diese Öffnung ragt über eine Raumgrenze …“, dann korrigiert
- [x] b 2:15 Mehrere Öffnungen dürfen sich überlappen (L-Form)
- [x] b 4:07 Von oben sieht man hindurch (3D, Obergeschoss gestapelt)
- [x] b 2:09 / 2:22 Größe/Lage im Formular oder an den Ecken; „Löschen“

## 3D daneben (4.18)
- [x] a 3:55 „3D daneben“ schaltet die 3D-Hälfte ein
- [x] a 3:55 Änderungen erscheinen nach einem Augenblick in 3D
- [x] a 4:02 Leiste zwischen Plan und 3D ziehen
- [x] b 2:27 „Wände hoch“ / „Schnitt“
- [x] b 2:31 Möbel in 3D antippen (ziehen gesagt); Leiste B, T, H, ↺ 45° / ↻ 45°, Fixieren, Löschen
- [x] b 2:39–2:46 Seitenleiste klappt ein; Knöpfe am rechten Rand (☰, ⚙, 🛋, 🚪)
- [x] b 2:46 „📌 Anheften“ / „Angeheftet“
- [x] b 1:23 3D-Hälfte zeigt die gewählte Etage

## Prüfen in 3D (5.1/5.2)
- [x] a 4:21 / b 3:56 Oben „3D“, „Alle Etagen“
- [x] a 4:26 „Auseinander“ / a 4:33 „Gestapelt“
- [x] a 4:42 Etagenknöpfe oben / Etagen-Bilder links
- [x] a 4:33 Keller liegt unter dem Erdgeschoss, unter der Erde
- [x] a 4:51 „Abgedunkelt“ / „Gestapelt“ / „Einzeln“
- [x] a 4:42 Startansicht wirkt beim Öffnen (Obergeschoss von hinten)
- [x] b 4:07 Treppenöffnung von oben sichtbar
