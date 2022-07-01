import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vacancy } from 'src/app/interfaces/vacancy';
import { VacancyDataService } from '../../services/vacancy-data.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent implements OnInit {

  constructor(private vacancySrv: VacancyDataService, private router: Router) {
    this.vacancySrv.getVacancies()
      .subscribe({
        next: (vacancies) => {
          this.vacancies = vacancies;
        }
      })
  }

  public vacancies: Vacancy[] = [];

  ngOnInit(): void {
  }

  public onAddVacancy() {
    this.router.navigateByUrl('/vacancy/create');
  }

}
