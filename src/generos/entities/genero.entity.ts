import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Genero { 
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    sexo: string;
}
