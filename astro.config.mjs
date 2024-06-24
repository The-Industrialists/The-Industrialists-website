import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import path from 'path';

// https://astro.build/config
export default defineConfig({

  site: 'https://the-Industrialists.github.io',
  base: 'the-Industrialists.github.io',
  integrations: [react(), tailwind({
    applyBaseStyles: false,
  }), ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
});