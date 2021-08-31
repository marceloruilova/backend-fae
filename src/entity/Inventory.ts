import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Doctor} from "./Doctor";

@Entity()
export class Inventory {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @OneToMany(() => Doctor, doctor => doctor.inventory)
    doctor: Doctor[];

}