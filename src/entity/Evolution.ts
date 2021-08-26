import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,OneToOne,JoinColumn} from "typeorm";
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
    
    @OneToOne(() => Doctor)
    @JoinColumn()
    prescribing_doctor: Doctor;

}
