import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

const routes: Routes = [{
  path: '', component: SettingsComponent,
  loadChildren: () => import('./routes/settings-routes.module').then(m => m.SettingsRoutesModule),
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
