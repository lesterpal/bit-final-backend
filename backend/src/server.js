import "dotenv/config"
import express, { Router } from  "express";
import cors from "cors";
import connectDB from "./config/db.js";
import vehiculosRouter from "./routers/vehiculos.js";
import dns from 'node:dns';
if (process.env.NODE_ENV !== 'production') {
  dns.setServers(['8.8.8.8', '8.8.4.4',]);
}

const server = express();
const PORT = process.env.PORT || 3000;

connectDB();

server.use(cors());
server.use(express.json());
server.use('/vehiculos', vehiculosRouter);

server.get("/",(req, res)=>{
    res.send("Hello World!");
});

server.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});