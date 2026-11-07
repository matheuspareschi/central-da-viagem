import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  // HashRouter: caminhos relativos funcionam em GitHub Pages e Cloudflare Pages.
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['apple-touch-icon.png'],
      manifest: {
        name: 'Central da Viagem — Flórida 2026',
        short_name: 'Central da Viagem',
        lang: 'pt-BR',
        start_url: './',
        display: 'standalone',
        background_color: '#f2ede2',
        theme_color: '#f2ede2',
        icons: [{ src: 'apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/,
            handler: 'CacheFirst',
            options: { cacheName: 'google-fonts', expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 } },
          },
        ],
      },
    }),
  ],
})
