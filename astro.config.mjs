// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://eloysm.dev',
  integrations: [sitemap()],

  experimental: {
    fonts: [{
      provider: fontProviders.fontsource(),
      name: 'Onest',
      cssVariable: '--font-onest'
      },{
        provider: fontProviders.fontsource(),
        name: 'Cal Sans',
        cssVariable: '--font-cal-sans'
      }
    ]
  },

  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false
    },
  },

  adapter: vercel(),
});