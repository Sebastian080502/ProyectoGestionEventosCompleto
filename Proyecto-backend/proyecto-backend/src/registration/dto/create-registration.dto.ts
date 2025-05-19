import { IsEmail, IsString } from 'class-validator';

export class CreateRegistrationDto {
    @IsString()
    name: string;
    @IsString()
    @IsEmail()
    email: string;
    @IsString()
    phone: string;
    @IsString()
    institution: string;
    @IsString()
    role:string;
    @IsString()
    eventId: string;
    
}
