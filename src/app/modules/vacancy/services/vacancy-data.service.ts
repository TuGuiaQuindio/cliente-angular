import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { VacancyServicesModule } from '../vacancy-services.module';
import { Vacancy } from '../../../interfaces/vacancy';
import { faker } from '@faker-js/faker';
import { AVAILABILITY_MAP } from 'src/app/constants';

@Injectable({
  providedIn: VacancyServicesModule
})
export class VacancyDataService {

  constructor() { }

  public vacancies?: Vacancy[];

  public getVacancies() {
    const createVacancy = (): Vacancy => {
      return {
        id: faker.random.alphaNumeric(5),
        title: faker.name.jobTitle(),
        description: faker.lorem.sentence(Math.floor(Math.random() * 60)),
        salaryMin: parseFloat(faker.commerce.price(10000, 30000)),
        salaryMax: parseFloat(faker.commerce.price(50000, 100000)),
        vacancyCount: faker.mersenne.rand(0, 10),
        availability: faker.helpers.arrayElement(Object.keys(AVAILABILITY_MAP))
      }
    }
    if (!this.vacancies) this.vacancies = Array.from({ length: 10 }, createVacancy);
    return of(this.vacancies);
  }
}
