"""Sensors of NeonPlan 3D: the room of every device the locating feature tracks (one sensor per device)."""

from __future__ import annotations

from datetime import UTC, datetime
from typing import Any

from homeassistant.components.sensor import SensorEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import DOMAIN
from .locate.service import DATA_LOCATE, SIGNAL_LOCATE, SIGNAL_LOCATE_DEVICES, LocateService


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry, async_add_entities: AddEntitiesCallback) -> None:
    service: LocateService | None = hass.data.get(DATA_LOCATE)
    if service is None:
        return
    known: dict[str, LocateSensor] = {}

    @callback
    def sync() -> None:
        new = [LocateSensor(service, d["id"]) for d in service.devices if d["id"] not in known]
        for sensor in new:
            known[sensor.device_id] = sensor
        if new:
            async_add_entities(new)
        # a removed device takes its sensor along (no "unavailable" leftovers in Home Assistant)
        ids = {d["id"] for d in service.devices}
        registry = er.async_get(hass)
        for device_id in [k for k in known if k not in ids]:
            sensor = known.pop(device_id)
            if sensor.entity_id and registry.async_get(sensor.entity_id):
                registry.async_remove(sensor.entity_id)

    sync()
    entry.async_on_unload(async_dispatcher_connect(hass, SIGNAL_LOCATE_DEVICES, sync))


class LocateSensor(SensorEntity):
    """Room of one tracked phone, watch or tag (unknown while away or not heard)."""

    _attr_has_entity_name = False
    _attr_should_poll = False
    _attr_icon = "mdi:map-marker-radius"
    # they change with every estimate: the room is what the history keeps, not each new probability
    _unrecorded_attributes = frozenset({"probability", "last_seen"})

    def __init__(self, service: LocateService, device_id: str) -> None:
        self.service = service
        self.device_id = device_id
        self._attr_unique_id = f"{DOMAIN}_locate_{device_id}"

    def _device(self) -> dict[str, Any] | None:
        return next((d for d in self.service.devices if d["id"] == self.device_id), None)

    @property
    def available(self) -> bool:
        return self._device() is not None

    @property
    def name(self) -> str:
        device = self._device()
        hass = getattr(self, "hass", None)
        word = "Raum" if hass is not None and (hass.config.language or "").startswith("de") else "room"
        return f"{device['name'] if device else self.device_id} {word}"

    @property
    def native_value(self) -> str | None:
        return (self.service.state.get(self.device_id) or {}).get("room_name")

    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        state = self.service.state.get(self.device_id) or {}
        device = self._device() or {}

        def iso(t: float | None) -> str | None:
            return datetime.fromtimestamp(t, UTC).isoformat() if t else None

        return {
            "room_id": state.get("room"),
            "floor": state.get("floor"),
            "area_id": state.get("area_id"),
            "probability": state.get("probability"),
            "since": iso(state.get("since")),
            "last_seen": iso(state.get("last_seen")),
            "person": device.get("person"),
            "device_name": device.get("name"),
            "wearable": bool(device.get("wearable")),
            "icon_name": device.get("icon"),
            "neonplan_locate": True,
        }

    async def async_added_to_hass(self) -> None:
        self.async_on_remove(async_dispatcher_connect(self.hass, SIGNAL_LOCATE, self._changed))
        self.async_on_remove(async_dispatcher_connect(self.hass, SIGNAL_LOCATE_DEVICES, self._changed))

    @callback
    def _changed(self) -> None:
        self.async_write_ha_state()
