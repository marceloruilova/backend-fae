import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Contains, IsInt, Length, IsEmail, MinLength,MaxLength, Min, Max, IsMilitaryTime} from "class-validator";
import {Hce}from "./Hce";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    @IsInt()
    @Length(10,10)
    ci: string;

    @Column()
    @Length(2, 25)
    firstName: string;

    @Column()
    @Length(2, 25)
    lastName: string;

    @Column()
    @Min(0)
    @Max(120)
    age: number;

    @Column({type:'varchar2'})
    gender: string;

    @Column()
    @IsEmail()
    e_mail: string;

    @Column()
    @IsMilitaryTime()
    appointment_hour: string;

    @Column()
    @Contains('ISSFA')
    type: string;

    @Column()
    asigned_speciality: string;

    @OneToMany(() => Hce, hce => hce.user,{cascade:true})
    historialelectronico: Hce[];

}
