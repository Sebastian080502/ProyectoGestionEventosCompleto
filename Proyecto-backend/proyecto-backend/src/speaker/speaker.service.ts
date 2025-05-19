import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateSpeakerDto } from './dto/create-speaker.dto';
import { UpdateSpeakerDto } from './dto/update-speaker.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class SpeakerService extends PrismaClient  implements OnModuleInit {
  async onModuleInit(){
    await this.$connect();
  }
  create(createSpeakerDto: CreateSpeakerDto) {
    return this.speaker.create({
      data: createSpeakerDto,
    });
  }

  findAll() {
    return this.speaker.findMany();
  }


  update(id: string, updateSpeakerDto: UpdateSpeakerDto) {
    return this.speaker.update({
      where:{id},
      data: updateSpeakerDto,
    });
  }

  remove(id: string) {
    return this.speaker.delete({
      where:{id},
    });
  }
}
