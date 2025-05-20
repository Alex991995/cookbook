import bcrypt from 'bcryptjs';
import * as jose from 'jose';

import { PrismaService } from '@/database/prisma.service';
import { RegisterDTO } from './dto/register.dto';
import { jwtConstants, SALT } from '@/common/constants';
import { LoginDTO } from './dto/login.dto';

export class AuthService {
  constructor(private prismaService: PrismaService) {}

  async createUser(body: RegisterDTO) {
    const { password, email } = body;

    const existedUser = await this.isExistedUser(email);
    if (existedUser) {
      return null;
    }

    const hashPassword = await bcrypt.hash(password, SALT);

    return await this.prismaService.client.user.create({
      data: {
        email,
        password: hashPassword,
      },
    });
  }

  async loginUser({ email, password }: LoginDTO) {
    const existedUser = await this.isExistedUser(email);
    if (!existedUser) {
      return null;
    }
    const isMatchedPassword = await bcrypt.compare(password, existedUser?.password);

    if (existedUser?.email === email && isMatchedPassword) {
      const token = await this.signJWT(email);

      return { jwt: token };
    }
  }

  async isExistedUser(email: string) {
    return await this.prismaService.client.user.findUnique({
      where: {
        email,
      },
    });
  }

  async signJWT(email: string) {
    const payload: jose.JWTPayload = {};

    payload['email'] = email;

    const secret = new TextEncoder().encode(jwtConstants.secret);

    return await new jose.SignJWT(payload)
      .setProtectedHeader({ alg: jwtConstants.alg })
      .setIssuedAt()
      .setExpirationTime('5d')
      .sign(secret);
  }

}
