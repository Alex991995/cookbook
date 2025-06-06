import { z } from 'zod';

const valueObjects = z.object({
  value: z.string(),
});

export const CreateCookbookSchema = z.object({
  title: z.string().min(4),
  description: z.string().optional(),
  picture: z.instanceof(FileList).refine(file => file?.length == 1, 'File is required.'),
  recipes: z.array(valueObjects),
  // directions: z.array(valueObjects),
});

export type CreateCookbookType = z.infer<typeof CreateCookbookSchema>;

// export interface CreateRecipeTypeForServer {
//   title: string;
//   description?: string;
//   estimated_time: string;

//   ingredients: string[];
//   directions: string[];
// }
