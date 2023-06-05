import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    env: {
      VITE_WEB_SOCKET_PORT: 9696,
      VITE_SERVER_PORT: 5002,
      VITE_DEV_SERVER_URL: `http://localhost:5002`,
    },
  },
  server: {
    host: true,
  },
});
