// Importamos la función 'query' desde el archivo 'db.js'
// Modelo Task
// Se importa la función 'query' desde el archivo 'db.js'
// Se crea la función 'createTable' que crea la tabla 'tasks' si no existe
// Se crea la función 'initialize' que ejecuta la función 'createTable'
// Se crea la función 'getAll' que obtiene todas las tareas de la base de datos
// Se crea la función 'create' que crea una nueva tarea en la base de datos
// Se crea la función 'update' que actualiza el estado de una tarea en la base de datos
// Se crea la función 'delete' que elimina una tarea de la base de datos

import { query } from "../config/db.js";

const createTable = async () => {
    try {
        await query(`
            CREATE TABLE IF NOT EXISTS tasks (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description TEXT,
                status BOOLEAN DEFAULT false,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log("Tabla 'tasks' verificada o creada correctamente.");
    } catch (error) {
        console.error("Error al crear/verificar la tabla:", error);
    }
};

const Task = {
    initialize: async () => {
        await createTable();
    },

    getAll: async () => {
        const result = await query("SELECT * FROM tasks");
        return result.rows;
    },

    create: async (title, description) => {
        const result = await query(
            "INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *",
            [title, description]
        );
        return result.rows[0];
    },

    update: async (id, status) => {
        const result = await query(
            "UPDATE tasks SET status = $1 WHERE id = $2 RETURNING *",
            [status, id]
        );
        return result.rows[0];
    },

    delete: async (id) => {
        await query("DELETE FROM tasks WHERE id = $1", [id]);
        return { message: "Tarea eliminada" };
    },
};

export default Task;

