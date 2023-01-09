import {Prop, SchemaFactory, Schema } from "@nestjs/mongoose"
import { ObjectId } from "mongoose"

@Schema()
export class Contactano {

    id: ObjectId

    @Prop()
    Nombre: string

}

export const SchemaContactano = SchemaFactory.createForClass(Contactano)

