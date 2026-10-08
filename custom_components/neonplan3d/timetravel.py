"""Time travel (Pro): the past states of the plan's entities from Home Assistant's recorder.

One request covers at most a day (plus a margin) and a list of entities: states with their kept
attributes (see timetravel_rows.ATTR_KEEP), numeric measurements as five-minute means. The answer is
compact (columns of offsets, value indices and a value table), so a wall tablet can hold a day of a
whole house in a few hundred kilobytes.
"""

from __future__ import annotations

from datetime import datetime
import logging
from typing import Any

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant
import homeassistant.helpers.config_validation as cv
from homeassistant.util import dt as dt_util
import voluptuous as vol

from .const import DOMAIN
from .timetravel_rows import (
    ATTR_KEEP,
    MAX_SPAN,
    STAT_STEP,
    bucket,
    car_state,
    domain_of,
    entity_rows,
    has_time_travel,
    oldest_data,
    read_row,
)

_LOGGER = logging.getLogger(__name__)

# never part of the past: people and their trackers (who was where stays private)
_PRIVATE = ("person", "device_tracker")
_IDS = vol.All([cv.entity_id], vol.Length(max=1000))


def _states(
    hass: HomeAssistant, start: datetime, end: datetime, entity_ids: list[str], with_attributes: bool
) -> dict[str, list[Any]]:
    """History rows of some entities (runs in the recorder's executor)."""
    from homeassistant.components.recorder import history  # the recorder is an after_dependency

    if not entity_ids:
        return {}
    return history.get_significant_states(
        hass,
        start_time=start,
        end_time=end,
        entity_ids=entity_ids,
        include_start_time_state=True,
        # attribute changes (a dimmed light, a moving blind) count only where attributes are kept
        significant_changes_only=not with_attributes,
        minimal_response=not with_attributes,
        no_attributes=not with_attributes,
        compressed_state_format=True,
    )


def private_trackers(hass: HomeAssistant) -> set[str]:
    """The trackers of people: never replayed, not even as a car's."""
    out: set[str] = set()
    for state in hass.states.async_all("person"):
        trackers = state.attributes.get("device_trackers")
        if isinstance(trackers, list | tuple):
            out.update(t for t in trackers if isinstance(t, str))
    return out


def collect(
    hass: HomeAssistant,
    start: float,
    end: float,
    entity_ids: list[str],
    statistic_ids: list[str],
    car_trackers: list[str] | None = None,
) -> dict[str, Any]:
    """The compact answer for one window (runs in the recorder's executor).

    `car_trackers` are the cars' own trackers (Auto Pro): answered as home or away only.
    """
    from homeassistant.components.recorder import statistics  # the recorder is an after_dependency

    start_dt = dt_util.utc_from_timestamp(start)
    end_dt = dt_util.utc_from_timestamp(end)
    cars = [e for e in dict.fromkeys(car_trackers or []) if domain_of(e) == "device_tracker"]
    entity_ids = [e for e in entity_ids if domain_of(e) not in _PRIVATE]
    statistic_ids = [e for e in statistic_ids if domain_of(e) not in _PRIVATE]
    plain = [e for e in entity_ids if domain_of(e) not in ATTR_KEEP]
    rich = [e for e in entity_ids if domain_of(e) in ATTR_KEEP]

    stats: dict[str, Any] = {}
    if statistic_ids:
        found = statistics.statistics_during_period(
            hass,
            start_time=start_dt,
            end_time=end_dt,
            statistic_ids=set(statistic_ids),
            period="5minute",
            units=None,
            types={"mean"},
        )
        for entity_id, rows in found.items():
            if (stat := bucket(rows, STAT_STEP)) is not None:
                stats[entity_id] = stat
    # measurements without statistics (no state class in the recorder yet): their states instead
    plain += [e for e in statistic_ids if e not in stats and e not in plain]

    entities: dict[str, Any] = {}
    for ids, with_attributes in ((plain, False), (rich, True)):
        for entity_id, items in _states(hass, start_dt, end_dt, ids, with_attributes).items():
            if (columns := entity_rows(entity_id, items, start, end)) is not None:
                entities[entity_id] = columns

    for entity_id, items in (_states(hass, start_dt, end_dt, cars, False) if cars else {}).items():
        reduced: list[dict[str, Any]] = []
        for item in items:
            if (row := read_row(item)) is not None:
                ts, state, _ = row
                reduced.append({"s": car_state(state), "lu": ts})
        if (columns := entity_rows(entity_id, reduced, start, end)) is not None:
            entities[entity_id] = columns

    wanted = dict.fromkeys([*entity_ids, *statistic_ids, *cars])
    return {
        "day_start": start,
        "end": end,
        "oldest": oldest_data(entities, stats, start, end),
        "entities": entities,
        "stats": stats,
        "missing": [e for e in wanted if e not in entities and e not in stats],
    }


@websocket_api.websocket_command(
    {
        vol.Required("type"): "neonplan3d/timetravel/history",
        vol.Required("start_time"): vol.Coerce(float),
        vol.Required("end_time"): vol.Coerce(float),
        vol.Optional("entity_ids", default=[]): _IDS,
        vol.Optional("statistic_ids", default=[]): _IDS,
        vol.Optional("car_trackers", default=[]): _IDS,
    }
)
@websocket_api.async_response
async def ws_timetravel_history(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """The past states of the given entities between two moments (at most about a day)."""
    data = hass.data.get(DOMAIN)
    if data is None:
        connection.send_error(msg["id"], "not_loaded", "NeonPlan 3D is not set up")
        return
    if not has_time_travel(data.packs):
        connection.send_error(msg["id"], "not_unlocked", "Time travel is a Pro add-on")
        return
    start, end = msg["start_time"], msg["end_time"]
    if not 0 < end - start <= MAX_SPAN:
        connection.send_error(msg["id"], "invalid_range", f"The window must be longer than 0 and at most {MAX_SPAN} s")
        return
    if "recorder" not in hass.config.components:
        connection.send_error(msg["id"], "no_recorder", "The recorder is not running")
        return
    from homeassistant.components.recorder import get_instance  # the recorder is an after_dependency

    instance = get_instance(hass)
    # a person's own tracker stays private even when it was linked as a car's
    private = private_trackers(hass)
    cars = [e for e in msg["car_trackers"] if e not in private]
    try:
        result = await instance.async_add_executor_job(
            collect, hass, start, end, msg["entity_ids"], msg["statistic_ids"], cars
        )
    except Exception as err:  # the recorder may fail in many ways (database busy, migrating)
        _LOGGER.warning("Time travel history failed: %s", err)
        connection.send_error(msg["id"], "history_failed", str(err))
        return
    result["keep_days"] = getattr(instance, "keep_days", None)
    connection.send_result(msg["id"], result)
