# renobusinessproperty.com

Static site built with [Astro](https://astro.build), hosted on Cloudflare Pages.

## Publishing a new article

1. Add a Markdown file to `src/content/insights/`. The file name becomes the URL:
   `my-new-guide.md` -> `/insights/my-new-guide/`
2. Start it with this header:

   ```
   ---
   title: "Headline as it appears on the page"
   seoTitle: "Shorter title for Google | Reno Business Property"   # optional
   description: "One or two sentences for search results."
   summary: "One line shown in article lists."                    # optional
   date: 2026-12-01
   topics: [market-updates, ownership]   # any of: market-updates, ownership, leasing, retail-industrial
   draft: false
   ---
   ```
3. Commit and push. Cloudflare rebuilds and publishes in about a minute.

## Images

Put photos in `src/assets/images/` and reference them by file name. They are
resized and converted to modern formats automatically at build time.

## Local preview

```
npm install
npm run dev
```

## Cloudflare Pages settings

- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `NODE_VERSION` = `22`
