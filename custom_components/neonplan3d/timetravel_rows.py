"""Time travel: turning recorder rows into the compact answer the frontend replays.

Pure functions without Home Assistant imports, so they can be tested on their own.
"""

from __future__ import annotations

from collections.abc import Iterable, Mapping
from datetime import datetime
import json
from typing import Any

# The longest window one request may ask for (a day plus some margin).
MAX_SPAN = 26 * 3600
# Rows kept per entity and day: every change of the state stays, attribute-only rows are thinned out.
MAX_ROWS = 1500
STAT_STEP = 300

# Domains whose attributes matter for the 3D view, with the attributes that are kept (everything else
# - pictures, positions of media, forecasts - stays out of the answer).
ATTR_KEEP: dict[str, tuple[str, ...]] = {
    "light": ("brightness", "color_mode", "rgb_color", "color_temp_kelvin"),
    "cover": ("current_position", "current_tilt_position"),
    "climate": ("hvac_action", "current_temperature", "temperature"),
    "media_player": ("media_title", "media_artist", "app_name", "source", "volume_level"),
    "weather": ("cloud_coverage", "wind_speed", "wind_speed_unit"),
    # the room a robot reports (some integrations only have it as an attribute)
    "vacuum": ("current_room",),
    "fan": (),
    "alarm_control_panel": (),
    "lock": (),
    "water_heater": (),
}

Value = str | list[Any]


def domain_of(entity_id: str) -> str:
    """The domain of an entity id ("light" of "light.kitchen")."""
    return entity_id.split(".", 1)[0]


def _number(value: Any) -> float | None:
    if isinstance(value, bool) or not isinstance(value, int | float):
        return None
    return float(value)


def quantise(key: str, value: Any) -> Any:
    """Round an attribute so that noise does not count as a change (brightness 2 %, 50 K, 1 %, volume 5 %)."""
    if key == "rgb_color":
        if isinstance(value, list | tuple) and all(_number(c) is not None for c in value):
            return [round(c) for c in value]
        return None
    number = _number(value)
    if number is None:
        return value
    if key == "brightness":
        return max(0, min(255, round(round(number / 255 * 50) * 2 * 255 / 100)))
    if key == "color_temp_kelvin":
        return round(number / 50) * 50
    if key in ("current_position", "current_tilt_position", "cloud_coverage"):
        return round(number)
    if key == "volume_level":
        return round(round(number * 20) / 20, 2)
    if key in ("current_temperature", "temperature", "wind_speed"):
        return round(number, 1)
    return value


def reduce_attributes(domain: str, attributes: Mapping[str, Any] | None) -> dict[str, Any]:
    """The kept attributes of a row, rounded; missing and empty ones are left out."""
    if not attributes:
        return {}
    out: dict[str, Any] = {}
    for key in ATTR_KEEP.get(domain, ()):
        value = attributes.get(key)
        if value is None:
            continue
        value = quantise(key, value)
        if value is not None:
            out[key] = value
    return out


def _timestamp(value: Any) -> float | None:
    if isinstance(value, datetime):
        return value.timestamp()
    if isinstance(value, int | float) and not isinstance(value, bool):
        return float(value)
    if isinstance(value, str):
        try:
            return datetime.fromisoformat(value).timestamp()
        except ValueError:
            return None
    return None


def read_row(item: Any) -> tuple[float, str, Mapping[str, Any] | None] | None:
    """Time, state and attributes of one history row, whatever form the recorder answered in.

    Compressed rows ({"s", "a", "lu", "lc"}), minimal rows ({"state", "last_changed"}) and State
    objects are all understood; a row without a time or a state is skipped.
    """
    if isinstance(item, Mapping):
        if "s" in item:
            ts = _timestamp(item.get("lu", item.get("lc")))
            state = item.get("s")
            attrs = item.get("a")
        else:
            ts = _timestamp(item.get("last_updated", item.get("last_changed")))
            state = item.get("state")
            attrs = item.get("attributes")
    else:
        ts = _timestamp(getattr(item, "last_updated", None) or getattr(item, "last_changed", None))
        state = getattr(item, "state", None)
        attrs = getattr(item, "attributes", None)
    if ts is None or state is None:
        return None
    return ts, str(state), attrs if isinstance(attrs, Mapping) else None


def row_value(domain: str, state: str, attributes: Mapping[str, Any] | None) -> Value:
    """The value of a row: the state alone, or the state with its kept attributes."""
    kept = reduce_attributes(domain, attributes) if domain in ATTR_KEEP else {}
    return [state, kept] if kept else state


def _key(value: Value) -> str:
    return value if isinstance(value, str) else json.dumps(value, sort_keys=True, separators=(",", ":"))


def _state(value: Value) -> str:
    return value if isinstance(value, str) else str(value[0])


def dedupe(rows: Iterable[tuple[float, Value]]) -> list[tuple[float, Value]]:
    """Rows in time order with a repeated value (the same state and attributes as before) dropped."""
    out: list[tuple[float, Value]] = []
    last: str | None = None
    for ts, value in sorted(rows, key=lambda r: r[0]):
        key = _key(value)
        if key == last:
            continue
        out.append((ts, value))
        last = key
    return out


def cap_rows(rows: list[tuple[float, Value]], limit: int = MAX_ROWS) -> list[tuple[float, Value]]:
    """At most `limit` rows: every change of the state stays, attribute-only changes are thinned out evenly."""
    if len(rows) <= limit:
        return rows
    edges = [i for i, (_, v) in enumerate(rows) if i == 0 or _state(v) != _state(rows[i - 1][1])]
    keep = set(edges)
    others = [i for i in range(len(rows)) if i not in keep]
    room = max(0, limit - len(keep))
    if room and others:
        stride = len(others) / room
        keep.update(others[int(k * stride)] for k in range(min(room, len(others))))
    return [rows[i] for i in sorted(keep)]


def columnar(rows: list[tuple[float, Value]], start: float) -> dict[str, list[Any]]:
    """Rows as columns: seconds after the start, an index per row and the table of distinct values."""
    table: list[Value] = []
    index: dict[str, int] = {}
    times: list[int] = []
    values: list[int] = []
    for ts, value in rows:
        key = _key(value)
        if key not in index:
            index[key] = len(table)
            table.append(value)
        times.append(max(0, round(ts - start)))
        values.append(index[key])
    return {"t": times, "v": values, "tab": table}


def entity_rows(entity_id: str, items: Iterable[Any], start: float, end: float) -> dict[str, list[Any]] | None:
    """The compact rows of one entity between start and end (None when it has none)."""
    domain = domain_of(entity_id)
    rows: list[tuple[float, Value]] = []
    for item in items:
        row = read_row(item)
        if row is None:
            continue
        ts, state, attrs = row
        if ts > end:
            continue
        rows.append((max(ts, start), row_value(domain, state, attrs)))
    rows = cap_rows(dedupe(rows))
    return columnar(rows, start) if rows else None


def bucket(rows: Iterable[Mapping[str, Any]], step: int = STAT_STEP) -> dict[str, Any] | None:
    """Five-minute statistics as one start, a step and the means (null where a slot has none)."""
    slots: dict[float, float] = {}
    for row in rows:
        ts = _timestamp(row.get("start"))
        # older recorders answered in milliseconds
        if ts is not None and ts > 1e11:
            ts /= 1000
        mean = _number(row.get("mean"))
        if ts is not None and mean is not None:
            slots[ts] = mean
    if not slots:
        return None
    first = min(slots)
    count = round((max(slots) - first) / step) + 1
    means: list[float | None] = [None] * count
    for ts, mean in slots.items():
        means[round((ts - first) / step)] = round(mean, 3)
    return {"start": first, "step": step, "mean": means}


def oldest_data(
    entities: Mapping[str, Mapping[str, list[Any]]], stats: Mapping[str, Mapping[str, Any]], start: float, end: float
) -> float | None:
    """Where the recorder's data begins in the window; None when it reaches back before the start."""
    firsts: list[float] = []
    for rows in entities.values():
        if rows["t"]:
            if rows["t"][0] == 0:
                return None
            firsts.append(start + rows["t"][0])
    for stat in stats.values():
        if stat["start"] <= start + stat["step"]:
            return None
        firsts.append(stat["start"])
    return min(firsts) if firsts else end


def car_state(state: str) -> str:
    """A car's tracker as home or away only: the zone or place it is in stays private."""
    return state if state in ("home", "unavailable", "unknown") else "not_home"


def has_time_travel(packs: Iterable[Mapping[str, Any]]) -> bool:
    """Whether an installed pack unlocks the time travel."""
    return any("time_travel" in (pack.get("features") or []) for pack in packs)
