// import connectDB from "./connectDB/connectDB";
import express from "express";
import apiRouter from './router/api';
import pool from './connectDB/connectDB';

const app = express();

const port = 5000;

// try {
//   const connect = async () => {
//     await connectDB.initialize();
//   };
//   connect();
//   console.log(`Data Source has been initialized`);
// } catch (error) {
//   console.error(`Data Source initialization error`, error);
// }

app.get('/test', async (req, res)=>{
  try {
    const result = await pool.query('SELECT * FROM exemple');
    console.log(result);
    res.send(result.rows);

  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
})

app.use("/api", apiRouter);

app.listen(port, ()=>{
    return console.log(`listen to port ${port}`)
})
