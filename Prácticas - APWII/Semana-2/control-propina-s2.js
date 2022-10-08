/*

@Programa: Control de Propina
@Objetivo: Aplicar funciones JavaScript en entornos. Ejecutar código JS en el servidor. Refactorizar código aplicando funciones
@Autor: Geam Mera
@Fecha: 7 de Octubre del 2022

*/

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

module.exports = { //Exporta los arrays
    Mesero,
    Cliente,
    Propina
}