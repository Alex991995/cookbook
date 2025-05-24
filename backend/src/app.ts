import express, { Express } from 'express';
import { Server } from 'node:http';
import body from 'body-parser';

import { AuthMiddleware } from './middleware/auth.middleware';
import { GuardMiddleware } from './middleware/guard.middleware';

import { LoggerService } from './logger/logger.service';
import { PrismaService } from './database/prisma.service';
import { ExceptionFilter } from './errors/exception.filter';

import { AccountController } from './account/account.controller';
import { AuthController } from './auth/auth.controller';
import { RecipeController } from './recipe/recipe.controller';

import { uploadsCookbookPath, uploadsCookbookRootPath, uploadsRecipePath, uploadsRecipesRootPath } from './common/constants';
import { CookbookController } from './cookbook/cookbook.controller';

export class App {
  app: Express;
  port: number;
  server: Server;
  logger: LoggerService;
  accountController: AccountController;
  prismaService: PrismaService;
  exceptionFilter: ExceptionFilter;
  authController: AuthController;
  authMiddleware: AuthMiddleware;
  guardMiddleware: GuardMiddleware;
  recipeController: RecipeController;
  cookbookController: CookbookController;

  constructor(
    logger: LoggerService,
    accountController: AccountController,
    prismaService: PrismaService,
    exceptionFilter: ExceptionFilter,
    authController: AuthController,
    authMiddleware: AuthMiddleware,
    guardMiddleware: GuardMiddleware,
    recipeController: RecipeController,
    cookbookController: CookbookController,
  ) {
    this.app = express();
    this.port = 8000;
    this.logger = logger;
    this.accountController = accountController;
    this.prismaService = prismaService;
    this.exceptionFilter = exceptionFilter;
    this.authController = authController;
    this.authMiddleware = authMiddleware;
    this.guardMiddleware = guardMiddleware;
    this.recipeController = recipeController;
    this.cookbookController = cookbookController;
  }

  useMiddleware() {
    this.app.use(body.json());
    this.app.use(
      body.urlencoded({
        extended: true,
      }),
    );

    this.app.use(uploadsRecipePath, express.static(uploadsRecipesRootPath));
    this.app.use(uploadsCookbookPath, express.static(uploadsCookbookRootPath));

    this.app.use(this.authMiddleware.execute.bind(this.authMiddleware));
    this.app.use(this.guardMiddleware.execute.bind(this.guardMiddleware));
  }

  useRoutes() {
    // this.app.use('/account', this.accountController.router());
    this.app.use('/api/recipe', this.recipeController.routes());
    this.app.use('/api/auth', this.authController.routes());
    this.app.use('/api/cookbook', this.cookbookController.routes());
  }

  useExceptionFilters() {
    this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter));
  }

  public async init() {
    this.useMiddleware();
    this.useRoutes();
    this.useExceptionFilters();
    await this.prismaService.connect();
    this.server = this.app.listen(this.port);
    this.logger.log(`Server is running on http://localhost:${this.port}`);
  }
}
