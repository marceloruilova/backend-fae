import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,OneToOne,JoinColumn} from "typeorm";
import {Hce} from "./Hce";
import { Prescription } from "./Prescription";

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

    @OneToOne(() => Prescription)
    @JoinColumn()
    prescription: Prescription;
}
