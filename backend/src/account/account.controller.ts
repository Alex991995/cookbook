import { LoggerService } from '@/logger/logger.service';
import { Router } from 'express';

export class AccountController {
	router: Router;

	constructor(private logger: LoggerService) {
		this.router = Router();

		// this.router.get('/')
	}
}
