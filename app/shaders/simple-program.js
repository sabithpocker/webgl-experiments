import {gl} from '../gl'
// Shader Utils
import { createProgram } from '../create-program'
// Shaders
import { vertexShader } from './simple-vertex-shader'
import { fragmentShader } from './simple-fragment-shader'

export const program = createProgram(gl, vertexShader, fragmentShader)

export const positionAttributeLocation = gl.getAttribLocation(program, 'a_position')
export const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution')
export const colorUniformLocation = gl.getUniformLocation(program, 'u_color')

export const positionBuffer = gl.createBuffer()

gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
