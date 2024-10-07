import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import injectHTML from 'vite-plugin-html-inject';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  server: {
    port: 3000,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOption: {
      input: {
        main: './src/index.html',
        pricing: './src/pricing.html',
        contact: './src/contact.html',
        blog: './src/blog.html',
        blogArticle: './src/blog-article.html',
        about: './src/about.html',
      },
    },
  },
  plugins: [
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
    injectHTML(),
    ViteMinifyPlugin({}),
  ],
});
