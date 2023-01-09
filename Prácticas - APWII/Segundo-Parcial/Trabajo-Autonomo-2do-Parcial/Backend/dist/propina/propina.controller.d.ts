import { PropinaService } from './propina.service';
import { CreatePropinaDTO } from './dto/propina.dto';
export declare class PropinaController {
    private propinaService;
    constructor(propinaService: PropinaService);
    createPropina(res: any, createPropinaDTO: CreatePropinaDTO): Promise<any>;
    getPropinas(res: any): Promise<any>;
    getPropina(res: any, propinaID: any): Promise<any>;
    updatePropina(res: any, createPropinaDTO: CreatePropinaDTO, propinaID: string): Promise<any>;
    deletePropina(res: any, propinaID: string): Promise<any>;
}
