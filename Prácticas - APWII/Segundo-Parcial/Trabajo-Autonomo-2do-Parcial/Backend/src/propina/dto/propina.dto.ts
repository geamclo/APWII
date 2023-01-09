import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt, IsString } from 'class-validator';
export class CreatePropinaDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly id_mesero: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly id_cliente: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly fecha: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly hora: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly valor_propina: string;
}
