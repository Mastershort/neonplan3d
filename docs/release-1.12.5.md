A quick fix release – most important: saving works again after resetting an outdoor area.

### Fixed

- **Saving failed** after setting an outdoor area's height or slope back to 0 (*"expected float at …outdoor[…].offset"*). It saves again; changes that were kept in the browser are offered to be taken over (#242 by rolandarends).
- **Pergolas with a slope:** beams and rafters follow the slope instead of lying level (#242).
- **One hub device for the whole house** (e.g. a single MQTT or KNX device whose entities lie in several areas): its room thermometers count for the room climate again, a power sensor only goes to an entity in its own area, and a binary sensor without a class shows up when you gave it an area by hand (#243 by bert-MI4U).

### How to update

Settings → System → Updates. HACS only looks for new versions every few hours, so a fresh update may not show there yet. Then: HACS → NeonPlan 3D → ⋮ → **Update information** → **Download**. Restart Home Assistant and reload the page (Ctrl+F5).

---

Eine schnelle Fehlerrunde – am wichtigsten: Speichern geht wieder, nachdem man eine Außenfläche zurückgesetzt hat.

### Behoben

- **Speichern schlug fehl**, nachdem man Höhe oder Gefälle einer Außenfläche wieder auf 0 gestellt hatte (*„expected float at …outdoor[…].offset“*). Es speichert wieder; im Browser aufgehobene Änderungen werden zum Übernehmen angeboten (#242 von rolandarends).
- **Pergolen mit Gefälle:** Balken und Querbalken folgen dem Gefälle, statt waagerecht zu liegen (#242).
- **Ein Sammelgerät für das ganze Haus** (z. B. ein einziges MQTT- oder KNX-Gerät, dessen Entitäten in mehreren Bereichen liegen): Seine Raumthermometer zählen wieder fürs Raumklima, ein Leistungssensor geht nur an eine Entität im eigenen Bereich, und ein Binärsensor ohne Typ erscheint, wenn man ihm selbst einen Bereich zugewiesen hat (#243 von bert-MI4U).

### So bekommst du das Update

Einstellungen → System → Updates. HACS sucht nur alle paar Stunden nach neuen Versionen, deshalb fehlt ein frisches Update dort manchmal noch. Dann: HACS → NeonPlan 3D → ⋮ → **Informationen aktualisieren** → **Herunterladen**. Home Assistant neu starten und die Seite neu laden (Strg+F5).
