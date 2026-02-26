// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
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
    // Decide si quieres /en/... o no:
    // prefixDefaultLocale: false -> / (en) y /es/...
    // prefixDefaultLocale: true  -> /en/... y /es/...
    routing: {
      prefixDefaultLocale: false
    }
  },
});