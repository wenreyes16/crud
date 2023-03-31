import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Marca{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}
