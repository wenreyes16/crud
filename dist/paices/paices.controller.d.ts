import { PaicesService } from './paices.service';
import { CreatePaiceDto } from './dto/create-paice.dto';
import { UpdatePaiceDto } from './dto/update-paice.dto';
export declare class PaicesController {
    private readonly paicesService;
    constructor(paicesService: PaicesService);
    create(createPaiceDto: CreatePaiceDto): Promise<import("./entities/paice.entity").Paices>;
    findAll(): Promise<import("./entities/paice.entity").Paices[]>;
    findOne(id: string): Promise<import("./entities/paice.entity").Paices>;
    update(id: string, updatePaiceDto: UpdatePaiceDto): Promise<import("./entities/paice.entity").Paices>;
    remove(id: string): Promise<string>;
}
