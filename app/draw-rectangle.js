import { gl } from './gl'
import { renderRectangle } from './render-rectangle'
import { setRectangle } from './set-rectangle'
/**
 *
 * @param {*} x1 x of point 1
 * @param {*} y1 y of point 1
 * @param {*} x2 x of point 2
 * @param {*} y2 y of point 2
 * @param {*} x3 x of point 3
 * @param {*} y3 y of point 3
 */
export function drawRectangle (shader, x, y, width, height) {
  setRectangle(x, y, width, height)

  // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
  const size = 2 // 2 components per iteration
  const type = gl.FLOAT // the data is 32bit floats
  const normalize = false // don't normalize the data
  const stride = 0 // 0 = move forward size * sizeof(type) each iteration to get the next position
  const offset = 0 // start at the beginning of the buffer
  gl.vertexAttribPointer(shader.positionAttributeLocation, size, type, normalize, stride, offset)

  renderRectangle(gl)
}
