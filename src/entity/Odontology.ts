import {Entity, PrimaryGeneratedColumn, Column, OneToMany,OneToOne,JoinColumn} from "typeorm";
import {Hce} from "./Hce";
import {Doctor} from "./Doctor";

@Entity()
export class Odontology {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    actual_disease: string;

    @Column()
    record: string;

    @Column()
    odontogram: string;

    @OneToMany(() => Doctor, doctor => doctor.prescription)
    prescribing_doctor: Doctor[];
}
