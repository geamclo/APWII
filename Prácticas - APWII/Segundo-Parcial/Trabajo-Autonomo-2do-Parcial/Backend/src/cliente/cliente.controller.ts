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
import { ClienteService } from './cliente.service';
import { CreateClienteDTO } from './dto/cliente.dto';

@ApiTags('Cliente Schema')
@Controller('cliente')
export class ClienteController {
  constructor(private clienteService: ClienteService) {}

  @Post('/create')
  @ApiResponse({
    status: 201,
    description: 'Creación del modelo de datos Cliente',
  })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async createCliente(@Res() res, @Body() createClienteDTO: CreateClienteDTO) {
    const cliente = await this.clienteService.createCliente(createClienteDTO);
    return res.status(HttpStatus.OK).json({ cliente });
  }

  @Get('/')
  @ApiResponse({ status: 200, description: 'Búsqueda de los datos en DB' })
  @ApiResponse({ status: 400, description: 'Elementos no encontrados' })
  async getClientes(@Res() res) {
    const cliente = await this.clienteService.getClientes();
    return res.status(HttpStatus.OK).json({ cliente });
  }

  @Get('/:clienteID')
  @ApiResponse({
    status: 200,
    description: 'Busqueda de datos específico en la base de datos',
  })
  @ApiResponse({ status: 400, description: 'Elemento no encontrado' })
  async getCliente(@Res() res, @Param('clienteID') clienteID) {
    const cliente = await this.clienteService.getCliente(clienteID);
    if (!cliente) throw new NotFoundException('El cliente no existe');
    return res.status(HttpStatus.OK).json(cliente);
  }

  @Put('/:clienteID')
  @ApiResponse({ status: 200, description: 'Actualizacion completada' })
  @ApiResponse({ status: 400, description: 'Elemento no actualizado' })
  async updateCliente(
    @Res() res,
    @Body() createClienteDTO: CreateClienteDTO,
    @Param('clienteID') clienteID: string,
  ) {
    const updateCliente = await this.clienteService.updateCliente(
      clienteID,
      createClienteDTO,
    );
    if (!updateCliente) throw new NotFoundException('El cliente no existe');
    return res.status(HttpStatus.OK).json({
      message: 'Cliente actualizado exitosamente',
      updateCliente,
    });
  }

  @Delete('/:clienteID')
  @ApiResponse({ status: 200, description: 'Eliminación completa' })
  @ApiResponse({ status: 400, description: 'Elemento no eliminado' })
  async deleteCliente(@Res() res, @Param('clienteID') clienteID: string) {
    const clienteDeleted = await this.clienteService.deleteCliente(clienteID);
    if (!clienteDeleted) throw new NotFoundException('El cliente no existe');
    return res.status(HttpStatus.OK).json({
      message: 'Cliente eliminado exitosamente',
      clienteDeleted,
    });
  }
}
