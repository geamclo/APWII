import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Mesero } from './interfaces/mesero.interface';
import { CreateMeseroDTO } from './dto/mesero.dto';

@Injectable()
export class MeseroService {
  constructor(
    @InjectModel('Mesero') private readonly meseroModel: Model<Mesero>,
  ) {}

  async getMeseros(): Promise<Mesero[]> {
    const meseros = await this.meseroModel.find();
    return meseros;
  }

  async getMesero(meseroID: string): Promise<Mesero> {
    const mesero = await this.meseroModel.findById(meseroID);
    return mesero;
  }

  async createMesero(createMeseroDTO): Promise<Mesero> {
    const mesero = new this.meseroModel(createMeseroDTO);
    return await mesero.save();
  }

  async deleteMesero(meseroID: string): Promise<Mesero> {
    const deleteMesero = await this.meseroModel.findByIdAndDelete(meseroID);
    return deleteMesero;
  }

  async updateMesero(
    meseroID: string,
    createMeseroDTO: CreateMeseroDTO,
  ): Promise<Mesero> {
    const updateMesero = await this.meseroModel.findByIdAndUpdate(
      meseroID,
      createMeseroDTO,
      { new: true },
    );
    return updateMesero;
  }
}
