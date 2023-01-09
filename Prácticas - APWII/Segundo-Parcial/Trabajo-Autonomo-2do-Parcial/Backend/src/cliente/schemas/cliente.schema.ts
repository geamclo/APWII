import { Schema } from 'mongoose';

export const ClienteSchema = new Schema({
  nombre: { type: String, require: true },
  identificacion: String,
});
