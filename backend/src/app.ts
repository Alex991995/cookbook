import express, { Express } from 'express';
import { Server } from 'node:http';
import dotenv from 'dotenv';
import body from 'body-parser';

import { LoggerService } from './logger/logger.service';

import { AccountController } from './account/account.controller';
import { PrismaService } from './database/prisma.service';
import { ExceptionFilter } from './errors/exception.filter';
import { AuthController } from './auth/auth.controller';
import { AuthMiddleware } from './middleware/auth.middleware';
import { GuardMiddleware } from './middleware/guard.middleware';
import { RecipeController } from './recipe/recipe.controller';
import path from 'node:path';
import { __dirname } from '../__dirname';

dotenv.config();

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

  constructor(
    logger: LoggerService,
    accountController: AccountController,
    prismaService: PrismaService,
    exceptionFilter: ExceptionFilter,
    authController: AuthController,
    authMiddleware: AuthMiddleware,
    guardMiddleware: GuardMiddleware,
    recipeController: RecipeController,
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
  }

  useMiddleware() {
    console.log('Middleware');
    this.app.use(body.json());
    this.app.use(
      body.urlencoded({
        extended: true,
      }),
    );
    //  this.app.use("/uploads", express.static(path.join("uploads")));
    // const r = path.join(__dirname, 'uploads');
    // console.log(r);
    const uploadsPath = path.join(__dirname, '/uploads');
    this.app.use(
      '/uploads',
      express.static(uploadsPath, {
        setHeaders: (res, path) => {
          res.set('Content-Type', 'image/png');
        },
      }),
    );

    this.app.use(this.authMiddleware.execute.bind(this.authMiddleware));
    this.app.use(this.guardMiddleware.execute.bind(this.guardMiddleware));
  }

  useRoutes() {
    console.log('useRoutes');
    // this.app.use('/account', this.accountController.router());
    this.app.use('/api/recipe', this.recipeController.routes());
    this.app.use('/api/auth', this.authController.routes());
  }

  useExceptionFilters() {
    this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter));
  }

  public async init() {
    console.log('init');
    this.useMiddleware();
    this.useRoutes();
    this.useExceptionFilters();
    await this.prismaService.connect();
    this.server = this.app.listen(this.port);
    this.logger.log(`Server is running on http://localhost:${this.port}`);
  }
}
