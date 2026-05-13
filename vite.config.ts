import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { getPlugin } from 'tradepilot';

export default defineConfig({
  plugins: [react(), getPlugin],
  server: {
    host: true,
    port: 5173,
  },
});