"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropinaSchema = void 0;
const mongoose_1 = require("mongoose");
exports.PropinaSchema = new mongoose_1.Schema({
    id_mesero: String,
    id_cliente: String,
    fecha: String,
    hora: String,
    valor_propina: String,
});
//# sourceMappingURL=propina.schema.js.map