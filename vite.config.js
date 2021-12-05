import autoprefixer from 'autoprefixer'
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  resolve: {
    alias: {
      '@utils': './utils',
    },
  },
})
