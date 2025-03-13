// Rutas de la API RESTful para las tareas
// En este archivo se definen las rutas de la API RESTful para las tareas. 
// Se importan las funciones del controlador taskController.js y se definen las rutas para obtener todas las tareas, 
// crear una nueva tarea, actualizar una tarea y eliminar una tarea.

import { Router } from "express";
import { getAllTasks, createTask, updateTask, deleteTask } from "../controllers/taskController.js";

const router = Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
