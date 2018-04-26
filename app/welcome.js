import { resize } from './resize'
import { clearCanvas } from './clear-canvas'

// WebGL Context
import { gl } from './gl.js'

import { initSimpleProgram } from './shaders/simple-program'

export function Welcome () {
  resize(gl)
  clearCanvas([0, 0, 0, 0])
  initSimpleProgram()
}
