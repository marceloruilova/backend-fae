import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity()
export class Vital {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    especiality: string;

    @CreateDateColumn({ type: 'timestamp without time zone' })
    date_time_with_timezone: Date;

    @Column({ type: 'time with time zone' })
    attention_hour: number;
    
    @Column({type:'decimal'})
    temperature: number;

    @Column({type:'decimal'})
    arterial_tension: number;

    
    @Column()
    fc: string;
    
    @Column()
    fr: string;

    @Column({type:'decimal'})
    spo2: number;

    @Column({type:'decimal'})
    height: number;

    @Column({type:'decimal'})
    weight: number;

    @Column({type:'decimal'})
    pc: number;

}
