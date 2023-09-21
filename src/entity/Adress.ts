import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import {Client} from './Client';

@Entity("adress")
export class Adress extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street_number: string;

  @Column()
  street: string;

  @Column()
  zip_code: number;

  @Column()
  city: string;

  @ManyToOne(() => Client, (client) => client.adresses)
  client: Client;
}
