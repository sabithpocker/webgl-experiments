import { getDisplay } from './get-display'
import { getWebGLContext } from './get-webgl-context'
/**
 * Gets the WebGL Contexts and exports the reference
*/
export const gl = getWebGLContext(getDisplay())
