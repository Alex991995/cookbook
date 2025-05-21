import { Request, Response, NextFunction } from 'express';
import * as jose from 'jose';

import { LoggerService } from '@/logger/logger.service';
import { jwtConstants } from '@/common/constants';
import { HttpError } from '@/errors/http-error';
import { IResultPayload } from '@/types';

export class AuthMiddleware {
  constructor(private logger: LoggerService) {}

  async execute(req: Request, res: Response, next: NextFunction) {
    const [, , route] = req.originalUrl.trim().split('/');
console.log(req.path)
    // if (req.path.startsWith('/uploads')) {
    //   return next();
    // }
    console.log(route)
    if (route === 'auth') {
      return next();
    }

    const [type, token] = req.headers.authorization?.split(' ') ?? [];

    try {
      console.log(token);
      const { email } = await this.decodeJWT(token);

      req.userEmail = email;
      return next();
    } 
    
    catch (err) {
      return next(new HttpError(401, 'Invalid Token'));
    }
  }

  async decodeJWT(token: string): Promise<IResultPayload> {
    const secret = new TextEncoder().encode(jwtConstants.secret);
    const { payload } = await jose.jwtVerify(token, secret);
    return payload as IResultPayload;
  }
}
