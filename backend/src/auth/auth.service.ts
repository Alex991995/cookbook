import bcrypt from 'bcrypt';

import { PrismaService } from '@/database/prisma.service';
import { RegisterDTO } from './dto/register.dto';

export class AuthService {
  constructor(private prismaService: PrismaService) {}

  async createUser(body: RegisterDTO) {
    const { password, email } = body;

    const existedUser = await this.isExistedUser(email);
    if (existedUser) {
      return null;
    }

    const hashPassword = await bcrypt.hash(password, 10);

    return await this.prismaService.client.user.create({
      data: {
        email,
        password: hashPassword,
      },
    });
  }

  async isExistedUser(email: string) {
    return await this.prismaService.client.user.findUnique({
      where: {
        email,
      },
    });
  }
}
