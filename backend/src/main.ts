import { AccountController } from './account/account.controller';
import { App } from './app';
import { PrismaService } from './database/prisma.service';
import { LoggerService } from './logger/logger.service';

async function bootstrap() {
	const logger = new LoggerService();
	const prismaService = new PrismaService(logger);
	const app = new App(logger, new AccountController(logger), prismaService);
	await app.init();
}
bootstrap();
