import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cliente } from './interfaces/cliente.interface';
import { CreateClienteDTO } from './dto/cliente.dto';

@Injectable()
export class ClienteService {
  constructor(
    @InjectModel('Cliente') private readonly clienteModel: Model<Cliente>,
  ) {}

  async getClientes(): Promise<Cliente[]> {
    const clientes = await this.clienteModel.find();
    return clientes;
  }

  async getCliente(clienteID: string): Promise<Cliente> {
    const cliente = await this.clienteModel.findById(clienteID);
    return cliente;
  }

  async createCliente(createClienteDTO): Promise<Cliente> {
    const cliente = new this.clienteModel(createClienteDTO);
    return await cliente.save();
  }

  async deleteCliente(clienteID: string): Promise<Cliente> {
    const deleteCliente = await this.clienteModel.findByIdAndDelete(clienteID);
    return deleteCliente;
  }

  async updateCliente(
    clienteID: string,
    createClienteDTO: CreateClienteDTO,
  ): Promise<Cliente> {
    const updateCliente = await this.clienteModel.findByIdAndUpdate(
      clienteID,
      createClienteDTO,
      { new: true },
    );
    return updateCliente;
  }
}
