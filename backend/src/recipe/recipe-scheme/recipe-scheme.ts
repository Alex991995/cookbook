import { z } from 'zod';

const valueObjects = z.object({
  value: z.string(),
});

export const RecipeScheme = z
  .object({
    title: z.string(),
    description: z.string().nullable(),
    ingredients: z.array(z.string()),
    directions: z.array(z.string()),

    // ingredients: z.array(valueObjects).min(1),
    // directions: z.array(valueObjects).min(1),
    // views: z.number(),
    estimated_time: z.number(),
  })
  .required();

export const UpdateRecipeScheme = z
  .object({
    title: z.string(),
    description: z.string().nullable(),
    ingredients: z.string().array(),
    direction: z.string().array(),
    estimated_time: z.number(),
    image: z.string(),
  })
  .partial();

export const CommentRecipeScheme = z
  .object({
    description: z.string(),
    recipe_id: z.string(),
  })
  .required();

export const RecipeTitleScheme = z
  .object({
    title: z.string(),
  })
  .required();
