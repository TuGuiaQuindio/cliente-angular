import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Se crea array que tendra las rutas
const routes: Routes = [
  // Cada objeto sera una ruta
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./modules/landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'choose', loadChildren: () => import('./modules/choose-register/choose-register.module').then(m => m.ChooseRegisterModule) },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
