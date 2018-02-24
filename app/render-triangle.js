export function renderTriangle (gl) {
  var primitiveType = gl.TRIANGLES
  var offset = 0
  var count = 3
  gl.drawArrays(primitiveType, offset, count)
}
