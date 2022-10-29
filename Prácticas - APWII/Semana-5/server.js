const express = require('express')
const cors = require("cors");

const app = express()

const port = 3001

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )

let clientes = [];


app.get('/', (req,res)=>{
    res.status(200).send(
        clientes
    )
})
app.get('/:id', (req,res)=>{
    const {id} =  req.params;
    // req.params.identification
    let result = clientes.filter(p => p.id === id);
    if (result.length>0)
    {
        res.status(200).send(result[0]);
    }
    res.status(404).send({
        "message":"No se han encontrado elementos con el # de identificación"
    });
})
app.post('/', (req,res)=>{
    const {body} = req;
    // req.body.name
    // req.body.address
    clientes.push(body);
    res.status(200).send({
        message:"Dato insertado correctamente",
        response: body
    })
})
app.put('/', (req,res)=>{
    const {id, nombre, identificacion} = req.body;
    let cliente =  clientes.filter(p=> p.id === id)[0] || {}
        cliente.nombre = nombre;
        cliente.identificacion = identificacion;
    res.status(200).send(
        {
            message:"Dato modificado correctamente",
            response: cliente
        }
    )
})

app.delete('/:id', (req,res)=>{
    const {id} =  req.params;
    clientes = clientes.filter(p => p.id !== id);
    res.status(200).send({
        response:"Se eliminó al cliente exitosamente"
    })
})

app.listen(port, () => {
    console.log(`Aplicación en línea! Click en http://localhost:${port}`);
})