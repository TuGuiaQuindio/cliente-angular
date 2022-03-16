import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './components/contenedores/register/register.component';
import { ContactoComponent } from './components/contenedores/contacto/contacto.component';

// Se crea array que tendra las rutas
const routes: Routes = [
  // Cada objeto sera una ruta
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'register', component: RegisterComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'home', loadChildren: () => import('./modules/landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
