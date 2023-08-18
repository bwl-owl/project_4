import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/test": {
        target: "https://p4-px0f.onrender.com",
        changeOrigin: true,
      },
    },
  },
});
