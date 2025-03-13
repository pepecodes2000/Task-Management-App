import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { NgClass } from '@angular/common'; 

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
  standalone: true,
  imports: [NgClass] 
})
export class TaskItemComponent {
  @Input() task: any;
  @Output() taskUpdated = new EventEmitter<void>();
  @Output() taskDeleted = new EventEmitter<void>();

  constructor(private taskService: TaskService) {}

  toggleComplete(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.task.status = checkbox.checked;
    this.taskService.updateTask(this.task).subscribe(() => this.taskUpdated.emit());
  }

  deleteTask() {
    this.taskService.deleteTask(this.task.id).subscribe(() => this.taskDeleted.emit());
  }
}

