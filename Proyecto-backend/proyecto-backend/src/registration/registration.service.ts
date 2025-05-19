import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class RegistrationService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createRegistrationDto: CreateRegistrationDto) {
    return this.registration.create({
      data: createRegistrationDto,
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
