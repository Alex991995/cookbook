import { HttpError } from '@/errors/http-error';
import { LoggerService } from '@/logger/logger.service';
import { NextFunction, Router, Request, Response } from 'express';
import { AuthService } from './auth.service';
import { RegisterSchema } from './auth-scheme/auth-scheme';
import { RegisterDTO } from './dto/register.dto';
import { ZodError } from 'zod';
import { CustomZodError } from '@/errors/zod-error';

export class AuthController {
  router: Router;

  constructor(
    private logger: LoggerService,
    private authService: AuthService,
  ) {
    this.router = Router();
  }

  routes() {
    this.router.post('/login', (req, res) => {
      // const result = this.authService
      res.send('login');
    });

    this.router.post(
      '/register',
      async ({ body }: Request<object, object, RegisterDTO>, res, next: NextFunction) => {
        try {
          RegisterSchema.parse(body);
          const result = await this.authService.createUser(body);

          if (!result) {
            next(new HttpError(422, 'User already exists'));
          } else {
            res.send(result);
          }
        } catch (error) {
          if (error instanceof ZodError) {
            next(new CustomZodError(400, error.issues));
          }
        }
      },
    );
    return this.router;
  }
}
