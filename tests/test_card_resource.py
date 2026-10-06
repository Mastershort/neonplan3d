"""The card bundle is kept in the dashboard resources (#252)."""

from __future__ import annotations

from types import SimpleNamespace
from typing import Any

from custom_components.neonplan3d.card_resource import async_ensure_card_resource, async_remove_card_resource


class FakeResources:
    """The parts of Lovelace's ResourceStorageCollection we use."""

    def __init__(self, items: list[dict[str, Any]]) -> None:
        self.items = items

    async def async_get_info(self) -> dict[str, int]:
        return {"resources": len(self.items)}

    def async_items(self) -> list[dict[str, Any]]:
        return self.items

    async def async_create_item(self, data: dict[str, Any]) -> dict[str, Any]:
        item = {"id": f"r{len(self.items)}", "type": data["res_type"], "url": data["url"]}
        self.items.append(item)
        return item

    async def async_update_item(self, item_id: str, updates: dict[str, Any]) -> dict[str, Any]:
        item = next(i for i in self.items if i["id"] == item_id)
        item.update({"type": updates["res_type"], "url": updates["url"]})
        return item

    async def async_delete_item(self, item_id: str) -> None:
        self.items = [i for i in self.items if i["id"] != item_id]


URL = "/neonplan3d_static/neonplan3d.js?v=1.12.4-abc"


async def test_added_updated_and_removed() -> None:
    """Added once, older copies point to the current bundle, other resources stay, removal takes only ours."""
    other = {"id": "x", "type": "module", "url": "/hacsfiles/button-card/button-card.js"}
    res = FakeResources([dict(other)])
    hass = SimpleNamespace(data={"lovelace": SimpleNamespace(resources=res)})
    await async_ensure_card_resource(hass, URL)
    assert [i["url"] for i in res.items] == [other["url"], URL]
    # an update and an old hand-installed copy: both lead to the current bundle, nothing is added twice
    res.items[1]["url"] = "/neonplan3d_static/neonplan3d.js?v=1.12.3-old"
    res.items.append({"id": "old", "type": "module", "url": "/local/neonplan3d.js"})
    await async_ensure_card_resource(hass, URL)
    assert [i["url"] for i in res.items] == [other["url"], URL, URL]
    await async_remove_card_resource(hass)
    assert res.items == [other]


async def test_yaml_mode_and_old_layout() -> None:
    """YAML resources are left alone; the dict layout before HA 2025.2 works too."""
    yaml = SimpleNamespace(loaded=True, async_items=lambda: [])
    await async_ensure_card_resource(SimpleNamespace(data={"lovelace": SimpleNamespace(resources=yaml)}), URL)
    res = FakeResources([])
    await async_ensure_card_resource(SimpleNamespace(data={"lovelace": {"resources": res}}), URL)
    assert [i["url"] for i in res.items] == [URL]
