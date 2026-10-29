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

SIGNAL_BUILDING_UPDATED = f"{DOMAIN}_building_updated"
# a sentence for the open views (see voice.py) and the hass.data key of its broker
SIGNAL_ASK = f"{DOMAIN}_ask"
DATA_ASK = f"{DOMAIN}_ask"
# an announcement for the open views (see announce.py): they speak and show it
SIGNAL_ANNOUNCE = f"{DOMAIN}_announce"
# the voice settings (which sentences Assist hands to NeonPlan), kept in .storage
DATA_VOICE = f"{DOMAIN}_voice"
STORAGE_KEY_VOICE = f"{DOMAIN}.voice"
