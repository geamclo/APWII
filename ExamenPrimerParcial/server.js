/*
@Programa: s/n
@Objetivo: Definir un método aplicado a la entidad transaccional que permita eliminar todos los datos ingresados
y cree 5 registros de ejemplo.
@Autor: Geam Mera
@Fecha: 14 de noviembre del 2022
*/

const express =  require('express');
const cors = require('cors');

const { dbConnection } =  require('./database/config');


class Server 
{
    constructor()
    {
        this.app = express.Router();
        this.router = express.Router();

        this.port = process.env.PORT;

        this.paths = {
            propinas: '/api/propinas',
        }

        this.connectDB();
        this.middlewares();
        this.routes();
        this.router.use('/v1/inventory', this.app);
        this._express = express().use(this.router);
    }
    async connectDB(){
        await dbConnection();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json())
        this.app.use(express.static('public'));
        this.app.use( '/uploads/', express.static('uploads'))

    }
    routes(){
        this.app.use(this.paths.propinas, require('./routes/propinas'))
    }

    listen(){
        this._express.listen(this.port, ()=>{
            console.log(`Servidor en linea! Click en ${this.port}`)
        })
    }


}
module.exports = Server;