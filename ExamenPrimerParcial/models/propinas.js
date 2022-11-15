const { model, Schema } = require('mongoose');

const PropinasSchema = Schema(
    {
        id_mesero:{
            type: Number,
            default:0
        },
        id_cliente:{
            type: Number,
            default:0
        },
        Fecha:{
            type: String,
            required: [ true, 'Es obligatoria'],
            unique:true
        },
        Hora:{
            type: Number,
            default:0
        },
        Valor_Propina:{
            type: String,
            required: [ true, 'Es obligatoria'],
            unique:true
        },

    }
);

PropinasSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Propinas', PropinasSchema );