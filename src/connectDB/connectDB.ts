// import { DataSource } from "typeorm";
// import dotenv from "dotenv";
// import { Client } from '../entity/Client';
// import {Adress} from '../entity/Adress';
// import {Order} from '../entity/Order';
// import {Product} from '../entity/Product';
// import {Payment} from '../entity/Payment';

// dotenv.config();

// const connectDB = new DataSource({
//   type: "postgres",
//   host: process.env.DB_HOSTNAME,
//   port: Number(process.env.DB_PORTNAME),
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   entities: [Client, Adress, Order, Product, Payment],
//   synchronize: true,
// });



// export default connectDB;

const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOSTNAME,
  port: Number(process.env.DB_PORTNAME),
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default pool;

