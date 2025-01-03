import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Real-Estate-Website/', // Set the base to match your repository name
  build: {
    outDir: 'build', // Ensure this matches your deployment script
  },
})
