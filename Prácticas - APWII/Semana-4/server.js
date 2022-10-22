const path = require("path");
const express = require("express");
const cors =  require("cors");
const PUERTO = 8080;

const mesero_url = path.join(__dirname,"./mesero.html")
const cliente_url = path.join(__dirname,"./cliente.html")
const propina_url = path.join(__dirname,"./propina.html")
const error_url = path.join(__dirname,"./error.html")
const home_url = path.join(__dirname,"./home.html")

const server =  express();

server.use(cors()).use(express.json())

server.get('/', getData )

server.get('/mesero', (req,res)=>{
    res.status(200).sendFile(mesero_url);
})
server.get('/cliente',(req,res)=>{
    res.status(200).sendFile(cliente_url);
})
server.get('/propina',(req,res)=>{
    res.status(200).sendFile(propina_url);
})
server.use((req,res, next)=>{
    res.status(400).sendFile(error_url);
})

function getData (req, res){
    res.status(200).sendFile(home_url);
}

server.listen(PUERTO, () => {
    console.log(`Servidor en línea! http://localhost:${PUERTO}`);
})