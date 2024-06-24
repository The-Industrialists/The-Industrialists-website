import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import { FastForward } from 'lucide-react';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    applyBaseStyles: false,
  }),]
});