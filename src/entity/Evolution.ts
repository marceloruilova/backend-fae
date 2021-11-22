import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,OneToOne,JoinColumn,CreateDateColumn,UpdateDateColumn} from "typeorm";
import {Hce} from "./Hce";
import { Prescription } from "./Prescription";

@Entity()
export class Evolution {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    establishment:string;

    @Column()
    month:string;

    @Column()
    year:string;

    @Column()
    mc:string;

    @Column()
    enf:string;

    @Column()
    qx:string;

    @Column()
    alergies:string;

    @Column()
    objective:string;

    @Column()
    subjective:string;

    @ManyToOne(() => Hce, hce => hce.evolution)
    hce: Hce;

    @OneToOne(() => Prescription,{cascade:true})
    @JoinColumn()
    prescription: Prescription;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}
