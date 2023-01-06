const { Schema, model } = require("mongoose");




const MeseroSchema = Schema({

    Nombre: {
        type: String,
        required:[true, 'Este campo es obligatorio']
    }
})


module.exports= model('Mesero', MeseroSchema)