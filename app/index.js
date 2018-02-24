import { resize } from './resize'
import { clearCanvas } from './clear-canvas'
// Drawing utils
import { drawTriangle } from './draw-triangle'

// WebGL Context
import { gl } from './gl.js'

import { simpleShader, initSimpleProgram } from './shaders/simple-program'
import { drawRectangle } from './draw-rectangle';

// RENDERING
resize(gl)
clearCanvas()

// Use the simple webgl shader program to draw the triangle.
initSimpleProgram()

const points = [
  10, 10,
  200, 10,
  600, 800
]

drawTriangle(simpleShader, ...points)
drawRectangle(simpleShader, 10, 10, 1000, 1000)
