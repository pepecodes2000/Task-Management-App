// se requiere el modulo pg para la conexion a la base de datos
// se requiere el modulo dotenv para la configuracion de las variables de entorno
// se crea una nueva instancia de Pool para la conexion a la base de datos
// se exporta la variable pool para poder ser usada en otros archivos
// se configuran las variables de entorno para la conexion a la base de datos

import pkg from 'pg';
const { Pool } = pkg;
import "dotenv/config";

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT || 5432,
});

export const query = (text, params) => pool.query(text, params);

export default pool;
