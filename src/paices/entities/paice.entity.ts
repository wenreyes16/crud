import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Paices {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}
