### Neu

- **Eigene Symbole:** Jedes Gerät und jedes elektrische Möbel kann im Pin ein beliebiges Material-Design-Icon tragen (`mdi:…`), zum Beispiel ein Thermometer für den Außensensor (#62).
- **Kippwinkel-Sensor** am Fenster: Der Flügel kippt in 3D so weit, wie der Sensor meldet, mit Maximalwinkel, Offset und Umkehr, z. B. für Shelly BLU Door/Window (#15).
- **Kamera-Sichtkegel:** je Kamera abschaltbar, und in 3D endet er an der ersten Wand (Diskussionen #49, #50).
- **Dashboard-Knopf** in der Karte: `dashboard` und `dashboard_label` öffnen ein anderes Dashboard oder eine Ansicht (Diskussion #48).
- **Wandhöhe je Teilstück** einer Wand, die ein Nachbarraum teilt (#77).
- **Licht durch offene Wände:** Bei „Keine Wand“ leuchtet eine Lampe in den Nachbarraum, als wäre es ein Raum (Idee und Fork von Thundras, Diskussion #68).
- **Energie-Werkzeug leichter einzurichten:** oben eine Einrichtungs-Checkliste, die zu dem springt, was fehlt; „Aus dem Energie-Dashboard übernehmen“ füllt jetzt die Geräte und legt fehlende an; ein Hinweis mit Ein-Klick-Lösung, wenn Netz- oder Speichersensor andersherum zählen; das Hologramm auch ohne Solarfeld (neben dem Haus); die Energieleiste tritt zurück, solange das Hologramm zu sehen ist; schlichtes Hologramm auf der Tablet-Stufe.
- **Hilfe und Rückmeldung:** Knöpfe für ein GitHub-Issue (Problem) und eine Diskussion (Idee) in den Editor-Einstellungen und auf der Seite Erweiterungen; Kapitel 6.4 der Anleitung beschreibt Energie Pro.
- **Shop-Verbindung repariert:** Die Aktivierung eines Lizenzschlüssels schlug für alle mit „HTTP 429“ fehl – der Webhoster des Shops weist die Standard-Browserkennung von Home Assistant ab. NeonPlan schickt jetzt seine eigene, versucht eine gebremste Anfrage zweimal mit Pause erneut, lädt Packs mit Abstand und erklärt ein 429 verständlich. **Wer Packs oder Pro-Erweiterungen gekauft hat, braucht dieses Update zum Aktivieren.**
- **Energie Pro:** ein Hologramm je Anlage – ein Balkonkraftwerk mit eigenem Wechselrichter bekommt seine eigene Karte über seinem Feld (Leistung, Tageskurve, sein Speicher); Stromspeicher mit getrennten Sensoren für Laden und Entladen (z. B. Anker Solix) über das neue Feld „Ladeleistung“; Zähler mit getrennten Sensoren für Bezug und Einspeisung über „Einspeiseleistung“. Die Leistungsfelder bieten jetzt jeden Sensor in W oder kW an, auch ohne Geräteklasse.

### Behoben

- Die Startansicht gilt auch beim Öffnen einer Etage: Das Haus dreht sich nicht mehr um (Diskussion #67).
- Zwei Fenster übereinander schneiden beide ihr Loch in die Wand (gemeldet von Thundras).
- iPad: Das Menü „Etage hinzufügen“ bleibt in der Seitenleiste (#85).

Läuft wie immer auch auf alten, schwachen Wandtablets.

---

### New

- **Own symbols:** every device and every electric furniture item can carry any Material Design icon (`mdi:…`) in its pin, e.g. a thermometer for the outdoor sensor (#62).
- **Tilt angle sensor** on windows: the sash tilts as far as the sensor reports, with maximum angle, offset and sign, e.g. for a Shelly BLU Door/Window (#15).
- **Camera wedge:** can be switched off per camera, and in 3D it ends at the first wall (discussions #49, #50).
- **Dashboard button** on the card: `dashboard` and `dashboard_label` open another dashboard or view (discussion #48).
- **Wall heights per part** of a wall that a neighbouring room splits (#77).
- **Light through open walls:** with "No wall" a lamp lights the neighbouring room as if it were one room (idea and fork by Thundras, discussion #68).
- **Energy tool, easier to set up:** a setup checklist at the top that jumps to what is missing; "Take over from the energy dashboard" now fills the devices (and creates missing ones); a hint with a one-tap fix when a grid or battery sensor counts the other way round; the hologram also without a solar field (beside the house); the energy bar steps back while the hologram shows; a plain hologram on the tablet level.
- **Help and feedback:** buttons for a GitHub issue (problem) and a discussion (idea) in the editor's settings and on the Extensions page; manual chapter 6.4 describes Energy Pro.
- **Shop connection fixed:** activating a licence key failed for everyone with "HTTP 429" – the shop's web host turns away Home Assistant's default user agent. NeonPlan now sends its own, retries a throttled request twice with a pause, spaces out pack downloads and explains a 429 in plain words. **Anyone who bought packs or Pro add-ons needs this update to activate.**
- **Energy Pro:** one hologram per plant – a balcony plant with its own inverter gets its own card over its field (power, day curve, its battery); home batteries with separate charging and discharging sensors (e.g. Anker Solix) through the new "Charging power" field; meters with separate import and export sensors through "Export power". The power fields now list every sensor in W or kW, even without a device class.

### Fixed

- The start view also holds when a floor is opened: the house no longer turns round (discussion #67).
- Two windows one above the other both cut their hole into the wall (reported by Thundras).
- iPad: the "Add floor" menu stays inside the sidebar (#85).

Runs on old, low-power wall tablets as always.
