import { gl } from './gl'

export function clearCanvas () {
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
  // Clear the canvas
  gl.clearColor(0, 0, 0, 0)
  gl.clear(gl.COLOR_BUFFER_BIT)
}
