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
  }
});