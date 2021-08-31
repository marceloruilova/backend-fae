import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Doctor} from "./Doctor";

@Entity()
export class Prescription {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}