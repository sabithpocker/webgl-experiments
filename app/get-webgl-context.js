export function getWebGLContext (canvas) {
  const gl = canvas.getContext('webgl')
  if (!gl) {
    console.log('WEBGL not available')
  }
  return gl
}
