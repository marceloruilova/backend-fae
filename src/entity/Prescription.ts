import {Entity, PrimaryGeneratedColumn, Column,ManyToOne} from "typeorm";
import {Evolution} from "./Evolution";
import {Odontology} from "./Odontology";

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

    @ManyToOne(() => Evolution, evolution => evolution.prescribing_doctor)
    user: Evolution;
    
    @ManyToOne(() => Odontology, odontology => odontology.prescribing_doctor)
    user: Odontology;
}