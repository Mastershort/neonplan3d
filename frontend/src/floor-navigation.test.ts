import assert from "node:assert/strict";
import { test } from "node:test";
import { floorNavigationGroup, floorNavigationGroups } from "./floor-navigation.ts";
import { newFloor } from "./model.ts";

test("five physical elevations can have three navigation names without changing the model", () => {
  const floors = [
    { ...newFloor("cellar", "Cellar", -3), navigation_group: "Lower level" },
    { ...newFloor("raised", "Raised lower floor", -1.5), navigation_group: "Lower level" },
    newFloor("main", "Main floor", 0),
    { ...newFloor("suite", "Mezzanine", 1.5), navigation_group: "Upper level" },
    { ...newFloor("upper", "Upper floor", 3), navigation_group: "Upper level" },
  ];
  const before = structuredClone(floors);
  const groups = floorNavigationGroups(floors);
  assert.deepEqual(groups.map((g) => [g.name, g.floors.map((f) => f.id)]), [
    ["Lower level", ["cellar", "raised"]], ["Main floor", ["main"]], ["Upper level", ["suite", "upper"]],
  ]);
  assert.equal(floorNavigationGroup(floors, "raised")?.id, "cellar");
  assert.equal(floorNavigationGroup(floors, "upper")?.name, "Upper level");
  assert.deepEqual(floors, before);
});

test("ungrouped floors retain their ids, order and names, even when names coincide", () => {
  const floors = [newFloor("a", "Floor", 0), { ...newFloor("b", "Floor", 3), navigation_group: "   " }];
  assert.deepEqual(floorNavigationGroups(floors).map((g) => [g.id, g.name]), [["a", "Floor"], ["b", "Floor"]]);
  assert.equal(floorNavigationGroup(floors, null), undefined);
  assert.equal(floorNavigationGroup(floors, "deleted"), undefined);
});

test("a named group does not collide with a physical floor name and can survive removal of its first member", () => {
  const floors = [newFloor("a", "Upper", 0), { ...newFloor("b", "B", 2), navigation_group: " Upper " },
    { ...newFloor("c", "C", 3), navigation_group: "Upper" }];
  assert.equal(floorNavigationGroups(floors).length, 2);
  assert.equal(floorNavigationGroup(floors.filter((f) => f.id !== "b"), "c")?.id, "c");
  assert.deepEqual(floorNavigationGroups([]), []);
});

test("a group's navigation anchor stays at its lowest physical floor when editor order changes", () => {
  const low = { ...newFloor("low", "Low", -1.5), navigation_group: "One level" };
  const high = { ...newFloor("high", "High", 0), navigation_group: "One level" };
  assert.equal(floorNavigationGroups([high, low])[0].id, "low");
  assert.equal(floorNavigationGroup([low, high], "high")?.id, "low");
});
