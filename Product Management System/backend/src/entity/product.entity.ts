
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("product")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;
}
