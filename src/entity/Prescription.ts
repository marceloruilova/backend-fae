import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Prescription {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cie10: string;

    @Column()
    disease: string;

    @Column()
    price: string;
   
    @Column()
    ticker_number: string;
}