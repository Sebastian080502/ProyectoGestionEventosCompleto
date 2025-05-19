import { IsString } from "class-validator";

export class CreateLocationDto {
    @IsString()
    name:string;
    @IsString()
    address:string;
    @IsString()
    city:string;
    @IsString()
    capacity:string;
    @IsString()
    room:string;
}
