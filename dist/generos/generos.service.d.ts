import { Repository } from 'typeorm';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { Genero } from './entities/genero.entity';
export declare class GenerosService {
    private generoRepository;
    constructor(generoRepository: Repository<Genero>);
    create(generoDto: CreateGeneroDto): Promise<Genero>;
    findAll(): Promise<Genero[]>;
    findOne(id: string): Promise<Genero>;
    update(id: string, updateGeneroDto: UpdateGeneroDto): Promise<Genero>;
    remove(id: string): Promise<string>;
}
