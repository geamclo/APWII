"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ClienteSchema = new mongoose_1.Schema({
    nombre: { type: String, require: true },
    identificacion: String,
});
//# sourceMappingURL=cliente.schema.js.map