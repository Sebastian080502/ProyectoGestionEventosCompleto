import { IsString } from 'class-validator';

export class CreateFeedbackDto {

    @IsString()
   rating: string;
    @IsString()
    comment: string;
    @IsString()
    eventId: string;
    @IsString()
    userEmail: string;
    @IsString()
    phone: string;
}
