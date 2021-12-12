import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/job-listings-with-filtering/",
  plugins: [react()],
  build: {
    outDir: './build'
  }
})
