import { PartialType } from '@nestjs/mapped-types';
import { CreatePaiceDto } from './create-paice.dto';

export class UpdatePaiceDto extends PartialType(CreatePaiceDto) {}
