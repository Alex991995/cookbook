import { LoggerService } from '@/logger/logger.service';
import { Request, Response, NextFunction } from 'express';
import { HttpError } from './http-error';

export class ExceptionFilter {
	constructor(private logger: LoggerService) {}
	catch(err: Error | HttpError, req: Request, res: Response, next: NextFunction) {
		if (err instanceof HttpError) {
			this.logger.error(err.message);
			res.status(err.statusCode).send(err.message);
		} else {
			this.logger.error(err.message);
			res.status(500).send(err.message);
		}
	}
}
