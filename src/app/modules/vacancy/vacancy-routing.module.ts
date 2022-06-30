import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateVacancyPageComponent } from './create-vacancy-page/create-vacancy-page.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';

const routes: Routes = [
  { path: '', component: VacanciesComponent },
  { path: 'create', component: CreateVacancyPageComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VacancyRoutingModule { }
