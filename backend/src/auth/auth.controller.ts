import { HttpError } from '@/errors/http-error';
import { LoggerService } from '@/logger/logger.service';
import { NextFunction, Router, Request, Response } from 'express';
import { AuthService } from './auth.service';
import { LoginSchema, RegisterSchema } from './auth-scheme/auth-scheme';
import { RegisterDTO } from './dto/register.dto';
import { LoginDTO } from './dto/login.dto';
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
    this.router.post(
      '/login',
      async ({ body }: Request<object, object, LoginDTO>, res, next: NextFunction) => {
        try {
          LoginSchema.parse(body);
          const result = await this.authService.loginUser(body);
          if (!result) {
            next(new HttpError(401, 'Wrong credentials'));
          }

          res.sendStatus(201);
        } catch (error) {
          if (error instanceof ZodError) {
            next(new CustomZodError(400, error.issues));
          }
        }
      },
    );

    this.router.post(
      '/register',
      async ({ body }: Request<object, object, RegisterDTO>, res, next: NextFunction) => {
        try {
          RegisterSchema.parse(body);
          const result = await this.authService.createUser(body);

          if (!result) {
            next(new HttpError(422, 'User already exists'));
          } else {
            res.status(201).end();
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
