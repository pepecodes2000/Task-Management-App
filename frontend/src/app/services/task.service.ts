// Author: José Geovanny Mejía Ramos / Frontend
// Date: 2025 / 03 / 13
// Este archivo se encarga de definir un servicio para realizar peticiones HTTP al backend
// y obtener, agregar, actualizar y eliminar tareas de la base de datos.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaz para definir la estructura de una tarea
export interface Task {
  id?: number;
  title: string;
  description: string;
  status: boolean;
}

@Injectable({
  providedIn: 'root' // Indica que este servicio está disponible globalmente
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks'; // URL del backend

  constructor(private http: HttpClient) {} // Asegurar inyección de HttpClient

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
