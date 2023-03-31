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
exports.PaicesService = void 0;
const common_1 = require("@nestjs/common");
const dist_1 = require("@nestjs/typeorm/dist");
const typeorm_1 = require("typeorm");
const paice_entity_1 = require("./entities/paice.entity");
let PaicesService = class PaicesService {
    constructor(paicesRepository) {
        this.paicesRepository = paicesRepository;
    }
    async create(paicesDto) {
        const paices = await this.paicesRepository.create(paicesDto);
        await this.paicesRepository.save(paices);
        return paices;
    }
    findAll() {
        return this.paicesRepository.find();
    }
    findOne(id) {
        return this.paicesRepository.findOneBy({ id });
    }
    async update(id, updatePaicesDto) {
        const updatedPaices = await this.paicesRepository.findOneBy({ id });
        return updatedPaices;
    }
    async remove(id) {
        const paices = await this.findOne(id);
        await this.paicesRepository.remove(paices);
        return 'paices removed successfully';
    }
};
PaicesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, dist_1.InjectRepository)(paice_entity_1.Paices)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PaicesService);
exports.PaicesService = PaicesService;
//# sourceMappingURL=paices.service.js.map