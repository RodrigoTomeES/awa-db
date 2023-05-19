import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import critters from 'astro-critters';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://rodrigotomees.github.io',
  compressHTML: true,
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
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
});
