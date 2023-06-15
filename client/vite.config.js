import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    env: {
      VITE_SERVER_BASE_URL: process.env.VITE_SERVER_BASE_URL,
    },
  },
  server: {
    host: true,
  },
});
