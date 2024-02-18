import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    BUILD_TIMESTAMP: new Date().toLocaleString("en-GB", {/* dateStyle: "short", */ timeZone: "Australia/Melbourne"})
  }
})
