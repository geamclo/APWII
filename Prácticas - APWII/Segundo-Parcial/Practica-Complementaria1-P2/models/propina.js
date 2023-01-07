const { model, Schema } = require('mongoose');

const PropinaSchema = Schema(   {
    id_mesero:{
        type: String,
        required: [ true, 'Este campo es requerido'],
       
    },
    id_cliente:{
        type: String,
        required: [ true, 'Este campo es requerido'],
    },
    fecha:{
        type: String,
        required: [ true, 'Este campo es requerido'],
    },
    hora:{
        type: String,
        required: [ true, 'Este campo es requerido'],
    },
    valor_propina:{
        type: String,
        required: [ true, 'Este campo es requerido'],
    },
}
);

module.exports = model('Propina', PropinaSchema );
