import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        require('tailwindcss/nesting'),
        require('tailwindcss'),
        require('autoprefixer')
      ]
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
