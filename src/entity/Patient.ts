import {Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, Column,OneToOne,JoinColumn} from "typeorm";
import {Contains,Length, Min, Max, IsMilitaryTime, IsDateString, IsNumberString} from "class-validator";
import {Hce}from "./Hce";

@Entity()
export class Patient {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    @IsNumberString()
    @Length(10,10)
    ci: string;

    @Column()
    @Length(2, 25)
    firstName: string;

    @Column()
    @Length(2, 25)
    surName: string;

    @Column()
    @Min(0)
    @Max(120)
    age: number;

    @Column()
    @Contains('M')
    @Contains('F')
    @Contains('Otro')
    gender: string;

    @Column()
    @IsMilitaryTime()
    appointment_hour: string;

    @Column()
    @IsDateString()
    appointment_date: string;

    @Column()
    @Contains('IESS')
    type: string;

    @Column()
    asigned_speciality: string;

    @OneToOne(() => Hce,hce=>hce.patient,{cascade:true})
    @JoinColumn()
    electronic_history: Hce;
    
    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
  

}
