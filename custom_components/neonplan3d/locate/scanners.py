"""What Home Assistant's Bluetooth scanners heard since the last look (ESPHome proxies, Shelly Gen2+, USB adapters).

The usual Bluetooth callbacks only report changed advertisements and only from the strongest scanner, so like
other locating integrations we read every scanner's latest advertisements once a second and keep the ones that are
new (by the scanner's own timestamp).
"""

from __future__ import annotations

from dataclasses import dataclass
import time
from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers import device_registry as dr


@dataclass(slots=True)
class Reading:
    source: str  # scanner
    address: str
    rssi: int
    t: float  # wall clock seconds
    adv: Any  # bleak AdvertisementData


def _stamps(scanner: Any) -> dict[str, float]:
    stamps = getattr(scanner, "discovered_device_timestamps", None)
    if stamps is None:
        stamps = getattr(scanner, "_discovered_device_timestamps", None)
    return stamps or {}


class ScanReader:
    """Remembers what was read, so every advertisement is handed on once."""

    def __init__(self) -> None:
        self._seen: dict[tuple[str, str], float] = {}

    def read(self, hass: HomeAssistant) -> list[Reading]:
        from homeassistant.components import bluetooth

        out: list[Reading] = []
        wall = time.time()
        mono = time.monotonic()
        for scanner in bluetooth.async_current_scanners(hass):
            stamps = _stamps(scanner)
            source = scanner.source
            for address, (_device, adv) in scanner.discovered_devices_and_advertisement_data.items():
                seen = stamps.get(address)
                if seen is None or adv.rssi is None or adv.rssi <= -127:
                    continue
                key = (source, address)
                if seen <= self._seen.get(key, 0.0):
                    continue
                self._seen[key] = seen
                out.append(Reading(source, address, adv.rssi, wall - (mono - seen), adv))
        if len(self._seen) > 20000:
            # addresses rotate (phones): forget what was not heard for ten minutes
            cutoff = mono - 600
            self._seen = {k: v for k, v in self._seen.items() if v > cutoff}
        return out


def _neighbour_macs(mac: str) -> list[str]:
    """An ESP32's Bluetooth address is its Wi-Fi address plus 2 (Shelly, ESPHome): try the address and its
    neighbours, the device registry knows the Wi-Fi one."""
    try:
        value = int(mac.replace(":", ""), 16)
    except ValueError:
        return [mac]
    out = []
    for delta in (0, -2, -1, 1, 2, -3, 3):
        v = (value + delta) % (1 << 48)
        out.append(":".join(f"{(v >> s) & 0xFF:02x}" for s in range(40, -1, -8)))
    return out


def _scanner_device(registry: dr.DeviceRegistry, scanner: Any) -> dr.DeviceEntry | None:
    for mac in _neighbour_macs(scanner.source.lower()):
        for kind in (dr.CONNECTION_NETWORK_MAC, dr.CONNECTION_BLUETOOTH):
            if device := registry.async_get_device(connections={(kind, mac)}):
                return device
    # by name: a Shelly scanner is named after its device ("Herd (08:92:…)")
    name = scanner.name.split(" (")[0].strip().lower()
    matches = [d for d in registry.devices.values() if name and name in (_lower(d.name_by_user), _lower(d.name))]
    return matches[0] if len(matches) == 1 else None


def _lower(text: str | None) -> str:
    return (text or "").lower()


def device_area_id(hass: HomeAssistant, device: dr.DeviceEntry) -> str | None:
    """A device's area. Home Assistant 2026.11 moves channels (Tuya multi-gang, Z-Wave endpoints, ZHA groups) onto
    child devices that often have no area of their own: its helper then gives the parent's. Older versions: the
    device's own area."""
    effective = getattr(dr, "async_get_effective_area_id", None)
    if effective is not None:
        try:
            return effective(hass, device)
        except TypeError:
            # a signature other than (hass, device): the device's own area rather than no locating at all
            pass
    return device.area_id


def _device_area(hass: HomeAssistant, device: dr.DeviceEntry) -> str | None:
    """The device's area, else the area most of its entities are in."""
    if area := device_area_id(hass, device):
        return area
    from homeassistant.helpers import entity_registry as er

    areas = [e.area_id for e in er.async_entries_for_device(er.async_get(hass), device.id) if e.area_id]
    return max(set(areas), key=areas.count) if areas else None


def scanner_list(hass: HomeAssistant) -> list[dict[str, Any]]:
    """The scanners Home Assistant knows, with their Home Assistant device (for placing them in the plan)."""
    try:
        from homeassistant.components import bluetooth
    except ImportError:
        return []
    registry = dr.async_get(hass)
    out = []
    for scanner in bluetooth.async_current_scanners(hass):
        device = _scanner_device(registry, scanner)
        out.append(
            {
                "source": scanner.source,
                "name": (device.name_by_user or device.name) if device else scanner.name.split(" (")[0],
                "kind": "shelly"
                if "Shelly" in type(scanner).__name__
                else "esphome"
                if "ESPHome" in type(scanner).__name__
                else "other",
                "device_id": device.id if device else None,
                "area_id": _device_area(hass, device) if device else None,
                "scanning": bool(getattr(scanner, "scanning", True)),
            }
        )
    return out
