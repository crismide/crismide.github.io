import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/crismide.github.io/",
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
})
