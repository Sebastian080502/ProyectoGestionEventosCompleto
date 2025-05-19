import { IsString, IsEmail } from "class-validator";

export class CreateSpeakerDto {
    @IsString()
    name:string;
    @IsString()
    biography:string;
    @IsString()
    topic:string;
    @IsString()
    @IsEmail()
    email:string;
    @IsString()
    phone:string;
    @IsString()
    affiliation:string;
}
