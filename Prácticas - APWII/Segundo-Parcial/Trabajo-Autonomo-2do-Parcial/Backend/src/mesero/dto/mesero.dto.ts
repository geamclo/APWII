import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateMeseroDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;
}
