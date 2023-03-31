import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaicesService } from './paices.service';
import { CreatePaiceDto } from './dto/create-paice.dto';
import { UpdatePaiceDto } from './dto/update-paice.dto';

@Controller('paices')
export class PaicesController {
  constructor(private readonly paicesService: PaicesService) {}

  @Post()
  create(@Body() createPaiceDto: CreatePaiceDto) {
    return this.paicesService.create(createPaiceDto);
  }

  @Get()
  findAll() {
    return this.paicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paicesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaiceDto: UpdatePaiceDto) {
    return this.paicesService.update(id, updatePaiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paicesService.remove(id);
  }
}
