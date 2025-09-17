import { z } from 'zod';

export const RegisterSchema = z
  .object({
    email: z.string().email().min(4),
    password: z.string().min(4),
    repeatPassword: z.string(),
  })
  .refine(data => data.password === data.repeatPassword, {
    message: 'Passwords do not match',
    path: ['repeatPassword'],
  });

export const LoginSchema = z
  .object({
    email: z.string().email().min(4),
    password: z.string().min(4),
  })
  .required();
