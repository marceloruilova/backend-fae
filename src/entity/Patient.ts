import {Entity, PrimaryGeneratedColumn, Column,OneToOne,JoinColumn, OneToMany, Timestamp} from "typeorm";
import {Contains,Length, IsEmail, MinLength,MaxLength, Min, Max, IsMilitaryTime, IsDate, IsDateString, IsNumberString, isDateString} from "class-validator";
import {Hce}from "./Hce";
import {Info}from "./Info";

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
    @IsMilitaryTime()
    appointment_hour: string;

    @Column()
    @IsDateString()
    appointment_date: string;

    @Column()
    @Contains('ISSFA')
    type: string;

    @Column()
    asigned_speciality: string;

    @OneToOne(() => Hce)
    @JoinColumn()
    electronic_history: Hce;
    
    @OneToOne(() => Info)
    @JoinColumn()
    info: Info;

}
