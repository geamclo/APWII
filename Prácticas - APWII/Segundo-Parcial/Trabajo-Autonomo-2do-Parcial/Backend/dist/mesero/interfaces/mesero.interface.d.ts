import { Document } from 'mongoose';
export interface Mesero extends Document {
    readonly nombre: string;
}
