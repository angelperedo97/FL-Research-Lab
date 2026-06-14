import { defineCollection, z, reference } from 'astro:content';

const people = defineCollection({
  // Removed ({ image }) callback to treat filepaths as clean strings
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string().optional(),
    email: z.string().email().optional(),
    website: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    scholar: z.string().url().optional(),
    
    // Changed to a string validator so Astro doesn't crash on clean CI builds
    avatar: z.string().optional(),
    
    cv: z.string().optional(),
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
