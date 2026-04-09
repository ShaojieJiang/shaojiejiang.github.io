import { defineCollection, z } from "astro:content";

const postSchema = z.object({
  title: z.string(),
  summary: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().default("Shaojie Jiang"),
  category: z.string().default("General"),
  tags: z.array(z.string()).default([]),
  image: z.string().optional(),
  draft: z.boolean().default(false),
});

const blog = defineCollection({
  type: "content",
  schema: postSchema,
});

export const collections = {
  blog,
};
