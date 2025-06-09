import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    {
      name: 'glsl',
      transform(code, id) {
        if (id.endsWith('.glsl') || id.endsWith('.vert') || id.endsWith('.frag')) {
          return `export default ${JSON.stringify(code)};`;
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@/core': resolve(__dirname, 'src/core'),
      '@/systems': resolve(__dirname, 'src/systems'),
      '@/shaders': resolve(__dirname, 'src/shaders'),
      '@/data': resolve(__dirname, 'src/data'),
      '@/utils': resolve(__dirname, 'src/utils')
    }
  },
  server: {
    host: true,
    port: 3000,
    open: true
  },
  build: {
    target: 'es2022',
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  optimizeDeps: {
    include: ['three', 'gsap', 'stats.js']
  }
}) 