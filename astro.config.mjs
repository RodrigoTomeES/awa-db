import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import critters from "astro-critters";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://rodrigotomees.github.io",
  base: "/awa-marketplace",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    critters(),
    compress(),
    sitemap(),
  ],
});
