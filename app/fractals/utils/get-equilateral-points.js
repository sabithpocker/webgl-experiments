export function getEquilateralPoints (center, side) {
  return [
    center.x, center.y + ((Math.sqrt(3) / 3) * side),
    center.x - (side / 2), center.y - ((Math.sqrt(3) / 6) * side),
    center.x + (side / 2), center.y - ((Math.sqrt(3) / 6) * side)
  ]
}
