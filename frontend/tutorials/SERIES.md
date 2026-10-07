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
6. **Length: at most 7–8 minutes** (Torsten). Topics that belong together stay in one episode. If the checklist does not fit into 8 minutes at a snappy pace, split the episode into „Teil 1“ / „Teil 2“ – never drop a checklist item and never slow down.

## Mentioning the extensions

The free product does everything shown in the basics – say so where it fits. In the other episodes point to the
extensions now and then, briefly and naturally, where they really fit (e.g. more furniture in the furniture packs,
Energie Pro in the devices or roof episode when solar fields come up, the camera cockpit with the cameras): one
sentence, at most once or twice per episode, never a sales pitch, no prices.

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
| 1 | Dein erster Grundriss | 2, 3, 4.1–4.4 (basics), 4.6 (intro only) | in progress – floor, rooms, HA areas, walls, short floor-plan picture intro |
| 2 | Bauplan als Vorlage: Grundriss, Türen und Fenster | 4.6 in full, 4.3 „Freie Form“, 4.4, 4.7 | picture: upload, opacity, show/hide, „Verschieben, skalieren und drehen“ (move, scale, turn handles), ruler / measuring a known length, straightening; trace the plan: L-shaped room with „Freie Form“, add a point on an edge, drag corners, free walls („Wand“), wall thickness/height per edge, split a wall, „Keine Wand“, half-height wall; then doors and windows on the traced plan: every type and style (Haustür, Terrassentür, Doppeltür, Schiebetür, Durchbruch, Garagentor, window styles), width/height/sill, „Anschlag wechseln“, opening direction, contact sensor (contact / handle / tilt), Rollladen with position, „Markieren wenn geschlossen“, live open/closed in 3D. Likely two parts. |
| 3 | Etagen, Treppen und Keller | 4.2 in full, 4.16, 4.18 | add/sort floors, HA floors, height above ground, ceiling height, cellar below ground, shift/turn a floor, „Alle Etagen mitnehmen“, floor start view, stairs (straight, L, U, spiral; direction; which floor they belong to), floor openings (Bodenöffnung) so the stairs go through, „3D daneben“, checking it in 3D (Auseinander/Gestapelt) |
| 4 | Möbel: platzieren, drehen, anpassen | 4.8, 4.9, 4.12, 4.14, 4.15 | **only built-in (free) furniture** – the point is that everything works with the free product; near the start and at the end say in one sentence that extensions with more furniture exist and that the next episode shows them; library and search, placing, moving, **rotating in detail** (rotation handle in the plan, ↺ 90° / ↻ 90°, the „Drehung (°)“ field, 45° steps in 3D beside, „Spiegeln“), size fields, „Höhe über Boden“ (wall cabinet, shelf), stacking (lamp on a table), „Fixieren“, „Duplizieren“, delete, right-click menu, keyboard shortcuts, „Räume einrichten“, electric furniture (entity, power sensor, glow, two halves), parking spots + vehicles, robot vacuum with room sensor. Likely two parts. |
| 5 | Erweiterungen: Shop verbinden und Möbel-Packs | 7 | right after the furniture episode: the Extensions page, connecting the shop, entering the licence key, installing/updating packs and Pro extensions, what is free (built-in furniture) and what a sampler pack is, where new items appear in the furniture library – no prices on screen, never a real licence key (use the demo's shop mode `?shop`) |
| 6 | Geräte, Lampen und Kameras | 4.10, 4.11, 4.13 | device list of a room, placing a device, markers and symbols („Symbol in 3D“, own mdi icon), lamps: ceiling/floor/table/wall mount, colour/brightness from HA, glow scale, colour entity for relays, „Vor dem Schalten nachfragen“, hiding devices, cameras: placement, wall/ceiling mount, view cone |
| 7 | Dächer Teil 1: Satteldach, Walmdach & Co. | 4.19 (simple roof, roof sections, shapes) | simple roof in Settings vs. „Dachflächen (frei)“, suggestion from the rooms, drawing/selecting/moving/resizing a roof section, floor selector, every **Form** (Sattel, Walm, Krüppelwalm, Zelt, Mansard, Pult, Flach, Attika) shown in 3D one after another, Firstrichtung, Traufe and Neigung per side, „Seiten tauschen“, Wandoberkante, „Sitzt auf Etage“, Firsthöhe, overlapping sections (Anbau runs under the main roof), „Neu aus den Räumen erzeugen“, „Zurück zu einem Dach“, Fixieren |
| 8 | Dächer Teil 2: Gauben, Dachfenster, Dachschrägen, Carport | 4.19 (rest) | „+ Gaube“ (move, width, heights, shape), Zwerchgiebel, Kniestock/sloped ceilings in the attic, flat roof as free outline („Umriss des Geschosses übernehmen“, „Zurück zum Rechteck“), „+ Dachfenster“ (move, blind, contact, tilt contact, window motor), Überdachung (terrace roof, carport), „Dach bleibt“ in 3D |
| 9 | Außenbereich und Garten | 4.17 | outdoor tool, every area type, free outline, height/slope, hiding outlines, fences/hedges/gates, trees and plants, outdoor lights |
| 10 | Die 3D-Ansicht bedienen | 5.1–5.9 | house/floor/room, every switch in the bottom bar (Wände hoch/Schnitt, Auseinander/Gestapelt, Dach bleibt, heatmap modes, Werte, Raumnamen, Spur, Kameras, Wetter), operating devices (tap, long press, sliders), room panel, search, heatmap, sun and daylight, warnings, cameras in 3D, star menu/favourites, start view of house/floor/room |
| 11 | Dashboard-Karte und Wandtablet | 8, 9 | adding the card, card editor options, YAML options (start_view, room, floor, idle_return …), kiosk mode, night dimming, screensaver, settings for old/weak tablets (quality, render scale) |
| 12 | Einstellungen, Sicherung und Umzug | 4.5, 10 | every settings section, export (full backup, template to share), import, moving to a new HA, plan lock |

Pro episodes (one per Pro: Energie Pro incl. 4.20 solar fields, Kamera-Cockpit, Wetter draußen, Bildschirme
live, Klang & Kino, Auto Pro) come after the basics.

## Order of production

In the order of the table. Two agents may record at the same time.
