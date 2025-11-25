import { z, defineCollection } from 'astro:content';

const landscapesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string(),
    thumbnail: z.string().optional(),
    location: z.string().optional(),
    camera: z.string().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  landscapes: landscapesCollection,
};
