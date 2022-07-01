import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Language } from 'src/app/core/interfaces/guide';
import { Vacancy } from 'src/app/interfaces/vacancy';
import { VacancyDataService } from '../../services/vacancy-data.service';

@Component({
  selector: 'app-vacancy-details',
  templateUrl: './vacancy-details.component.html',
  styleUrls: ['./vacancy-details.component.scss']
})
export class VacancyDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private vacancySrv: VacancyDataService) {
    const { id } = route.snapshot.params;
    this.vacancySrv.getVacancyById(id).subscribe({
      next: (vacancy?: Vacancy) => {
        if (!vacancy) return;
        const { title, description, vacancyCount, salaryMax, salaryMin, availability, languages } = vacancy;
        this.title = title;
        this.description = description ?? 'Sin descripción';
        this.vacancyCount = vacancyCount;
        this.maxSalary = salaryMax;
        this.minSalary = salaryMin;
        this.availability = availability;
        this.languages = languages;
      }
    })
  }

  ngOnInit(): void {
  }

  public title = "";
  public description = "";
  public vacancyCount = 0;
  public minSalary = 0;
  public maxSalary = 0;
  public availability = "";
  public languages: Language[] = [];


}
