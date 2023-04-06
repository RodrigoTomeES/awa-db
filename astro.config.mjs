import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://rodrigotomees.github.io",
  base: "/awa-marketplace",
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
});
