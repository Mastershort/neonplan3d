"""NeonPlan 3D: draw your home in Home Assistant and control it in 3D."""

from __future__ import annotations

import contextlib
import hashlib
import logging
from pathlib import Path
import random

from aiohttp import web
from homeassistant.components import frontend, panel_custom
from homeassistant.components.http import HomeAssistantView
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.event import async_call_later, async_track_time_interval
from homeassistant.helpers.http import KEY_HASS
from homeassistant.helpers.typing import ConfigType
from homeassistant.loader import async_get_integration

from .announce import async_setup_announce, async_unload_announce
from .card_resource import (
    LOADER_FILE,
    LOADER_URL,
    async_remove_card_resource,
    async_schedule_card_resource,
    loader_source,
    remove_loader,
)
from .const import (
    DATA_DIAGNOSTICS,
    DOMAIN,
    MAIN_BUNDLE,
    PANEL_COMPONENT,
    PANEL_ICON,
    PANEL_TITLE,
    PANEL_URL_PATH,
    URL_BASE,
)
from .diagnostics_report import DiagnosticsReporter
from .license import FIRST_CHECK_DELAY, REFRESH_INTERVAL, async_refresh_quietly
from .locate.service import DATA_LOCATE, LocateService
from .storage import FloorplanData
from .voice import async_remove_sentences, async_setup_voice, async_unload_voice
from .websocket import async_register_commands

_LOGGER = logging.getLogger(__name__)

CONFIG_SCHEMA = cv.config_entry_only_config_schema(DOMAIN)
PLATFORMS = ["sensor"]

_STATIC_REGISTERED = f"{DOMAIN}_static_registered"


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """Register the websocket commands and the static path once, as early as possible (#461)."""
    async_register_commands(hass)
    await _async_register_static(hass)
    return True


FRONTEND_DIR = Path(__file__).parent / "frontend"


class FrontendView(HomeAssistantView):
    """The bundles, languages and pictures of the frontend, served without caching: a browser checks every file on
    each load (and gets a short 304 when it is unchanged), so an update of the files shows after a reload, with no
    restart of Home Assistant for the frontend alone."""

    url = f"{URL_BASE}/{{path:.+}}"
    name = f"{DOMAIN}:frontend"
    requires_auth = False

    async def get(self, request: web.Request, path: str) -> web.StreamResponse:
        hass: HomeAssistant = request.app[KEY_HASS]
        if path == LOADER_FILE:
            # the dashboard resource: loads the bundle and tries again while it is not there yet (#461)
            text = loader_source(await _async_main_url(hass))
            return web.Response(text=text, content_type="text/javascript", headers={"Cache-Control": "no-cache"})
        file = await hass.async_add_executor_job(_frontend_file, path)
        if file is None:
            raise web.HTTPNotFound
        return web.FileResponse(file, headers={"Cache-Control": "no-cache"})


def _frontend_file(path: str) -> Path | None:
    """The file under the frontend folder for a request path, None outside of it or missing (in the executor)."""
    root = FRONTEND_DIR.resolve()
    file = (root / path).resolve()
    return file if root in file.parents and file.is_file() else None


async def _async_register_static(hass: HomeAssistant) -> None:
    # views cannot be unregistered, so it is registered once per run
    if hass.data.get(_STATIC_REGISTERED):
        return
    hass.http.register_view(FrontendView())
    hass.data[_STATIC_REGISTERED] = True


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

    # opt-in usage and error reports: inert (nothing is sent) unless the user switched them on
    reporter = DiagnosticsReporter(hass, data)
    await reporter.async_load()
    hass.data[DATA_DIAGNOSTICS] = reporter
    entry.async_on_unload(reporter.start())

    # locating (who and what is where, from the Bluetooth scanners): idle unless an admin switched it on
    locate = LocateService(hass)
    await locate.async_load()
    hass.data[DATA_LOCATE] = locate

    # Assist asks the house: service, intent and the sentences Assist understands (with the names locating knows)
    await async_setup_voice(hass)
    # announcements from automations (answers only while the Announcements module is installed)
    async_setup_announce(hass)
    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)

    await _async_register_static(hass)

    url = await _async_main_url(hass)
    frontend.add_extra_js_url(hass, url)
    # and as a dashboard resource, so a dashboard never draws the card before its script is there (#252), through
    # the loader on our own path, which tries again while the bundle is not there yet (#461)
    async_schedule_card_resource(hass, f"{LOADER_URL}?{url.split('?', 1)[1]}")
    # versions before 1.23 wrote the loader into the user's www folder: that copy goes (the resource is moved above)
    with contextlib.suppress(OSError):
        await hass.async_add_executor_job(remove_loader, Path(hass.config.path("www")))
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
    # newer Home Assistant raises when the list was never made (no frontend loaded, as in tests) or the url is gone
    with contextlib.suppress(KeyError, ValueError):
        frontend.remove_extra_js_url(hass, await _async_main_url(hass))
    async_unload_voice(hass)
    async_unload_announce(hass)
    await hass.config_entries.async_unload_platforms(entry, PLATFORMS)
    if (locate := hass.data.pop(DATA_LOCATE, None)) is not None:
        locate.stop()
    hass.data.pop(DOMAIN, None)
    hass.data.pop(DATA_DIAGNOSTICS, None)
    return True


async def async_remove_entry(hass: HomeAssistant, entry: ConfigEntry) -> None:
    """The plan, its pictures and packs stay in .storage when the integration is removed: they are the
    user's work, and removing and re-adding the integration must never cost it."""
    await async_remove_card_resource(hass)
    with contextlib.suppress(OSError):
        await hass.async_add_executor_job(remove_loader, Path(hass.config.path("www")))
    # the Assist sentence files NeonPlan wrote (a file the user changed stays)
    with contextlib.suppress(OSError):
        await async_remove_sentences(hass)
