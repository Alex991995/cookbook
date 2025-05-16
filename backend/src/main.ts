import { AccountController } from './account/account.controller';
import { App } from './app';
import { PrismaService } from './database/prisma.service';
import { ExceptionFilter } from './errors/exception.filter';
import { LoggerService } from './logger/logger.service';
import { MainRoute } from './main-route';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';

async function bootstrap() {
	const logger = new LoggerService();
	const prismaService = new PrismaService(logger);
	const exceptionFilter = new ExceptionFilter(logger);
	const accountController = new AccountController(logger);

	const authService = new AuthService(prismaService);
	const authController = new AuthController(logger, authService);
	// const mainRoute = new MainRoute(accountController);

	const app = new App(logger, accountController, prismaService, exceptionFilter, authController);
	await app.init();
}
bootstrap();
