const { response, json, request } = require('express');
const Propina = require('../models/propinas');



const getPropinas = async (req, res= response)=>{
        const propinas =await  Propina.find();
        return res.json({propinas})
}


const getPropina = async (req=request, res= response)=>{
    const {id} = req.params
    const propina =  await Propina.findById(id)
    res.json(propina);
}

const createPropina = async(req=request,res=response)=>{
    const {id_mesero, id_cliente,  fecha, hora, valor_propina } =  req.body;
    
    const propinasave = new Propina({ id_mesero, id_cliente, fecha, hora, valor_propina})

    await propinasave.save()
  
    res.status(201).json(propinasave);
}
const updatePropina = async(req,res =  response)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    console.log(id,data)
    const updatedPropina =  await Propina.findByIdAndUpdate(id,data )
    res.json(updatedPropina);
}
const deletePropina =  async (req, res= response)=>{
    const {id} = req.params;
    await Propina.findByIdAndDelete(id)
    res.json(`Se ha eliminado la propina`);
}

 module.exports ={
    getPropinas, 
    getPropina,
    createPropina,
    updatePropina,
    deletePropina
 }