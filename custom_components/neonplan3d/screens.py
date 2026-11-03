"""The NeonPlan views open now: every panel and dashboard card that listens (voice/subscribe) tells what it shows.

The editor's card templates list them ("the kitchen tablet shows "Küche", version 2.3.0, since 7:02") and can let
one of them load its page again. Kept in memory only: a view that goes away (closed, the tablet asleep and cut off)
leaves the list with its connection.
"""

from __future__ import annotations

from collections.abc import Callable
import time
from typing import Any
import uuid

from homeassistant.core import HomeAssistant, callback

from .const import DATA_SCREENS

KINDS = ("panel", "card", "preview")


class Screens:
    """The open views by an id of their own, each with a way to call it to reload."""

    def __init__(self) -> None:
        self._open: dict[str, tuple[dict[str, Any], Callable[[dict[str, Any]], None] | None]] = {}

    @callback
    def add(self, info: dict[str, Any], reload: Callable[[dict[str, Any]], None] | None) -> str:
        key = uuid.uuid4().hex[:12]
        self._open[key] = ({**info, "id": key, "since": time.time()}, reload)
        return key

    @callback
    def remove(self, key: str) -> None:
        self._open.pop(key, None)

    @callback
    def listed(self) -> list[dict[str, Any]]:
        """The views to show (a template's preview in the editor is none), the longest open first."""
        out = [
            dict(info, reloadable=send is not None) for info, send in self._open.values() if info["kind"] != "preview"
        ]
        return sorted(out, key=lambda x: x["since"])

    @callback
    def reload(self, key: str) -> bool:
        entry = self._open.get(key)
        if not entry or entry[1] is None:
            return False
        entry[1]({"id": uuid.uuid4().hex[:12], "templates": []})
        return True


@callback
def screens_of(hass: HomeAssistant) -> Screens:
    screens = hass.data.get(DATA_SCREENS)
    if screens is None:
        screens = hass.data[DATA_SCREENS] = Screens()
    return screens
