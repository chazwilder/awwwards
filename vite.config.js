import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/awwwards/',
  build: {
    assetsDir: 'assets',
    // Ensure assets are copied correctly
    copyPublicDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Keep images in their original directory structure
          if (assetInfo.name.endsWith('.png') ||
              assetInfo.name.endsWith('.jpg') ||
              assetInfo.name.endsWith('.webp') ||
              assetInfo.name.endsWith('.svg')) {
            return 'images/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
  preview: {
    port: 8001,
    host: true,
    strictPort: true,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  server: {
    port: 8001,
    host: true
  }
})