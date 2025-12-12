import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: https://idrori.github.io/asd
  // Note: When building for gh-pages (npm run deploy), set VITE_GITHUB_PAGES=true
  base: (process.env.GITHUB_ACTIONS || process.env.VITE_GITHUB_PAGES) ? '/asd/' : '/',
  assetsInclude: ['**/*.txt', '**/*.csv', '**/*.pdf'],
  publicDir: 'public',
  server: {
    port: 5173,
    strictPort: false
  }
})
