import { gl } from './gl'
import { renderLine } from './render-line.js'

/**
 *
 * @param {*} x1 x of point 1
 * @param {*} y1 y of point 1
 * @param {*} x2 x of point 2
 * @param {*} y2 y of point 2
 */
export function drawLine (shader, x1, y1, x2, y2) {
  // setRectangle(gl,600,600,100,100);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    x1, y1,
    x2, y2
  ]), gl.STATIC_DRAW)

  // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
  const size = 2 // 2 components per iteration
  const type = gl.FLOAT // the data is 32bit floats
  const normalize = false // don't normalize the data
  const stride = 0 // 0 = move forward size * sizeof(type) each iteration to get the next position
  const offset = 0 // start at the beginning of the buffer
  gl.vertexAttribPointer(shader.positionAttributeLocation, size, type, normalize, stride, offset)

  renderLine(gl)
}
