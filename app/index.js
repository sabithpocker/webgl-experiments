import { Welcome } from './welcome.js'
import { FractalShowCase } from './fractals/fractal-showcase.class.js'

const init = () => {
  Welcome()
  const showCase = new FractalShowCase()
  showCase.setupLinks()
}

window.onload = init
