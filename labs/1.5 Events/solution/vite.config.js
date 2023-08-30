import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3008',
        secure: false,
        // changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
