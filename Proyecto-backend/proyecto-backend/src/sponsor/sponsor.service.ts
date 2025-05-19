import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import { UpdateSponsorDto } from './dto/update-sponsor.dto';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class SponsorService extends PrismaClient implements OnModuleInit {
  async onModuleInit(){ 
    await this.$connect()};
    
  create(createSponsorDto: CreateSponsorDto) {
    return this.sponsor.create({
      data: createSponsorDto,
      });
  }

  findAll() {
    return this.sponsor.findMany();
  }

  update(id: string, updateSponsorDto: UpdateSponsorDto) {
    return this.sponsor.update({
      where:{id},
      data:updateSponsorDto,
      });
  }

  remove(id: string) {
    return this.sponsor.delete({
      where:{id},
    });
  }
}
