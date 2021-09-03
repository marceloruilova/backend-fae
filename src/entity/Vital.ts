import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Vital {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    especiality: string;

    @Column({ type: 'timestamp' })
    date_time_with_timezone: string;

    @Column({ type: 'timestamp' })
    attention_hour: string;
    
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
