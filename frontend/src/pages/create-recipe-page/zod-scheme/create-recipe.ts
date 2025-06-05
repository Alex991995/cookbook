import { z } from 'zod';

const valueIngredients = z.object({
  value: z.string(),
});

export const CreateRecipeSchema = z.object({
  title: z.string().min(4),
  description: z.string().min(4),
  picture: z.instanceof(FileList),

  ingredients: z.array(valueIngredients),
  // directions: z.array(z.string()),

  // ingredients: z.string(),
  directions: z.string(),
});

export type CreateRecipeType = z.infer<typeof CreateRecipeSchema>;
