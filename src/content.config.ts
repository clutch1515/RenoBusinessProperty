import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per article in src/content/insights/.
// The file name becomes the URL: what-is-a-cap-rate.md -> /insights/what-is-a-cap-rate/
const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),   // <title> tag if different from the headline
    description: z.string(),           // meta description (search results)
    summary: z.string().optional(),    // one-liner shown in article lists
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    // Sections on the Market Insights page. An article can sit in more than one.
    topics: z
      .array(z.enum(['market-updates', 'ownership', 'leasing', 'retail-industrial']))
      .default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights };
