import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categoria')
export class Categoria {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({type: 'varchar', length:150})
    name:string;
    
    @Column({type: 'varchar', length:150})
    detalle:string;
}
