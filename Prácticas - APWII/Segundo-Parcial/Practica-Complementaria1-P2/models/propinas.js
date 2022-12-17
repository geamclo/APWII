const { model, Schema } = require('mongoose');

const PropinaSchema = Schema(   {
    id_mesero:{
        type: Number,
            default:0
       
    },
    id_cliente:{
        type: Number,
            default:0
    },
    fecha:{
        type: String,
        required: [ true, 'El campo de la fecha es requerido'],
    },
    hora:{
        type: String,
        required: [ true, 'El campo de la hora es requerido'],
    },
    valor_propina:{
        type: String,
        required: [ true, 'El campo del valor de la propina es requerido'],
    },
}
);

module.exports = model('Propina', PropinaSchema );