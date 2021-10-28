import {Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn} from "typeorm";

@Entity()
export class Cie10 {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    disease: string;

    @Column()
    quantity: number;
   
    @Column({type:'decimal'})
    price: number;
   
    @Column({type:'decimal'})
    total_price: number;
   
    @Column({nullable:true})
    ticket_number: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

}
