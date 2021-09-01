import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,OneToOne,JoinColumn} from "typeorm";
import {Hce} from "./Hce";
import {Doctor} from "./Doctor";

@Entity()
export class Psicology {

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

    @ManyToOne(() => Hce, hce => hce.evolution)
    hce: Hce;
    
    @OneToOne(() => Doctor)
    @JoinColumn()
    prescribing_doctor: Doctor;

}
