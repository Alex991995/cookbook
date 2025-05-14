import express, { Express } from 'express';
import { Server } from 'node:http';
import { LoggerService } from './logger/logger.service';
import dotenv from 'dotenv';
import { AccountController } from './account/account.controller';
import { PrismaService } from './database/prisma.service';

dotenv.config();

export class App {
	app: Express;
	port: number;
	server: Server;
	logger: LoggerService;
	accountController: AccountController;
	// prismaService: PrismaService;

	constructor(
		logger: LoggerService,
		accountController: AccountController,
		private prismaService: PrismaService,
	) {
		this.app = express();
		this.port = 8000;
		this.logger = logger;
		this.accountController = accountController;
	}

	useRoutes() {
		// this.app.use('/account', this.accountController.router);
	}

	public async init() {
		this.useRoutes();
		await this.prismaService.connect();
		this.server = this.app.listen(this.port);
		this.logger.log(`Server is running on http://localhost:${this.port}`);
	}
}
