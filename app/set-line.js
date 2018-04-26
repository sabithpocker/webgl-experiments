import { gl } from './gl'
/**
 * Sets buffer data from line co-ordinates
 * @param {*} gl reference to webGL context
 * @param {*} x1 x of point 1
 * @param {*} y1 y of point 1
 * @param {*} x2 x of point 2
 * @param {*} y2 y of point 2
 */
export function setLine (x1, y1, x2, y2) {
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    x1, y1,
    x2, y2
  ]), gl.STATIC_DRAW)
}
