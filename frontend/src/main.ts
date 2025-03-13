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
