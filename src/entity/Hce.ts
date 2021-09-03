import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,OneToOne,JoinColumn,OneToMany } from "typeorm";
import {User} from "./User";
import { Vital } from "./Vital";
import { Evolution } from "./Evolution";
import { Odontology } from "./Odontology";

@Entity()
export class Hce {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @ManyToOne(() => User, user => user.historialelectronico)
    user: User;

    @OneToOne(() => Vital)
    @JoinColumn()
    vitals: Vital;
    
    @OneToOne(() => Odontology)
    @JoinColumn()
    odontology: Odontology;

    @OneToMany(() => Evolution, evolution => evolution.hce)
    evolution: Evolution[];
}
