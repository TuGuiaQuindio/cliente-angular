import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './security/security.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { BaseRouteComponent } from './base-route/base-route.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { LanguagesComponent } from './languages/languages.component';
import { SettingsMainPageComponent } from './settings-main-page/settings-main-page.component';

const routes: Routes = [
  { path: '', component: SettingsMainPageComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'information', component: PersonalInformationComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: 'languages', component: LanguagesComponent },
];

@NgModule({
  declarations: [
    BaseRouteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SettingsRoutesModule { }
