import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/categoria.module';
import { GenerosModule } from './generos/generos.module';
import { MarcasModule } from './marcas/marcas.module';
import { PaicesModule } from './paices/paices.module';
import { Categoria } from './categoria/entities/categoria.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'ecommerce-ng',
      entities: [Categoria],
      synchronize: true,
      autoLoadEntities: true,
    }),
    CategoriaModule,
    GenerosModule,
    MarcasModule,
    PaicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
