import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity("users")
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    name: string;
    
    @Column({unique: true, nullable:false})
    username: string;

    @Column({ nullable:false})
    companyName: string;

    @Column({ nullable:false})
    contact: string;

    @Column({nullable:false})
    password: string;

    @Column({nullable:true, unique:false})
    type: string;


    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updateAt: Date;


    // @BeforeInsert()
    // async HashPassword() {
    //   this.password = await bcrypt.hash(this.password, 12);
    // }

}