import { resize } from './resize'
// Drawing utils
import { drawTriangle } from './draw-triangle'

// WebGL Context
import { gl } from './gl.js'

import { program, resolutionUniformLocation, colorUniformLocation, positionAttributeLocation, positionBuffer } from './shaders/simple-program'

// RENDERING
resize(gl)
gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
// Clear the canvas
gl.clearColor(0, 0, 0, 0)
gl.clear(gl.COLOR_BUFFER_BIT)

gl.useProgram(program)

// set the resolution
gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height)
// Set a random color.
gl.uniform4f(colorUniformLocation, 1, 0, 0, 1)
gl.enableVertexAttribArray(positionAttributeLocation)
// Bind the position buffer.
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)

drawTriangle(10, 10, 2700, 10, 1000, 800)
