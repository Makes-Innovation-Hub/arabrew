// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     env: {
//       VITE_SERVER_BASE_URL: process.env.VITE_SERVER_BASE_URL,
//       VITE_WEB_SOCKET_BASE_URL: process.env.VITE_WEB_SOCKET_BASE_URL,
//       VITE_AUTH0_DOMAIN: process.env.VITE_AUTH0_DOMAIN,
//       VITE_AUTH0_CLIENT_ID: process.env.VITE_AUTH0_CLIENT_ID,
//     },
//   },
//   server: {
//     host: true,
//   },
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Change build output directory
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0];
          }
        },
      },
    },
  },
  server: {
    host: true,
  },
});
