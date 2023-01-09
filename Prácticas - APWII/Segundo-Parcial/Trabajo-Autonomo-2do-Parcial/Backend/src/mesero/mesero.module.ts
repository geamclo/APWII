import { Module } from '@nestjs/common';
import { MeseroController } from './mesero.controller';
import { MeseroService } from './mesero.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MeseroSchema } from './schemas/mesero.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Mesero', schema: MeseroSchema }]),
  ],
  providers: [MeseroService],
  controllers: [MeseroController],
})
export class MeseroModule {}
