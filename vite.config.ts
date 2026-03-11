import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

// Custom plugin to enforce copying of .htaccess because Vite ignores dotfiles in public/
function emitHtaccessPlugin(): any {
  return {
    name: 'emit-htaccess',
    generateBundle() {
      const htaccessPath = path.resolve(__dirname, 'public/.htaccess');
      if (fs.existsSync(htaccessPath)) {
        this.emitFile({
          type: 'asset',
          fileName: '.htaccess',
          source: fs.readFileSync(htaccessPath, 'utf-8')
        });
      }
    }
  };
}
// Custom plugin to inline CSS to fix Lighthouse Render Blocking CSS warning
function inlineCSSPlugin(): any {
  return {
    name: 'inline-css-plugin',
    enforce: 'post',
    generateBundle(_, bundle: any) {
      const cssFiles = Object.keys(bundle).filter((name) => name.endsWith('.css'));
      const htmlFile = bundle['index.html'];

      if (htmlFile && htmlFile.type === 'asset') {
        let htmlStr = htmlFile.source as string;

        for (const cssName of cssFiles) {
          const cssAsset = bundle[cssName];
          if (cssAsset && cssAsset.type === 'asset') {
            const linkRegex = new RegExp(`<link[^>]*href="[^"]*${cssName.replace(/[-/\\\\^$*+?.()|[\\]{}]/g, '\\\\$&')}"[^>]*>`, 'gi');
            htmlStr = htmlStr.replace(linkRegex, `<style>${cssAsset.source}</style>`);
            delete bundle[cssName]; // Remove the separated CSS file to save space
          }
        }
        
        htmlFile.source = htmlStr;
      }
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), inlineCSSPlugin(), emitHtaccessPlugin()].filter(Boolean),
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

