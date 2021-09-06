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

    @Column({type:'varchar2'})
    gender: string;

    @Column()
    e_mail: string;

    @Column()
    appointment_hour: number;

    @Column()
    type: string;

    @OneToMany(() => Hce, hce => hce.user,{cascade:true})
    historialelectronico: Hce[];

}
