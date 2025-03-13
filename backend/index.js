// Función: Inicializa el servidor y escucha en el puerto 3000
// Se importa express y cors para poder utilizarlos en el servidor
// Se importan las rutas de las tareas desde taskRoutes.js
// Se crea una instancia de express y se configura para usar cors y json
// Se definen las rutas de las tareas en el servidor
// Se define el puerto en el que escuchará el servidor
// Se inicia el servidor y se muestra un mensaje en consola con la URL del servidor

import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";

// Middlewares
const app = express();
app.use(cors());
app.use(json());

app.use("/tasks", taskRoutes);// Rutas de la API RESTful para las tareas

// Server
// Se define el puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
