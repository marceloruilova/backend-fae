import {Entity, PrimaryGeneratedColumn, Column,ManyToOne,OneToMany,JoinColumn} from "typeorm";
import {Inventory} from "./Inventory";
import {Prescription} from "./Prescription";

@Entity()
export class Doctor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    doctor_first_name: string;

    @Column()
    doctor_last_name: string;

    @Column()
    ci: string;
    
    @Column()
    title: string;
    //heredar especialidad
    @Column()
    especiality: string;
    
    @ManyToOne(() => Inventory, inventory => inventory.doctor)
    inventory: Inventory;
        
    @OneToMany(()=>Prescription,prescription=>prescription.prescribing_doctor)
    prescription:Prescription;
}

