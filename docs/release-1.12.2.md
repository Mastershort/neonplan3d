A small round of fixes, mostly around roofs and attics.

### Fixed

- **Roofs cut the walls also with low eaves:** a roof section whose eaves lie below a floor's ceiling now cuts that floor's walls, even when its top of walls is set to the ceiling height (discussion #147 by twynne and wouter-b).
- **Single-storey houses show their roof:** with only one floor the 3D view now shows the roof; an extra attic floor is no longer needed (discussion #208 by Kohhal).
- **Pulled apart, the roof stays on top:** the roof rides with the highest floor beneath it, so a loft under the same slopes stays under the roof, and dormers go along with their roof (#202 by Kuddelsoft, discussion #207 by 1970lexi).
- **Light under roof slopes:** the light on the walls ends where the wall does, instead of shining through the roof (#201 by Twilight-Networks).
- **No more stripes on walls under a roof** (discussion #180 by RobertSorgenfrei).
- **Camera Cockpit:** the camera wall fits any number of cameras – largest possible tiles, nothing overlaps, and with very many cameras the wall scrolls (#217 by denisb88).
- **Solar fields:** the inverter choice shows each inverter's own name, and an inverter shows which strings feed it (#213 by rolandarends).
- **Garden solar fields** stand on the ground floor, no longer on a cellar below it (#192 by denisb88).
- **Heatmap:** with the temperature, humidity or CO₂ view on, garden lamps keep their light and room lamps a soft glow (discussion #205 by 1970lexi).
- **Clear message for add-ons that need a newer version:** installing a Pro add-on on an older NeonPlan 3D now says "please update NeonPlan 3D first" instead of a cryptic error (#218 by twynne).

### How to update

Settings → System → Updates. If NeonPlan 3D is missing there: HACS → NeonPlan 3D → ⋮ → **Update information** → **Download**. Then restart Home Assistant and reload the page (Ctrl+F5).

---

Eine kleine Fehlerrunde, vor allem rund um Dächer und Dachgeschosse.

### Behoben

- **Dächer schneiden Wände auch bei tiefer Traufe:** Liegt die Traufe eines Dachabschnitts unter der Decke einer Etage, schneidet er deren Wände jetzt ab, auch wenn seine Wandoberkante auf Deckenhöhe steht (Diskussion #147 von twynne und wouter-b).
- **Häuser mit einer Etage zeigen ihr Dach:** Mit nur einer Etage zeigt die 3D-Ansicht jetzt das Dach; eine zusätzliche Dachboden-Etage ist nicht mehr nötig (Diskussion #208 von Kohhal).
- **Auseinandergezogen bleibt das Dach oben:** Das Dach fährt mit der höchsten Etage darunter, ein Spitzboden unter denselben Schrägen bleibt also unter dem Dach, und Gauben gehen mit ihrem Dach mit (#202 von Kuddelsoft, Diskussion #207 von 1970lexi).
- **Licht unter Dachschrägen:** Das Licht auf den Wänden endet dort, wo die Wand endet, statt durchs Dach zu scheinen (#201 von Twilight-Networks).
- **Keine Streifen mehr an Wänden unter dem Dach** (Diskussion #180 von RobertSorgenfrei).
- **Kamera-Cockpit:** Die Kamera-Wand passt sich jeder Anzahl Kameras an – möglichst große Kacheln, nichts überlappt, bei sehr vielen Kameras scrollt die Wand (#217 von denisb88).
- **Solarfelder:** Die Wechselrichter-Auswahl zeigt den eigenen Namen jedes Wechselrichters, und ein Wechselrichter zeigt, welche Stränge an ihm hängen (#213 von rolandarends).
- **Gartensolarfelder** stehen auf dem Erdgeschoss, nicht mehr im Keller darunter (#192 von denisb88).
- **Heatmap:** Bei Temperatur-, Feuchte- oder CO₂-Ansicht behalten Gartenlampen ihr Licht und Raumlampen einen sanften Schein (Diskussion #205 von 1970lexi).
- **Klare Meldung bei Erweiterungen, die eine neuere Version brauchen:** Wer eine Pro-Erweiterung auf einer älteren NeonPlan-3D-Version installiert, liest jetzt „bitte zuerst NeonPlan 3D aktualisieren“ statt einer kryptischen Fehlermeldung (#218 von twynne).

### So bekommst du das Update

Einstellungen → System → Updates. Fehlt NeonPlan 3D dort: HACS → NeonPlan 3D → ⋮ → **Informationen aktualisieren** → **Herunterladen**. Danach Home Assistant neu starten und die Seite neu laden (Strg+F5).
