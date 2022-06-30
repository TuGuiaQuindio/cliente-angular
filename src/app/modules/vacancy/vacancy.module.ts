import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyRoutingModule } from './vacancy-routing.module';
import { VacancyFormComponent } from './vacancy-form/vacancy-form.component';
import { CreateVacancyPageComponent } from './create-vacancy-page/create-vacancy-page.component';
import { SharedModule } from '../shared/shared.module';
import { SettingsFormModule } from '../settings-form/settings-form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LanguageFormModule } from '../language-form/language-form.module';
import { VacanciesComponent } from './components/vacancies/vacancies.component';

@NgModule({
  declarations: [
    VacancyFormComponent,
    CreateVacancyPageComponent,
    VacanciesComponent
  ],
  imports: [
    CommonModule,
    VacancyRoutingModule,
    SharedModule,
    SettingsFormModule,
    ReactiveFormsModule,
    LanguageFormModule
  ]
})
export class VacancyModule { }
