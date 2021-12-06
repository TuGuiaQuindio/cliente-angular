import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/contenedores/home/home.component';
import { LoginComponent } from './components/contenedores/login/login.component';
import { RegisterComponent } from './components/contenedores/register/register.component';
import { ContactoComponent } from './components/contenedores/contacto/contacto.component';

// Se crea array que tendra las rutas
const routes: Routes = [
  // Cada objeto sera una ruta
  {path: '' , component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'contacto', component: ContactoComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
