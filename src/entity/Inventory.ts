import {Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn, OneToMany} from "typeorm";
import {Doctor} from "./Doctor";

@Entity()
export class Inventory {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    stock: string;

    @Column()
    name: string;

    @Column()
    presentation: string;

    @Column()
    concentration: string;

    @Column()
    due_date: string;

    @OneToMany(() => Doctor, doctor => doctor.inventory)
    doctor: Doctor[];

    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

}