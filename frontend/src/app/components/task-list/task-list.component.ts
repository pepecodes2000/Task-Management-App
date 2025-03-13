// Author: José Geovanny Mejía Ramos / Frontend Developer
// Date: 2025 / 03 / 13
// Este archivo se encarga de la lógica de la lista de tareas, se encarga de cargar las tareas, 
// aplicar filtros y cambiar el estado de las tareas.

import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskFormComponent } from '../task-form/task-form.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'] ,
  standalone: true,
  imports: [TaskItemComponent, TaskFormComponent, NgForOf],
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  filteredTasks: any[] = [];
  filter: string = 'all'; // Estado del filtro

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
      this.applyFilter();
    });
  }

  applyFilter() {
    if (this.filter === 'completed') {
      this.filteredTasks = this.tasks.filter(task => task.status);
    } else if (this.filter === 'pending') {
      this.filteredTasks = this.tasks.filter(task => !task.status);
    } else {
      this.filteredTasks = [...this.tasks];
    }
  }

  setFilter(filter: string) {
    this.filter = filter;
    this.applyFilter();
  }
}