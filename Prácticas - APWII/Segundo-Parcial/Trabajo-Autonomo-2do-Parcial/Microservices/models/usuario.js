const { Schema, model } = require("mongoose");




const UsuarioSchema = Schema({

    nombre: {
        type: String,
        required:[true, 'El campo nombre es obligatorio']
    },

    password: {
        type: String,
        required:[ true, 'El campo password es obligatorio' ]
    }
})


module.exports= model('Usuario', UsuarioSchema)