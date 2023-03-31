"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePaiceDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_paice_dto_1 = require("./create-paice.dto");
class UpdatePaiceDto extends (0, mapped_types_1.PartialType)(create_paice_dto_1.CreatePaiceDto) {
}
exports.UpdatePaiceDto = UpdatePaiceDto;
//# sourceMappingURL=update-paice.dto.js.map