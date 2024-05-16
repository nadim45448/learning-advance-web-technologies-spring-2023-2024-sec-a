import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity("job")
export class Job{

    @PrimaryGeneratedColumn()
    jobID: number;

    @Column()
    companyName: string;

    @Column()
    title: string;

    @Column()
    location: string;


    @Column()
    salary: number;

    @Column()
    postedBy:number;

    @CreateDateColumn()
    date: Date;



    
}