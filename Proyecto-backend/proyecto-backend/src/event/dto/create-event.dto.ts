import { IsString , IsDate, } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateEventDto {

    @IsString()
    title:string
    @IsString()
    description:string
   
    @IsDate({message:'la fecha debe ser validar (ej: 2023-10-10)'})
    @Type(() => Date) // convierte el string a Date
    date:Date
    @IsString()
    location:string
    @IsString()
    capacity:string
    @IsString()
    category:string
}
