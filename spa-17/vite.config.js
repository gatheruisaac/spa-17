import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
    build: {
    // Ensure this is NOT set to something else, or if it is, 
    // update Vercel to match this name.
    outDir: 'dist', },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
