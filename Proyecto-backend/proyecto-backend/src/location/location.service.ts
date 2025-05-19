import { Injectable , OnModuleInit} from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class LocationService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect()
  };
  create(createLocationDto: CreateLocationDto) {
    return 'This action adds a new location';
  }

  findAll() {
    return this.location.findMany();

}

  update(id: string, updateLocationDto: UpdateLocationDto) {
    return this.location.update({
      where: { id },
      data: updateLocationDto,
    });
  }

  remove(id: string) {
    return this.location.delete({ where: { id } });
  }
}
