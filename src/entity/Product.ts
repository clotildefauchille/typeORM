import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
} from "typeorm";


export enum ProductCategoy {
    ENTREE = 1,
    PLAT= 2,
    DESSERT = 3,
    SNACK = 4
}

@Entity("product")
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  name: string;

  @Column()
  price: string;

  @Column({
    type: "enum",
    enum: ProductCategoy,
  })
  category: ProductCategoy;
}
