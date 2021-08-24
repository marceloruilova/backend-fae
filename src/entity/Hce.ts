import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,OneToOne,JoinColumn} from "typeorm";
import {User} from "./User";
import { Vital } from "./Vital";

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

}
