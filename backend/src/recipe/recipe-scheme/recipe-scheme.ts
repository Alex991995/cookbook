import { z } from 'zod';

export const RecipeScheme = z
  .object({
    title: z.string(),
    description: z.string().nullable(),
    ingredients: z.string().array(),
    direction: z.string().array(),
    views: z.number(),
    estimated_time: z.number(),
    // image: z.instanceof(File),
  })
  .required();

export const UpdateRecipeScheme = z
  .object({
    title: z.string(),
    description: z.string().nullable(),
    ingredients: z.string().array(),
    direction: z.string().array(),
    views: z.number(),
    estimated_time: z.number(),
    image: z.string(),
  })
  .partial();
