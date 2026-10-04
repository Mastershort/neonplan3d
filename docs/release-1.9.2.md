### Behoben

- **Pack-Möbel mit Licht:** Spiegel mit Licht, Nachttischleuchte, Aquarium, Feuerschale, Sternenhimmel, LED-Nische, Lichtvoute, Werkstattleuchte und Nachtlicht hatten im Editor kein Licht-Feld, und ein Tipp in 3D schickte eine ungültige Entity-ID an Home Assistant (#46 von StevenKRT und N4IR0, #88 von wh1tetiger).
- **Lichtfläche an Fenstern:** Bei eingeschaltetem Licht lag über Fenstern in niedrigen Geschossen ein versetztes dunkles Rechteck. Die Lichtzellen enden jetzt an Brüstung, Sturz und Seiten jeder Öffnung (#87 von newbeehome).
- **Editor in anderen Sprachen:** Bei Französisch, Spanisch, Niederländisch, Italienisch (und Ungarisch) blieb der Plan-Editor englisch – sein Bundle hat die Sprachdatei nie geladen (#96 von denisb88).
- **Fernseher, die nur „on“ melden** (Samsung, LG) leuchten jetzt; vorher nur bei „playing“ (#98 von newbeehome).
- **Gedimmte Lampen** sahen aus wie aus: Das Leuchten folgt jetzt einer Wahrnehmungskurve, eine Lampe bei 10 % ist klar als „an“ erkennbar (#103 von newbeehome).
- **Freistehende Wände** (Gartenmauer) nehmen Wand-Solarfelder an, auf beiden Seiten (#105 von rolandarends).
- **LED-Streifen draußen** liegen wieder auf dem Boden (Rasen, Terrasse) statt eine Bodenplatte höher (#70 von domodial).

### Neu

- **Türen ohne Sensor** lassen sich geschlossen zeigen („Ohne Sensor geschlossen zeigen“ im Türformular) statt halb offen (Diskussion #86 von robertkrizovnik).
- **Karte:** `start_view` gibt einer Karte eine eigene Startansicht, etwa für eine kleine Übersicht in einem anderen Dashboard; der Abschnitt Startansicht im Editor zeigt die Zeile zum Kopieren (Diskussion #89 von karli4711).
- Französisch, Spanisch, Niederländisch, Italienisch: die 43 seit 1.9.0 neuen Texte (Energie-Einrichtung, Kippwinkel, Icons, Hilfe) sind übersetzt; sie erschienen bisher auf Englisch.
- **Ungarisch** als fünfte Zusatzsprache (Korrektur: kopaszsop, #51).
- **Modulleistung (Wp)** je Solarfeld statt fester 400 W – für die kWp von Feldern und Strängen und die lebenden Module (#99 von denisb88).
- **Etagen auseinander** hebt jetzt auch das Dach vom obersten Geschoss ab (#101 von rolandarends).
- **Energie Pro – Geräte-Hologramme:** Jedes Gerät mit Leistungssensor (Fernseher, Waschmaschine, Wärmepumpe …) kann eine kleine Glaskarte tragen – Leistung jetzt, Verbrauch heute, Tageskurve – in der Hausansicht und auf seiner Etage. Haken „Hologramm über dem Gerät“ im Möbelformular; der Knopf **Hologramme** in der Energieleiste blendet alle Karten aus (Karten-Option `holograms`). Das erste kostenlose Update des Packs, auch ohne Solaranlage nützlich.

---

### Fixed

- **Pack furniture with light:** mirror with light, bedside lamp, aquarium, fire bowl, star ceiling, LED niche, light cove, workshop light and night light had no light field in the editor, and a tap in 3D sent an invalid entity id to Home Assistant (#46 by StevenKRT and N4IR0, #88 by wh1tetiger).
- **Lit face at windows:** with the light on, a misaligned dark rectangle lay over windows on low floors. The light cells now end at the sill, top and sides of every opening (#87 by newbeehome).
- **Editor in other languages:** with French, Spanish, Dutch, Italian (and Hungarian) the plan editor stayed English – its bundle never fetched the language file (#96 by denisb88).
- **TVs that only report "on"** (Samsung, LG) glow now; before, only "playing" lit the screen (#98 by newbeehome).
- **Dimmed lights** looked switched off: the glow follows a perceptual curve now, a lamp at 10 % clearly reads as on (#103 by newbeehome).
- **Free-standing walls** (a garden wall) take wall-mounted solar fields, on both sides (#105 by rolandarends).
- **LED strips outside** sit on the ground again (lawn, terrace) instead of a slab's thickness above it (#70 by domodial).

### New

- **Doors without a sensor** can be drawn closed ("Show closed without a sensor" in the door form) instead of half open (discussion #86 by robertkrizovnik).
- **Card:** `start_view` gives a card a start view of its own, e.g. for a small overview on another dashboard; the editor's start view section shows the line to copy (discussion #89 by karli4711).
- French, Spanish, Dutch and Italian: the 43 texts added since 1.9.0 are translated now; they showed in English.
- **Hungarian** as the fifth extra language (proofread by kopaszsop, #51).
- **Module power (Wp)** per solar field instead of the fixed 400 W – for the kWp of fields and strings and the living modules (#99 by denisb88).
- **Floors apart** lifts the roof off the top floor as well (#101 by rolandarends).
- **Energy Pro – device holograms:** every device with a power sensor (TV, washing machine, heat pump …) can carry a small glass card – power now, today's kWh, day curve – in the house view and on its floor. Tick "Hologram over the device" in the furniture form; a **Holograms** button in the energy bar hides all cards (card option `holograms`). The first free update of the pack, useful without a solar system too.
