const { Mesero,Cliente } = require('./control-propina-s2')

//Creamos una función de búsqueda utilizando el objeto Promises

console.log("Búsqueda utilizando Promises")
function buscarMeseroID (id){
    return new Promise((resolve, reject)=>{
        const meseros = Mesero.find ((meseros)=> meseros.id===id );
        if (!meseros)
        {
            const error= new Error();
            error.message= "Mesero no encontrado";
            reject(error);
        }
        resolve(meseros);
    })
}

function buscarClienteID(id){
    return new Promise((resolve, reject)=>{
        const clientes = Cliente.find ((clientes)=>{
            return clientes.id===id;
        });
        if (!clientes)
        {
            const error =  new Error();
            error.message= "Cliente no encontrado";
            reject(error);
        }
        resolve(clientes);
    })
}

buscarMeseroID(2)
.then((meseros)=>{ 
    console.log (meseros);
    return buscarClienteID (meseros.id_cliente);
})
.then((clientes)=>{
    console.log(clientes)
})
.catch((error)=>{
    console.log(error.message)
})