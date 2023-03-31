import { Module } from '@nestjs/common';
import { PaicesService } from './paices.service';
import { PaicesController } from './paices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paices } from './entities/paice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Paices])],
  controllers: [PaicesController],
  providers: [PaicesService]
})
export class PaicesModule {}
