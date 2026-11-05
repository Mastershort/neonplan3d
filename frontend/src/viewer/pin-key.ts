/**
 * The key of a device's pin: an entity placed on its own has one pin, but several furniture items on one entity
 * (two radiators on one thermostat, #932; copies of an awning, #688) each keep a pin of their own.
 */
export function pinKey(d: { id: string; furnitureId?: string }): string {
  return d.furnitureId ? `${d.id}@${d.furnitureId}` : d.id;
}
