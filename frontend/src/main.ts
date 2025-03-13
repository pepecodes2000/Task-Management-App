// Author: José Geovanny Mejía Ramos / Frontend Developer
// Date: 2025 / 03 / 13
// Este archivo es el punto de entrada de la aplicación Angular. 
// Aquí se importan los módulos necesarios y se inicia la aplicación.

import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // Importar HttpClient
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Asegura que HttpClient esté disponible
    FormsModule // Habilita FormsModule para ngModel
  ]
}).catch(err => console.error(err));
