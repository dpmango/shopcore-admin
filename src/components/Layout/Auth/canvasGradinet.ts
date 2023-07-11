export function generateRandomShader(canvasId: string) {
  try {
    // Get the canvas element
    const canvas = document.getElementById(canvasId) as any

    // Set the canvas width and height
    const width = canvas.width
    const height = canvas.height

    // Get the canvas context
    const gl = canvas.getContext('webgl')

    // Generate a random shader
    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `
    const fragmentShaderSource = `
      precision mediump float;
      uniform vec2 resolution;
      uniform float time;
      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        gl_FragColor = vec4(uv, 0.5 + 0.5 * sin(time), 1.0);
      }
    `

    // Create the vertex shader
    const vertexShader = gl.createShader(gl.VERTEX_SHADER)
    gl.shaderSource(vertexShader, vertexShaderSource)
    gl.compileShader(vertexShader)

    // Create the fragment shader
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(fragmentShader, fragmentShaderSource)
    gl.compileShader(fragmentShader)

    // Create the shader program
    const shaderProgram = gl.createProgram()
    gl.attachShader(shaderProgram, vertexShader)
    gl.attachShader(shaderProgram, fragmentShader)
    gl.linkProgram(shaderProgram)
    gl.useProgram(shaderProgram)

    // Set the position attribute
    const positionAttributeLocation = gl.getAttribLocation(shaderProgram, 'position')
    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    const positions = [-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0]
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)
    gl.enableVertexAttribArray(positionAttributeLocation)
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0)

    // Set the resolution uniform
    const resolutionUniformLocation = gl.getUniformLocation(shaderProgram, 'resolution')
    gl.uniform2f(resolutionUniformLocation, width, height)

    // Set the time uniform
    const timeUniformLocation = gl.getUniformLocation(shaderProgram, 'time')

    // Render the shader
    let time = 0
    const render = () => {
      time += 0.01
      gl.uniform1f(timeUniformLocation, time)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      requestAnimationFrame(render)
    }
    requestAnimationFrame(render)
  } catch (error) {
    console.error(error)
  }
}
