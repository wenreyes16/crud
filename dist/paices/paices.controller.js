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
exports.PaicesController = void 0;
const common_1 = require("@nestjs/common");
const paices_service_1 = require("./paices.service");
const create_paice_dto_1 = require("./dto/create-paice.dto");
const update_paice_dto_1 = require("./dto/update-paice.dto");
let PaicesController = class PaicesController {
    constructor(paicesService) {
        this.paicesService = paicesService;
    }
    create(createPaiceDto) {
        return this.paicesService.create(createPaiceDto);
    }
    findAll() {
        return this.paicesService.findAll();
    }
    findOne(id) {
        return this.paicesService.findOne(id);
    }
    update(id, updatePaiceDto) {
        return this.paicesService.update(id, updatePaiceDto);
    }
    remove(id) {
        return this.paicesService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_paice_dto_1.CreatePaiceDto]),
    __metadata("design:returntype", void 0)
], PaicesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaicesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaicesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_paice_dto_1.UpdatePaiceDto]),
    __metadata("design:returntype", void 0)
], PaicesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaicesController.prototype, "remove", null);
PaicesController = __decorate([
    (0, common_1.Controller)('paices'),
    __metadata("design:paramtypes", [paices_service_1.PaicesService])
], PaicesController);
exports.PaicesController = PaicesController;
//# sourceMappingURL=paices.controller.js.map