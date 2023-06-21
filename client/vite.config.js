import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    env: {
      VITE_SERVER_BASE_URL: process.env.VITE_SERVER_BASE_URL,
      VITE_AUTH0_DOMAIN: process.env.VITE_AUTH0_DOMAIN,
      VITE_AUTH0_CLIENT_ID: process.env.VITE_AUTH0_CLIENT_ID,
      VITE_SERVER_PORT: process.env.VITE_SERVER_PORT,
    },
  },
  server: {
    host: true,
  },
});
