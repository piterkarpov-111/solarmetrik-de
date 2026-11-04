import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://solarmetrik.de',
  output: 'static',
  trailingSlash: 'ignore',
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  build: {
    format: 'directory'
  }
});
