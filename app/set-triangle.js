export function setTriangle(gl, x1, y1, x2, y2, x3, y3){
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
		x1, y1,
		x2, y2,
		x3, y3
		]), gl.STATIC_DRAW);
}