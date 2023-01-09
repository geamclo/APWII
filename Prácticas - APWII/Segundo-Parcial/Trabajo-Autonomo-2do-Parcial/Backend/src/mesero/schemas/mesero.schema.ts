import { Schema } from 'mongoose';

export const MeseroSchema = new Schema({
  nombre: { type: String, require: true },
});
