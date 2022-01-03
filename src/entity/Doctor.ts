import {Entity, PrimaryGeneratedColumn, Column,OneToMany,CreateDateColumn,UpdateDateColumn} from "typeorm";
import {Prescription} from "./Prescription";
import {Length, IsNumberString} from "class-validator";

@Entity()
export class Doctor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(2, 25)
    doctor_first_name: string;

    @Column()
    @Length(2, 25)
    doctor_last_name: string;

    @Column({unique:true})
    @IsNumberString()
    @Length(10,10)
    ci: string;
    
    @OneToMany(()=>Prescription,prescription=>prescription.prescribing_doctor)
    prescription:Prescription[];

    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}
