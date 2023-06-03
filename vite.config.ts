import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  envPrefix: ['VITE_', 'REACT_APP'],
  resolve: {
    alias: [
      { find: '~', replacement: '/src' },
      { find: 'public', replacement: '/public' },
    ],
  },
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    chunkSizeWarningLimit: 100000,
  },
})
