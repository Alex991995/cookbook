import { z } from 'zod';

// const valueObjects = z.object({
//   id: z.string(),
//   value: z.string(),
// });

export const UpdateUserSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    newPassword: z.string(),
    oldPassword: z.string(),
    picture: z.instanceof(FileList),
    description: z.string(),
  })
  .partial();

export type UpdateUserType = z.infer<typeof UpdateUserSchema>;
