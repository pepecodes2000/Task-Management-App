// Constrolador de tareas
// En el archivo controllers/taskController.js se definen las funciones 
// que se encargan de manejar las peticiones de la API RESTful para las tareas.
// Se importa el modelo Task desde models/Task.js y se definen las funciones 
// getAllTasks, createTask, updateTask y deleteTask.

import Task from "../models/Task.js";

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.getAll();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener tareas" });
    }
};

export const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title) return res.status(400).json({ error: "El título es requerido" });
        
        const newTask = await Task.create(title, description);
        res.json(newTask);
    } catch (error) {
        res.status(500).json({ error: "Error al crear la tarea" });
    }
};

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const updatedTask = await Task.update(id, status);
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar la tarea" });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Task.delete(id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar la tarea" });
    }
};
