import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React - loads first
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Animation libs - lazy load friendly
          'vendor-motion': ['framer-motion'],
          // UI libs
          'vendor-ui': ['lucide-react', 'class-variance-authority', 'clsx', 'tailwind-merge'],
          // Theme
          'vendor-theme': ['next-themes'],
        },
      },
    },
    // Inline small assets directly in HTML to save network requests
    assetsInlineLimit: 4096,
  },
}));

