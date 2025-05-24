import { z } from 'zod';

export const CookbookScheme = z
  .object({
    title: z.string(),
    description: z.string().nullable(),
    image: z.string(),
    user_id: z.string(),
    recipe_id: z.string(),
  })
  .required();

export const UpdateCookbookScheme = z
  .object({
    title: z.string(),
    description: z.string().nullable(),
    image: z.string(),
    user_id: z.string(),
    recipe_id: z.string(),
  })
  .partial();

export const CommentCookbookScheme = z
  .object({
    cookbook_id: z.string(),
    description: z.string(),
  })
  .required();

// export const CookbookLikesScheme = z
//   .object({
//     title: z.string(),
//   })
//   .required();
