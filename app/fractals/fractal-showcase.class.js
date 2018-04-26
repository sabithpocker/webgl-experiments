import { Sierpinski } from './sierpinski.js'
import { KochCode } from './koch-code.js'

export class FractalShowCase {
  constructor () {
    this.sierpinski = Sierpinski
    this.kochCode = KochCode
  }
  setupLinks () {
    document.querySelector('#sierpinski').addEventListener('click', e => { this.sierpinski(); e.preventDefault() })
    document.querySelector('#kochcode').addEventListener('click', e => { this.kochCode(); e.preventDefault() })
  }
}
