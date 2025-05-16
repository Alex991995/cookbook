import { LoggerService } from '@/logger/logger.service';
import { Request, Response, NextFunction } from 'express';
import { HttpError } from './http-error';
import { CustomZodError } from './zod-error';

export class ExceptionFilter {
  constructor(private logger: LoggerService) {}
  catch(err: Error | HttpError, req: Request, res: Response, next: NextFunction) {
    if (err instanceof HttpError) {
      this.logger.error(err.message);
      res.status(err.statusCode).send(err.message);
    } 
		
		else if (err instanceof CustomZodError) {
      const errorSummary = err.issues
        .map(issue => `[${issue.code}] ${issue.path.join('.')}: ${issue.message}`)
        .join('; ');
      this.logger.error(errorSummary);
      res.status(err.statusCode).send(errorSummary);
    } 
		
		else {
      this.logger.error(err.message);
      res.status(500).send(err.message);
    }
  }
}
