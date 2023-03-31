import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
export declare class CategoriaController {
    private readonly categoriaService;
    constructor(categoriaService: CategoriaService);
    create(createCategoriaDto: CreateCategoriaDto): Promise<import("./entities/categoria.entity").Categoria>;
    findAll(): Promise<import("./entities/categoria.entity").Categoria[]>;
    findOne(id: string): Promise<import("./entities/categoria.entity").Categoria>;
    updateProduct(id: string, changeDto: CreateCategoriaDto): Promise<import("./entities/categoria.entity").Categoria>;
    remove(id: string): Promise<string>;
}
