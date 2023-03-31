import { MarcasService } from './marcas.service';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
export declare class MarcasController {
    private readonly marcasService;
    constructor(marcasService: MarcasService);
    create(createMarcaDto: CreateMarcaDto): Promise<import("./entities/marca.entity").Marca>;
    findAll(): Promise<import("./entities/marca.entity").Marca[]>;
    findOne(id: string): Promise<import("./entities/marca.entity").Marca>;
    update(id: string, updateMarcaDto: UpdateMarcaDto): Promise<import("./entities/marca.entity").Marca>;
    remove(id: string): Promise<string>;
}
