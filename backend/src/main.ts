import { AccountController } from './account/account.controller';
import { App } from './app';
import { PrismaService } from './database/prisma.service';
import { ExceptionFilter } from './errors/exception.filter';
import { LoggerService } from './logger/logger.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthMiddleware } from './middleware/auth.middleware';
import { GuardMiddleware } from './middleware/guard.middleware';
import { RecipeController } from './recipe/recipe.controller';
import { RecipeService } from './recipe/recipe.service';

async function bootstrap() {
  const logger = new LoggerService();
  const prismaService = new PrismaService(logger);

  const accountController = new AccountController(logger);

  const authService = new AuthService(prismaService);
  const authController = new AuthController(authService);

  const recipeService = new RecipeService(prismaService);
  const recipeController = new RecipeController(recipeService);

  const exceptionFilter = new ExceptionFilter(logger);
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
    recipeController,
  );
  await app.init();
}
bootstrap();
