// Generated by https://quicktype.io

export interface IResPropina {
    sum:     number;
    propinas: Propina[];
}

export interface Propina {
    _id?:    string;
    id_mesero: string;
    status?: boolean;
    id_cliente: string;
    fecha:  string;
    hora: string;
    valor_propina: string;
    category?:  number;
    __v?:    number;
}
