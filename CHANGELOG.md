# Changelog

All notable changes to NeonPlan 3D. The full notes in German and English are on the
[releases page](https://github.com/Mastershort/neonplan3d/releases). Ideas and votes:
[Discussions → Ideas](https://github.com/Mastershort/neonplan3d/discussions/categories/ideas).

## 1.10.0 (unreleased)

### New

- **Roof slopes with knee walls:** when a roof section's top of walls lies below the ceiling of the floor underneath, that floor's walls end under the roof – knee walls at the eaves, gables up to the ridge, inner walls cut by the slope; windows stay below it. Dashed headroom lines (1.5 m, 2 m) in the plan editor (mindmonk's description in [PR #66](https://github.com/Mastershort/neonplan3d/pull/66), discussions #64, #75).
- **Flat roof as a free shape:** "Take the floor's outline" gives a flat section the outline of the floor's rooms (L, Z, U …) as one surface; its corners can be dragged (#108 by rolandarends).
- **Split a wall:** ✂ in the wall heights box cuts a wall at a point of your own, so one wall in line can have two heights (2.5 m next to 1.7 m); the split point can be moved and removed (#109 by rolandarends).

## 1.9.2

### Fixed

- Pack furniture that lights but is not "electric" (mirror with light, bedside lamp, aquarium, fire bowl, star ceiling, LED niche, light cove, workshop light, night light) had no light field in the editor and a tap sent an invalid entity id to Home Assistant (#46 by StevenKRT and N4IR0, #88 by wh1tetiger).
- The lit wall face left a misaligned dark rectangle over windows on low floors: the light cells now break at every sill, top and side of an opening (#87 by newbeehome).
- The plan editor stayed in English for French, Spanish, Dutch, Italian (and Hungarian): its bundle never fetched the language file (#96 by denisb88).
- A TV that only reports "on" (Samsung, LG) glows now; before, only "playing" lit the screen (#98 by newbeehome).
- Dimmed lights looked switched off: the glow follows a perceptual curve now, a lamp at 10 % still reads as on (#103 by newbeehome).
- Free-standing walls (a garden wall) take wall-mounted solar fields, on both sides (#105 by rolandarends).
- An LED strip outside the house sits on the ground again (lawn, terrace) instead of a slab's thickness above it (#70 by domodial).

### New

- **Doors without a sensor** can be drawn closed ("Show closed without a sensor" in the door form) instead of half open (discussion #86 by robertkrizovnik).
- **Card:** `start_view` gives a card a start view of its own, e.g. for a small overview on another dashboard; the editor's start view section shows the line to copy (discussion #89 by karli4711).
- French, Spanish, Dutch and Italian: the 43 texts added since 1.9.0 (energy setup, tilt angle, icons, help) are translated now; they showed in English.
- **Hungarian** as the fifth extra language (proofread by kopaszsop, [#51](https://github.com/Mastershort/neonplan3d/issues/51)).
- **Module power (Wp)** per solar field instead of the fixed 400 W, for the kWp of fields and strings and the living modules (#99 by denisb88).
- **Floors apart** lifts the roof off the top floor as well (#101 by rolandarends).
- **Energy Pro – device holograms:** every device with a power sensor can carry a small glass card (power now, today's kWh, day curve), in the house view and on its floor; "Hologram over the device" in the furniture form; a **Holograms** button in the energy bar hides all cards (card option `holograms`). The first free update of the pack.

## 1.9.1

### New

- **Own marker symbols:** any Material Design icon (`mdi:…`) for a device or an electric furniture item ([#62](https://github.com/Mastershort/neonplan3d/issues/62)).
- **Tilt angle sensor** on windows: the sash tilts as far as the sensor reports, with maximum angle, offset and sign ([#15](https://github.com/Mastershort/neonplan3d/issues/15)).
- **Camera wedge:** can be switched off per camera, and in 3D it ends at the first wall ([discussions #49, #50](https://github.com/Mastershort/neonplan3d/discussions/49)).
- **Dashboard button** on the card: `dashboard` and `dashboard_label` open another dashboard or view ([discussion #48](https://github.com/Mastershort/neonplan3d/discussions/48)).
- **Wall heights per part** of a wall that a neighbouring room splits ([#77](https://github.com/Mastershort/neonplan3d/issues/77)).
- **Light through open walls:** with "No wall" a lamp lights the neighbouring room as if it were one room (idea and fork by Thundras, [discussion #68](https://github.com/Mastershort/neonplan3d/discussions/68)).
- **Energy tool, easier to set up:** a setup checklist at the top that jumps to what is missing; "Take over from the energy dashboard" now fills the devices (and creates missing ones); a hint with a one-tap fix when a grid or battery sensor counts the other way round; the hologram also without a solar field (beside the house); the energy bar steps back while the hologram shows; a plain hologram on the tablet level.
- **Help and feedback:** buttons for a GitHub issue (problem) and a discussion (idea) in the editor's settings and on the Extensions page; manual chapter 6.4 describes Energy Pro.
- **Shop connection:** activations failed with HTTP 429 for everyone – the shop's web host turns away Home Assistant's default user agent. NeonPlan now sends its own, retries a throttled request twice with a pause (Retry-After respected), spaces out pack downloads, and explains a 429 in plain words.
- **Energy Pro:** one hologram per plant (a balcony plant with its own inverter gets its own card over its field); home batteries with separate charging and discharging sensors (e.g. Anker Solix) through the new "Charging power" field; meters with separate import and export sensors through "Export power"; the power pickers list every sensor in W or kW, even without a device class.

### Fixed

- The start view also holds when a floor is opened: the house no longer turns round ([discussion #67](https://github.com/Mastershort/neonplan3d/discussions/67)).
- Two windows one above the other both cut their hole into the wall (reported by Thundras).
- iPad: the "Add floor" menu stays inside the sidebar ([#85](https://github.com/Mastershort/neonplan3d/issues/85)).

## 1.9.0

### New

- **Four more languages:** French, Spanish, Dutch and Italian, following the Home Assistant user's language. They come as separate language files fetched only when needed, so the bundles stay small for wall tablets. French was asked for in [#51](https://github.com/Mastershort/neonplan3d/issues/51) (thanks, denisb88).
- **No wall:** every wall of a room can be left out (button "No wall" in the wall heights), for open floor plans whose rooms are one space but separate areas in Home Assistant ([discussion #68](https://github.com/Mastershort/neonplan3d/discussions/68)).
- **Start view:** remember the current 3D view in the editor; the 3D view, the card and the kiosk then open the house that way, e.g. from the garden side ([discussion #67](https://github.com/Mastershort/neonplan3d/discussions/67)).
- **Energy tool:** the **electricity meter** (grid sensor, shows import/export) and the **grid connection** (where the cable to the utility leaves the plot) as energy devices; an **Energy balance** section with the sensors of the house, taken from the devices in the plan or from Home Assistant's energy dashboard; several inverters and batteries with their own sensors; **models** for inverters (wall, slim, hybrid) and batteries (tower, wall, compact). The hidden energy settings and the meter tool are gone in favour of this.
- **Names:** every piece of furniture and every energy device can carry its own name, shown in lists, forms and on its pin in 3D.
- Groundwork for the coming Pro add-on **Energy Pro** (power-flow cables, living solar modules, glass hologram): built in and locked until the add-on is released.

## 1.8.1

### Fixed

- Entities without a registry entry (set up in YAML without a unique ID, e.g. USB cameras) can be placed: they show up under "without area" ([#56](https://github.com/Mastershort/neonplan3d/issues/56)).

## 1.8.0

### New

- **Energy tool with solar fields** on the roof, free-standing on frames (garden, garage roof, with height and rotation, turn handle) and on house walls (upright or tilted away, up to a canopy); dragged in the plan and in the 3D view: modules in rows and columns on any roof face, lying in its slope, on flat roofs on tilted frames; placed on the sunniest face, dragged in the plan (also onto another face), with the field's kWp. Rows of their own length ("4, 4, 3"), single modules on/off, full black or blue look, module size, a name and a PV sensor per field, and strings that join fields across roofs (name, PV sensor, inverter). Solar fields are not held by the plan lock. On roof sections the faces include the overhang, so modules reach down to the eave.
- **Energy devices:** solar inverter, home battery and wallbox, added and moved in the Energy tool; placed in the garage or a utility room against a wall, and the plan moves to them.
- Home battery shows its charge and charging direction, the wallbox its status (charging, plugged in).
- Solar fields and roof windows can be fixed. New furniture brings the plan to where it was put.
- **Roof windows** in the roof faces, with blind, contact and tilt contact (the sash swings out, the blind comes down).

## 1.7.0

### New

- **Ask before switching for blinds and garage doors:** open, close and positions ask first in the quick menu and the room panel; a swipe on the marker no longer moves them ([discussion #36](https://github.com/Mastershort/neonplan3d/discussions/36)). Devices that ask first no longer react to a swipe either.
- **Status sensors on furniture:** a 3D printer's print status (or any enum status sensor) can be linked; the item counts as active while it prints or runs ([#41](https://github.com/Mastershort/neonplan3d/issues/41)).
- **Worktop:** a free top without a base, its height is the top edge ([discussion #37](https://github.com/Mastershort/neonplan3d/discussions/37)).

## 1.6.2

### Fixed

- The 3D view did not load on older iPads (iOS 15 and 16) with "SyntaxError: Unexpected token '{'"; the bundles are now built for Safari 15 and newer ([#42](https://github.com/Mastershort/neonplan3d/issues/42)).

## 1.6.1

### Fixed

- A table lamp, floor lamp or uplight with a height above the floor set by hand now moves the lamp itself, not only its selection box ([#20](https://github.com/Mastershort/neonplan3d/issues/20)).
- Heatmap and room panel with °F: sensors in °F are converted, the legend and values show Home Assistant's unit.
- Overlapping floor openings are cut as one outline (an L-shaped opening) instead of breaking the floor.
- A floor opening snapped to the room's edge is cut instead of being reported as outside the room.
- The rain warning uses the weather entity chosen in the plan settings.

### New

- The warning for a window open in the rain can be switched off on its own (plan settings, weather).
- Robot vacuums clean the room they report: a "current room" sensor (Roborock, Dreame …) is found on the robot's device and matched by room or area name.
- Robot vacuums drive around cabinets, sofas, beds and appliances, but under tables, desks and chairs.

## 1.6.0

### New

- **New in the shop** on the Extensions page (with a shop key) and a dot on the tab.
- **Loyalty discount** code for further purchases, shown in NeonPlan 3D.
- The Extensions page shows once what a pack update brought.
- Screens and status lights of pack furniture can link a light (glow in its colour) or a switch.

## 1.5.0

### New

- **Roof sections:** roofs made of several parts (L/T houses, barns, extensions), each with shape (gable, hip, pent, flat), ridge direction, eave and pitch per side; proposed from the rooms; new Roof tool in the editor.
- **Canopies** (terrace roof, carport): posts and beams, see-through roof.
- **Outdoor areas** are resized at their corners.

## 1.4.0

### New

- **Devices from other areas and without an area** in the room form (source switch, grouped by area).
- **Place all** is a small link that asks first.
- **Room climate per room:** chosen sensors for temperature, humidity and CO₂; automatic skips device temperatures (3D printer, heat pump flow).

### Fixes

- Built-in furniture follows its height above floor in 3D (a dryer on the washing machine, #13).
- The height above floor counts from the floor: wall cabinets (1.45 m), wall TVs and radiators can be set lower too.

## 1.3.0

### New

- **Locking the floor plan** (rooms, walls, doors, windows, outdoor areas) and **fixing furniture and devices** (lock in the form, key L, right-click menu with duplicate, turn and delete).
- **More sensors:** gas and water meters, energy, illuminance, pressure and air quality can be placed; values use Home Assistant's decimals (#7).
- **TV on a smart plug:** TVs and media walls may link a switch instead of a media player (#5).
- **Marker in 3D per device:** automatic, always, without watts or hidden.
- **Highlight when closed** for doors and windows (WC, child's room).

### Fixes

- Furniture and lamps with a linked entity can be dragged in 3D again (grabbing the item or its marker).

## 1.2.0

### New

- **Wall height per wall:** parapets, counters and half-height dividers. Rooms get a *Wall heights* box with every wall, free walls a height field.
- **Doors and windows in free walls:** the *Door & window* tool now also works on free-standing walls.
- **Height above floor** for wall lights and LED strips; strips below 1 m shine upwards.
- **Ridge direction** of gable roofs: along the long or the short side (terraced houses, #1).
- **Arrow keys** nudge the selection in the plan editor: one grid step, Shift 10 cm, Alt 1 cm.

### Fixes

- Several lamps linked to the same light no longer stay green in 3D; all follow the light.

### Community

- Issue templates, this changelog and an Ideas section for feature requests with voting.

## 1.1.1

### New

- **Door style "Opening (no door)":** a passage between two rooms, just a gap in the wall without frame or leaf.

## 1.1.0

### New

- **Free-standing walls:** the *Wall* tool draws a partition through part of a room.

## 1.0.2

### Fixes

- Floor openings show from above; their rim glows like the wall tops.
- The editor warns when a floor opening reaches across a room boundary.

## 1.0.1

### New

- Manual links in the app, in your Home Assistant language (German or English).

## 1.0.0

The first public release: plan editor in Home Assistant, live neon 3D view, 40 built-in furniture models,
cameras, wall tablet features, dashboard card with three looks, optional furniture packs and Pro add-ons.
