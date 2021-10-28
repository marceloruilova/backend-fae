import {Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, Column,OneToOne,ManyToOne, JoinColumn} from "typeorm";
import {Doctor} from "./Doctor";
import {Cie10} from "./Cie";

@Entity()
export class Prescription {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("simple-array",{nullable:true})
    medicine: string[];

    @Column({nullable:true})
    notes: string;
    
    @OneToOne(()=>Cie10)
    @JoinColumn()
    cie10:Cie10;

    @ManyToOne(() => Doctor,doctor=>doctor.prescription)
    prescribing_doctor: Doctor;
      
    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
  
}