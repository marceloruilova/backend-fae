import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export abstract class Info {
    
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

}
