"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropinaModule = void 0;
const common_1 = require("@nestjs/common");
const propina_controller_1 = require("./propina.controller");
const propina_service_1 = require("./propina.service");
const mongoose_1 = require("@nestjs/mongoose");
const propina_schema_1 = require("./schemas/propina.schema");
let PropinaModule = class PropinaModule {
};
PropinaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Propina', schema: propina_schema_1.PropinaSchema }]),
        ],
        controllers: [propina_controller_1.PropinaController],
        providers: [propina_service_1.PropinaService],
    })
], PropinaModule);
exports.PropinaModule = PropinaModule;
//# sourceMappingURL=propina.module.js.map