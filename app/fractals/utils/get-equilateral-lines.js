export function getEquilateralLines (center, side, reverse = false) {
  const Ax = center.x
  const Ay = center.y + ((Math.sqrt(3) / 3) * side)
  const Bx = center.x - (side / 2)
  const By = center.y - ((Math.sqrt(3) / 6) * side)
  const Cx = center.x + (side / 2)
  const Cy = center.y - ((Math.sqrt(3) / 6) * side)
  return reverse ? [[
    Ax, Ay,
    Bx, By
  ], [
    Bx, By,
    Cx, Cy
  ], [
    Cx, Cy,
    Ax, Ay
  ]] : [[
    Ax, Ay,
    Cx, Cy
  ], [
    Cx, Cy,
    Bx, By
  ], [
    Bx, By,
    Ax, Ay
  ]]
}
