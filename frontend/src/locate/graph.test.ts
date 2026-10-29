import assert from "node:assert/strict";
import { test } from "node:test";
import type { Room } from "../model.ts";
import { emptyBuilding, newFloor } from "../model.ts";
import { doorPairs, locateRooms, roomAt } from "./graph.ts";

function rect(id: string, name: string, x0: number): Room {
  return { id, name, area_id: `${id}_area`, points: [[x0, 0], [x0 + 4, 0], [x0 + 4, 3], [x0, 3]], floor_material: "wood" };
}

test("rooms carry their floor and area; a door joins the two rooms of its wall", () => {
  const b = emptyBuilding();
  const floor = { ...newFloor("eg", "EG", 0), rooms: [rect("a", "Küche", 0), rect("b", "Flur", 4), rect("c", "Bad", 8)] };
  // the shared wall of a and b is a's right edge (edge 1: from [4,0] to [4,3])
  floor.openings = [{ id: "d1", room_id: "a", edge: 1, offset: 1.5, width: 0.9, height: 2.0, type: "door", sill: 0 } as never];
  b.floors = [floor];
  assert.deepEqual(
    locateRooms(b).map((r) => [r.id, r.floor, r.area_id]),
    [["a", "EG", "a_area"], ["b", "EG", "b_area"], ["c", "EG", "c_area"]],
  );
  const pairs = doorPairs(b).map((p) => [...p].sort().join("-"));
  assert.deepEqual(pairs, ["a-b"]);
  assert.equal(roomAt(b, "eg", 9, 1), "c");
  assert.equal(roomAt(b, "eg", 20, 1), null);
});

test("an outdoor area with an area is a room for locating, joined to the room whose terrace door opens onto it (#828)", () => {
  const b = emptyBuilding();
  const floor = { ...newFloor("eg", "EG", 0), rooms: [rect("a", "Wohnen", 0)] };
  // the terrace below the room (z 3–6); a terrace door in the room's lower edge (edge 2: from [4,3] to [0,3])
  floor.outdoor = [
    { id: "t", type: "terrace", name: "Terrasse", area_id: "terrace_area", points: [[0, 3.3], [4, 3.3], [4, 6], [0, 6]] },
    { id: "l", type: "lawn", points: [[-5, -5], [10, -5], [10, 10], [-5, 10]] },
  ] as never;
  floor.openings = [{ id: "d1", room_id: "a", edge: 2, offset: 2, width: 1.2, height: 2.1, type: "door", sill: 0 } as never];
  b.floors = [floor];
  // the lawn without an area stays out
  assert.deepEqual(
    locateRooms(b).map((r) => [r.id, r.name, r.area_id]),
    [["a", "Wohnen", "a_area"], ["t", "Terrasse", "terrace_area"]],
  );
  assert.deepEqual(doorPairs(b), [["a", "t"]]);
  assert.equal(roomAt(b, "eg", 2, 5), "t");
  assert.equal(roomAt(b, "eg", 2, 1), "a");
});
