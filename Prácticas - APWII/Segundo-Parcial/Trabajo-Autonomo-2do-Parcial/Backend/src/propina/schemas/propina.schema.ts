import { Schema } from 'mongoose';

export const PropinaSchema = new Schema({
  id_mesero: String,
  id_cliente: String,
  fecha: String,
  hora: String,
  valor_propina: String,
});
