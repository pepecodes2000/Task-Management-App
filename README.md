Esta es mi solucion al ejercicio planteado.

# 📌 Task Management App

Una aplicación web para gestionar tareas, desarrollada con **Angular** en el frontend y **Node.js con Express y PostgreSQL** en el backend.

## 🚀 Tecnologías Utilizadas

### 🌐 Frontend
- **Angular (Standalone Components)** (Framework para el frontend)
- **Bootstrap 5** (Para estilos y diseño responsivo)
- **NgClass & NgIf** (Para manejo dinámico de estilos y condiciones)
- **HttpClient** (Para comunicación con el backend)

### ⚙️ Backend
- **Node.js con Express** (Framework para manejar el servidor y API REST)
- **PostgreSQL** (Base de datos para almacenar las tareas)
- **Cors** (Para permitir peticiones desde el frontend)

---

## 📂 Instalación y Configuración

### 🔹 Clonar el repositorio o descargar el .zip y descomprimir
```sh 
  git clone https://github.com/tu-repo/task-management-app.git 
  cd task-management-app
```

### 🔹 Configurar el Backend
1. **Instalar dependencias:**
```sh
cd backend
npm install
```
2. **Configurar variables de entorno:**
   - Crear un archivo `.env` en la carpeta `backend` y agregar:
     ```env
     DB_HOST=localhost
     DB_USER=tu_usuario
     DB_PASSWORD=tu_password
     DB_NAME=task_db
     DB_PORT=5432
     SERVER_PORT=3000
     ```
   - Esto define la conexión con PostgreSQL y el puerto del servidor.
3. **Ejecutar el servidor:**
```sh
npm run dev
```
4. **El backend se ejecutará en:** `http://localhost:3000`

Si es la primera vez que usas PostgreSQL, asegúrate de crear la base de datos:
Tambien puedes crear la tabla pero el backend tambien lo creara por ti
```sql
CREATE DATABASE task_db;
CREATE TABLE IF NOT EXISTS tasks (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description TEXT,
                status BOOLEAN DEFAULT false,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
```
---


### 🔹 Configurar el Frontend
1. **Instalar Angular CLI** *(si no lo tienes ya instalado)*:
```sh
npm install -g @angular/cli
```
2. **Instalar dependencias:**
```sh
cd frontend
npm install
```
3. **Ejecutar la aplicación:**
```sh
ng serve --o
```
4. **El frontend se ejecutará en:** `http://localhost:4200`

---

## 🌍 API del Backend

| Método  | Endpoint          | Descripción                         |
|---------|------------------|-------------------------------------|
| GET     | `/tasks`         | Obtener todas las tareas           |
| POST    | `/tasks`         | Crear una nueva tarea              |
| PUT     | `/tasks/:id`     | Actualizar una tarea por ID        |
| DELETE  | `/tasks/:id`     | Eliminar una tarea por ID          |

---

## 🎯 Funcionalidades
✅ **Agregar tareas con título y descripción**
✅ **Marcar tareas como completadas o pendientes**
✅ **Eliminar tareas**
✅ **Filtrar tareas (todas, completadas, pendientes)**
✅ **Interfaz responsiva y atractiva con Bootstrap**
✅ **Conexión en tiempo real entre frontend y backend**

---

## 🛠️ Mejoras Futuras que se podian poner
- 📅 **Agregar fechas de vencimiento a las tareas**
- 📌 **Sistema de prioridades (Alta, Media, Baja)**
- 📊 **Dashboard con estadísticas de tareas completadas y pendientes**
- 🔔 **Notificaciones para recordar tareas importantes**

---

## 💡 Contribución
Si deseas contribuir, ¡abre un PR o envíame sugerencias! 🚀



