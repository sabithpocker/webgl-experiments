export function renderLine (gl) {
  var primitiveType = gl.LINES
  var offset = 0
  var count = 2
  gl.drawArrays(primitiveType, offset, count)
}
