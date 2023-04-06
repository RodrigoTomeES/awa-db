import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";

const env = loadEnv(import.meta.env.MODE, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: `https://${env.USERNAME}.github.io`,
  base: env.BASE_REPO_URL,
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
});
