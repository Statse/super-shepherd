// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://Statse.github.io',
  base: '/super-shepherd',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fi', 'sv'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
