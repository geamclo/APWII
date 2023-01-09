import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Propina } from './interfaces/propina.interface';
import { CreatePropinaDTO } from './dto/propina.dto';

@Injectable()
export class PropinaService {
  constructor(
    @InjectModel('Propina') private readonly propinaModel: Model<Propina>,
  ) {}

  async getPropinas(): Promise<Propina[]> {
    const propinas = await this.propinaModel.find();
    return propinas;
  }

  async getPropina(propinaID: string): Promise<Propina> {
    const propina = await this.propinaModel.findById(propinaID);
    return propina;
  }

  async createPropina(createPropinaDTO): Promise<Propina> {
    const propina = new this.propinaModel(createPropinaDTO);
    return await propina.save();
  }

  async deletePropina(propinaID: string): Promise<Propina> {
    const deletePropina = await this.propinaModel.findByIdAndDelete(propinaID);
    return deletePropina;
  }

  async updatePropina(
    propinaID: string,
    createPropinaDTO: CreatePropinaDTO,
  ): Promise<Propina> {
    const updatePropina = await this.propinaModel.findByIdAndUpdate(
      propinaID,
      createPropinaDTO,
      { new: true },
    );
    return updatePropina;
  }
}
