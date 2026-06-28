import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // agar react use kar rahe ho toh

export default defineConfig({
  plugins: [react()],
  base: '/',  // <--- YE LINE SABSE IMPORTANT HAI
})
