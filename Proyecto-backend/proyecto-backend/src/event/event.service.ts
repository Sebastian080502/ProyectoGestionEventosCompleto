import { Injectable, OnModuleInit} from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class EventService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createEventDto: CreateEventDto) {
    return this.event.create({
      data: createEventDto,
  });
}


findAll() {
  return this.event.findMany({
    orderBy: {
      createdAt: 'desc',  // Ordenar por fecha de creación en orden descendente
    },
  });
}

update(id:string, UpdateEventDto: UpdateEventDto) {
  return this.event.update({
    where:{id},
    data: UpdateEventDto,
  });
}

remove(id: string) {
  return this.event.delete({where:{id}});
}
}
