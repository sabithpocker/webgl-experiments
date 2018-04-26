import { resize } from '../resize'
import { clearCanvas } from '../clear-canvas'
// Drawing utils
import { drawLine } from '../draw-line.js'

// WebGL Context
import { gl } from '../gl.js'

import { simpleShader, initSimpleProgram } from '../shaders/simple-program'
import { getChildLinePoints } from './utils/get-child-line-points'
import { getEquilateralLines } from './utils/get-equilateral-lines'

export function KochSnowinverse () {
  resize(gl)
  clearCanvas([0, 0, 0, 0])
  initSimpleProgram()
  const width = gl.canvas.width
  const height = gl.canvas.height
  const center = { x: width / 2, y: height / 2 }
  const side = Math.min(width, height) * (2 / 3)
  const points = getEquilateralLines(center, side, true)
  const childPoints = points.reduce((acc, point) => [...acc, ...getChildLinePoints(point, 4)], [])
  console.log(childPoints)
  childPoints.forEach(x => drawLine(simpleShader, ...x))
}
