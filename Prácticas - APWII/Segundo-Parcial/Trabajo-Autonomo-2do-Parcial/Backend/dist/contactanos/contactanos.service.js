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
exports.ContactanosService = void 0;
const common_1 = require("@nestjs/common");
const contactano_entity_1 = require("./entities/contactano.entity");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ContactanosService = class ContactanosService {
    constructor(ContactanoModel) {
        this.ContactanoModel = ContactanoModel;
    }
    async create(createContactanoDto) {
        const contactano = await this.ContactanoModel.create(createContactanoDto);
        return contactano;
    }
    async findAll() {
        return await this.ContactanoModel.find();
    }
};
ContactanosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(contactano_entity_1.Contactano.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ContactanosService);
exports.ContactanosService = ContactanosService;
//# sourceMappingURL=contactanos.service.js.map