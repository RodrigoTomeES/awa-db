import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";

const env = loadEnv(import.meta.env.MODE, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: "https://rodrigotomees.github.io",
  base: "/alienware-arena-marketplace",
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
});
