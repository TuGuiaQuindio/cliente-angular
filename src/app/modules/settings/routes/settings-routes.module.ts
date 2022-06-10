import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './security/security.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';

const routes: Routes = [
  { path: 'security', component: SecurityComponent },
  { path: 'information', component: PersonalInformationComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SettingsRoutesModule { }
