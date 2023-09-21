import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
} from "typeorm";


export enum ProductCategoy {
    ENTREE = 'entree',
    PLAT= 'plat',
    DESSERT = 'dessert',
    SNACK = 'snack'
}

@Entity("product")
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column({
    type: "enum",
    enum: ProductCategoy,
  })
  categorie: ProductCategoy;
}
