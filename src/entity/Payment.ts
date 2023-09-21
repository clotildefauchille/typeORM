import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { Client } from "./Client";

export enum PaymentType {
    CASH = 'cash',
    CARD = 'card'
}

@Entity("payment")
export class Payment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: PaymentType,
  })
  type: PaymentType;

  @Column({ nullable: true })
  wording: string;

  @ManyToOne(() => Client, (client) => client.payments)
  client: Client;
}
