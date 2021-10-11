import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,OneToOne,JoinColumn} from "typeorm";
import {Prescription} from "./Prescription";
import {Hce} from "./Hce";

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

    @ManyToOne(() => Hce, hce => hce.odontology)
    hce: Hce;

    @OneToOne(() => Prescription)
    @JoinColumn()
    prescription: Prescription;
}
