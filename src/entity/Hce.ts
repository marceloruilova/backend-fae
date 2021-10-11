import { Entity, PrimaryGeneratedColumn, ManyToOne,JoinColumn,OneToMany } from "typeorm";
import {Patient} from "./Patient";
import { Evolution } from "./Evolution";
import { Odontology } from "./Odontology";

@Entity()
export class Hce {

    @PrimaryGeneratedColumn()
    id: number;
    
    @OneToMany(() => Odontology, odontology => odontology.hce)
    odontology: Odontology[];

    @OneToMany(() => Evolution, evolution => evolution.hce)
    evolution: Evolution[];
}
