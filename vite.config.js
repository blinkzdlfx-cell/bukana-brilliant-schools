import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',

  build: {
    outDir: 'dist',
    emptyOutDir: true,

    rollupOptions: {
      input: {
        index: resolve('.', 'index.html'),
        about: resolve('.', 'about.html'),
        academics: resolve('.', 'academics.html'),
        admissions: resolve('.', 'admissions.html'),
        schoolLife: resolve('.', 'school-life.html'),
        news: resolve('.', 'news.html'),
        gallery: resolve('.', 'gallery.html'),
        contact: resolve('.', 'contact.html'),
      },
    },
  },

  server: {
    port: 3000,
    open: true,
  },
});