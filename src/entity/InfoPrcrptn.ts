import {Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, Column} from "typeorm";

@Entity()
export class InfoPrcrptn {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column("simple-json")
    cie10: { code: number, disease: string };

    @Column({type:'decimal'})
    price: number;
   
    @Column({nullable:true})
    ticket_number: number;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

}
