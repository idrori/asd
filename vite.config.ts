import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: https://idrori.github.io/asd
  base: process.env.GITHUB_ACTIONS ? '/asd/' : '/',
  assetsInclude: ['**/*.txt', '**/*.csv', '**/*.pdf'],
  publicDir: 'public',
  server: {
    port: 5173,
    strictPort: false
  }
})
