import { IsString , IsEmail} from 'class-validator';

export class CreateSponsorDto {
    @IsString()
    name:string;
    @IsEmail()
    @IsString()
    email:string;
    @IsString()
    industry:string;
    @IsString()
    contact:string;
    @IsString()
    phone:string;
}
