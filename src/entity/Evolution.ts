import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,OneToMany} from "typeorm";
import {Hce} from "./Hce";
import {Doctor} from "./Doctor";

@Entity()
export class Evolution {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @ManyToOne(() => Hce, hce => hce.evolution)
    hce: Hce;

    @OneToMany(() => Doctor, doctor => doctor.prescription)
    prescribing_doctor: Doctor[];
}
