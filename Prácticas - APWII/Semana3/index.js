/*
@Programa: Control de Propina
@Objetivo: Aplicar funciones JavaScript en entornos. Conectarse a base de datos no relacional. Ejecutar código JS en el servidor. Refactorizar código aplicando funciones
@Autor: Geam Mera
@Fecha: 14 de Octubre del 2022
*/

const mongoose = require('mongoose');


//Conexion con base de datos via string de MongoAtlas
const MongoUrl = "mongodb+srv://geammera:geammera18@cluster0.ipv7rf7.mongodb.net/?retryWrites=true&w=majority";

(async()=>{

    try {
        const MongoConection = await mongoose.connect(MongoUrl);  
        
        //Definiendo de los 3 modelos aplicando Mongoose
        const mesero = mongoose.model("Mesero", 
        { 
            id:String,
            nombre:String
        });

        const cliente = mongoose.model("Cliente", 
        { 
            id:String,
            nombre:String,
            identificacion:String
        })

        const propina = mongoose.model("Propina", 
        {
            id:String,
            id_mesero: { type: mongoose.Schema.Types.ObjectId, ref:"Mesero"},
            id_cliente: { type: mongoose.Schema.Types.ObjectId, ref:"Cliente" },
            fecha: String,
            hora: String,
            valor_propina: String
        })

        //Ingreso de los datos en los 3 modelos ya definidos
        //Datos para la entidad Mesero
        const mesero1 = new mesero (
            {
                id: "1",
                nombre: "Chefsito Jr"
            }
        )
        const saveMesero1 = await mesero1.save()

        const mesero2 = new mesero (
            {
                id: "2",
                nombre: "Samantha A."
            }
        )
        const saveMesero2 = await mesero2.save()

        const mesero3 = new mesero (
            {
                id: "3",
                nombre: "Cristhian B."
            }
        )
        const saveMesero3 = await mesero3.save()

        const mesero4 = new mesero (
            {
                id: "4",
                nombre: "'Cristhina C."
            }
        )
        const saveMesero4 = await mesero4.save()

        const mesero5 = new mesero (
            {
                id: "5",
                nombre: "Mario A."
            }
        )
        const saveMesero5 = await mesero5.save()
        
        //Datos para la entidad Cliente
        const cliente1 = new cliente (
            {
                nombre: "Geam Mera",
                identificacion: "131650281-2"
            }
        )
        const saveCliente1 = await cliente1.save()

        const cliente2 = new cliente (
            {
                nombre: "Nayelhi Velez",
                identificacion: "131650281-3"
            }
        )
        const saveCliente2 = await cliente2.save()

        const cliente3 = new cliente (
            {
                nombre: "Joahan Mera",
                identificacion: "131650281-4"
            }
        )
        const saveCliente3 = await cliente3.save()

        const cliente4 = new cliente (
            {
                nombre: "Karen Anchundia", 
                identificacion: "131650281-5"
            }
        )
        const saveCliente4 = await cliente4.save()

        const cliente5 = new cliente (
            {
                nombre: "Jean Cevallos",
                identificacion: "131650281-6"
            }
        )
        const saveCliente5 = await cliente5.save()

        //Datos para la entidad Propina
        const propina1 = new propina (
            {
                id: '1',
                id_mesero: saveMesero1._id,
                id_cliente: saveCliente1._id,
                fecha:'24/09/2022',
                hora:'9 PM',
                valor_propina: '3$'
            }
        )
        const savePropina1= await propina1.save()

        const propina2 = new propina (
            {
                id_mesero: saveMesero2._id,
                id_cliente: saveCliente2._id,
                fecha:'24/09/2022',
                hora:'9 PM',
                valor_propina: '3$'
            }
        )
        const savePropina2= await propina2.save()

        const propina3 = new propina (
            {
                id_mesero: saveMesero3._id,
                id_cliente: saveCliente3._id,
                fecha:'30/09/2022',
                hora:'10 AM',
                valor_propina: '2$'
            }
        )
        const savePropina3= await propina3.save()

        const propina4 = new propina (
            {
                id_mesero: saveMesero4._id,
                id_cliente: saveCliente4._id,
                fecha:'30/09/2022',
                hora:'12 PM',
                valor_propina: '1$'
            }
        )
        const savePropina4= await propina4.save()

        const propina5 = new propina (
            {
                id_mesero: saveMesero5._id,
                id_cliente: saveCliente5._id,
                fecha:'30/09/2022',
                hora:'8 PM',
                valor_propina: '1.5$'
            }
        )
        const savePropina5= await propina5.save()

        //Listando por consola los datos registrados en las colecciones

        //Usando estructura ForIn
        const verMesero = await mesero.find();
        for(Elementos in verMesero){
            console.log(verMesero[Elementos]);
        }

        //Usando bucle while
        const verCliente = await cliente.find();
        let iterador=0;
        while(iterador <verCliente.length){
            console.log(verCliente[iterador]);
            iterador++;
        }

        //Usando ForOf
        const verPropina = await propina.find();
        for(Elementos of verPropina){
            console.log(Elementos);
        }


    } catch (error) {
        console.log(error.message);
    }

})();