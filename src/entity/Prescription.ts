import {Entity, PrimaryGeneratedColumn, Column,ManyToOne} from "typeorm";
import {Doctor} from "./Doctor";

@Entity()
export class Prescription {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("simple-array")
    medicine: string[];

    @Column({nullable:true})
    notes: string;

    @Column()
    cie10: string;

    @Column()
    disease: string;

    @Column()
    price: string;
   
    @Column()
    ticket_number: string;

    @ManyToOne(() => Doctor,doctor=>doctor.prescription)
    prescribing_doctor: Doctor;
}