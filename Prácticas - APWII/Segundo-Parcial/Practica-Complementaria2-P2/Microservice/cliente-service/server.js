const cors = require("cors");
const express  = require("express");
const  { conexionBaseDatos } = require('./model/db.config')
const Cliente= require('./model/Cliente')

const app =  express();
const PUERTO =  4000;

const database = async ()=>{
    await conexionBaseDatos();

}
database();

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )


app.get('/api/v2/cliente', async (req,res)=>{

    const datos = await Cliente.find()
    
    res.status(200).send(
        datos
    )
})

app.post ('/api/v2/cliente', async (req,res)=>{
    const { Nombre, Identificacion} = req.body;
    const client = new Cliente({ Nombre, Identificacion })
    await client.save();
    res.status(200).send({
        message:"Dato insertado correctamente",
        client
    })
})

app.put('/api/v2/cliente/:id', async (req,res)=>{
    const {id} = req.params;
    const {...data} = req.body;

    const client = await Cliente.findByIdAndUpdate(id,data)
    
    res.status(200).send(
        {
            message:"Dato modificado correctamente",
            client
        }
    )

})
app.delete('/api/v2/cliente/:id', async (req,res)=>{
    const {id} =  req.params;
    await Cliente.findByIdAndDelete(id)
    res.status(200).send({
        response:"Se eliminó al cliente exitosamente"
    })
})



app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})