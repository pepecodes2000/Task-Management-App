// Author: José Geovanny Mejía Ramos / Frontend Developer
// Date: 2025 / 03 / 13
// Ruta inicial de la aplicación
// este archivo es el punto de entrada de la aplicación Angular
// realiza la configuración de la aplicación y la inicia

import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // Importar HttpClient
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { TaskListComponent } from './components/task-list/task-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-navbar></app-navbar>
    <div class="container">
      <app-task-list></app-task-list>
    </div>
  `,
  imports: [TaskListComponent, NavbarComponent]
})
export class AppComponent {}

// Configuración de la aplicación con HttpClient y FormsModule
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Asegurar HttpClient para toda la app
    { provide: FormsModule } // Asegurar FormsModule para ngModel
  ]
}).catch(err => console.error(err));
