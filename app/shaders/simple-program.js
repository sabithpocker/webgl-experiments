import {gl} from '../gl'
// Shader Utils
import { createProgram } from '../create-program'
// Shaders
import { vertexShader } from './simple-vertex-shader'
import { fragmentShader } from './simple-fragment-shader'

export const program = createProgram(gl, vertexShader, fragmentShader)

const positionAttributeLocation = gl.getAttribLocation(program, 'a_position')
const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution')
const colorUniformLocation = gl.getUniformLocation(program, 'u_color')
const positionBuffer = gl.createBuffer()

export const simpleShader = {
  program: program,
  positionAttributeLocation: positionAttributeLocation,
  resolutionUniformLocation: resolutionUniformLocation,
  colorUniformLocation: colorUniformLocation,
  positionBuffer: positionBuffer
}

export function initSimpleProgram () {
  gl.useProgram(program)
  // set the resolution
  gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height)
  // Set a random color.
  gl.uniform4f(colorUniformLocation, 0, 0, 0, 1)
  gl.enableVertexAttribArray(positionAttributeLocation)
  // Bind the position buffer.
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
}
