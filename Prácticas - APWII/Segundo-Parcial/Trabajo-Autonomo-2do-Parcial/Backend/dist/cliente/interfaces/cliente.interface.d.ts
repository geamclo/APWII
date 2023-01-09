import { Document } from 'mongoose';
export interface Cliente extends Document {
    readonly nombre: string;
    readonly identificacion: string;
}
