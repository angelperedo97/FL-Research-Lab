import { defineCollection, z, reference } from 'astro:content';

const people = defineCollection({
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string().optional(),
    website: z.string().url().optional(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    status: z.string(),
    summary: z.string(),
    contributors: z.array(reference('people')).optional(),
    link: z.string().url().optional(),
  }),
});

const publications = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    authors: z.array(reference('people')).optional(),
    link: z.string().url().optional(),
  }),
});

const news = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    link: z.string().url().optional(),
  }),
});

export const collections = {
  people,
  projects,
  publications,
  news,
};
