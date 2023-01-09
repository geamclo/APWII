import { ClienteService } from './cliente.service';
import { CreateClienteDTO } from './dto/cliente.dto';
export declare class ClienteController {
    private clienteService;
    constructor(clienteService: ClienteService);
    createCliente(res: any, createClienteDTO: CreateClienteDTO): Promise<any>;
    getClientes(res: any): Promise<any>;
    getCliente(res: any, clienteID: any): Promise<any>;
    updateCliente(res: any, createClienteDTO: CreateClienteDTO, clienteID: string): Promise<any>;
    deleteCliente(res: any, clienteID: string): Promise<any>;
}
