# NeonPlan 3D tutorial series – plan and briefs

Read together with `.claude/agents/tutorial-video.md` (how to record, pacing, voice, delivery). This file says
**what** each episode covers. Goal (Torsten): after watching the series nobody has to ask how something in the
menus works. Every button, field and option of an episode's topic is shown and explained – detailed is fine,
idle pauses are not.

## How to write an episode (mandatory steps)

1. **Coverage checklist first.** Read the manual sections listed for the episode in `docs/anleitung.md`
   completely, then the matching forms in `frontend/src/components/editor.ts` (and `view3d.ts` for 3D topics)
   and their labels in `frontend/src/i18n.ts`. Write `frontend/tutorials/epNN-checklist.md`: every button, field,
   option, shortcut and tip of the topic, one line each, with the exact German label. Nothing of the topic may be
   missing – when in doubt, include it.
2. **Script against the checklist.** Every checklist line is shown on screen *and* said, or (rare, for
   things the demo cannot show) said over a fitting picture. Tick each line with the time it appears
   (`[x] 2:14 „Seiten tauschen“`). Deliver the ticked checklist with the episode.
3. **Order:** teaser → "In diesem Video …" → the steps a beginner does in that order → special cases and tips →
   outro. Start from the state the previous episode ended with where it helps (or load the full demo house).
4. **Explain the why:** what a setting is good for, a typical case from a real home ("ein Anbau mit Pultdach",
   "die Dachschräge im Kinderzimmer"), and the common mistake.
5. **Version:** the title card's small line and the outro card name the version from
   `custom_components/neonplan3d/manifest.json` ("aufgenommen mit NeonPlan 3D 1.12.5"); the YouTube description
   draft repeats it and says newer versions may have more options.
6. **Length** follows the content (5–20 minutes); long episodes get more chapters, never slower pacing.

## Recording while the app is being developed

The main session keeps building the app. Record from a **snapshot**: copy `preview/` and
`custom_components/neonplan3d/frontend/` into a folder in your scratch directory (same relative layout), and
start the recorder with `TUTORIAL_ROOT=<that folder>` (the recorder serves files from there when the variable is
set – add this to `recorder.mjs` if it is not there yet). Then a rebuild during your recording cannot break it.
Several agents may work at the same time: keep episode-specific helpers in your own episode file; change
`recorder.mjs` only when really needed, re-read it right before editing and keep every existing function working.

## Episodes

Titles are German (the channel is German); an English version follows later with `lang: "en"`.

| # | Title | Manual sections | Must contain (besides everything in those sections) |
|---|---|---|---|
| 1 | Dein erster Grundriss | 2, 3, 4.1–4.4 (basics), 4.6 (intro only) | done – voiced version pending |
| 2 | Bauplan als Vorlage: Grundriss-Bild einmessen und nachzeichnen | 4.6 in full, 4.3 „Freie Form“, 4.4 | upload, opacity, show/hide, „Verschieben, skalieren und drehen“ (handles: move, scale, turn), ruler / measuring a known length, straightening, per-floor picture; trace an L-shaped room with „Freie Form“, add a point on an edge, drag corners, free walls with „Wand“, wall thickness/height per edge, split a wall, „Keine Wand“, half-height wall (counter) |
| 3 | Türen, Fenster und Garagentore | 4.7 | every type and style (Haustür, Terrassentür, Doppeltür, Schiebetür, Durchbruch, Garagentor, Fenster styles), width/height/sill, hinge side „Anschlag wechseln“, opening direction, contact sensor (contact / handle / tilt), blind (Rollladen) with position, „Markieren wenn geschlossen“, live open/closed in 3D |
| 4 | Möbel: platzieren, drehen, anpassen | 4.8, 4.9, 4.12, 4.14, 4.15 | furniture tool and library search, placing, moving, **rotating in detail** (rotation handle in the plan, ↺ 90° / ↻ 90°, the „Drehung (°)“ field, 45° steps in 3D beside, „Spiegeln“), size fields, „Höhe über Boden“ (wall cabinet, shelf), stacking (lamp on a table), „Fixieren“, „Duplizieren“, delete, right-click menu, keyboard shortcuts, „Räume einrichten“ (furnish a room in one go), electric furniture (entity, power sensor, glow, two halves), parking spots + vehicles, robot vacuum with room sensor |
| 5 | Geräte, Lampen und Kameras | 4.10, 4.11, 4.13 | device list of a room, placing a device from the list, markers and symbols („Symbol in 3D“, own mdi icon), lamps: ceiling/floor/table/wall mount, colour/brightness from HA, glow scale, colour entity for relays, „Vor dem Schalten nachfragen“, hiding devices, cameras: placement, wall/ceiling mount, view cone |
| 6 | Etagen, Treppen und Keller | 4.2 in full, 4.16, 4.18 | add/sort floors, HA floors, height above ground, ceiling height, cellar below ground, shift/turn a floor, „Alle Etagen mitnehmen“, floor start view, stairs (straight, L, U, spiral; direction), floor openings (Bodenöffnung) so the stairs go through, „3D daneben“ |
| 7 | Dächer Teil 1: Satteldach, Walmdach & Co. | 4.19 (simple roof, roof sections, shapes) | simple roof in Settings vs. „Dachflächen (frei)“, suggestion from the rooms, drawing/selecting/moving/resizing a roof section, floor selector, every **Form** (Sattel, Walm, Krüppelwalm, Zelt, Mansard, Pult, Flach, Attika) shown in 3D one after another, Firstrichtung, Traufe and Neigung per side, „Seiten tauschen“, Wandoberkante, „Sitzt auf Etage“, Firsthöhe, overlapping sections (Anbau runs under the main roof), „Neu aus den Räumen erzeugen“, „Zurück zu einem Dach“, Fixieren |
| 8 | Dächer Teil 2: Gauben, Dachfenster, Dachschrägen, Carport | 4.19 (rest) | „+ Gaube“ (move, width, heights, shape), Zwerchgiebel, Kniestock/sloped ceilings in the attic, flat roof as free outline („Umriss des Geschosses übernehmen“, „Zurück zum Rechteck“), „+ Dachfenster“ (move, blind, contact, tilt contact, window motor), Überdachung (terrace roof, carport), „Dach bleibt“ in 3D |
| 9 | Außenbereich und Garten | 4.17 | outdoor tool, every area type (Rasen, Terrasse, Weg, Einfahrt, Pool, Beet …), free outline, height/slope, hiding outlines, fences/hedges, trees and plants, outdoor lights, gates |
| 10 | Die 3D-Ansicht bedienen | 5.1–5.9 | house/floor/room, every switch in the bottom bar (Wände hoch/Schnitt, Auseinander/Gestapelt, Dach bleibt, heatmap modes, Werte, Raumnamen, Spur, Kameras, Wetter), operating devices (tap, long press, sliders), room panel, search, heatmap, sun and daylight, warnings, cameras in 3D, star menu/favourites, start view of house/floor/room |
| 11 | Die Dashboard-Karte und das Wandtablet | 8, 9 | adding the card, card editor options, YAML options (start_view, room, floor, idle_return …), kiosk mode, night dimming, screensaver, settings for old/weak tablets (quality, render scale) |
| 12 | Einstellungen, Sicherung und Umzug | 4.5, 10 | every settings section, export (full backup, template to share), import, moving to a new HA, plan lock |
| 13 | Erweiterungen, Shop und Möbel-Packs | 7 | the Extensions page, shop connection, licence key, installing/updating packs and Pro, what a sampler pack is – no prices on screen |

Pro episodes (one per Pro: Energie Pro incl. 4.20 solar fields, Kamera-Cockpit, Wetter draußen, Bildschirme
live, Klang & Kino, Auto Pro) come after the basics.

## Order of production

1 (voice) → 2 → 4 → 7 → 8 → 3 → 5 → 6 → 9 → 10 → 11 → 12 → 13. Two agents may record at the same time.
