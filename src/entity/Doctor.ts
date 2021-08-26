import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Doctor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    temperature: string;
    
    @Column()
    temp: string;

    @Column()
    tensionArterial: string;

}
