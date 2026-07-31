import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Redirige les appels /api vers le serveur Express en développement
      // (node server.js sur le port 3000). En production, Express sert
      // directement le build et l'API depuis la même origine.
      "/api": "http://localhost:3000",
    },
  },
});
