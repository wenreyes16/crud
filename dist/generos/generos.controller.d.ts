import { GenerosService } from './generos.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
export declare class GenerosController {
    private readonly generosService;
    constructor(generosService: GenerosService);
    create(createGeneroDto: CreateGeneroDto): Promise<import("./entities/genero.entity").Genero>;
    findAll(): Promise<import("./entities/genero.entity").Genero[]>;
    findOne(id: string): Promise<import("./entities/genero.entity").Genero>;
    update(id: string, updateGeneroDto: UpdateGeneroDto): Promise<import("./entities/genero.entity").Genero>;
    remove(id: string): Promise<string>;
}
