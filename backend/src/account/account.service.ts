import { UpdateAccountDto } from './dto/account.dto';
import bcrypt from 'bcryptjs';
import * as jose from 'jose';

import { PrismaService } from '@/database/prisma.service';
import { jwtConstants, SALT } from '@/common/constants';

export class AccountService {
  constructor(private prismaService: PrismaService) {}

  async getInfoUser(id: string) {
    return await this.prismaService.client.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        email: true,
        name: true,
        image: true,
        password: true,
      },
    });
  }

  async updateCredentials(id: string, credentials: UpdateAccountDto) {
    const { newPassword, oldPassword, ...otherCred } = credentials;
    const user = await this.getInfoUser(id);
    if (!user) {
      return false;
    }

    try {
      if (oldPassword && newPassword) {
        const isMatchPassword = await bcrypt.compare(oldPassword, user.password);
        if (isMatchPassword) {
          await this.prismaService.client.user.update({
            where: {
              id,
            },
            data: { ...otherCred, password: newPassword },
          });
        }
      } else {
        await this.prismaService.client.user.update({
          where: {
            id,
          },
          data: { ...otherCred, password: oldPassword },
        });
      }
      if (otherCred.email && otherCred.email !== user.email) {
        const token = await this.signJWT(otherCred.email);
        return { jwt: token };
      }
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
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
