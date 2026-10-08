Many small wishes from the issues, two fixes for the 3D view – and everything new is a setting you switch on, so nothing changes unless you want it to.

### New

- **The wall view is remembered:** "Tall walls" or "Cut" stays as you left it after a reload – in the 3D view, in the editor's 3D pane and on the dashboard card, per device (#309 by rolandarends).
- **Controls on the right:** the floor pictures, star, search and eye can sit on the right instead of the left – header ◧ / ◨, on the card `controls_side: right` (#285 by fammastrodaiuto).
- **Keep the view on floor switches:** header ⌖ – switching floors keeps the camera where it is, only its height follows; on the card `keep_view: true` (#191 by denisb88).
- **Device holograms** (Energy Pro), all in Editor → Energy → Hologram:
  - **Hide device cards below (W)** – e.g. 1 W, so a card disappears while its device is off (#244 by denisb88).
  - **Device cards in the house view too** – switch them off for the house view, they stay on their floor (#226 by denisb88).
  - **Device cards in an opened room** – shows the cards of a room's devices when you open it (#235 by denisb88).
- **Own buttons light up** in the star menu while the entity they work on is on (#188 by RobertSorgenfrei).
- **Downstand beams and ceiling beams** (Architecture pack) have a height above the floor now, e.g. to lower them under a sloped ceiling (#287 by RufusRed80).
- The mouse wheel over a hologram card zooms like anywhere else in the view (#239 by denisb88).

### Fixed

- **Flickering green strips in passages** ("opening without a door"): gone (#290 by itsKXCode).
- **Lamp light shining through a wall** inside a room (a drywall partition, the inner corner of an L-shaped room) – the light now stops at walls and still passes through doors and openings (#300 by idaho).
- **Solar modules on short walls:** walls from 0.5 m are offered, e.g. a 0.92 m garden wall (#295 by rolandarends).
- **"Back to a device pin"** on a lamp turned it into a lamp again on the next load.
- Pro add-ons without furniture no longer show as empty sections in the furniture library and the furniture type list.

### How to update

Settings → System → Updates. HACS only looks for new versions every few hours, so a fresh update may not show there yet. Then: HACS → NeonPlan 3D → ⋮ → **Update information** → **Download**. Restart Home Assistant and reload the page (Ctrl+F5).

---

Viele kleine Wünsche aus den Issues, zwei Fehler in der 3D-Ansicht behoben – und alles Neue ist eine Einstellung, die du selbst einschaltest. Ohne dein Zutun bleibt alles, wie es war.

### Neu

- **Die Wandansicht wird gemerkt:** „Wände hoch“ oder „Schnitt“ bleibt nach dem Neuladen, wie du es zuletzt eingestellt hast – in der 3D-Ansicht, in der 3D-Hälfte des Editors und auf der Dashboard-Karte, je Gerät (#309 von rolandarends).
- **Bedienleiste rechts:** Etagenbilder, Stern, Suche und Auge können rechts statt links sitzen – oben ◧ / ◨, auf der Karte `controls_side: right` (#285 von fammastrodaiuto).
- **Ansicht beim Etagenwechsel halten:** oben ⌖ – beim Wechsel der Etage bleibt die Kamera, wo sie ist, nur die Höhe wandert mit; auf der Karte `keep_view: true` (#191 von denisb88).
- **Geräte-Hologramme** (Energie Pro), alles unter Editor → Energie → Hologramm:
  - **Geräte-Karten ausblenden unter (W)** – z. B. 1 W, dann verschwindet eine Karte, solange ihr Gerät aus ist (#244 von denisb88).
  - **Geräte-Karten auch in der Hausansicht** – abschalten, dann erscheinen sie nur auf ihrer Etage (#226 von denisb88).
  - **Geräte-Karten im geöffneten Raum** – zeigt beim Öffnen eines Raums die Karten seiner Geräte (#235 von denisb88).
- **Eigene Knöpfe leuchten** im Stern-Menü, solange ihr Gerät an ist (#188 von RobertSorgenfrei).
- **Unterzug und Holzbalkendecke** (Pack Architektur) haben jetzt eine Höhe über dem Boden, z. B. um sie unter einer Dachschräge tiefer zu setzen (#287 von RufusRed80).
- Das Mausrad über einer Hologramm-Karte zoomt wie überall sonst (#239 von denisb88).

### Behoben

- **Grün flackernde Streifen in Durchgängen** („Durchbruch ohne Tür“): weg (#290 von itsKXCode).
- **Lampenlicht scheint durch eine Wand** innerhalb eines Raums (Trockenbauwand, Innenecke eines L-förmigen Raums) – das Licht endet jetzt an Wänden und fällt weiter durch Türen und Durchbrüche (#300 von idaho).
- **Solarmodule an kurzen Wänden:** Wände ab 0,5 m werden angeboten, z. B. eine 0,92-m-Gartenmauer (#295 von rolandarends).
- **„Wieder als Geräte-Pin“** bei einer Leuchte machte beim nächsten Laden wieder eine Leuchte daraus.
- Pro-Erweiterungen ohne Möbel erscheinen nicht mehr als leere Abschnitte in der Möbel-Bibliothek und der Möbel-Auswahl.

### So bekommst du das Update

Einstellungen → System → Updates. HACS sucht nur alle paar Stunden nach neuen Versionen, deshalb fehlt ein frisches Update dort manchmal noch. Dann: HACS → NeonPlan 3D → ⋮ → **Informationen aktualisieren** → **Herunterladen**. Home Assistant neu starten und die Seite neu laden (Strg+F5).
