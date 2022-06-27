import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { GoToDashboardGuard } from './core/guards/go-to-dashboard.guard';

// Se crea array que tendra las rutas
const routes: Routes = [
  // Cada objeto sera una ruta
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./modules/landing-page/landing-page.module').then(m => m.LandingPageModule), canActivate: [GoToDashboardGuard] },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule), canActivate: [GoToDashboardGuard] },
  { path: 'signup', loadChildren: () => import('./modules/signup/signup.module').then(m => m.SignupModule), canActivate: [GoToDashboardGuard] },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },
  { path: 'vacancy', loadChildren: () => import('./modules/vacancy/vacancy.module').then(m => m.VacancyModule), canActivate: [AuthGuard] },
  { path: 'not-found', loadChildren: () => import('./modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
  { path: 'settings', loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule), canActivate: [AuthGuard] },
  { path: 'profile', loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule) },
  { path: '**', pathMatch: 'full', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
