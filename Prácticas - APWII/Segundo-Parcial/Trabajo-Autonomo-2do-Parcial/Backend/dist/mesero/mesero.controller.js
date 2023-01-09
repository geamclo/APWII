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
exports.MeseroController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const mesero_service_1 = require("./mesero.service");
const mesero_dto_1 = require("./dto/mesero.dto");
let MeseroController = class MeseroController {
    constructor(meseroService) {
        this.meseroService = meseroService;
    }
    async createMesero(res, createMeseroDTO) {
        const mesero = await this.meseroService.createMesero(createMeseroDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'El mesero fue creado exitosamente',
            mesero,
        });
    }
    async getMeseros(res) {
        const mesero = await this.meseroService.getMeseros();
        return res.status(common_1.HttpStatus.OK).json({ mesero });
    }
    async getMesero(res, meseroID) {
        const mesero = await this.meseroService.getMesero(meseroID);
        if (!mesero)
            throw new common_1.NotFoundException('El mesero no existe');
        return res.status(common_1.HttpStatus.OK).json(mesero);
    }
    async updateMesero(res, createMeseroDTO, meseroID) {
        const updateMesero = await this.meseroService.updateMesero(meseroID, createMeseroDTO);
        if (!updateMesero)
            throw new common_1.NotFoundException('El mesero no existe');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Mesero actualizado exitosamente',
            updateMesero,
        });
    }
    async deleteMesero(res, meseroID) {
        const meseroDeleted = await this.meseroService.deleteMesero(meseroID);
        if (!meseroDeleted)
            throw new common_1.NotFoundException('El mesero no existe');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Mesero eliminado exitosamente',
            meseroDeleted,
        });
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Creación del modelo de datos Mesero',
    }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error interno del servidor' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, mesero_dto_1.CreateMeseroDTO]),
    __metadata("design:returntype", Promise)
], MeseroController.prototype, "createMesero", null);
__decorate([
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Búsqueda de los datos en DB' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Elementos no encontrados' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MeseroController.prototype, "getMeseros", null);
__decorate([
    (0, common_1.Get)('/:meseroID'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Busqueda del datos específico en la base de datos',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Elemento no encontrado' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('meseroID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], MeseroController.prototype, "getMesero", null);
__decorate([
    (0, common_1.Put)('/:meseroID'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Actualización completa' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Elemento no actualizado' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('meseroID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, mesero_dto_1.CreateMeseroDTO, String]),
    __metadata("design:returntype", Promise)
], MeseroController.prototype, "updateMesero", null);
__decorate([
    (0, common_1.Delete)('/:meseroID'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Eliminacion completa' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Elemento no Eliminado' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('meseroID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], MeseroController.prototype, "deleteMesero", null);
MeseroController = __decorate([
    (0, swagger_1.ApiTags)('Mesero Schema'),
    (0, common_1.Controller)('mesero'),
    __metadata("design:paramtypes", [mesero_service_1.MeseroService])
], MeseroController);
exports.MeseroController = MeseroController;
//# sourceMappingURL=mesero.controller.js.map