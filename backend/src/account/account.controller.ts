import { HttpError } from '@/errors/http-error';
import { LoggerService } from '@/logger/logger.service';
import { NextFunction, Router, Request, Response } from 'express';

export class AccountController {
	router: Router;

	constructor(private logger: LoggerService) {
		this.router = Router();

		this.router.get('/login', (req: Request, res: Response, next: NextFunction) => {
			next(new HttpError(404, 'не авторизован'));
		});
	}
}
