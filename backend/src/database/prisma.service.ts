import { PrismaClient } from '../generated/prisma';
import { LoggerService } from '@/logger/logger.service';

export class PrismaService {
	client: PrismaClient;

	constructor(private logger: LoggerService) {
		this.client = new PrismaClient();
	}

	async connect() {
		try {
			await this.client.$connect();
			this.logger.log('Database is connected');
		} catch (error) {
			if (error instanceof Error) {
				this.logger.error('Database is connected' + error.message);
			}
		}
	}
	async disconnect() {
		await this.client.$disconnect();
		this.logger.log('Database is disconnected');
	}
}
