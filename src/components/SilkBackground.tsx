import { useEffect, useRef } from 'react'

interface SilkBackgroundProps {
  hue?: number
  saturation?: number
  brightness?: number
  speed?: number
  className?: string
}

const SilkBackground = ({
  hue = 300,
  saturation = 0.5,
  brightness = 1,
  speed = 1,
  className = '',
}: SilkBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosRef = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null
    if (!gl) {
      console.warn('WebGL not supported')
      return
    }

    // Mouse tracking for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = {
        x: e.clientX / window.innerWidth,
        y: 1.0 - e.clientY / window.innerHeight, // Flip Y
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Vertex shader source
    const vertexShaderSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        v_uv = a_position * 0.5 + 0.5;
      }
    `

    // Fragment shader source - Silk effect
    const fragmentShaderSource = `
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_hue;
      uniform float u_saturation;
      uniform float u_brightness;
      uniform float u_speed;
      varying vec2 v_uv;

      // Noise function
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }

      // Smooth noise
      float smoothNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        
        float a = noise(i);
        float b = noise(i + vec2(1.0, 0.0));
        float c = noise(i + vec2(0.0, 1.0));
        float d = noise(i + vec2(1.0, 1.0));
        
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      // Fractal noise
      float fractalNoise(vec2 p) {
        float value = 0.0;
        float amplitude = 0.5;
        float frequency = 1.0;
        
        for (int i = 0; i < 4; i++) {
          value += amplitude * smoothNoise(p * frequency);
          frequency *= 2.0;
          amplitude *= 0.5;
        }
        
        return value;
      }

      // HSV to RGB conversion
      vec3 hsv2rgb(vec3 c) {
        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
      }

      void main() {
        vec2 uv = v_uv;
        vec2 mouseOffset = (u_mouse - 0.5) * 0.1;
        uv += mouseOffset;
        
        float t = u_time * u_speed;
        
        // Create silk-like waves
        vec2 p = uv * 3.0;
        p += vec2(sin(t * 0.3), cos(t * 0.2)) * 0.5;
        
        // Combine multiple noise layers for silk texture
        float n1 = fractalNoise(p + vec2(t * 0.1, t * 0.15));
        float n2 = fractalNoise(p * 2.0 + vec2(t * 0.2, -t * 0.1));
        float n3 = fractalNoise(p * 4.0 + vec2(-t * 0.15, t * 0.25));
        
        // Create flowing silk pattern
        float pattern = sin((n1 + n2 * 0.5) * 3.14159) * 0.5 + 0.5;
        pattern = mix(pattern, n3, 0.3);
        
        // Add depth with distance-based distortion
        vec2 dist = uv - 0.5;
        float distFactor = length(dist);
        pattern += sin(distFactor * 10.0 - t * 0.5) * 0.1;
        
        // Apply color
        float hueValue = u_hue / 360.0;
        vec3 color = hsv2rgb(vec3(hueValue, u_saturation, pattern * u_brightness));
        
        // Add subtle highlights
        float highlight = smoothNoise(p * 8.0 + t * 0.3) * 0.2;
        color += highlight;
        
        gl_FragColor = vec4(color, 1.0);
      }
    `

    // Compile shader
    const compileShader = (source: string, type: number): WebGLShader | null => {
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER)
    const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER)
    if (!vertexShader || !fragmentShader) return

    // Create program
    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program))
      return
    }

    // Setup geometry
    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
       1,  1,
    ])
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW)

    // Get attribute and uniform locations
    const positionLocation = gl.getAttribLocation(program, 'a_position')
    const timeLocation = gl.getUniformLocation(program, 'u_time')
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution')
    const mouseLocation = gl.getUniformLocation(program, 'u_mouse')
    const hueLocation = gl.getUniformLocation(program, 'u_hue')
    const saturationLocation = gl.getUniformLocation(program, 'u_saturation')
    const brightnessLocation = gl.getUniformLocation(program, 'u_brightness')
    const speedLocation = gl.getUniformLocation(program, 'u_speed')

    // Resize handler
    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    window.addEventListener('resize', resize)

    // Animation loop
    let animationFrame: number
    let startTime = Date.now()

    const animate = () => {
      const currentTime = (Date.now() - startTime) / 1000

      gl.useProgram(program)

      // Setup attributes
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
      gl.enableVertexAttribArray(positionLocation)
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

      // Set uniforms
      gl.uniform1f(timeLocation, currentTime)
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
      gl.uniform2f(mouseLocation, mousePosRef.current.x, mousePosRef.current.y)
      gl.uniform1f(hueLocation, hue)
      gl.uniform1f(saturationLocation, saturation)
      gl.uniform1f(brightnessLocation, brightness)
      gl.uniform1f(speedLocation, speed)

      // Draw
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrame)
      gl.deleteProgram(program)
      gl.deleteShader(vertexShader)
      gl.deleteShader(fragmentShader)
    }
  }, [hue, saturation, brightness, speed])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full -z-10 ${className}`}
      style={{ pointerEvents: 'none' }}
    />
  )
}

export default SilkBackground

