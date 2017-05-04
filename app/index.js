import { getDisplay } from './get-display';
import { resize } from './resize';
import { createShader } from './create-shader';
import { createProgram } from './create-program';
import { getWebGLContext } from './get-webgl-context';
import { vertexShaderSource } from './shaders/vertex-shader-source.js';
import { fragmentShaderSource } from './shaders/fragment-shader-source.js';
import { setRectangle } from './set-rectangle';
import { setTriangle } from './set-triangle';
import { renderTriangle } from './render-triangle';

var gl = getWebGLContext(getDisplay());
console.log(gl);
var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
var program = createProgram(gl, vertexShader, fragmentShader);

var positionAttributeLocation = gl.getAttribLocation(program, "a_position");
var resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
var colorUniformLocation = gl.getUniformLocation(program, "u_color");

var positionBuffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);



//RENDERING
resize(gl);
gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
// Clear the canvas
gl.clearColor(0, 0, 0, 0);
gl.clear(gl.COLOR_BUFFER_BIT);

gl.useProgram(program);

// set the resolution
gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);
// Set a random color.
gl.uniform4f(colorUniformLocation, 1, 0, 0, 1);
gl.enableVertexAttribArray(positionAttributeLocation);
// Bind the position buffer.
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

//setRectangle(gl,600,600,100,100);
setTriangle(gl, 10,10, 2700,10, 1000,800);

// Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
var size = 2;          // 2 components per iteration
var type = gl.FLOAT;   // the data is 32bit floats
var normalize = false; // don't normalize the data
var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
var offset = 0;        // start at the beginning of the buffer
gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset)

renderTriangle(gl);