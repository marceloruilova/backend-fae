import {Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn} from "typeorm";
import { IsDateString} from "class-validator";

@Entity()
export class Inventory {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    stock: number;

    @Column()
    name: string;

    @Column()
    presentation: string;

    @Column()
    concentration: string;

    @Column()
    @IsDateString()
    due_date: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

}