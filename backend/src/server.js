// 1. importaciones 
import "dotenv/config"
import express, { Router } from  "express";
import cors from "cors";
import connectDB from "./config/db.js";
import vehiculosRouter from "./routers/vehiculos.js";
import dns from 'node:dns';
if (process.env.NODE_ENV !== 'production') {
  dns.setServers(['8.8.8.8', '8.8.4.4',]);
}
// importaciones para acceder a las rutas del front - configurar el acceso al front
import path from "path";
import { fileURLToPath } from "url";


const server = express();
const PORT = process.env.PORT || 3000;
connectDB();

// configuraciones para acceder al front
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


server.use(cors());
server.use(express.json());
server.use('/vehiculos', vehiculosRouter);

// vamos a hacer la petición para que se muestre nuestro front
// Servir archivos estáticos desde la carpeta "public"
server.use(express.static(path.join(__dirname, "public")));

// Ruta principal para servir index.html
server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

/*server.get("/",(req, res)=>{
    res.send("Hello World!");
});*/

server.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});