import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig(({ mode }) => {
  const isDevEnv = mode === 'development';
  
  return {
    plugins: [
       isDevEnv && react(),
    ]
  }
}
)