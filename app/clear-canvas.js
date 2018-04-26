import { gl } from './gl'

export function clearCanvas (color = [0, 0, 0, 0]) {
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
  // Clear the canvas
  gl.clearColor(...color)
  gl.clear(gl.COLOR_BUFFER_BIT)
}
