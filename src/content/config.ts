import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      category: z.enum(["qms", "tasis", "personal"]),
      role: z.string(),
      type: z.string(),
      summary: z.string(),
      year: z.string().optional(),
      status: z.string().optional(),
      tools: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      confidential: z.boolean().default(false),
      order: z.number().default(100),
      confidentialityNote: z.string().optional(),
      links: z
        .array(z.object({ label: z.string(), href: z.string().url() }))
        .default([]),
      hero: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string().optional(),
            // Layout hint: full = full bleed; half = pair-friendly tile
            span: z.enum(["full", "half"]).default("full"),
          }),
        )
        .default([]),
    }),
});

export const collections = { projects };
