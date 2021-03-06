import { resize } from '../resize'
import { clearCanvas } from '../clear-canvas'
// Drawing utils
import { drawLine } from '../draw-line.js'

// WebGL Context
import { gl } from '../gl.js'

import { simpleShader, initSimpleProgram } from '../shaders/simple-program'
import { getChildLinePoints } from './utils/get-child-line-points'

export function KochCode () {
  resize(gl)
  clearCanvas([0, 0, 0, 0])
  initSimpleProgram()
  const width = gl.canvas.width
  const margin = 100

  const points = [
    0 + margin, 0 + margin,
    width - margin, 0 + margin
  ]
  const childPoints = getChildLinePoints(points, 4)
  console.log(childPoints)
  childPoints.forEach(points => drawLine(simpleShader, ...points))
}
