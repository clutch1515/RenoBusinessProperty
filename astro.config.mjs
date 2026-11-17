import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static build for Cloudflare Pages.
// trailingSlash + directory format keep every URL identical to the WordPress site
// (e.g. /property-owners/ and /insights/what-is-a-cap-rate-commercial-real-estate/).
export default defineConfig({
  site: 'https://renobusinessproperty.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
