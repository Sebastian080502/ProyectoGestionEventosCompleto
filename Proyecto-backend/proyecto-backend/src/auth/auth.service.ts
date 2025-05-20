import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService extends PrismaClient {
  async validateUser(email: string, password: string) {
    const user = await this.user.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('Credenciales no válidas');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Credenciales no válidas');
    }

    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
