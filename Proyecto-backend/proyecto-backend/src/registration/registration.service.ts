import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class RegistrationService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async create(createRegistrationDto: CreateRegistrationDto) {
    let user = await this.user.findUnique({
      where: { email: createRegistrationDto.email },
    });

    if (!user) {
      const hashedPassword = await bcrypt.hash(createRegistrationDto.password, 10);
      console.log(createRegistrationDto.password);
      console.log(hashedPassword);
      user = await this.user.create({
        data: {
          name: createRegistrationDto.name,
          email: createRegistrationDto.email,
          password: hashedPassword,
          role: createRegistrationDto.role,
        },
      });
    }

    return this.registration.create({
      data: {
        name: createRegistrationDto.name,
        email: createRegistrationDto.email,
        phone: createRegistrationDto.phone,
        institution: createRegistrationDto.institution,
        role: createRegistrationDto.role,
        eventId: createRegistrationDto.eventId,
        user: {
          connect: { id: user.id },
        },
      },
    });
  }

  findAll() {
    return this.registration.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  update(id: string, updateRegistrationDto: UpdateRegistrationDto) {
    return this.registration.update({
      where: { id },
      data: updateRegistrationDto,
    });
  }

  remove(id: string) {
    return this.registration.delete({
      where: { id },
    });
  }
}
