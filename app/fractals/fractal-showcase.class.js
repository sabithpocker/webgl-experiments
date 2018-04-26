import { Sierpinski } from './sierpinski.js'
import { KochCode } from './koch-code.js'
import { KochSnowflake } from './koch-snowflake.js'
import { KochSnowgrowth } from './koch-snowgrowth.js'
import { KochSnowinverse } from './koch-snowinverse.js'

export class FractalShowCase {
  constructor () {
    this.sierpinski = Sierpinski
    this.kochCode = KochCode
    this.kochSnowflake = KochSnowflake
    this.kochSnowgrowth = KochSnowgrowth
    this.kochSnowinverse = KochSnowinverse
  }
  setupLinks () {
    document.querySelector('#sierpinski').addEventListener('click', e => { this.sierpinski(); e.preventDefault() })
    document.querySelector('#kochcode').addEventListener('click', e => { this.kochCode(); e.preventDefault() })
    document.querySelector('#kochsnowflake').addEventListener('click', e => { this.kochSnowflake(); e.preventDefault() })
    document.querySelector('#kochsnowinverse').addEventListener('click', e => { this.kochSnowinverse(); e.preventDefault() })
    document.querySelector('#kochsnowinverseg').addEventListener('click', e => { this.kochSnowinverse(true); e.preventDefault() })
    document.querySelector('#kochsnowgrowth').addEventListener('click', e => { this.kochSnowgrowth(); e.preventDefault() })
  }
}
