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
exports.MarcasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const marca_entity_1 = require("./entities/marca.entity");
const typeorm_2 = require("typeorm");
let MarcasService = class MarcasService {
    constructor(marcaRepository) {
        this.marcaRepository = marcaRepository;
    }
    async create(marcasDto) {
        const marca = await this.marcaRepository.create(marcasDto);
        await this.marcaRepository.save(marca);
        return marca;
    }
    findAll() {
        return this.marcaRepository.find();
    }
    findOne(id) {
        return this.marcaRepository.findOneBy({ id });
    }
    async update(id, updateMarcaDto) {
        const updateMarca = await this.marcaRepository.findOneBy({ id });
        return updateMarca;
    }
    async remove(id) {
        const marca = await this.findOne(id);
        await this.marcaRepository.remove(marca);
        return 'marca removed successfully';
    }
};
MarcasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(marca_entity_1.Marca)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MarcasService);
exports.MarcasService = MarcasService;
//# sourceMappingURL=marcas.service.js.map