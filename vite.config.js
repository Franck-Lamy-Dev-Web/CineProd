// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cineprod/', // 👈 car tu veux le mettre dans /cineprod/
  plugins: [react()],
});
