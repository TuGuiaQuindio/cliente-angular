import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateVacancyPageComponent } from './create-vacancy-page/create-vacancy-page.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';
import { VacancyDetailsComponent } from './components/vacancy-details/vacancy-details.component';

const routes: Routes = [
  { path: '', component: VacanciesComponent },
  { path: 'create', component: CreateVacancyPageComponent },
  { path: ':id', component: VacancyDetailsComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VacancyRoutingModule { }
