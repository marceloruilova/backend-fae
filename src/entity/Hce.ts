import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,OneToOne,JoinColumn,OneToMany} from "typeorm";
import {User} from "./User";
import { Vital } from "./Vital";
import { Evolution } from "./Evolution";

@Entity()
export class Hce {

    @PrimaryGeneratedColumn()
    id: number;
    //heredar de usuario nombre y apellido
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @ManyToOne(() => User, user => user.electronic_history)
    user: User;

    @OneToOne(() => Vital)
    @JoinColumn()
    vitals: Vital;

    @OneToMany(() => Evolution, evolution => evolution.hce)
    evolution: Evolution[];
}
