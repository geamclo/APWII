import { Model } from 'mongoose';
import { Mesero } from './interfaces/mesero.interface';
import { CreateMeseroDTO } from './dto/mesero.dto';
export declare class MeseroService {
    private readonly meseroModel;
    constructor(meseroModel: Model<Mesero>);
    getMeseros(): Promise<Mesero[]>;
    getMesero(meseroID: string): Promise<Mesero>;
    createMesero(createMeseroDTO: any): Promise<Mesero>;
    deleteMesero(meseroID: string): Promise<Mesero>;
    updateMesero(meseroID: string, createMeseroDTO: CreateMeseroDTO): Promise<Mesero>;
}
