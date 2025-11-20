import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/eduard-portfolio/',   //  MUST MATCH my repo name exactly
})