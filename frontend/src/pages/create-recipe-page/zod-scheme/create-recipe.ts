import { z } from 'zod';

export const CreateRecipeSchema = z.object({
  title: z.string().min(4),
  description: z.string().optional(),
  picture: z.instanceof(FileList).refine(file => file?.length == 1, 'File is required.'),
  estimated_time: z.string(),

  ingredients: z.array(z.string()).min(1),
  directions: z.array(z.string()).min(1),
});

export type CreateRecipeType = z.infer<typeof CreateRecipeSchema>;
