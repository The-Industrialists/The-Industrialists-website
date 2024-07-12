import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: "/The-Industrialists-website/", // Ensure this is correct
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
