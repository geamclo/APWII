const { response, request } = require('express');
const Usuario = require('../models/usuario');


const usuarioGet = async (req, res=response) =>{ 
    const usuario = await Usuario.find();
    res.status(200).json(usuario)
}
const usuarioPost = async (req, res=response) =>{ 
    const { nombre , password } = req.body; 
    const usuario = new Usuario({nombre , password })

    await usuario.save();
    res.status(200).json(usuario)
}
const usuarioPut = async (req, res=response) =>{ 
    const {id}= req.params;
    const { ...data } = req.body; 
    const usuario = await Usuario.findByIdAndUpdate(id,data, {new: true})
    res.status(200).json(
        usuario
    )
}




const usuarioDelete = async (req= request, res=response) =>{
    const {id}= req.params;

    const usuario = await Usuario.deleteOne({id})

    res.json({

        msg:'Usuario eliminado con exito'

    })
}

module.exports={
    usuarioDelete,
    usuarioPost,  
    usuarioGet,
    usuarioPut
}