import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,OneToOne,JoinColumn} from "typeorm";
import {Hce} from "./Hce";
import { Prescription } from "./Prescription";

@Entity()
export class Evolution {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    initial_observations:string;

    @Column()
    establishment:string;

    @Column({nullable:true})
    mc:string;

    @Column({nullable:true})
    enf:string;

    @Column({nullable:true})
    qx:string;

    @Column({nullable:true})
    alergies:string;

    @Column({nullable:true})
    objective:string;

    @Column({nullable:true})
    subjective:string;

    @ManyToOne(() => Hce, hce => hce.evolution)
    hce: Hce;

    @OneToOne(() => Prescription,{cascade:true})
    @JoinColumn()
    prescription: Prescription;
}
