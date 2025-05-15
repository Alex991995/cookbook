import express, { Express } from 'express';
import { Server } from 'node:http';
import { LoggerService } from './logger/logger.service';
import dotenv from 'dotenv';
import { AccountController } from './account/account.controller';
import { PrismaService } from './database/prisma.service';
import { ExceptionFilter } from './errors/exception.filter';

dotenv.config();

export class App {
	app: Express;
	port: number;
	server: Server;
	logger: LoggerService;
	accountController: AccountController;
	prismaService: PrismaService;
	exceptionFilter: ExceptionFilter;

	constructor(
		logger: LoggerService,
		accountController: AccountController,
		prismaService: PrismaService,
		exceptionFilter: ExceptionFilter,
	) {
		this.app = express();
		this.port = 8000;
		this.logger = logger;
		this.accountController = accountController;
		this.prismaService = prismaService;
		this.exceptionFilter = exceptionFilter;
	}

	useRoutes() {
		console.log('useRoutes');
		this.app.use('/account', this.accountController.router);
	}

	useExceptionFilters() {
		console.log('useExceptionFilters');
		this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter));
	}

	public async init() {
		console.log('init');
		this.useRoutes();
		this.useExceptionFilters();
		await this.prismaService.connect();
		this.server = this.app.listen(this.port);
		this.logger.log(`Server is running on http://localhost:${this.port}`);
	}
}
