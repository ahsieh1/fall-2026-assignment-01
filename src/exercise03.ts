export function getInventoryValue(
  inventory: Array<[string, number, number]>,
): number {
  return inventory.reduce((total, item) => {
    return total + (item[1] * item[2]);
  }, 0);
}
