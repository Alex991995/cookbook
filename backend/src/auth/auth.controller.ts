import { HttpError } from '@/errors/http-error';
import { LoggerService } from '@/logger/logger.service';
import { NextFunction, Router, Request, Response } from 'express';
import { AuthService } from './auth.service';
import { RegisterSchema } from './auth-scheme/auth-scheme';
import { RegisterDTO } from './dto/register.dto';

export class AuthController {
	router: Router;

	constructor(
		private logger: LoggerService,
		private authService: AuthService,
	) {
		this.router = Router();
		// this.userService = userService;

		// this.router.get('/login', (req: Request, res: Response, next: NextFunction) => {
		// 	next(new HttpError(404, 'не авторизован'));
		// });
	}

	routes() {
		this.router.post('/login', (req, res) => {
			// const result = this.authService
			res.send('login');
		});

		this.router.post('/register', async ({ body }: Request<object, object, RegisterDTO>, res) => {
			const validatedData = RegisterSchema.parse(body);

			console.log(validatedData);

			const result = await this.authService.createUser(body);

			res.send(result);
		});
		return this.router;
	}
}
