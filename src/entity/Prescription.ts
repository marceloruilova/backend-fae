import {Entity, PrimaryGeneratedColumn, Column,ManyToOne} from "typeorm";
import {Doctor} from "./Doctor";

@Entity()
export class Prescription {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cie10: string;

    @Column()
    disease: string;

    @Column()
    price: string;
   
    @Column()
    ticker_number: string;

    @ManyToOne(() => Doctor,doctor=>doctor.prescription)
    prescribing_doctor: Doctor;
}