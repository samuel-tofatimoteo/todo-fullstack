import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },

    //ADD THE BELOW INTO YOUR VITE CONFIG FILE:

    // test: {
    //   setupFiles: './client/test-setup.tsx',
    // },
  },
})
