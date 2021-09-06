import {Entity, PrimaryGeneratedColumn, Column, OneToMany,OneToOne,JoinColumn} from "typeorm";
import {Prescription} from "./Prescription";

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

    @OneToOne(() => Prescription)
    @JoinColumn()
    prescription: Prescription;
}
