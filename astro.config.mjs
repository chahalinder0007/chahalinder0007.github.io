import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static site for GitHub Pages on the apex domain inderjit.in
// (no `base` — served at root, not /repo/). Default output is static.
export default defineConfig({
  site: 'https://inderjit.in',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});
