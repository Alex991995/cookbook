import { PrismaService } from '@/database/prisma.service';
import { HttpError } from '@/errors/http-error';
import { Request, Response, NextFunction } from 'express';

export class GuardMiddleware {
  constructor(private prismaService: PrismaService) {}

  async execute(req: Request, res: Response, next: NextFunction) {
    const [, , route] = req.originalUrl.trim().split('/');
    if (route === 'auth') {
      return next();
    }

    const user = await this.findUser(req.userEmail);

    if (user) {
      req.user = user;
      return next();
    }
    next(new HttpError(401, 'User is not registered'));
  }

  async findUser(email: string) {
    return await this.prismaService.client.user.findUnique({
      where: {
        email,
      },
    });
  }
}
