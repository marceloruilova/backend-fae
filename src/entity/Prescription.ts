import {Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, Column,OneToOne,ManyToOne, JoinColumn} from "typeorm";
import {Doctor} from "./Doctor";
import {InfoPrcrptn} from "./InfoPrcrptn";

@Entity()
export class Prescription {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("simple-array",{nullable:true})
    medicine: string[];

    @Column({nullable:true})
    notes: string;

    @OneToOne(() => InfoPrcrptn,{cascade:true})
    @JoinColumn()
    info_prescription:InfoPrcrptn;

    @ManyToOne(() => Doctor,doctor=>doctor.prescription,{cascade:true})
    prescribing_doctor: Doctor;
      
    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
  
}