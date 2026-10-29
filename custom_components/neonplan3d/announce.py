"""Announcements from automations: the service `neonplan3d.announce`.

The Announcements module (a shop module, runs in the browser) speaks when someone taps a sentence. An automation
(the doorbell rings, the washing machine is done) runs with no NeonPlan page open, so its announcement is made here,
with the module's settings from the plan: the speaker chosen for a room, else one placed in the room on the plan,
else one of the room's area, else the house's default speaker; the room's quiet time; the text-to-speech entity.
The service works only while the Announcements module is installed and approved.
"""

from __future__ import annotations

from datetime import datetime
import logging
from typing import Any
from urllib.parse import quote

from homeassistant.core import HomeAssistant, ServiceCall, ServiceResponse, SupportsResponse
from homeassistant.exceptions import HomeAssistantError, ServiceValidationError
from homeassistant.helpers import area_registry as ar
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers import entity_registry as er
from homeassistant.util import dt as dt_util
import voluptuous as vol

from .const import DOMAIN
from .locate.scanners import device_area_id
from .packs import module_sha

_LOGGER = logging.getLogger(__name__)

SERVICE_ANNOUNCE = "announce"
MODULE_ID = "mastershort.announce"
# Home Assistant's MEDIA_ANNOUNCE feature of a media player (Sonos and others lower their music for the words)
MEDIA_ANNOUNCE = 1048576

ANNOUNCE_SCHEMA = vol.Schema(
    {
        vol.Required("message"): vol.All(cv.string, vol.Length(min=1, max=300)),
        vol.Optional("rooms", default=[]): vol.All(cv.ensure_list, [vol.All(cv.string, vol.Length(max=80))]),
        vol.Optional("floor"): vol.All(cv.string, vol.Length(max=80)),
        vol.Optional("ignore_quiet", default=False): cv.boolean,
    }
)

Room = tuple[dict[str, Any], dict[str, Any]]


def module_ready(packs: list[dict[str, Any]]) -> bool:
    """Whether the Announcements module is installed and an admin approved its code."""
    pack = next((p for p in packs if p.get("id") == MODULE_ID), None)
    sha = module_sha(pack)
    return sha is not None and pack is not None and pack.get("approved") == sha


def _mods(obj: dict[str, Any]) -> dict[str, Any]:
    cfg = (obj.get("mods") or {}).get(MODULE_ID)
    return cfg if isinstance(cfg, dict) else {}


def _same(text: str, *names: Any) -> bool:
    key = text.strip().casefold()
    return any(isinstance(n, str) and n.strip().casefold() == key for n in names)


def target_rooms(
    building: dict[str, Any], rooms: list[str], floor: str | None, area_names: dict[str, str]
) -> tuple[list[Room], list[str]]:
    """The rooms an announcement goes to: those named (a room's name, alias, id or Home Assistant area), those of
    the floor named, or every room. Returns the rooms and the names nothing matched."""
    floors = building.get("floors") or []
    if floor:
        floors = [f for f in floors if _same(floor, f.get("name"), f.get("id"))]
        if not floors:
            return [], [floor]
    every: list[Room] = [(f, r) for f in floors for r in f.get("rooms") or []]
    if not rooms:
        return every, []
    out: list[Room] = []
    missing: list[str] = []
    for name in rooms:
        hits = [
            (f, r)
            for f, r in every
            if _same(name, r.get("name"), r.get("id"), r.get("area_id"), area_names.get(r.get("area_id") or ""))
            or _same(name, *(r.get("aliases") or []))
        ]
        if not hits:
            missing.append(name)
        out.extend(h for h in hits if h not in out)
    return out, missing


def is_quiet(room: dict[str, Any], now: datetime) -> bool:
    """Whether the room has its quiet time now (from `quiet_from` in the evening until `quiet_to` in the morning)."""
    cfg = _mods(room)
    start = cfg.get("quiet_from")
    if not isinstance(start, (int, float)):
        return False
    to = cfg.get("quiet_to")
    end = to if isinstance(to, (int, float)) else 7
    hour = now.hour + now.minute / 60
    return hour >= start or hour < end


def _inside(x: float, z: float, points: list[Any]) -> bool:
    inside = False
    j = len(points) - 1
    for i, (xi, zi) in enumerate(points):
        xj, zj = points[j]
        if (zi > z) != (zj > z) and x < (xj - xi) * (z - zi) / (zj - zi) + xi:
            inside = not inside
        j = i
    return inside


def placed_players(floor: dict[str, Any], room: dict[str, Any]) -> list[str]:
    """The media players placed in the room on the plan (device pins and furniture linked to one)."""
    points = room.get("points") or []
    if len(points) < 3:
        return []
    out: list[str] = []
    for item in floor.get("placements") or []:
        entity = item.get("entity_id") or ""
        if entity.startswith("media_player.") and _inside(item.get("x", 0), item.get("z", 0), points):
            out.append(entity)
    for item in floor.get("furniture") or []:
        entity = item.get("entity") or ""
        if entity.startswith("media_player.") and _inside(item.get("x", 0), item.get("z", 0), points):
            out.append(entity)
    return list(dict.fromkeys(out))


class Speakers:
    """Which speaker talks in a room and how it is told to, as the module does it in the browser."""

    def __init__(self, hass: HomeAssistant, building: dict[str, Any]) -> None:
        self.hass = hass
        self.house = _mods(building.get("settings") or {})
        self.entities = er.async_get(hass)
        self.devices = dr.async_get(hass)

    def _exists(self, entity_id: str | None) -> bool:
        return entity_id is not None and self.hass.states.get(entity_id) is not None

    def _reachable(self, entity_id: str) -> bool:
        state = self.hass.states.get(entity_id)
        return state is not None and state.state not in ("unavailable", "unknown")

    def _platform(self, entity_id: str) -> str | None:
        entry = self.entities.async_get(entity_id)
        return entry.platform if entry else None

    def _rank(self, entity_id: str) -> int:
        if self._platform(entity_id) == "alexa_media":
            return 0
        device_class = self.hass.states.get(entity_id).attributes.get("device_class")  # type: ignore[union-attr]
        return 1 if device_class == "speaker" else 3 if device_class == "tv" else 2

    def _pick(self, ids: list[str]) -> str | None:
        # never a TV on its own: an announcement in the middle of a film is no one's wish
        fit = [
            i
            for i in dict.fromkeys(ids)
            if self._reachable(i) and self.hass.states.get(i).attributes.get("device_class") != "tv"  # type: ignore[union-attr]
        ]
        return sorted(fit, key=self._rank)[0] if fit else None

    def _area_players(self, area_id: str | None) -> list[str]:
        if not area_id:
            return []
        out = []
        for state in self.hass.states.async_all("media_player"):
            entry = self.entities.async_get(state.entity_id)
            if entry is None or entry.hidden_by:
                continue
            area = entry.area_id
            if area is None and entry.device_id and (device := self.devices.async_get(entry.device_id)):
                area = device_area_id(self.hass, device)
            if area == area_id:
                out.append(state.entity_id)
        return out

    def for_room(self, floor: dict[str, Any], room: dict[str, Any]) -> str | None:
        """The room's chosen speaker, else one placed in it, else (none placed) one of its area, else the default."""
        own = _mods(room).get("speaker")
        if isinstance(own, str) and self._exists(own):
            return own
        placed = [p for p in placed_players(floor, room) if self._exists(p)]
        auto = self._pick(placed) if placed else self._pick(self._area_players(room.get("area_id")))
        if auto:
            return auto
        default = self.house.get("speaker")
        return default if isinstance(default, str) and self._exists(default) else None

    def _tts(self) -> str | None:
        chosen = self.house.get("tts")
        if isinstance(chosen, str) and self._exists(chosen):
            return chosen
        return next((s.entity_id for s in self.hass.states.async_all("tts")), None)

    def _satellite(self, player: str) -> str | None:
        if player.startswith("assist_satellite."):
            return player
        entry = self.entities.async_get(player)
        if entry is None or not entry.device_id:
            return None
        for other in er.async_entries_for_device(self.entities, entry.device_id):
            if other.entity_id.startswith("assist_satellite.") and self._exists(other.entity_id):
                return other.entity_id
        return None

    async def say(self, player: str, message: str) -> None:
        """One speaker says the words: an Echo announces with its chime, a voice satellite announces, chime_tts
        adds a chime, a player that can announce lowers its music, any other speaks through text-to-speech."""
        services = self.hass.services
        if self._platform(player) == "alexa_media":
            await services.async_call(
                "notify", "alexa_media", {"message": message, "target": [player], "data": {"type": "announce"}}
            )
            return
        if satellite := self._satellite(player):
            await services.async_call("assist_satellite", "announce", {"entity_id": satellite, "message": message})
            return
        if services.has_service("chime_tts", "say"):
            await services.async_call(
                "chime_tts", "say", {"entity_id": player, "message": message, "chime_path": "chime"}
            )
            return
        tts = self._tts()
        if tts is None:
            raise HomeAssistantError(f"No text-to-speech entity for {player}")
        features = int(self.hass.states.get(player).attributes.get("supported_features") or 0)  # type: ignore[union-attr]
        if features & MEDIA_ANNOUNCE:
            await services.async_call(
                "media_player",
                "play_media",
                {
                    "entity_id": player,
                    "media_content_id": f"media-source://tts/{tts}?message={quote(message)}&cache=true",
                    "media_content_type": "music",
                    "announce": True,
                },
            )
            return
        await services.async_call(
            "tts", "speak", {"entity_id": tts, "media_player_entity_id": player, "message": message, "cache": True}
        )


async def async_announce(hass: HomeAssistant, call: ServiceCall) -> ServiceResponse:
    """Says the message in the rooms asked for; several rooms leave out those with their quiet time."""
    data = hass.data[DOMAIN]
    if not module_ready(data.packs):
        raise ServiceValidationError(
            "The Announcements module is not installed (or waits for an admin's approval in NeonPlan → Extensions)"
        )
    building = data.building
    area_names = {a.id: a.name for a in ar.async_get(hass).async_list_areas()}
    rooms, missing = target_rooms(building, call.data["rooms"], call.data.get("floor"), area_names)
    if missing:
        raise ServiceValidationError(f"No room or floor called {', '.join(missing)} in the plan")
    now = dt_util.now()
    # one room asked for by name speaks even in its quiet time, like a tap on that room
    keep_quiet = not call.data["ignore_quiet"] and len(rooms) != 1
    quiet = [r for _, r in rooms if keep_quiet and is_quiet(r, now)]
    speakers = Speakers(hass, building)
    players: dict[str, str] = {}
    silent: list[str] = []
    for floor, room in rooms:
        if room in quiet:
            continue
        player = speakers.for_room(floor, room)
        if player is None:
            silent.append(room.get("name", ""))
        else:
            players.setdefault(player, room.get("name", ""))
    failed: dict[str, str] = {}
    for player in players:
        try:
            await speakers.say(player, call.data["message"])
        except HomeAssistantError as err:
            _LOGGER.warning("Announcement on %s failed: %s", player, err)
            failed[player] = str(err)
    if players and len(failed) == len(players):
        raise HomeAssistantError(f"The announcement went out nowhere: {next(iter(failed.values()))}")
    response: dict[str, Any] = {
        "speakers": [p for p in players if p not in failed],
        "quiet": [r.get("name", "") for r in quiet],
        "no_speaker": silent,
        "failed": list(failed),
    }
    return response


def async_setup_announce(hass: HomeAssistant) -> None:
    """Registers the service (it answers only while the module is installed)."""

    async def handle(call: ServiceCall) -> ServiceResponse:
        return await async_announce(hass, call)

    hass.services.async_register(
        DOMAIN, SERVICE_ANNOUNCE, handle, schema=ANNOUNCE_SCHEMA, supports_response=SupportsResponse.OPTIONAL
    )


def async_unload_announce(hass: HomeAssistant) -> None:
    """The service goes with the integration."""
    hass.services.async_remove(DOMAIN, SERVICE_ANNOUNCE)
