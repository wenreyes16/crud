import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async create(categoriaDto:CreateCategoriaDto) {
    const categoria = await this.categoriaRepository.create(categoriaDto);
    await this.categoriaRepository.save(categoria);

    return categoria;
}

  findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  findOne(id: string) {
    return this.categoriaRepository.findOneBy({id})
  }

  async update(id: string, changeDto: CreateCategoriaDto) {
    const findCategories = await this.findOne(id);
    const updateProduct = await this.categoriaRepository.merge(
      findCategories,
      changeDto
    );

    return this.categoriaRepository.save(updateProduct);
  }

  async remove(id: string) {
    const category = await this.findOne(id);
    await this.categoriaRepository.remove(category);
    return 'categoria eliminada sastifactoriamente';
  }
}
