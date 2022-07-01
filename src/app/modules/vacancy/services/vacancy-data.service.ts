import { Injectable } from '@angular/core';
import { concatMap, find, of } from 'rxjs';
import { VacancyServicesModule } from '../vacancy-services.module';
import { Vacancy } from '../../../interfaces/vacancy';
import { faker } from '@faker-js/faker';
import { AVAILABILITY_MAP } from 'src/app/constants';
import { Language } from 'src/app/core/interfaces/guide';

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
        hasTransport: Math.random() < 0.7,
        firstAid: Math.random() < 0.3,
        vacancyCount: faker.mersenne.rand(0, 10),
        availability: faker.helpers.arrayElement(Object.keys(AVAILABILITY_MAP)),
        languages: Array.from({ length: Math.floor(Math.random() * 5) }, (): Language => {
          return { name: faker.random.word(), level: Math.floor(Math.random() * 5) }
        }),
      }
    };
    if (!this.vacancies) this.vacancies = Array.from({ length: 10 }, createVacancy);
    return of(this.vacancies);
  }

  public getVacancyById(id: string) {
    if (!this.vacancies) return of(undefined);
    return of(this.vacancies).pipe(
      concatMap(vacancies => vacancies),
      find(vacancy => vacancy.id == id)
    )
  }
}
