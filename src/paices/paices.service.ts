import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreatePaiceDto } from './dto/create-paice.dto';
import { UpdatePaiceDto } from './dto/update-paice.dto';
import { Paices } from './entities/paice.entity';

@Injectable()
export class PaicesService {
  constructor(
    @InjectRepository(Paices)
    private paicesRepository: Repository<Paices>,
  ) {}
  async create(paicesDto:CreatePaiceDto) {
    const paices = await this.paicesRepository.create(paicesDto);
    await this.paicesRepository.save(paices);

    return paices;
}

  findAll(): Promise<Paices[]> {
    return this.paicesRepository.find();
  }

  findOne(id: string) {
    return this.paicesRepository.findOneBy({id});
  }

  async update(id: string, updatePaicesDto: UpdatePaiceDto): Promise<Paices> {
    const updatedPaices = await this.paicesRepository.findOneBy({id});
    return updatedPaices;
  }
  
  async remove(id:string){
    const paices = await this.findOne(id);
    await this.paicesRepository.remove(paices);
    return 'paices removed successfully'
}
}
