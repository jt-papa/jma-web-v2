import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  root: resolve(__dirname, ''),  // It's better to use resolve for consistency
  build: {
    outDir: resolve(__dirname, '../dist'),  // Output directory set relative to the project root
    rollupOptions: {
      input: {
        main: resolve(__dirname, '/src/index.html'),         // Main entry
        about: resolve(__dirname, '/src/pages/WhoWeAre.html'),
        contact: resolve(__dirname, '/src/pages/Contact.html'),
        process: resolve(__dirname, '/src/pages/OurProcess.html'),
        work: resolve(__dirname, '/src/pages/OurWork.html'),
        services: resolve(__dirname, 'src/pages/WhatWeDo.html'),
      }
    }
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
});
