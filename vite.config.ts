import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // O API Gateway (Porta 8000) tratará de dispersar para os serviços correctos
      '/auth': 'http://localhost:8000',
      '/academic': 'http://localhost:8000',
      '/finance': 'http://localhost:8000',
      '/documents': 'http://localhost:8000',
    }
  }
})
