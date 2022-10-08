const { Mesero,Cliente } = require('./control-propina-s2')

//Creamos una función de búsqueda utilizando la función Async con la expresión Await

console.log("Búsqueda de datos con función Async/Await")
async function buscarMeseroID(id){
    const meseros = Mesero.find((meseros)=> meseros.id===id );
    if (!meseros)
    {
        const error =  new Error();
        error.message= "Mesero no encontrado";
        throw error;
    }
    return meseros;
}

async function buscarClienteID(id){
    const clientes = Cliente.find((clientes)=>{
        return clientes.id===id;
    });
    if (!clientes)
    {
        const error = new Error();
        error.message= "Cliente no encontrado";
        throw error;
    }
    return clientes;
}

( async ()=>{
    try
    {
        const meseros =  await buscarMeseroID(1);
        const clientes =  await  buscarClienteID(meseros.id_cliente);
        meseros.clientes = clientes;
        console.log(meseros)
        console.log(clientes)
    }
    catch (err)
    {
        console.log(err.message)
    }
})
();