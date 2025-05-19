import { PartialType } from '@nestjs/mapped-types';
import { CreateConferenceDto } from './create-conference.dto';
import {IsBoolean} from 'class-validator';

export class UpdateConferenceDto extends PartialType(CreateConferenceDto) {
@IsBoolean()
active:boolean
}
