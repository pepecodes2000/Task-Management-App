# 📌 Task Management App - Frontend

Este es el frontend de la aplicación **Task Management App**, desarrollado con **Angular** y utilizando **Bootstrap 5** para el diseño responsivo.

## 🚀 Tecnologías Utilizadas

- **Angular (Standalone Components)** (Framework para la interfaz de usuario)
- **Bootstrap 5** (Para estilos y diseño responsivo)
- **NgClass & NgIf** (Para manejo dinámico de estilos y condiciones)
- **HttpClient** (Para comunicación con el backend en Node.js)

---

## 📂 Instalación y Configuración

### 🔹 Clonar el repositorio
```sh
  git clone https://github.com/tu-repo/task-management-app.git
  cd task-management-app/frontend
```

### 🔹 Instalar Angular CLI *(si no lo tienes ya instalado)*
```sh
npm install -g @angular/cli
```

### 🔹 Instalar dependencias
```sh
npm install
```

### 🔹 Ejecutar la aplicación
```sh
ng serve --o
```
La aplicación se abrirá en `http://localhost:4200`

---

## 🎯 Funcionalidades

✅ **Agregar tareas con título y descripción**  
✅ **Marcar tareas como completadas o pendientes**  
✅ **Eliminar tareas**  
✅ **Filtrar tareas (todas, completadas, pendientes)**  
✅ **Interfaz responsiva y atractiva con Bootstrap**  
✅ **Conexión en tiempo real con el backend en Node.js**  

---

## 📂 Estructura del Proyecto

```
frontend/
│── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── task-list/
│   │   │   ├── task-item/
│   │   │   ├── task-form/
│   │   ├── services/
│   │   │   ├── task.service.ts
│   │   ├── app.component.ts
│── angular.json
│── package.json
```

- **`components/`** → Contiene los componentes de la app (Lista, Item y Formulario de Tareas).  
- **`services/`** → Contiene `task.service.ts`, que maneja las peticiones HTTP al backend.  
- **`app.component.ts`** → Componente raíz de la aplicación.  

---

## 🛠️ Mejoras Futuras

- 📅 **Agregar fechas de vencimiento a las tareas**  
- 📌 **Sistema de prioridades (Alta, Media, Baja)**  
- 🎨 **Mejorar la interfaz con más animaciones y transiciones**  

---

