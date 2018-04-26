import { Sierpinski } from './sierpinski.js'
import { KochCode } from './koch-code.js'
import { KochSnowflake } from './koch-snowflake.js'
import { KochSnowinverse } from './koch-snowinverse.js'

export class FractalShowCase {
  constructor () {
    this.sierpinski = Sierpinski
    this.kochCode = KochCode
    this.kochSnowflake = KochSnowflake
    this.kochSnowinverse = KochSnowinverse
  }
  setupLinks () {
    document.querySelector('#sierpinski').addEventListener('click', e => { this.sierpinski(); e.preventDefault() })
    document.querySelector('#kochcode').addEventListener('click', e => { this.kochCode(); e.preventDefault() })
    document.querySelector('#kochsnowflake').addEventListener('click', e => { this.kochSnowflake(); e.preventDefault() })
    document.querySelector('#kochsnowinverse').addEventListener('click', e => { this.kochSnowinverse(); e.preventDefault() })
  }
}
