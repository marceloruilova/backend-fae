import {Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn, OneToMany} from "typeorm";
import {Doctor} from "./Doctor";

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
    due_date: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

}