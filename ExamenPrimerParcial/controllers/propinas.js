const { response } = require('express')
const { Propinas} = require('../models')

const deletePropinas= async (req, res = response)=>{
    const {id} = req.params;
    const deletedPropinas =  await Tutorias.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedPropinas);
}
module.exports = {
    createPropinas,
    deletePropinas
};