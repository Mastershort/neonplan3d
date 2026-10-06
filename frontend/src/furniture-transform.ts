/** Extra local X/Z rotations applied before the existing plan rotation (Y). Angles are degrees. */
export interface FurniturePose {
  x: number;
  z: number;
  rotation?: number;
  rotation_x?: number;
  rotation_z?: number;
}

/** Transform already yawed world coordinates around the item's centre at pivotY. */
export function furnitureTransform(f: FurniturePose, pivotY: number): (x: number, y: number, z: number) => [number, number, number] {
  const rx = (f.rotation_x ?? 0) * Math.PI / 180;
  const rz = (f.rotation_z ?? 0) * Math.PI / 180;
  if (!rx && !rz) return (x, y, z) => [x, y, z];
  const a = (f.rotation ?? 0) * Math.PI / 180;
  const c = Math.cos(a), s = Math.sin(a);
  const cx = Math.cos(rx), sx = Math.sin(rx), cz = Math.cos(rz), sz = Math.sin(rz);
  return (x, y, z) => {
    const dx = x - f.x, dz = z - f.z;
    const lx = dx * c + dz * s;
    const ly = y - pivotY;
    const lz = -dx * s + dz * c;
    const yy = ly * cx - lz * sx;
    const zz = ly * sx + lz * cx;
    const xx = lx * cz - yy * sz;
    const y2 = lx * sz + yy * cz;
    return [f.x + xx * c - zz * s, pivotY + y2, f.z + xx * s + zz * c];
  };
}

/** Rotate just the newly appended vertices; winding and UVs are preserved by this rigid transform. */
export function rotateFurniturePositions(positions: number[], from: number, f: FurniturePose, pivotY: number): void {
  if (!f.rotation_x && !f.rotation_z) return;
  const P = furnitureTransform(f, pivotY);
  for (let i = from; i < positions.length; i += 3) {
    const [x, y, z] = P(positions[i], positions[i + 1], positions[i + 2]);
    positions[i] = x;
    positions[i + 1] = y;
    positions[i + 2] = z;
  }
}
