import { Document } from 'mongoose';
export interface Propina extends Document {
  readonly id_mesero: string;
  readonly id_cliente: string;
  readonly fecha: string;
  readonly hora: string;
  readonly valor_propina: string;
}
