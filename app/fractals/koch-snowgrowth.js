import { resize } from '../resize'
import { clearCanvas } from '../clear-canvas'
// Drawing utils
import { drawLine } from '../draw-line.js'

// WebGL Context
import { gl } from '../gl.js'

import { simpleShader, initSimpleProgram } from '../shaders/simple-program'
import { getChildLinePoints } from './utils/get-child-line-points'
import { getEquilateralLines } from './utils/get-equilateral-lines'

export function KochSnowgrowth () {
  resize(gl)
  clearCanvas([0, 0, 0, 0])
  initSimpleProgram()
  const width = gl.canvas.width
  const height = gl.canvas.height
  const center = { x: width / 2, y: height / 2 }
  const side = Math.min(width, height) * (2 / 3)
  const points = getEquilateralLines(center, side)
  const childPoints = [0, 1, 2, 3, 4].reduce((a, i) => [...a, ...points.reduce((acc, point) => [...acc, ...getChildLinePoints(point, i)], [])], [])
  console.log(childPoints)
  childPoints.forEach(x => drawLine(simpleShader, ...x))
}
