import { MeseroService } from './mesero.service';
import { CreateMeseroDTO } from './dto/mesero.dto';
export declare class MeseroController {
    private meseroService;
    constructor(meseroService: MeseroService);
    createMesero(res: any, createMeseroDTO: CreateMeseroDTO): Promise<any>;
    getMeseros(res: any): Promise<any>;
    getMesero(res: any, meseroID: string): Promise<any>;
    updateMesero(res: any, createMeseroDTO: CreateMeseroDTO, meseroID: string): Promise<any>;
    deleteMesero(res: any, meseroID: string): Promise<any>;
}
