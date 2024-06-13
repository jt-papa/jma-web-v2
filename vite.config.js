import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import path from 'path';

const production = process.env.NODE_ENV === 'production';

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  // base: process.env.NODE_ENV === 'production' ? '/jma-web-v2/' : '/',
  build: {
    outDir: resolve(__dirname, 'dist'),  // Output directory set relative to the project root
    emptyOutDir: true,                       // Clear the output directory before building
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),         // Main entry
        about: resolve(__dirname, 'src/pages/WhoWeAre.html'),
        contact: resolve(__dirname, 'src/pages/Contact.html'),
        process: resolve(__dirname, 'src/pages/OurProcess.html'),
        work: resolve(__dirname, 'src/pages/OurWork.html'),
        whatWeDo: resolve(__dirname, 'src/pages/WhatWeDo.html'),
        footer: resolve(__dirname, 'src/components/footer.html'),
        infographic: resolve(__dirname, 'src/components/infographic.html'),
        bg: resolve(__dirname, 'src/components/bg.html'),
        navbar: resolve(__dirname, 'src/components/navbar.html'),
        projectButton: resolve(__dirname, 'src/components/projectButton.html'),
        services: resolve(__dirname, 'src/components/services.html'),
        CVSKit: resolve(__dirname, 'src/pages/CVSKit.html'),
        FedExHoodies: resolve(__dirname, 'src/pages/FedExHoodies.html'),
        LightCubes: resolve(__dirname, 'src/pages/LightCubes.html'),
        TrumpfMaple: resolve(__dirname, 'src/pages/TrumpfMaple.html'),
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
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
