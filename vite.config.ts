import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath} from 'url'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  resolve: {
    alias : {
      //Method 1 : using fileUrlToPath
      "@": fileURLToPath(new URL("./src", import.meta.url)),

      //Method 2 : using path
      "@components": path.resolve(__dirname, "src/components")
    }
  }
})
