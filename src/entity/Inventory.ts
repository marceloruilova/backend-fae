import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
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
    due_date: Date;

    @OneToMany(() => Doctor, doctor => doctor.inventory)
    doctor: Doctor[];

}