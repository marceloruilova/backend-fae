import {Entity, PrimaryGeneratedColumn, Column, Timestamp} from "typeorm";
import {Contains,Length, IsEmail, MinLength,MaxLength, Min, Max, IsMilitaryTime, IsDate, IsDateString, IsNumberString, isDateString} from "class-validator";

@Entity()
export class Info {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    @Length(2, 25)
    secondName: string;

    @Column()
    @Length(2, 25)
    secondSurname: string;
    
    @Column({nullable:true})
    @Min(0)
    @Max(120)
    age: number;

    @Column({nullable:true})
    gender: string;

    @Column({nullable:true})
    @IsEmail()
    e_mail: string;

}
