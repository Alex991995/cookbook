import { z } from 'zod';

const valueObjects = z.object({
  value: z.string(),
});

export const CreateRecipeSchema = z.object({
  title: z.string().min(4),
  description: z.string().optional(),
  picture: z.instanceof(FileList).refine(file => file?.length == 1, 'File is required.'),
  estimated_time: z.string(),

  ingredients: z.array(valueObjects).nonempty(),
  directions: z.array(valueObjects).nonempty(),
});

export type CreateRecipeType = z.infer<typeof CreateRecipeSchema>;

