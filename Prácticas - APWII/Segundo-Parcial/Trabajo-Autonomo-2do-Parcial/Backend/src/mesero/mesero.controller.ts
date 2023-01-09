import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MeseroService } from './mesero.service';
import { CreateMeseroDTO } from './dto/mesero.dto';

@ApiTags('Mesero Schema')
@Controller('mesero')
export class MeseroController {
  constructor(private meseroService: MeseroService) {}

  @Post('/create')
  @ApiResponse({
    status: 201,
    description: 'Creación del modelo de datos Mesero',
  })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async createMesero(@Res() res, @Body() createMeseroDTO: CreateMeseroDTO) {
    const mesero = await this.meseroService.createMesero(createMeseroDTO);
    return res.status(HttpStatus.OK).json({
      message: 'El mesero fue creado exitosamente',
      mesero,
    });
  }

  @Get('/')
  @ApiResponse({ status: 200, description: 'Búsqueda de los datos en DB' })
  @ApiResponse({ status: 400, description: 'Elementos no encontrados' })
  async getMeseros(@Res() res) {
    const mesero = await this.meseroService.getMeseros();
    return res.status(HttpStatus.OK).json({ mesero });
  }

  @Get('/:meseroID')
  @ApiResponse({
    status: 200,
    description: 'Busqueda del datos específico en la base de datos',
  })
  @ApiResponse({ status: 400, description: 'Elemento no encontrado' })
  async getMesero(@Res() res, @Param('meseroID') meseroID: string) {
    const mesero = await this.meseroService.getMesero(meseroID);
    if (!mesero) throw new NotFoundException('El mesero no existe');
    return res.status(HttpStatus.OK).json(mesero);
  }

  @Put('/:meseroID')
  @ApiResponse({ status: 200, description: 'Actualización completa' })
  @ApiResponse({ status: 400, description: 'Elemento no actualizado' })
  async updateMesero(
    @Res() res,
    @Body() createMeseroDTO: CreateMeseroDTO,
    @Param('meseroID') meseroID: string,
  ) {
    const updateMesero = await this.meseroService.updateMesero(
      meseroID,
      createMeseroDTO,
    );
    if (!updateMesero) throw new NotFoundException('El mesero no existe');
    return res.status(HttpStatus.OK).json({
      message: 'Mesero actualizado exitosamente',
      updateMesero,
    });
  }

  @Delete('/:meseroID')
  @ApiResponse({ status: 200, description: 'Eliminacion completa' })
  @ApiResponse({ status: 400, description: 'Elemento no Eliminado' })
  async deleteMesero(@Res() res, @Param('meseroID') meseroID: string) {
    const meseroDeleted = await this.meseroService.deleteMesero(meseroID);
    if (!meseroDeleted) throw new NotFoundException('El mesero no existe');
    return res.status(HttpStatus.OK).json({
      message: 'Mesero eliminado exitosamente',
      meseroDeleted,
    });
  }
}
