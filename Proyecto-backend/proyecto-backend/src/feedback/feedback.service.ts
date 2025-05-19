import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class FeedbackService extends PrismaClient implements OnModuleInit{
  async onModuleInit() {
    await this.$connect();
  }
  create(createFeedbackDto: CreateFeedbackDto) {
    return this.feedback.create({
      data: createFeedbackDto,
    });
  }

  findAll() {
    return this.feedback.findMany({
      orderBy: {
        createdAt: 'desc',  // Ordenar por fecha de creación en orden descendente
      },
    });
  }

  update(id: string, updateFeedbackDto: UpdateFeedbackDto) {
    return this.feedback.update({
      where: { id },
      data: updateFeedbackDto,
    });
  }

  remove(id: string) {
    return this.feedback.delete({ where: { id } });
  }
}
