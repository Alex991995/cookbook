import { z } from 'zod';

export const RegisterSchema = z
	.object({
		email: z.string().email(),
		password: z.string(),
		repeatPassword: z.string(),
	})
	.refine(data => data.password === data.repeatPassword, {
		message: 'Passwords do not match',
		path: ['repeatPassword'],
	});
