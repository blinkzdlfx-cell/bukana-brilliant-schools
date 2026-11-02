import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const projectDirectory = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(projectDirectory, './src'),
    },
  },
  server: {
    port: 5173,
    historyApiFallback: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
