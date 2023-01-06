const cors = require("cors");
const express  = require("express");
const  { conexionBaseDatos } = require('./model/db.config')
const Mesero = require('./model/Mesero')

const app =  express();
const PUERTO =  4000;

const database = async ()=>{
    await conexionBaseDatos();

}
database();

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )


app.get('/api/v2/mesero', async (req,res)=>{

    const datos = await Mesero.find()
    
    res.status(200).send(
        datos
    )
})

app.post ('/api/v2/mesero', async (req,res)=>{
    const { Nombre} = req.body;
    const mesero = new Mesero({ Nombre })
    await mesero.save();
    res.status(200).send({
        message:"Dato insertado correctamente",
        mesero
    })
})

app.put('/api/v2/mesero/:id', async (req,res)=>{
    const {id} = req.params;
    const {...data} = req.body;

    const mesero = await Mesero.findByIdAndUpdate(id,data)
    
    res.status(200).send(
        {
            message:"Dato modificado correctamente",
            mesero
        }
    )

})
app.delete('/api/v2/mesero/:id', async (req,res)=>{
    const {id} =  req.params;
    await Mesero.findByIdAndDelete(id)
    res.status(200).send({
        response:"Se eliminó al mesero exitosamente"
    })
})



app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})