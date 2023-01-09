import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { MeseroModule } from './mesero/mesero.module';
import { PropinaModule } from './propina/propina.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactanosModule } from './contactanos/contactanos.module';

@Module({
  imports: [
    ClienteModule,
    MeseroModule,
    PropinaModule,
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    ContactanosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
