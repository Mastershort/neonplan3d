import type { Floor } from "./model.ts";

export interface FloorNavigationGroup {
  /** A real floor id, so existing links and card configurations still work. */
  id: string;
  name: string;
  floors: Floor[];
}

/** Navigation only: never merge room records or change physical elevations. */
export function floorNavigationGroups(floors: readonly Floor[]): FloorNavigationGroup[] {
  const groups = new Map<string, FloorNavigationGroup>();
  for (const floor of floors) {
    const name = floor.navigation_group?.trim();
    const key = name ? `group:${name}` : `floor:${floor.id}`;
    const group = groups.get(key);
    if (group) group.floors.push(floor);
    else groups.set(key, { id: floor.id, name: name || floor.name, floors: [floor] });
  }
  return [...groups.values()].map((g) => ({
    ...g, id: g.floors.reduce((a, b) => b.elevation < a.elevation ? b : a).id,
  }));
}

export function floorNavigationGroup(floors: readonly Floor[], id: string | null | undefined): FloorNavigationGroup | undefined {
  return id ? floorNavigationGroups(floors).find((g) => g.floors.some((f) => f.id === id)) : undefined;
}
