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
import { PropinaService } from './propina.service';
import { CreatePropinaDTO } from './dto/propina.dto';

@ApiTags('Propina Schema')
@Controller('propina')
export class PropinaController {
  constructor(private propinaService: PropinaService) {}

  @Post('/create')
  @ApiResponse({
    status: 201,
    description: 'Creación del modelo de datos Propina',
  })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async createPropina(@Res() res, @Body() createPropinaDTO: CreatePropinaDTO) {
    const propina = await this.propinaService.createPropina(createPropinaDTO);
    return res.status(HttpStatus.OK).json({
      message: 'La propina fue creada exitosamente',
      propina,
    });
  }

  @Get('/')
  @ApiResponse({ status: 200, description: 'Busqueda de los datos en DB' })
  @ApiResponse({ status: 400, description: 'Elementos no encontrados' })
  async getPropinas(@Res() res) {
    const propina = await this.propinaService.getPropinas();
    return res.status(HttpStatus.OK).json({ propina });
  }

  @Get('/:propinaID')
  @ApiResponse({
    status: 200,
    description: 'Busqueda del datos específico en la base de datos',
  })
  @ApiResponse({ status: 400, description: 'Elemento no encontrado' })
  async getPropina(@Res() res, @Param('propinaID') propinaID) {
    const propina = await this.propinaService.getPropina(propinaID);
    if (!propina) throw new NotFoundException('La propina no existe');
    return res.status(HttpStatus.OK).json(propina);
  }

  @Put('/:propinaID')
  @ApiResponse({ status: 200, description: 'Actualización completa' })
  @ApiResponse({ status: 400, description: 'Elemento no actualizado' })
  async updatePropina(
    @Res() res,
    @Body() createPropinaDTO: CreatePropinaDTO,
    @Param('propinaID') propinaID: string,
  ) {
    const updatePropina = await this.propinaService.updatePropina(
      propinaID,
      createPropinaDTO,
    );
    if (!updatePropina) throw new NotFoundException('La propina no existe');
    return res.status(HttpStatus.OK).json({
      message: 'Propina actualizada exitosamente',
      updatePropina,
    });
  }

  @Delete('/:propinaID')
  @ApiResponse({ status: 200, description: 'Eliminación completa' })
  @ApiResponse({ status: 400, description: 'Elemento no eliminado' })
  async deletePropina(@Res() res, @Param('propinaID') propinaID: string) {
    const propinaDeleted = await this.propinaService.deletePropina(propinaID);
    if (!propinaDeleted) throw new NotFoundException('La propina no existe');
    return res.status(HttpStatus.OK).json({
      message: 'Propina eliminada exitosamente',
      propinaDeleted,
    });
  }
}
