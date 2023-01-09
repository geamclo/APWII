import { Model } from 'mongoose';
import { Propina } from './interfaces/propina.interface';
import { CreatePropinaDTO } from './dto/propina.dto';
export declare class PropinaService {
    private readonly propinaModel;
    constructor(propinaModel: Model<Propina>);
    getPropinas(): Promise<Propina[]>;
    getPropina(propinaID: string): Promise<Propina>;
    createPropina(createPropinaDTO: any): Promise<Propina>;
    deletePropina(propinaID: string): Promise<Propina>;
    updatePropina(propinaID: string, createPropinaDTO: CreatePropinaDTO): Promise<Propina>;
}
