import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "dotenv/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/service": {
        target: process.env["AUTH_ENDPOINT"],
        changeOrigin: true,
      },
    },
  },
});
