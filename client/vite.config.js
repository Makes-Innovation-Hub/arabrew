import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    env: {
      // VITE_WEB_SOCKET_PORT: process.env.VITE_WEB_SOCKET_PORT,
    },
  },
  server: {
    host: true,
  },
});
