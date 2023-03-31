import { Repository } from 'typeorm';
import { CreatePaiceDto } from './dto/create-paice.dto';
import { UpdatePaiceDto } from './dto/update-paice.dto';
import { Paices } from './entities/paice.entity';
export declare class PaicesService {
    private paicesRepository;
    constructor(paicesRepository: Repository<Paices>);
    create(paicesDto: CreatePaiceDto): Promise<Paices>;
    findAll(): Promise<Paices[]>;
    findOne(id: string): Promise<Paices>;
    update(id: string, updatePaicesDto: UpdatePaiceDto): Promise<Paices>;
    remove(id: string): Promise<string>;
}
