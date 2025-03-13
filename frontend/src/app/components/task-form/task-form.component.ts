// Author: José Geovanny Mejía Ramos / Frontend Developer
// Date: 2025 / 03 / 13
// Codigo de la clase TaskFormComponent
// Importamos las dependencias necesarias
// Importamos el decorador Component de Angular core
// Importamos el decorador Output y EventEmitter de Angular core
// Importamos el servicio TaskService
// Importamos NgIf de Angular common
// Importamos FormsModule de Angular forms

import { Component, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { NgIf } from '@angular/common'; 
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  standalone: true,
  imports: [NgIf, FormsModule], 
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  title = '';
  description = '';
  showForm = false;
  showTitleError = false; 
  showDescriptionError = false; 
  
  @Output() taskAdded = new EventEmitter<void>();

  constructor(private taskService: TaskService) {}

  toggleForm() {
    this.showForm = !this.showForm;
    this.showTitleError = false;
    this.showDescriptionError = false;
  }

  addTask() {
    this.showTitleError = !this.title.trim();
    this.showDescriptionError = !this.description.trim();

    if (this.showTitleError || this.showDescriptionError) {
      return;
    }
    
    const newTask = {
      id: Date.now(),
      title: this.title,
      description: this.description,
      status: false
    };
    
    this.taskService.addTask(newTask).subscribe(() => {
      this.taskAdded.emit();
      this.title = '';
      this.description = '';
      this.showForm = false;
    });
  }
}