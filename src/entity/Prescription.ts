import {Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, Column,OneToOne,ManyToOne, JoinColumn} from "typeorm";
import {Doctor} from "./Doctor";

@Entity()
export class Prescription {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("simple-array",{nullable:true})
    medicine: string[];

    @Column({nullable:true})
    notes: string;
    
    @Column("simple-json")
    cie10: { code: string, disease: string };

    @Column()
    quantity: number;
   
    @Column({type:'decimal'})
    price: number;
   
    @Column({type:'decimal'})
    total_price: number;
   
    @Column({nullable:true})
    ticket_number: string;

    @ManyToOne(() => Doctor,doctor=>doctor.prescription,{cascade:true})
    prescribing_doctor: Doctor;
      
    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
  
}