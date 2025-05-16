import { PrismaService } from '@/database/prisma.service';
import { RegisterDTO } from './dto/register.dto';

export class AuthService {
	constructor(private prismaService: PrismaService) {}

	async createUser(body: RegisterDTO) {
		console.log(body);
		return body;
	}
}
