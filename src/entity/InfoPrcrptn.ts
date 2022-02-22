import {Entity,PrimaryColumn, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, Column} from "typeorm";

@Entity()
export class InfoPrcrptn {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column("simple-json")
    cie10: { code: number, disease: string };

    @Column({type:'decimal'})
    price: number;
   
    @PrimaryColumn() 
    ticket_number: number;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

}
