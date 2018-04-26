export function getWebGLContext (canvas) {
  const gl = canvas.getContext('webgl', {
    antialias: true
  })
  if (!gl) {
    console.log('WEBGL not available')
  }
  return gl
}
