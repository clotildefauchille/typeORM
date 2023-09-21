    import {Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
    import {Adress} from './Adress';
    import {Order} from './Order';
    import {Payment} from './Payment';
    
    @Entity("client")
    export class Client extends BaseEntity {
      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      first_name: string;

      @Column()
      last_name: string;

      @Column({
        unique: true,
      })
      email: string;

      @OneToMany(() => Adress, (adress) => adress.client)
      adresses: Adress[];

      @OneToMany(() => Order, (order) => order.client)
      orders: Order[];

      @OneToMany(()=>Payment, (payment)=>payment.client)
      payments: Payment[]
    }