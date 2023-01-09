import { Injectable } from '@nestjs/common';
import { CreateContactanoDto } from './dto/create-contactano.dto';
import { UpdateContactanoDto } from './dto/update-contactano.dto';
import { Contactano } from './entities/contactano.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ContactanosService {
  constructor(
    @InjectModel(Contactano.name)
    private readonly ContactanoModel: Model<Contactano>,
  ) {}

  async create(createContactanoDto: CreateContactanoDto) {
    const contactano = await this.ContactanoModel.create(createContactanoDto);
    return contactano;
  }

  async findAll() {
    return await this.ContactanoModel.find();
  }
}
