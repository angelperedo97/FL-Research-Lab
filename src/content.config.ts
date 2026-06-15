import { defineCollection, z, reference } from 'astro:content';

const people = defineCollection({
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string().optional(),
    email: z.string().email().optional(),
    website: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    scholar: z.string().url().optional(),
    avatar: z.string().optional(),
    cv: z.string().optional(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    status: z.string(),
    summary: z.string(),
    // Allow either the reference object OR a simple array of text strings
    contributors: z.union([z.array(reference('people')), z.array(z.string())]).optional(),
    link: z.string().url().optional(),
    poster: z.string().optional(), // New web-safe poster link attribute
  }),
});

const publications = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    venue: z.string().default('Publication'), // Ensure venue exists
    summary: z.string(),
    // Updated to accept both raw text arrays and individual data references safely
    authors: z.union([z.array(reference('people')), z.array(z.string())]).optional(),
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

export const collections = { people, projects, publications, news };
