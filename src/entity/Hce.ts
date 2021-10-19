import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn,OneToMany } from "typeorm";
import {Vital} from "./Vital";
import { Evolution } from "./Evolution";
import { Odontology } from "./Odontology";

@Entity()
export class Hce {

    @PrimaryGeneratedColumn()
    id: number;
    
    @OneToMany(() => Odontology, odontology => odontology.hce,{cascade:true})
    odontology: Odontology[];

    @OneToMany(() => Evolution, evolution => evolution.hce,{cascade:true})
    evolution: Evolution[];

    @OneToMany(() => Vital, vital => vital.hce,{cascade:true})
    vital: Vital[];
    
    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}
