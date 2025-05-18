import { AccountController } from './account/account.controller';
import { App } from './app';
import { PrismaService } from './database/prisma.service';
import { ExceptionFilter } from './errors/exception.filter';
import { LoggerService } from './logger/logger.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthMiddleware } from './middleware/auth.middleware';
import { GuardMiddleware } from './middleware/guard.middleware';

async function bootstrap() {
  const logger = new LoggerService();
  const prismaService = new PrismaService(logger);
  const exceptionFilter = new ExceptionFilter(logger);
  const accountController = new AccountController(logger);

  const authService = new AuthService(prismaService);
  const authController = new AuthController(authService);
  const authMiddleware = new AuthMiddleware(logger);

  const guardMiddleware = new GuardMiddleware(logger, prismaService);

  const app = new App(
    logger,
    accountController,
    prismaService,
    exceptionFilter,
    authController,
    authMiddleware,
    guardMiddleware,
  );
  await app.init();
}
bootstrap();
