"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaicesModule = void 0;
const common_1 = require("@nestjs/common");
const paices_service_1 = require("./paices.service");
const paices_controller_1 = require("./paices.controller");
const typeorm_1 = require("@nestjs/typeorm");
const paice_entity_1 = require("./entities/paice.entity");
let PaicesModule = class PaicesModule {
};
PaicesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([paice_entity_1.Paices])],
        controllers: [paices_controller_1.PaicesController],
        providers: [paices_service_1.PaicesService]
    })
], PaicesModule);
exports.PaicesModule = PaicesModule;
//# sourceMappingURL=paices.module.js.map