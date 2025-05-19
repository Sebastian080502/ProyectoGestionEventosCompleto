import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateConferenceDto } from './dto/create-conference.dto';
import { UpdateConferenceDto } from './dto/update-conference.dto';
import { PrismaClient } from '@prisma/client';


function parseDate(dateStr: string): string  {
 
  return new Date(dateStr + "T00:00:00.000Z").toISOString();
}

@Injectable()
export class ConferenceService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  // Crear una nueva conferencia
 async create(createConferenceDto: CreateConferenceDto) {
    console.log(createConferenceDto);
    const { startDate, endDate, ...conferenceData } = createConferenceDto;

    if (!startDate || !endDate) {
      throw new Error('startDate y endDate son obligatorios y deben tener formato DD/MM/AAAA');
    }


    return await this.conference.create({
      data: {
        ...conferenceData,
        startDate: parseDate(startDate),  // Conversión aquí
        endDate: parseDate(endDate),      // Conversión aquí
      },
    });
  }

  // Obtener todas las conferencias
  findAll() {
    return this.conference.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  // Actualizar una conferencia
  update(id: string, updateConferenceDto: UpdateConferenceDto) {
    const { startDate, endDate, ...conferenceData } = updateConferenceDto;

    return this.conference.update({
      where: { id },
      data: {
        ...conferenceData,
        ...(startDate && { startDate: parseDate(startDate) }),  // Conversión aquí
        ...(endDate && { endDate: parseDate(endDate) }),        // Conversión aquí
      },
    });
  }

  // Eliminar una conferencia
  async remove(id: string) {
    return await this.conference.delete({
      where: { id },
    });
  }
}
