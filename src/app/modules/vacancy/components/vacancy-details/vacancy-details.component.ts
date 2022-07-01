import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faker } from '@faker-js/faker';
import { Language } from 'src/app/core/interfaces/guide';
import { Company } from 'src/app/interfaces/company';
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

  public company?: Company = {
    name: faker.company.companyName(),
    description: faker.lorem.paragraphs(2),
    tel: faker.phone.number(),
    nit: faker.random.alphaNumeric(10),
    email: faker.internet.email(),
    address: [Math.random() * 100, Math.random() * 100],
  };


}
