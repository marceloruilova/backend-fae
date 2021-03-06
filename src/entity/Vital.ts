import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Vital {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    temperature: string;

    @Column()
    tensionArterial: string;

}
