Pool Pro ist da – zuerst als Beta für Supporter. Energie Pro zeigt jetzt auch Gas und Wasser. Und für alle: Pools in Rund und Oval, als Aufstellpool, und ein Pool im Rasen ist jetzt auch zu sehen.

### Neu

- **🏊 Pool Pro (Pro, Supporter-Beta):** Der Pool lebt mit dem, was deine Pool-Technik in Home Assistant meldet.
  - Das **Wasser leuchtet in der Farbe der Poolbeleuchtung** und **bewegt sich mit einem Lichtspiel wie unter echten Wellen**, solange die Filterpumpe läuft. Ohne Licht färbt die Wassertemperatur es von tiefem Blau bis Türkis; heizt die Wärmepumpe, schimmert es warm.
  - Eine **Glaskarte** über dem Pool zeigt die Wassertemperatur, die Solltemperatur der Wärmepumpe (− / + zum Einstellen), **pH** und **Redox/Chlor** mit Ampel und Knöpfe für Wärmepumpe, Filterpumpe, Licht und Abdeckung.
  - Die **Abdeckung** fährt so weit über das Wasser, wie sie geschlossen ist.
  - **Warnungen** bei pH oder Chlor weit außerhalb und bei Frostgefahr.
  - Die Wärmepumpe darf eine Klima-Entität (`climate`), ein Warmwasserbereiter oder ein Schalter sein. Leere Rollen findet NeonPlan selbst über den Namen.
  - **Supporter-Beta:** Pool Pro kommt zuerst mit dem Supporter-Pass; Rückmeldungen im Discord.
- **Werkzeug „Pool“ mit Pooltechnik und Rohren:** Pools zeichnen (Eckig, Rund, Oval, Frei), dazu Skimmer, Bodenablauf, Einlässe und Abwasser, Filterpumpe, Sandfilter mit 6-Wege-Ventil, Wärmepumpe, Dosieranlage und Kugelhähne – und die Rohre dazwischen, so wie sie bei dir verlegt sind. Mit Pool Pro fließt das Wasser sichtbar: blau, nach der heizenden Wärmepumpe orange; über Wärmepumpe oder Bypass; Rückspülen zum Abwasser; ein geschlossener Hahn sperrt.
- **Energie Pro: Gas und Wasser.** Unter Energiebilanz lassen sich ein **Gaszähler** und ein **Wasserzähler** wählen (oder aus dem Energie-Dashboard übernehmen); die Haus-Karte zeigt den heutigen Verbrauch – „Gas 2,2 m³ · Wasser 238 l heute“.
- **Außen: erst wählen, dann zeichnen.** Oben im Werkzeug Außen wählst du unter **Zeichnen**, was du aufziehst – Rasen, Terrasse, Weg, Beet …
- **Pool-Formen (kostenlos):** Im Werkzeug Pool wählst du vorher **Eckig**, **Rund**, **Oval** oder **Frei** und ziehst ihn dann auf. Runde und ovale Pools vergrößerst du an den Ecken ihres Rahmens – ein Kreis bleibt rund – oder über Durchmesser bzw. Breite und Tiefe im Formular.
- **Balkon:** neue Art bei Außenflächen für obere Etagen – dünne Platte auf Etagenhöhe, durchsichtiges Stabgeländer mit einstellbarer Höhe, an der Hauswand kein Geländer, sodass die Balkontüren frei bleiben (#253 von pzmd739-ui).
- **Aufstellpool (kostenlos):** ein Becken, das auf dem Boden steht, mit eigener Beckenhöhe.

### Behoben

- **Befehle von Glaskarten**, die Home Assistant ablehnt, zeigen jetzt dessen Fehlermeldung unten an, statt still zu scheitern (#400).
- **Ein Pool im Rasen** war vom Rasen verdeckt. Jetzt schneidet sich jeder Pool selbst aus der Fläche darunter aus.

### So bekommst du das Update

Einstellungen → System → Updates. HACS sucht nur alle paar Stunden nach neuen Versionen, deshalb fehlt ein frisches Update dort manchmal noch. Dann: HACS → NeonPlan 3D → ⋮ → **Informationen aktualisieren** → **Herunterladen**. Home Assistant neu starten und die Seite neu laden (Strg+F5).

---

Pool Pro is here – as a beta for supporters first. Energy Pro now shows gas and water too. And for everyone: round and oval pools, above-ground pools, and a pool inside a lawn now shows.

### New

- **🏊 Pool Pro (Pro, supporter beta):** the pool comes alive with what your pool equipment reports in Home Assistant.
  - The **water glows in the colour of the pool light** and **moves with a play of light like under real waves** while the filter pump runs. With the light off, the water temperature tints it from deep blue to turquoise; while the heat pump heats, it shimmers warm.
  - A **glass card** over the pool shows the water temperature, the heat pump's target (− / + to set it), **pH** and **redox/chlorine** with a traffic light, and buttons for heat pump, filter pump, light and cover.
  - The **cover** slides over the water as far as it is closed.
  - **Warnings** when pH or chlorine are far off and on risk of frost.
  - The heat pump may be a climate entity, a water heater or a switch. Empty roles are found by name.
  - **Supporter beta:** Pool Pro comes with the Supporter Pass first; feedback on Discord.
- **Pool tool with equipment and pipes:** draw pools (rectangular, round, oval, free), add skimmer, bottom drain, inlets and waste drain, filter pump, sand filter with six-way valve, heat pump, dosing unit and ball valves – and the pipes between them, the way yours run. With Pool Pro the water flows visibly: blue, orange after a heating heat pump; through the heat pump or the bypass; backwash to the waste drain; a closed valve stops it.
- **Energy Pro: gas and water.** In the energy balance you can choose a **gas meter** and a **water meter** (or take them over from the energy dashboard); the house card shows today's use – "Gas 2.2 m³ · Water 238 l today".
- **Outdoor: choose first, then draw.** At the top of the Outdoor tool you choose under **Draw** what you draw – lawn, terrace, path, bed …
- **Pool shapes (free):** in the Pool tool you choose **Rectangular**, **Round**, **Oval** or **Free** first and then draw it. Round and oval pools are resized at the corners of their box – a circle stays round – or by diameter or width and depth in the form.
- **Balcony:** a new outdoor type for upper floors – a thin slab at the floor's level, a see-through railing of bars with its own height, no railing along the house wall so the balcony doors stay in view (#253 by pzmd739-ui).
- **Above-ground pool (free):** a tub standing on the ground, with its own height.

### Fixed

- **Commands from glass cards** that Home Assistant refuses now show its error message at the bottom instead of failing silently (#400).
- **A pool inside a lawn** was hidden by the lawn. Every pool now cuts itself out of the area around it.

### How to update

Settings → System → Updates. HACS only looks for new versions every few hours, so a fresh update may not show there yet. Then: HACS → NeonPlan 3D → ⋮ → **Update information** → **Download**. Restart Home Assistant and reload the page (Ctrl+F5).
