import connectDB from "./connectDB/connectDB";
import express from "express";
import apiRouter from './router/api';

const app = express();

const port = 4000;

try {
  const connect = async () => {
    await connectDB.initialize();
  };
  connect();
  console.log(`Data Source has been initialized`);
} catch (error) {
  console.error(`Data Source initialization error`, error);
}

app.use("/api", apiRouter);

app.listen(port, ()=>{
    return console.log(`listen to port ${port}`)
})
