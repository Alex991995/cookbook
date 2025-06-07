import { z } from 'zod';

const valueObjects = z.object({
  id: z.string(),
});

export const CreateCookbookSchema = z.object({
  title: z.string().min(4),
  description: z.string().optional(),
  picture: z.instanceof(FileList).refine(file => file?.length == 1, 'File is required.'),
  recipesIDs: z.array(valueObjects),
});

export type CreateCookbookType = z.infer<typeof CreateCookbookSchema>;



