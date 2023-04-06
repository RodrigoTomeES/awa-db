import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import critters from "astro-critters";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://rodrigotomees.github.io",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    critters(),
    compress({ img: false }),
    sitemap(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
