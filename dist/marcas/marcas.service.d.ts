import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { Marca } from './entities/marca.entity';
import { Repository } from 'typeorm';
export declare class MarcasService {
    private marcaRepository;
    constructor(marcaRepository: Repository<Marca>);
    create(marcasDto: CreateMarcaDto): Promise<Marca>;
    findAll(): Promise<Marca[]>;
    findOne(id: string): Promise<Marca>;
    update(id: string, updateMarcaDto: UpdateMarcaDto): Promise<Marca>;
    remove(id: string): Promise<string>;
}
