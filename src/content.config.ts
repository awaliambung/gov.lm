import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/news" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.date(),
    categories: z.array(z.string()),
    featured: z.boolean(),
    thumbnail: z.string().optional(),
    slug: z.string()
  })
});

export const collections = { news };