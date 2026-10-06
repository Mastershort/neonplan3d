"""NeonPlan 3D: draw your home in Home Assistant and control it in 3D."""

from __future__ import annotations

import hashlib
from pathlib import Path
import random

from homeassistant.components import frontend, panel_custom
from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.event import async_call_later, async_track_time_interval
from homeassistant.helpers.typing import ConfigType
from homeassistant.loader import async_get_integration

from .card_resource import async_remove_card_resource, async_schedule_card_resource
from .const import (
    DOMAIN,
    MAIN_BUNDLE,
    PANEL_COMPONENT,
    PANEL_ICON,
    PANEL_TITLE,
    PANEL_URL_PATH,
    URL_BASE,
)
from .license import FIRST_CHECK_DELAY, REFRESH_INTERVAL, async_refresh_quietly
from .storage import FloorplanData
from .websocket import async_register_commands

CONFIG_SCHEMA = cv.config_entry_only_config_schema(DOMAIN)

_STATIC_REGISTERED = f"{DOMAIN}_static_registered"


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """Register the websocket commands once."""
    async_register_commands(hass)
    return True


_MAIN_URL = f"{DOMAIN}_main_url"


def _bundle_hash() -> str:
    """A short hash of the main bundle: a rebuilt bundle gets a new URL even when the version stays."""
    path = Path(__file__).parent / "frontend" / MAIN_BUNDLE
    try:
        return hashlib.sha256(path.read_bytes()).hexdigest()[:10]
    except OSError:
        return "0"


async def _async_main_url(hass: HomeAssistant) -> str:
    # computed once per run, so adding and removing the script use the same URL
    if url := hass.data.get(_MAIN_URL):
        return url
    integration = await async_get_integration(hass, DOMAIN)
    digest = await hass.async_add_executor_job(_bundle_hash)
    url = f"{URL_BASE}/{MAIN_BUNDLE}?v={integration.version}-{digest}"
    hass.data[_MAIN_URL] = url
    return url


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Load the stores and register the frontend (panel and card)."""
    data = FloorplanData(hass)
    await data.async_load()
    hass.data[DOMAIN] = data

    # with a shop key, bought packs are checked for updates once a day (never needed for what is installed)
    async def _check(_now) -> None:
        await async_refresh_quietly(hass, data)

    entry.async_on_unload(async_track_time_interval(hass, _check, REFRESH_INTERVAL))
    entry.async_on_unload(async_call_later(hass, random.uniform(*FIRST_CHECK_DELAY), _check))

    # static paths cannot be unregistered, so they are registered once per run
    if not hass.data.get(_STATIC_REGISTERED):
        await hass.http.async_register_static_paths(
            [StaticPathConfig(URL_BASE, str(Path(__file__).parent / "frontend"), cache_headers=False)]
        )
        hass.data[_STATIC_REGISTERED] = True

    url = await _async_main_url(hass)
    frontend.add_extra_js_url(hass, url)
    # and as a dashboard resource, so a dashboard never draws the card before its script is there (#252)
    async_schedule_card_resource(hass, url)
    await panel_custom.async_register_panel(
        hass,
        frontend_url_path=PANEL_URL_PATH,
        webcomponent_name=PANEL_COMPONENT,
        sidebar_title=PANEL_TITLE,
        sidebar_icon=PANEL_ICON,
        module_url=url,
        require_admin=False,
        config={},
    )
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Remove panel and card."""
    frontend.async_remove_panel(hass, PANEL_URL_PATH)
    frontend.remove_extra_js_url(hass, await _async_main_url(hass))
    hass.data.pop(DOMAIN, None)
    return True


async def async_remove_entry(hass: HomeAssistant, entry: ConfigEntry) -> None:
    """The plan, its pictures and packs stay in .storage when the integration is removed: they are the
    user's work, and removing and re-adding the integration must never cost it."""
    await async_remove_card_resource(hass)
