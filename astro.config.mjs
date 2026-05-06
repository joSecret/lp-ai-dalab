// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://josecret.github.io/',
  base: '/lp-ai-dalab',

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
    },
    {
      provider: fontProviders.google(),
      name: 'Space Grotesk',
      cssVariable: '--font-space-grotesk',
    },
  ],
});
