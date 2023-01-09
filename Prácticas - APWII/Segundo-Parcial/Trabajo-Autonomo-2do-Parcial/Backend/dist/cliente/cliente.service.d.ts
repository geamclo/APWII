import { Model } from 'mongoose';
import { Cliente } from './interfaces/cliente.interface';
import { CreateClienteDTO } from './dto/cliente.dto';
export declare class ClienteService {
    private readonly clienteModel;
    constructor(clienteModel: Model<Cliente>);
    getClientes(): Promise<Cliente[]>;
    getCliente(clienteID: string): Promise<Cliente>;
    createCliente(createClienteDTO: any): Promise<Cliente>;
    deleteCliente(clienteID: string): Promise<Cliente>;
    updateCliente(clienteID: string, createClienteDTO: CreateClienteDTO): Promise<Cliente>;
}
