import { PartialType } from '@nestjs/mapped-types';
import { CreateLocationDto } from './create-location.dto';
import { IsBoolean } from 'class-validator';

export class UpdateLocationDto extends PartialType(CreateLocationDto) {
    @IsBoolean()
    active:boolean
}
