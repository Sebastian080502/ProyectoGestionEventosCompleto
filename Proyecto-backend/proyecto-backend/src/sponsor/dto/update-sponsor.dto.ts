import { PartialType } from '@nestjs/mapped-types';
import { CreateSponsorDto } from './create-sponsor.dto';
import { IsBoolean } from 'class-validator';

export class UpdateSponsorDto extends PartialType(CreateSponsorDto) {
    @IsBoolean()
    active: boolean;
}
