import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://gabrielcwt.github.io',
  base: '/portfolio',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  integrations: [react()],
});
