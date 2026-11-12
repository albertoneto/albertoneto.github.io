// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://albertoneto.github.io',
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
