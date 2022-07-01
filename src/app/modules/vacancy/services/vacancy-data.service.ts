import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { VacancyServicesModule } from '../vacancy-services.module';

@Injectable({
  providedIn: VacancyServicesModule
})
export class VacancyDataService {

  constructor() { }

  public getVacancies() {
    return of([

    ])
  }
}
