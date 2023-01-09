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
exports.PropinaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const propina_service_1 = require("./propina.service");
const propina_dto_1 = require("./dto/propina.dto");
let PropinaController = class PropinaController {
    constructor(propinaService) {
        this.propinaService = propinaService;
    }
    async createPropina(res, createPropinaDTO) {
        const propina = await this.propinaService.createPropina(createPropinaDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'La propina fue creada exitosamente',
            propina,
        });
    }
    async getPropinas(res) {
        const propina = await this.propinaService.getPropinas();
        return res.status(common_1.HttpStatus.OK).json({ propina });
    }
    async getPropina(res, propinaID) {
        const propina = await this.propinaService.getPropina(propinaID);
        if (!propina)
            throw new common_1.NotFoundException('La propina no existe');
        return res.status(common_1.HttpStatus.OK).json(propina);
    }
    async updatePropina(res, createPropinaDTO, propinaID) {
        const updatePropina = await this.propinaService.updatePropina(propinaID, createPropinaDTO);
        if (!updatePropina)
            throw new common_1.NotFoundException('La propina no existe');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Propina actualizada exitosamente',
            updatePropina,
        });
    }
    async deletePropina(res, propinaID) {
        const propinaDeleted = await this.propinaService.deletePropina(propinaID);
        if (!propinaDeleted)
            throw new common_1.NotFoundException('La propina no existe');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Propina eliminada exitosamente',
            propinaDeleted,
        });
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Creación del modelo de datos Propina',
    }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error interno del servidor' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, propina_dto_1.CreatePropinaDTO]),
    __metadata("design:returntype", Promise)
], PropinaController.prototype, "createPropina", null);
__decorate([
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Busqueda de los datos en DB' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Elementos no encontrados' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PropinaController.prototype, "getPropinas", null);
__decorate([
    (0, common_1.Get)('/:propinaID'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Busqueda del datos específico en la base de datos',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Elemento no encontrado' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('propinaID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PropinaController.prototype, "getPropina", null);
__decorate([
    (0, common_1.Put)('/:propinaID'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Actualización completa' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Elemento no actualizado' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('propinaID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, propina_dto_1.CreatePropinaDTO, String]),
    __metadata("design:returntype", Promise)
], PropinaController.prototype, "updatePropina", null);
__decorate([
    (0, common_1.Delete)('/:propinaID'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Eliminación completa' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Elemento no eliminado' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('propinaID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], PropinaController.prototype, "deletePropina", null);
PropinaController = __decorate([
    (0, swagger_1.ApiTags)('Propina Schema'),
    (0, common_1.Controller)('propina'),
    __metadata("design:paramtypes", [propina_service_1.PropinaService])
], PropinaController);
exports.PropinaController = PropinaController;
//# sourceMappingURL=propina.controller.js.map