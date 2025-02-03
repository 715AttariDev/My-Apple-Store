import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/My-Apple-Store/',
  server: {
    host: '0.0.0.0', // Allow connections from any device on the network
    port: 5173, // Default Vite port, you can change it if needed
  },
})
