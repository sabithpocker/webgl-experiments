export function getChildTrianglePoints (points, depth = 0) {
  if (depth === 0) {
    return [[
      points[0], points[1],
      (points[0] + points[2]) / 2, (points[1] + points[3]) / 2,
      (points[0] + points[4]) / 2, (points[1] + points[5]) / 2
    ], [
      points[2], points[3],
      (points[0] + points[2]) / 2, (points[1] + points[3]) / 2,
      (points[2] + points[4]) / 2, (points[3] + points[5]) / 2
    ], [
      points[4], points[5],
      (points[0] + points[4]) / 2, (points[1] + points[5]) / 2,
      (points[2] + points[4]) / 2, (points[3] + points[5]) / 2
    ]]
  } else {
    const xpoints = [...getChildTrianglePoints(points, depth - 1)]
    return xpoints.reduce((acc, point) => [...acc, ...getChildTrianglePoints(point)], [])
  }
}
