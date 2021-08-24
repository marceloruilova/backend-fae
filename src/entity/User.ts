import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Hce}from "./Hce";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @OneToMany(() => Hce, hce => hce.user)
    historialelectronico: Hce[];

}
