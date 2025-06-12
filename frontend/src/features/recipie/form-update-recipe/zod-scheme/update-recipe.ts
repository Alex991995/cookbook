import { z } from 'zod';

const valueObjects = z.object({
  value: z.string(),
});

export const UpdateRecipeSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    picture:z.union([ z.instanceof(FileList), z.undefined()]),
    estimated_time: z.string(),
    ingredients: z.array(valueObjects),
    directions: z.array(valueObjects),
  }).required()


export type UpdateRecipeType = z.infer<typeof UpdateRecipeSchema>;


export interface UpdateRecipeTypeForServer {
  title: string;
  description?: string;
  estimated_time: number;
  ingredients: string[];
  directions: string[];
}
