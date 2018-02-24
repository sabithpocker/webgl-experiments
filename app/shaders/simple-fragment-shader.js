import {gl} from '../gl'
import { fragmentShaderSource } from './fragment-shader-source'
import { createShader } from '../create-shader'

export const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource)
