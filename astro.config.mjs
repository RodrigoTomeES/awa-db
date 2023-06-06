import image from '@astrojs/image';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import critters from 'astro-critters';
import rename from 'astro-rename';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rodrigotomees.github.io',
  compressHTML: true,
  output: 'static',
  experimental: { redirects: true },
  redirects: { '/1': '/' },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    rename({
      targetExt: ['html'],
    }),
    critters(),
    compress({ img: false }),
    sitemap(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    prefetch({ selector: 'a' }),
  ],
});
