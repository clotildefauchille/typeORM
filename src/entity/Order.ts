import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from "typeorm";
import { Client } from "./Client";
import {Product} from './Product';
import { Cart } from '../type/generalType';


export enum OrderState {
  RECEIVED = "received",
  IN_PROGRESS = "inProgress",
  DONE = "done",
  REFUSED = "refused",
}

export enum OrderType {
  DELIVERY = "delivery",
  TAKE_AWAY = "takeAway",
}

@Entity("order")
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column({
    type: "enum",
    enum: OrderType,
    default: OrderType.DELIVERY,
  })
  type: OrderType;

  @Column("simple-json", { nullable: true })
  cart: Cart[];

  @Column({
    type: "enum",
    enum: OrderState,
  })
  state: OrderState;

  @ManyToOne(() => Client, (client) => client.orders, { nullable: false })
  client: Client;
  @JoinColumn({name: 'clientId'})

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];
}
