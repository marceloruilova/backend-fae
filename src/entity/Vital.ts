import {Entity, PrimaryGeneratedColumn, Column,ManyToOne} from "typeorm";
import {IsMilitaryTime, IsDate, IsDateString, IsNumberString, isDateString} from "class-validator";
import {Hce} from "./Hce";

@Entity()
export class Vital {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    especiality: string;

    @Column()
    @IsMilitaryTime()
    attention_hour: string;    
    
    @Column()
    @IsDateString()
    attention_date: string;

    @Column({type:'decimal'})
    temperature_start: number;

    @Column({type:'decimal'})
    temperature_end: number;

    @Column()
    sistolica: number;

    @Column()
    diastolica: number;

    @Column({type:'decimal'})
    fc_start: number;

    @Column({type:'decimal'})
    fc_end: number;

    @Column({type:'decimal'})
    fr_start: number;

    @Column({type:'decimal'})
    fr_end: number;
    
    @Column({type:'decimal'})
    spo2: number;

    @Column({type:'decimal'})
    height: number;

    @Column({type:'decimal'})
    weight: number;

    @Column({type:'decimal'})
    pc: number;

    @ManyToOne(() => Hce, hce => hce.vital)
    hce: Hce;
}
