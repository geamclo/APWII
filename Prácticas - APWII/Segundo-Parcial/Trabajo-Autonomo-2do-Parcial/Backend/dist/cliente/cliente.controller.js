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
exports.ClienteController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cliente_service_1 = require("./cliente.service");
const cliente_dto_1 = require("./dto/cliente.dto");
let ClienteController = class ClienteController {
    constructor(clienteService) {
        this.clienteService = clienteService;
    }
    async createCliente(res, createClienteDTO) {
        const cliente = await this.clienteService.createCliente(createClienteDTO);
        return res.status(common_1.HttpStatus.OK).json({ cliente });
    }
    async getClientes(res) {
        const cliente = await this.clienteService.getClientes();
        return res.status(common_1.HttpStatus.OK).json({ cliente });
    }
    async getCliente(res, clienteID) {
        const cliente = await this.clienteService.getCliente(clienteID);
        if (!cliente)
            throw new common_1.NotFoundException('El cliente no existe');
        return res.status(common_1.HttpStatus.OK).json(cliente);
    }
    async updateCliente(res, createClienteDTO, clienteID) {
        const updateCliente = await this.clienteService.updateCliente(clienteID, createClienteDTO);
        if (!updateCliente)
            throw new common_1.NotFoundException('El cliente no existe');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Cliente actualizado exitosamente',
            updateCliente,
        });
    }
    async deleteCliente(res, clienteID) {
        const clienteDeleted = await this.clienteService.deleteCliente(clienteID);
        if (!clienteDeleted)
            throw new common_1.NotFoundException('El cliente no existe');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Cliente eliminado exitosamente',
            clienteDeleted,
        });
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Creación del modelo de datos Cliente',
    }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error interno del servidor' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cliente_dto_1.CreateClienteDTO]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "createCliente", null);
__decorate([
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Búsqueda de los datos en DB' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Elementos no encontrados' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "getClientes", null);
__decorate([
    (0, common_1.Get)('/:clienteID'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Busqueda de datos específico en la base de datos',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Elemento no encontrado' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('clienteID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "getCliente", null);
__decorate([
    (0, common_1.Put)('/:clienteID'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Actualizacion completada' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Elemento no actualizado' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('clienteID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cliente_dto_1.CreateClienteDTO, String]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "updateCliente", null);
__decorate([
    (0, common_1.Delete)('/:clienteID'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Eliminación completa' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Elemento no eliminado' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('clienteID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "deleteCliente", null);
ClienteController = __decorate([
    (0, swagger_1.ApiTags)('Cliente Schema'),
    (0, common_1.Controller)('cliente'),
    __metadata("design:paramtypes", [cliente_service_1.ClienteService])
], ClienteController);
exports.ClienteController = ClienteController;
//# sourceMappingURL=cliente.controller.js.map