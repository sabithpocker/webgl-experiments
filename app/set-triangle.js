import { gl } from './gl'
/**
 * Sets buffer data from triangle co-ordinates
 * @param {*} gl reference to webGL context
 * @param {*} x1 x of point 1
 * @param {*} y1 y of point 1
 * @param {*} x2 x of point 2
 * @param {*} y2 y of point 2
 * @param {*} x3 x of point 3
 * @param {*} y3 y of point 3
 */
export function setTriangle (x1, y1, x2, y2, x3, y3) {
  console.log(gl, 'here')
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    x1, y1,
    x2, y2,
    x3, y3
  ]), gl.STATIC_DRAW)
}
