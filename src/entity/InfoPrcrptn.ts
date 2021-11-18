import {Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, Column,OneToOne,ManyToOne, JoinColumn} from "typeorm";

@Entity()
export class InfoPrcrptn {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column("simple-json")
    cie10: { code: string, disease: string };

    @Column()
    quantity: number;
   
    @Column({type:'decimal'})
    price: number;
   
    @Column({nullable:true})
    ticket_number: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

}
