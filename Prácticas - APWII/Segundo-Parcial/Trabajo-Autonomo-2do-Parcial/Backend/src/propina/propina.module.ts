import { Module } from '@nestjs/common';
import { PropinaController } from './propina.controller';
import { PropinaService } from './propina.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PropinaSchema } from './schemas/propina.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Propina', schema: PropinaSchema }]),
  ],
  controllers: [PropinaController],
  providers: [PropinaService],
})
export class PropinaModule {}
