# NeonPlan 3D – Anleitung

🇩🇪 Deutsch · [🇬🇧 English](manual.md)

NeonPlan 3D zeichnet dein Zuhause direkt in Home Assistant und zeigt es als 3D-Modell im Neon-Look. Lichter leuchten in ihrer Farbe, Rollläden fahren, Fenster kippen, Türen schwingen auf, Kameras schauen in den Raum und der Fernseher zeigt, was läuft. Alles läuft lokal in Home Assistant, ohne Cloud und ohne externe Programme, und ist für Wandtablets gebaut.

Diese Anleitung beschreibt alle Funktionen der aktuellen Version. Was sich in welcher Version geändert hat, steht im [Changelog](../CHANGELOG.md) und auf der [Release-Seite](https://github.com/Mastershort/neonplan3d/releases). Die Bilder stammen aus der Demo mit erfundenen Daten.

![Das Haus in der 3D-Ansicht](images/view-house.jpg)

---

## Inhalt

1. [Installation](#1-installation)
2. [In zehn Minuten zum ersten 3D-Plan](#2-in-zehn-minuten-zum-ersten-3d-plan)
3. [Die Oberfläche im Überblick](#3-die-oberfläche-im-überblick)
4. [Der Editor](#4-der-editor)
5. [Die 3D-Ansicht](#5-die-3d-ansicht)
6. [Pro-Erweiterungen](#6-pro-erweiterungen)
7. [Erweiterungen, Shop und Möbel-Packs](#7-erweiterungen-shop-und-möbel-packs)
8. [Die Dashboard-Karte](#8-die-dashboard-karte)
9. [NeonPlan 3D auf dem Wandtablet](#9-neonplan-3d-auf-dem-wandtablet)
10. [Sicherung und Umzug](#10-sicherung-und-umzug)
11. [Daten und Datenschutz](#11-daten-und-datenschutz)
12. [Häufige Fragen und Fehlerbehebung](#12-häufige-fragen-und-fehlerbehebung)

---

## 1. Installation

### Voraussetzungen

- Home Assistant 2025.1 oder neuer.
- Ein Browser mit WebGL. Das sind alle aktuellen Browser, die Home-Assistant-App und auch Amazon-Fire-Tablets.
- Für das Bearbeiten ein Benutzer mit Administratorrechten. Alle anderen Benutzer sehen und bedienen den Plan, ändern ihn aber nicht.

### Über HACS

[![NeonPlan 3D in HACS öffnen](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Mastershort&repository=neonplan3d&category=integration)

Der Knopf öffnet NeonPlan 3D direkt in HACS deiner Installation. Von Hand geht es so:

1. In Home Assistant **HACS** öffnen.
2. Oben rechts **⋮ → Benutzerdefinierte Repositories** wählen.
3. `https://github.com/Mastershort/neonplan3d` eintragen, Typ **Integration**, hinzufügen.
4. **NeonPlan 3D** suchen, installieren und Home Assistant neu starten.
5. **Einstellungen → Geräte & Dienste → Integration hinzufügen → NeonPlan 3D**, oder direkt über diesen Knopf:

   [![NeonPlan 3D einrichten](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=neonplan3d)

Danach steht **NeonPlan 3D** in der Seitenleiste. Die Dashboard-Karte ist ebenfalls sofort verfügbar, eine Ressource musst du nicht eintragen.

### Von Hand

Den Ordner `custom_components/neonplan3d` aus dem Repository nach `config/custom_components/` kopieren, Home Assistant neu starten und die Integration wie oben hinzufügen.

### Updates

HACS meldet neue Versionen von selbst. Nach jedem Update Home Assistant neu starten. Bis dahin zeigt NeonPlan 3D oben einen Hinweis, dass ein Neustart aussteht. Dein Plan bleibt bei Updates immer erhalten, auch wenn du die Integration entfernst und neu hinzufügst.

---

## 2. In zehn Minuten zum ersten 3D-Plan

1. **NeonPlan 3D** in der Seitenleiste öffnen und oben auf **Editor** wechseln.
2. Rechts **Etage hinzufügen** wählen. Hast du in Home Assistant Etagen angelegt, bietet NeonPlan 3D sie direkt an.
3. Gibt es Bereiche auf der Etage, legt **„… Räume aus HA-Bereichen anlegen“** für jeden Bereich einen Raum an. Ziehe die Räume dann an die richtige Stelle und passe die Ecken an. Alternativ zeichnest du mit **Rechteck** oder **Freie Form**.
4. Mit **Tür & Fenster** auf eine Wand tippen, um Türen und Fenster einzusetzen.
5. Einen Raum antippen und rechts unter **Geräte** bei den gewünschten Geräten **Platzieren** tippen, etwa Lichter, Rollläden, Thermostate, Media Player und Sensoren des Bereichs. Unter der Liste setzt **Alle … platzieren** nach einer Rückfrage alle Hauptgeräte auf einmal.
6. Mit **Möbel** und **Einrichten …** den Raum möblieren.
7. Oben auf **3D** wechseln. Fertig: Tippe auf eine Lampe, und sie schaltet.

Der Plan speichert sich beim Bearbeiten von selbst.

---

## 3. Die Oberfläche im Überblick

Oben gibt es drei Reiter:

| Reiter | Wofür | Wer sieht ihn |
|---|---|---|
| **3D** | Das Haus ansehen und bedienen | alle |
| **Editor** | Grundriss zeichnen, Möbel und Geräte platzieren | Administratoren |
| **✦ Erweiterungen** | Shop-Verbindung, Pro-Erweiterungen, Möbel-Packs | Administratoren |

Zusätzlich gibt es die Dashboard-Karte, die dieselbe 3D-Ansicht in jedes Dashboard bringt. Mehr dazu in [Kapitel 8](#8-die-dashboard-karte).

**Sprache:** NeonPlan folgt der Sprache deines Home-Assistant-Nutzers (Profil → Sprache). Deutsch und Englisch sind eingebaut; Französisch, Spanisch, Niederländisch, Italienisch und Ungarisch werden bei Bedarf nachgeladen, so bleiben die Bundles für Wandtablets klein. Fehlt ein Text in einer Sprache, erscheint er auf Englisch.

---

## 4. Der Editor

![Der Editor mit der 3D-Ansicht daneben](images/editor-split-3d.jpg)

Der Editor besteht aus dem Grundriss in der Mitte, der Werkzeugleiste oben und der Seitenleiste rechts. Die Seitenleiste zeigt immer, was gerade ausgewählt ist: die Etage, einen Raum, ein Möbel, eine Tür oder ein Gerät.

### 4.1 Werkzeuge

| Werkzeug | Was es tut |
|---|---|
| **Auswählen** | Räume, Möbel, Türen, Fenster und Geräte antippen, verschieben, Ecken ziehen |
| **Rechteck** | Einen rechteckigen Raum aufziehen |
| **Freie Form** | Einen Raum Punkt für Punkt zeichnen |
| **Wand** | Eine einzelne, frei stehende Wand ziehen, etwa einen Raumteiler |
| **Tür & Fenster** | Auf eine Wand tippen, um eine Öffnung einzusetzen |
| **Möbel** | Die Möbelbibliothek öffnen |
| **Außen** | Außenflächen wie Rasen, Terrasse oder Pool aufziehen |
| **Bodenöffnung** | Ein Loch in den Boden der Etage aufziehen, etwa über dem Treppenaufgang |
| **Dach** | Dachflächen aufziehen, verschieben und einstellen, siehe [4.19](#419-dach) |
| **Energie** | Solarfelder auf dem Dach und im Garten, Stränge, siehe [4.20](#420-energie-solarfelder) |

Daneben stehen **Rückgängig**, **Wiederholen**, **Alles zeigen** und **3D daneben**. Unten im Plan steht immer ein kurzer Hinweis zum aktiven Werkzeug.

**Maus und Touch:** Mit zwei Fingern ziehst du die Ansicht, mit zwei Fingern zoomst du. Mit der Maus zoomt das Mausrad, die Ansicht ziehst du auf einer leeren Stelle. **Strg+Z** macht rückgängig, **Strg+Y** oder **Strg+Umschalt+Z** wiederholt, **Entf** löscht das Ausgewählte, **Esc** bricht ab. Die **Pfeiltasten** verschieben das Ausgewählte (Raum, Ecke, Möbel, Gerät, Wand, Außenfläche) um einen Rasterschritt, mit **Umschalt** um 10 cm, mit **Alt** um 1 cm; Türen und Fenster wandern dabei entlang ihrer Wand.

**Grundriss sperren und fixieren:** **🔒 Grundriss** in der Werkzeugleiste sperrt alle Räume, Wände, Türen, Fenster und Außenflächen, auch neu gezeichnete; ein ausgewählter Raum zeigt dann „🔒 Grundriss gesperrt“, ein Klick darauf entsperrt. Möbel und Geräte fixierst du einzeln, sobald sie an ihrem Platz stehen: mit dem Schloss **🔓 Fixieren** oben im Formular, mit der Taste **L** oder per **Rechtsklick** (auf dem Tablet langes Drücken). Das Rechtsklick-Menü bietet außerdem **Duplizieren**, **Drehen 90°** und **Löschen**. Gesperrtes lässt sich auswählen und im Formular bearbeiten, aber nicht mehr ziehen, nicht mit den Pfeiltasten schieben und nur nach Rückfrage löschen; Ziehen bewegt dann die Ansicht. Fixierte Möbel und Geräte bleiben auch in der 3D-Hälfte stehen.

### 4.2 Etagen

![Etagen-Einstellungen](images/editor-ha-floors.jpg)

Ohne Auswahl zeigt die Seitenleiste die Etagen:

- **Etage hinzufügen** legt eine neue Etage an. Gibt es in Home Assistant Etagen, die noch fehlen, erscheinen sie zur Auswahl.
- **Name**, **Höhe über Boden** und **Raumhöhe** bestimmen, wo die Etage im 3D-Haus liegt und wie hoch ihre Wände sind. **90° drehen** dreht alles auf der Etage um die Mitte der Räume, wenn eine Etage verdreht gezeichnet wurde. **Etage verschieben** rückt alles auf der Etage (Räume, Möbel, Geräte, Außenflächen, freie Wände, Hintergrundbild) um X und Z, wenn eine Etage gegenüber den anderen versetzt sitzt; Dachflächen und Leitungen bleiben. Mit dem Haken **Alle Etagen mitnehmen** wirken Verschieben und Drehen auf das ganze Haus: alle Etagen samt Dachflächen, Außenflächen, Leitungen, Zähler und Hologramm. **Ansicht als Start der Etage** merkt sich, wie die 3D-Ansicht daneben gerade steht – diese Etage öffnet sich dann von dieser Seite, etwa das Erdgeschoss von vorn und das Obergeschoss von hinten; ↺ nimmt das zurück.
- **Hintergrundbild:** Im Abschnitt **Hintergrund** lädst du ein Foto oder einen Scan deines Grundrisses als Vorlage unter den Plan (Deckkraft einstellbar). **Im Plan verschieben und skalieren** schaltet einen Modus ein, in dem du das Bild mit der Maus ziehst und am Griff unten rechts größer oder kleiner ziehst; **Drehung (°)** dreht es um seine Mitte. Am einfachsten geht der Maßstab mit **📏 Maßstab mit Lineal**: Anfang und Ende einer Strecke im Bild antippen, deren Länge du kennst (eine bemaßte Wand), die echte Länge eingeben – das Bild wird passend skaliert, der erste Punkt bleibt stehen. Erst den Maßstab, dann drehen, dann die Räume darüber zeichnen.
- **Etage in Home Assistant** verknüpft die Etage mit einer HA-Etage. Dann bietet **„… Räume aus HA-Bereichen anlegen“** die Bereiche dieser Etage als Räume an.
- **Nach oben** und **Nach unten** ändern die Reihenfolge, **Etage löschen** entfernt sie samt Räumen.
- **Lücken schließen** führt Räume zusammen, die bis zu 60 cm auseinanderliegen. Das ist praktisch, wenn du Innenmaße gemessen hast. Der Abstand wird zur Innenwandstärke.

![Räume aus Bereichen](images/editor-area-rooms.jpg)

### 4.3 Räume zeichnen

- **Rechteck:** In den Plan tippen und ziehen.
- **Freie Form:** Punkt für Punkt setzen. Ein Tipp auf den ersten Punkt oder **Enter** schließt den Raum, **Esc** bricht ab.
- **Ecken verschieben:** Mit **Auswählen** einen Raum antippen und die Ecken ziehen. Das **+** auf einer Kante fügt einen neuen Punkt ein.
- **Fangen:** Ecken rasten am Raster, an Ecken und Kanten anderer Räume und an Fluchtlinien ein. Mit gedrückter **Alt**-Taste bewegst du frei.

![Ein Raum ausgewählt](images/editor-room.jpg)

Ein ausgewählter Raum zeigt rechts:

- **Name** und **Bereich**: Die Verknüpfung mit einem Home-Assistant-Bereich ist das Wichtigste. Darüber findet NeonPlan 3D Lichter, Rollläden, Sensoren und Szenen des Raums.
- **Bodenbelag**: Holz, Eiche, Fliesen, Teppich, Stein oder Beton erscheinen in 3D als dezentes Muster.
- Die Liste **Geräte** des Bereichs, siehe [4.10](#410-geräte).
- **Einrichten …** für fertige Möbelpakete, siehe [4.9](#49-räume-einrichten).
- **Duplizieren** und **Löschen**.

### 4.4 Wände

Wände entstehen automatisch: Jede gemeinsame Kante zweier Räume wird eine Innenwand, jede Außenkante eine Außenwand. Ecken und T-Stöße werden sauber verschnitten. Die Stärken stellst du unter **Einstellungen** ein.

**Einzelne Wände:** Mit dem Werkzeug **Wand** ziehst du eine frei stehende Wand, zum Beispiel einen Raumteiler, der nur durch den halben Raum geht. **Umschalt** hält sie gerade, **Alt** zeichnet ohne Fangen. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Ausgewählt ziehst du die Endpunkte an den Griffen oder die ganze Wand an der Linie. Rechts stellst du **Länge**, **Wandstärke** und **Höhe** ein. In 3D verhält sie sich wie jede Innenwand. Auch in einzelne Wände setzt du mit **Tür & Fenster** Türen und Fenster ein (siehe 4.7). Löschst du die Wand, verschwinden ihre Türen und Fenster mit.

**Wandhöhe:** Jede Wand kann niedriger sein als der Raum, etwa als Brüstung oder Theke. Bei einer einzelnen Wand stellst du die **Höhe** im Formular ein. Bei Räumen (Rechteck und freie Form) wählst du den Raum aus; im Formular steht der Kasten **Wandhöhen** mit jeder Wand des Raums, benannt nach ihren Eckpunkten (z. B. „Wand 2–3“, die Nummern stehen im Plan an den Ecken) und mit ihrer Länge. Fährst du über eine Zeile oder tippst in ihr Feld, leuchtet die Wand im Plan auf. ↥ setzt sie auf volle Raumhöhe zurück. Teilen sich zwei Räume die Wand, gilt die niedrigere Einstellung. Fenster und Türen in einer niedrigen Wand enden an der Wandhöhe. Niedrige Wände erscheinen im Plan heller. Soll eine Wand in einer Flucht zwei Höhen haben (2,5 m neben 1,7 m), teilst du sie mit **✂**: Das Teilstück bekommt eine eigene Zeile und Höhe, der Teilpunkt lässt sich im Feld **Teilpunkt ab Ecke** verschieben (im Plan als Strich markiert), **⨉** fügt die Teile wieder zusammen.

**Wandstärke je Wand:** Im selben Kasten hat jede Wand ein Feld **Dicke (m)**. Voreingestellt ist die Dicke des Hauses (Außen- oder Innenwand, Kapitel 4.4); eine eigene Angabe macht etwa die 36,5-cm-Außenwand neben einer 24er oder die 11,5-cm-Trennwand. Teilen sich zwei Räume die Wand, gilt die dickere Angabe, die Wand bleibt auf der Raumgrenze mittig. ↺ setzt auf die Hausdicke zurück. Fenster und Türen passen sich der Dicke an.

**Keine Wand:** Bei offenen Grundrissen gehören Flur, Küche und Wohnzimmer baulich zusammen, sind in Home Assistant aber getrennte Bereiche. Dafür hat jede Zeile im Kasten **Wandhöhen** den Knopf **Keine Wand**: Die Wand fällt im Grundriss und in 3D ganz weg, auch wenn der Nachbarraum sie teilt. ↥ holt sie zurück. Das Licht folgt dem: Eine Lampe leuchtet durch die weggelassene Wand in den Nachbarraum, als wäre es ein Raum.

**Geteilte Wände:** Teilt ein Nachbarraum eine Wand in mehrere Stücke (etwa zwei kleine Räume an einer langen Wand), bekommt jedes Stück eine eigene Zeile „Wand 2–3 · Teil 1“, „… Teil 2“ mit seiner Länge, und jedes Stück kann seine eigene Höhe haben oder wegfallen.

### 4.5 Einstellungen

Unten in der Seitenleiste klappt **Einstellungen** auf:

| Einstellung | Bedeutung |
|---|---|
| **Außenwand (m)**, **Innenwand (m)** | Wandstärken |
| **Raster (m)** | Schrittweite beim Zeichnen |
| **Nordrichtung** | Grad im Uhrzeigersinn von oben. Wird für das Sonnenlicht gebraucht |
| **Dach** | Kein Dach, Flachdach oder Satteldach, mit Dachneigung und Dachüberstand. Beim Satteldach legt **First** fest, ob der First entlang der langen oder der kurzen Seite läuft (z. B. Reihenhaus). **Dachflächen (frei)** baut das Dach aus mehreren Teilen, siehe [4.19](#419-dach) |
| **Wetter-Entität** | Welche Wetter-Entität das Wetter draußen liefert, siehe [6.2](#62-wetter-draußen) |
| **Wetter-Effekte in 3D** | Welche Effekte gezeigt werden |
| **Startansicht** | Drehe und zoome das Haus in der 3D-Ansicht rechts so, wie es sich öffnen soll (zum Beispiel von der Gartenseite), und drücke **Aktuelle 3D-Ansicht als Start merken**. 3D-Ansicht, Karte und Kiosk öffnen das Haus dann so, und auch eine geöffnete Etage wird von derselben Seite gezeigt; **Standard** setzt zurück |
| **Favoriten** | Szenen, Skripte, Automationen, Tasten und Schalter für das Zentral-Menü (Stern) der 3D-Ansicht: Party, Anwesenheitssimulation, Verschattung, Bewässerung. Auswählen mit der Suche, Reihenfolge mit ↑ ↓, ✕ entfernt. Darunter **Eigene Knöpfe** mit Beschriftung, Symbol und Aktion: **Seite öffnen** (Pfad wie `/lovelace/rollos`), **Details einer Entität**, **Dienst aufrufen** (`domain.service` mit Daten als JSON) oder **fire-dom-event** – damit öffnet ein Knopf ein browser_mod-Popup mit deiner eigenen Karte, z. B. `{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:meine-rollo-karte"}}}}` |

### 4.6 Grundriss-Bild als Vorlage

Unter **Vorlage (Grundriss-Bild)** lädst du ein Foto oder einen Scan deines Grundrisses unter die Zeichnung. **Breite im Plan (m)** bringt das Bild auf den richtigen Maßstab, **Deckkraft** macht es dezenter. So zeichnest du die Räume einfach nach.

### 4.7 Türen, Fenster und Garagentore

![Tür ausgewählt](images/editor-opening.jpg)

Mit **Tür & Fenster** tippst du auf eine Wand, eine Raumwand oder eine einzelne Wand. Danach wählst du rechts die **Art**: Tür, Fenster oder Garagentor. Ein Fenster mit Brüstung 0 ist eine Terrassentür. Die Vorlage **Glaswand** setzt eine feststehende, raumhohe Verglasung mit schmalen Sprossen ohne Flügel – für eine gläserne Innenwand oder Trennwand; Breite und Höhe stellst du frei ein, als Art geht sie auch bei jedem Fenster unter **Stil**.

![Arten von Öffnungen](images/editor-opening-kinds.jpg)

Jede Öffnung hat:

- **Breite**, **Brüstung** und **Höhe**, dazu die Anschlagseite. Mit **Auswählen** schiebst du sie entlang der Wand.
- **Stil:** Zimmertür, Haustür, Haustür mit Glasausschnitt, mit einem oder zwei Seitenteilen, Glastür, Schiebetür oder **Durchbruch (ohne Tür)**. Bei Seitenteilen stellst du darunter ihre **Breite** ein (leer = automatisch), bei zweien links und rechts getrennt; ein einzelnes Seitenteil sitzt gegenüber dem Anschlag, mit **Seitenteil an der Anschlagseite** neben den Bändern. Ein Durchbruch ist nur eine Öffnung in der Wand, ohne Zarge und Türblatt; das Licht fällt immer hindurch. Fenster gibt es als Standard oder mit Sprossen. „Automatisch“ wählt eine Haustür für Außentüren.
- **Flügel:** einflügelig oder zweiflügelig, mit eigenem Kontakt für den zweiten Flügel.
- **Markieren in 3D:** *Wenn offen* (Standard) lässt offene Fenster und Türen warm leuchten. *Wenn geschlossen* dreht das um, etwa für die WC- oder die Kinderzimmertür: Sie leuchtet, solange sie zu ist. Das braucht einen Kontakt; ohne Sensor wird nichts markiert.
- **Ohne Sensor geschlossen zeigen:** Eine Tür ohne Kontakt steht in 3D halb offen, damit man sie als Tür erkennt. Der Haken zeichnet sie geschlossen, etwa für eine Haustür oder ein Carport ohne Sensor.

![Haustür](images/editor-front-door.jpg)

**Sensoren:**

| Feld | Wirkung in 3D |
|---|---|
| **Rollladen** | Der Rollladen fährt vor dem Fenster – oder vor einer Tür (Haustür, Terrassentür, Schiebetür) – mit der Position der Cover-Entität |
| **Positions-Sensor** | Für Rollläden, deren Position über einen eigenen Sensor kommt, etwa bei Homematic. Bei Bedarf umkehrbar |
| **Vor dem Schalten nachfragen** | Auf, Zu und Positionen fragen im Schnellmenü und im Raumfenster erst nach, und Wischen über das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie. Gut für Tablets, auf denen Rollläden oder das Garagentor sonst versehentlich fahren |
| **Kontakt** | Die Tür schwingt auf, das Fenster öffnet sich |
| **Kippkontakt** | Ein zweiter Sensor, der „gekippt“ meldet |
| **Kippwinkel-Sensor** | Optional: ein Sensor, der den Kippwinkel in Grad liefert (z. B. „Rotation“ eines Shelly BLU Door/Window). Der Flügel kippt in 3D genau so weit; **Winkel für „ganz gekippt“** (Standard 15°), ein **Offset** für den Wert bei geschlossenem Fenster und **andersherum zählen** passen ihn an die Montage an. Ab einem kleinen Winkel gilt das Fenster als gekippt, auch für die Regenwarnung |
| **Kontakt zweiter Flügel** | Für zweiflügelige Fenster und Türen |
| **Garagentor** | Ein Garagentor folgt einer Cover-Entität oder einem Kontakt. Der offene Teil liegt dann unter der Decke |

Rollläden und Kontakte ordnet NeonPlan 3D über den Bereich automatisch zu. Du kannst sie jederzeit von Hand ändern.

### 4.8 Möbel

![Die Möbelbibliothek](images/editor-library.jpg)

Das Werkzeug **Möbel** öffnet rechts die Bibliothek mit 40 eingebauten Modellen in den Abschnitten Leuchten, Wohnen, Essen, Küche, Schlafen, Bad & Hauswirtschaft und Arbeiten & Sonstiges. Darunter folgen deine installierten Möbel-Packs. Die **Arbeitsplatte** (Küche sowie Arbeiten & Sonstiges) ist eine freie Platte ohne Unterbau, für Lücken in der Küche oder einen selbst gebauten Schreibtisch; ihre **Höhe** ist die Oberkante, voreingestellt 91 cm. Das Suchfeld oben filtert alle Abschnitte und bleibt beim Scrollen stehen; es findet deutsche und englische Namen und den Pack-Namen, mehrere Wörter in beliebiger Reihenfolge („sofa ecke“), Escape leert es. Die Abschnitte klappen auf und zu. Fährst du mit der Maus über einen Eintrag, zeigt eine kleine 3D-Vorschau das Möbel.

**Symbole an den Einträgen:**

- 💡 Eine **Leuchte**: Sie lässt sich mit einem Licht verknüpfen und in 3D schalten.
- ⚡ Ein **elektrisches Möbel**: Es nimmt eine Entität und einen Leistungssensor, etwa ein Fernseher, eine Waschmaschine oder ein Thermostat.

**Platzieren und bearbeiten:**

- Einen Raum antippen, dann einen Eintrag wählen. Das Möbel erscheint im Raum.
- **Ziehen** verschiebt es. In der Nähe einer Wand dreht es sich mit dem Rücken zur Wand und rastet bündig ein. **Alt** schiebt frei.
- Der **Griff vor dem Möbel** dreht es in 15°-Schritten, die **Ecken** ändern die Größe.
- Rechts stellst du Breite, Tiefe, Höhe, Drehung und **Höhe über Boden** ein. **Spiegeln** vertauscht links und rechts – das L-Sofa andersherum, der Schrank mit der Tür auf der anderen Seite; der Punkt steht auch im Rechtsklick-Menü und in der Möbelleiste der 3D-Ansicht. Mit der Höhe über Boden hängst du einen Netzwerkschrank oder ein Regal an die Wand oder stellst einen Trockner auf die Waschmaschine. Sie zählt immer vom Boden: Ein Oberschrank steht von sich aus auf 1,45 m, ein Wand-Fernseher mittig auf 1,3 m; du kannst beide höher oder tiefer setzen. **Höhe automatisch** setzt sie zurück.
- **Drehung X / Y / Z:** In diesem lokalen Branch lässt sich jedes Inventar-Möbel, auch aus Paketen und jede Leuchte, um alle drei Achsen drehen. X kippt nach vorne/hinten, Z seitlich; Y bleibt die bisherige Drehung im Grundriss. Die zusätzlichen Winkel drehen um die Modellmitte, zuerst X, dann Z, zuletzt Y. Negative Winkel und eine vollständige Umdrehung sind möglich. **Ausrichtung zurücksetzen** setzt alle drei Winkel (bei LED-Streifen auch Neigung/Senkrecht) zurück. Die 3D-Bearbeitungsleiste bietet dieselben drei Winkel. Der 2D-Grundriss, Einrasten, automatische Ablageflächen und Treppenöffnungen behalten ihre bisherige Stellfläche; passe bei gekippten Möbeln die Höhe über Boden bei Bedarf an. Die LED-Optionen Neigung/Senkrecht bleiben zusätzlich als kompatible Voreinstellung erhalten. Bildschirmbilder und Lichtflächen folgen dem Modell; gekippte Leuchten verwenden eine vereinfachte Rundum-Ausleuchtung statt eines gerichteten Lichtkegels.
- **Zustand von:** Jedes Möbel kann eine Entität zeigen, die an, belegt oder zu Hause meldet – dann leuchtet seine Oberseite: das Bett mit Belegungsmatte, der Sessel, die Sauna. Eine zweite Entität beleuchtet die andere Hälfte (links/rechts, beim Hochbett unten/oben). Lampen, Energiegeräte und Bildschirme haben ihre eigenen Felder dafür.
- **Duplizieren** und **Löschen** stehen ebenfalls dort.

![Ein Möbel ausgewählt](images/editor-furniture.jpg)

### 4.9 Räume einrichten

![Ein Raum mit Paket](images/editor-package.jpg)

**Einrichten …** an einem Raum stellt ein ganzes Möbelpaket an die Wände: Küchenzeile, Küche in L-Form, Bad, Schlafzimmer, Wohnzimmer, Esszimmer, Büro, Kinderzimmer oder Flur. Leuchten verbinden sich dabei mit den Lichtern des Bereichs. Danach passt du einzelne Möbel an. **Strg+Z** nimmt das ganze Paket zurück.

### 4.10 Geräte

![Geräte eines Raums](images/editor-devices.jpg)

Ein Raum mit Bereich listet rechts alle Geräte dieses Bereichs, nach Gerät gruppiert. Die Hauptentität steht vorn, weitere wie LED-Anzeigen oder Effekte stehen hinter **„+n mehr“**. Ein Suchfeld hilft bei großen Bereichen.

Sensoren erscheinen, wenn sie etwas für den Raum messen: Temperatur, Luftfeuchte, CO₂ und Luftqualität, Leistung und Energie, Gas- und Wasserzähler, Helligkeit und Luftdruck. Zähler ohne Geräteklasse zählen mit, wenn ihre Einheit passt (m³, l, kWh, lx). Akku- und Signalsensoren bleiben außen vor. Der Wert erscheint mit den Nachkommastellen, die in Home Assistant eingestellt sind. Fehlt ein Gerät, prüfe in Home Assistant, ob es dem Bereich des Raums zugeordnet ist.

Über der Liste wählst du die Quelle: **Dieser Bereich** (Standard), **Andere Bereiche** (die Geräte der übrigen Bereiche, nach Bereich gruppiert; steht ein Gerät schon in einem anderen Raum, steht das dabei, und **Platzieren** holt es hierher) oder **Ohne Bereich** (etwa Template-Lichter, Gruppen und Helfer; hier zählt jeder Sensor mit Zahlenwert und Einheit). Der Bereich in Home Assistant ändert sich dabei nicht.

**Raumklima:** Im Raumformular legst du unter **Raumklima** fest, welche Sensoren Temperatur, Luftfeuchte und CO₂ des Raums liefern (Heatmap und Raumfenster). *Automatisch* nimmt die Sensoren des Bereichs und die im Raum platzierten, lässt aber Gerätetemperaturen weg, etwa von einem 3D-Drucker oder den Vorlauf einer Wärmepumpe. *Keiner* blendet den Wert aus.

- **Platzieren** setzt ein Gerät in den Raum. **Alle … platzieren** unter der Liste setzt nach einer Rückfrage alle Hauptgeräte auf einmal; **Rückgängig** (Strg+Z) nimmt sie in einem Schritt zurück.
- Lichter werden dabei als Leuchten aus der Bibliothek gesetzt, damit sie in 3D leuchten.
- **☆** nimmt ein Gerät ins Raumfenster der 3D-Ansicht auf, ohne es in den Plan zu setzen. **👁** blendet ein Gerät des Bereichs im Raumfenster aus (durchgestrichen in der Liste, 🙈 holt es zurück) – für Entitäten, die dort nur stören. **Aa** blendet nur den Zustand eines Geräts im Raumfenster aus (∅ zeigt ihn wieder), etwa bei einem Rollladen ohne Rückmeldung; ein reines „unbekannt“ lässt das Raumfenster bei Schaltern, Rollläden und Lampen ohnehin weg.
- Ein platziertes Gerät ziehst du im Plan an seinen Platz.

![Ein Gerät ausgewählt](images/editor-device.jpg)

Ein ausgewähltes Gerät hat:

- **Höhe des Symbols**, **Drehung** und bei Lichtern die **Montage**: Decke, Boden, Tisch oder Wand.
- **Vor dem Schalten nachfragen:** Beim Antippen in 3D, im Schnellmenü und im Raumfenster erscheint erst eine Rückfrage. Das schützt etwa den Server-Schalter vor einem versehentlichen Tipp. Ein Doppeltipp auf den Raum lässt dieses Gerät aus.
- **Symbol in 3D:** *Automatisch* folgt dem Schalter Keine / Wichtige / Alle der 3D-Ansicht. *Immer zeigen* zeigt das Symbol auch bei „Wichtige“, etwa für einen Temperatursensor. *Ohne Watt* lässt die Leistung weg, etwa an einer Steckdose. *Ausblenden* zeigt nie ein Symbol. Bei „Keine“ bleiben alle Symbole aus.
- **Eigenes Symbol:** Der Name eines Material-Design-Icons wie in Home Assistant, etwa `mdi:thermometer` oder `mdi:water-alert`, ersetzt das Symbol nach Geräteart im Pin. Leer lassen = Standard. Gilt genauso für elektrische Möbel.
- **Als Möbel darstellen:** Ersetzt den Pin durch ein passendes Möbel an derselben Stelle, schon mit dem Gerät verknüpft – ein Lautsprecher oder Smart Display für einen Media Player, eine Leuchte für ein Licht, ein Heizkörper für ein Thermostat, der Saugroboter für einen Sauger. Die Liste zeigt nur Möbel, die zur Geräteart passen. Im Möbelformular holt **Wieder als Geräte-Pin** den einfachen Pin zurück; Strg+Z nimmt beides zurück.
- **Eigener Name** und **Name unter dem Symbol in 3D zeigen:** Mit Haken steht der eigene Name klein unter dem Pin – drei Thermometer im Garten („Pool Wasser“, „Pool Luft“, „Gewächshaus“) bleiben so unterscheidbar. Der Haken erscheint, sobald ein eigener Name eingetragen ist; Möbel mit eigenem Namen haben ihn genauso. Die Karten-Option `marker_names: true` zeigt die Namen aller Geräte mit eigenem Namen.
- **In Raummitte** und **Entfernen**.

### 4.11 Leuchten

Leuchten sind Möbel mit einem verknüpften Licht. Es gibt Deckenleuchte, Einbauspot, Aufbau-Spot, LED-Panel, Pendelleuchte, Stehlampe, Deckenfluter, Tischlampe, Wandleuchte, LED-Streifen, Wegleuchte und Garten-Spot.

- Das 3D-Modell leuchtet in Farbe und Helligkeit des Lichts. Boden und Wände des Raums werden mit beleuchtet, zwei farbige Deckenleuchten mischen sich dazwischen. In den Nachbarraum fällt das Licht nur durch Türen.
- Farbeffekte wie ein Farbwechsel werden in 3D animiert.
- Tischlampen stehen auf dem Möbel darunter, Wandleuchten und LED-Streifen rasten an der Wand ein, bei Pendelleuchten ist die Höhe die Abhängung unter der Decke.
- **Höhe über Boden:** Wandleuchten hängen von sich aus auf 1,75 m, LED-Streifen direkt unter der Decke. Im Formular stellst du für beide eine eigene **Höhe über Boden** ein, etwa für einen Streifen unter den Hängeschränken oder hinter dem TV-Board. **Höhe automatisch** setzt sie zurück. Ein Streifen unter 1 m Höhe (Sockelleiste, hinter dem Schrank) strahlt nach oben an die Wand, höher montierte strahlen nach unten. Ein Streifen unterhalb der Schnitthöhe bleibt auch bei geschnittenen Wänden sichtbar. **Neigung um die Länge** legt den Streifen an eine Dachschräge oder kippt ihn zur Seite (90° = die Leuchtfläche zeigt seitlich), **Senkrecht** stellt ihn hochkant: Dann läuft er von der Höhe über Boden nach oben, am Türrahmen oder als Lichtsäule, und leuchtet rundum.
- **Farbe und Helligkeit von:** Schaltet ein Relais (Shelly, Schaltaktor) die Lampe, während die Leuchte selbst Farbe und Helligkeit kennt, kommt An/Aus vom Schalter und die Farbe von dieser zweiten Entität.
- **Leuchtstärke in 3D (%):** Wie kräftig die Leuchte in 3D leuchtet. Unter 100 % dämpft helle LED-Streifen, damit der Raum nicht überstrahlt, über 100 % lässt eine schwache Lampe stärker leuchten. Gilt auch für Lichter, die als Gerät platziert sind; in Home Assistant schaltet es nichts.
- Statt eines Lichts geht auch ein Schalter, etwa ein Relais für das Deckenlicht.
- Mehrere Leuchten dürfen demselben Licht folgen.

![Spots setzen](images/editor-spots.jpg)

**Spots setzen** an einem Raum legt ein Raster aus Leuchten an, die alle einem Licht folgen, etwa sechs Einbauspots an einem Dimmer. Spalten und Reihen wählst du vorher.

### 4.12 Elektrische Möbel

Fernseher, Medienwand, Wohnwand mit TV (die Wohnwand ohne TV ist eine Leuchte: Vitrinen und LED-Leisten leuchten mit der verknüpften Lampe), Schreibtisch mit Monitor, Waschmaschine, Trockner, Spülmaschine, Heizkörper, Saugroboter und viele Pack-Möbel lassen sich mit Entitäten verknüpfen:

- **Gerät** oder **Fernseher (Media-Player oder Steckdose)**: Als Gerät geht auch ein **Status-Sensor**, etwa der Druckstatus eines 3D-Druckers (Bambu Lab u. a.). Das Möbel gilt dann als aktiv, solange der Status „running“, „printing“, „prepare“ oder ähnlich meldet.  Ein Fernseher leuchtet, solange er läuft. Ein älterer Fernseher an einer smarten Steckdose nimmt einfach deren Schalter; der Bildschirm leuchtet, solange die Steckdose an ist, und ein Tipp schaltet sie. Waschmaschine, Trockner und Spülmaschine leuchten, solange sie arbeiten. Ein Heizkörper mit Thermostat glüht beim Heizen.
- **Leistungssensor (W)**: Das Möbel zeigt seine Watt.
- **Vor dem Schalten nachfragen** und **Symbol in 3D** wie bei Geräten.
- **Bilder nach Zustand** bei Bildschirmen: eine Pro-Erweiterung, siehe [6.3](#63-bildschirme-live).

Steht dort „automatisch“, sucht NeonPlan 3D die passende Entität im Bereich selbst.

### 4.13 Kameras

![Kamera im Plan mit Sichtkegel](images/editor-camera-wedge.jpg)

Kameras platzierst du wie jedes Gerät. Danach:

- **Montage:** Wand mit Blickrichtung oder Decke als Dome, der rundum schaut.
- Im Plan zeigt ein **Kegel**, wohin die Kamera schaut. Der **Griff an der Spitze** dreht die Kamera und setzt zugleich die Reichweite.
- **Sichtwinkel (°)**, **Reichweite (m)** und **Neigung nach unten (°)** stellst du auch als Zahl ein.
- **Sichtkegel in 3D zeigen** lässt sich je Kamera abschalten. In 3D endet der Kegel an der ersten Wand: Eine Innenkamera sieht nicht durch die Wand in den Nachbarraum.

In 3D hängt die Kamera als kleines Modell an der Wand oder Decke, ihr Sichtfeld liegt als Kegel auf dem Boden. Meldet ein Bewegungs- oder Präsenzsensor der Kamera Bewegung, wird der Kegel rot.

### 4.14 Stellplätze und Fahrzeuge

![Stellplatz](images/editor-parking.jpg)

Das Möbel **Stellplatz** in der Gruppe Stellplätze markiert, wo ein Auto steht: in der Garage, in der Einfahrt oder irgendwo auf dem Grundstück.

- **Sensor „Auto anwesend“:** ein `binary_sensor`, `device_tracker` oder ähnliches. Solange er ein Auto meldet, steht das Fahrzeug da.
- **Fahrzeug:** das Modell aus dem Pack „Fahrzeuge“.
- **Fahrzeugtyp-Sensor** (optional): Liefert ein Sensor, welches Auto da ist, etwa aus einer KI-Kameraauswertung, ordnest du jedem Zustand ein Modell zu.
- **Größe (%)** passt das Modell an den Platz an. Ist das Fahrzeug höher als der Raum, warnt der Editor.

![Fahrzeug in der Garage](images/view-garage.jpg)

### 4.15 Saugroboter

Das Möbel Saugroboter wird mit der `vacuum`-Entität verknüpft. Saugt der Roboter, fährt er in 3D in Bahnen durch den Raum seiner Station und kehrt danach zurück. Die Bahn ist simuliert, weil Home Assistant die echte Position meist nicht kennt.

Viele Roboter melden aber den Raum, den sie gerade saugen, zum Beispiel Roborock und Dreame mit einem Sensor „Aktueller Raum“. NeonPlan 3D findet diesen Sensor am Gerät des Roboters von selbst; im Feld **Aktueller Raum (Sensor)** kannst du auch einen anderen wählen. Der gemeldete Name wird mit dem Raumnamen und dem Home-Assistant-Bereich verglichen, Groß- und Kleinschreibung und die Schreibweise von Umlauten spielen keine Rolle („Kueche“ passt zu „Küche“). Wechselt der Roboter den Raum, erscheint er in 3D dort und fährt seine Bahnen. Passt kein Raum, bleibt er im Raum seiner Station.

Seine Bahnen machen einen Bogen um Möbel, die auf dem Boden stehen: Schränke, Sofas, Betten, Küchenzeilen und Geräte. Unter Tischen, Schreibtischen, Stühlen, Hockern und Bänken fährt er durch, ebenso über Teppiche und unter hängenden Möbeln wie Oberschränken.

### 4.16 Treppen und Bodenöffnungen

- Die **Treppe** aus der Bibliothek steigt von der markierten Vorderkante nach hinten an. Reicht sie bis zur Etage darüber, schneidet sie dort die Treppenöffnung in die Decke.
- Mit dem Werkzeug **Bodenöffnung** ziehst du ein Loch direkt in den Boden einer Etage auf, etwa über dem Treppenaufgang oder für eine Galerie. Von oben sieht man hindurch. Die Öffnung muss ganz in einem Raum liegen. Mehrere Öffnungen dürfen sich überlappen, so entsteht zum Beispiel eine L-Form.
- Weitere Treppen und Geländer bringt das Pack **Treppen & Geländer**.

![Werkzeug Bodenöffnung](images/editor-hole-tool.jpg)

### 4.17 Außenflächen und Außenleuchten

Mit **Außen** ziehst du Rasen, Terrasse, Weg, Einfahrt, Pool, Beet, Hecke oder Zaun auf. Eine ausgewählte Außenfläche änderst du an ihren Ecken; ein Rechteck bleibt dabei ein Rechteck. Hecke und Zaun bekommen im Formular eine **Höhe** (Thuja-Sichtschutz 2,5 m, Beeteinfassung 0,5 m); **Umrisslinie zeigen** ohne Haken lässt die Leuchtlinie am Rand weg, etwa bei einem Grundstück aus mehreren Rasenflächen. **Höhenversatz** senkt eine Fläche unter den Boden oder hebt sie an – die Einfahrt hinunter zur tieferen Garage, die erhöhte Terrasse; Leuchten darauf folgen mit. **Gefälle** neigt eine Fläche: Höhenunterschied in Metern und die Richtung, in die sie fällt (die hohe Kante liegt auf dem Höhenversatz) – eine Einfahrt, die zur Straße abfällt, ein Hang im Garten; Zaunpfosten und Leuchten stehen auf der schrägen Fläche. **Wildfläche** ist eine Art für ungemähte Ecken. **Aus Flächen darunter ausschneiden** macht eine Fläche zum Loch in jeder vorher gezeichneten Fläche, in der sie ganz liegt – ein Teich oder eine Wildfläche mitten in einem einzigen großen Rasen. **Pergola / Rahmen** zeichnet Eckpfosten, Balken und Sparren in der eingestellten Höhe, mit **X-Verstrebung** an den Seiten – für Pergolen, Carport-Gerüste oder den Unterbau eines Rolldachs. Zaun und Pergola können **offen** bleiben: Die Kante vom letzten zum ersten Punkt fehlt dann, der Zaun lehnt am Haus. Bäume, Sträucher und Gestrüpp kommen als Möbel aus dem Pack **Garten & Terrasse** (ab Release 3: Eiche, Linde, Birke, Ahorn, Obstbaum, Fichte, Kiefer, Thuja, Strauch, Blühstrauch, Gestrüpp, Baumgruppe); Breite und Höhe im Möbelformular bestimmen Krone und Wuchs. Wegleuchten, Garten-Spots und Außen-Wandleuchten beleuchten die Außenflächen und die Fassade.

![Garten bei Nacht](images/view-garden.jpg)

### 4.18 3D daneben

**3D daneben** zeigt die 3D-Ansicht rechts neben dem Plan. Jede Änderung erscheint dort nach einem Augenblick.

- Die **Leiste zwischen Plan und 3D** ziehst du, um das Verhältnis zu ändern. Der Browser merkt sich die Einstellung.
- Oben in der 3D-Hälfte schaltest du zwischen **Wände hoch** und **Schnitt**.
- Ein Möbel oder Gerät kannst du auch in der 3D-Hälfte antippen und ziehen. Unten erscheint dann eine Leiste mit Breite, Tiefe, Höhe, Höhe über Boden, Drehung und Löschen.
- Die Seitenleiste klappt neben der 3D-Ansicht ein. Am rechten Rand öffnen kleine Knöpfe sie wieder, das Stecknadel-Symbol hält sie offen.

### 4.19 Dach

![Ein Bauernhaus mit Wohnhaus, Scheune und Anbau, jedes mit eigenem Dach](images/view-roof-sections.jpg)

Ein einfaches Haus bekommt unter **Einstellungen → Dach** ein Flach- oder Satteldach über das ganze oberste Geschoss. Für alles andere – ein Haus in L- oder T-Form, ein Wohnhaus mit Scheune, ein Anbau mit Pultdach, ein Dach, das auf einer Seite tief herunterzieht – baust du das Dach aus **Dachflächen**.

- Wähle unter **Dach** die Option **Dachflächen (frei)** oder das Werkzeug **Dach**. Beim ersten Mal schlägt NeonPlan 3D die Dachflächen aus deinen Räumen vor: je Etage die Teile, über denen keine höhere Etage liegt, jeweils mit Satteldach. Danach passt du sie an.
- Im Werkzeug **Dach** ziehst du eine neue Dachfläche im Plan auf. Antippen wählt eine aus, ziehen verschiebt sie, die Ecken ändern die Größe. Oben wählst du die Etage, deren Räume im Plan liegen. Daneben öffnet sich die 3D-Ansicht mit dem ganzen Haus, so siehst du jede Änderung sofort.
- Mit dem Schloss **🔓 Fixieren** (oder der Taste **L**) sitzt eine fertige Dachfläche fest und verrutscht nicht mehr beim Antippen; **🔒 Grundriss** sperrt alle Dachflächen mit.
- Jede Dachfläche hat eine **Form** – Sattel, Walm, Krüppelwalm (oben abgewalmter Giebel), Zelt (vier Flächen zur Spitze), Mansard (steil unten, flach oben), Pult, Flach und Attika (Flachdach mit Brüstung) – und eine **Firstrichtung** (↔ oder ↕).
- **Traufe** und **Neigung** stellst du für beide Seiten getrennt ein. Alle Höhen zählen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter, so entsteht etwa ein Abschleppdach über einem niedrigen Anbau. Ein Pultdach steigt von der ersten Seite an; **Seiten tauschen** dreht es um.
- **Wandoberkante** ist die Höhe, auf der die Wände unter dem Dach enden. Eine neue Dachfläche übernimmt sie von den Räumen darunter, egal welche Etage der Plan gerade zeigt. Von dort werden Giebel und Drempel bis unter das Dach hochgezogen, so ist auch der Raum unter einem Pultdach geschlossen.
- **Sitzt auf Etage** zeigt, zu welcher Etage die Dachfläche in der 3D-Ansicht gehört, und setzt sie auf die Wandoberkante einer anderen Etage – Wandoberkante und Traufen wandern mit. Das hilft, wenn eine neue Dachfläche auf der falschen Etage gelandet ist, etwa über einem Obergeschoss mit Treppenloch in der Mitte.
- **Flachdach als freie Form:** Bei einem Flachdach gibt es den Knopf **Umriss des Geschosses übernehmen** – die Fläche bekommt den Umriss der Räume des angezeigten Geschosses (auch L- oder Z-förmig), eine Fläche ohne Kanten statt mehrerer Rechtecke. Die Ecken lassen sich danach im Plan ziehen; **Zurück zum Rechteck** löscht die Form.
- **Gauben:** Im Formular einer Dachfläche fügt **+ Gaube** eine Gaube auf der gewählten Seite ein – 2 m breit, Front an der Traufwand, Traufe 1,4 m über der Dachtraufe, Satteldach, so tief, dass ihr First auf die Schräge trifft. Eine Gaube ist eine kleine Dachfläche: verschieben, Breite, Höhen und Form (Sattel, Pult) änderst du wie bei jeder anderen. Die Hauptfläche öffnet sich darunter, die Wangen schließen seitlich ab, und die Wand des Dachgeschosses steigt unter der Gaube bis zu ihrer Traufe – dort setzt du mit **Tür & Fenster** das Gaubenfenster.
- **Zwerchgiebel (Drei-Giebel-Haus):** Ein Giebel, der aus der Traufseite vortritt, ist eine breite Gaube, deren Traufe auf der Wandoberkante liegt: **+ Gaube**, dann Breite ziehen (z. B. 3,4 m) und **Traufe** auf die Wandoberkante setzen. Die Tiefe passt sich von selbst an – die Gaube reicht genau so weit, bis ihr First auf die Schräge trifft, und das Hauptdach öffnet sich nur dort, wo das Gaubendach darüber liegt (Kehlen). Die Dachgeschoss-Wand unter dem Zwerchgiebel steigt bis in den Giebel, das Fenster darin setzt du mit **Tür & Fenster**.
- **Dachschrägen (Kniestock):** Liegt die Wandoberkante unter der Deckenhöhe des Geschosses darunter (auch wenn die Schräge schon im Geschoss darunter beginnt: dann enden dessen Wände an der Traufseite ebenfalls an der Schräge) – zum Beispiel 0,9 m über dem Boden des Dachgeschosses –, enden dessen Wände an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenwände an der Schräge. Fenster passen dann nur, wo die Wand hoch genug ist (im Giebel); an der Traufseite nimmst du Dachfenster. Im Grundriss zeigen gestrichelte Linien, wo unter der Schräge noch 1,5 m und 2 m Kopfhöhe bleiben.
- Wo eine Dachfläche an einen höheren Teil des Hauses stößt, etwa ein Pultdach an der Hauswand, entfällt dort der Überstand; das Dach endet an der Wand.
- Unten im Formular steht die **Firsthöhe**. Dachflächen dürfen sich überschneiden: Das niedrigere Dach läuft unter das höhere, wie bei einem echten Anbau.
- **Neu aus den Räumen erzeugen** ersetzt alle Dachflächen durch einen neuen Vorschlag, **Zurück zu einem Dach** schaltet auf das einfache Dach zurück.
- **Überdachung:** Für ein Terrassendach oder einen Carport ziehst du eine Dachfläche über eine Fläche ohne Raum. Sie wird automatisch zur Überdachung: ein flaches Pultdach auf 2,4 m, getragen von Pfosten und Balken statt Wänden, mit durchsichtiger Dachfläche. An der Hauswand liegt sie auf. Den Schalter **Überdachung** gibt es auch im Formular jeder Dachfläche.

![Eine Terrassenüberdachung vor dem Haus](images/view-canopy.jpg)

![Das Werkzeug Dach mit einer ausgewählten Dachfläche](images/editor-roof.jpg)

#### Dachfenster

Unter den Dachflächen legt **+ Dachfenster** ein Fenster in eine Dachfläche (Standard 78 × 118 cm). Es lässt sich im Grundriss verschieben, auch auf eine andere Dachfläche, und hat wie ein normales Fenster **Rollladen**, **Kontakt** und **Kippkontakt**: Offen klappt der Flügel oben angeschlagen nach außen, gekippt ein Stück, und der Rollladen fährt von oben über die Scheibe.

Zu jedem Dachfenster gehören ein **Name** (optional), **Rollladen**, **Kontakt** und **Kippkontakt** – und ein **Fenstermotor**: Velux, Roto oder Fakro melden die Fensterstellung als Cover, der Flügel öffnet in 3D so weit, wie der Motor steht. Offen oder gekippt leuchtet der Rahmen warm wie bei einem Wandfenster. Liegt das Fenster in einer Dachfläche, schneidet es ein Loch in die Schräge, so sieht man aus dem Dachgeschoss hinaus.

### 4.20 Energie: Solarfelder

Im Werkzeug **Energie** lassen sich nur Solarfelder und Energiegeräte verschieben, im Grundriss wie in 3D; Räume und Möbel sind dort gesperrt, ein Hinweis oben im Grundriss sagt das. Das Werkzeug sammelt alles rund um Energie im Haus, zuerst die **Solarfelder** (Zähler, Heizung und Wärmepumpe folgen). **+ Solarfeld** legt ein Feld auf die sonnigste freie Dachfläche, so groß, wie es passt. **+ Frei aufgeständert** stellt ein Feld auf Gestellen neben das Haus, etwa in den Garten oder auf ein flaches Garagendach. **+ An der Wand** hängt eine Reihe Module an die sonnigste Außenwand der angezeigten Etage (Fassade, Balkon).

Felder lassen sich im Grundriss und in der **3D-Ansicht daneben** mit der Maus verschieben, auch auf eine andere Dachfläche oder Wand. Dachfenster genauso, im Werkzeug **Dach**. Die Module liegen in der Neigung der Dachfläche, auf einem Flachdach stehen sie aufgeständert. Das klappt beim einfachen Sattel- und Flachdach und auf allen Dachabschnitten (Satteldach, Walmdach, Pultdach, Flachdach). Bei Walm- und Zeltdach stehen auch die beiden dreieckigen **Walmseiten** zur Wahl, etwa die Südseite eines Walmdachs mit Ost-West-First; die Felder werden zur Spitze hin schmaler.

| Feld | Wirkung |
|---|---|
| **Dachfläche** | Die Fläche mit Himmelsrichtung und Neigung, zum Beispiel „Hauptdach · Süd · 35°“ |
| **Name** | Zum Beispiel „Strang 1 Süd“; mehrere Felder für mehrere Stränge oder Dachflächen |
| **Reihen** und **Module pro Reihe** | Größe des Feldes. Eine Liste wie **„4, 4, 3“** gibt jeder Reihe ihre eigene Länge (von der Traufe aus), kürzere Reihen sitzen links, mittig oder rechts. Module, die über die Fläche hinausragen würden, fallen weg |
| **Module einzeln an/aus** | Im Grundriss einzelne Module wegtippen oder wieder dazunehmen, etwa um einen Schornstein oder ein Dachfenster herum |
| **Full Black** / **Blau** | Optik der Module: ganz schwarz (Standard) oder klassisch blau |
| **Modulbreite** / **Modulhöhe** | Größe eines Moduls im Hochformat, Standard 1,13 × 1,72 m |
| **Modulleistung (Wp)** | Spitzenleistung eines Moduls, Standard 400 – bestimmt die kWp des Feldes und des Strangs und wie hell die lebenden Module (Energie Pro) leuchten |
| **Strang** | Felder, die zusammen verschaltet sind, auch auf verschiedenen Dächern: etwa 5 Module auf dem Haus und 5 auf der Garage in „Strang 1“. Der Strang hat einen Namen, einen PV-Sensor und einen Wechselrichter (unter **Geräte** angelegt) |
| **PV-Leistung dieses Feldes** | Der Leistungssensor seines Strangs, für die kommende Pro-Erweiterung |
| **Hochformat** / **Querformat** | Lage der Module (1,13 × 1,72 m) |
| **Abstand vom Rand** / **von der Traufe** | Position des Feldes. Im Grundriss lässt es sich mit der Maus verschieben, auch auf eine andere Dachfläche; über den Rand der Fläche hinaus rutscht es nicht |
| **Neigung der Aufständerung** | Flachdach und Garten: Winkel der Gestelle, dazu die Richtung |
| **Frei aufgeständert** | Das Feld steht auf Gestellen, frei verschiebbar. **Höhe der Aufstellfläche** hebt es an, z. B. 2,8 m auf ein Garagendach (0 = Boden). **Drehung** richtet die Reihen aus, ebenso die Knöpfe ↺/↻ 15° und der Dreh-Griff im Grundriss; das Feld dreht sich dabei um seine Mitte |
| **Wand** | Module hängen an einer Außenwand; statt „Abstand von der Traufe“ gibt es die **Höhe über dem Boden**. **Neigung von der Wand** stellt sie schräg: oben abstehend oder unten abstehend, bis 90° als Vordach. Die Etagen-Knöpfe oben wählen, an welcher Etage du arbeitest |
| **Fläche füllen** | Legt so viele Module auf die Fläche, wie passen |

Unter dem Feld steht die Leistung, gerechnet mit 400 W je Modul. Die Grundriss-Sperre hält Solarfelder nicht fest; mit **🔓 Fixieren** im Formular lässt sich ein Feld (und genauso ein Dachfenster) aber einzeln festsetzen. **Geräte:** Wechselrichter, Stromspeicher und Wallbox legst du ebenfalls im Werkzeug **Energie** an, unter **Geräte**, auf der oben gewählten Etage. Die Wallbox kommt von selbst in die Garage, Wechselrichter und Speicher in einen Technikraum (HWR, Keller …), jeweils an eine Wand ohne Tür oder Tor, und der Grundriss springt hin. Ein Tipp auf ein Gerät in der Liste zeigt es im Grundriss. Dort trägt jedes Gerät im Werkzeug Energie eine runde Markierung mit Symbol (⚡ Wechselrichter, 🔋 Speicher, 🔌 Wallbox), an der man es anfasst und verschiebt, auch wenn darüber ein Solarfeld auf dem Dach liegt. Mit einem Leistungssensor zeigen sie ihre Watt. Der **Stromspeicher** zeigt mit dem Feld **Ladestand** zusätzlich seinen Ladestand, etwa „64 % · ▲ 1,5 kW“ (▲ lädt, ▼ entlädt), die **Wallbox** mit einem **Status**-Sensor „lädt · 11 kW“ oder „angesteckt“.

**Stromzähler und Netzanschluss:** Der **Stromzähler** ist das vierte Energiegerät; er bekommt den Netzsensor (W, + = Bezug) und zeigt „Netzbezug 420 W“ oder „Einspeisung 900 W“. Der **Netzanschluss** markiert, wo die Leitung zum Stromanbieter das Grundstück verlässt, etwa am Ende der Einfahrt; er wird dort angelegt, wo die Leitung von selbst enden würde, und lässt sich im Grundriss verschieben. Jedes Gerät hat im Formular ein Feld **Name** („Wechselrichter Nord“), das in Liste, Formular und an den Pins in 3D erscheint, und Wechselrichter und Speicher ein **Modell**: Wandgerät, schmal und hoch oder Hybrid; Turm, Wandspeicher oder kompakter Balkonspeicher. Mehrere Wechselrichter und Speicher gehen, zum Beispiel eine große Anlage und ein Balkonkraftwerk: Jeder bekommt seinen eigenen Sensor.

**Energiebilanz:** Netz, Solar und Akku holt NeonPlan von den Geräten im Plan (Zähler, Wechselrichter, Speicher; mehrere werden zusammengezählt, Ladestände gemittelt). Im Abschnitt **Energiebilanz** wählst du andere Sensoren, drehst Vorzeichen um und gibst den Hausverbrauch an. **Aus dem Energie-Dashboard übernehmen** holt die Sensoren, die du im Energie-Dashboard von Home Assistant eingetragen hast: zu jeder Energie-Statistik den Leistungssensor desselben Geräts. Prüfe danach die Vorzeichen.

Ganz unten kündigt eine Karte die kommende Pro-Erweiterung **Energie Pro** an. Alles, was du hier einrichtest, bleibt kostenlos und wird von ihr direkt genutzt.

---

## 5. Die 3D-Ansicht

![Eine Etage](images/view-floor-eg.jpg)

### 5.1 Haus, Etage, Raum

Die 3D-Ansicht hat drei Ebenen:

1. **Das ganze Haus** mit einer Beschriftung je Etage: Räume, Lichter an, offene Fenster.
2. **Eine Etage:** Die Etagen darüber fliegen weg, die darunter bleiben je nach Einstellung abgedunkelt, gestapelt oder ausgeblendet.
3. **Ein Raum:** Die Kamera fliegt hinein, das Raumfenster öffnet sich.

**Navigieren:**

- Eine Etagenbeschriftung oder einen Raum antippen geht eine Ebene tiefer.
- **Doppeltipp** auf eine freie Stelle, **Esc** oder **Zurück** geht eine Ebene höher.
- Ziehen dreht die Ansicht, zwei Finger oder das Mausrad zoomen.
- Links wechseln die **Etagen-Miniaturen** direkt zu einer Etage. Der kleine Pfeil darüber klappt sie zu schlichten Etagen-Knöpfen ein (das Gerät merkt sich das), in der Karte schaltet `floor_thumbs: false` sie ab.
- Oben stehen Knöpfe für alle Etagen und für die Räume der offenen Etage.

### 5.2 Die Schalter unten

| Schalter | Wirkung |
|---|---|
| **Wände hoch** / **Schnitt** | Wände in voller Höhe, die vorderen als getöntes Glas, oder alle Wände in Hüfthöhe geschnitten – hohe Möbel (Schrank, Treppe, Hochschrank) werden mitgeschnitten, damit sie nichts dahinter verdecken |
| **Auseinander** / **Gestapelt** | In der Hausansicht: Etagen auseinandergezogen oder aufeinander |
| **Dach bleibt** | In der Hausansicht: Das Dach bleibt beim Heranzoomen liegen, statt sich zu heben und auszublenden (im Editor gilt das im Werkzeug Dach und Energie immer) |
| **Abgedunkelt** / **Gestapelt** / **Einzeln** | Bei einer offenen Etage: Was mit den Etagen darunter passiert |
| **Normal** / **Temp.** / **Feuchte** / **CO₂** / **Werte** | Heatmap: Böden in der Farbe des Raumwerts; **Werte** färbt nichts, sondern schreibt Temperatur, Feuchte und CO₂ als Zahlen unter die Raumnamen |
| **Raumnamen** | Namen der Räume ein- oder ausblenden |
| **Spur** | Bewegungsspur, Pro, siehe [6.1](#61-kamera-cockpit) |
| **Wetter** | Wetter draußen, Pro, siehe [6.2](#62-wetter-draußen) |
| **≡ / ↔** (rechts in der Etagen- und Raumleiste) | Die Leiste oben auf mehrere Zeilen umbrechen, wenn viele Räume nicht in eine Zeile passen, oder zurück in eine Zeile; in einer Zeile scrollt sie seitlich, am PC auch mit dem Mausrad. In der Hausansicht steht vor den Räumen jeder Etage ihr Name |
| **⚙** (nur auf dem Handy, oben neben der Version) | Klappt die Ansichtsoptionen Qualität, Look, Symbole und FPS auf und wieder zu; so braucht der Kopf auf dem Handy nur zwei Zeilen |
| **Auge** (unten links, neben der Lupe) | Blendet alles aus, was nicht die 3D-Ansicht ist: Kopfzeile, Etagen- und Raumleiste, Energiewerte, Etagenbilder, Schalter. Übrig bleibt die Bühne – auf dem Handy die halbe Bildschirmhöhe mehr. Ein Tipp aufs Auge holt alles zurück; ein Raum lässt sich weiter antippen. Das Gerät merkt sich die Wahl |

![Schnittansicht](images/view-cut.jpg)

Oben rechts stehen:

| Schalter | Wirkung |
|---|---|
| **Auto** / **Tablet** / **Hoch** | Qualitätsstufe. Tablet lässt Muster, Schatten und Halos weg und wird auf Fire-Tablets automatisch gewählt. Hoch zeigt zusätzlich Lichtkegel unter Spots |
| **Neon** / **Blueprint** / **Tag** | Der Look. Das Farbfeld daneben setzt eine **eigene Akzentfarbe**: Im Neon-Look nehmen Linien und Leuchtkanten sie an, die Knöpfe und Pins in jedem Look; ↺ bringt das Cyan zurück |
| **Keine** / **Wichtige** / **Alle** | Welche Gerätesymbole erscheinen. Wichtige zeigt nur Geräte ohne eigenes 3D-Modell und Werte wie Watt oder die laufende App |
| **FPS** | Bildrate, langsamstes Bild und Grund für jedes gezeichnete Bild. Im Ruhezustand steht dort 0 B/s |

Ganz rechts in der Kopfzeile steht die installierte Version (z. B. v1.11.0); der Mauszeiger darauf zeigt, welche Version die Integration in Home Assistant meldet.

Alle Schalter merkt sich das jeweilige Gerät.

![Blueprint](images/view-blueprint.jpg)

![Tag](images/view-day.jpg)

### 5.3 Bedienen

![Lampe antippen](images/view-tap-lamp.jpg)

- **Antippen** schaltet Lampen und Schalter. Die Lampe blinkt kurz zur Bestätigung.
- **Senkrecht wischen** auf einer Lampe dimmt, auf einem Rollladen oder Fenster fährt der Rollladen. Der Wert erscheint am Finger. Geräte und Fenster mit „Vor dem Schalten nachfragen“ reagieren nicht auf Wischen.
- **Lange drücken** öffnet das Schnellmenü: bei Lichtern Helligkeit, Farbtemperatur und Farben, bei Rollläden Auf, Stopp, Zu und feste Positionen. Raffstores und Jalousien mit Lamellen bekommen dort und im Raumfenster einen **Lamellen**-Regler (oder Lamellen auf/zu), sobald die Entität das kann.
- Ein **Fenster** antippen, egal ob Rahmen, Glas oder Rollladen, öffnet das Rollladen-Menü oder zeigt den Kontakt.
- **Doppeltipp auf einen Raum** schaltet alle Lichter des Raums ein oder aus. Geräte mit „Vor dem Schalten nachfragen“ bleiben außen vor.
- Fernseher, Türen und Garagentore lassen sich ebenfalls direkt antippen.

![Schnellmenü Licht](images/view-quickmenu.jpg)

![Schnellmenü Rollladen](images/view-quickmenu-cover.jpg)

![Wischen zum Dimmen](images/view-swipe.jpg)

### 5.4 Das Raumfenster

![Raumfenster](images/view-room-panel.jpg)

In einem Raum öffnet sich rechts das Raumfenster, auf Handys und hochkant unten. Es zeigt die Geräte des Raums nach Art: Licht mit Helligkeit, Farbtemperatur und Farben, **Alle an** und **Alle aus**, Rollläden mit **Alle auf** und **Alle zu**, Heizung, Medien, Schalter, Kameras mit Standbild, Sensoren sowie Szenen & Skripte.

Es zeigt die Geräte, die im Plan im Raum stehen, und alles, was du im Editor mit ☆ hinzugefügt hast. **Weitere Geräte des Bereichs** blendet den Rest ein.

Bei einem ausgewählten Raum ohne offenes Raumfenster erscheinen unten die **Szenen und Skripte** des Bereichs als Knöpfe.

### 5.5 Suchen

![Suche](images/view-find.jpg)

Der **Stern** über der Lupe öffnet das **Zentral-Menü**: Lichter an oder aus und Rollläden auf oder zu für die gezeigte Etage – in der Hausansicht für das ganze Haus, dann mit einer Rückfrage („Sicher?“, ein zweiter Tipp führt es aus). Garagentore und Tore zählen nicht als Rollläden. Darunter stehen die **Favoriten** aus dem Editor; ein Tipp startet eine Szene oder ein Skript, drückt eine Taste oder schaltet einen Schalter um. In der Karte blendet `central: false` den Stern aus.

Die Lupe unten links öffnet **„Wo ist …?“**. Tippe einen Gerätenamen oder Raum. Ein Treffer fliegt die Kamera dorthin, das Gerät blinkt.

### 5.6 Heatmap

![Heatmap Temperatur](images/view-heat.jpg)

**Temp.**, **Feuchte** und **CO₂** färben die Böden nach den Sensoren des Bereichs, mit einer Farbskala am Rand. Temperaturen erscheinen in der Einheit, die in Home Assistant eingestellt ist (°C oder °F); Sensoren in °F werden richtig umgerechnet.

### 5.7 Sonne und Tageslicht

![Sonnenlicht](images/view-sun.jpg)

Ist die Nordrichtung eingestellt, fällt das Sonnenlicht aus `sun.sun` durch die Fenster, die zur Sonne zeigen, als weiche Flecken auf den Boden. Heruntergelassene Rollläden verkleinern die Flecken. Tagsüber wird der Himmel hinter dem Haus heller.

### 5.8 Warnungen

![Warnung](images/view-alert-banner.jpg)

NeonPlan 3D warnt kostenlos und ohne Einrichtung:

| Warnung | Auslöser |
|---|---|
| Rauch, Gas, Kohlenmonoxid, Wasser | `binary_sensor` dieser Geräteklasse im Bereich meldet „an“ |
| Alarm | Ein `alarm_control_panel` ist ausgelöst oder löst gleich aus |
| Fenster offen bei Regen | Ein Fenster ist offen oder gekippt, und die Wetter-Entität meldet Regen, Gewitterregen, Hagel oder Schneeregen |

Der betroffene Raum pulsiert rot, oben erscheint ein Banner. Ein Tipp auf die Warnung springt in den Raum. Die Regenwarnung nimmt die Wetter-Entität aus den Plan-Einstellungen und lässt sich dort unter **Warnung: Fenster offen bei Regen** einzeln abschalten.

### 5.9 Kameras in 3D

![Kamera in 3D](images/view-camera-model.jpg)

Ein Tipp auf die Kamera oder auf ihren Sichtkegel öffnet das Standbild, das sich alle paar Sekunden erneuert. Ein Tipp auf das Bild öffnet das Livebild von Home Assistant. Der Kegel ist eine viel größere Tippfläche als die kleine Kamera.

![Kamera-Standbild](images/view-camera.jpg)

---

## 6. Pro-Erweiterungen

Pro-Erweiterungen sind kostenpflichtige Zusatzfunktionen, einzeln im Shop erhältlich. Ohne Erweiterung zeigen die Schalter ein 🔒, und ein Hinweis führt zum Shop. Wie du sie installierst, steht in [Kapitel 7](#7-erweiterungen-shop-und-möbel-packs).

![Gesperrte Pro-Funktion](images/view-pro-locked.jpg)

### 6.1 Kamera-Cockpit

**Durch die Kamera schauen:** Im Standbild-Menü einer Kamera und im Raumfenster steht „Durch die Kamera schauen“. Die 3D-Ansicht fliegt an die Stelle der Kamera und blickt in ihre Richtung, das Livebild liegt halbtransparent über der Szene. Mit dem Regler unten stellst du die Überblendung ein, „Zurück zur Ansicht“ fliegt zurück. Passt das Bild nicht genau, korrigierst du Drehung und Neigung der Kamera im Editor.

![Durch die Kamera schauen](images/view-camera-through.jpg)

**Bewegungsspur:** Der Schalter **Spur** zeigt, wo in den letzten 30 Minuten Bewegung gemeldet wurde: leuchtende Punkte mit Uhrzeit, in zeitlicher Folge verbunden, ältere verblassen. Quellen sind Bewegungs-, Präsenz- und Belegungssensoren. Im Plan platzierte Sensoren liegen an ihrem Platz, Kamerasensoren an der Kamera, alle anderen in der Raummitte. Die Daten kommen aus dem Verlauf von Home Assistant und werden jede Minute neu geladen.

![Bewegungsspur](images/view-trail.jpg)

**Erkennungs-Pins:** Meldet ein Sensor der Kamera gerade eine Erkennung (Frigate, UniFi Protect, Reolink und ähnliche liefern je Objekt einen Sensor: Person, Fahrzeug, Tier, Bewegung), steht vor der Kamera ein Pin mit Symbol, Art und Uhrzeit – „Person · 18:42“. Antippen öffnet den Sensor. Mehrere Objekte zugleich ergeben mehrere Pins übereinander.

**Kamera-Wand:** Der Schalter **Kameras** unten (in der Karte die Option `camera_wall: true`) legt alle Livebilder deiner platzierten Kameras als Wand über die Szene, alle paar Sekunden aufgefrischt. Eine Kamera, die gerade Bewegung sieht, bekommt einen roten Rahmen; eine, die aufnimmt, einen roten Punkt. Die Kacheln teilen sich die Wand (eine Kamera füllt sie, zwei stehen nebeneinander, bis vier als Raster 2×2). Die Kacheln sind Standbilder, alle 5 Sekunden neu (auf der Tablet-Stufe alle 10, ein kleiner Hinweis im Kopf sagt es) – zehn Livestreams würden ein altes Tablet überfordern. Auch beim Durchschauen in 3D ist das Bild ein Standbild; die Leiste unten sagt es. Antippen zeigt das Bild groß, und zwar als **Livestream** über den Player von Home Assistant, sobald die Kamera streamen kann (sonst bleibt das Standbild); von dort führt **Durch die Kamera schauen** in die 3D-Ansicht, und **Zurück zur Ansicht** bringt dich wieder zur Wand. **‹ Alle Kameras** geht zurück zum Raster, ✕ schließt die Wand.

### 6.2 Wetter draußen

![Regen](images/view-weather-rain.jpg)

Das Wetter rund ums Haus folgt deiner Wetter-Entität:

| Zustand | In 3D |
|---|---|
| rainy, pouring, hail | Regen, dazu Wolken |
| snowy, snowy-rainy | Schnee, bei Schneeregen beides |
| lightning, lightning-rainy | Blitze, beim Gewitterregen auch Regen |
| fog | Nebel, nur wenn eingeschaltet |
| cloudy, partlycloudy | Wolken dunkeln Himmel und Sonnenlicht |
| windy | Wind treibt Regen und Schnee schräg |
| sunny, clear-night | Sonne am Tag, Mond in der Nacht |

Liefert die Entität `cloud_coverage` und `wind_speed`, nutzt NeonPlan 3D diese Werte.

![Schnee](images/view-weather-snow.jpg)

**Einstellungen** im Editor: Unter **Wetter-Entität** wählst du die Entität, unter **Wetter-Effekte in 3D** schaltest du einzelne Effekte ab. Nebel ist anfangs aus, weil er die ganze Szene eingraut. Auf der Qualitätsstufe Tablet bleibt nur die Abdunkelung durch Wolken.

### 6.3 Bildschirme live

Ohne diese Erweiterung leuchtet ein Fernseher nur, solange er an ist. Mit ihr:

- Fernseher und Monitore zeigen die **Farbe der laufenden App** und das **Cover** des Media Players.
- **Bilder nach Zustand:** Am Bildschirm-Möbel legst du Regeln an. Ist eine Entität in einem bestimmten Zustand oder hat ein Attribut einen Wert, zeigt der Bildschirm ein Bild. Beispiel: Attribut `app_name` des Fernsehers enthält „netflix“, dann erscheint das Netflix-Logo. Der Wert passt, wenn er gleich ist oder im Text vorkommt, `*` passt immer. Die erste passende Regel gewinnt.
- Als Bild geht ein Upload, der auf 512 Pixel verkleinert wird, eine Bild-URL oder eine **Kamera**. Ein Kamerabild erneuert sich alle 5 Sekunden, solange es zu sehen ist.
- **Bildschirm hinter dem Bild:** dunkel oder weiß, je nachdem, ob das Logo hell oder dunkel ist.
- „✓ passt gerade“ an einer Regel zeigt, welches Bild im Moment zu sehen ist. Hochgeladene Bilder lassen sich an anderen Bildschirmen wiederverwenden.

![Bildregeln](images/editor-picture-rules.jpg)

![Medienwand mit Logo](images/view-media-wall.jpg)

![Kamerabild auf dem Monitor](images/view-camera-screen.jpg)

---

### 6.4 Energie Pro

Energie Pro macht aus dem Energie-Werkzeug ein lebendiges Bild deiner Anlage: Strom fließt sichtbar durchs Haus, die Solarmodule leben mit der Sonne, und ein Hologramm aus Glas zeigt die Bilanz. Alles, was du dafür einrichtest, ist kostenlos und steht in [4.20](#420-energie-solarfelder); Pro schaltet die Darstellung frei. Gas, Wasser und Wärme folgen als Updates im selben Pack.

**In fünf Minuten eingerichtet**

Oben im Werkzeug **Energie** steht die **Einrichtung**: eine Liste, die abhakt, was schon da ist, und beim Antippen an die richtige Stelle springt.

1. **Solarfeld:** + Solarfeld legt Module auf die sonnigste Dachfläche (4.20).
2. **Geräte:** Stromzähler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss anlegen. Sie kommen von selbst in Garage oder Technikraum und lassen sich im Grundriss verschieben.
3. **Sensoren:** Am einfachsten **Aus dem Energie-Dashboard übernehmen** (Abschnitt Energiebilanz): NeonPlan nimmt die Statistiken deines Energie-Dashboards, sucht zu jeder den Leistungssensor desselben Geräts und trägt ihn beim Zähler (Netz), Wechselrichter (PV) und Speicher (Leistung, Ladestand) ein. Fehlende Geräte werden dabei angelegt. Sonst wählst du die Sensoren im Formular jedes Geräts von Hand: Zähler = Netzleistung in Watt (+ = Bezug), Wechselrichter = PV-Leistung, Speicher = Leistung (+ = Entladen) und Ladestand in Prozent, Wallbox = Leistung und Status.
4. **Vorzeichen prüfen:** Meldet der Zähler nachts „Einspeisung“ oder lädt der Speicher ohne Sonne, zählt ein Sensor andersherum. Die Energiebilanz sagt das und bietet **Vorzeichen umkehren** an.
5. **Netzanschluss** (optional): Dorthin läuft die Netzleitung, zum Beispiel ans Ende der Einfahrt. Ohne ihn endet sie am Rand deiner Außenflächen.

Mehrere Anlagen (Dach und Balkonkraftwerk) gehen: zweiter Wechselrichter, zweiter Speicher, jeder mit eigenem Sensor; das Balkonfeld als Solarfeld an der Wand oder frei aufgeständert und einem Strang mit diesem Wechselrichter zugeordnet. Jede Anlage bekommt dann ihre eigene Anlagenkarte über ihrem Feld (Leistung, Tageskurve, Akku) – auch die, an deren Feld das Haupthologramm hängt; das rückt dann ein Stück neben das Feld, solange du es nicht selbst versetzt hast. Im Wechselrichterformular schaltest du die Anlagenkarte einer Anlage ab. Speicher, die Laden und Entladen in zwei Sensoren melden (etwa Anker Solix), bekommen den Entlade-Sensor als **Leistung** und den Lade-Sensor als **Ladeleistung**. Genauso der Zähler: Meldet er Bezug und Einspeisung getrennt (Growatt, Tibber Pulse, viele Shelly-Templates), kommt der Bezugs-Sensor in **Leistung** und der Einspeise-Sensor in **Einspeiseleistung**; ein Sensor mit Vorzeichen braucht das nicht. Die Leistungsfelder bieten alle Sensoren in W oder kW an, auch ohne Geräteklasse. Trage in der Energiebilanz nur dann einen Solar-Sensor ein, wenn er die ganze Erzeugung liefert – sonst überdeckt er die Summe der Wechselrichter.

**Leitungen**

In der 3D-Ansicht schaltet der ⚡-Knopf der Energieleiste die Leitungen ein. Dünne Leitungen mit wandernden Lichtpunkten zeigen, wohin der Strom gerade fließt; die Punkte sind Kometen, die Richtung ist auch im Stillstand klar. Gelb Solar (vom Feld durch das Dach, innen an der Wand hinunter zum Wechselrichter), grün Speicher (die Richtung dreht beim Laden und Entladen), blau Wallbox, hellblau die Verbraucher im Haus, cyan Einspeisung und rot-violett Netzbezug, vom Zähler bis zum Netzanschluss mit einem Pin, der den Wert zeigt. Je mehr Leistung, desto schneller und dichter die Punkte.

Jede Leitung findet ihren Weg von selbst (gestrichelt im Grundriss). Willst du sie anders führen, etwa außen an der Fassade oder unter der Decke: im Abschnitt **Leitungen** auswählen und **Selbst verlegen**, oder die gestrichelte Leitung im Grundriss einfach anfassen. Dann ziehst du Punkte, ein Klick auf die Leitung fügt einen Punkt ein, ein Doppelklick entfernt ihn, und **Höhe über dem Boden** legt fest, wo sie läuft. Mehrere Leitungen lassen sich so nebeneinander zum Zähler führen. **Fixieren** schützt eine fertige Leitung, **Wieder automatisch** löscht deinen Weg.

**Lebende Module**

Die Module bekommen eine leuchtende Zellstruktur, über die ein Lichtband Richtung Traufe wandert, je mehr Leistung, desto heller und schneller. Nachts ruhen sie. Die Leistung je Feld kommt vom Sensor des Feldes, sonst vom Strang (nach Modulzahl verteilt), sonst anteilig aus der Gesamtleistung.

**Hologramm**

In der Hausansicht hängt ein Hologramm aus Glas am größten Solarfeld (ohne Feld neben dem Haus), verbunden durch einen Leuchtstrich. Es zeigt PV jetzt, Ertrag heute und Spitze, die Tageskurve seit Mitternacht (aus den Statistiken deines PV-Sensors), bei mehreren Anlagen eine Zeile je Wechselrichter, Akku mit Pfeil, Netz, Haus, Wallbox und den Autarkie-Balken. Es behält seine Größe in der Welt, wird beim Rauszoomen also kleiner; von hinten siehst du es gespiegelt. Antippen klappt es auf die große Zahl zusammen. Im Abschnitt **Hologramm** wählst du Feld, Größe und Versatz – oder **Frei im Plan**: Dann steht im Plan ein Griff ◈, den du dorthin ziehst, wo die Karte schweben soll, etwa über die Terrasse; Höhe über dem Boden dazu. Die Karte zeigt vom Haus weg.

**Geräte-Hologramme**

Auch ohne Solaranlage: Jedes Gerät mit Leistungssensor (Fernseher, Waschmaschine, Kühlschrank, Wärmepumpe, PC, Wallbox) kann eine kleine Glaskarte über sich tragen – Leistung jetzt, Verbrauch heute und die Tageskurve aus den Statistiken seines Sensors. Im Möbelformular den Haken **Hologramm über dem Gerät** setzen. Die Karten zeigen sich in der Hausansicht und auf der Etage des Geräts; Antippen klappt sie zusammen. Zehn Karten kosten weniger als eine Leitung, auch auf dem Wandtablet.

Der Knopf **Hologramme** in der Energieleiste (neben ⚡) blendet alle Karten aus und wieder ein – praktisch, wenn viele Geräte eine tragen. In der Karte gibt es den Knopf ebenfalls, oder du legst es mit `holograms` fest.

**Wandtablet:** Auf der Tablet-Stufe laufen die Hologramme ohne Glaseffekt, die Leitungen mit halber Bildrate.

**Wenn etwas fehlt:** Die Einrichtung oben im Werkzeug zeigt, was noch nicht passt. Kein Hologramm bedeutet meist: kein Sensor am Wechselrichter oder keine Hausansicht (Etagen- und Raumansichten haben keins). Keine Leitung zu einem Gerät: Das Gerät hat keinen Leistungssensor.

### 6.5 Klang & Kino

Klang & Kino bringt die Musik ins 3D-Haus. Voraussetzung ist ein Lautsprecher im Plan: ein Media Player als Gerät platziert (Kapitel 4.11) oder ein Möbel aus dem Heimkino-Pack (Standlautsprecher, Soundbar, Deckenlautsprecher …) mit dem Media Player als **Gerät** im Möbelformular.

**Läuft-gerade-Karte:** Sobald ein Lautsprecher spielt (oder pausiert), schwebt über ihm eine Glaskarte mit Cover, Titel, Interpret und Lautstärke. Darauf: Zurück, Abspielen/Pause, Weiter und ein Lautstärkeregler – ohne den Raum zu öffnen. Antippen der Kopfzeile klappt die Karte zusammen. Die Karten gehorchen dem Schalter **Hologramme** (neben ⚡ in der Energieleiste; ohne Energie Pro ist der Schalter nicht da, dann sind sie immer an).

**Schallringe:** Um jeden spielenden Lautsprecher wandern leuchtende Ringe über den Boden nach außen – je lauter, desto weiter und kräftiger. So siehst du aus der Hausansicht, wo Musik läuft.

**Multiroom-Gruppen:** Spielen Lautsprecher als Gruppe (Sonos, HA-Gruppen, alles mit `group_members`), verbindet eine leuchtende Linie die Mitglieder auf derselben Etage.

**Schnellmenü:** Lange drücken auf einen Media Player öffnet jetzt Cover mit Abspielen/Pause in der Mitte, Zurück und Weiter daneben, Lautstärke darunter – statt nur An/Aus. Darunter steht **Abspielen**: deine Sender und Playlists (im Editor unter **Favoriten → Sender und Playlists** angelegt) und die Quellen des Players, etwa Sonos-Favoriten oder die Eingänge eines Receivers. Ein Sender ist ein `media_player.play_media` mit Art und Inhalt: für einen Echo die Art `SPOTIFY`, `AMAZON_MUSIC` oder `TUNEIN` und als Inhalt, was du sagen würdest („Rock Antenne“); für Sonos, Music Assistant und andere `music` oder `url` mit einer Stream-Adresse oder URI.

**Smart Speaker und Displays:** Das Pack **Heimkino & Hi-Fi** hat ab Release 2 Smart Speaker als Kugel, Zylinder, Puck, Pod, hoch und oval, einen Kompakt- und einen tragbaren Multiroom-Lautsprecher, eine Premium-Soundbar und Smart Displays mit 5″, 7″, 8″ und 15″ (Wand) – passend für Echo, Nest, HomePod, Sonos und Co. Mit Klang & Kino leuchtet ihr Lichtring in der App-Farbe, solange sie spielen, und die Displays zeigen das Cover. Solange die Karte über einem Lautsprecher schwebt, tritt sein Pin zur Seite und kommt wieder, wenn die Musik endet. Fernseher und Bildschirme bekommen ihre Farben und Bilder weiter über **Bildschirme live** (6.3).

**Wandtablet:** Auf der Tablet-Stufe laufen die Ringe mit halber Bildrate, die Karten ohne Glaseffekt.

**Welche Lautsprecher passen?** NeonPlan nutzt die Standard-Schnittstelle der Media Player von Home Assistant: Was im Media-Player-Fenster von Home Assistant geht, geht auch hier. Das ist eine Einschätzung nach Dokumentation und Erfahrungen, keine Garantie für jedes Modell:

| Integration | Cover und Titel | Lautstärke | Multiroom-Linien |
|---|---|---|---|
| Sonos | ja | ja, lokal | ja |
| Music Assistant (alle Player, auch Echos) | ja | ja | ja |
| Denon/Marantz HEOS, Yamaha MusicCast, Bluesound, Squeezebox/Lyrion | ja | ja | ja |
| Google Cast (Nest Audio, Nest Hub, Chromecast) | ja | ja | meist nicht |
| Apple TV / HomePod | ja | je nach Modell | nein |
| Fernseher und AV-Receiver | je nach App | ja | nein |
| Amazon Echo über Alexa Media Player | ja | **oft nicht oder verzögert** | nein |

Was ein Player mitbringen sollte: den Zustand `playing`/`paused`, `media_title` und `media_artist` (sonst zeigt die Karte App oder Quelle), `entity_picture` für das Cover, `volume_level` für Regler und Ringe, `group_members` für die Linien.

**Ein Gerät, ein Player:** Jeder Media Player hat genau eine Karte. Ein Möbel, dem du den Player selbst zugewiesen hast, hat Vorrang vor einem als Gerät platzierten Player. Hast du denselben Lautsprecher doppelt in Home Assistant (etwa einen Echo über Alexa Media Player **und** über Music Assistant, erkennbar an „_2“ am Ende), wähle den, über den du wirklich abspielst – der andere meldet nie „spielt“.

**Echo-Geräte (Alexa Media Player):** Abspielen, Pause und Titelwechsel gehen. Die **Lautstärke** lässt sich je nach Gerät und Version von Alexa Media Player nicht oder nur verzögert setzen, und der neue Wert kommt oft erst Minuten später zurück. Das liegt an der inoffiziellen Amazon-Schnittstelle, nicht an NeonPlan; dieselbe Grenze hat das Media-Player-Fenster von Home Assistant. Echos, die du über Music Assistant steuerst, folgen der Lautstärke in der Regel zuverlässiger.

### 6.6 Auto Pro

Auto Pro holt das Auto in den Plan, so wie es seine Integration meldet (Tesla, VW We Connect, BMW, Hyundai/Kia, Renault, Smart, Polestar, Audi, Skoda, Cupra, Ford …). Voraussetzung ist ein **Stellplatz** mit Fahrzeug (4.10) und die Integration des Autos in Home Assistant.

Auto Pro hängt am **Stellplatz**, nicht am Fahrzeug-Möbel. Steht dein Auto als einfaches Möbel im Plan, macht **In Stellplatz umwandeln** in dessen Formular daraus einen Stellplatz mit diesem Fahrzeug.

**Einrichten:** Im Stellplatz-Formular unten der Abschnitt **Auto Pro**. Wähle unter **Fahrzeug** irgendeine Entität des Autos – NeonPlan findet die übrigen am selben Gerät: Ladestand, Reichweite, Ladeleistung oder Ladezustand, Kabel, Schloss, Klima oder Vorheizen, Standort. Jede Rolle kannst du von Hand setzen oder mit „Keine“ abschalten. Hat der Stellplatz einen Sensor „Auto anwesend“, dient der auch als Ausgangspunkt der Suche.

**Im Haus:** Das Fahrzeug trägt ein **Lichtband** in der Farbe des Ladestands (grün über 50 %, gelb bis 20 %, rot darunter), kräftiger, solange es lädt. Läuft die Klima oder das Vorheizen, glimmt das Auto warm. Der **Pin am Stellplatz** zeigt „78 % · 312 km · ⚡ 7,4 kW · 🔒“. Ist das Auto weg, bleibt der Stellplatz leer und der Pin sagt **unterwegs**, mit der Zone des Trackers, wenn es eine gibt („unterwegs · Arbeit“).

**Glaskarte:** Über dem Auto schwebt eine Karte im Look von Energie Pro und Klang & Kino: Ladestand groß in seiner Farbe mit Balken, Reichweite, Ladeleistung beim Laden, dazu Knöpfe für Schloss (Entriegeln fragt nach), Klima und – bei einem Lade-Schalter – Laden. Ist das Auto entriegelt, leuchten Scheinwerfer und Rücklichter orange wie Blinker; verriegelt bleiben sie dunkel. Läuft die Klima, leuchten die Scheiben des Autos von innen – warm beim Heizen, kühl-blau, wenn eine Klima-Entität „kühlen“ meldet. Ein Tipp auf den Kopf klappt die Karte zusammen. Solange die Karte steht, tritt der Pin zur Seite; ist das Auto weg, zeigt der Pin „unterwegs“.

**Schnellmenü:** Lange drücken auf den Pin: **Verriegeln / Entriegeln** (Entriegeln fragt nach), **Klima an / aus**, **Laden starten / stoppen** (bei einem Lade-Schalter), dazu Ladestand und Reichweite.

**Wandtablet:** keine Animation nötig – Auto Pro läuft auf jeder Stufe gleich.

---

## 7. Erweiterungen, Shop und Möbel-Packs

![Erweiterungen](images/extensions.jpg)

Der Reiter **✦ Erweiterungen** bündelt alles, was du zu NeonPlan 3D dazubekommen kannst.

### 7.1 Shop-Verbindung

Mit dem ersten Kauf bei mastershort.de bekommst du einen **Lizenzschlüssel** der Form `NP-XXXX-XXXX-XXXX-XXXX`. Er steht in der Bestell-Mail und im Kundenkonto.

1. **Erweiterungen** öffnen.
2. Unter **Shop-Verbindung** den Schlüssel eintragen und **Aktivieren** drücken.
3. Deine Käufe erscheinen mit **Installieren**. Ein Tipp holt das Pack vom Shop, signiert für genau diese Installation.

Danach:

- **Updates kommen von selbst.** Einmal täglich fragt NeonPlan 3D, ob es neue Käufe oder neuere Versionen gibt, und installiert sie. **Jetzt prüfen** fragt sofort.
- **Ohne Internet läuft alles weiter.** Installierte Packs werden lokal geprüft, der Shop wird dafür nie gebraucht.
- **Trennen** entfernt den Schlüssel. Installierte Packs bleiben.
- **Pack-Updates:** Wird ein gekauftes Pack erweitert, zeigt die Seite einmal, was dazugekommen ist.
- **Neu im Shop:** Mit Shop-Verbindung zeigt die Seite oben die Packs und Pro-Erweiterungen, die du noch nicht hast, mit **NEU** für frische Sachen. Gibt es etwas Neues, leuchtet am Reiter **✦ Erweiterungen** ein kleiner Punkt. Ohne Schlüssel fragt NeonPlan 3D den Shop nie.
- **Treuerabatt:** Mit dem ersten Kauf bekommst du einen persönlichen Rabattcode für jedes weitere Pack und jede Pro-Erweiterung (nicht für Bundles). Er steht in der Bestell-Mail, im Kundenkonto und oben unter **Neu im Shop**; ein Tipp auf ein Angebot legt ihn gleich in den Warenkorb.

**Mehrere Installationen:** Ein Schlüssel ist mit höchstens drei Installationen gleichzeitig verbunden. Ziehst du auf neue Hardware um, verbindest du einfach die neue Installation, die älteste fällt dann heraus. Bis zu fünf neue Verbindungen sind pro Jahr möglich. Die **Installations-Kennung** oben ist ein anonymer Fingerabdruck deiner Installation.

### 7.2 Pro-Erweiterungen

Die mittlere Kachelreihe zeigt die drei Pro-Erweiterungen. Aktive tragen ein ✓, gesperrte ein 🔒 und den Link „Im Shop ansehen“.

### 7.3 Möbel-Packs

| Pack | Inhalt |
|---|---|
| Wohnzimmer | Sofas, Wohnwände, Kamine, Medienmöbel und mehr |
| Küche | Unterschränke, Hochschränke, Inseln, Geräte |
| Schlafzimmer | Betten, Schränke, Kommoden, Nachttische |
| Bad | Waschtische, Duschen, Wannen, WCs |
| Kinderzimmer, Büro & Gaming, Garten & Terrasse, Garage & Werkstatt, Fitness, Smart-Home & Technik | Möbel und Geräte für den jeweiligen Bereich |
| Fahrzeuge | Autos, Transporter, Motorräder und mehr für Stellplätze |
| Treppen & Geländer | Gerade, L- und U-Treppen, Wendeltreppe, Raumspartreppe, Außentreppe, Podest, Geländer aus Metall, Glas und Holz |
| Heimkino & Hi-Fi | Leinwand, Beamer, Lautsprecher, Subwoofer, AV-Receiver, Plattenspieler, Kinosessel, Smart Speaker und Smart Displays – Geräte leuchten beim Abspielen |
| Hauswirtschaft & Haustechnik | Therme, Wärmepumpe, Pufferspeicher, Lüftung, Zählerschrank, Wasserenthärter, Gefriertruhe, Bügelstation |
| Haustiere | Kratzbaum, Hundebett, Futterautomat, Trinkbrunnen, Katzenklo, Käfige, Aquarium und Terrarium mit Licht |
| Architektur & Ausbau | Säulen, Balken, Schornstein, Kamin, Glastrennwand, Schiebewand, Lichtvoute, LED-Nische, Podest |

Geräte in Packs haben eine kleine Leuchtfläche (Display, Status-LED): Verknüpft mit einem Media-Player, Schalter oder Licht leuchtet sie, solange das Gerät läuft; ein Aquarium leuchtet in der Farbe seines Lichts.

Unten auf der Seite stehen deine installierten Packs mit **Entfernen**. Darunter liegt **Möbel-Packs importieren …** für Pack-Dateien: Schnupper-Packs aus dem Newsletter, Downloads von der Website oder Installationen ohne Internet. Mehrere Dateien lassen sich auf einmal wählen.

**Gut zu wissen:**

- Packs sind digital signiert. Nur Packs vom Herausgeber lassen sich importieren, veränderte Dateien werden abgelehnt.
- Entfernst du ein Pack, bleiben seine Möbel als einfache Kästen im Plan stehen. Importierst du es wieder, sind sie zurück, mit allen Verknüpfungen.
- Eine neuere Version eines Packs ersetzt die alte, ohne dass im Plan etwas verloren geht.

---

## 8. Die Dashboard-Karte

![Karte im Dashboard](images/card-og-dim.jpg)

Die Karte `custom:neonplan3d-card` bringt die 3D-Ansicht in jedes Dashboard. Sie wird automatisch geladen.

**Anlegen:** Dashboard bearbeiten, **Karte hinzufügen**, nach „NeonPlan“ suchen. Alle Optionen stellst du im visuellen Editor der Karte ein:

| Abschnitt | Optionen |
|---|---|
| **Ansicht** | Etage oder ganzes Haus, Größe fest oder bildschirmfüllend, Höhe, Look, Wände, Qualität, Etagen darunter |
| **Anzeigen** | Symbole, Heatmap, Schalter in der Karte, Etagen-Miniaturen, Raumnamen, Raumfenster, Vollbild-Knopf, Etagen auseinander, Leistungsanzeige |
| **Funktionen** | Warnungen, Sprung zur Warnung, Szenen-Knöpfe, Bewegungsspur, Wetter mit Wetter-Entität |
| **Wandtablet (Kiosk)** | Rückkehr zur Startansicht, Nachtdimmung, Kamerafahrt als Bildschirmschoner |

![Karte mit Szenen](images/card-scenes.jpg)

In YAML sieht eine Karte so aus. Alle Zeilen außer der ersten sind optional:

```yaml
type: custom:neonplan3d-card
floor: floor_ab12cd34   # eine Etage zeigen (ID aus dem Editor)
room: room_ab12cd34     # in diesem Raum starten (ID aus dem Editor), z. B. ein Display fürs Kinderzimmer
height: 420             # Höhe in Pixeln
fill: false             # den Bildschirm unter der Kopfzeile füllen
walls: auto             # auto | cut
explode: true           # Etagen in der Hausansicht auseinanderziehen
floor_stack: dim        # Etagen darunter: dim | stacked | single
quality: auto           # auto | low | high
theme: neon             # neon | blueprint | day
accent: "#ff8a00"       # eigene Akzentfarbe (Linien im Neon-Look, Knöpfe, Pins); weglassen = Cyan
markers: important      # none | important | all
marker_names: false     # true: Geräte mit eigenem Namen zeigen ihn unter dem Symbol
central: true           # der Stern mit dem Zentral-Menü (alle Lichter, Rollläden, Favoriten)
buttons:                # eigene Knöpfe nur für diese Karte (ersetzen die aus dem Editor)
  - label: Rollos
    icon: window-shutter
    action: fire_dom_event   # navigate | more_info | service | fire_dom_event
    data: { browser_mod: { service: browser_mod.popup, data: { title: Rollos, content: { type: "custom:meine-rollo-karte" } } } }
heatmap: none           # none | temperature | humidity | co2
room_panel: true        # Raum antippen öffnet das Raumfenster
room_names: true
controls: true          # Schalter in der Karte, oder eine Liste: walls, floors, temperature, humidity, co2
controls_hidden: false  # true: mit ausgeblendeten Bedienelementen starten (nur die 3D-Ansicht), ein Auge unten links holt sie zurück
controls_hide_after: 0  # Sekunden ohne Berührung, nach denen die Bedienelemente verschwinden (0 = nie); eine Berührung zeigt sie wieder
floor_thumbs: true
fullscreen_button: false
dashboard: /lovelace/home   # Knopf oben rechts, der dieses Dashboard öffnet (weglassen = kein Knopf)
dashboard_label: Start      # Beschriftung des Knopfs; ohne Beschriftung zeigt er ⌂
stats: false
alerts: true
alert_jump: false       # bei einer neuen Warnung in den Raum springen
scenes: true
motion_trail: false     # Pro: Kamera-Cockpit
weather: true           # Pro: Wetter draußen
weather_entity: weather.home
holograms: true         # Pro: Hologramme immer an/aus; weglassen = Schalter in der Karte
camera_wall: false      # Pro: Knopf „Kameras“ unten in der Karte öffnet die Kamera-Wand
roof_fade: true         # false: Dach bleibt beim Heranzoomen auf dem Haus
start_view: { theta: 0.8, phi: 1.0, radius: 20 }   # eigene Startansicht dieser Karte; die Zeile steht im Editor unter Startansicht (weglassen = die des Plans)
idle_return: 0          # Sekunden ohne Berührung bis zur Startansicht
night: "off"            # off | sun | "22:00-06:00"
idle_orbit: false
```

---

## 9. NeonPlan 3D auf dem Wandtablet

![Tablet](images/tablet.jpg)

NeonPlan 3D ist für Wandtablets wie das Amazon Fire gebaut:

- **Kein Rechnen im Leerlauf.** Ändert sich nichts, zeichnet die Ansicht kein einziges Bild. Die FPS-Anzeige zeigt dann „Ruhe (0 B/s)“.
- **Qualitätsstufe Tablet:** Auf Fire-Tablets wählt „Auto“ sie von selbst. Muster, Schatten, Halos und Partikel fallen weg, Animationen laufen mit halber Rate.
- **Kiosk-Optionen der Karte:** Nach einigen Minuten ohne Berührung kehrt die Karte zur Startansicht zurück. Nachts dimmt sie nach Sonnenstand oder Uhrzeit. Als Bildschirmschoner dreht sich das Haus langsam.
- **Warnungen** springen auf Wunsch von selbst in den betroffenen Raum.
- Hochkant erscheint das Raumfenster unten.

![Tablet hochkant](images/tablet-portrait-room.jpg)

![Handy](images/phone-floor.jpg)

**Tipps für Fire-Tablets:** Fully Kiosk Browser mit Hardwarebeschleunigung nutzen, die Karte mit `fill: true` bildschirmfüllend zeigen und `quality: auto` lassen.

---

## 10. Sicherung und Umzug

![Sicherung](images/editor-backup.jpg)

Unter **Sicherung** im Editor:

- **Wiederherstellungspunkte** entstehen beim Bearbeiten höchstens alle 10 Minuten, die letzten 20 bleiben. **Wiederherstellen** holt einen Stand zurück, der aktuelle bleibt dabei selbst als Punkt erhalten.
- **Exportieren** speichert den Plan als Datei, **Importieren …** lädt eine solche Datei.
- **Als Vorlage teilen** exportiert ohne Bereiche, Geräte, Sensoren und Bilder. Das ist gut, um einen Grundriss weiterzugeben.
- **Komplett-Backup:** **Alles sichern (Plan, Bilder, Packs)** speichert eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. **Komplett-Backup wiederherstellen …** spielt sie in dieselbe oder eine andere Installation zurück. Jedes Pack wird dabei erneut geprüft. Packs, die für eine andere Installation signiert sind, holst du dort über die Shop-Verbindung neu. Der Lizenzschlüssel ist nicht in der Datei.

Das normale Backup von Home Assistant sichert NeonPlan 3D ebenfalls vollständig mit.

---

## 11. Daten und Datenschutz

- Plan, Bilder und Packs liegen in Home Assistant unter `.storage`. Nichts davon verlässt deine Installation.
- NeonPlan 3D verbindet sich nur dann mit dem Internet, wenn du einen Lizenzschlüssel einträgst. Dann fragt es einmal am Tag bei mastershort.de nach Updates und sendet dabei den Schlüssel und die anonyme Installations-Kennung.
- Kamerabilder, Verlaufsdaten und Zustände bleiben in Home Assistant und werden nur im Browser angezeigt.

---

## 12. Häufige Fragen und Fehlerbehebung

**Hilfe und Rückmeldung:** Einen Fehler meldest du am besten als [Issue auf GitHub](https://github.com/Mastershort/neonplan3d/issues/new/choose), eine Idee als [Diskussion](https://github.com/Mastershort/neonplan3d/discussions/categories/ideas). So geht nichts verloren, alle sehen den Stand, und du wirst in den Release-Notizen genannt, wenn es umgesetzt ist. Die beiden Knöpfe dafür stehen auch im Editor unten in der Seitenleiste und auf der Seite Erweiterungen.

**Kann ich Helfer statt echter Sensoren nehmen?**
Ja. Überall, wo NeonPlan einen Zahlenwert erwartet (Leistung, Ladestand, Reichweite, Position …), stehen auch `input_number`- und `number`-Helfer zur Wahl, und wo ein Ein/Aus erwartet wird (Kontakt, Anwesenheit …), auch `input_boolean`. Für Leistung braucht der Helfer die Einheit W oder kW.

**Die Lautstärke eines Echo ändert sich nicht.**
Alexa Media Player setzt die Lautstärke bei manchen Echos nicht oder nur verzögert und meldet den neuen Wert spät zurück. Prüfe es unter Entwicklerwerkzeuge → Aktionen mit `media_player.volume_set`: Passiert dort nichts, liegt es an der Integration (siehe Kapitel 6.5).

**Oben steht „Neustart nötig“.**
Nach einem Update läuft im Hintergrund noch die alte Version. Home Assistant neu starten.

**Ein Gerät fehlt in der Geräteliste eines Raums.**
Der Raum braucht einen Bereich, und das Gerät muss diesem Bereich zugeordnet sein, entweder das Gerät oder die Entität selbst. Steckt die Entität unter einem Gerät mit mehreren Entitäten, steht sie hinter „+n mehr“. Das Suchfeld findet sie direkt.

**Eine Kamera ist schwer zu treffen.**
Tippe auf ihren Sichtkegel am Boden, er zählt wie die Kamera.

**Möbel erscheinen als graue Kästen.**
Das Pack, aus dem sie stammen, ist nicht installiert. Importiere es wieder oder installiere es über die Shop-Verbindung.

**Beim Verschieben in 3D rutscht ein Möbel nicht durch die Wand.**
Das ist Absicht: In der 3D-Ansicht bleiben Möbel und Geräte beim Ziehen in ihrem Raum und gleiten an der Wand entlang. In einen anderen Raum ziehst du sie im Grundriss, dort geht das frei.

**Ein Tipp trifft das Gerät im Nachbarraum.**
Wände fangen Tipps ab. In der Raumansicht zählen nur Dinge im Raum. Trifft es trotzdem das Falsche, hilft der Schalter **Schnitt**.

**Die Ansicht ruckelt auf dem Tablet.**
Qualität auf **Tablet** stellen und mit **FPS** prüfen, was zeichnet. Im Leerlauf sollte dort 0 B/s stehen. Läuft dauerhaft etwas, steht der Grund daneben, etwa ein Farbeffekt einer Lampe.

**Das Sonnenlicht fällt durch die falschen Fenster.**
Unter Einstellungen die **Nordrichtung** prüfen: Grad im Uhrzeigersinn von „oben“ im Plan.

**Die Shop-Verbindung meldet „Limit erreicht“.**
Der Schlüssel war in den letzten zwölf Monaten mit mehr als fünf neuen Installationen verbunden. Melde dich bei uns, wir helfen.

**Die Aktivierung meldet „Der Shop ist gerade ausgelastet“ oder „HTTP 429“.**
Der Webhoster des Shops bremst zu viele Anfragen von einer Adresse. NeonPlan versucht es seit 1.9.1 selbst noch zweimal mit Pause; wenn es danach immer noch hakt, eine Minute warten und noch einmal auf **Aktivieren** klicken. Ältere Versionen vor 1.9.1 wurden vom Hoster an ihrem Browserkennzeichen abgewiesen – dort hilft nur das Update.

**Die Meldung „Diese Seite zeigt noch NeonPlan 3D x.y, Home Assistant hat schon …“ bleibt.**
Browser oder Companion-App halten noch ein altes NeonPlan-Bundle. Auf **Neu laden** tippen; in der Companion-App unter Einstellungen → Companion-App → **Frontend-Cache zurücksetzen**, dann die App ganz schließen und neu öffnen. Ein Neustart von Home Assistant hilft hier nicht. Dasselbe gilt, wenn eine gekaufte Pro-Erweiterung unter den Packs „braucht eine neuere NeonPlan-Version“ meldet.

**Am Dach hängen zwei Hologramme (Energie Pro).**
Das ist gewollt: Das große ist die **Hausbilanz** (Solar & Energie), das kleinere die **Anlagenkarte** des Wechselrichters, dessen Feld das ist – bei mehreren Anlagen hat jede ihre eigene. Zu viel? Im Abschnitt **Hologramm** die Hausbilanz **Frei im Plan** hängen (Griff ◈), oder im Wechselrichter-Formular den Haken **Anlagenkarte zeigen** rausnehmen. Eine kleine Karte, die scheinbar am Dach klebt, ist oft das Geräte-Hologramm eines Geräts im Raum darunter – Kamera etwas drehen.

**Der Shop ist nicht erreichbar.**
Installierte Packs und Pro-Erweiterungen funktionieren weiter. Updates kommen, sobald der Shop wieder antwortet.

**Wo melde ich Fehler?**
Im Issue-Tracker auf GitHub: https://github.com/Mastershort/neonplan3d/issues
