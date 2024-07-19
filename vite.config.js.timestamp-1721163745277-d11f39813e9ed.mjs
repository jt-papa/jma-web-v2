// vite.config.js
import { defineConfig } from "file:///C:/Users/jtpap/Documents/JMA/jma-web-v2/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import tailwindcss from "file:///C:/Users/jtpap/Documents/JMA/jma-web-v2/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///C:/Users/jtpap/Documents/JMA/jma-web-v2/node_modules/autoprefixer/lib/autoprefixer.js";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\jtpap\\Documents\\JMA\\jma-web-v2";
var production = process.env.NODE_ENV === "production";
var vite_config_default = defineConfig({
  root: path.resolve(__vite_injected_original_dirname, "src"),
  // base: process.env.NODE_ENV === 'production' ? '/jma-web-v2/' : '/',
  build: {
    outDir: resolve(__vite_injected_original_dirname, "dist"),
    // Output directory set relative to the project root
    emptyOutDir: true,
    // Clear the output directory before building
    rollupOptions: {
      input: {
        main: resolve(__vite_injected_original_dirname, "src/index.html"),
        // Main entry
        whoWeAre: resolve(__vite_injected_original_dirname, "src/pages/WhoWeAre.html"),
        contact: resolve(__vite_injected_original_dirname, "src/pages/Contact.html"),
        process: resolve(__vite_injected_original_dirname, "src/pages/OurProcess.html"),
        work: resolve(__vite_injected_original_dirname, "src/pages/OurWork.html"),
        whatWeDo: resolve(__vite_injected_original_dirname, "src/pages/WhatWeDo.html"),
        CVSKit: resolve(__vite_injected_original_dirname, "src/pages/CVSKit.html"),
        FedExHoodies: resolve(__vite_injected_original_dirname, "src/pages/FedExHoodies.html"),
        LightCubes: resolve(__vite_injected_original_dirname, "src/pages/LightCubes.html"),
        TrumpfMaple: resolve(__vite_injected_original_dirname, "src/pages/TrumpfMaple.html"),
        footer: resolve(__vite_injected_original_dirname, "src/components/footer.html"),
        infographic: resolve(__vite_injected_original_dirname, "src/components/infographic.html"),
        bg: resolve(__vite_injected_original_dirname, "src/components/bg.html"),
        navbar: resolve(__vite_injected_original_dirname, "src/components/navbar.html"),
        projectButton: resolve(__vite_injected_original_dirname, "src/components/projectButton.html"),
        services: resolve(__vite_injected_original_dirname, "src/components/services.html"),
        stats: resolve(__vite_injected_original_dirname, "src/components/stats.html")
      }
    }
  },
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "src")
    }
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer()
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqdHBhcFxcXFxEb2N1bWVudHNcXFxcSk1BXFxcXGptYS13ZWItdjJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGp0cGFwXFxcXERvY3VtZW50c1xcXFxKTUFcXFxcam1hLXdlYi12MlxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvanRwYXAvRG9jdW1lbnRzL0pNQS9qbWEtd2ViLXYyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ3RhaWx3aW5kY3NzJztcclxuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tICdhdXRvcHJlZml4ZXInO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbmNvbnN0IHByb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICByb290OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXHJcbiAgLy8gYmFzZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICcvam1hLXdlYi12Mi8nIDogJy8nLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXI6IHJlc29sdmUoX19kaXJuYW1lLCAnZGlzdCcpLCAgLy8gT3V0cHV0IGRpcmVjdG9yeSBzZXQgcmVsYXRpdmUgdG8gdGhlIHByb2plY3Qgcm9vdFxyXG4gICAgZW1wdHlPdXREaXI6IHRydWUsICAgICAgICAgICAgICAgICAgICAgICAvLyBDbGVhciB0aGUgb3V0cHV0IGRpcmVjdG9yeSBiZWZvcmUgYnVpbGRpbmdcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgaW5wdXQ6IHtcclxuICAgICAgICBtYWluOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC5odG1sJyksICAgICAgICAgLy8gTWFpbiBlbnRyeVxyXG4gICAgICAgIHdob1dlQXJlOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wYWdlcy9XaG9XZUFyZS5odG1sJyksXHJcbiAgICAgICAgY29udGFjdDogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvcGFnZXMvQ29udGFjdC5odG1sJyksXHJcbiAgICAgICAgcHJvY2VzczogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvcGFnZXMvT3VyUHJvY2Vzcy5odG1sJyksXHJcbiAgICAgICAgd29yazogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvcGFnZXMvT3VyV29yay5odG1sJyksXHJcbiAgICAgICAgd2hhdFdlRG86IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3BhZ2VzL1doYXRXZURvLmh0bWwnKSxcclxuICAgICAgICBDVlNLaXQ6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3BhZ2VzL0NWU0tpdC5odG1sJyksXHJcbiAgICAgICAgRmVkRXhIb29kaWVzOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wYWdlcy9GZWRFeEhvb2RpZXMuaHRtbCcpLFxyXG4gICAgICAgIExpZ2h0Q3ViZXM6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3BhZ2VzL0xpZ2h0Q3ViZXMuaHRtbCcpLFxyXG4gICAgICAgIFRydW1wZk1hcGxlOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wYWdlcy9UcnVtcGZNYXBsZS5odG1sJyksXHJcbiAgICAgICAgZm9vdGVyOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9jb21wb25lbnRzL2Zvb3Rlci5odG1sJyksXHJcbiAgICAgICAgaW5mb2dyYXBoaWM6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2NvbXBvbmVudHMvaW5mb2dyYXBoaWMuaHRtbCcpLFxyXG4gICAgICAgIGJnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9jb21wb25lbnRzL2JnLmh0bWwnKSxcclxuICAgICAgICBuYXZiYXI6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2NvbXBvbmVudHMvbmF2YmFyLmh0bWwnKSxcclxuICAgICAgICBwcm9qZWN0QnV0dG9uOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9jb21wb25lbnRzL3Byb2plY3RCdXR0b24uaHRtbCcpLFxyXG4gICAgICAgIHNlcnZpY2VzOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9jb21wb25lbnRzL3NlcnZpY2VzLmh0bWwnKSxcclxuICAgICAgICBzdGF0czogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvY29tcG9uZW50cy9zdGF0cy5odG1sJyksXHJcbiBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNzczoge1xyXG4gICAgcG9zdGNzczoge1xyXG4gICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgdGFpbHdpbmRjc3MoKSxcclxuICAgICAgICBhdXRvcHJlZml4ZXIoKSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVQsU0FBUyxvQkFBb0I7QUFDaFYsU0FBUyxlQUFlO0FBQ3hCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sVUFBVTtBQUpqQixJQUFNLG1DQUFtQztBQU16QyxJQUFNLGFBQWEsUUFBUSxJQUFJLGFBQWE7QUFFNUMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTSxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBO0FBQUEsRUFFbkMsT0FBTztBQUFBLElBQ0wsUUFBUSxRQUFRLGtDQUFXLE1BQU07QUFBQTtBQUFBLElBQ2pDLGFBQWE7QUFBQTtBQUFBLElBQ2IsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLFFBQ0wsTUFBTSxRQUFRLGtDQUFXLGdCQUFnQjtBQUFBO0FBQUEsUUFDekMsVUFBVSxRQUFRLGtDQUFXLHlCQUF5QjtBQUFBLFFBQ3RELFNBQVMsUUFBUSxrQ0FBVyx3QkFBd0I7QUFBQSxRQUNwRCxTQUFTLFFBQVEsa0NBQVcsMkJBQTJCO0FBQUEsUUFDdkQsTUFBTSxRQUFRLGtDQUFXLHdCQUF3QjtBQUFBLFFBQ2pELFVBQVUsUUFBUSxrQ0FBVyx5QkFBeUI7QUFBQSxRQUN0RCxRQUFRLFFBQVEsa0NBQVcsdUJBQXVCO0FBQUEsUUFDbEQsY0FBYyxRQUFRLGtDQUFXLDZCQUE2QjtBQUFBLFFBQzlELFlBQVksUUFBUSxrQ0FBVywyQkFBMkI7QUFBQSxRQUMxRCxhQUFhLFFBQVEsa0NBQVcsNEJBQTRCO0FBQUEsUUFDNUQsUUFBUSxRQUFRLGtDQUFXLDRCQUE0QjtBQUFBLFFBQ3ZELGFBQWEsUUFBUSxrQ0FBVyxpQ0FBaUM7QUFBQSxRQUNqRSxJQUFJLFFBQVEsa0NBQVcsd0JBQXdCO0FBQUEsUUFDL0MsUUFBUSxRQUFRLGtDQUFXLDRCQUE0QjtBQUFBLFFBQ3ZELGVBQWUsUUFBUSxrQ0FBVyxtQ0FBbUM7QUFBQSxRQUNyRSxVQUFVLFFBQVEsa0NBQVcsOEJBQThCO0FBQUEsUUFDM0QsT0FBTyxRQUFRLGtDQUFXLDJCQUEyQjtBQUFBLE1BRXZEO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDL0I7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxTQUFTO0FBQUEsUUFDUCxZQUFZO0FBQUEsUUFDWixhQUFhO0FBQUEsTUFDZjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
