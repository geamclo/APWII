import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateContactanoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  Nombre: string;
}
