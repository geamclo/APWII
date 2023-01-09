"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContactanoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_contactano_dto_1 = require("./create-contactano.dto");
class UpdateContactanoDto extends (0, swagger_1.PartialType)(create_contactano_dto_1.CreateContactanoDto) {
}
exports.UpdateContactanoDto = UpdateContactanoDto;
//# sourceMappingURL=update-contactano.dto.js.map