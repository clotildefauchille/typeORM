import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Client } from "./Client";
import {Product} from './Product';

export type Cart = {
  product: number;
  quantity: number;
};

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

  @ManyToOne(() => Client, (client) => client.orders)
  client: Client;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];
}
