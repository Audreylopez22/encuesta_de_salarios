import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/encuesta_de_salarios/', // 👈 importante para GitHub Pages
  plugins: [react()],
})