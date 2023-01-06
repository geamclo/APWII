const { Schema, model } = require("mongoose");




const ClienteSchema = Schema({

    Nombre: {
        type: String,
        required:[true, 'Este campo es obligatorio']
    },

    Identificacion: {
        type: String,
        required:[ true, 'Este campo es obligatorio' ]
    }
})


module.exports= model('Cliente', ClienteSchema)