import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // Content Layer API (Astro 5+). `base` keeps the markdown where it already
  // lives, so entry ids stay bare slugs and existing /blog/<slug>/ URLs hold.
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional().default(""),
    tags: z.array(z.string()).optional().default([]),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog };
