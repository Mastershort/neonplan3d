# Changelog

All notable changes to NeonPlan 3D. The full notes in German and English are on the
[releases page](https://github.com/Mastershort/neonplan3d/releases). Ideas and votes:
[Discussions → Ideas](https://github.com/Mastershort/neonplan3d/discussions/categories/ideas).

## 1.13.1

### New

- **Feet and inches:** Editor → Settings → **Lengths**: Automatic (follows Home Assistant's unit system), Metres or Feet and inches. Every length field, dimension and area (ft²) in the editor follows, and you can type `8' 2"`, `98in`, `8.2ft` or `2.5m`. The plan still stores metres (discussion #117 by Valkster70).
- **Outdoor areas as a free form:** in the Outdoor tool, choose **▭ Rectangle** or **✎ Free form** beside "Undo" and place the corners one by one – curved beds, slanted plot borders, an L-shaped path (#97 by rolandarends).
- **Ceiling height per room:** a field in the room form; the room's walls end there (unless a neighbouring room is taller) and its ceiling lamps hang from it – a 2.5 m living room beside a 5 m garage on the same floor (#30 by wiesi12).
- **Ceiling lamps under a sloped roof** hang from the roof's underside instead of floating above it (#168 by denisb88).
- **Net area:** the room form shows the drawn area and the net area – without the half of each shared wall in the room, free walls, and the gap behind a wall built in front of another (#216 by idaho).
- **Power outage warning:** Settings → **Report a power outage with** – a grid sensor, a UPS on battery, a mains voltage or a helper of your own. The warning shows in the alert bar, and the grid connection of Energy Pro is crossed out (#214 by Mavyre).
- **Energy Pro: house balance and plant cards in floor views too** – a switch in Editor → Energy → Hologram, off by default (#193 by denisb88).
- **Cameras: detection symbols can be switched off** – then only the field of view turns red on a detection (#267 by RobertSorgenfrei).
- **Straighten slanted edges:** a button in the floor form beside "Close gaps" finds room edges that are only a few centimetres off straight (a corner 1 cm out makes slanted walls in 3D) and straightens them in every room that shares the corner. Walls drawn slanted on purpose stay (#333 by ciechompl).

### Fixed

- **Floor openings across a room line** are cut in every room they cover; before, an opening reaching into a second room was not cut at all (#353 by tomfischer98).
- **Hip and pyramid ends** say "Hip" in the solar field's face list, so they are easy to find (#302 by cereal2nd).
- **Fill the screen / full screen on tablets:** the card measures the visible screen height and where it starts, so no black bar is left at the bottom – e.g. in the Home Assistant app on Android tablets in landscape or with a hidden header (#344 by djbassmind-sketch).

## 1.13.0

### New

- **⏪ Time travel (Pro, supporter beta):** replay up to 7 days in your house from the history Home Assistant records anyway – lights with brightness and colour, doors, windows, blinds, motion, heating, TV and speakers, energy flows, the car, the robot vacuum's way, weather and the sun. Play it at several speeds right up to the present, jump between events, see **"while you were away"** and a **day summary** per room compared with the day before. View only – nothing is switched, and the places and phones of people are never loaded. Runs on old wall tablets too (they start with 24 hours).
  - **Supporter beta:** time travel comes with the **Supporter Pass** first. Supporters test it and give feedback on Discord; once it is finished, everyone can buy it on its own. Under *Extensions* it is marked "Beta · supporters first".
  - Supporters find their **Discord code** under *Extensions*: typed into `/supporter` on Discord, it unlocks the supporter beta channels.
- **Free furniture:** corner sofa (L), large U-shaped sofa and a **U-stair with landing** that cuts the opening into the floor above (#61 by daene85).
- **Hologram settings without solar fields:** mirroring, device cards and size are reachable in Editor → Energy → Hologram even without a solar field (#334 by netrunnercs); every plant card of an inverter can be moved sideways or up (#335 by RobertSorgenfrei).
- **Free form shows lengths:** while drawing, every edge and the one to the pointer show their length (#351 by Ollywood71).
- **Free walls with X/Y fields** to place them exactly, off the grid (#315 by rolandarends).
- **Recessed and surface spots: "Height above floor"**, e.g. under wall cabinets (#311 by rolandarends).
- **Doors and windows: "Invert contact"** for sensors that report the other way round (#329 by pepeelpl).
- **Doors are easy to pick again:** a wider tap area in the plan, and the room form lists its doors and windows (#312 by Chase295).
- **Room ID in the room form** – tap copies it, for the card option `room:`.
- On phones a one-time hint says drawing works best on a PC or tablet.

### Fixed

- **Garage doors** read their contact like doors now (#329 by pepeelpl).
- **Solar modules on short walls** are drawn, and walls in the list have clear names like "Hall 4–5 · East · 1.2 m" (#295 by rolandarends).
- **Cable routes** end with a right angle at the device instead of running slant (#256 by Kohhal).
- A new parking spot faces the garage door of its room; the room panel no longer covers the switch bar.

## 1.12.7

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

## 1.12.6

### New

- Start view per room: angle, zoom and framing; tapping the room in 3D flies there (#282 by RobertSorgenfrei).
- The start view of the house and of a floor also remembers the point the camera looks at (#206 by janoschbatschi).
- Settings: switch for the sunlight patches through the windows (#266 by ciechompl).
- Hologram settings: switch "Mirrored from behind (like glass)", on by default (#271 by barney798).
- Discord community, linked in the editor's help section and on the Extensions page.

### Fixed

- Select fields in the editor kept showing the value of the item before after switching items.
- Robot vacuum with dock (pack) offers vacuum entities and glows while cleaning (#273 by ElVincenco).
- Motorised curtain (pack) can follow a cover entity and glows while open (#286 by frops83).
- Heatmap legend: no wrong "no matching sensors" line on the first tap; it sits above the star button.
- "Add rooms from HA areas" shows the number in brackets.
- Online demo: no grey boxes for furniture of packs the demo does not have.

## 1.12.5

### Fixed

- **Saving failed** after setting an outdoor area's height or slope back to 0 ("expected float at …outdoor[…].offset") – it saves again; changes kept in the browser can be taken over (#242 by rolandarends).
- Pergolas with a slope: the beams and rafters follow the slope instead of lying level (#242).
- A hub device for the whole house (one MQTT or KNX device whose entities lie in several areas): its room thermometers count for the room climate again, and a power sensor only goes to an entity in its own area instead of the first device placed; a binary sensor without a class shows up when it was given an area by hand (#243 by bert-MI4U).

## 1.12.4

### Fixed

- Dashboard card: right after starting the app, the card could show "Custom element doesn't exist: neonplan3d-card" until the sidebar page was opened. The card's script is now also kept in the dashboard resources (storage mode), so dashboards wait for it; an older copy of the script there is pointed to the current one (#252 by TheRev-ha, RobertSorgenfrei).
- Installing a Pro add-on from the shop: NeonPlan 3D now also sends its version in the request, so the shop can answer an installation that is too old with a readable "please update first" message.
- Energy Pro in a house with a single floor: the plant cards (solar, balance) show in the 3D view and the card, not only in the editor (#255 by Kohhal).
- Energy Pro: a grid connection mounted on a wall – the grid cable starts at its height instead of on the ground, and its pin sits there too (#256 by Kohhal).
- Solar fields moved to another roof face (e.g. after replacing a flat roof) keep their modules – rows, columns, format and tilt – instead of starting again from a proposal (#258 by rolandarends).
- "State from" (occupancy mats, a lit top while something is on) is offered for every piece of furniture again, also a plain bed or armchair – it only showed for electric furniture (#116 by hahne-t).

## 1.12.3

### New

- **Nine new languages:** Danish, Swedish, Norwegian (Bokmål and Nynorsk), Finnish, Czech, Polish, Romanian and Slovenian – 16 in all; the Norwegian one builds on the translation by zanzei26 (#233).
- The integration's setup dialog is translated into every language.

### Fixed

- French, Spanish, Dutch, Italian and Hungarian: the restart notice shows both versions again.

## 1.12.2

### Fixed

- A roof section whose eaves lie below a floor's ceiling now cuts that floor's walls, even when its wall top is set to the ceiling height (discussion #147 by twynne and wouter-b).
- A house with a single floor shows its roof in 3D; an extra attic floor is no longer needed (discussion #208 by Kohhal).
- Installing a Pro add-on that is newer than the installed NeonPlan 3D now says "please update NeonPlan 3D first" instead of a cryptic error (#218 by twynne).
- Camera Cockpit: the camera wall fits any number of cameras – the grid picks the columns that give the largest tiles, nothing overlaps, and with very many cameras the wall scrolls (#217 by denisb88).
- Solar fields: the inverter choice shows each inverter's own name (or its entity's name), and an inverter shows which strings feed it (#213 by rolandarends).
- Garden solar fields stand on the ground floor, no longer on a cellar below it (#192 by denisb88).
- Extensions: our furniture packs and Pro add-ons show English names when Home Assistant is not set to German (#224 by twynne).
- Furniture with only a small status light (3D printers, wallbox, speakers) links as a device, no longer as a "TV / media player".
- Energy Pro: tapping the grid pin at the street opens the grid sensor instead of an empty "grid" dialog (#223 by denisb88).
- Entity choices say how many more entries there are ("… +23 · type to search"); for a parking spot's presence, GPS trackers (the car's own integration, a phone) come before a router's many network trackers (#227 by twynne).
- The star menu closes when you tap into the 3D view, on a room or switch floors; while the search is open the eye button steps aside (#220 by daene85).
- Pulled apart, a roof rides with the highest floor beneath it, so a loft under the same slopes stays under the roof; dormers go along with their roof (#202 by Kuddelsoft, discussion #207 by 1970lexi).
- Under a roof slope the light on the walls ends where the wall does, instead of shining through the roof (#201 by Twilight-Networks).
- Walls under a roof no longer show vertical stripes (discussion #180 by RobertSorgenfrei).
- With the temperature, humidity or CO₂ view on, garden lamps keep their light and room lamps a soft glow (discussion #205 by 1970lexi).

## 1.12.1

### New

- **Ruler and straighten for the background picture:** tap the start and end of a stretch of known length and enter its real length – the picture is scaled right; **Straighten** turns a skewed scan by two taps along a wall; **Move, scale and turn** gives the picture handles like furniture – drag, scale at the corner, turn at the round handle; **Done** fixes it again (#183 by HardstylerDN).
- **Glow per lamp in 3D:** a percent field on lamps and placed lights tones down bright LED strips or lifts weak lamps – display only (#181 by RobertSorgenfrei).
- **Start view per floor:** each floor can open from its own side, e.g. the ground floor from the front and the upper floor from the back (#182 by RobertSorgenfrei).
- **Fold the floor pictures:** a small arrow turns the floor pictures on the left into plain buttons with names – more room on a phone (discussion #177 by Eric-41).
- **Energy Pro:** smart plugs and other placed devices with a power sensor can carry a device card too; cards of devices standing side by side no longer cover each other (discussion #178 by jan-1992-29, karli4711).
- **Car Pro:** when the car is unlocked, its head- and taillights glow amber like indicators.

### Fixed

- Where an interior wall continues an outer wall in line, it stood half its thickness into the room; it now sits flush (#179 by gcorgnet).
- Demo: the van stands along the garage instead of across its wall.

## 1.12.0

### Fixed

- A roof section drawn over an upper floor with a gap in its middle (a stairwell) landed on the ground floor; the wall top is now found at nine points, and the roof form gets **Sits on floor** to move a section onto another floor (#166 by speedymk1).
- Helpers could not be picked: number fields now offer `input_number` and `number` helpers, on/off fields `input_boolean` – for solar, energy, the car and contacts (#161 by vwtuner).
- Outdoor lamps lit nothing once two rooms of the floor were joined into one light zone (#160 by Thundras).
- Mirrored furniture showed its inside faces; only lying cylinders and the contact shadow are rewound now, the smart fridge's doors and screen and pack lamps (arc lamp, wall unit) follow the mirror (#159 by Thundras).
- The state picture of a screen furniture sat below the screen when a mount height was set, and changing only the mount height did not move the glow (#157 by Thundras).

### New

- **Glass wall:** a new preset under doors & windows – fixed floor-to-ceiling glazing with slim mullions for an indoor glass wall (#163 by xFireShade).
- **Show a device as furniture:** a placed device turns into a fitting furniture item in its place, already linked (a speaker or smart display for a media player, a lamp for a light …), and back to a pin.
- **Sound & Cinema, more life:** the quick menu gets **Play** with your stations and playlists (set in the editor, `media_player.play_media`, also for Echos via search phrases) and the player's sources; a speaker's pin steps aside while its card floats; players without a title show their app or source; one card per player, furniture linked by hand first; cards survive short cloud dropouts; the volume answers while dragging.
- **Home Cinema & Hi-Fi pack, release 2 (free for owners):** 13 smart speakers and smart displays (ball, cylinder, puck, pod, tall, oval, compact and portable multiroom, premium soundbar, displays 5″/7″/8″/15″); with Sound & Cinema their light ring glows in the app's colour and the displays show the cover.
- **Own buttons:** in the central menu, with a label, an icon and an action – open a path, show an entity's details, call a service, or fire a DOM event for a browser_mod popup with your own card; set in the editor under Favourites or per card with `buttons:` (discussion #143 by Schobiwan88).
- **Phones: a shorter header:** quality, look, markers and FPS fold behind a ⚙ button, two header lines instead of three (#131 by denisb88).
- **Living room pack, release 3 (free for owners):** a wall unit with lit glass vitrines – as a lamp, a linked light makes the vitrines and LED strips glow, your own TV goes into the niche – and a wall unit with a TV whose screen shows the media player (discussion #153 by Pitbull19850119).
- **Thickness per wall:** every wall of a room gets a thickness field in the wall-heights box (a 36.5 cm outer wall, an 11.5 cm partition); a shared wall takes the thicker setting (discussion #149 by ArtakerCadSystems).
- **Central menu and favourites:** a star above the magnifier opens all lights on / off and all blinds up / down for the floor shown or the whole house (with a confirmation), plus favourites – scenes, scripts, automations, buttons and switches picked in the editor; the room panel gets **All on** next to All off and **All up / All down** for its blinds; card option `central` (#145 by daene85).
- **Names under markers:** a device or furniture with an own name can show it small under its pin in 3D ("Show the name under the marker"), or every named device with the card option `marker_names: true` (#156 by denisb88).
- **Solar on hip ends:** hip and pyramid roof sections offer their two triangular ends for solar fields and roof windows (discussions #158 by bert-MI4U and #134).
- **Better furniture search:** several words in any order, German and English names and the pack name, a "nothing found" line, the field stays on top while scrolling, Escape clears it (discussion #155 by biancapascal).
- **Hide a state in the room panel:** per device of a room ("Aa"), and a bare "unknown" of switches, covers and lights is left out anyway (discussion #154 by ggeudens).
- **Outdoor round:** a **slope** per outdoor area (height difference and direction; fences, lamps and furniture on it follow, #148), **holes** – an area marked "cut out" becomes a hole in the areas beneath it (#144), a **pergola / frame** type with corner posts, beams, rafters and optional **X-bracing**, an **open** outline for fences and pergolas leaning against the house (#141), and a **wild patch** type (#142); all by denisb88.
- **Garden & Terrace pack, release 3 (free for owners):** trees by species – oak, lime, birch, maple, fruit tree – conifers – spruce, pine, thuja – plus shrub, flowering shrub, brush for a wild patch and a group of three trees; the demo garden shows them (#142 by denisb88).
- **Car Pro (Pro add-on, €5.90):** a glass card over the car (charge with a bar, range, charging power, lock / climate / charge buttons); the car in its parking spot shows charge, range, charging, lock and climate from its integration – a light band in the charge colour, a warm glow while the climate runs, a pin with percent and kilometres, "away" with the tracker's zone, and a quick menu with lock/unlock (unlocking asks), climate and charging; one entity of the car is enough, the rest is found on its device (discussions #71 and #73, #16 by tomfischer98).
- **Sound & Cinema (Pro add-on, €3.90):** speakers show a now-playing card with cover, title, artist and volume (play/pause, previous, next on it), sound rings pulse around playing speakers, multiroom groups are joined by lines, and the quick menu of a media player gets play/pause, track change and volume (discussion #6 by MisterAndrew3000, the most-voted idea).

## 1.11.1

### New

- **Values at the room names:** a heatmap mode "Values" writes temperature, humidity and CO₂ under each room name instead of colouring the floors (discussion #153 by Pitbull19850119).
- **Slats:** the quick menu and the room panel show a tilt slider (or slats open/closed) for covers that support it – Raffstores, venetian blinds (discussion #146 by Schobiwan88).
- **Hide entities from the room panel:** an eye in the room's device list keeps an entity of the area out of the panel (discussion #152 by ggeudens).
- **Height offset for outdoor areas:** a driveway down to a lower garage or a raised terrace sits below or above the ground; lamps on it follow (#148 by denisb88).
- **Shift and turn the whole house:** "Take every floor along" moves or turns every floor with the roof, outdoor areas, cables, meter and hologram (discussion #140 by robertkrizovnik).
- **Background picture:** move and scale it in the plan (drag it, pull the corner handle) and turn it with a rotation field.

### Fixed

- Device holograms (Energy Pro) sat at the wrong height on floors above or below ground – the floor's elevation was left out (#151 by fschade).

## 1.11.0

### New

- **Hedges and fences take a height** of their own, and every outdoor area can hide its neon outline (#141 and #144 by denisb88).
- The card option for the energy values at the top says that it belongs to Energy Pro (discussion #104).
- **The eye – a clean view:** a button at the bottom left of the 3D view hides every bar, chip row, thumbnail, value and switch so only the stage remains (half a screen more on a phone); the next tap brings them back, and the device remembers the choice. Card options `controls_hidden` and `controls_hide_after` (seconds without a touch) (#131 by denisb88).
- The installed version stands at the right end of the panel header (hover it for the integration's version).
- **Accent colour of your own:** a colour well beside the look (and the card option `accent`) recolours the neon lines and glowing edges, the buttons and the pins – amber, green, purple, whatever fits the wall (discussions #32 by hohenpul and #102 by MrSideline).
- **Furniture with a state:** any item can show an entity that reports on, occupied or home – its top glows; two entities light the halves of a bed (left/right) or a bunk bed (bottom/top) (#116 by hahne-t, discussion #11 by StevenKRT).
- **Lamps: colour and brightness from a second entity** – for lights a relay switches while the bulb knows its colour (discussion #132 by Schobiwan88).
- **Cut view cuts tall furniture:** wardrobes, stairs and tall units are cut at the wall cut height, so a stair in the middle of the house no longer hides the rooms behind it (discussion #133 by Schobiwan88).
- **Sidelights of a front door:** a single sidelight can sit on the hinge side, and the widths are adjustable, left and right separately with two (discussion #135 by Schobiwan88).
- **Mirror furniture:** a switch in the furniture form, in the right-click menu of the plan and in the furnish bar of the 3D view turns an item left-right – the L-sofa the other way round, a cabinet with its door on the other side, pack items too (#107 by N4IR0, discussion #121 by Thundras).
- **Floor and room bar:** a ≡ button at its right end wraps it onto several lines (remembered per device); in one line it scrolls with the mouse wheel and shows a thin scrollbar under the pointer; in the house view each floor's rooms follow a small floor label (#129 by denisb88).
- **LED strips tilt and stand upright:** a tilt about the strip's length lays it against a roof slope or turns it sideways; "Upright" stands it on end from its mount height – along a door frame, as a light column (#123 by RobertSorgenfrei, discussion #122 by idaho).

## 1.10.2

### New

- **Energy Pro: every plant keeps its card** – the plant whose field carries the main hologram no longer loses its own card; the main card steps aside next to the field unless it was moved by hand (#128 by denisb88).
- **Energy Pro: the main hologram can hang free** at a point in the plan (handle ◈ in the energy tool, height above the ground) instead of only on a solar field (#128).
- **Energy Pro: a switch per inverter** hides that plant's card (#128).

### Fixed

- **Camera wall** shares the sheet between the cameras: one camera fills it, two sit side by side, up to four in a 2×2 grid, more in three or four columns. Tapping a tile shows that camera big as a live stream through Home Assistant’s own player (the tiles stay stills, and a small note in the wall header and in the look-through bar says so); from there "Look through the camera" goes into the 3D view, and "Back to the view" brings the wall back.
- **Door form:** the switch "Show closed without a sensor" was missing – it sat in the window-only sensor block; the drive's position sensor and confirm switch show only once a drive is set or found; the drive field is called "Drive" for doors and gates.
- **Wall heights:** the rows in the room form lay out cleanly again (name and height, the buttons below, a split point in its own line) instead of the cut button slipping out of line.
- **Canopies stay on their posts** when the floors are pulled apart; before, a terrace roof or carport lifted off with the house roof (discussion #137 by RobertSorgenfrei).
- A device marker set to **"always"** shows its value (temperature, humidity …) on the floor as well, not only inside its room (discussion #130 by Chipsy79).
- **Cut view:** a tap on the cut-away upper part of a window no longer switches its blind or curtain by mistake; it goes through to what lies behind (discussion #127 by creativeibiza).

## 1.10.1

### New

- **Own name for a placed device** in the plan, without renaming the entity in Home Assistant (#125 by RobertSorgenfrei).
- **Turn a floor by 90°** in the floor form, for a floor drawn the wrong way round (discussion #120 by MStengel69).
- **Card:** `room:` starts the card in one room, e.g. a display for the kids' room (discussion #119 by HeroHoshy).
- A roof slope that reaches down into the floor below the attic cuts that floor's walls as well (discussion #75, idaho).
- **Camera cockpit 2** (a free update of the Pro add-on): **detection pins** – what a camera's sensors see right now (person, vehicle, animal, motion – Frigate, UniFi Protect, Reolink …) stands in front of it as a pin with the time; the **camera wall** – every placed camera's live picture at once ("Cameras" switch, card option `camera_wall`), motion framed red, recording marked; a tap looks through the camera.

### Fixed

- A camera mounted just inside an outer wall and looking out had its wedge cut by that wall (20 cm long); the wall the camera hangs on no longer counts (reported by the maintainer's own driveway camera).
- The version notice now tells which side is behind: an old bundle in the browser or the companion app gets "reload the page" with a Reload button (and the cache hint for the companion app) instead of "restart Home Assistant"; both versions are shown. A pack with a Pro feature this frontend does not know yet says so instead of looking like a furniture pack (support case of a French customer).

## 1.10.0

### New

- **Roof slopes with knee walls:** when a roof section's top of walls lies below the ceiling of the floor underneath, that floor's walls end under the roof – knee walls at the eaves, gables up to the ridge, inner walls cut by the slope; windows stay below it. Dashed headroom lines (1.5 m, 2 m) in the plan editor (mindmonk's description in [PR #66](https://github.com/Mastershort/neonplan3d/pull/66), discussions #64, #75).
- **Roof stays:** a switch in the view bar (and the card option `roof_fade: false`) keeps the roof on the house while zooming in; in the editor's roof and energy tools it always stays.
- **Roof windows:** a window motor (Velux, Roto, Fakro as a cover) opens the sash as far as it stands, a name, a warm glow while open or tilted, and a hole in the slope of a roof section so the attic looks out (discussion #47, PR #66 by mindmonk).
- **Dormers and cross gables:** "+ Dormer" in a section's form puts a dormer on a slope (gable or pent); its depth ends where its ridge meets the slope, the slope opens only where the dormer's roof lies above it (valleys), the cheeks close it, the attic wall rises up to it for the dormer window. A wide dormer with its eaves on the top of walls is a cross gable (a three-gable house). Where sections overlap, the higher roof is the ceiling (discussion #75, PR #66 by mindmonk).
- **Roof shapes:** half-hip, pyramid, mansard and flat with parapet join gable, hip, pent and flat; attic walls end under hipped ends and broken slopes as well (discussions #90, #74, #47).
- **Flat roof as a free shape:** "Take the floor's outline" gives a flat section the outline of the floor's rooms (L, Z, U …) as one surface; its corners can be dragged (#108 by rolandarends).
- **Roller shutters on doors:** a front door, French window or sliding door takes a cover too; the blind comes down over it and can be moved like a window's (#114 by denisb88).
- **Shift a floor:** "Shift the floor" in the floor form moves everything on the floor by X and Z (#25 by morbidos123).
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
