import express, { Express } from 'express';
import { Server } from 'node:http';
import dotenv from 'dotenv';
import body from 'body-parser';

import { LoggerService } from './logger/logger.service';

import { AccountController } from './account/account.controller';
import { PrismaService } from './database/prisma.service';
import { ExceptionFilter } from './errors/exception.filter';
import { AuthController } from './auth/auth.controller';

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

	constructor(
		logger: LoggerService,
		accountController: AccountController,
		prismaService: PrismaService,
		exceptionFilter: ExceptionFilter,
		authController: AuthController,
	) {
		this.app = express();
		this.port = 8000;
		this.logger = logger;
		this.accountController = accountController;
		this.prismaService = prismaService;
		this.exceptionFilter = exceptionFilter;
		this.authController = authController;
	}

	useMiddleware() {
		this.app.use(body.json());
	}

	useRoutes() {
		console.log('useRoutes');
		// this.app.use('/account', this.accountController.router);
		this.app.use('/auth', this.authController.routes());
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
