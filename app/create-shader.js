export function createShader(gl, type, source) {
	var shader = gl.createShader(type);
	gl.shaderSource(shader, source);
	gl.compileShader(shader);
	var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
	if (success) {
	return shader;
	}
	console.log("Create Shader ERROR: ", gl.getShaderInfoLog(shader));
	gl.deleteShader(shader);
}

