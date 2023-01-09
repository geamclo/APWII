"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ClienteService = class ClienteService {
    constructor(clienteModel) {
        this.clienteModel = clienteModel;
    }
    async getClientes() {
        const clientes = await this.clienteModel.find();
        return clientes;
    }
    async getCliente(clienteID) {
        const cliente = await this.clienteModel.findById(clienteID);
        return cliente;
    }
    async createCliente(createClienteDTO) {
        const cliente = new this.clienteModel(createClienteDTO);
        return await cliente.save();
    }
    async deleteCliente(clienteID) {
        const deleteCliente = await this.clienteModel.findByIdAndDelete(clienteID);
        return deleteCliente;
    }
    async updateCliente(clienteID, createClienteDTO) {
        const updateCliente = await this.clienteModel.findByIdAndUpdate(clienteID, createClienteDTO, { new: true });
        return updateCliente;
    }
};
ClienteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Cliente')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ClienteService);
exports.ClienteService = ClienteService;
//# sourceMappingURL=cliente.service.js.map