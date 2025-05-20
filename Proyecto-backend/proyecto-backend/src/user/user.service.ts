import { Injectable, OnModuleInit, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async login(email: string, password: string) {
    console.log(email, password);
    const user = await this.user.findUnique({ where: { email } });
    console.log(user);
    if (!user) throw new UnauthorizedException('Usuario no encontrado');

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) throw new UnauthorizedException('Contraseña incorrecta');

    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    return this.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });
  }

  findAll() {
    return this.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.user.delete({ where: { id } });
  }
}
