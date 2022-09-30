/*

@Programa: Control de Propina
@Objetivo: Recordar instrucciones y sentencias JS. Ejecutar código JS en el servidor. Refactorizar código aplicando funciones
@Autor: Geam Mera
@Fecha: 30 de Septiembre del 2022

*/

// 1) Definimos un objeto por cada entidad.
const Objetos = () => { // Declaramos variable para las entidades y usamos función flecha.

    const Mesero = {
        id: 1,
        Nombre_Mesero: 'Chefsito Jr.'
    }

    const Cliente = {
        id: 1,
        Nombre_Cliente: 'Geam Mera',
        Identificacion: '131650281-2'
    }

    const Propina = {
        id: 1,
        id_mesero: 1,
        id_cliente: 1,
        Fecha: '24/09/2022',
        Hora: '9 PM',
        Valor_Propina: 1
    }

    console.log( Mesero );
    console.log( Cliente );
    console.log( Propina );
}

// 2) Se crean arreglos por cada entidad y se almacenen al menos 5 objetos.

const Mesero = [
    {
        id: 1,
        Nombre: 'Chefsito Jr.'
    },
    {
        id: 2,
        Nombre: 'Samantha A.'
    },
    {
        id: 3,
        Nombre: 'Cristhian B.'
    },
    {
        id: 4,
        Nombre: 'Cristhina C.'
    },
    {
        id: 5,
        Nombre: 'Mario A.'
    },
]

const Cliente = [
    {
        id: 1,
        Nombre_Cliente: 'Geam Mera',
        Identificacion: '131650281-2'
    },
    {
        id: 2,
        Nombre_Cliente: 'Nayelhi Velez',
        Identificacion: '131650281-3'
    },
    {
        id: 3,
        Nombre_Cliente: 'Joahan Mera',
        Identificacion: '131650281-4'
    },
    {
        id: 4,
        Nombre_Cliente: 'Karen Anchundia',
        Identificacion: '131650281-5'
    },
    {
        id: 5,
        Nombre_Cliente: 'Jean Cevallos',
        Identificacion: '131650281-6'
    },
]

const Propina = [
    {
        id: 1,
        id_mesero: 1,
        id_cliente: 1,
        Fecha: '24/09/2022',
        Hora: '9 PM',
        Valor_Propina: 2
    },
    {
        id: 2,
        id_mesero: 2,
        id_cliente: 2,
        Fecha: '24/09/2022',
        Hora: '9 PM',
        Valor_Propina: 2
    },
    {
        id: 3,
        id_mesero: 3,
        id_cliente: 3,
        Fecha: '30/09/2022',
        Hora: '10 AM',
        Valor_Propina: 1.5
    },
    {
        id: 4,
        id_mesero: 4,
        id_cliente: 4,
        Fecha: '30/09/2022',
        Hora: '12 PM',
        Valor_Propina: 1
    },
    {
        id: 5,
        id_mesero: 5,
        id_cliente: 5,
        Fecha: '30/09/2022',
        Hora: '8 PM',
        Valor_Propina: 1.5
    },
]

// 3) Se hace el uso de 3 diferentes instrucciones repetitivas para recorrer y mostrar elementos de todos los arreglos.

/* Sentencia For Of */

const sentencia_ForOf = () => {
    console.log('Ejecución con Sentencia For Of');
    console.log('Meseros');
    /* Uso const ya que en este caso no modificaré la variable */
    for( const Meseros of Mesero) console.log(Meseros);

    console.log('\nClientes');
    /* Uso const ya que en este caso no modificaré la variable */
    for( const Clientes of Cliente) console.log(Clientes);

    console.log('\nPropina');
    /* Uso const ya que en este caso no modificaré la variable */
    for( const Propinas of Propina) console.log(Propinas);
}

/* Bucle While */

const bucleWhile = () => {
    console.log('Ejecución con Bucle While');
    let i= 0
    console.log('Meseros');
    while( i< Mesero.length){
        console.log(Mesero[i]);
        i++;
    }

    console.log('\nClientes');
    i= 0;
    while( i< Cliente.length){
        console.log(Cliente[i]);
        i++;
    }

    console.log('\nPropina');
    i= 0;
    while( i< Propina.length){
        console.log(Propina[i]);
        i++;
    }
}

/* Javascript For Loop */

const jsForLoop = () => {
        console.log('Ejecución con Javascript For Loop');
        console.log('Meseros');
        for(let i = 0; i< Mesero.length; i++){
            console.log(Mesero[i]);
        }

        console.log('\nClientes');
        for(let i = 0; i< Cliente.length; i++){
            console.log(Cliente[i]);
        }

        console.log('\nPropina');
        for(let i = 0; i< Propina.length; i++){
            console.log(Propina[i]);
        };
}

sentencia_ForOf();
bucleWhile();
jsForLoop();
