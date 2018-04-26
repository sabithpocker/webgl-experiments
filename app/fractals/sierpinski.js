import { resize } from '../resize'
import { clearCanvas } from '../clear-canvas'
// Drawing utils
import { drawTriangle } from '../draw-triangle'

// WebGL Context
import { gl } from '../gl.js'

import { simpleShader, initSimpleProgram } from '../shaders/simple-program'
import { getEquilateralPoints } from './utils/get-equilateral-points'
import { getChildTrianglePoints } from './utils/get-child-trangle-points'

export function Sierpinski () {
  resize(gl)
  clearCanvas([0, 0, 0, 0])
  initSimpleProgram()
  const width = gl.canvas.width
  const height = gl.canvas.height
  const side = Math.min(width, height) - 100
  const altitude = (Math.sqrt(3) / 2) * side
  const center = { x: width / 2, y: altitude / 2 }
  const points = getEquilateralPoints(center, side)
  const childPoints = getChildTrianglePoints(points, 7)
  childPoints.forEach(points => drawTriangle(simpleShader, ...points))
}
