import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';
export declare class CategoriaService {
    private categoriaRepository;
    constructor(categoriaRepository: Repository<Categoria>);
    create(categoriaDto: CreateCategoriaDto): Promise<Categoria>;
    findAll(): Promise<Categoria[]>;
    findOne(id: string): Promise<Categoria>;
    update(id: string, changeDto: CreateCategoriaDto): Promise<Categoria>;
    remove(id: string): Promise<string>;
}
