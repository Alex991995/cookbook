import { z } from 'zod';

export const UpdateAccountScheme = z
  .object({
    email: z.string(),
    name: z.string().nullable(),
    image: z.string(),

    oldPassword: z.string().min(4),
    newPassword: z.string().min(4),
  })
  .partial();
