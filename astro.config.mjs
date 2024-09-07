import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://the-industrialists.github.io/The-Industrialists-website",
  base: "/The-Industrialists-website/",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
