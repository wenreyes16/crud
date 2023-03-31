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
exports.CategoriaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const categoria_entity_1 = require("./entities/categoria.entity");
const typeorm_2 = require("typeorm");
let CategoriaService = class CategoriaService {
    constructor(categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }
    async create(categoriaDto) {
        const categoria = await this.categoriaRepository.create(categoriaDto);
        await this.categoriaRepository.save(categoria);
        return categoria;
    }
    findAll() {
        return this.categoriaRepository.find();
    }
    findOne(id) {
        return this.categoriaRepository.findOneBy({ id });
    }
    async update(id, changeDto) {
        const findCategories = await this.findOne(id);
        const updateProduct = await this.categoriaRepository.merge(findCategories, changeDto);
        return this.categoriaRepository.save(updateProduct);
    }
    async remove(id) {
        const category = await this.findOne(id);
        await this.categoriaRepository.remove(category);
        return 'categoria eliminada sastifactoriamente';
    }
};
CategoriaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(categoria_entity_1.Categoria)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoriaService);
exports.CategoriaService = CategoriaService;
//# sourceMappingURL=categoria.service.js.map