export function getWebGLContext( canvas ){
	var gl = canvas.getContext("webgl");
	if (!gl) {
		console.log("WEBGL not available");
	}
	return gl;
}