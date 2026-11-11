"""Constants for NeonPlan 3D."""

from __future__ import annotations

DOMAIN = "neonplan3d"
# the integration's earlier name; its stores are taken over once (see storage.py)
LEGACY_DOMAIN = "floorplan_3d"

STORAGE_VERSION = 1
# minor versions of the building store; each step has a migration in storage.py
STORAGE_MINOR_VERSION = 2
STORAGE_KEY_BUILDING = f"{DOMAIN}.building"
STORAGE_KEY_IMAGES = f"{DOMAIN}.images"
STORAGE_KEY_HISTORY = f"{DOMAIN}.history"
STORAGE_KEY_PACKS = f"{DOMAIN}.packs"
STORAGE_KEY_LICENSE = f"{DOMAIN}.license"
# the index of the floor plans (names, order, where they stand on the property, the bin); the first plan, "main",
# is the one every installation had before and stays in the stores above, each further plan has stores of its own
# (STORAGE_KEY_BUILDING + "." + id, STORAGE_KEY_HISTORY + "." + id)
STORAGE_KEY_PLANS = f"{DOMAIN}.plans"
MAIN_PLAN = "main"
# a deleted plan waits this many days in the bin before its stores are removed
PLAN_TRASH_DAYS = 30
MAX_PLANS = 50
# opt-in usage and error reports (see diagnostics_report.py)
STORAGE_KEY_DIAGNOSTICS = f"{DOMAIN}.diagnostics"
# hass.data key of the reporter
DATA_DIAGNOSTICS = f"{DOMAIN}_diagnostics"

# restore points: at most this many, and a new one only after this pause since the last one
HISTORY_MAX = 20
HISTORY_INTERVAL = 600

URL_BASE = "/neonplan3d_static"
MAIN_BUNDLE = "neonplan3d.js"
PANEL_URL_PATH = "neonplan3d"
PANEL_COMPONENT = "neonplan3d-panel"
PANEL_ICON = "mdi:floor-plan"
PANEL_TITLE = "NeonPlan 3D"

# a plan was saved (its revision and id), and the list of plans changed
SIGNAL_BUILDING_UPDATED = f"{DOMAIN}_building_updated"
SIGNAL_PLANS_UPDATED = f"{DOMAIN}_plans_updated"
# a sentence for the open views (see voice.py) and the hass.data key of its broker
SIGNAL_ASK = f"{DOMAIN}_ask"
DATA_ASK = f"{DOMAIN}_ask"
# an announcement for the open views (see announce.py): they speak and show it
SIGNAL_ANNOUNCE = f"{DOMAIN}_announce"
# the open views of some card templates (or all) load their page again (the service `reload_screens`)
SIGNAL_RELOAD = f"{DOMAIN}_reload"
# a style for the open views (the service `set_style`): the screens named, or every one
SIGNAL_STYLE = f"{DOMAIN}_style"
# the voice settings (which sentences Assist hands to NeonPlan), kept in .storage
DATA_VOICE = f"{DOMAIN}_voice"
# the NeonPlan views open now (screens.py): what each shows, for the card templates' overview
DATA_SCREENS = f"{DOMAIN}_screens"
STORAGE_KEY_VOICE = f"{DOMAIN}.voice"
