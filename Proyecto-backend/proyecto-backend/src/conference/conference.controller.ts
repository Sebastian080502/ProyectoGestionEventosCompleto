import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConferenceService } from './conference.service';
import { CreateConferenceDto } from './dto/create-conference.dto';
import { UpdateConferenceDto } from './dto/update-conference.dto';

@Controller('conference')
export class ConferenceController  {
  constructor(private readonly conferenceService: ConferenceService) {}

  @Post()
  async create(@Body() createConferenceDto: CreateConferenceDto) {

    return await this.conferenceService.create(createConferenceDto);
  }


  @Get('')
  findAll() {
    return this.conferenceService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConferenceDto: UpdateConferenceDto) {
    return this.conferenceService.update(id, updateConferenceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.conferenceService.remove(id);
  }
}
