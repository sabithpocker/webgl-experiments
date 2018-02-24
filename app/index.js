import { resize } from './resize'
import { clearCanvas } from './clear-canvas'
// Drawing utils
import { drawTriangle } from './draw-triangle'

// WebGL Context
import { gl } from './gl.js'

import { simpleShader, initSimpleProgram } from './shaders/simple-program'

// RENDERING
resize(gl)
clearCanvas()

// Use the simple webgl shader program to draw the triangle.
initSimpleProgram()

const points = [
  10, 10,
  3200, 10,
  1600, 1800
]

drawTriangle(simpleShader, ...points)
