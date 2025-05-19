import { PartialType } from '@nestjs/mapped-types';
import { CreateSpeakerDto } from './create-speaker.dto';
import { IsBoolean } from 'class-validator';

export class UpdateSpeakerDto extends PartialType(CreateSpeakerDto) {
    @IsBoolean()
    active: boolean;
}
